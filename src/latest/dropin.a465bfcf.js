var e,
  t,
  n,
  r,
  i,
  a,
  o,
  s,
  d,
  l,
  c,
  p,
  u,
  h =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {};
function m(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if ("function" == typeof t) {
    var n = function e() {
      if (this instanceof e) {
        var n = [null];
        return n.push.apply(n, arguments), new (Function.bind.apply(t, n))();
      }
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (t) {
      var r = Object.getOwnPropertyDescriptor(e, t);
      Object.defineProperty(
        n,
        t,
        r.get
          ? r
          : {
              enumerable: !0,
              get: function () {
                return e[t];
              },
            }
      );
    }),
    n
  );
}
var y = "function" == typeof Object.assign ? Object.assign : f;
function f(e) {
  var t, n, r;
  for (t = 1; t < arguments.length; t++)
    for (r in (n = arguments[t])) n.hasOwnProperty(r) && (e[r] = n[r]);
  return e;
}
var E = { assign: y, _assign: f },
  _ = "function" == typeof h.atob ? h.atob : g;
function g(e) {
  var t,
    n,
    r,
    i,
    a,
    o,
    s,
    d,
    l = RegExp(
      "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"
    ),
    c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    p = "";
  if (!l.test(e))
    throw Error("Non base64 encoded input passed to window.atob polyfill");
  d = 0;
  do
    (i = c.indexOf(e.charAt(d++))),
      (a = c.indexOf(e.charAt(d++))),
      (o = c.indexOf(e.charAt(d++))),
      (s = c.indexOf(e.charAt(d++))),
      (t = ((63 & i) << 2) | ((a >> 4) & 3)),
      (n = ((15 & a) << 4) | ((o >> 2) & 15)),
      (r = ((3 & o) << 6) | (63 & s)),
      (p +=
        String.fromCharCode(t) +
        (n ? String.fromCharCode(n) : "") +
        (r ? String.fromCharCode(r) : ""));
  while (d < e.length);
  return p;
}
var P = {
    atob: function (e) {
      return _.call(h, e);
    },
    _atob: g,
  },
  C = {
    paymentOptionIDs: {
      card: "card",
      paypal: "paypal",
      paypalCredit: "paypalCredit",
      applePay: "applePay",
      venmo: "venmo",
      googlePay: "googlePay",
    },
    paymentMethodTypes: {
      card: "CreditCard",
      paypal: "PayPalAccount",
      paypalCredit: "PayPalAccount",
      applePay: "ApplePayCard",
      venmo: "VenmoAccount",
      googlePay: "AndroidPayCard",
    },
    analyticsKinds: {
      CreditCard: "card",
      PayPalAccount: "paypal",
      ApplePayCard: "applepay",
      VenmoAccount: "venmo",
      AndroidPayCard: "googlepay",
    },
    paymentMethodCardTypes: {
      Visa: "visa",
      MasterCard: "master-card",
      "American Express": "american-express",
      "Diners Club": "diners-club",
      Discover: "discover",
      JCB: "jcb",
      UnionPay: "unionpay",
      Maestro: "maestro",
      Elo: "elo",
      Hiper: "hiper",
      Hipercard: "hipercard",
    },
    configurationCardTypes: {
      visa: "Visa",
      "master-card": "MasterCard",
      "american-express": "American Express",
      "diners-club": "Discover",
      discover: "Discover",
      jcb: "JCB",
      unionpay: "UnionPay",
      maestro: "Maestro",
      elo: "Elo",
      hiper: "Hiper",
      hipercard: "Hipercard",
    },
    dependencySetupStates: {
      DONE: "done",
      FAILED: "failed",
      INITIALIZING: "initializing",
      NOT_ENABLED: "not-enabled",
    },
    errors: {
      NO_PAYMENT_METHOD_ERROR: "No payment method is available.",
      DEVELOPER_MISCONFIGURATION_MESSAGE:
        "Developer Error: Something went wrong. Check the console for details.",
    },
    ANALYTICS_REQUEST_TIMEOUT_MS: 2e3,
    ANALYTICS_PREFIX: "web.dropin.",
    CHANGE_ACTIVE_PAYMENT_METHOD_TIMEOUT: 200,
    CHECKOUT_JS_SOURCE: "https://www.paypalobjects.com/api/checkout.min.js",
    GOOGLE_PAYMENT_SOURCE: "https://pay.google.com/gp/p/js/pay.js",
    INTEGRATION: "dropin2",
    PAYPAL_CHECKOUT_SCRIPT_ID: "braintree-dropin-paypal-checkout-script",
    GOOGLE_PAYMENT_SCRIPT_ID: "braintree-dropin-google-payment-script",
    DATA_COLLECTOR_SCRIPT_ID: "braintree-dropin-data-collector-script",
    STYLESHEET_ID: "braintree-dropin-stylesheet",
  };
function b(e, t) {
  return (
    (t = null == t ? "" : t),
    e.reduce(function (e, n) {
      return (e[n] = t + n), e;
    }, {})
  );
}
var T = b,
  A = T;
function I(e) {
  if (!I.types.hasOwnProperty(e.type))
    throw Error(e.type + " is not a valid type.");
  if (!e.code) throw Error("Error code required.");
  if (!e.message) throw Error("Error message required.");
  (this.name = "BraintreeError"),
    (this.code = e.code),
    (this.message = e.message),
    (this.type = e.type),
    (this.details = e.details);
}
(I.prototype = Object.create(Error.prototype)),
  (I.prototype.constructor = I),
  (I.types = A(["CUSTOMER", "MERCHANT", "NETWORK", "INTERNAL", "UNKNOWN"])),
  (I.findRootError = function (e) {
    return e instanceof I && e.details && e.details.originalError
      ? I.findRootError(e.details.originalError)
      : e;
  });
var D = I,
  N = { BRAINTREE_VERSION: "2018-05-10" },
  O = {},
  x = {
    get exports() {
      return O;
    },
    set exports(v) {
      O = v;
    },
  },
  F = function (e) {
    return -1 !== (e = e || window.navigator.userAgent).indexOf("Trident/7");
  },
  M = F,
  w = function (e) {
    return -1 !== (e = e || window.navigator.userAgent).indexOf("MSIE") || M(e);
  };
x.exports = w;
var L = {},
  S = {
    get exports() {
      return L;
    },
    set exports(v) {
      L = v;
    },
  },
  R = function (e) {
    return -1 !== (e = e || window.navigator.userAgent).indexOf("MSIE 9");
  };
S.exports = R;
var k = O,
  V = L,
  z = { isIe: k, isIe9: V },
  U = z,
  H = {
    tokenize_credit_cards: "payment_methods/credit_cards",
    configuration: "configuration",
  },
  B = ["creditCard.options.unionPayEnrollment"];
function j(e) {
  this._config = e.graphQL;
}
function W(e) {
  return B.some(function (t) {
    return (
      void 0 !==
      t.split(".").reduce(function (e, t) {
        return e && e[t];
      }, e)
    );
  });
}
(j.prototype.getGraphQLEndpoint = function () {
  return this._config.url;
}),
  (j.prototype.isGraphQLRequest = function (e, t) {
    var n,
      r = this.getClientApiPath(e);
    return (
      !(!this._isGraphQLEnabled() || !r || U.isIe9()) &&
      ((n = this._config.features.some(function (e) {
        return H[e] === r;
      })),
      !W(t) && n)
    );
  }),
  (j.prototype.getClientApiPath = function (e) {
    var t,
      n = e.split("/client_api/v1/");
    return n.length > 1 && (t = n[1].split("?")[0]), t;
  }),
  (j.prototype._isGraphQLEnabled = function () {
    return Boolean(this._config);
  });
var K = j;
function Y(e) {
  var t = !1;
  return function () {
    t || ((t = !0), e.apply(null, arguments));
  };
}
var G = Y;
function q() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
    var t = (16 * Math.random()) | 0;
    return ("x" === e ? t : (3 & t) | 8).toString(16);
  });
}
var Q = q;
function Z(e) {
  var t;
  for (t in e) if (e.hasOwnProperty(t)) return !0;
  return !1;
}
function J(e) {
  return (
    (e &&
      "object" == typeof e &&
      "number" == typeof e.length &&
      "[object Array]" === Object.prototype.toString.call(e)) ||
    !1
  );
}
function X(e) {
  return (e = e || window.location.href), /\?/.test(e);
}
function $(e) {
  return X((e = e || window.location.href))
    ? (e.split("?")[1] || "")
        .replace(/#.*$/, "")
        .split("&")
        .reduce(function (e, t) {
          var n = t.split("="),
            r = decodeURIComponent(n[0]),
            i = decodeURIComponent(n[1]);
          return (e[r] = i), e;
        }, {})
    : {};
}
function ee(e, t) {
  var n,
    r,
    i,
    a = [];
  for (i in e)
    e.hasOwnProperty(i) &&
      ((r = e[i]),
      (n = t ? (J(e) ? t + "[]" : t + "[" + i + "]") : i),
      "object" == typeof r
        ? a.push(ee(r, n))
        : a.push(encodeURIComponent(n) + "=" + encodeURIComponent(r)));
  return a.join("&");
}
function et(e, t) {
  return (
    (e = e || ""),
    null != t &&
      "object" == typeof t &&
      Z(t) &&
      ((e += -1 === e.indexOf("?") ? "?" : ""),
      (e += (-1 !== e.indexOf("=") ? "&" : "") + ee(t))),
    e
  );
}
var en = { parse: $, stringify: ee, queryify: et, hasQueryParams: X },
  er = Q,
  ei = en,
  ea = {};
function eo(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function es(e, t) {
  var n = document.createElement("script"),
    r = !1;
  return (
    (n.src = e),
    (n.async = !0),
    (n.onerror = function () {
      window[t]({ message: "error", status: 500 });
    }),
    (n.onload = n.onreadystatechange =
      function () {
        !r &&
          ((this.readyState &&
            "loaded" !== this.readyState &&
            "complete" !== this.readyState) ||
            ((r = !0), (n.onload = n.onreadystatechange = null)));
      }),
    n
  );
}
function ed(e) {
  try {
    delete window[e];
  } catch (t) {
    window[e] = null;
  }
}
function el(e, t) {
  ea[t] = setTimeout(function () {
    (ea[t] = null),
      window[t]({ error: "timeout", status: -1 }),
      (window[t] = function () {
        ed(t);
      });
  }, e);
}
function ec(e, t, n) {
  window[n] = function (r) {
    var i = r.status || 500,
      a = null,
      o = null;
    delete r.status,
      i >= 400 || i < 200 ? (a = r) : (o = r),
      ed(n),
      eo(e),
      clearTimeout(ea[n]),
      t(a, o, i);
  };
}
function ep(t, n) {
  var r,
    i = "callback_json_" + er().replace(/-/g, ""),
    a = t.url,
    o = t.data,
    s = t.method,
    d = t.timeout;
  (a = ei.queryify(a, o)),
    ec((r = es((a = ei.queryify(a, { _method: s, callback: i })), i)), n, i),
    el(d, i),
    e || (e = document.getElementsByTagName("head")[0]),
    e.appendChild(r);
}
var eu = { request: ep },
  eh = "function" == typeof Object.assign ? Object.assign : em;
function em(e) {
  var t, n, r;
  for (t = 1; t < arguments.length; t++)
    for (r in (n = arguments[t])) n.hasOwnProperty(r) && (e[r] = n[r]);
  return e;
}
var ey = { assign: eh, _assign: em },
  ef = function (e, t) {
    if ("string" != typeof e) throw Error("Method must be a string");
    return (
      "get" !== e.toLowerCase() &&
        null != t &&
        (t = "string" == typeof t ? t : JSON.stringify(t)),
      t
    );
  },
  eE = function (e) {
    try {
      e = JSON.parse(e);
    } catch (e) {}
    return e;
  },
  e_ =
    "undefined" != typeof window &&
    window.XMLHttpRequest &&
    "withCredentials" in new window.XMLHttpRequest();
function ev() {
  return e_ ? new window.XMLHttpRequest() : new window.XDomainRequest();
}
var eg = { isAvailable: e_, getRequestObject: ev },
  eP = function (e) {
    return -1 === e.indexOf("_")
      ? e
      : e.toLowerCase().replace(/(\_\w)/g, function (e) {
          return e[1].toUpperCase();
        });
  },
  eC = ey.assign;
function eb(e) {
  var t = e.hasAuthenticationInsight,
    n = "mutation TokenizeCreditCard($input: TokenizeCreditCardInput!";
  return (
    t && (n += ", $authenticationInsightInput: AuthenticationInsightInput!"),
    (n +=
      ") {   tokenizeCreditCard(input: $input) {     token     creditCard {       bin       brandCode       last4       cardholderName       expirationMonth      expirationYear      binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }     } "),
    t &&
      (n +=
        "    authenticationInsight(input: $authenticationInsightInput) {      customerAuthenticationRegulationEnvironment    }"),
    (n += "  } }")
  );
}
function eT(e, t) {
  var n = e.creditCard,
    r = n && n.billingAddress,
    i = n && n.expirationDate,
    a = n && (n.expirationMonth || (i && i.split("/")[0].trim())),
    o = n && (n.expirationYear || (i && i.split("/")[1].trim())),
    s = {
      input: {
        creditCard: {
          number: n && n.number,
          expirationMonth: a,
          expirationYear: o,
          cvv: n && n.cvv,
          cardholderName: n && n.cardholderName,
        },
        options: {},
      },
    };
  return (
    t.hasAuthenticationInsight &&
      (s.authenticationInsightInput = {
        merchantAccountId: e.merchantAccountId,
      }),
    r && (s.input.creditCard.billingAddress = r),
    (s.input = eA(e, s.input)),
    s
  );
}
function eA(e, t) {
  var n;
  return (
    e.creditCard &&
    e.creditCard.options &&
    "boolean" == typeof e.creditCard.options.validate
      ? (n = e.creditCard.options.validate)
      : (e.authorizationFingerprint && e.tokenizationKey) ||
        e.authorizationFingerprint
      ? (n = !0)
      : e.tokenizationKey && (n = !1),
    "boolean" == typeof n && (t.options = eC({ validate: n }, t.options)),
    t
  );
}
function eI(e) {
  var t = {
    hasAuthenticationInsight: Boolean(
      e.authenticationInsight && e.merchantAccountId
    ),
  };
  return {
    query: eb(t),
    variables: eT(e, t),
    operationName: "TokenizeCreditCard",
  };
}
var eD = eI;
function eN(e) {
  var t =
    e.errors &&
    e.errors[0] &&
    e.errors[0].extensions &&
    e.errors[0].extensions.errorClass;
  return "VALIDATION" === t
    ? ex(e)
    : t
    ? eO(e)
    : {
        error: { message: "There was a problem serving your request" },
        fieldErrors: [],
      };
}
function eO(e) {
  return { error: { message: e.errors[0].message }, fieldErrors: [] };
}
function ex(e) {
  var t = eF(e.errors);
  return 0 === t.length
    ? { error: { message: e.errors[0].message } }
    : { error: { message: ew(t) }, fieldErrors: t };
}
function eF(e) {
  var t = [];
  return (
    e.forEach(function (e) {
      e.extensions &&
        e.extensions.inputPath &&
        eM(e.extensions.inputPath.slice(1), e, t);
    }),
    t
  );
}
function eM(e, t, n) {
  var r,
    i = t.extensions.legacyCode,
    a = e[0];
  if (1 === e.length) {
    n.push({ code: i, field: a, message: t.message });
    return;
  }
  n.forEach(function (e) {
    e.field === a && (r = e);
  }),
    r || ((r = { field: a, fieldErrors: [] }), n.push(r)),
    eM(e.slice(1), t, r.fieldErrors);
}
function ew(e) {
  return { creditCard: "Credit card is invalid" }[e[0].field];
}
var eL = eN,
  eS = eL,
  eR = {
    AMERICAN_EXPRESS: "American Express",
    DINERS: "Discover",
    DISCOVER: "Discover",
    ELO: "Elo",
    HIPER: "Hiper",
    HIPERCARD: "Hipercard",
    INTERNATIONAL_MAESTRO: "Maestro",
    JCB: "JCB",
    MASTERCARD: "MasterCard",
    UK_MAESTRO: "Maestro",
    UNION_PAY: "UnionPay",
    VISA: "Visa",
  },
  ek = { YES: "Yes", NO: "No", UNKNOWN: "Unknown" },
  eV = { PSDTWO: "psd2" };
function ez(e) {
  return e.data && !e.errors ? eU(e) : eS(e);
}
function eU(e) {
  var t,
    n,
    r = e.data.tokenizeCreditCard,
    i = r.creditCard,
    a = i.last4 ? i.last4.substr(2, 4) : "",
    o = i.binData;
  return (
    o &&
      ([
        "commercial",
        "debit",
        "durbinRegulated",
        "healthcare",
        "payroll",
        "prepaid",
      ].forEach(function (e) {
        o[e] ? (o[e] = ek[o[e]]) : (o[e] = "Unknown");
      }),
      ["issuingBank", "countryOfIssuance", "productId"].forEach(function (e) {
        o[e] || (o[e] = "Unknown");
      })),
    (t = {
      creditCards: [
        {
          binData: o,
          consumed: !1,
          description: a ? "ending in " + a : "",
          nonce: r.token,
          details: {
            cardholderName: i.cardholderName,
            expirationMonth: i.expirationMonth,
            expirationYear: i.expirationYear,
            bin: i.bin || "",
            cardType: eR[i.brandCode] || "Unknown",
            lastFour: i.last4 || "",
            lastTwo: a,
          },
          type: "CreditCard",
          threeDSecureInfo: null,
        },
      ],
    }),
    r.authenticationInsight &&
      ((n =
        r.authenticationInsight.customerAuthenticationRegulationEnvironment),
      (t.creditCards[0].authenticationInsight = {
        regulationEnvironment: eV[n] || n.toLowerCase(),
      })),
    t
  );
}
var eH = ez,
  eB =
    "query ClientConfiguration {   clientConfiguration {     analyticsUrl     environment     merchantId     assetsUrl     clientApiUrl     creditCard {       supportedCardBrands       challenges       threeDSecureEnabled       threeDSecure {         cardinalAuthenticationJWT       }     }     applePayWeb {       countryCode       currencyCode       merchantIdentifier       supportedCardBrands     }     googlePay {       displayName       supportedCardBrands       environment       googleAuthorization       paypalClientId     }     ideal {       routeId       assetsUrl     }     kount {       merchantId     }     masterpass {       merchantCheckoutId       supportedCardBrands     }     paypal {       displayName       clientId       privacyUrl       userAgreementUrl       assetsUrl       environment       environmentNoNetwork       unvettedMerchant       braintreeClientId       billingAgreementsEnabled       merchantAccountId       currencyCode       payeeEmail     }     unionPay {       merchantAccountId     }     usBankAccount {       routeId       plaidPublicKey     }     venmo {       merchantId       accessToken       environment     }     visaCheckout {       apiKey       externalClientId       supportedCardBrands     }     braintreeApi {       accessToken       url     }     supportedFeatures   } }";
function ej() {
  return { query: eB, operationName: "ClientConfiguration" };
}
var eW = ej,
  eK = eL,
  eY = ey.assign,
  eG = {
    creditCard: {
      AMERICAN_EXPRESS: "American Express",
      DISCOVER: "Discover",
      INTERNATIONAL_MAESTRO: "Maestro",
      JCB: "JCB",
      MASTERCARD: "MasterCard",
      SOLO: "Solo",
      UK_MAESTRO: "UK Maestro",
      UNION_PAY: "UnionPay",
      VISA: "Visa",
      ELO: "Elo",
      HIPER: "Hiper",
      HIPERCARD: "Hipercard",
    },
    applePayWeb: {
      VISA: "visa",
      MASTERCARD: "mastercard",
      DISCOVER: "discover",
      AMERICAN_EXPRESS: "amex",
      INTERNATIONAL_MAESTRO: "maestro",
      ELO: "elo",
    },
    visaCheckout: {
      VISA: "Visa",
      MASTERCARD: "MasterCard",
      DISCOVER: "Discover",
      AMERICAN_EXPRESS: "American Express",
    },
    googlePay: {
      VISA: "visa",
      MASTERCARD: "mastercard",
      DISCOVER: "discover",
      AMERICAN_EXPRESS: "amex",
      INTERNATIONAL_MAESTRO: "maestro",
      ELO: "elo",
    },
    masterpass: {
      VISA: "visa",
      MASTERCARD: "master",
      DISCOVER: "discover",
      AMERICAN_EXPRESS: "amex",
      DINERS: "diners",
      INTERNATIONAL_MAESTRO: "maestro",
      JCB: "jcb",
    },
  };
function eq(e, t) {
  return e.data && !e.errors ? eQ(e, t) : eK(e);
}
function eQ(e, t) {
  var n,
    r = e.data.clientConfiguration;
  return (
    (n = {
      environment: r.environment.toLowerCase(),
      clientApiUrl: r.clientApiUrl,
      assetsUrl: r.assetsUrl,
      analytics: { url: r.analyticsUrl },
      merchantId: r.merchantId,
      venmo: "off",
    }),
    r.supportedFeatures &&
      (n.graphQL = {
        url: t._graphQL._config.url,
        features: r.supportedFeatures.map(function (e) {
          return e.toLowerCase();
        }),
      }),
    r.braintreeApi && (n.braintreeApi = r.braintreeApi),
    r.applePayWeb &&
      ((n.applePayWeb = r.applePayWeb),
      (n.applePayWeb.supportedNetworks = eZ(
        r.applePayWeb.supportedCardBrands,
        eG.applePayWeb
      )),
      delete n.applePayWeb.supportedCardBrands),
    r.ideal && (n.ideal = r.ideal),
    r.kount && (n.kount = { kountMerchantId: r.kount.merchantId }),
    r.creditCard
      ? ((n.challenges = r.creditCard.challenges.map(function (e) {
          return e.toLowerCase();
        })),
        (n.creditCards = {
          supportedCardTypes: eZ(
            r.creditCard.supportedCardBrands,
            eG.creditCard
          ),
        }),
        (n.threeDSecureEnabled = r.creditCard.threeDSecureEnabled),
        (n.threeDSecure = r.creditCard.threeDSecure))
      : ((n.challenges = []),
        (n.creditCards = { supportedCardTypes: [] }),
        (n.threeDSecureEnabled = !1)),
    r.googlePay &&
      (n.androidPay = {
        displayName: r.googlePay.displayName,
        enabled: !0,
        environment: r.googlePay.environment.toLowerCase(),
        googleAuthorizationFingerprint: r.googlePay.googleAuthorization,
        paypalClientId: r.googlePay.paypalClientId,
        supportedNetworks: eZ(r.googlePay.supportedCardBrands, eG.googlePay),
      }),
    r.venmo &&
      (n.payWithVenmo = {
        merchantId: r.venmo.merchantId,
        accessToken: r.venmo.accessToken,
        environment: r.venmo.environment.toLowerCase(),
      }),
    r.paypal
      ? ((n.paypalEnabled = !0),
        (n.paypal = eY({}, r.paypal)),
        (n.paypal.currencyIsoCode = n.paypal.currencyCode),
        (n.paypal.environment = n.paypal.environment.toLowerCase()),
        delete n.paypal.currencyCode)
      : (n.paypalEnabled = !1),
    r.unionPay &&
      (n.unionPay = {
        enabled: !0,
        merchantAccountId: r.unionPay.merchantAccountId,
      }),
    r.visaCheckout &&
      (n.visaCheckout = {
        apikey: r.visaCheckout.apiKey,
        encryptionKey: r.visaCheckout.encryptionKey,
        externalClientId: r.visaCheckout.externalClientId,
        supportedCardTypes: eZ(
          r.visaCheckout.supportedCardBrands,
          eG.visaCheckout
        ),
      }),
    r.masterpass &&
      (n.masterpass = {
        merchantCheckoutId: r.masterpass.merchantCheckoutId,
        supportedNetworks: eZ(r.masterpass.supportedCardBrands, eG.masterpass),
      }),
    r.usBankAccount &&
      (n.usBankAccount = {
        routeId: r.usBankAccount.routeId,
        plaid: { publicKey: r.usBankAccount.plaidPublicKey },
      }),
    n
  );
}
function eZ(e, t) {
  return e.reduce(function (e, n) {
    return t.hasOwnProperty(n) ? e.concat(t[n]) : e;
  }, []);
}
var eJ = eq,
  eX = N.BRAINTREE_VERSION,
  e$ = ey.assign,
  e1 = eP,
  e0 = eD,
  e2 = eH,
  e3 = eW,
  e4 = eJ,
  e5 = { "payment_methods/credit_cards": e0, configuration: e3 },
  e6 = { "payment_methods/credit_cards": e2, configuration: e4 };
function e7(e) {
  var t = e.graphQL.getClientApiPath(e.url);
  (this._graphQL = e.graphQL),
    (this._data = e.data),
    (this._method = e.method),
    (this._headers = e.headers),
    (this._clientSdkMetadata = {
      source: e.metadata.source,
      integration: e.metadata.integration,
      sessionId: e.metadata.sessionId,
    }),
    (this._sendAnalyticsEvent = e.sendAnalyticsEvent || Function.prototype),
    (this._generator = e5[t]),
    (this._adapter = e6[t]),
    this._sendAnalyticsEvent("graphql.init");
}
function e8(e, t) {
  return !e && t.errors[0].message;
}
function e9(e) {
  var t = {};
  return (
    Object.keys(e).forEach(function (n) {
      var r = e1(n);
      "object" == typeof e[n]
        ? (t[r] = e9(e[n]))
        : "number" == typeof e[n]
        ? (t[r] = String(e[n]))
        : (t[r] = e[n]);
    }),
    t
  );
}
(e7.prototype.getUrl = function () {
  return this._graphQL.getGraphQLEndpoint();
}),
  (e7.prototype.getBody = function () {
    var e = e9(this._data),
      t = this._generator(e);
    return JSON.stringify(
      e$({ clientSdkMetadata: this._clientSdkMetadata }, t)
    );
  }),
  (e7.prototype.getMethod = function () {
    return "POST";
  }),
  (e7.prototype.getHeaders = function () {
    var e, t;
    return (
      this._data.authorizationFingerprint
        ? (this._sendAnalyticsEvent("graphql.authorization-fingerprint"),
          (e = this._data.authorizationFingerprint))
        : (this._sendAnalyticsEvent("graphql.tokenization-key"),
          (e = this._data.tokenizationKey)),
      (t = { Authorization: "Bearer " + e, "Braintree-Version": eX }),
      e$({}, this._headers, t)
    );
  }),
  (e7.prototype.adaptResponseBody = function (e) {
    return this._adapter(e, this);
  }),
  (e7.prototype.determineStatus = function (e, t) {
    var n, r;
    return (
      200 === e
        ? ((r =
            t.errors &&
            t.errors[0] &&
            t.errors[0].extensions &&
            t.errors[0].extensions.errorClass),
          (n =
            t.data && !t.errors
              ? 200
              : "VALIDATION" === r
              ? 422
              : "AUTHORIZATION" === r
              ? 403
              : "AUTHENTICATION" === r
              ? 401
              : e8(r, t)
              ? 403
              : 500))
        : (n = e || 500),
      this._sendAnalyticsEvent("graphql.status." + e),
      this._sendAnalyticsEvent("graphql.determinedStatus." + n),
      n
    );
  });
var te = e7;
function tt(e) {
  (this._url = e.url),
    (this._data = e.data),
    (this._method = e.method),
    (this._headers = e.headers);
}
(tt.prototype.getUrl = function () {
  return this._url;
}),
  (tt.prototype.getBody = function () {
    return this._data;
  }),
  (tt.prototype.getMethod = function () {
    return this._method;
  }),
  (tt.prototype.getHeaders = function () {
    return this._headers;
  }),
  (tt.prototype.adaptResponseBody = function (e) {
    return e;
  }),
  (tt.prototype.determineStatus = function (e) {
    return e;
  });
var tn = tt,
  tr = en,
  ti = ey.assign,
  ta = ef,
  to = eE,
  ts = eg,
  td = ts.isAvailable,
  tl = te,
  tc = tn,
  tp = 1,
  tu = 408;
function th(e) {
  return !e || e === tu;
}
function tm(e) {
  var t =
    !e.data &&
    e.errors &&
    e.errors[0] &&
    e.errors[0].extensions &&
    e.errors[0].extensions.errorClass;
  return "UNKNOWN" === t || "INTERNAL" === t;
}
function ty(e, t, n) {
  var r,
    i,
    a,
    o,
    s,
    d,
    l,
    c = e.url,
    p = e.graphQL,
    u = e.timeout,
    h = ts.getRequestObject(),
    m = Boolean(p && p.isGraphQLRequest(c, e.data));
  (e.headers = ti({ "Content-Type": "application/json" }, e.headers)),
    (c = (a = m ? new tl(e) : new tc(e)).getUrl()),
    (o = a.getBody()),
    (s = a.getMethod()),
    (d = a.getHeaders()),
    "GET" === s && ((c = tr.queryify(c, o)), (o = null)),
    td
      ? (h.onreadystatechange = function () {
          if (4 === h.readyState) {
            if (0 === h.status && m) {
              delete e.graphQL, ty(e, t, n);
              return;
            }
            if (
              ((l = to(h.responseText)),
              (i = a.adaptResponseBody(l)),
              (r = a.determineStatus(h.status, l)) >= 400 || r < 200)
            ) {
              if (m && tm(l)) {
                delete e.graphQL, ty(e, t, n);
                return;
              }
              if (t < tp && th(r)) {
                ty(e, ++t, n);
                return;
              }
              n(i || "error", null, r || 500);
            } else n(null, i, r);
          }
        })
      : (e.headers && (c = tr.queryify(c, d)),
        (h.onload = function () {
          n(null, to(h.responseText), h.status);
        }),
        (h.onerror = function () {
          n("error", null, 500);
        }),
        (h.onprogress = function () {}),
        (h.ontimeout = function () {
          n("timeout", null, -1);
        }));
  try {
    h.open(s, c, !0);
  } catch (r) {
    if (!m) throw r;
    delete e.graphQL, ty(e, t, n);
    return;
  }
  (h.timeout = u),
    td &&
      Object.keys(d).forEach(function (e) {
        h.setRequestHeader(e, d[e]);
      });
  try {
    h.send(ta(s, o));
  } catch (e) {}
}
function tf(e, t) {
  ty(e, 0, t);
}
var tE = { request: tf },
  t_ = function () {
    return window.navigator.userAgent;
  },
  tv = function () {
    return "http:" === window.location.protocol;
  },
  tg = G,
  tP = eu,
  tC = tE,
  tb = t_,
  tT = tv;
function tA() {
  return null == t && (t = !(tT() && /MSIE\s(8|9)/.test(tb()))), t;
}
var tI = function (e, t) {
    (t = tg(t || Function.prototype)),
      (e.method = (e.method || "GET").toUpperCase()),
      (e.timeout = null == e.timeout ? 6e4 : e.timeout),
      (e.data = e.data || {}),
      tA() ? tC.request(e, t) : tP.request(e, t);
  },
  tD = {
    "paypal.com": 1,
    "braintreepayments.com": 1,
    "braintreegateway.com": 1,
    "braintree-api.com": 1,
  };
function tN(e) {
  return e.split(".").slice(-2).join(".");
}
function tO(e) {
  var t;
  return (
    (e = e.toLowerCase()),
    !!/^https:/.test(e) &&
      (((n = n || document.createElement("a")).href = e),
      (t = tN(n.hostname)),
      tD.hasOwnProperty(t))
  );
}
var tx = tO,
  tF = D;
function tM(e, t) {
  return e instanceof tF
    ? e
    : new tF({
        type: t.type,
        code: t.code,
        message: t.message,
        details: { originalError: e },
      });
}
var tw = tM;
function tL(e) {
  var t = this.constructor;
  return this.then(
    function (n) {
      return t.resolve(e()).then(function () {
        return n;
      });
    },
    function (n) {
      return t.resolve(e()).then(function () {
        return t.reject(n);
      });
    }
  );
}
function tS(e) {
  return new this(function (t, n) {
    if (!(e && void 0 !== e.length))
      return n(
        TypeError(
          typeof e +
            " " +
            e +
            " is not iterable(cannot read property Symbol(Symbol.iterator))"
        )
      );
    var r = Array.prototype.slice.call(e);
    if (0 === r.length) return t([]);
    for (var i = r.length, a = 0; a < r.length; a++)
      !(function e(n, a) {
        if (a && ("object" == typeof a || "function" == typeof a)) {
          var o = a.then;
          if ("function" == typeof o) {
            o.call(
              a,
              function (t) {
                e(n, t);
              },
              function (e) {
                (r[n] = { status: "rejected", reason: e }), 0 == --i && t(r);
              }
            );
            return;
          }
        }
        (r[n] = { status: "fulfilled", value: a }), 0 == --i && t(r);
      })(a, r[a]);
  });
}
var tR = setTimeout;
function tk(e) {
  return Boolean(e && void 0 !== e.length);
}
function tV() {}
function tz(e, t) {
  return function () {
    e.apply(t, arguments);
  };
}
function tU(e) {
  if (!(this instanceof tU))
    throw TypeError("Promises must be constructed via new");
  if ("function" != typeof e) throw TypeError("not a function");
  (this._state = 0),
    (this._handled = !1),
    (this._value = void 0),
    (this._deferreds = []),
    tY(e, this);
}
function tH(e, t) {
  for (; 3 === e._state; ) e = e._value;
  if (0 === e._state) {
    e._deferreds.push(t);
    return;
  }
  (e._handled = !0),
    tU._immediateFn(function () {
      var n,
        r = 1 === e._state ? t.onFulfilled : t.onRejected;
      if (null === r) {
        (1 === e._state ? tB : tj)(t.promise, e._value);
        return;
      }
      try {
        n = r(e._value);
      } catch (e) {
        tj(t.promise, e);
        return;
      }
      tB(t.promise, n);
    });
}
function tB(e, t) {
  try {
    if (t === e) throw TypeError("A promise cannot be resolved with itself.");
    if (t && ("object" == typeof t || "function" == typeof t)) {
      var n = t.then;
      if (t instanceof tU) {
        (e._state = 3), (e._value = t), tW(e);
        return;
      }
      if ("function" == typeof n) {
        tY(tz(n, t), e);
        return;
      }
    }
    (e._state = 1), (e._value = t), tW(e);
  } catch (t) {
    tj(e, t);
  }
}
function tj(e, t) {
  (e._state = 2), (e._value = t), tW(e);
}
function tW(e) {
  2 === e._state &&
    0 === e._deferreds.length &&
    tU._immediateFn(function () {
      e._handled || tU._unhandledRejectionFn(e._value);
    });
  for (var t = 0, n = e._deferreds.length; t < n; t++) tH(e, e._deferreds[t]);
  e._deferreds = null;
}
function tK(e, t, n) {
  (this.onFulfilled = "function" == typeof e ? e : null),
    (this.onRejected = "function" == typeof t ? t : null),
    (this.promise = n);
}
function tY(e, t) {
  var n = !1;
  try {
    e(
      function (e) {
        n || ((n = !0), tB(t, e));
      },
      function (e) {
        n || ((n = !0), tj(t, e));
      }
    );
  } catch (e) {
    if (n) return;
    (n = !0), tj(t, e);
  }
}
(tU.prototype.catch = function (e) {
  return this.then(null, e);
}),
  (tU.prototype.then = function (e, t) {
    var n = new this.constructor(tV);
    return tH(this, new tK(e, t, n)), n;
  }),
  (tU.prototype.finally = tL),
  (tU.all = function (e) {
    return new tU(function (t, n) {
      if (!tk(e)) return n(TypeError("Promise.all accepts an array"));
      var r = Array.prototype.slice.call(e);
      if (0 === r.length) return t([]);
      for (var i = r.length, a = 0; a < r.length; a++)
        !(function e(a, o) {
          try {
            if (o && ("object" == typeof o || "function" == typeof o)) {
              var s = o.then;
              if ("function" == typeof s) {
                s.call(
                  o,
                  function (t) {
                    e(a, t);
                  },
                  n
                );
                return;
              }
            }
            (r[a] = o), 0 == --i && t(r);
          } catch (e) {
            n(e);
          }
        })(a, r[a]);
    });
  }),
  (tU.allSettled = tS),
  (tU.resolve = function (e) {
    return e && "object" == typeof e && e.constructor === tU
      ? e
      : new tU(function (t) {
          t(e);
        });
  }),
  (tU.reject = function (e) {
    return new tU(function (t, n) {
      n(e);
    });
  }),
  (tU.race = function (e) {
    return new tU(function (t, n) {
      if (!tk(e)) return n(TypeError("Promise.race accepts an array"));
      for (var r = 0, i = e.length; r < i; r++) tU.resolve(e[r]).then(t, n);
    });
  }),
  (tU._immediateFn =
    ("function" == typeof setImmediate &&
      function (e) {
        setImmediate(e);
      }) ||
    function (e) {
      tR(e, 0);
    }),
  (tU._unhandledRejectionFn = function (e) {
    "undefined" != typeof console &&
      console &&
      console.warn("Possible Unhandled Promise Rejection:", e);
  });
var tG = Object.freeze({ __proto__: null, default: tU }),
  tq = m(tG),
  tQ = "undefined" != typeof Promise ? Promise : null,
  tZ = (function () {
    function e(t) {
      var n = this;
      if ("function" == typeof t) {
        this._promise = new e.Promise(t);
        return;
      }
      (this._promise = new e.Promise(function (e, t) {
        (n._resolveFunction = e), (n._rejectFunction = t);
      })),
        (t = t || {}),
        (this._onResolve = t.onResolve || e.defaultOnResolve),
        (this._onReject = t.onReject || e.defaultOnReject),
        e.shouldCatchExceptions(t) && this._promise.catch(function () {}),
        this._resetState();
    }
    return (
      (e.defaultOnResolve = function (t) {
        return e.Promise.resolve(t);
      }),
      (e.defaultOnReject = function (t) {
        return e.Promise.reject(t);
      }),
      (e.setPromise = function (t) {
        e.Promise = t;
      }),
      (e.shouldCatchExceptions = function (t) {
        return t.hasOwnProperty("suppressUnhandledPromiseMessage")
          ? Boolean(t.suppressUnhandledPromiseMessage)
          : Boolean(e.suppressUnhandledPromiseMessage);
      }),
      (e.all = function (t) {
        return e.Promise.all(t);
      }),
      (e.allSettled = function (t) {
        return e.Promise.allSettled(t);
      }),
      (e.race = function (t) {
        return e.Promise.race(t);
      }),
      (e.reject = function (t) {
        return e.Promise.reject(t);
      }),
      (e.resolve = function (t) {
        return e.Promise.resolve(t);
      }),
      (e.prototype.then = function () {
        for (var e, t = [], n = 0; n < arguments.length; n++)
          t[n] = arguments[n];
        return (e = this._promise).then.apply(e, t);
      }),
      (e.prototype.catch = function () {
        for (var e, t = [], n = 0; n < arguments.length; n++)
          t[n] = arguments[n];
        return (e = this._promise).catch.apply(e, t);
      }),
      (e.prototype.resolve = function (t) {
        var n = this;
        return (
          this.isFulfilled ||
            (this._setResolved(),
            e.Promise.resolve()
              .then(function () {
                return n._onResolve(t);
              })
              .then(function (e) {
                n._resolveFunction(e);
              })
              .catch(function (e) {
                n._resetState(), n.reject(e);
              })),
          this
        );
      }),
      (e.prototype.reject = function (t) {
        var n = this;
        return (
          this.isFulfilled ||
            (this._setRejected(),
            e.Promise.resolve()
              .then(function () {
                return n._onReject(t);
              })
              .then(function (e) {
                n._setResolved(), n._resolveFunction(e);
              })
              .catch(function (e) {
                return n._rejectFunction(e);
              })),
          this
        );
      }),
      (e.prototype._resetState = function () {
        (this.isFulfilled = !1), (this.isResolved = !1), (this.isRejected = !1);
      }),
      (e.prototype._setResolved = function () {
        (this.isFulfilled = !0), (this.isResolved = !0), (this.isRejected = !1);
      }),
      (e.prototype._setRejected = function () {
        (this.isFulfilled = !0), (this.isResolved = !1), (this.isRejected = !0);
      }),
      (e.Promise = tQ),
      e
    );
  })(),
  tJ = tZ,
  tX = tq,
  t$ = tJ,
  t1 = "undefined" != typeof Promise ? Promise : tX;
(t$.suppressUnhandledPromiseMessage = !0), t$.setPromise(t1);
var t0 = t1,
  t2 = {};
function t3(e) {
  return function () {
    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
    setTimeout(function () {
      try {
        e.apply(void 0, t);
      } catch (e) {
        console.log("Error in callback function"), console.log(e);
      }
    }, 1);
  };
}
Object.defineProperty(t2, "__esModule", { value: !0 }), (t2.deferred = t3);
var t4 = {};
function t5(e) {
  var t = !1;
  return function () {
    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
    t || ((t = !0), e.apply(void 0, n));
  };
}
Object.defineProperty(t4, "__esModule", { value: !0 }), (t4.once = t5);
var t6 = {};
function t7(e, t) {
  if (!t) return e;
  e.then(function (e) {
    return t(null, e);
  }).catch(function (e) {
    return t(e);
  });
}
Object.defineProperty(t6, "__esModule", { value: !0 }),
  (t6.promiseOrCallback = t7);
var t8 = t2,
  t9 = t4,
  ne = t6;
function nt(e) {
  return function () {
    for (var t, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
    return (
      "function" == typeof n[n.length - 1] &&
        ((t = n.pop()), (t = t9.once(t8.deferred(t)))),
      ne.promiseOrCallback(e.apply(this, n), t)
    );
  };
}
nt.wrapPrototype = function (e, t) {
  void 0 === t && (t = {});
  var n = t.ignoreMethods || [],
    r = !0 === t.transformPrivateMethods;
  return (
    Object.getOwnPropertyNames(e.prototype)
      .filter(function (t) {
        var i,
          a = "constructor" !== t && "function" == typeof e.prototype[t],
          o = -1 === n.indexOf(t);
        return (i = !!r || "_" !== t.charAt(0)), a && i && o;
      })
      .forEach(function (t) {
        var n = e.prototype[t];
        e.prototype[t] = nt(n);
      }),
    e
  );
};
var nn = nt,
  nr = "3.91.0",
  ni = "web",
  na = {
    production: "https://api.braintreegateway.com:443",
    sandbox: "https://api.sandbox.braintreegateway.com:443",
  },
  no = {
    production: "https://assets.braintreegateway.com",
    sandbox: "https://assets.braintreegateway.com",
  },
  ns = {
    production: "https://payments.braintree-api.com/graphql",
    sandbox: "https://payments.sandbox.braintree-api.com/graphql",
  },
  nd = {
    ANALYTICS_PREFIX: ni + ".",
    ANALYTICS_REQUEST_TIMEOUT_MS: 2e3,
    ASSETS_URLS: no,
    CLIENT_API_URLS: na,
    FRAUDNET_SOURCE: "BRAINTREE_SIGNIN",
    FRAUDNET_FNCLS: "fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99",
    FRAUDNET_URL: "https://c.paypal.com/da/r/fb.js",
    BUS_CONFIGURATION_REQUEST_EVENT: "BUS_CONFIGURATION_REQUEST",
    GRAPHQL_URLS: ns,
    INTEGRATION_TIMEOUT_MS: 6e4,
    VERSION: nr,
    INTEGRATION: "custom",
    SOURCE: "client",
    PLATFORM: ni,
    BRAINTREE_LIBRARY_VERSION: "braintree/" + ni + "/" + nr,
  },
  nl = D,
  nc = {
    CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN: {
      type: nl.types.MERCHANT,
      code: "CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN",
    },
    CLIENT_OPTION_REQUIRED: {
      type: nl.types.MERCHANT,
      code: "CLIENT_OPTION_REQUIRED",
    },
    CLIENT_OPTION_INVALID: {
      type: nl.types.MERCHANT,
      code: "CLIENT_OPTION_INVALID",
    },
    CLIENT_MISSING_GATEWAY_CONFIGURATION: {
      type: nl.types.INTERNAL,
      code: "CLIENT_MISSING_GATEWAY_CONFIGURATION",
      message: "Missing gatewayConfiguration.",
    },
    CLIENT_INVALID_AUTHORIZATION: {
      type: nl.types.MERCHANT,
      code: "CLIENT_INVALID_AUTHORIZATION",
      message:
        "Authorization is invalid. Make sure your client token or tokenization key is valid.",
    },
    CLIENT_GATEWAY_NETWORK: {
      type: nl.types.NETWORK,
      code: "CLIENT_GATEWAY_NETWORK",
      message: "Cannot contact the gateway at this time.",
    },
    CLIENT_REQUEST_TIMEOUT: {
      type: nl.types.NETWORK,
      code: "CLIENT_REQUEST_TIMEOUT",
      message: "Request timed out waiting for a reply.",
    },
    CLIENT_REQUEST_ERROR: {
      type: nl.types.NETWORK,
      code: "CLIENT_REQUEST_ERROR",
      message: "There was a problem with your request.",
    },
    CLIENT_GRAPHQL_REQUEST_ERROR: {
      type: nl.types.NETWORK,
      code: "CLIENT_GRAPHQL_REQUEST_ERROR",
      message: "There was a problem with your request.",
    },
    CLIENT_RATE_LIMITED: {
      type: nl.types.MERCHANT,
      code: "CLIENT_RATE_LIMITED",
      message: "You are being rate-limited; please try again in a few minutes.",
    },
    CLIENT_AUTHORIZATION_INSUFFICIENT: {
      type: nl.types.MERCHANT,
      code: "CLIENT_AUTHORIZATION_INSUFFICIENT",
      message: "The authorization used has insufficient privileges.",
    },
    CLIENT_AUTHORIZATION_INVALID: {
      type: nl.types.MERCHANT,
      code: "CLIENT_AUTHORIZATION_INVALID",
      message:
        "Either the client token has expired and a new one should be generated or the tokenization key has been deactivated or deleted.",
    },
  };
function np(e) {
  var t = e.split("-");
  return new Date(t[0], t[1], t[2]);
}
function nu(e, t) {
  return np(e) <= np(t);
}
var nh = nu,
  nm = D,
  ny = t0,
  nf = nn,
  nE = tI,
  n_ = Q,
  nv = nd,
  ng = nc,
  nP = K,
  nC = nd.GRAPHQL_URLS,
  nb = nh,
  nT = N.BRAINTREE_VERSION;
function nA(e) {
  return new ny(function (t, n) {
    var r,
      i,
      a,
      o = n_(),
      s = {
        merchantAppId: window.location.host,
        platform: nv.PLATFORM,
        sdkVersion: nv.VERSION,
        source: nv.SOURCE,
        integration: nv.INTEGRATION,
        integrationType: nv.INTEGRATION,
        sessionId: o,
      };
    (r = e.attrs),
      (i = e.configUrl),
      (r._meta = s),
      (r.braintreeLibraryVersion = nv.BRAINTREE_LIBRARY_VERSION),
      (r.configVersion = "3"),
      (a = { url: i, method: "GET", data: r }),
      r.authorizationFingerprint && e.graphQL
        ? (nb(e.graphQL.date, nT) &&
            (a.graphQL = new nP({
              graphQL: { url: e.graphQL.url, features: ["configuration"] },
            })),
          (a.metadata = s))
        : r.tokenizationKey &&
          ((a.graphQL = new nP({
            graphQL: { url: nC[e.environment], features: ["configuration"] },
          })),
          (a.metadata = s)),
      nE(a, function (e, i, a) {
        var o;
        if (e) {
          (o =
            403 === a
              ? ng.CLIENT_AUTHORIZATION_INSUFFICIENT
              : 401 === a
              ? ng.CLIENT_AUTHORIZATION_INVALID
              : ng.CLIENT_GATEWAY_NETWORK),
            n(
              new nm({
                type: o.type,
                code: o.code,
                message: o.message,
                details: { originalError: e },
              })
            );
          return;
        }
        t({
          authorizationType: r.tokenizationKey
            ? "TOKENIZATION_KEY"
            : "CLIENT_TOKEN",
          authorizationFingerprint: r.authorizationFingerprint,
          analyticsMetadata: s,
          gatewayConfiguration: i,
        });
      });
  });
}
var nI = { getConfiguration: nf(nA) },
  nD = "function" == typeof atob ? atob : nN;
function nN(e) {
  var t,
    n,
    r,
    i,
    a,
    o,
    s,
    d,
    l = RegExp(
      "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"
    ),
    c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    p = "";
  if (!l.test(e))
    throw Error("Non base64 encoded input passed to window.atob polyfill");
  d = 0;
  do
    (i = c.indexOf(e.charAt(d++))),
      (a = c.indexOf(e.charAt(d++))),
      (o = c.indexOf(e.charAt(d++))),
      (s = c.indexOf(e.charAt(d++))),
      (t = ((63 & i) << 2) | ((a >> 4) & 3)),
      (n = ((15 & a) << 4) | ((o >> 2) & 15)),
      (r = ((3 & o) << 6) | (63 & s)),
      (p +=
        String.fromCharCode(t) +
        (n ? String.fromCharCode(n) : "") +
        (r ? String.fromCharCode(r) : ""));
  while (d < e.length);
  return p;
}
var nO = {
    atob: function (e) {
      return nD.call(window, e);
    },
    _atob: nN,
  },
  nx = nO.atob,
  nF = nd.CLIENT_API_URLS;
function nM(e) {
  return /^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e);
}
function nw(e) {
  var t = e.split("_"),
    n = t[0];
  return { merchantId: t.slice(2).join("_"), environment: n };
}
function nL(e) {
  var t,
    n,
    r = { attrs: {}, configUrl: "" };
  return (
    nM(e)
      ? ((n = nw(e)),
        (r.environment = n.environment),
        (r.attrs.tokenizationKey = e),
        (r.configUrl =
          nF[n.environment] +
          "/merchants/" +
          n.merchantId +
          "/client_api/v1/configuration"))
      : ((t = JSON.parse(nx(e))),
        (r.environment = t.environment),
        (r.attrs.authorizationFingerprint = t.authorizationFingerprint),
        (r.configUrl = t.configUrl),
        (r.graphQL = t.graphQL)),
    r
  );
}
var nS = nL,
  nR = function (e) {
    return JSON.parse(JSON.stringify(e));
  },
  nk = nS,
  nV = nR,
  nz = nd;
function nU(e, t) {
  var n,
    r = t ? nV(t) : {},
    i = nk(e.authorization).attrs,
    a = nV(e.analyticsMetadata);
  for (n in ((r.braintreeLibraryVersion = nz.BRAINTREE_LIBRARY_VERSION),
  r._meta))
    r._meta.hasOwnProperty(n) && (a[n] = r._meta[n]);
  return (
    (r._meta = a),
    i.tokenizationKey
      ? (r.tokenizationKey = i.tokenizationKey)
      : (r.authorizationFingerprint = i.authorizationFingerprint),
    r
  );
}
var nH = nU,
  nB = function (e) {
    return function () {
      var t = arguments;
      setTimeout(function () {
        e.apply(null, t);
      }, 1);
    };
  },
  nj = t0,
  nW = nd,
  nK = nH;
function nY(e, t, n) {
  var r = Date.now();
  return nj
    .resolve(e)
    .then(function (e) {
      var i = Date.now(),
        a = e.getConfiguration();
      (0,
      e._request)({ url: a.gatewayConfiguration.analytics.url, method: "post", data: nK(a, { analytics: [{ kind: nW.ANALYTICS_PREFIX + t, isAsync: Math.floor(i / 1e3) !== Math.floor(r / 1e3), timestamp: r }] }), timeout: nW.ANALYTICS_REQUEST_TIMEOUT_MS }, n);
    })
    .catch(function (e) {
      n && n(e);
    });
}
var nG = { sendEvent: nY },
  nq = function (e) {
    return Object.keys(e).filter(function (t) {
      return "function" == typeof e[t];
    });
  },
  nQ = D,
  nZ = {
    INVALID_USE_OF_INTERNAL_FUNCTION: {
      type: nQ.types.INTERNAL,
      code: "INVALID_USE_OF_INTERNAL_FUNCTION",
    },
    INSTANTIATION_OPTION_REQUIRED: {
      type: nQ.types.MERCHANT,
      code: "INSTANTIATION_OPTION_REQUIRED",
    },
    INCOMPATIBLE_VERSIONS: {
      type: nQ.types.MERCHANT,
      code: "INCOMPATIBLE_VERSIONS",
    },
    CLIENT_SCRIPT_FAILED_TO_LOAD: {
      type: nQ.types.NETWORK,
      code: "CLIENT_SCRIPT_FAILED_TO_LOAD",
      message: "Braintree client script could not be loaded.",
    },
    METHOD_CALLED_AFTER_TEARDOWN: {
      type: nQ.types.MERCHANT,
      code: "METHOD_CALLED_AFTER_TEARDOWN",
    },
  },
  nJ = D,
  nX = nZ,
  n$ = function (e, t) {
    t.forEach(function (t) {
      e[t] = function () {
        throw new nJ({
          type: nX.METHOD_CALLED_AFTER_TEARDOWN.type,
          code: nX.METHOD_CALLED_AFTER_TEARDOWN.code,
          message: t + " cannot be called after teardown.",
        });
      };
    });
  },
  n1 = {},
  n0 = {
    get exports() {
      return n1;
    },
    set exports(v) {
      n1 = v;
    },
  },
  n2 = {},
  n3 =
    (h && h.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(n2, "__esModule", { value: !0 }),
  (n2.PromiseGlobal = void 0);
var n4 = n3(tq),
  n5 = "undefined" != typeof Promise ? Promise : n4.default;
n2.PromiseGlobal = n5;
var n6 = n2,
  n7 = {};
function n8(e) {
  var t,
    n = JSON.stringify(e);
  if (!e.forceScriptReload && (t = n7[n])) return t;
  var r = document.createElement("script"),
    i = e.dataAttributes || {},
    a = e.container || document.head;
  return (
    (r.src = e.src),
    (r.id = e.id || ""),
    (r.async = !0),
    e.crossorigin && r.setAttribute("crossorigin", "" + e.crossorigin),
    Object.keys(i).forEach(function (e) {
      r.setAttribute("data-" + e, "" + i[e]);
    }),
    (t = new n6.PromiseGlobal(function (t, n) {
      r.addEventListener("load", function () {
        t(r);
      }),
        r.addEventListener("error", function () {
          n(Error(e.src + " failed to load."));
        }),
        r.addEventListener("abort", function () {
          n(Error(e.src + " has aborted."));
        }),
        a.appendChild(r);
    })),
    (n7[n] = t),
    t
  );
}
n8.clearCache = function () {
  n7 = {};
};
var n9 = n8;
n0.exports = n9;
var re = n1,
  rt = { loadScript: re },
  rn = N.BRAINTREE_VERSION,
  rr = K,
  ri = tI,
  ra = tx,
  ro = D,
  rs = tw,
  rd = nI.getConfiguration,
  rl = nS,
  rc = nH,
  rp = t0,
  ru = nn,
  rh = G,
  rm = nB,
  ry = ey.assign,
  rf = nG,
  rE = nc,
  r_ = nd.VERSION,
  rv = nd.GRAPHQL_URLS,
  rg = nq,
  rP = n$,
  rC = rt,
  rb = nd.FRAUDNET_FNCLS,
  rT = nd.FRAUDNET_SOURCE,
  rA = nd.FRAUDNET_URL,
  rI = {};
function rD(e) {
  var t, n;
  if (((t = JSON.stringify((e = e || {}))), !(n = e.gatewayConfiguration)))
    throw new ro(rE.CLIENT_MISSING_GATEWAY_CONFIGURATION);
  if (
    (["assetsUrl", "clientApiUrl", "configUrl"].forEach(function (e) {
      if (e in n && !ra(n[e]))
        throw new ro({
          type: rE.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.type,
          code: rE.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.code,
          message: e + " property is on an invalid domain.",
        });
    }),
    (this.getConfiguration = function () {
      return JSON.parse(t);
    }),
    (this._request = ri),
    (this._configuration = this.getConfiguration()),
    (this._clientApiBaseUrl = n.clientApiUrl + "/v1/"),
    n.graphQL)
  ) {
    if (!ra(n.graphQL.url))
      throw new ro({
        type: rE.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.type,
        code: rE.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.code,
        message: "graphQL.url property is on an invalid domain.",
      });
    this._graphQL = new rr({ graphQL: n.graphQL });
  }
}
function rN(e, t) {
  var n;
  if (
    (-1 === e
      ? (n = new ro(rE.CLIENT_REQUEST_TIMEOUT))
      : 401 === e
      ? (n = new ro(rE.CLIENT_AUTHORIZATION_INVALID))
      : 403 === e
      ? (n = new ro(rE.CLIENT_AUTHORIZATION_INSUFFICIENT))
      : 429 === e
      ? (n = new ro(rE.CLIENT_RATE_LIMITED))
      : e >= 500
      ? (n = new ro(rE.CLIENT_GATEWAY_NETWORK))
      : (e < 200 || e >= 400) &&
        (n = rs(t, {
          type: rE.CLIENT_REQUEST_ERROR.type,
          code: rE.CLIENT_REQUEST_ERROR.code,
          message: rE.CLIENT_REQUEST_ERROR.message,
        })),
    n)
  )
    return (n.details = n.details || {}), (n.details.httpStatus = e), n;
}
function rO(e) {
  return {
    Authorization: "Bearer " + (e.authorizationFingerprint || e.authorization),
    "Braintree-Version": rn,
  };
}
(rD.initialize = function (e) {
  var t,
    n,
    r = rI[e.authorization];
  if (r) return rf.sendEvent(r, "custom.client.load.cached"), r;
  try {
    n = rl(e.authorization);
  } catch (e) {
    return rp.reject(new ro(rE.CLIENT_INVALID_AUTHORIZATION));
  }
  return (
    (r = rd(n).then(function (n) {
      return (
        e.debug && (n.isDebug = !0),
        (n.authorization = e.authorization),
        (t = new rD(n))
      );
    })),
    (rI[e.authorization] = r),
    rf.sendEvent(r, "custom.client.load.initialized"),
    r
      .then(function (e) {
        return rf.sendEvent(t, "custom.client.load.succeeded"), e;
      })
      .catch(function (t) {
        return delete rI[e.authorization], rp.reject(t);
      })
  );
}),
  (rD.clearCache = function () {
    rI = {};
  }),
  (rD.prototype._findOrCreateFraudnetJSON = function (e) {
    var t,
      n,
      r,
      i,
      a = document.querySelector('script[fncls="' + rb + '"]');
    a ||
      (((a = document.body.appendChild(document.createElement("script"))).type =
        "application/json"),
      a.setAttribute("fncls", rb)),
      (n = {
        rda_tenant: "bt_card",
        mid: (t = this.getConfiguration()).gatewayConfiguration.merchantId,
      }),
      (r = t.authorizationFingerprint) &&
        r.split("&").forEach(function (e) {
          var t = e.split("=");
          "customer_id" === t[0] && t.length > 1 && (n.cid = t[1]);
        }),
      (i = { f: e.substr(0, 32), fp: n, bu: !1, s: rT }),
      (a.text = JSON.stringify(i));
  }),
  (rD.prototype.request = function (e, t) {
    var n = this,
      r = new rp(function (t, r) {
        var i,
          a,
          o,
          s,
          d = Boolean(
            "payment_methods/credit_cards" === e.endpoint &&
              n.getConfiguration().gatewayConfiguration.creditCards
                .collectDeviceData
          );
        if (
          ("graphQLApi" === e.api ||
            (e.method
              ? e.endpoint || (i = "options.endpoint")
              : (i = "options.method")),
          i)
        )
          throw new ro({
            type: rE.CLIENT_OPTION_REQUIRED.type,
            code: rE.CLIENT_OPTION_REQUIRED.code,
            message: i + " is required when making a request.",
          });
        if (
          ((a = "api" in e ? e.api : "clientApi"),
          (s = {
            method: e.method,
            graphQL: n._graphQL,
            timeout: e.timeout,
            metadata: n._configuration.analyticsMetadata,
          }),
          "clientApi" === a)
        )
          (o = n._clientApiBaseUrl), (s.data = rc(n._configuration, e.data));
        else if ("graphQLApi" === a)
          (o = rv[n._configuration.gatewayConfiguration.environment]),
            (e.endpoint = ""),
            (s.method = "post"),
            (s.data = ry(
              {
                clientSdkMetadata: {
                  platform: n._configuration.analyticsMetadata.platform,
                  source: n._configuration.analyticsMetadata.source,
                  integration: n._configuration.analyticsMetadata.integration,
                  sessionId: n._configuration.analyticsMetadata.sessionId,
                  version: r_,
                },
              },
              e.data
            )),
            (s.headers = rO(n._configuration));
        else
          throw new ro({
            type: rE.CLIENT_OPTION_INVALID.type,
            code: rE.CLIENT_OPTION_INVALID.code,
            message: "options.api is invalid.",
          });
        (s.url = o + e.endpoint),
          (s.sendAnalyticsEvent = function (e) {
            rf.sendEvent(n, e);
          }),
          n._request(s, function (e, i, o) {
            var s, l;
            if ((l = rN(o, e))) {
              r(l);
              return;
            }
            if ("graphQLApi" === a && i.errors) {
              r(
                rs(i.errors, {
                  type: rE.CLIENT_GRAPHQL_REQUEST_ERROR.type,
                  code: rE.CLIENT_GRAPHQL_REQUEST_ERROR.code,
                  message: rE.CLIENT_GRAPHQL_REQUEST_ERROR.message,
                })
              );
              return;
            }
            (s = ry({ _httpStatus: o }, i)),
              d &&
                s.creditCards &&
                s.creditCards.length > 0 &&
                (n._findOrCreateFraudnetJSON(s.creditCards[0].nonce),
                rC.loadScript({ src: rA, forceScriptReload: !0 })),
              t(s);
          });
      });
    if ("function" == typeof t) {
      (t = rh(rm(t))),
        r
          .then(function (e) {
            t(null, e, e._httpStatus);
          })
          .catch(function (e) {
            var n = e && e.details && e.details.httpStatus;
            t(e, null, n);
          });
      return;
    }
    return r;
  }),
  (rD.prototype.toJSON = function () {
    return this.getConfiguration();
  }),
  (rD.prototype.getVersion = function () {
    return r_;
  }),
  (rD.prototype.teardown = ru(function () {
    return (
      delete rI[this.getConfiguration().authorization],
      rP(this, rg(rD.prototype)),
      rp.resolve()
    );
  }));
var rx = rD,
  rF = D,
  rM = rx,
  rw = "3.91.0",
  rL = t0,
  rS = nn,
  rR = nZ;
function rk(e) {
  return e.authorization
    ? rM.initialize(e)
    : rL.reject(
        new rF({
          type: rR.INSTANTIATION_OPTION_REQUIRED.type,
          code: rR.INSTANTIATION_OPTION_REQUIRED.code,
          message:
            "options.authorization is required when instantiating a client.",
        })
      );
}
var rV = { create: rS(rk), VERSION: rw },
  rz = P.atob,
  rU = C,
  rH = rV.VERSION;
function rB(e) {
  return Math.floor(e / 1e3);
}
function rj(e, t, n) {
  var r = e.getConfiguration(),
    i = e._request,
    a = rB(Date.now()),
    o = r.gatewayConfiguration.analytics.url,
    s = {
      analytics: [{ kind: rU.ANALYTICS_PREFIX + t, timestamp: a }],
      _meta: r.analyticsMetadata,
      braintreeLibraryVersion: rH,
    };
  "TOKENIZATION_KEY" === r.authorizationType
    ? (s.tokenizationKey = r.authorization)
    : (s.authorizationFingerprint = JSON.parse(
        rz(r.authorization)
      ).authorizationFingerprint),
    i(
      {
        url: o,
        method: "post",
        data: s,
        timeout: rU.ANALYTICS_REQUEST_TIMEOUT_MS,
      },
      n
    );
}
var rW = { sendEvent: rj },
  rK = {};
function rY(e) {
  return e.className.trim().split(/\s+/);
}
function rG(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  e.className = rY(e)
    .filter(function (e) {
      return -1 === t.indexOf(e);
    })
    .concat(t)
    .join(" ");
}
function rq(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  e.className = rY(e)
    .filter(function (e) {
      return -1 === t.indexOf(e);
    })
    .join(" ");
}
function rQ(e, t, n) {
  n ? rG(e, t) : rq(e, t);
}
function rZ(e) {
  return "BraintreeError" === e.name;
}
function rJ(e) {
  (this.name = "DropinError"),
    "string" == typeof e ? (this.message = e) : (this.message = e.message),
    rZ(e)
      ? (this._braintreeWebError = e)
      : (this._braintreeWebError = e.braintreeWebError);
}
Object.defineProperty(rK, "__esModule", { value: !0 }),
  (rK.toggle = rK.remove = rK.add = void 0),
  (rK.add = rG),
  (rK.remove = rq),
  (rK.toggle = rQ),
  (rJ.prototype = Object.create(Error.prototype)),
  (rJ.prototype.constructor = rJ);
var rX = rJ,
  r$ = (function () {
    function e() {
      this._events = {};
    }
    return (
      (e.prototype.on = function (e, t) {
        this._events[e] ? this._events[e].push(t) : (this._events[e] = [t]);
      }),
      (e.prototype.off = function (e, t) {
        var n = this._events[e];
        if (n) {
          var r = n.indexOf(t);
          n.splice(r, 1);
        }
      }),
      (e.prototype._emit = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        var r = this._events[e];
        r &&
          r.forEach(function (e) {
            e.apply(void 0, t);
          });
      }),
      (e.prototype.hasListener = function (e) {
        var t = this._events[e];
        return !!t && t.length > 0;
      }),
      (e.createChild = function (t) {
        t.prototype = Object.create(e.prototype, { constructor: t });
      }),
      e
    );
  })(),
  r1 = r$,
  r0 = P.atob,
  r2 = function (e) {
    var t,
      n = e.getConfiguration();
    return (
      "TOKENIZATION_KEY" === n.authorizationType ||
      !(t = JSON.parse(r0(n.authorization)).authorizationFingerprint) ||
      -1 === t.indexOf("customer_id=")
    );
  },
  r3 = h.Promise || tq,
  r4 = r3,
  r5 = E.assign,
  r6 = rK,
  r7 = rX,
  r8 = C.errors,
  r9 = r4;
function ie(e) {
  r5(this, (e = e || {}));
}
(ie.prototype.getElementById = function (e) {
  return this.element
    ? this.element.querySelector('[data-braintree-id="' + e + '"]')
    : null;
}),
  (ie.prototype.requestPaymentMethod = function () {
    return r9.reject(new r7(r8.NO_PAYMENT_METHOD_ERROR));
  }),
  (ie.prototype.getPaymentMethod = function () {
    return this.activeMethodView && this.activeMethodView.paymentMethod;
  }),
  (ie.prototype.onSelection = function () {}),
  (ie.prototype.teardown = function () {
    return r9.resolve();
  }),
  (ie.prototype.preventUserAction = function () {
    this.element && r6.add(this.element, "braintree-sheet--loading"),
      this.model.preventUserAction();
  }),
  (ie.prototype.allowUserAction = function () {
    this.element && r6.remove(this.element, "braintree-sheet--loading"),
      this.model.allowUserAction();
  });
var it = ie,
  ir = D,
  ii = {
    APPLE_PAY_NOT_ENABLED: {
      type: ir.types.MERCHANT,
      code: "APPLE_PAY_NOT_ENABLED",
      message: "Apple Pay is not enabled for this merchant.",
    },
    APPLE_PAY_VALIDATION_URL_REQUIRED: {
      type: ir.types.MERCHANT,
      code: "APPLE_PAY_VALIDATION_URL_REQUIRED",
      message: "performValidation must be called with a validationURL.",
    },
    APPLE_PAY_MERCHANT_VALIDATION_NETWORK: {
      type: ir.types.NETWORK,
      code: "APPLE_PAY_MERCHANT_VALIDATION_NETWORK",
      message:
        "A network error occurred when validating the Apple Pay merchant.",
    },
    APPLE_PAY_MERCHANT_VALIDATION_FAILED: {
      type: ir.types.MERCHANT,
      code: "APPLE_PAY_MERCHANT_VALIDATION_FAILED",
      message:
        "Make sure you have registered your domain name in the Braintree Control Panel.",
    },
    APPLE_PAY_PAYMENT_TOKEN_REQUIRED: {
      type: ir.types.MERCHANT,
      code: "APPLE_PAY_PAYMENT_TOKEN_REQUIRED",
      message: "tokenize must be called with a payment token.",
    },
    APPLE_PAY_TOKENIZATION: {
      type: ir.types.NETWORK,
      code: "APPLE_PAY_TOKENIZATION",
      message:
        "A network error occurred when processing the Apple Pay payment.",
    },
  },
  ia = D,
  io = nG,
  is = ii,
  id = t0,
  il = nq,
  ic = n$,
  ip = nn;
function iu(e) {
  (this._instantiatedWithClient = Boolean(!e.useDeferredClient)),
    (this._client = e.client),
    (this._createPromise = e.createPromise),
    this._client && this._setMerchantIdentifier();
}
(iu.prototype._waitForClient = function () {
  return this._client
    ? id.resolve()
    : this._createPromise.then(
        function (e) {
          (this._client = e), this._setMerchantIdentifier();
        }.bind(this)
      );
}),
  (iu.prototype._setMerchantIdentifier = function () {
    var e = this._client.getConfiguration().gatewayConfiguration.applePayWeb;
    e &&
      Object.defineProperty(this, "merchantIdentifier", {
        value: e.merchantIdentifier,
        configurable: !1,
        writable: !1,
      });
  }),
  (iu.prototype.createPaymentRequest = function (e) {
    return this._instantiatedWithClient
      ? this._createPaymentRequestSynchronously(e)
      : this._waitForClient().then(
          function () {
            return this._createPaymentRequestSynchronously(e);
          }.bind(this)
        );
  }),
  (iu.prototype._createPaymentRequestSynchronously = function (e) {
    var t = this._client.getConfiguration().gatewayConfiguration.applePayWeb;
    return Object.assign(
      {},
      {
        countryCode: t.countryCode,
        currencyCode: t.currencyCode,
        merchantCapabilities: t.merchantCapabilities || ["supports3DS"],
        supportedNetworks: t.supportedNetworks.map(function (e) {
          return "mastercard" === e ? "masterCard" : e;
        }),
      },
      e
    );
  }),
  (iu.prototype.performValidation = function (e) {
    var t = this;
    return e && e.validationURL
      ? this._waitForClient()
          .then(function () {
            var n = {
              validationUrl: e.validationURL,
              domainName: e.domainName || window.location.hostname,
              merchantIdentifier: e.merchantIdentifier || t.merchantIdentifier,
            };
            return (
              null != e.displayName && (n.displayName = e.displayName),
              t._client.request({
                method: "post",
                endpoint: "apple_pay_web/sessions",
                data: { _meta: { source: "apple-pay" }, applePayWebSession: n },
              })
            );
          })
          .then(function (e) {
            return (
              io.sendEvent(t._client, "applepay.performValidation.succeeded"),
              id.resolve(e)
            );
          })
          .catch(function (e) {
            return (io.sendEvent(
              t._client,
              "applepay.performValidation.failed"
            ),
            "CLIENT_REQUEST_ERROR" === e.code)
              ? id.reject(
                  new ia({
                    type: is.APPLE_PAY_MERCHANT_VALIDATION_FAILED.type,
                    code: is.APPLE_PAY_MERCHANT_VALIDATION_FAILED.code,
                    message: is.APPLE_PAY_MERCHANT_VALIDATION_FAILED.message,
                    details: { originalError: e.details.originalError },
                  })
                )
              : id.reject(
                  new ia({
                    type: is.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.type,
                    code: is.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.code,
                    message: is.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.message,
                    details: { originalError: e },
                  })
                );
          })
      : id.reject(new ia(is.APPLE_PAY_VALIDATION_URL_REQUIRED));
  }),
  (iu.prototype.tokenize = function (e) {
    var t = this;
    return e.token
      ? this._waitForClient()
          .then(function () {
            return t._client.request({
              method: "post",
              endpoint: "payment_methods/apple_payment_tokens",
              data: {
                _meta: { source: "apple-pay" },
                applePaymentToken: Object.assign({}, e.token, {
                  paymentData: btoa(JSON.stringify(e.token.paymentData)),
                }),
              },
            });
          })
          .then(function (e) {
            return (
              io.sendEvent(t._client, "applepay.tokenize.succeeded"),
              id.resolve(e.applePayCards[0])
            );
          })
          .catch(function (e) {
            return (
              io.sendEvent(t._client, "applepay.tokenize.failed"),
              id.reject(
                new ia({
                  type: is.APPLE_PAY_TOKENIZATION.type,
                  code: is.APPLE_PAY_TOKENIZATION.code,
                  message: is.APPLE_PAY_TOKENIZATION.message,
                  details: { originalError: e },
                })
              )
            );
          })
      : id.reject(new ia(is.APPLE_PAY_PAYMENT_TOKEN_REQUIRED));
  }),
  (iu.prototype.teardown = function () {
    return ic(this, il(iu.prototype)), id.resolve();
  });
var ih = ip.wrapPrototype(iu),
  im = D,
  iy = t0,
  iE = nZ,
  i_ = "3.91.0";
function iv(e) {
  var t, n, r;
  return e
    ? ((r = e.name), (t = e.client), (n = e.authorization), t || n)
      ? n || t.getVersion() === i_
        ? iy.resolve()
        : iy.reject(
            new im({
              type: iE.INCOMPATIBLE_VERSIONS.type,
              code: iE.INCOMPATIBLE_VERSIONS.code,
              message:
                "Client (version " +
                t.getVersion() +
                ") and " +
                r +
                " (version " +
                i_ +
                ") components must be from the same SDK version.",
            })
          )
      : iy.reject(
          new im({
            type: iE.INSTANTIATION_OPTION_REQUIRED.type,
            code: iE.INSTANTIATION_OPTION_REQUIRED.code,
            message: "options.client is required when instantiating " + r + ".",
          })
        )
    : iy.reject(
        new im({
          type: iE.INVALID_USE_OF_INTERNAL_FUNCTION.type,
          code: iE.INVALID_USE_OF_INTERNAL_FUNCTION.code,
          message:
            "Options must be passed to basicComponentVerification function.",
        })
      );
}
var ig = { verify: iv },
  iP = nd.ASSETS_URLS;
function iC(e) {
  return iP.production;
}
var ib = { create: iC },
  iT = D,
  iA = t0,
  iI = rt,
  iD = nZ,
  iN = "3.91.0";
function iO(e) {
  var t = iA.resolve();
  return e.client
    ? iA.resolve(e.client)
    : ((window.braintree && window.braintree.client) ||
        (t = iI
          .loadScript({ src: e.assetsUrl + "/web/" + iN + "/js/client.min.js" })
          .catch(function (e) {
            return iA.reject(
              new iT({
                type: iD.CLIENT_SCRIPT_FAILED_TO_LOAD.type,
                code: iD.CLIENT_SCRIPT_FAILED_TO_LOAD.code,
                message: iD.CLIENT_SCRIPT_FAILED_TO_LOAD.message,
                details: { originalError: e },
              })
            );
          })),
      t.then(function () {
        return window.braintree.client.VERSION !== iN
          ? iA.reject(
              new iT({
                type: iD.INCOMPATIBLE_VERSIONS.type,
                code: iD.INCOMPATIBLE_VERSIONS.code,
                message:
                  "Client (version " +
                  window.braintree.client.VERSION +
                  ") and " +
                  e.name +
                  " (version " +
                  iN +
                  ") components must be from the same SDK version.",
              })
            )
          : window.braintree.client.create({
              authorization: e.authorization,
              debug: e.debug,
            });
      }));
}
var ix = { create: iO },
  iF = ih,
  iM = nG,
  iw = D,
  iL = ig,
  iS = ib,
  iR = ix,
  ik = t0,
  iV = ii,
  iz = "3.91.0",
  iU = nn;
function iH(e) {
  var t = "Apple Pay";
  return iL
    .verify({ name: t, client: e.client, authorization: e.authorization })
    .then(function () {
      var n,
        r = iR
          .create({
            authorization: e.authorization,
            client: e.client,
            debug: e.debug,
            assetsUrl: iS.create(e.authorization),
            name: t,
          })
          .then(function (e) {
            return e.getConfiguration().gatewayConfiguration.applePayWeb
              ? (iM.sendEvent(e, "applepay.initialized"), e)
              : ik.reject(new iw(iV.APPLE_PAY_NOT_ENABLED));
          });
      return ((e.createPromise = r), (n = new iF(e)), e.useDeferredClient)
        ? n
        : r.then(function (e) {
            return (n._client = e), n;
          });
    });
}
var iB = { create: iU(iH), VERSION: iz };
function ij() {
  return "https:" === h.location.protocol;
}
var iW = { isHTTPS: ij },
  iK = E.assign,
  iY = it,
  iG = iB,
  iq = rX,
  iQ = iW,
  iZ = r4,
  iJ = C.paymentOptionIDs,
  iX = 2;
function i$() {
  iY.apply(this, arguments);
}
(i$.prototype = Object.create(iY.prototype)),
  (i$.prototype.constructor = i$),
  (i$.ID = i$.prototype.ID = iJ.applePay),
  (i$.prototype.initialize = function () {
    var e = this;
    return (
      (e.applePayConfiguration = iK(
        {},
        e.model.merchantConfiguration.applePay
      )),
      (e.applePaySessionVersion =
        e.applePayConfiguration.applePaySessionVersion || iX),
      delete e.applePayConfiguration.applePaySessionVersion,
      iG
        .create({ client: this.client })
        .then(function (t) {
          (e.buttonDiv = e.getElementById("apple-pay-button")),
            (e.applePayInstance = t),
            (e.buttonDiv.onclick = e._showPaymentSheet.bind(e)),
            (e.buttonDiv.style["-apple-pay-button-style"] =
              e.model.merchantConfiguration.applePay.buttonStyle || "black"),
            e.model.asyncDependencyReady(i$.ID);
        })
        .catch(function (t) {
          e.model.asyncDependencyFailed({ view: e.ID, error: new iq(t) });
        })
    );
  }),
  (i$.prototype._showPaymentSheet = function () {
    var e,
      t,
      n = this;
    return (
      !this._sessionInProgress &&
      ((this._sessionInProgress = !0),
      (e = this.applePayInstance.createPaymentRequest(
        this.applePayConfiguration.paymentRequest
      )),
      ((t = new h.ApplePaySession(
        n.applePaySessionVersion,
        e
      )).onvalidatemerchant = function (e) {
        n.applePayInstance
          .performValidation({
            validationURL: e.validationURL,
            displayName: n.applePayConfiguration.displayName,
          })
          .then(function (e) {
            t.completeMerchantValidation(e);
          })
          .catch(function (e) {
            n.model.reportError(e), (n._sessionInProgress = !1), t.abort();
          });
      }),
      (t.onpaymentauthorized = function (e) {
        n.applePayInstance
          .tokenize({ token: e.payment.token })
          .then(function (r) {
            (n._sessionInProgress = !1),
              t.completePayment(h.ApplePaySession.STATUS_SUCCESS),
              (r.rawPaymentData = e.payment),
              n.model.addPaymentMethod(r);
          })
          .catch(function (e) {
            n.model.reportError(e),
              (n._sessionInProgress = !1),
              t.completePayment(h.ApplePaySession.STATUS_FAILURE);
          });
      }),
      (t.oncancel = function () {
        n._sessionInProgress = !1;
      }),
      t.begin(),
      !1)
    );
  }),
  (i$.prototype.updateConfiguration = function (e, t) {
    this.applePayConfiguration[e] = t;
  }),
  (i$.isEnabled = function (e) {
    var t =
        e.client.getConfiguration().gatewayConfiguration.applePayWeb &&
        Boolean(e.merchantConfiguration.applePay),
      n =
        e.merchantConfiguration.applePay &&
        e.merchantConfiguration.applePay.applePaySessionVersion;
    return ((n = n || iX),
    t &&
      h.ApplePaySession &&
      iQ.isHTTPS() &&
      h.ApplePaySession.supportsVersion(n))
      ? iZ.resolve(Boolean(h.ApplePaySession.canMakePayments()))
      : iZ.resolve(!1);
  });
var i1 = i$,
  i0 = G;
function i2(e, t) {
  0 === e.length ? (e(), t(null)) : e(t);
}
var i3 = function (e, t) {
    var n,
      r = e.length,
      i = r,
      a = i0(t);
    if (0 === r) {
      a(null);
      return;
    }
    function o(e) {
      if (e) {
        a(e);
        return;
      }
      0 == (i -= 1) && a(null);
    }
    for (n = 0; n < r; n++) i2(e[n], o);
  },
  i4 = i3;
function i5() {
  (this._teardownRegistry = []), (this._isTearingDown = !1);
}
(i5.prototype.registerFunctionForTeardown = function (e) {
  "function" == typeof e && this._teardownRegistry.push(e);
}),
  (i5.prototype.teardown = function (e) {
    if (this._isTearingDown) {
      e(Error("Destructor is already tearing down"));
      return;
    }
    (this._isTearingDown = !0),
      i4(
        this._teardownRegistry,
        function (t) {
          (this._teardownRegistry = []),
            (this._isTearingDown = !1),
            "function" == typeof e && e(t);
        }.bind(this)
      );
  });
var i6 = i5,
  i7 = {};
function i8(e, t) {
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = t[n];
      null == r ? e.removeAttribute(n) : e.setAttribute(n, r);
    }
}
Object.defineProperty(i7, "__esModule", { value: !0 }),
  (i7.setAttributes = void 0),
  (i7.setAttributes = i8);
var i9 = {};
Object.defineProperty(i9, "__esModule", { value: !0 }),
  (i9.defaultAttributes = void 0),
  (i9.defaultAttributes = {
    src: "about:blank",
    frameBorder: 0,
    allowtransparency: !0,
    scrolling: "no",
  });
var ae = {};
function at(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return (
    t.forEach(function (t) {
      "object" == typeof t &&
        Object.keys(t).forEach(function (n) {
          e[n] = t[n];
        });
    }),
    e
  );
}
Object.defineProperty(ae, "__esModule", { value: !0 }),
  (ae.assign = void 0),
  (ae.assign = at);
var an = i7,
  ar = i9,
  ai = ae,
  aa = function (e) {
    void 0 === e && (e = {});
    var t = document.createElement("iframe"),
      n = ai.assign({}, ar.defaultAttributes, e);
    return (
      n.style &&
        "string" != typeof n.style &&
        (ai.assign(t.style, n.style), delete n.style),
      an.setAttributes(t, n),
      t.getAttribute("id") || (t.id = t.name),
      t
    );
  },
  ao = {},
  as = {},
  ad = {};
function al(e) {
  return "string" != typeof e;
}
Object.defineProperty(ad, "__esModule", { value: !0 }),
  (ad.isntString = void 0),
  (ad.isntString = al);
var ac = {},
  ap = {};
Object.defineProperty(ap, "__esModule", { value: !0 }),
  (ap.subscribers = ap.childWindows = ap.prefix = void 0),
  (ap.prefix = "/*framebus*/"),
  (ap.childWindows = []),
  (ap.subscribers = {});
var au = {},
  ah = {},
  am = {},
  ay = {};
Object.defineProperty(ay, "__esModule", { value: !0 }),
  (ay.subscriptionArgsInvalid = void 0);
var af = ad;
function aE(e, t, n) {
  return (
    !!(0, af.isntString)(e) || "function" != typeof t || (0, af.isntString)(n)
  );
}
ay.subscriptionArgsInvalid = aE;
var a_ = {},
  av = {};
function ag(e) {
  return (
    e.top === e && null != e.opener && e.opener !== e && !0 !== e.opener.closed
  );
}
Object.defineProperty(av, "__esModule", { value: !0 }),
  (av.hasOpener = void 0),
  (av.hasOpener = ag),
  Object.defineProperty(a_, "__esModule", { value: !0 }),
  (a_.broadcast = void 0);
var aP = av;
function aC(e, t) {
  var n,
    r = 0,
    i = t.origin,
    a = t.frame;
  try {
    for (
      a.postMessage(e, i),
        (0, aP.hasOpener)(a) &&
          a.opener.top !== window.top &&
          aC(e, { origin: i, frame: a.opener.top });
      (n = a.frames[r]);

    )
      aC(e, { origin: i, frame: n }), r++;
  } catch (e) {}
}
a_.broadcast = aC;
var ab = {};
function aT(e, t, n) {
  try {
    e.postMessage(t, n);
  } catch (e) {}
}
function aA() {
  if (r) return am;
  (r = 1),
    Object.defineProperty(am, "__esModule", { value: !0 }),
    (am.Framebus = void 0);
  var e = aD(),
    t = ap,
    n = "undefined" != typeof window && window.Promise,
    i = (function () {
      function r(e) {
        void 0 === e && (e = {}),
          (this.origin = e.origin || "*"),
          (this.channel = e.channel || ""),
          (this.verifyDomain = e.verifyDomain),
          (this.targetFrames = e.targetFrames || []),
          (this.limitBroadcastToFramesArray = Boolean(e.targetFrames)),
          (this.isDestroyed = !1),
          (this.listeners = []),
          (this.hasAdditionalChecksForOnListeners = Boolean(
            this.verifyDomain || this.limitBroadcastToFramesArray
          ));
      }
      return (
        (r.setPromise = function (e) {
          r.Promise = e;
        }),
        (r.target = function (e) {
          return new r(e);
        }),
        (r.prototype.addTargetFrame = function (e) {
          this.limitBroadcastToFramesArray && this.targetFrames.push(e);
        }),
        (r.prototype.include = function (e) {
          return (
            null != e &&
            null != e.Window &&
            e.constructor === e.Window &&
            (t.childWindows.push(e), !0)
          );
        }),
        (r.prototype.target = function (e) {
          return r.target(e);
        }),
        (r.prototype.emit = function (t, n, r) {
          if (this.isDestroyed) return !1;
          var i = this.origin;
          if (
            ((t = this.namespaceEvent(t)),
            (0, ad.isntString)(t) || (0, ad.isntString)(i))
          )
            return !1;
          "function" == typeof n && ((r = n), (n = void 0));
          var a = (0, e.packagePayload)(t, i, n, r);
          return (
            !!a &&
            (this.limitBroadcastToFramesArray
              ? this.targetFramesAsWindows().forEach(function (e) {
                  (0, ab.sendMessage)(e, a, i);
                })
              : (0, a_.broadcast)(a, {
                  origin: i,
                  frame: window.top || window.self,
                }),
            !0)
          );
        }),
        (r.prototype.emitAsPromise = function (e, t) {
          var n = this;
          return new r.Promise(function (r, i) {
            n.emit(e, t, function (e) {
              r(e);
            }) || i(Error('Listener not added for "'.concat(e, '"')));
          });
        }),
        (r.prototype.on = function (e, n) {
          if (this.isDestroyed) return !1;
          var r = this,
            i = this.origin,
            a = n;
          return (
            (e = this.namespaceEvent(e)),
            !(0, ay.subscriptionArgsInvalid)(e, a, i) &&
              (this.hasAdditionalChecksForOnListeners &&
                (a = function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  r.passesVerifyDomainCheck(this && this.origin) &&
                    r.hasMatchingTargetFrame(this && this.source) &&
                    n.apply(void 0, e);
                }),
              this.listeners.push({
                eventName: e,
                handler: a,
                originalHandler: n,
              }),
              (t.subscribers[i] = t.subscribers[i] || {}),
              (t.subscribers[i][e] = t.subscribers[i][e] || []),
              t.subscribers[i][e].push(a),
              !0)
          );
        }),
        (r.prototype.off = function (e, n) {
          var r = n;
          if (this.isDestroyed) return !1;
          if (this.verifyDomain)
            for (var i = 0; i < this.listeners.length; i++) {
              var a = this.listeners[i];
              a.originalHandler === n && (r = a.handler);
            }
          e = this.namespaceEvent(e);
          var o = this.origin;
          if ((0, ay.subscriptionArgsInvalid)(e, r, o)) return !1;
          var s = t.subscribers[o] && t.subscribers[o][e];
          if (!s) return !1;
          for (var i = 0; i < s.length; i++)
            if (s[i] === r) return s.splice(i, 1), !0;
          return !1;
        }),
        (r.prototype.teardown = function () {
          if (!this.isDestroyed) {
            this.isDestroyed = !0;
            for (var e = 0; e < this.listeners.length; e++) {
              var t = this.listeners[e];
              this.off(t.eventName, t.handler);
            }
            this.listeners.length = 0;
          }
        }),
        (r.prototype.passesVerifyDomainCheck = function (e) {
          return !this.verifyDomain || this.checkOrigin(e);
        }),
        (r.prototype.targetFramesAsWindows = function () {
          return this.limitBroadcastToFramesArray
            ? this.targetFrames
                .map(function (e) {
                  return e instanceof HTMLIFrameElement ? e.contentWindow : e;
                })
                .filter(function (e) {
                  return e;
                })
            : [];
        }),
        (r.prototype.hasMatchingTargetFrame = function (e) {
          return (
            !this.limitBroadcastToFramesArray ||
            Boolean(
              this.targetFramesAsWindows().find(function (t) {
                return t === e;
              })
            )
          );
        }),
        (r.prototype.checkOrigin = function (e) {
          var t,
            n = document.createElement("a");
          return (
            (n.href = location.href),
            (t =
              "https:" === n.protocol
                ? n.host.replace(/:443$/, "")
                : "http:" === n.protocol
                ? n.host.replace(/:80$/, "")
                : n.host),
            n.protocol + "//" + t === e ||
              !this.verifyDomain ||
              this.verifyDomain(e)
          );
        }),
        (r.prototype.namespaceEvent = function (e) {
          return this.channel ? "".concat(this.channel, ":").concat(e) : e;
        }),
        (r.Promise = n),
        r
      );
    })();
  return (am.Framebus = i), am;
}
function aI() {
  if (i) return ah;
  i = 1;
  var e =
    (h && h.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  Object.defineProperty(ah, "__esModule", { value: !0 }),
    (ah.subscribeReplier = void 0);
  var t = aA(),
    n = e(Q);
  return (
    (ah.subscribeReplier = function (e, r) {
      var i = (0, n.default)();
      return (
        t.Framebus.target({ origin: r }).on(i, function n(a, o) {
          e(a, o), t.Framebus.target({ origin: r }).off(i, n);
        }),
        i
      );
    }),
    ah
  );
}
function aD() {
  if (a) return au;
  (a = 1),
    Object.defineProperty(au, "__esModule", { value: !0 }),
    (au.packagePayload = void 0);
  var e = aI();
  return (
    (au.packagePayload = function (t, n, r, i) {
      var a,
        o = { event: t, origin: n };
      "function" == typeof i && (o.reply = (0, e.subscribeReplier)(i, n)),
        (o.eventData = r);
      try {
        a = ap.prefix + JSON.stringify(o);
      } catch (e) {
        throw Error("Could not stringify event: ".concat(e.message));
      }
      return a;
    }),
    au
  );
}
Object.defineProperty(ab, "__esModule", { value: !0 }),
  (ab.sendMessage = void 0),
  (ab.sendMessage = aT),
  Object.defineProperty(ac, "__esModule", { value: !0 }),
  (ac.unpackPayload = void 0);
var aN = ap,
  aO = aD();
function ax(e) {
  var t;
  if (e.data.slice(0, aN.prefix.length) !== aN.prefix) return !1;
  try {
    t = JSON.parse(e.data.slice(aN.prefix.length));
  } catch (e) {
    return !1;
  }
  if (t.reply) {
    var n = e.origin,
      r = e.source,
      i = t.reply;
    t.reply = function (e) {
      if (r) {
        var t = (0, aO.packagePayload)(i, n, e);
        t && r.postMessage(t, n);
      }
    };
  }
  return t;
}
ac.unpackPayload = ax;
var aF = {};
Object.defineProperty(aF, "__esModule", { value: !0 }), (aF.dispatch = void 0);
var aM = ap;
function aw(e, t, n, r, i) {
  if (aM.subscribers[e] && aM.subscribers[e][t]) {
    var a = [];
    n && a.push(n), r && a.push(r);
    for (var o = 0; o < aM.subscribers[e][t].length; o++)
      aM.subscribers[e][t][o].apply(i, a);
  }
}
aF.dispatch = aw;
var aL = {};
Object.defineProperty(aL, "__esModule", { value: !0 }),
  (aL.broadcastToChildWindows = void 0);
var aS = a_,
  aR = ap;
function ak(e, t, n) {
  for (var r = aR.childWindows.length - 1; r >= 0; r--) {
    var i = aR.childWindows[r];
    i.closed
      ? aR.childWindows.splice(r, 1)
      : n !== i && (0, aS.broadcast)(e, { origin: t, frame: i.top });
  }
}
(aL.broadcastToChildWindows = ak),
  Object.defineProperty(as, "__esModule", { value: !0 }),
  (as.onmessage = void 0);
var aV = ad,
  az = ac,
  aU = aF,
  aH = aL;
function aB(e) {
  if (!(0, aV.isntString)(e.data)) {
    var t = (0, az.unpackPayload)(e);
    if (t) {
      var n = t.eventData,
        r = t.reply;
      (0, aU.dispatch)("*", t.event, n, r, e),
        (0, aU.dispatch)(e.origin, t.event, n, r, e),
        (0, aH.broadcastToChildWindows)(e.data, t.origin, e.source);
    }
  }
}
(as.onmessage = aB),
  Object.defineProperty(ao, "__esModule", { value: !0 }),
  (ao.detach = ao.attach = void 0);
var aj = as,
  aW = !1;
function aK() {
  aW ||
    "undefined" == typeof window ||
    ((aW = !0), window.addEventListener("message", aj.onmessage, !1));
}
function aY() {
  (aW = !1), window.removeEventListener("message", aj.onmessage, !1);
}
(ao.attach = aK), (ao.detach = aY);
var aG = ao,
  aq = aA();
(0, aG.attach)();
var aQ = aq.Framebus,
  aZ = D,
  aJ = {
    HOSTED_FIELDS_TIMEOUT: {
      type: aZ.types.UNKNOWN,
      code: "HOSTED_FIELDS_TIMEOUT",
      message: "Hosted Fields timed out when attempting to set up.",
    },
    HOSTED_FIELDS_INVALID_FIELD_KEY: {
      type: aZ.types.MERCHANT,
      code: "HOSTED_FIELDS_INVALID_FIELD_KEY",
    },
    HOSTED_FIELDS_INVALID_FIELD_SELECTOR: {
      type: aZ.types.MERCHANT,
      code: "HOSTED_FIELDS_INVALID_FIELD_SELECTOR",
      message: "Selector does not reference a valid DOM node.",
    },
    HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME: {
      type: aZ.types.MERCHANT,
      code: "HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME",
      message: "Element already contains a Braintree iframe.",
    },
    HOSTED_FIELDS_FIELD_INVALID: {
      type: aZ.types.MERCHANT,
      code: "HOSTED_FIELDS_FIELD_INVALID",
    },
    HOSTED_FIELDS_FIELD_NOT_PRESENT: {
      type: aZ.types.MERCHANT,
      code: "HOSTED_FIELDS_FIELD_NOT_PRESENT",
    },
    HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR: {
      type: aZ.types.NETWORK,
      code: "HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR",
      message: "A tokenization network error occurred.",
    },
    HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE: {
      type: aZ.types.CUSTOMER,
      code: "HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE",
      message: "This credit card already exists in the merchant's vault.",
    },
    HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED: {
      type: aZ.types.CUSTOMER,
      code: "HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED",
      message: "CVV verification failed during tokenization.",
    },
    HOSTED_FIELDS_FAILED_TOKENIZATION: {
      type: aZ.types.CUSTOMER,
      code: "HOSTED_FIELDS_FAILED_TOKENIZATION",
      message: "The supplied card data failed tokenization.",
    },
    HOSTED_FIELDS_FIELDS_EMPTY: {
      type: aZ.types.CUSTOMER,
      code: "HOSTED_FIELDS_FIELDS_EMPTY",
      message: "All fields are empty. Cannot tokenize empty card fields.",
    },
    HOSTED_FIELDS_FIELDS_INVALID: {
      type: aZ.types.CUSTOMER,
      code: "HOSTED_FIELDS_FIELDS_INVALID",
      message:
        "Some payment input fields are invalid. Cannot tokenize invalid card fields.",
    },
    HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED: {
      type: aZ.types.MERCHANT,
      code: "HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED",
    },
    HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED: {
      type: aZ.types.MERCHANT,
      code: "HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED",
    },
    HOSTED_FIELDS_FIELD_PROPERTY_INVALID: {
      type: aZ.types.MERCHANT,
      code: "HOSTED_FIELDS_FIELD_PROPERTY_INVALID",
    },
  },
  aX = T,
  a$ = aJ,
  a1 = "3.91.0",
  a0 = {
    VERSION: a1,
    maxExpirationYearAge: 19,
    externalEvents: {
      FOCUS: "focus",
      BLUR: "blur",
      EMPTY: "empty",
      NOT_EMPTY: "notEmpty",
      VALIDITY_CHANGE: "validityChange",
      CARD_TYPE_CHANGE: "cardTypeChange",
    },
    defaultMaxLengths: {
      number: 19,
      postalCode: 8,
      expirationDate: 7,
      expirationMonth: 2,
      expirationYear: 4,
      cvv: 3,
    },
    externalClasses: {
      FOCUSED: "braintree-hosted-fields-focused",
      INVALID: "braintree-hosted-fields-invalid",
      VALID: "braintree-hosted-fields-valid",
    },
    navigationDirections: { BACK: "before", FORWARD: "after" },
    defaultIFrameStyle: {
      border: "none",
      width: "100%",
      height: "100%",
      float: "left",
    },
    tokenizationErrorCodes: {
      81724: a$.HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE,
      81736: a$.HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED,
    },
    allowedStyles: [
      "-moz-appearance",
      "-moz-box-shadow",
      "-moz-osx-font-smoothing",
      "-moz-tap-highlight-color",
      "-moz-transition",
      "-webkit-appearance",
      "-webkit-box-shadow",
      "-webkit-font-smoothing",
      "-webkit-tap-highlight-color",
      "-webkit-transition",
      "appearance",
      "box-shadow",
      "color",
      "direction",
      "font",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-variant-alternates",
      "font-variant-caps",
      "font-variant-east-asian",
      "font-variant-ligatures",
      "font-variant-numeric",
      "font-weight",
      "letter-spacing",
      "line-height",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "opacity",
      "outline",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "text-align",
      "text-shadow",
      "transition",
    ],
    allowedFields: {
      cardholderName: { name: "cardholder-name", label: "Cardholder Name" },
      number: { name: "credit-card-number", label: "Credit Card Number" },
      cvv: { name: "cvv", label: "CVV" },
      expirationDate: { name: "expiration", label: "Expiration Date" },
      expirationMonth: { name: "expiration-month", label: "Expiration Month" },
      expirationYear: { name: "expiration-year", label: "Expiration Year" },
      postalCode: { name: "postal-code", label: "Postal Code" },
    },
    allowedAttributes: {
      "aria-invalid": "boolean",
      "aria-required": "boolean",
      disabled: "boolean",
      placeholder: "string",
    },
    autocompleteMappings: {
      "cardholder-name": "cc-name",
      "credit-card-number": "cc-number",
      expiration: "cc-exp",
      "expiration-month": "cc-exp-month",
      "expiration-year": "cc-exp-year",
      cvv: "cc-csc",
      "postal-code": "billing postal-code",
    },
  };
a0.events = aX(
  [
    "ADD_CLASS",
    "AUTOFILL_DATA_AVAILABLE",
    "BIN_AVAILABLE",
    "CARD_FORM_ENTRY_HAS_BEGUN",
    "CLEAR_FIELD",
    "CONFIGURATION",
    "FRAME_READY",
    "INPUT_EVENT",
    "READY_FOR_CLIENT",
    "REMOVE_ATTRIBUTE",
    "REMOVE_CLASS",
    "REMOVE_FOCUS_INTERCEPTS",
    "SET_ATTRIBUTE",
    "SET_MESSAGE",
    "SET_MONTH_OPTIONS",
    "TOKENIZATION_REQUEST",
    "TRIGGER_FOCUS_CHANGE",
    "TRIGGER_INPUT_FOCUS",
    "VALIDATE_STRICT",
  ],
  "hosted-fields:"
);
var a2 = a0;
function a3(e) {
  return e ? "" : ".min";
}
var a4 = a3,
  a5 = a2,
  a6 = a4,
  a7 = function (e, t, n) {
    return (
      e +
      "/web/" +
      a5.VERSION +
      "/html/hosted-fields-frame" +
      a6(n) +
      ".html#" +
      t
    );
  },
  a8 = a2.allowedStyles,
  a9 = function (e) {
    var t,
      n = document.createElement("input"),
      r = {};
    return (
      "." === e[0] && (e = e.substring(1)),
      (n.className = e),
      (n.style.display = "none !important"),
      (n.style.position = "fixed !important"),
      (n.style.left = "-99999px !important"),
      (n.style.top = "-99999px !important"),
      document.body.appendChild(n),
      (t = window.getComputedStyle(n)),
      a8.forEach(function (e) {
        var n = t[e];
        n && (r[e] = n);
      }),
      document.body.removeChild(n),
      r
    );
  };
function oe(e, t) {
  for (var n = e.parentNode, r = []; null != n; )
    null != n.tagName && n.tagName.toLowerCase() === t && r.push(n),
      (n = n.parentNode);
  return r;
}
var ot = oe,
  on = {},
  or = {
    get exports() {
      return on;
    },
    set exports(v) {
      on = v;
    },
  },
  oi = function (e) {
    return (e = e || window.navigator.userAgent), /Android/i.test(e);
  };
or.exports = oi;
var oa = {},
  oo = {
    get exports() {
      return oa;
    },
    set exports(v) {
      oa = v;
    },
  },
  os = function (e) {
    return (e = e || window.navigator.userAgent), /CrOS/i.test(e);
  };
oo.exports = os;
var od = {},
  ol = {
    get exports() {
      return od;
    },
    set exports(v) {
      od = v;
    },
  },
  oc = function (e) {
    return (e = e || window.navigator.userAgent), /iPhone|iPod|iPad/i.test(e);
  };
ol.exports = oc;
var op = {},
  ou = {
    get exports() {
      return op;
    },
    set exports(v) {
      op = v;
    },
  };
function oh() {
  return s
    ? o
    : ((s = 1),
      (o = function (e) {
        return -1 !== (e = e || window.navigator.userAgent).indexOf("Edge/");
      }));
}
var om = function (e) {
    return (e = e || window.navigator.userAgent), /SamsungBrowser/i.test(e);
  },
  oy = function (e) {
    return -1 !== (e = e || window.navigator.userAgent).indexOf("DuckDuckGo/");
  },
  of = function (e) {
    return (
      -1 !== (e = e || window.navigator.userAgent).indexOf("OPR/") ||
      -1 !== e.indexOf("Opera/") ||
      -1 !== e.indexOf("OPT/")
    );
  },
  oE = function (e) {
    return -1 !== (e = e || window.navigator.userAgent).indexOf("Silk/");
  },
  o_ = oh(),
  ov = om,
  og = oy,
  oP = of,
  oC = oE,
  ob = function (e) {
    return (
      (-1 !== (e = e || window.navigator.userAgent).indexOf("Chrome") ||
        -1 !== e.indexOf("CriOS")) &&
      !o_(e) &&
      !ov(e) &&
      !og(e) &&
      !oP(e) &&
      !oC(e)
    );
  };
ou.exports = ob;
var oT = {},
  oA = {
    get exports() {
      return oT;
    },
    set exports(v) {
      oT = v;
    },
  };
function oI() {
  return d || ((d = 1), (oA.exports = oh())), oT;
}
var oD = {},
  oN = {
    get exports() {
      return oD;
    },
    set exports(v) {
      oD = v;
    },
  },
  oO = function (e) {
    return -1 !== (e = e || window.navigator.userAgent).indexOf("MSIE 10");
  };
oN.exports = oO;
var ox = {},
  oF = {
    get exports() {
      return ox;
    },
    set exports(v) {
      ox = v;
    },
  };
function oM() {
  return c
    ? l
    : ((c = 1),
      (l = function (e) {
        return (e = e || window.navigator.userAgent), /Firefox/i.test(e);
      }));
}
function ow() {
  return p || ((p = 1), (oF.exports = oM())), ox;
}
var oL = {},
  oS = {
    get exports() {
      return oL;
    },
    set exports(v) {
      oL = v;
    },
  },
  oR = oc;
function ok(e) {
  return /\bGSA\b/.test(e);
}
var oV = function (e) {
    return oR((e = e || window.navigator.userAgent)) && ok(e);
  },
  oz = oc,
  oU = oV,
  oH = function (e) {
    return (
      !!oz((e = e || window.navigator.userAgent)) &&
      (!!oU(e) || /.+AppleWebKit(?!.*Safari)/i.test(e))
    );
  };
oS.exports = oH;
var oB = on,
  oj = oa,
  oW = od,
  oK = op;
function oY() {
  return oB() || oj() || oW();
}
function oG() {
  return oK() && oW();
}
var oq = {
    isIE: O,
    isEdge: oI(),
    isIe9: L,
    isIe10: oD,
    isAndroid: oB,
    isChromeOS: oj,
    isChromeIos: oG,
    isFirefox: ow(),
    isIos: oW,
    isIosWebview: oL,
    hasSoftwareKeyboard: oY,
  },
  oQ = oq,
  oZ = rK,
  oJ = a2,
  oX = Object.keys(oJ.allowedFields),
  o$ = oJ.navigationDirections,
  o1 = {
    generate: function (e, t, n, r) {
      var i = document.createElement("input");
      return oQ.hasSoftwareKeyboard() || oQ.isFirefox() || oQ.isIE()
        ? (i.setAttribute("aria-hidden", "true"),
          i.setAttribute("autocomplete", "off"),
          i.setAttribute("data-braintree-direction", n),
          i.setAttribute("data-braintree-type", t),
          i.setAttribute("id", "bt-" + t + "-" + n + "-" + e),
          i.setAttribute(
            "style",
            JSON.stringify({
              border: "none !important",
              display: "block !important",
              height: "1px !important",
              left: "-1px !important",
              opacity: "0 !important",
              position: "absolute !important",
              top: "-1px !important",
              width: "1px !important",
            })
              .replace(/[{}"]/g, "")
              .replace(/,/g, ";")
          ),
          oZ.add(i, "focus-intercept"),
          i.addEventListener("focus", function (e) {
            r(e), oQ.hasSoftwareKeyboard() || i.blur();
          }),
          i)
        : document.createDocumentFragment();
    },
    destroy: function (e) {
      var t;
      e
        ? (t = [document.getElementById(e)])
        : ((t = document.querySelectorAll("[data-braintree-direction]")),
          (t = [].slice.call(t))),
        t.forEach(function (e) {
          e &&
            1 === e.nodeType &&
            o1.matchFocusElement(e.getAttribute("id")) &&
            e.parentNode.removeChild(e);
        });
    },
    matchFocusElement: function (e) {
      var t, n, r, i;
      return (
        !!e &&
        !((t = e.split("-")).length < 4) &&
        ((n = "bt" === t[0]),
        (r = oX.indexOf(t[1]) > -1),
        (i = t[2] === o$.BACK || t[2] === o$.FORWARD),
        Boolean(n && r && i))
      );
    },
  },
  o0 = o1,
  o2 = o0,
  o3 = a2.navigationDirections,
  o4 = function (e, t, n, r) {
    var i = t.getAttribute("type"),
      a = document.createElement("div"),
      o = document.createDocumentFragment(),
      s = o2.generate(e, i, o3.BACK, r),
      d = o2.generate(e, i, o3.FORWARD, r);
    return (
      (a.style.clear = "both"),
      o.appendChild(s),
      o.appendChild(t),
      o.appendChild(d),
      o.appendChild(a),
      n.appendChild(o),
      [t, a]
    );
  },
  o5 = function (e) {
    for (; e.parentNode; ) e = e.parentNode;
    return e;
  },
  o6 = Q,
  o7 = o5;
function o8(e) {
  return "[object ShadowRoot]" === (e = o7(e)).toString();
}
function o9(e) {
  return o8((e = o7(e))) ? e.host : null;
}
function se(e, t) {
  var n = o7(e).querySelector("style"),
    r = o9(e),
    i = "shadow-slot-" + o6(),
    a = document.createElement("slot"),
    o = document.createElement("div");
  return (a.setAttribute("name", i),
  e.appendChild(a),
  o.setAttribute("slot", i),
  r.appendChild(o),
  t &&
    (n || ((n = document.createElement("style")), e.appendChild(n)),
    n.sheet.insertRule('::slotted([slot="' + i + '"]) { ' + t + " }")),
  o8(r))
    ? se(o, t)
    : o;
}
var st = { isShadowElement: o8, getShadowHost: o9, transformToSlot: se },
  sn = {
    visa: {
      niceType: "Visa",
      type: "visa",
      patterns: [4],
      gaps: [4, 8, 12],
      lengths: [16, 18, 19],
      code: { name: "CVV", size: 3 },
    },
    mastercard: {
      niceType: "Mastercard",
      type: "mastercard",
      patterns: [
        [51, 55],
        [2221, 2229],
        [223, 229],
        [23, 26],
        [270, 271],
        2720,
      ],
      gaps: [4, 8, 12],
      lengths: [16],
      code: { name: "CVC", size: 3 },
    },
    "american-express": {
      niceType: "American Express",
      type: "american-express",
      patterns: [34, 37],
      gaps: [4, 10],
      lengths: [15],
      code: { name: "CID", size: 4 },
    },
    "diners-club": {
      niceType: "Diners Club",
      type: "diners-club",
      patterns: [[300, 305], 36, 38, 39],
      gaps: [4, 10],
      lengths: [14, 16, 19],
      code: { name: "CVV", size: 3 },
    },
    discover: {
      niceType: "Discover",
      type: "discover",
      patterns: [6011, [644, 649], 65],
      gaps: [4, 8, 12],
      lengths: [16, 19],
      code: { name: "CID", size: 3 },
    },
    jcb: {
      niceType: "JCB",
      type: "jcb",
      patterns: [2131, 1800, [3528, 3589]],
      gaps: [4, 8, 12],
      lengths: [16, 17, 18, 19],
      code: { name: "CVV", size: 3 },
    },
    unionpay: {
      niceType: "UnionPay",
      type: "unionpay",
      patterns: [
        620,
        [624, 626],
        [62100, 62182],
        [62184, 62187],
        [62185, 62197],
        [62200, 62205],
        [622010, 622999],
        622018,
        [622019, 622999],
        [62207, 62209],
        [622126, 622925],
        [623, 626],
        6270,
        6272,
        6276,
        [627700, 627779],
        [627781, 627799],
        [6282, 6289],
        6291,
        6292,
        810,
        [8110, 8131],
        [8132, 8151],
        [8152, 8163],
        [8164, 8171],
      ],
      gaps: [4, 8, 12],
      lengths: [14, 15, 16, 17, 18, 19],
      code: { name: "CVN", size: 3 },
    },
    maestro: {
      niceType: "Maestro",
      type: "maestro",
      patterns: [
        493698,
        [5e5, 504174],
        [504176, 506698],
        [506779, 508999],
        [56, 59],
        63,
        67,
        6,
      ],
      gaps: [4, 8, 12],
      lengths: [12, 13, 14, 15, 16, 17, 18, 19],
      code: { name: "CVC", size: 3 },
    },
    elo: {
      niceType: "Elo",
      type: "elo",
      patterns: [
        401178,
        401179,
        438935,
        457631,
        457632,
        431274,
        451416,
        457393,
        504175,
        [506699, 506778],
        [509e3, 509999],
        627780,
        636297,
        636368,
        [650031, 650033],
        [650035, 650051],
        [650405, 650439],
        [650485, 650538],
        [650541, 650598],
        [650700, 650718],
        [650720, 650727],
        [650901, 650978],
        [651652, 651679],
        [655e3, 655019],
        [655021, 655058],
      ],
      gaps: [4, 8, 12],
      lengths: [16],
      code: { name: "CVE", size: 3 },
    },
    mir: {
      niceType: "Mir",
      type: "mir",
      patterns: [[2200, 2204]],
      gaps: [4, 8, 12],
      lengths: [16, 17, 18, 19],
      code: { name: "CVP2", size: 3 },
    },
    hiper: {
      niceType: "Hiper",
      type: "hiper",
      patterns: [637095, 63737423, 63743358, 637568, 637599, 637609, 637612],
      gaps: [4, 8, 12],
      lengths: [16],
      code: { name: "CVC", size: 3 },
    },
    hipercard: {
      niceType: "Hipercard",
      type: "hipercard",
      patterns: [606282],
      gaps: [4, 8, 12],
      lengths: [16],
      code: { name: "CVC", size: 3 },
    },
  },
  sr = sn,
  si = {},
  sa = {};
function so(e) {
  return e ? JSON.parse(JSON.stringify(e)) : null;
}
Object.defineProperty(sa, "__esModule", { value: !0 }),
  (sa.clone = void 0),
  (sa.clone = so);
var ss = {};
function sd(e, t, n) {
  var r = String(t).length,
    i = e.substr(0, r),
    a = parseInt(i, 10);
  return (
    (t = parseInt(String(t).substr(0, i.length), 10)),
    (n = parseInt(String(n).substr(0, i.length), 10)),
    a >= t && a <= n
  );
}
function sl(e, t) {
  return (t = String(t)).substring(0, e.length) === e.substring(0, t.length);
}
function sc(e, t) {
  return Array.isArray(t) ? sd(e, t[0], t[1]) : sl(e, t);
}
Object.defineProperty(ss, "__esModule", { value: !0 }),
  (ss.matches = void 0),
  (ss.matches = sc),
  Object.defineProperty(si, "__esModule", { value: !0 }),
  (si.addMatchingCardsToResults = void 0);
var sp = sa,
  su = ss;
function sh(e, t, n) {
  var r, i;
  for (r = 0; r < t.patterns.length; r++) {
    var a = t.patterns[r];
    if (su.matches(e, a)) {
      var o = sp.clone(t);
      (i = Array.isArray(a) ? String(a[0]).length : String(a).length),
        e.length >= i && (o.matchStrength = i),
        n.push(o);
      break;
    }
  }
}
si.addMatchingCardsToResults = sh;
var sm = {};
function sy(e) {
  return "string" == typeof e || e instanceof String;
}
Object.defineProperty(sm, "__esModule", { value: !0 }),
  (sm.isValidInputType = void 0),
  (sm.isValidInputType = sy);
var sf = {};
function sE(e) {
  var t = e.filter(function (e) {
    return e.matchStrength;
  }).length;
  return t > 0 && t === e.length;
}
function s_(e) {
  return sE(e)
    ? e.reduce(function (e, t) {
        return !e || Number(e.matchStrength) < Number(t.matchStrength) ? t : e;
      })
    : null;
}
Object.defineProperty(sf, "__esModule", { value: !0 }),
  (sf.findBestMatch = void 0),
  (sf.findBestMatch = s_);
var sv =
    (h && h.__assign) ||
    function () {
      return (sv =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }).apply(this, arguments);
    },
  sg = sr,
  sP = si,
  sC = sm,
  sb = sf,
  sT = sa,
  sA = {},
  sI = {
    VISA: "visa",
    MASTERCARD: "mastercard",
    AMERICAN_EXPRESS: "american-express",
    DINERS_CLUB: "diners-club",
    DISCOVER: "discover",
    JCB: "jcb",
    UNIONPAY: "unionpay",
    MAESTRO: "maestro",
    ELO: "elo",
    MIR: "mir",
    HIPER: "hiper",
    HIPERCARD: "hipercard",
  },
  sD = [
    sI.VISA,
    sI.MASTERCARD,
    sI.AMERICAN_EXPRESS,
    sI.DINERS_CLUB,
    sI.DISCOVER,
    sI.JCB,
    sI.UNIONPAY,
    sI.MAESTRO,
    sI.ELO,
    sI.MIR,
    sI.HIPER,
    sI.HIPERCARD,
  ],
  sN = sT.clone(sD);
function sO(e) {
  return sA[e] || sg[e];
}
function sx() {
  return sN.map(function (e) {
    return sT.clone(sO(e));
  });
}
function sF(e, t) {
  void 0 === t && (t = !1);
  var n = sN.indexOf(e);
  if (!t && -1 === n) throw Error('"' + e + '" is not a supported card type.');
  return n;
}
function sM(e) {
  var t = [];
  if (!sC.isValidInputType(e)) return t;
  if (0 === e.length) return sx();
  sN.forEach(function (n) {
    var r = sO(n);
    sP.addMatchingCardsToResults(e, r, t);
  });
  var n = sb.findBestMatch(t);
  return n ? [n] : t;
}
(sM.getTypeInfo = function (e) {
  return sT.clone(sO(e));
}),
  (sM.removeCard = function (e) {
    var t = sF(e);
    sN.splice(t, 1);
  }),
  (sM.addCard = function (e) {
    var t = sF(e.type, !0);
    (sA[e.type] = e), -1 === t && sN.push(e.type);
  }),
  (sM.updateCard = function (e, t) {
    var n = sA[e] || sg[e];
    if (!n)
      throw Error(
        '"' + e + "\" is not a recognized type. Use `addCard` instead.'"
      );
    if (t.type && n.type !== t.type)
      throw Error("Cannot overwrite type parameter.");
    var r = sT.clone(n);
    sA[(r = sv(sv({}, r), t)).type] = r;
  }),
  (sM.changeOrder = function (e, t) {
    var n = sF(e);
    sN.splice(n, 1), sN.splice(t, 0, e);
  }),
  (sM.resetModifications = function () {
    (sN = sT.clone(sD)), (sA = {});
  }),
  (sM.types = sI);
var sw = sM,
  sL = sw,
  sS = function (e) {
    var t = sL(e);
    return (
      t.forEach(function (e) {
        "mastercard" === e.type && (e.type = "master-card");
      }),
      t
    );
  },
  sR = D,
  sk = aJ,
  sV = a2.allowedAttributes;
function sz(e, t) {
  var n;
  return (
    sV.hasOwnProperty(e)
      ? null == t ||
        sU(e, t) ||
        (n = new sR({
          type: sk.HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED.type,
          code: sk.HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED.code,
          message:
            'Value "' + t + '" is not allowed for "' + e + '" attribute.',
        }))
      : (n = new sR({
          type: sk.HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED.type,
          code: sk.HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED.code,
          message:
            'The "' + e + '" attribute is not supported in Hosted Fields.',
        })),
    n
  );
}
function sU(e, t) {
  return "string" === sV[e]
    ? "string" == typeof t || "number" == typeof t
    : "boolean" === sV[e] && ("true" === String(t) || "false" === String(t));
}
var sH = sz,
  sB = a2.navigationDirections,
  sj = oq,
  sW = o0,
  sK = ot,
  sY = ["INPUT", "SELECT", "TEXTAREA"],
  sG = ["hidden", "button", "reset", "submit", "checkbox", "radio", "file"];
function sq(e) {
  return sj.hasSoftwareKeyboard()
    ? sY.indexOf(e.tagName) > -1 && 0 > sG.indexOf(e.type)
    : "hidden" !== e.type;
}
function sQ(e, t) {
  switch (e) {
    case sB.BACK:
      return {
        checkIndexBounds: function (e) {
          return e < 0;
        },
        indexChange: -1,
      };
    case sB.FORWARD:
      return {
        checkIndexBounds: function (e) {
          return e > t - 1;
        },
        indexChange: 1,
      };
  }
  return {};
}
function sZ(e) {
  var t, n;
  for (t = 0; t < e.length; t++) if (sq((n = e[t]))) return n;
  return null;
}
var sJ = {
    removeExtraFocusElements: function (e, t) {
      var n = Array.prototype.slice.call(e.elements);
      [sZ(n), sZ(n.reverse())].forEach(function (e) {
        e &&
          sW.matchFocusElement(e.getAttribute("id")) &&
          t(e.getAttribute("id"));
      });
    },
    createFocusChangeHandler: function (e, t) {
      return function (n) {
        var r,
          i,
          a,
          o,
          s = document.getElementById(
            "bt-" + n.field + "-" + n.direction + "-" + e
          );
        if (s) {
          if (((a = sK(s, "form")[0]), document.forms.length < 1 || !a)) {
            t.onRemoveFocusIntercepts();
            return;
          }
          (r = (a = [].slice.call(a.elements)).indexOf(s)),
            (o = sQ(n.direction, a.length));
          do {
            if (((r += o.indexChange), o.checkIndexBounds(r))) return;
            i = a[r];
          } while (!sq(i));
          sW.matchFocusElement(i.getAttribute("id"))
            ? t.onTriggerInputFocus(i.getAttribute("data-braintree-type"))
            : i.focus();
        }
      };
    },
  },
  sX = ey.assign,
  s$ = ib,
  s1 = tx,
  s0 = i6,
  s2 = rK,
  s3 = aa,
  s4 = aQ,
  s5 = ix,
  s6 = D,
  s7 = a7,
  s8 = a9,
  s9 = a2,
  de = aJ,
  dt = nd.INTEGRATION_TIMEOUT_MS,
  dn = Q,
  dr = ot,
  di = oq,
  da = s9.events,
  ds = r1,
  dd = o4,
  dl = nG,
  dc = s9.allowedFields,
  dp = nq,
  du = st,
  dh = o5,
  dm = n$,
  dy = nZ,
  df = sS,
  dE = sH,
  d_ = t0,
  dv = nn,
  dg = sJ,
  dP = o0.destroy,
  dC = 5;
function db(e) {
  return function (t) {
    var n,
      r = t.merchantPayload,
      i = r.emittedBy,
      a = e[i].containerElement;
    Object.keys(r.fields).forEach(function (t) {
      r.fields[t].container = e[t].containerElement;
    }),
      (n = r.fields[i]),
      s2.toggle(a, s9.externalClasses.FOCUSED, n.isFocused),
      s2.toggle(a, s9.externalClasses.VALID, n.isValid),
      s2.toggle(a, s9.externalClasses.INVALID, !n.isPotentiallyValid),
      (this._state = { cards: r.cards, fields: r.fields }),
      this._emit(t.type, r);
  };
}
function dT(e) {
  var t = e.getBoundingClientRect(),
    n = Math.floor(t.height / 2),
    r = Math.floor(t.width / 2);
  return (
    t.top <
      (window.innerHeight - n || document.documentElement.clientHeight - n) &&
    t.right > r &&
    t.bottom > n &&
    t.left < (window.innerWidth - r || document.documentElement.clientWidth - r)
  );
}
function dA(e) {
  var t,
    n,
    r,
    i,
    a,
    o = this,
    s = {},
    d = {},
    l = [],
    c = dn();
  if (
    ((this._merchantConfigurationOptions = sX({}, e)),
    e.client
      ? ((r = (n = e.client.getConfiguration()).gatewayConfiguration.assetsUrl),
        (i = n.isDebug))
      : ((r = s$.create(e.authorization)), (i = Boolean(e.isDebug))),
    (this._clientPromise = s5.create({
      client: e.client,
      authorization: e.authorization,
      debug: i,
      assetsUrl: r,
      name: "Hosted Fields",
    })),
    (a = s7(r, c, i)),
    !e.fields || 0 === Object.keys(e.fields).length)
  )
    throw new s6({
      type: dy.INSTANTIATION_OPTION_REQUIRED.type,
      code: dy.INSTANTIATION_OPTION_REQUIRED.code,
      message: "options.fields is required when instantiating Hosted Fields.",
    });
  ds.call(this),
    (this._injectedNodes = []),
    (this._destructor = new s0()),
    (this._fields = s),
    (this._state = { fields: {}, cards: df("") }),
    (this._bus = new s4({ channel: c, verifyDomain: s1, targetFrames: [] })),
    this._destructor.registerFunctionForTeardown(function () {
      o._bus.teardown();
    }),
    e.client
      ? dl.sendEvent(this._clientPromise, "custom.hosted-fields.initialized")
      : dl.sendEvent(
          this._clientPromise,
          "custom.hosted-fields.initialized.deferred-client"
        ),
    Object.keys(e.fields).forEach(
      function (t) {
        var n, r, i, p, u;
        if (!s9.allowedFields.hasOwnProperty(t))
          throw new s6({
            type: de.HOSTED_FIELDS_INVALID_FIELD_KEY.type,
            code: de.HOSTED_FIELDS_INVALID_FIELD_KEY.code,
            message: '"' + t + '" is not a valid field.',
          });
        if (
          ("string" == typeof (r = (n = e.fields[t]).container || n.selector) &&
            (r = document.querySelector(r)),
          r && 1 === r.nodeType)
        ) {
          if (r.querySelector('iframe[name^="braintree-"]'))
            throw new s6({
              type: de.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.type,
              code: de.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.code,
              message: de.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.message,
              details: {
                fieldSelector: n.selector,
                fieldContainer: n.container,
                fieldKey: t,
              },
            });
        } else
          throw new s6({
            type: de.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.type,
            code: de.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.code,
            message: de.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.message,
            details: {
              fieldSelector: n.selector,
              fieldContainer: n.container,
              fieldKey: t,
            },
          });
        if (
          ((i = r),
          du.isShadowElement(i) && (i = du.transformToSlot(i, "height: 100%")),
          n.maxlength && "number" != typeof n.maxlength)
        )
          throw new s6({
            type: de.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type,
            code: de.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code,
            message: "The value for maxlength must be a number.",
            details: { fieldKey: t },
          });
        if (n.minlength && "number" != typeof n.minlength)
          throw new s6({
            type: de.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type,
            code: de.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code,
            message: "The value for minlength must be a number.",
            details: { fieldKey: t },
          });
        (p = s3({
          type: t,
          name: "braintree-hosted-field-" + t,
          style: s9.defaultIFrameStyle,
          title:
            n.iframeTitle ||
            "Secure Credit Card Frame - " + s9.allowedFields[t].label,
        })),
          this._bus.addTargetFrame(p),
          this._injectedNodes.push.apply(
            this._injectedNodes,
            dd(c, p, i, function () {
              o.focus(t);
            })
          ),
          this._setupLabelFocus(t, r),
          (s[t] = { frameElement: p, containerElement: r }),
          (u = new d_(function (e) {
            d[t] = e;
          })),
          l.push(u),
          (this._state.fields[t] = {
            isEmpty: !0,
            isValid: !1,
            isPotentiallyValid: !0,
            isFocused: !1,
            container: r,
          }),
          setTimeout(function () {
            di.isIE() || di.isEdge()
              ? ((p.src = "about:blank"),
                setTimeout(function () {
                  p.src = a;
                }, 0))
              : (p.src = a);
          }, 0);
      }.bind(this)
    ),
    this._merchantConfigurationOptions.styles &&
      Object.keys(this._merchantConfigurationOptions.styles).forEach(function (
        e
      ) {
        var t = o._merchantConfigurationOptions.styles[e];
        "string" == typeof t &&
          (o._merchantConfigurationOptions.styles[e] = s8(t));
      }),
    this._bus.on(da.REMOVE_FOCUS_INTERCEPTS, function (e) {
      dP(e && e.id);
    }),
    this._bus.on(
      da.TRIGGER_FOCUS_CHANGE,
      dg.createFocusChangeHandler(c, {
        onRemoveFocusIntercepts: function (e) {
          o._bus.emit(da.REMOVE_FOCUS_INTERCEPTS, { id: e });
        },
        onTriggerInputFocus: function (e) {
          o.focus(e);
        },
      })
    ),
    this._bus.on(da.READY_FOR_CLIENT, function (e) {
      o._clientPromise.then(function (t) {
        e(t);
      });
    }),
    this._bus.on(da.CARD_FORM_ENTRY_HAS_BEGUN, function () {
      dl.sendEvent(o._clientPromise, "hosted-fields.input.started");
    }),
    this._bus.on(da.BIN_AVAILABLE, function (e) {
      o._emit("binAvailable", { bin: e });
    }),
    (t = setTimeout(function () {
      dl.sendEvent(o._clientPromise, "custom.hosted-fields.load.timed-out"),
        o._emit("timeout");
    }, dt)),
    d_.all(l).then(function (e) {
      var n = e[0];
      clearTimeout(t),
        n(dI(o._merchantConfigurationOptions)),
        o._cleanUpFocusIntercepts(),
        o._emit("ready");
    }),
    this._bus.on(da.FRAME_READY, function (e, t) {
      d[e.field](t);
    }),
    this._bus.on(da.INPUT_EVENT, db(s).bind(this)),
    this._destructor.registerFunctionForTeardown(function () {
      var e, t, n;
      for (e = 0; e < o._injectedNodes.length; e++)
        (n = (t = o._injectedNodes[e]).parentNode).removeChild(t),
          s2.remove(
            n,
            s9.externalClasses.FOCUSED,
            s9.externalClasses.INVALID,
            s9.externalClasses.VALID
          );
    }),
    this._destructor.registerFunctionForTeardown(function () {
      dP();
    }),
    this._destructor.registerFunctionForTeardown(function () {
      dm(o, dp(dA.prototype).concat(dp(ds.prototype)));
    });
}
function dI(e) {
  var t = sX({}, e);
  return (
    (t.fields = sX({}, t.fields)),
    Object.keys(t.fields).forEach(function (e) {
      (t.fields[e] = sX({}, t.fields[e])), delete t.fields[e].container;
    }),
    t
  );
}
ds.createChild(dA),
  (dA.prototype._setupLabelFocus = function (e, t) {
    var n,
      r,
      i = this,
      a = dh(t);
    if (null != t.id) {
      for (
        n = Array.prototype.slice.call(
          document.querySelectorAll('label[for="' + t.id + '"]')
        ),
          a !== document &&
            (n = n.concat(
              Array.prototype.slice.call(
                a.querySelectorAll('label[for="' + t.id + '"]')
              )
            )),
          n = (n = n.concat(dr(t, "label"))).filter(function (e, t, n) {
            return n.indexOf(e) === t;
          }),
          r = 0;
        r < n.length;
        r++
      )
        n[r].addEventListener("click", o, !1);
      this._destructor.registerFunctionForTeardown(function () {
        for (r = 0; r < n.length; r++) n[r].removeEventListener("click", o, !1);
      });
    }
    function o() {
      i.focus(e);
    }
  }),
  (dA.prototype._getAnyFieldContainer = function () {
    var e = this;
    return Object.keys(this._fields).reduce(function (t, n) {
      return t || e._fields[n].containerElement;
    }, null);
  }),
  (dA.prototype._cleanUpFocusIntercepts = function () {
    var e;
    document.forms.length < 1
      ? this._bus.emit(da.REMOVE_FOCUS_INTERCEPTS)
      : (e = dr(this._getAnyFieldContainer(), "form")[0])
      ? dg.removeExtraFocusElements(
          e,
          function (e) {
            this._bus.emit(da.REMOVE_FOCUS_INTERCEPTS, { id: e });
          }.bind(this)
        )
      : this._bus.emit(da.REMOVE_FOCUS_INTERCEPTS);
  }),
  (dA.prototype._attachInvalidFieldContainersToError = function (e) {
    e.details &&
      e.details.invalidFieldKeys &&
      e.details.invalidFieldKeys.length > 0 &&
      ((e.details.invalidFields = {}),
      e.details.invalidFieldKeys.forEach(
        function (t) {
          e.details.invalidFields[t] = this._fields[t].containerElement;
        }.bind(this)
      ));
  }),
  (dA.prototype.getChallenges = function () {
    return this._clientPromise.then(function (e) {
      return e.getConfiguration().gatewayConfiguration.challenges;
    });
  }),
  (dA.prototype.getSupportedCardTypes = function () {
    return this._clientPromise.then(function (e) {
      return e
        .getConfiguration()
        .gatewayConfiguration.creditCards.supportedCardTypes.map(function (e) {
          return "MasterCard" === e ? "Mastercard" : e;
        });
    });
  }),
  (dA.prototype.teardown = function () {
    var e = this;
    return new d_(function (t, n) {
      e._destructor.teardown(function (r) {
        dl.sendEvent(
          e._clientPromise,
          "custom.hosted-fields.teardown-completed"
        ),
          r ? n(r) : t();
      });
    });
  }),
  (dA.prototype.tokenize = function (e) {
    var t = this;
    return (
      e || (e = {}),
      new d_(function (n, r) {
        t._bus.emit(da.TOKENIZATION_REQUEST, e, function (e) {
          var i = e[0],
            a = e[1];
          i ? (t._attachInvalidFieldContainersToError(i), r(new s6(i))) : n(a);
        });
      })
    );
  }),
  (dA.prototype.addClass = function (e, t) {
    var n;
    return (dc.hasOwnProperty(e)
      ? this._fields.hasOwnProperty(e)
        ? this._bus.emit(da.ADD_CLASS, { field: e, classname: t })
        : (n = new s6({
            type: de.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
            code: de.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
            message:
              'Cannot add class to "' +
              e +
              '" field because it is not part of the current Hosted Fields options.',
          }))
      : (n = new s6({
          type: de.HOSTED_FIELDS_FIELD_INVALID.type,
          code: de.HOSTED_FIELDS_FIELD_INVALID.code,
          message:
            '"' +
            e +
            '" is not a valid field. You must use a valid field option when adding a class.',
        })),
    n)
      ? d_.reject(n)
      : d_.resolve();
  }),
  (dA.prototype.removeClass = function (e, t) {
    var n;
    return (dc.hasOwnProperty(e)
      ? this._fields.hasOwnProperty(e)
        ? this._bus.emit(da.REMOVE_CLASS, { field: e, classname: t })
        : (n = new s6({
            type: de.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
            code: de.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
            message:
              'Cannot remove class from "' +
              e +
              '" field because it is not part of the current Hosted Fields options.',
          }))
      : (n = new s6({
          type: de.HOSTED_FIELDS_FIELD_INVALID.type,
          code: de.HOSTED_FIELDS_FIELD_INVALID.code,
          message:
            '"' +
            e +
            '" is not a valid field. You must use a valid field option when removing a class.',
        })),
    n)
      ? d_.reject(n)
      : d_.resolve();
  }),
  (dA.prototype.setAttribute = function (e) {
    var t, n;
    return (dc.hasOwnProperty(e.field)
      ? this._fields.hasOwnProperty(e.field)
        ? (t = dE(e.attribute, e.value))
          ? (n = t)
          : this._bus.emit(da.SET_ATTRIBUTE, {
              field: e.field,
              attribute: e.attribute,
              value: e.value,
            })
        : (n = new s6({
            type: de.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
            code: de.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
            message:
              'Cannot set attribute for "' +
              e.field +
              '" field because it is not part of the current Hosted Fields options.',
          }))
      : (n = new s6({
          type: de.HOSTED_FIELDS_FIELD_INVALID.type,
          code: de.HOSTED_FIELDS_FIELD_INVALID.code,
          message:
            '"' +
            e.field +
            '" is not a valid field. You must use a valid field option when setting an attribute.',
        })),
    n)
      ? d_.reject(n)
      : d_.resolve();
  }),
  (dA.prototype.setMonthOptions = function (e) {
    var t,
      n = this,
      r = this._merchantConfigurationOptions.fields;
    return (r.expirationMonth
      ? r.expirationMonth.select ||
        (t = "Expiration month field must be a select element.")
      : (t = "Expiration month field must exist to use setMonthOptions."),
    t)
      ? d_.reject(
          new s6({
            type: de.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type,
            code: de.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code,
            message: t,
          })
        )
      : new d_(function (t) {
          n._bus.emit(da.SET_MONTH_OPTIONS, e, t);
        });
  }),
  (dA.prototype.setMessage = function (e) {
    this._bus.emit(da.SET_MESSAGE, { field: e.field, message: e.message });
  }),
  (dA.prototype.removeAttribute = function (e) {
    var t, n;
    return (dc.hasOwnProperty(e.field)
      ? this._fields.hasOwnProperty(e.field)
        ? (t = dE(e.attribute))
          ? (n = t)
          : this._bus.emit(da.REMOVE_ATTRIBUTE, {
              field: e.field,
              attribute: e.attribute,
            })
        : (n = new s6({
            type: de.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
            code: de.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
            message:
              'Cannot remove attribute for "' +
              e.field +
              '" field because it is not part of the current Hosted Fields options.',
          }))
      : (n = new s6({
          type: de.HOSTED_FIELDS_FIELD_INVALID.type,
          code: de.HOSTED_FIELDS_FIELD_INVALID.code,
          message:
            '"' +
            e.field +
            '" is not a valid field. You must use a valid field option when removing an attribute.',
        })),
    n)
      ? d_.reject(n)
      : d_.resolve();
  }),
  (dA.prototype.setPlaceholder = function (e, t) {
    return this.setAttribute({ field: e, attribute: "placeholder", value: t });
  }),
  (dA.prototype.clear = function (e) {
    var t;
    return (dc.hasOwnProperty(e)
      ? this._fields.hasOwnProperty(e)
        ? this._bus.emit(da.CLEAR_FIELD, { field: e })
        : (t = new s6({
            type: de.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
            code: de.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
            message:
              'Cannot clear "' +
              e +
              '" field because it is not part of the current Hosted Fields options.',
          }))
      : (t = new s6({
          type: de.HOSTED_FIELDS_FIELD_INVALID.type,
          code: de.HOSTED_FIELDS_FIELD_INVALID.code,
          message:
            '"' +
            e +
            '" is not a valid field. You must use a valid field option when clearing a field.',
        })),
    t)
      ? d_.reject(t)
      : d_.resolve();
  }),
  (dA.prototype.focus = function (e) {
    var t,
      n = this._fields[e];
    return (dc.hasOwnProperty(e)
      ? this._fields.hasOwnProperty(e)
        ? (n.frameElement.focus(),
          this._bus.emit(da.TRIGGER_INPUT_FOCUS, { field: e }),
          di.isIos() &&
            setTimeout(function () {
              dT(n.containerElement) || n.containerElement.scrollIntoView();
            }, dC))
        : (t = new s6({
            type: de.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
            code: de.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
            message:
              'Cannot focus "' +
              e +
              '" field because it is not part of the current Hosted Fields options.',
          }))
      : (t = new s6({
          type: de.HOSTED_FIELDS_FIELD_INVALID.type,
          code: de.HOSTED_FIELDS_FIELD_INVALID.code,
          message:
            '"' +
            e +
            '" is not a valid field. You must use a valid field option when focusing a field.',
        })),
    t)
      ? d_.reject(t)
      : d_.resolve();
  }),
  (dA.prototype.getState = function () {
    return this._state;
  });
var dD = dv.wrapPrototype(dA),
  dN = {},
  dO = {
    get exports() {
      return dN;
    },
    set exports(v) {
      dN = v;
    },
  },
  dx = {};
Object.defineProperty(dx, "__esModule", { value: !0 }),
  (dx.isIos =
    dx.isIE9 =
    dx.isSamsungBrowser =
    dx.isAndroidChrome =
    dx.isKitKatWebview =
      void 0);
var dF =
    "undefined" != typeof window &&
    window.navigator &&
    window.navigator.userAgent,
  dM = on,
  dw = oa,
  dL = op,
  dS = od;
dx.isIos = dS;
var dR = L;
dx.isIE9 = dR;
var dk = /Version\/\d\.\d* Chrome\/\d*\.0\.0\.0/;
function dV(e) {
  return !dL(e) && e.indexOf("Samsung") > -1;
}
function dz(e) {
  return void 0 === e && (e = dF), dM(e) && dk.test(e);
}
function dU(e) {
  return void 0 === e && (e = dF), (dM(e) || dw(e)) && dL(e);
}
function dH(e) {
  return void 0 === e && (e = dF), /SamsungBrowser/.test(e) || dV(e);
}
(dx.isKitKatWebview = dz),
  (dx.isAndroidChrome = dU),
  (dx.isSamsungBrowser = dH);
var dB = dx,
  dj = function () {
    return !(0, dB.isSamsungBrowser)();
  };
dO.exports = dj;
var dW = dD,
  dK = ig,
  dY = aJ,
  dG = dN,
  dq = nn,
  dQ = D,
  dZ = t0,
  dJ = "3.91.0";
function dX(e) {
  return dK
    .verify({
      name: "Hosted Fields",
      authorization: e.authorization,
      client: e.client,
    })
    .then(function () {
      var t = new dW(e);
      return new dZ(function (e, n) {
        t.on("ready", function () {
          e(t);
        }),
          t.on("timeout", function () {
            n(new dQ(dY.HOSTED_FIELDS_TIMEOUT));
          });
      });
    });
}
var d$ = { supportsInputFormatting: dG, create: dq(dX), VERSION: dJ },
  d1 = function (e) {
    return Boolean(
      (e = e || h).document.characterSet &&
        "utf-8" === e.document.characterSet.toLowerCase()
    );
  },
  d0 = L,
  d2 = oD,
  d3 = { isIe9: d0, isIe10: d2 },
  d4 = d3;
function d5(e) {
  return !!e && ("none" === e.style.display || d5(e.parentNode));
}
function d6(e, t, n) {
  if (d4.isIe9() || d5(e)) {
    n();
    return;
  }
  e.addEventListener("transitionend", function r(i) {
    i.propertyName === t && (e.removeEventListener("transitionend", r), n());
  });
}
var d7 = { onTransitionEnd: d6 },
  d8 = E.assign,
  d9 = it,
  le = rK,
  lt = C,
  ln = rX,
  lr = d$,
  li = d1,
  la = d7,
  lo = r4,
  ls =
    '<div data-braintree-id="visa-card-icon" class="braintree-sheet__card-icon">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-visa"></use>\n    </svg>\n</div>\n<div data-braintree-id="master-card-card-icon" class="braintree-sheet__card-icon">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-master-card"></use>\n    </svg>\n</div>\n<div data-braintree-id="unionpay-card-icon" class="braintree-sheet__card-icon">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-unionpay"></use>\n    </svg>\n</div>\n<div data-braintree-id="american-express-card-icon" class="braintree-sheet__card-icon">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-american-express"></use>\n    </svg>\n</div>\n<div data-braintree-id="jcb-card-icon" class="braintree-sheet__card-icon">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-jcb"></use>\n    </svg>\n</div>\n<!--Elo, Hiper, and Hipercard currently use the generic icon.\nThe  braintree-hidden class should be removed here once we get icons for these cards-->\n<div data-braintree-id="elo-card-icon" class="braintree-sheet__card-icon braintree-hidden">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-elo"></use>\n    </svg>\n</div>\n<div data-braintree-id="hiper-card-icon" class="braintree-sheet__card-icon braintree-hidden">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-hiper"></use>\n    </svg>\n</div>\n<div data-braintree-id="hipercard-card-icon" class="braintree-sheet__card-icon braintree-hidden">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-hipercard"></use>\n    </svg>\n</div>\n<!-- Remove braintree-hidden class when supportedCardType accurately indicates Diners Club support -->\n<div data-braintree-id="diners-club-card-icon" class="braintree-sheet__card-icon braintree-hidden">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-diners-club"></use>\n    </svg>\n</div>\n<div data-braintree-id="discover-card-icon" class="braintree-sheet__card-icon">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-discover"></use>\n    </svg>\n</div>\n<div data-braintree-id="maestro-card-icon" class="braintree-sheet__card-icon">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-maestro"></use>\n    </svg>\n</div>\n',
  ld = ["empty", "inputSubmitRequest", "binAvailable"];
function ll() {
  d9.apply(this, arguments);
}
function lc() {
  var e = document.activeElement && document.activeElement.id;
  return (
    document.activeElement instanceof HTMLIFrameElement &&
    -1 !== e.indexOf("braintree-hosted-field")
  );
}
function lp(e) {
  return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function lu(e) {
  return e[0].toUpperCase() + e.substr(1);
}
function lh(e) {
  Object.keys(e).forEach(function (t) {
    e[lp(t)] = e[t];
  });
}
function lm(e) {
  var t = li() ? "ΓÇó" : "*";
  return Array(e + 1).join(t);
}
function ly() {
  var e = lm(4);
  return [e, e, e, e].join(" ");
}
(ll.prototype = Object.create(d9.prototype)),
  (ll.prototype.constructor = ll),
  (ll.ID = ll.prototype.ID = lt.paymentOptionIDs.card),
  (ll.prototype.initialize = function () {
    var e,
      t,
      n,
      r = this.getElementById("cardholder-name-field-group"),
      i = this.getElementById("card-view-icons");
    return (
      this.model.merchantConfiguration.card &&
      !0 !== this.model.merchantConfiguration.card
        ? (this.merchantConfiguration = this.model.merchantConfiguration.card)
        : (this.merchantConfiguration = {}),
      (this.merchantConfiguration.vault =
        this.merchantConfiguration.vault || {}),
      (this.hasCardholderName = Boolean(
        this.merchantConfiguration.cardholderName
      )),
      (this.cardholderNameRequired =
        this.hasCardholderName &&
        !0 === this.merchantConfiguration.cardholderName.required),
      (n = this._generateHostedFieldsOptions()),
      (i.innerHTML = ls),
      this._hideUnsupportedCardIcons(),
      (this.hasCVV = n.fields.cvv),
      (this.saveCardInput = this.getElementById("save-card-input")),
      (this.cardNumberIcon = this.getElementById("card-number-icon")),
      (this.cardNumberIconSvg = this.getElementById("card-number-icon-svg")),
      (this.cvvIcon = this.getElementById("cvv-icon")),
      (this.cvvIconSvg = this.getElementById("cvv-icon-svg")),
      (this.cvvLabelDescriptor = this.getElementById("cvv-label-descriptor")),
      (this.fieldErrors = {}),
      this.hasCardholderName || r.parentNode.removeChild(r),
      this.hasCVV ||
        (e = this.getElementById("cvv-field-group")).parentNode.removeChild(e),
      n.fields.postalCode ||
        (t = this.getElementById(
          "postal-code-field-group"
        )).parentNode.removeChild(t),
      this.model.isGuestCheckout ||
        !0 !== this.merchantConfiguration.vault.allowVaultCardOverride ||
        le.remove(
          this.getElementById("save-card-field-group"),
          "braintree-hidden"
        ),
      !1 === this.merchantConfiguration.vault.vaultCard &&
        (this.saveCardInput.checked = !1),
      lr
        .create(n)
        .then(
          function (e) {
            (this.hostedFieldsInstance = e),
              this.hostedFieldsInstance.on(
                "blur",
                this._onBlurEvent.bind(this)
              ),
              this.hostedFieldsInstance.on(
                "cardTypeChange",
                this._onCardTypeChangeEvent.bind(this)
              ),
              this.hostedFieldsInstance.on(
                "focus",
                this._onFocusEvent.bind(this)
              ),
              this.hostedFieldsInstance.on(
                "notEmpty",
                this._onNotEmptyEvent.bind(this)
              ),
              this.hostedFieldsInstance.on(
                "validityChange",
                this._onValidityChangeEvent.bind(this)
              ),
              ld.forEach(
                function (e) {
                  this.hostedFieldsInstance.on(
                    e,
                    function (t) {
                      this.model._emit("card:" + e, t);
                    }.bind(this)
                  );
                }.bind(this)
              ),
              this.model.asyncDependencyReady(ll.ID);
          }.bind(this)
        )
        .catch(
          function (e) {
            this.model.asyncDependencyFailed({ view: this.ID, error: e });
          }.bind(this)
        )
    );
  }),
  (ll.prototype._sendRequestableEvent = function () {
    this._isTokenizing ||
      this.model.setPaymentMethodRequestable({
        isRequestable: this._validateForm(),
        type: lt.paymentMethodTypes.card,
      });
  }),
  (ll.prototype._generateHostedFieldsOptions = function () {
    var e = this.client.getConfiguration().gatewayConfiguration.challenges,
      t = -1 !== e.indexOf("cvv"),
      n = -1 !== e.indexOf("postal_code"),
      r = this.merchantConfiguration.overrides,
      i = {
        client: this.client,
        fields: {
          cardholderName: {
            container: this._getFieldContainer("cardholder-name"),
            placeholder: this.strings.cardholderNamePlaceholder,
          },
          number: {
            container: this._getFieldContainer("number"),
            placeholder: ly(),
          },
          expirationDate: {
            container: this._getFieldContainer("expiration"),
            placeholder: this.strings.expirationDatePlaceholder,
          },
          cvv: {
            container: this._getFieldContainer("cvv"),
            placeholder: lm(3),
          },
          postalCode: { container: this._getFieldContainer("postal-code") },
        },
        styles: {
          input: {
            "font-size": "16px",
            "font-family":
              '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
            color: "#000",
          },
          ":focus": { color: "black" },
          "::-webkit-input-placeholder": { color: "#6a6a6a" },
          ":-moz-placeholder": { color: "#6a6a6a" },
          "::-moz-placeholder": { color: "#6a6a6a" },
          ":-ms-input-placeholder ": { color: "#6a6a6a" },
          "input::-ms-clear": { color: "transparent" },
        },
      };
    return (
      this.hasCardholderName || delete i.fields.cardholderName,
      t || delete i.fields.cvv,
      n || delete i.fields.postalCode,
      r &&
        (r.fields &&
          (r.fields.cvv &&
            void 0 !== r.fields.cvv.placeholder &&
            (this._hasCustomCVVPlaceholder = !0),
          Object.keys(r.fields).forEach(function (e) {
            if (("cvv" === e || "postalCode" === e) && null === r.fields[e]) {
              delete i.fields[e];
              return;
            }
            i.fields[e] &&
              d8(i.fields[e], r.fields[e], { selector: i.fields[e].selector });
          })),
        r.styles &&
          Object.keys(r.styles).forEach(function (e) {
            if (null === r.styles[e]) {
              delete i.styles[e];
              return;
            }
            if ("string" == typeof r.styles[e]) {
              i.styles[e] = r.styles[e];
              return;
            }
            lh(r.styles[e]),
              (i.styles[e] = i.styles[e] || {}),
              d8(i.styles[e], r.styles[e]);
          })),
      i
    );
  }),
  (ll.prototype._validateForm = function (e) {
    var t,
      n,
      r,
      i = !0,
      a =
        this.client.getConfiguration().gatewayConfiguration.creditCards
          .supportedCardTypes;
    return (
      !!this.hostedFieldsInstance &&
      (Object.keys((r = this.hostedFieldsInstance.getState()).fields).forEach(
        function (t) {
          var n = r.fields[t];
          (e || i) &&
            (n.isEmpty
              ? this.cardholderNameRequired || "cardholderName" !== t
                ? ((i = !1),
                  e &&
                    this.showFieldError(
                      t,
                      this.strings["fieldEmptyFor" + lu(t)]
                    ))
                : (i = !0)
              : !n.isValid &&
                ((i = !1),
                e &&
                  this.showFieldError(
                    t,
                    this.strings["fieldInvalidFor" + lu(t)]
                  )));
        }.bind(this)
      ),
      r.fields.number.isValid &&
        !(
          (n = (t = r.cards[0]) && lt.configurationCardTypes[t.type]) &&
          -1 !== a.indexOf(n)
        ) &&
        ((i = !1),
        e &&
          this.showFieldError("number", this.strings.unsupportedCardTypeError)),
      i)
    );
  }),
  (ll.prototype.getPaymentMethod = function () {
    if (this._validateForm()) return { type: lt.paymentMethodTypes.card };
  }),
  (ll.prototype.tokenize = function () {
    var e,
      t = this,
      n = t.hostedFieldsInstance.getState(),
      r = { vault: this._shouldVault() };
    return (this.model.clearError(), this._validateForm(!0))
      ? (!this.cardholderNameRequired &&
          n.fields.cardholderName &&
          n.fields.cardholderName.isEmpty &&
          (r.fieldsToTokenize = Object.keys(n.fields).filter(function (e) {
            return "cardholderName" !== e;
          })),
        (t._isTokenizing = !0),
        t.hostedFieldsInstance
          .tokenize(r)
          .then(function (r) {
            return (
              !1 !== t.merchantConfiguration.clearFieldsAfterTokenization &&
                Object.keys(n.fields).forEach(function (e) {
                  t.hostedFieldsInstance.clear(e);
                }),
              t._shouldVault() && (r.vaulted = !0),
              new lo(function (n) {
                (e = function () {
                  setTimeout(function () {
                    t.model.addPaymentMethod(r),
                      n(r),
                      le.remove(t.element, "braintree-sheet--tokenized");
                  }, 0);
                }),
                  la.onTransitionEnd(t.element, "max-height", e),
                  setTimeout(function () {
                    t.allowUserAction(), (t._isTokenizing = !1);
                  }, lt.CHANGE_ACTIVE_PAYMENT_METHOD_TIMEOUT),
                  le.add(t.element, "braintree-sheet--tokenized");
              })
            );
          })
          .catch(function (e) {
            return (
              (t._isTokenizing = !1),
              t.model.reportError(e),
              t.allowUserAction(),
              lo.reject(
                new ln({
                  message: lt.errors.NO_PAYMENT_METHOD_ERROR,
                  braintreeWebError: e,
                })
              )
            );
          }))
      : (t.model.reportError("hostedFieldsFieldsInvalidError"),
        t.allowUserAction(),
        lo.reject(new ln(lt.errors.NO_PAYMENT_METHOD_ERROR)));
  }),
  (ll.prototype.showFieldError = function (e, t) {
    var n = this.getElementById(lp(e) + "-field-group"),
      r = n.querySelector("input");
    this.fieldErrors.hasOwnProperty(e) ||
      (this.fieldErrors[e] = this.getElementById(lp(e) + "-field-error")),
      le.add(n, "braintree-form__field-group--has-error"),
      (this.fieldErrors[e].innerHTML = t),
      r
        ? r.setAttribute("aria-invalid", !0)
        : (this.hostedFieldsInstance.setAttribute({
            field: e,
            attribute: "aria-invalid",
            value: !0,
          }),
          this.hostedFieldsInstance.setMessage({ field: e, message: t }));
  }),
  (ll.prototype.hideFieldError = function (e) {
    var t = this.getElementById(lp(e) + "-field-group"),
      n = t.querySelector("input");
    this.fieldErrors.hasOwnProperty(e) ||
      (this.fieldErrors[e] = this.getElementById(lp(e) + "-field-error")),
      le.remove(t, "braintree-form__field-group--has-error"),
      n
        ? n.removeAttribute("aria-invalid")
        : (this.hostedFieldsInstance.removeAttribute({
            field: e,
            attribute: "aria-invalid",
          }),
          this.hostedFieldsInstance.setMessage({ field: e, message: "" }));
  }),
  (ll.prototype.teardown = function () {
    return this.hostedFieldsInstance.teardown();
  }),
  (ll.prototype._shouldVault = function () {
    return !this.model.isGuestCheckout && this.saveCardInput.checked;
  }),
  (ll.prototype._getFieldContainer = function (e) {
    return (
      "expiration" === e && (e = "expiration-date"),
      this.getElementById(e + "-field-group").querySelector(
        ".braintree-form__hosted-field"
      )
    );
  }),
  (ll.prototype._onBlurEvent = function (e) {
    var t = e.fields[e.emittedBy],
      n = this.getElementById(lp(e.emittedBy) + "-field-group");
    le.remove(n, "braintree-form__field-group--is-focused"),
      t.isPotentiallyValid && this.hideFieldError(e.emittedBy),
      this._shouldApplyFieldEmptyError(e.emittedBy, t)
        ? this.showFieldError(
            e.emittedBy,
            this.strings["fieldEmptyFor" + lu(e.emittedBy)]
          )
        : t.isEmpty || t.isValid
        ? "number" !== e.emittedBy ||
          this._isCardTypeSupported(e.cards[0]) ||
          this.showFieldError("number", this.strings.unsupportedCardTypeError)
        : this.showFieldError(
            e.emittedBy,
            this.strings["fieldInvalidFor" + lu(e.emittedBy)]
          ),
      this.model._emit("card:blur", e),
      setTimeout(
        function () {
          this._shouldApplyFieldEmptyError(e.emittedBy, t) &&
            this.showFieldError(
              e.emittedBy,
              this.strings["fieldEmptyFor" + lu(e.emittedBy)]
            );
        }.bind(this),
        150
      );
  }),
  (ll.prototype._onCardTypeChangeEvent = function (e) {
    var t,
      n = "#iconCardFront",
      r = "#iconCVVBack",
      i = this.strings.cvvThreeDigitLabelSubheading,
      a = lm(3),
      o = this.getElementById("number-field-group");
    1 === e.cards.length
      ? ((n = "#icon-" + (t = e.cards[0].type)),
        "american-express" === t &&
          ((r = "#iconCVVFront"),
          (i = this.strings.cvvFourDigitLabelSubheading),
          (a = lm(4))),
        le.add(o, "braintree-form__field-group--card-type-known"))
      : le.remove(o, "braintree-form__field-group--card-type-known"),
      "number" === e.emittedBy &&
        this._isCardTypeSupported(e.cards[0]) &&
        this.hideFieldError(e.emittedBy),
      this.cardNumberIconSvg.setAttribute("xlink:href", n),
      this.hasCVV &&
        (this.cvvIconSvg.setAttribute("xlink:href", r),
        (this.cvvLabelDescriptor.innerHTML = i),
        this._hasCustomCVVPlaceholder ||
          this.hostedFieldsInstance.setAttribute({
            field: "cvv",
            attribute: "placeholder",
            value: a,
          })),
      this.model._emit("card:cardTypeChange", e);
  }),
  (ll.prototype._onFocusEvent = function (e) {
    var t = this.getElementById(lp(e.emittedBy) + "-field-group");
    le.add(t, "braintree-form__field-group--is-focused"),
      this.model._emit("card:focus", e);
  }),
  (ll.prototype._onNotEmptyEvent = function (e) {
    this.hideFieldError(e.emittedBy), this.model._emit("card:notEmpty", e);
  }),
  (ll.prototype._onValidityChangeEvent = function (e) {
    var t,
      n = e.fields[e.emittedBy];
    (t =
      "number" === e.emittedBy && e.cards[0]
        ? n.isValid && this._isCardTypeSupported(e.cards[0])
        : n.isValid),
      le.toggle(n.container, "braintree-form__field--valid", t),
      n.isPotentiallyValid && this.hideFieldError(e.emittedBy),
      this._sendRequestableEvent(),
      this.model._emit("card:validityChange", e);
  }),
  (ll.prototype.requestPaymentMethod = function () {
    return this.preventUserAction(), this.tokenize();
  }),
  (ll.prototype.onSelection = function () {
    this.hostedFieldsInstance &&
      (setTimeout(
        function () {
          this.hasCardholderName
            ? this.hostedFieldsInstance.focus("cardholderName")
            : this.hostedFieldsInstance.focus("number");
        }.bind(this),
        50
      ),
      this._sendRequestableEvent());
  }),
  (ll.prototype._hideUnsupportedCardIcons = function () {
    var e =
      this.client.getConfiguration().gatewayConfiguration.creditCards
        .supportedCardTypes;
    Object.keys(lt.configurationCardTypes).forEach(
      function (t) {
        var n,
          r = lt.configurationCardTypes[t];
        -1 === e.indexOf(r) &&
          ((n = this.getElementById(t + "-card-icon")),
          le.add(n, "braintree-hidden"));
      }.bind(this)
    );
  }),
  (ll.prototype._isCardTypeSupported = function (e) {
    var t = e && e.type,
      n = lt.configurationCardTypes[t];
    return (
      -1 !==
      this.client
        .getConfiguration()
        .gatewayConfiguration.creditCards.supportedCardTypes.indexOf(n)
    );
  }),
  (ll.isEnabled = function (e) {
    var t = e.client.getConfiguration().gatewayConfiguration,
      n = !1 === e.merchantConfiguration.card;
    return lo.resolve(!n && t.creditCards.supportedCardTypes.length > 0);
  }),
  (ll.prototype._shouldApplyFieldEmptyError = function (e, t) {
    return (
      !!t.isEmpty &&
      ("cardholderName" !== e || !!this.cardholderNameRequired) &&
      lc()
    );
  });
var lf = ll,
  lE = function (e, t, n) {
    var r;
    for (r = 0; r < e.length; r++)
      if (e[r].hasOwnProperty(t) && e[r][t] === n) return e[r];
    return null;
  },
  l_ = "3.91.0",
  lv = ey.assign;
function lg(e, t) {
  var n = e.analyticsMetadata;
  return lv(
    {},
    {
      gateway: "braintree",
      "braintree:merchantId": e.gatewayConfiguration.merchantId,
      "braintree:apiVersion": "v1",
      "braintree:sdkVersion": l_,
      "braintree:metadata": JSON.stringify({
        source: n.source,
        integration: n.integration,
        sessionId: n.sessionId,
        version: l_,
        platform: n.platform,
      }),
    },
    t
  );
}
var lP = function (e, t, n) {
    var r,
      i,
      a = e.gatewayConfiguration.androidPay,
      o =
        "production" === e.gatewayConfiguration.environment
          ? "PRODUCTION"
          : "TEST";
    return (
      2 === t
        ? ((r = {
            apiVersion: 2,
            apiVersionMinor: 0,
            environment: o,
            allowedPaymentMethods: [
              {
                type: "CARD",
                parameters: {
                  allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                  allowedCardNetworks: a.supportedNetworks.map(function (e) {
                    return e.toUpperCase();
                  }),
                },
                tokenizationSpecification: {
                  type: "PAYMENT_GATEWAY",
                  parameters: lg(e, {
                    "braintree:authorizationFingerprint":
                      a.googleAuthorizationFingerprint,
                  }),
                },
              },
            ],
          }),
          n && (r.merchantInfo = { merchantId: n }),
          a.paypalClientId &&
            ((i = {
              type: "PAYPAL",
              parameters: {
                purchase_context: {
                  purchase_units: [
                    {
                      payee: { client_id: a.paypalClientId },
                      recurring_payment: !0,
                    },
                  ],
                },
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: lg(e, {
                  "braintree:paypalClientId": a.paypalClientId,
                }),
              },
            }),
            r.allowedPaymentMethods.push(i)))
        : ((r = {
            environment: o,
            allowedPaymentMethods: ["CARD", "TOKENIZED_CARD"],
            paymentMethodTokenizationParameters: {
              tokenizationType: "PAYMENT_GATEWAY",
              parameters: lg(e, {
                "braintree:authorizationFingerprint":
                  a.googleAuthorizationFingerprint,
              }),
            },
            cardRequirements: {
              allowedCardNetworks: a.supportedNetworks.map(function (e) {
                return e.toUpperCase();
              }),
            },
          }),
          "TOKENIZATION_KEY" === e.authorizationType &&
            (r.paymentMethodTokenizationParameters.parameters[
              "braintree:clientKey"
            ] = e.authorization),
          n && (r.merchantId = n),
          t && (r.apiVersion = t)),
      r
    );
  },
  lC = D,
  lb = {
    GOOGLE_PAYMENT_NOT_ENABLED: {
      type: lC.types.MERCHANT,
      code: "GOOGLE_PAYMENT_NOT_ENABLED",
      message: "Google Pay is not enabled for this merchant.",
    },
    GOOGLE_PAYMENT_GATEWAY_ERROR: {
      code: "GOOGLE_PAYMENT_GATEWAY_ERROR",
      message:
        "There was an error when tokenizing the Google Pay payment method.",
      type: lC.types.UNKNOWN,
    },
    GOOGLE_PAYMENT_UNSUPPORTED_VERSION: {
      code: "GOOGLE_PAYMENT_UNSUPPORTED_VERSION",
      type: lC.types.MERCHANT,
    },
  },
  lT = nG,
  lA = ey.assign,
  lI = n$,
  lD = lE,
  lN = lP,
  lO = D,
  lx = lb,
  lF = nq,
  lM = t0,
  lw = nn,
  lL = { 1: "_createV1PaymentDataRequest", 2: "_createV2PaymentDataRequest" };
function lS(e) {
  if (
    ((this._createPromise = e.createPromise),
    (this._client = e.client),
    (this._useDeferredClient = e.useDeferredClient),
    (this._googlePayVersion = e.googlePayVersion || 1),
    (this._googleMerchantId = e.googleMerchantId),
    this._isUnsupportedGooglePayAPIVersion())
  )
    throw new lO({
      code: lx.GOOGLE_PAYMENT_UNSUPPORTED_VERSION.code,
      message:
        "The Braintree SDK does not support Google Pay version " +
        this._googlePayVersion +
        ". Please upgrade the version of your Braintree SDK and contact support if this error persists.",
      type: lx.GOOGLE_PAYMENT_UNSUPPORTED_VERSION.type,
    });
}
function lR(e, t) {
  Object.keys(t).forEach(function (n) {
    "object" == typeof t[n]
      ? (e[n] = lA({}, t[n], e[n]))
      : (e[n] = e[n] || t[n]);
  });
}
(lS.prototype._waitForClient = function () {
  return this._client
    ? lM.resolve()
    : this._createPromise.then(
        function (e) {
          this._client = e;
        }.bind(this)
      );
}),
  (lS.prototype._isUnsupportedGooglePayAPIVersion = function () {
    return !(this._googlePayVersion in lL);
  }),
  (lS.prototype._getDefaultConfig = function () {
    return (
      this._defaultConfig ||
        (this._defaultConfig = lN(
          this._client.getConfiguration(),
          this._googlePayVersion,
          this._googleMerchantId
        )),
      this._defaultConfig
    );
  }),
  (lS.prototype._createV1PaymentDataRequest = function (e) {
    var t = this._getDefaultConfig(),
      n = e.cardRequirements && e.cardRequirements.allowedCardNetworks,
      r = t.cardRequirements.allowedCardNetworks;
    return (
      ((e = lA({}, t, e)).cardRequirements.allowedCardNetworks = n || r), e
    );
  }),
  (lS.prototype._createV2PaymentDataRequest = function (e) {
    var t = this._getDefaultConfig();
    return (
      e.allowedPaymentMethods &&
        e.allowedPaymentMethods.forEach(function (e) {
          var n = lD(t.allowedPaymentMethods, "type", e.type);
          n && lR(e, n);
        }),
      (e = lA({}, t, e))
    );
  }),
  (lS.prototype.createPaymentDataRequest = function (e) {
    return this._useDeferredClient
      ? this._waitForClient().then(
          function () {
            return this._createPaymentDataRequestSyncronously(e);
          }.bind(this)
        )
      : this._createPaymentDataRequestSyncronously(e);
  }),
  (lS.prototype._createPaymentDataRequestSyncronously = function (e) {
    var t = lA({}, e),
      n = this._googlePayVersion,
      r = lL[n];
    return (
      lT.sendEvent(
        this._createPromise,
        "google-payment.v" + n + ".createPaymentDataRequest"
      ),
      this[r](t)
    );
  }),
  (lS.prototype.parseResponse = function (e) {
    var t = this;
    return lM
      .resolve()
      .then(function () {
        var n,
          r = JSON.parse(
            2 === e.apiVersion
              ? e.paymentMethodData.tokenizationData.token
              : e.paymentMethodToken.token
          ),
          i = r.error;
        return i
          ? lM.reject(i)
          : (lT.sendEvent(
              t._createPromise,
              "google-payment.parseResponse.succeeded"
            ),
            r.paypalAccounts)
          ? ((n = r.paypalAccounts[0]),
            lT.sendEvent(
              t._createPromise,
              "google-payment.parseResponse.succeeded.paypal"
            ),
            lM.resolve({
              nonce: n.nonce,
              type: n.type,
              description: n.description,
            }))
          : ((n = r.androidPayCards[0]),
            lT.sendEvent(
              t._createPromise,
              "google-payment.parseResponse.succeeded.google-payment"
            ),
            lM.resolve({
              nonce: n.nonce,
              type: n.type,
              description: n.description,
              details: {
                cardType: n.details.cardType,
                lastFour: n.details.lastFour,
                lastTwo: n.details.lastTwo,
                isNetworkTokenized: n.details.isNetworkTokenized,
                bin: n.details.bin,
              },
              binData: n.binData,
            }));
      })
      .catch(function (e) {
        return (
          lT.sendEvent(t._createPromise, "google-payment.parseResponse.failed"),
          lM.reject(
            new lO({
              code: lx.GOOGLE_PAYMENT_GATEWAY_ERROR.code,
              message: lx.GOOGLE_PAYMENT_GATEWAY_ERROR.message,
              type: lx.GOOGLE_PAYMENT_GATEWAY_ERROR.type,
              details: { originalError: e },
            })
          )
        );
      });
  }),
  (lS.prototype.teardown = function () {
    return lI(this, lF(lS.prototype)), lM.resolve();
  });
var lk = lw.wrapPrototype(lS),
  lV = lk,
  lz = D,
  lU = t0,
  lH = ib,
  lB = ix,
  lj = ig,
  lW = nn,
  lK = "3.91.0",
  lY = lb;
function lG(e) {
  var t = "Google Pay";
  return lj
    .verify({ name: t, client: e.client, authorization: e.authorization })
    .then(function () {
      var n, r;
      return ((n = lB
        .create({
          authorization: e.authorization,
          client: e.client,
          debug: e.debug,
          assetsUrl: lH.create(e.authorization),
          name: t,
        })
        .then(function (t) {
          var n = t.getConfiguration();
          return ((e.client = t), n.gatewayConfiguration.androidPay)
            ? t
            : lU.reject(new lz(lY.GOOGLE_PAYMENT_NOT_ENABLED));
        })),
      (e.createPromise = n),
      (r = new lV(e)),
      e.useDeferredClient)
        ? r
        : n.then(function (e) {
            return (r._client = e), r;
          });
    });
}
var lq = { create: lW(lG), VERSION: lK },
  lQ = {},
  lZ = n2,
  lJ = function (e) {
    var t = document.querySelector('link[href="' + e.href + '"]');
    if (t) return lZ.PromiseGlobal.resolve(t);
    t = document.createElement("link");
    var n = e.container || document.head;
    return (
      t.setAttribute("rel", "stylesheet"),
      t.setAttribute("type", "text/css"),
      t.setAttribute("href", e.href),
      t.setAttribute("id", e.id),
      n.firstChild ? n.insertBefore(t, n.firstChild) : n.appendChild(t),
      lZ.PromiseGlobal.resolve(t)
    );
  };
Object.defineProperty(lQ, "__esModule", { value: !0 }),
  (lQ.loadStylesheet = lQ.loadScript = void 0);
var lX = n9;
lQ.loadScript = lX;
var l$ = lJ;
lQ.loadStylesheet = l$;
var l1 = E.assign,
  l0 = it,
  l2 = lq,
  l3 = rX,
  l4 = C,
  l5 = lQ,
  l6 = r4,
  l7 = rW;
function l8() {
  l0.apply(this, arguments);
}
function l9(e) {
  return new h.google.payments.api.PaymentsClient({
    environment:
      "production" === e.getConfiguration().gatewayConfiguration.environment
        ? "PRODUCTION"
        : "TEST",
  });
}
(l8.prototype = Object.create(l0.prototype)),
  (l8.prototype.constructor = l8),
  (l8.ID = l8.prototype.ID = l4.paymentOptionIDs.googlePay),
  (l8.prototype.initialize = function () {
    var e,
      t,
      n,
      r = this;
    return (
      (r.googlePayConfiguration = l1(
        {},
        r.model.merchantConfiguration.googlePay
      )),
      (t = r.googlePayConfiguration.googlePayVersion),
      (n = r.googlePayConfiguration.merchantId),
      (e = l1({ buttonType: "short" }, r.googlePayConfiguration.button, {
        onClick: function (e) {
          e.preventDefault(),
            r.preventUserAction(),
            r.tokenize().then(function () {
              r.allowUserAction();
            });
        },
      })),
      delete r.googlePayConfiguration.googlePayVersion,
      delete r.googlePayConfiguration.merchantId,
      delete r.googlePayConfiguration.button,
      l2
        .create({ client: r.client, googlePayVersion: t, googleMerchantId: n })
        .then(function (e) {
          (r.googlePayInstance = e), (r.paymentsClient = l9(r.client));
        })
        .then(function () {
          r
            .getElementById("google-pay-button")
            .appendChild(r.paymentsClient.createButton(e)),
            r.model.asyncDependencyReady(l8.ID);
        })
        .catch(function (e) {
          r.model.asyncDependencyFailed({ view: r.ID, error: new l3(e) });
        })
    );
  }),
  (l8.prototype.tokenize = function () {
    var e,
      t = this,
      n = t.googlePayInstance.createPaymentDataRequest(
        t.googlePayConfiguration
      );
    return t.paymentsClient
      .loadPaymentData(n)
      .then(function (n) {
        return (e = n), t.googlePayInstance.parseResponse(n);
      })
      .then(function (n) {
        (n.rawPaymentData = e), t.model.addPaymentMethod(n);
      })
      .catch(function (e) {
        var n = e;
        if ("DEVELOPER_ERROR" === e.statusCode)
          console.error(e), (n = "developerError");
        else if ("CANCELED" === e.statusCode) {
          l7.sendEvent(t.client, "googlepay.loadPaymentData.canceled");
          return;
        } else
          e.statusCode &&
            l7.sendEvent(t.client, "googlepay.loadPaymentData.failed");
        t.model.reportError(n);
      });
  }),
  (l8.prototype.updateConfiguration = function (e, t) {
    this.googlePayConfiguration[e] = t;
  }),
  (l8.isEnabled = function (e) {
    return e.client.getConfiguration().gatewayConfiguration.androidPay &&
      Boolean(e.merchantConfiguration.googlePay)
      ? l6
          .resolve()
          .then(function () {
            return h.google &&
              h.google.payments &&
              h.google.payments.api &&
              h.google.payments.api.PaymentsClient
              ? l6.resolve()
              : l5.loadScript({
                  id: l4.GOOGLE_PAYMENT_SCRIPT_ID,
                  src: l4.GOOGLE_PAYMENT_SOURCE,
                });
          })
          .then(function () {
            return l9(e.client).isReadyToPay({
              allowedPaymentMethods: ["CARD", "TOKENIZED_CARD"],
            });
          })
          .then(function (e) {
            return Boolean(e.result);
          })
      : l6.resolve(!1);
  });
var ce = l8,
  ct = D,
  cn = {
    PAYPAL_NOT_ENABLED: {
      type: ct.types.MERCHANT,
      code: "PAYPAL_NOT_ENABLED",
      message: "PayPal is not enabled for this merchant.",
    },
    PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED: {
      type: ct.types.MERCHANT,
      code: "PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED",
      message:
        "A linked PayPal Sandbox account is required to use PayPal Checkout in Sandbox. See https://developer.paypal.com/braintree/docs/guides/paypal/testing-go-live#linked-paypal-testing for details on linking your PayPal sandbox with Braintree.",
    },
    PAYPAL_ACCOUNT_TOKENIZATION_FAILED: {
      type: ct.types.NETWORK,
      code: "PAYPAL_ACCOUNT_TOKENIZATION_FAILED",
      message: "Could not tokenize user's PayPal account.",
    },
    PAYPAL_FLOW_FAILED: {
      type: ct.types.NETWORK,
      code: "PAYPAL_FLOW_FAILED",
      message: "Could not initialize PayPal flow.",
    },
    PAYPAL_FLOW_OPTION_REQUIRED: {
      type: ct.types.MERCHANT,
      code: "PAYPAL_FLOW_OPTION_REQUIRED",
      message: "PayPal flow property is invalid or missing.",
    },
    PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED: {
      type: ct.types.MERCHANT,
      code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED",
    },
    PAYPAL_START_VAULT_INITIATED_CHECKOUT_SETUP_FAILED: {
      type: ct.types.NETWORK,
      code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_SETUP_FAILED",
      message: "Something went wrong when setting up the checkout workflow.",
    },
    PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED: {
      type: ct.types.MERCHANT,
      code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED",
      message:
        "PayPal popup failed to open, make sure to initiate the vault checkout in response to a user action.",
    },
    PAYPAL_START_VAULT_INITIATED_CHECKOUT_CANCELED: {
      type: ct.types.CUSTOMER,
      code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_CANCELED",
      message: "Customer closed PayPal popup before authorizing.",
    },
    PAYPAL_START_VAULT_INITIATED_CHECKOUT_IN_PROGRESS: {
      type: ct.types.MERCHANT,
      code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_IN_PROGRESS",
      message: "Vault initiated checkout already in progress.",
    },
    PAYPAL_INVALID_PAYMENT_OPTION: {
      type: ct.types.MERCHANT,
      code: "PAYPAL_INVALID_PAYMENT_OPTION",
      message: "PayPal payment options are invalid.",
    },
    PAYPAL_MISSING_REQUIRED_OPTION: {
      type: ct.types.MERCHANT,
      code: "PAYPAL_MISSING_REQUIRED_OPTION",
      message: "Missing required option.",
    },
  },
  cr = {
    LANDING_FRAME_NAME: "braintreepaypallanding",
    FLOW_ENDPOINTS: {
      checkout: "create_payment_resource",
      vault: "setup_billing_agreement",
    },
    REQUIRED_OPTIONS: ["paymentId", "currency"],
  },
  ci = {
    DISPATCH_FRAME_NAME: "dispatch",
    DISPATCH_FRAME_CLASS: "braintree-dispatch-frame",
    POPUP_BASE_OPTIONS: "resizable,scrollbars",
    DEFAULT_POPUP_WIDTH: 450,
    DEFAULT_POPUP_HEIGHT: 535,
    POPUP_POLL_INTERVAL: 100,
    POPUP_CLOSE_TIMEOUT: 100,
  };
function ca(e) {
  return cs(
    window.outerHeight || document.documentElement.clientHeight,
    e,
    null == window.screenY ? window.screenTop : window.screenY
  );
}
function co(e) {
  return cs(
    window.outerWidth || document.documentElement.clientWidth,
    e,
    null == window.screenX ? window.screenLeft : window.screenX
  );
}
function cs(e, t, n) {
  return (e - t) / 2 + n;
}
var cd = { top: ca, left: co, center: cs },
  cl = ci,
  cc = cd;
function cp(e, t, n) {
  return void 0 !== t ? t : cc[e](n);
}
var cu = function (e) {
    var t = e.height || cl.DEFAULT_POPUP_HEIGHT,
      n = e.width || cl.DEFAULT_POPUP_WIDTH,
      r = cp("top", e.top, t),
      i = cp("left", e.left, n);
    return [
      cl.POPUP_BASE_OPTIONS,
      "height=" + t,
      "width=" + n,
      "top=" + r,
      "left=" + i,
    ].join(",");
  },
  ch = cu;
function cm() {}
function cy(e) {
  (this._frame = null), (this._options = e || {}), this.open();
}
(cy.prototype.initialize = cm),
  (cy.prototype.open = function () {
    this._frame = window.open(
      this._options.openFrameUrl,
      this._options.name,
      ch(this._options)
    );
  }),
  (cy.prototype.focus = function () {
    this._frame.focus();
  }),
  (cy.prototype.close = function () {
    this._frame.closed || this._frame.close();
  }),
  (cy.prototype.isClosed = function () {
    return !this._frame || Boolean(this._frame.closed);
  }),
  (cy.prototype.redirect = function (e) {
    this._frame.location.href = e;
  });
var cf = cy,
  cE = D,
  c_ = {
    FRAME_SERVICE_FRAME_CLOSED: {
      type: cE.types.INTERNAL,
      code: "FRAME_SERVICE_FRAME_CLOSED",
      message: "Frame closed before tokenization could occur.",
    },
    FRAME_SERVICE_FRAME_OPEN_FAILED: {
      type: cE.types.INTERNAL,
      code: "FRAME_SERVICE_FRAME_OPEN_FAILED",
      message: "Frame failed to open.",
    },
    FRAME_SERVICE_FRAME_OPEN_FAILED_IE_BUG: {
      type: cE.types.INTERNAL,
      code: "FRAME_SERVICE_FRAME_OPEN_FAILED_IE_BUG",
      message:
        "Could not open frame. This may be due to a bug in IE browsers when attempting to open an HTTPS page from a HTTP page. https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11324352/",
    },
  },
  cv = D,
  cg = c_;
function cP() {}
function cC(e) {
  (this._closed = null), (this._options = e);
}
(cC.prototype.initialize = function (e) {
  var t = this;
  window.popupBridge.onComplete = function (n, r) {
    if (((t._closed = !0), n || (!r && !n))) {
      e(new cv(cg.FRAME_SERVICE_FRAME_CLOSED));
      return;
    }
    e(null, r);
  };
}),
  (cC.prototype.open = function (e) {
    var t;
    (t = (e = e || {}).openFrameUrl || this._options.openFrameUrl),
      (this._closed = !1),
      window.popupBridge.open(t);
  }),
  (cC.prototype.focus = cP),
  (cC.prototype.close = cP),
  (cC.prototype.isClosed = function () {
    return Boolean(this._closed);
  }),
  (cC.prototype.redirect = function (e) {
    this.open({ openFrameUrl: e });
  });
var cb = cC,
  cT = {},
  cA = {
    get exports() {
      return cT;
    },
    set exports(v) {
      cT = v;
    },
  },
  cI = oH,
  cD = function (e, t) {
    return (t = void 0 !== t ? t : window.statusbar.visible), cI(e) && t;
  };
cA.exports = cD;
var cN = {},
  cO = {
    get exports() {
      return cN;
    },
    set exports(v) {
      cN = v;
    },
  },
  cx = function (e) {
    return (e = e || window.navigator.userAgent), /FxiOS/i.test(e);
  },
  cF = 48,
  cM = oi,
  cw = cx,
  cL = oH,
  cS = ob,
  cR = om,
  ck = oy;
function cV(e) {
  var t = (e = e || window.navigator.userAgent).match(/CriOS\/(\d+)\./);
  return !!t && parseInt(t[1], 10) < cF;
}
function cz(e) {
  return (e = e || window.navigator.userAgent).indexOf("Opera Mini") > -1;
}
function cU(e) {
  return (
    !!cM((e = e || window.navigator.userAgent)) &&
    /Version\/[\d.]+/i.test(e) &&
    !cz(e) &&
    !ck(e)
  );
}
function cH(e) {
  return !cS(e) && !cR(e) && /samsung/i.test(e);
}
var cB = function (e) {
  return !(
    cL((e = e || window.navigator.userAgent)) ||
    cw(e) ||
    cU(e) ||
    cz(e) ||
    cV(e) ||
    cH(e)
  );
};
cO.exports = cB;
var cj = { isIos: od, isIosWKWebview: cT, isIE: O, supportsPopups: cN },
  cW = aa,
  cK = ey.assign,
  cY = cj,
  cG = {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    padding: 0,
    margin: 0,
    border: 0,
    outline: "none",
    zIndex: 20001,
    background: "#FFFFFF",
  };
function cq() {}
function cQ(e) {
  (this._closed = null),
    (this._frame = null),
    (this._options = e || {}),
    (this._container = this._options.container || document.body);
}
(cQ.prototype.initialize = cq),
  (cQ.prototype.open = function () {
    var e = {
      src: this._options.openFrameUrl,
      name: this._options.name,
      scrolling: "yes",
      height: "100%",
      width: "100%",
      style: cK({}, cG),
      title: "Lightbox Frame",
    };
    cY.isIos()
      ? (cY.isIosWKWebview() && (this._lockScrolling(), (e.style = {})),
        (this._el = document.createElement("div")),
        cK(this._el.style, cG, {
          height: "100%",
          width: "100%",
          overflow: "auto",
          "-webkit-overflow-scrolling": "touch",
        }),
        (this._frame = cW(e)),
        this._el.appendChild(this._frame))
      : (this._el = this._frame = cW(e)),
      (this._closed = !1),
      this._container.appendChild(this._el);
  }),
  (cQ.prototype.focus = cq),
  (cQ.prototype.close = function () {
    this._container.removeChild(this._el),
      (this._frame = null),
      (this._closed = !0),
      cY.isIosWKWebview() && this._unlockScrolling();
  }),
  (cQ.prototype.isClosed = function () {
    return Boolean(this._closed);
  }),
  (cQ.prototype.redirect = function (e) {
    this._frame.src = e;
  }),
  (cQ.prototype._unlockScrolling = function () {
    (document.body.style.overflow = this._savedBodyProperties.overflowStyle),
      (document.body.style.position = this._savedBodyProperties.positionStyle),
      window.scrollTo(
        this._savedBodyProperties.left,
        this._savedBodyProperties.top
      ),
      delete this._savedBodyProperties;
  }),
  (cQ.prototype._lockScrolling = function () {
    var e = document.documentElement;
    (this._savedBodyProperties = {
      left: (window.pageXOffset || e.scrollLeft) - (e.clientLeft || 0),
      top: (window.pageYOffset || e.scrollTop) - (e.clientTop || 0),
      overflowStyle: document.body.style.overflow,
      positionStyle: document.body.style.position,
    }),
      (document.body.style.overflow = "hidden"),
      (document.body.style.position = "fixed"),
      window.scrollTo(0, 0);
  });
var cZ = cQ,
  cJ = T,
  cX = cJ(["DISPATCH_FRAME_READY", "DISPATCH_FRAME_REPORT"], "frameService:");
function c$(e) {
  return "https:" === (e = e || window.location.protocol);
}
var c1 = { isHTTPS: c$ },
  c0 = cf,
  c2 = cb,
  c3 = cZ,
  c4 = aQ,
  c5 = cX,
  c6 = c_,
  c7 = ci,
  c8 = Q,
  c9 = aa,
  pe = D,
  pt = cj,
  pn = c1,
  pr = ey.assign,
  pi = nd.BUS_CONFIGURATION_REQUEST_EVENT,
  pa = ["name", "dispatchFrameUrl", "openFrameUrl"];
function po() {}
function ps(e) {
  if (!e) throw Error("Valid configuration is required");
  if (
    (pa.forEach(function (t) {
      if (!e.hasOwnProperty(t))
        throw Error("A valid frame " + t + " must be provided");
    }),
    !/^[\w_]+$/.test(e.name))
  )
    throw Error("A valid frame name must be provided");
}
function pd(e) {
  ps(e),
    (this._serviceId = c8().replace(/-/g, "")),
    (this._options = {
      name: e.name + "_" + this._serviceId,
      dispatchFrameUrl: e.dispatchFrameUrl,
      openFrameUrl: e.openFrameUrl,
      height: e.height,
      width: e.width,
      top: e.top,
      left: e.left,
    }),
    (this.state = e.state || {}),
    (this._bus = new c4({ channel: this._serviceId })),
    this._setBusEvents();
}
(pd.prototype.initialize = function (e) {
  var t = function () {
    e(), this._bus.off(c5.DISPATCH_FRAME_READY, t);
  }.bind(this);
  this._bus.on(c5.DISPATCH_FRAME_READY, t), this._writeDispatchFrame();
}),
  (pd.prototype._writeDispatchFrame = function () {
    var e = c7.DISPATCH_FRAME_NAME + "_" + this._serviceId,
      t = this._options.dispatchFrameUrl;
    (this._dispatchFrame = c9({
      "aria-hidden": !0,
      name: e,
      title: e,
      src: t,
      class: c7.DISPATCH_FRAME_CLASS,
      height: 0,
      width: 0,
      style: { position: "absolute", left: "-9999px" },
    })),
      document.body.appendChild(this._dispatchFrame);
  }),
  (pd.prototype._setBusEvents = function () {
    this._bus.on(
      c5.DISPATCH_FRAME_REPORT,
      function (e, t) {
        this._onCompleteCallback &&
          this._onCompleteCallback.call(null, e.err, e.payload),
          this._frame.close(),
          (this._onCompleteCallback = null),
          t && t();
      }.bind(this)
    ),
      this._bus.on(
        pi,
        function (e) {
          e(this.state);
        }.bind(this)
      );
  }),
  (pd.prototype.open = function (e, t) {
    if (
      ((e = e || {}),
      (this._frame = this._getFrameForEnvironment(e)),
      this._frame.initialize(t),
      !(this._frame instanceof c2))
    ) {
      if (
        (pr(this.state, e.state),
        (this._onCompleteCallback = t),
        this._frame.open(),
        this.isFrameClosed())
      ) {
        this._cleanupFrame(),
          t &&
            t(
              new pe(
                pt.isIE() && !pn.isHTTPS()
                  ? c6.FRAME_SERVICE_FRAME_OPEN_FAILED_IE_BUG
                  : c6.FRAME_SERVICE_FRAME_OPEN_FAILED
              )
            );
        return;
      }
      this._pollForPopupClose();
    }
  }),
  (pd.prototype.redirect = function (e) {
    this._frame && !this.isFrameClosed() && this._frame.redirect(e);
  }),
  (pd.prototype.close = function () {
    this.isFrameClosed() || this._frame.close();
  }),
  (pd.prototype.focus = function () {
    this.isFrameClosed() || this._frame.focus();
  }),
  (pd.prototype.createHandler = function (e) {
    return (
      (e = e || {}),
      {
        close: function () {
          e.beforeClose && e.beforeClose(), this.close();
        }.bind(this),
        focus: function () {
          e.beforeFocus && e.beforeFocus(), this.focus();
        }.bind(this),
      }
    );
  }),
  (pd.prototype.createNoopHandler = function () {
    return { close: po, focus: po };
  }),
  (pd.prototype.teardown = function () {
    this.close(),
      this._dispatchFrame.parentNode.removeChild(this._dispatchFrame),
      (this._dispatchFrame = null),
      this._cleanupFrame();
  }),
  (pd.prototype.isFrameClosed = function () {
    return null == this._frame || this._frame.isClosed();
  }),
  (pd.prototype._cleanupFrame = function () {
    (this._frame = null),
      clearInterval(this._popupInterval),
      (this._popupInterval = null);
  }),
  (pd.prototype._pollForPopupClose = function () {
    return (
      (this._popupInterval = setInterval(
        function () {
          this.isFrameClosed() &&
            (this._cleanupFrame(),
            this._onCompleteCallback &&
              this._onCompleteCallback(new pe(c6.FRAME_SERVICE_FRAME_CLOSED)));
        }.bind(this),
        c7.POPUP_POLL_INTERVAL
      )),
      this._popupInterval
    );
  }),
  (pd.prototype._getFrameForEnvironment = function (e) {
    var t = pt.supportsPopups(),
      n = Boolean(window.popupBridge),
      r = pr({}, this._options, e);
    return n ? new c2(r) : t ? new c0(r) : new c3(r);
  });
var pl = pd,
  pc = pl,
  pp = {
    create: function (e, t) {
      var n = new pc(e);
      n.initialize(function () {
        t(n);
      });
    },
  },
  pu = nG,
  ph = ey.assign,
  pm = ix,
  py = ib,
  pf = t0,
  pE = tJ,
  p_ = nn,
  pv = D,
  pg = tw,
  pP = cn,
  pC = cr,
  pb = pp,
  pT = nS,
  pA = nq,
  pI = a4,
  pD = n$,
  pN = en,
  pO = "3.91.0",
  px = nd.INTEGRATION_TIMEOUT_MS,
  pF = ["amount", "currency", "vaultInitiatedCheckoutPaymentMethodToken"],
  pM = "https://www.{ENV}paypal.com/smart/buttons/preload";
function pw(e) {
  (this._merchantAccountId = e.merchantAccountId),
    (this._autoSetDataUserIdToken = Boolean(e.autoSetDataUserIdToken));
}
(pw.prototype._initialize = function (e) {
  var t;
  return (e.client
    ? ((t = e.client.getConfiguration()),
      (this._authorizationInformation = {
        fingerprint: t.authorizationFingerprint,
        environment: t.gatewayConfiguration.environment,
      }))
    : ((t = pT(e.authorization)),
      (this._authorizationInformation = {
        fingerprint: t.attrs.authorizationFingerprint,
        environment: t.environment,
      })),
  (this._clientPromise = pm
    .create({
      authorization: e.authorization,
      client: e.client,
      debug: e.debug,
      assetsUrl: py.create(e.authorization),
      name: "PayPal Checkout",
    })
    .then(
      function (e) {
        return ((this._configuration = e.getConfiguration()),
        this._merchantAccountId ||
          (this._configuration.gatewayConfiguration.paypalEnabled
            ? !0 ===
                this._configuration.gatewayConfiguration.paypal
                  .environmentNoNetwork &&
              (this._setupError = new pv(pP.PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED))
            : (this._setupError = new pv(pP.PAYPAL_NOT_ENABLED))),
        this._setupError)
          ? pf.reject(this._setupError)
          : (pu.sendEvent(e, "paypal-checkout.initialized"),
            (this._frameServicePromise = this._setupFrameService(e)),
            e);
      }.bind(this)
    )),
  e.client)
    ? this._clientPromise.then(
        function () {
          return this;
        }.bind(this)
      )
    : pf.resolve(this);
}),
  (pw.prototype._setupFrameService = function (e) {
    var t = new pE(),
      n = e.getConfiguration(),
      r = setTimeout(function () {
        pu.sendEvent(e, "paypal-checkout.frame-service.timed-out"),
          t.reject(
            new pv(pP.PAYPAL_START_VAULT_INITIATED_CHECKOUT_SETUP_FAILED)
          );
      }, px);
    return (
      (this._assetsUrl =
        n.gatewayConfiguration.paypal.assetsUrl + "/web/" + pO),
      (this._isDebug = n.isDebug),
      (this._loadingFrameUrl =
        this._assetsUrl +
        "/html/paypal-landing-frame" +
        pI(this._isDebug) +
        ".html"),
      pb.create(
        {
          name: "braintreepaypallanding",
          dispatchFrameUrl:
            this._assetsUrl +
            "/html/dispatch-frame" +
            pI(this._isDebug) +
            ".html",
          openFrameUrl: this._loadingFrameUrl,
        },
        function (e) {
          (this._frameService = e), clearTimeout(r), t.resolve();
        }.bind(this)
      ),
      t
    );
  }),
  (pw.prototype.createPayment = function (e) {
    return e && pC.FLOW_ENDPOINTS.hasOwnProperty(e.flow)
      ? (pu.sendEvent(this._clientPromise, "paypal-checkout.createPayment"),
        this._createPaymentResource(e).then(function (t) {
          return "checkout" === e.flow
            ? t.paymentResource.redirectUrl.match(/EC-\w+/)[0]
            : t.agreementSetup.tokenId;
        }))
      : pf.reject(new pv(pP.PAYPAL_FLOW_OPTION_REQUIRED));
  }),
  (pw.prototype._createPaymentResource = function (e, t) {
    var n = this,
      r = "paypal_hermes/" + pC.FLOW_ENDPOINTS[e.flow];
    return (
      delete this.intentFromCreatePayment,
      (t = t || {}),
      !0 === e.offerCredit &&
        pu.sendEvent(this._clientPromise, "paypal-checkout.credit.offered"),
      this._clientPromise
        .then(function (i) {
          return i
            .request({
              endpoint: r,
              method: "post",
              data: n._formatPaymentResourceData(e, t),
            })
            .then(function (t) {
              return (n.intentFromCreatePayment = e.intent), t;
            });
        })
        .catch(function (e) {
          return n._setupError
            ? pf.reject(n._setupError)
            : 422 === (e.details && e.details.httpStatus)
            ? pf.reject(
                new pv({
                  type: pP.PAYPAL_INVALID_PAYMENT_OPTION.type,
                  code: pP.PAYPAL_INVALID_PAYMENT_OPTION.code,
                  message: pP.PAYPAL_INVALID_PAYMENT_OPTION.message,
                  details: { originalError: e },
                })
              )
            : pf.reject(
                pg(e, {
                  type: pP.PAYPAL_FLOW_FAILED.type,
                  code: pP.PAYPAL_FLOW_FAILED.code,
                  message: pP.PAYPAL_FLOW_FAILED.message,
                })
              );
        })
    );
  }),
  (pw.prototype.updatePayment = function (e) {
    var t = this;
    return !e || this._hasMissingOption(e, pC.REQUIRED_OPTIONS)
      ? (pu.sendEvent(
          t._clientPromise,
          "paypal-checkout.updatePayment.missing-options"
        ),
        pf.reject(new pv(pP.PAYPAL_MISSING_REQUIRED_OPTION)))
      : this._verifyConsistentCurrency(e)
      ? (pu.sendEvent(this._clientPromise, "paypal-checkout.updatePayment"),
        this._clientPromise
          .then(function (n) {
            return n.request({
              endpoint: "paypal_hermes/patch_payment_resource",
              method: "post",
              data: t._formatUpdatePaymentData(e),
            });
          })
          .catch(function (e) {
            return 422 === (e.details && e.details.httpStatus)
              ? (pu.sendEvent(
                  t._clientPromise,
                  "paypal-checkout.updatePayment.invalid"
                ),
                pf.reject(
                  new pv({
                    type: pP.PAYPAL_INVALID_PAYMENT_OPTION.type,
                    code: pP.PAYPAL_INVALID_PAYMENT_OPTION.code,
                    message: pP.PAYPAL_INVALID_PAYMENT_OPTION.message,
                    details: { originalError: e },
                  })
                ))
              : (pu.sendEvent(
                  t._clientPromise,
                  "paypal-checkout.updatePayment." + pP.PAYPAL_FLOW_FAILED.code
                ),
                pf.reject(
                  pg(e, {
                    type: pP.PAYPAL_FLOW_FAILED.type,
                    code: pP.PAYPAL_FLOW_FAILED.code,
                    message: pP.PAYPAL_FLOW_FAILED.message,
                  })
                ));
          }))
      : (pu.sendEvent(
          t._clientPromise,
          "paypal-checkout.updatePayment.inconsistent-currencies"
        ),
        pf.reject(
          new pv({
            type: pP.PAYPAL_INVALID_PAYMENT_OPTION.type,
            code: pP.PAYPAL_INVALID_PAYMENT_OPTION.code,
            message: pP.PAYPAL_INVALID_PAYMENT_OPTION.message,
            details: {
              originalError: Error(
                "One or more shipping option currencies differ from checkout currency."
              ),
            },
          })
        ));
  }),
  (pw.prototype.startVaultInitiatedCheckout = function (e) {
    var t,
      n = this;
    return this._vaultInitiatedCheckoutInProgress
      ? (pu.sendEvent(
          this._clientPromise,
          "paypal-checkout.startVaultInitiatedCheckout.error.already-in-progress"
        ),
        pf.reject(new pv(pP.PAYPAL_START_VAULT_INITIATED_CHECKOUT_IN_PROGRESS)))
      : (pF.forEach(function (n) {
          e.hasOwnProperty(n) || (t = n);
        }),
        t)
      ? pf.reject(
          new pv({
            type: pP.PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED.type,
            code: pP.PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED.code,
            message: "Required param " + t + " is missing.",
          })
        )
      : ((this._vaultInitiatedCheckoutInProgress = !0),
        this._addModalBackdrop(e),
        (e = ph({}, e, { flow: "checkout" })),
        pu.sendEvent(
          this._clientPromise,
          "paypal-checkout.startVaultInitiatedCheckout.started"
        ),
        this._waitForVaultInitiatedCheckoutDependencies()
          .then(function () {
            var t = new pE(),
              r = n
                ._createPaymentResource(e, {
                  returnUrl: n._constructVaultCheckutUrl("redirect-frame"),
                  cancelUrl: n._constructVaultCheckutUrl("cancel-frame"),
                })
                .then(function (e) {
                  var r = e.paymentResource.redirectUrl;
                  return n._frameService.redirect(r), t;
                });
            return (
              n._frameService.open({}, n._createFrameServiceCallback(t)), r
            );
          })
          .catch(function (e) {
            return ((n._vaultInitiatedCheckoutInProgress = !1),
            n._removeModalBackdrop(),
            "FRAME_SERVICE_FRAME_CLOSED" === e.code)
              ? (pu.sendEvent(
                  n._clientPromise,
                  "paypal-checkout.startVaultInitiatedCheckout.canceled.by-customer"
                ),
                pf.reject(
                  new pv(pP.PAYPAL_START_VAULT_INITIATED_CHECKOUT_CANCELED)
                ))
              : (n._frameService && n._frameService.close(),
                e.code &&
                  e.code.indexOf("FRAME_SERVICE_FRAME_OPEN_FAILED") > -1)
              ? (pu.sendEvent(
                  n._clientPromise,
                  "paypal-checkout.startVaultInitiatedCheckout.failed.popup-not-opened"
                ),
                pf.reject(
                  new pv({
                    code: pP
                      .PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED
                      .code,
                    type: pP
                      .PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED
                      .type,
                    message:
                      pP.PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED
                        .message,
                    details: { originalError: e },
                  })
                ))
              : pf.reject(e);
          })
          .then(function (e) {
            return (
              n._frameService.close(),
              (n._vaultInitiatedCheckoutInProgress = !1),
              n._removeModalBackdrop(),
              pu.sendEvent(
                n._clientPromise,
                "paypal-checkout.startVaultInitiatedCheckout.succeeded"
              ),
              pf.resolve(e)
            );
          }));
  }),
  (pw.prototype._addModalBackdrop = function (e) {
    e.optOutOfModalBackdrop ||
      (this._modalBackdrop ||
        ((this._modalBackdrop = document.createElement("div")),
        this._modalBackdrop.setAttribute(
          "data-braintree-paypal-vault-initiated-checkout-modal",
          !0
        ),
        (this._modalBackdrop.style.position = "fixed"),
        (this._modalBackdrop.style.top = 0),
        (this._modalBackdrop.style.bottom = 0),
        (this._modalBackdrop.style.left = 0),
        (this._modalBackdrop.style.right = 0),
        (this._modalBackdrop.style.zIndex = 9999),
        (this._modalBackdrop.style.background = "black"),
        (this._modalBackdrop.style.opacity = "0.7"),
        this._modalBackdrop.addEventListener(
          "click",
          function () {
            this.focusVaultInitiatedCheckoutWindow();
          }.bind(this)
        )),
      document.body.appendChild(this._modalBackdrop));
  }),
  (pw.prototype._removeModalBackdrop = function () {
    this._modalBackdrop &&
      this._modalBackdrop.parentNode &&
      this._modalBackdrop.parentNode.removeChild(this._modalBackdrop);
  }),
  (pw.prototype.closeVaultInitiatedCheckoutWindow = function () {
    return (
      this._vaultInitiatedCheckoutInProgress &&
        pu.sendEvent(
          this._clientPromise,
          "paypal-checkout.startVaultInitiatedCheckout.canceled.by-merchant"
        ),
      this._waitForVaultInitiatedCheckoutDependencies().then(
        function () {
          this._frameService.close();
        }.bind(this)
      )
    );
  }),
  (pw.prototype.focusVaultInitiatedCheckoutWindow = function () {
    return this._waitForVaultInitiatedCheckoutDependencies().then(
      function () {
        this._frameService.focus();
      }.bind(this)
    );
  }),
  (pw.prototype._createFrameServiceCallback = function (e) {
    var t = this;
    return function (n, r) {
      n
        ? e.reject(n)
        : r &&
          (t._frameService.redirect(t._loadingFrameUrl),
          t
            .tokenizePayment({
              paymentToken: r.token,
              payerID: r.PayerID,
              paymentID: r.paymentId,
            })
            .then(function (t) {
              e.resolve(t);
            })
            .catch(function (t) {
              e.reject(t);
            }));
    };
  }),
  (pw.prototype._waitForVaultInitiatedCheckoutDependencies = function () {
    var e = this;
    return this._clientPromise.then(function () {
      return e._frameServicePromise;
    });
  }),
  (pw.prototype._constructVaultCheckutUrl = function (e) {
    var t = this._frameService._serviceId;
    return (
      this._assetsUrl + "/html/" + e + pI(this._isDebug) + ".html?channel=" + t
    );
  }),
  (pw.prototype.tokenizePayment = function (e) {
    var t,
      n = this,
      r = !0,
      i = {
        flow: e.billingToken && !e.paymentID ? "vault" : "checkout",
        intent: e.intent || this.intentFromCreatePayment,
      },
      a = {
        ecToken: e.paymentToken,
        billingToken: e.billingToken,
        payerId: e.payerID,
        paymentId: e.paymentID,
        shippingOptionsId: e.shippingOptionsId,
      };
    return (
      e.hasOwnProperty("vault") && (r = e.vault),
      (i.vault = r),
      pu.sendEvent(this._clientPromise, "paypal-checkout.tokenization.started"),
      this._clientPromise
        .then(function (e) {
          return e.request({
            endpoint: "payment_methods/paypal_accounts",
            method: "post",
            data: n._formatTokenizeData(i, a),
          });
        })
        .then(function (e) {
          return (
            (t = n._formatTokenizePayload(e)),
            pu.sendEvent(
              n._clientPromise,
              "paypal-checkout.tokenization.success"
            ),
            t.creditFinancingOffered &&
              pu.sendEvent(n._clientPromise, "paypal-checkout.credit.accepted"),
            t
          );
        })
        .catch(function (e) {
          return n._setupError
            ? pf.reject(n._setupError)
            : (pu.sendEvent(
                n._clientPromise,
                "paypal-checkout.tokenization.failed"
              ),
              pf.reject(
                pg(e, {
                  type: pP.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.type,
                  code: pP.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.code,
                  message: pP.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.message,
                })
              ));
        })
    );
  }),
  (pw.prototype.getClientId = function () {
    return this._clientPromise.then(function (e) {
      return e.getConfiguration().gatewayConfiguration.paypal.clientId;
    });
  }),
  (pw.prototype.loadPayPalSDK = function (e) {
    var t = new pE(),
      n = (e && e.dataAttributes) || {},
      r = n["user-id-token"] || n["data-user-id-token"];
    return (
      r ||
        (r =
          this._authorizationInformation.fingerprint &&
          this._authorizationInformation.fingerprint.split("?")[0]),
      (this._paypalScript = document.createElement("script")),
      delete (e = ph({}, { components: "buttons" }, e)).dataAttributes,
      e.vault
        ? (e.intent = e.intent || "tokenize")
        : ((e.intent = e.intent || "authorize"),
          (e.currency = e.currency || "USD")),
      (this._paypalScript.onload = function () {
        t.resolve();
      }),
      Object.keys(n).forEach(
        function (e) {
          this._paypalScript.setAttribute(
            "data-" + e.replace(/^data\-/, ""),
            n[e]
          );
        }.bind(this)
      ),
      (e["client-id"] ? pf.resolve(e["client-id"]) : this.getClientId()).then(
        function (t) {
          (e["client-id"] = t),
            this._autoSetDataUserIdToken &&
              r &&
              (this._paypalScript.setAttribute("data-user-id-token", r),
              this._attachPreloadPixel({
                id: t,
                userIdToken: r,
                amount: n.amount,
                currency: e.currency,
                merchantId: e["merchant-id"],
              })),
            (this._paypalScript.src = pN.queryify(
              "https://www.paypal.com/sdk/js?",
              e
            )),
            document.head.insertBefore(
              this._paypalScript,
              document.head.firstElementChild
            );
        }.bind(this)
      ),
      t.then(
        function () {
          return this;
        }.bind(this)
      )
    );
  }),
  (pw.prototype._attachPreloadPixel = function (e) {
    var t,
      n = e.id,
      r = e.userIdToken,
      i = this._authorizationInformation.environment,
      a = pM.replace("{ENV}", "production" === i ? "" : "sandbox."),
      o = { "client-id": n, "user-id-token": r };
    e.amount && (o.amount = e.amount),
      e.currency && (o.currency = e.currency),
      e.merchantId && (o["merchant-id"] = e.merchantId),
      (t = new XMLHttpRequest()).open("GET", pN.queryify(a, o)),
      t.send();
  }),
  (pw.prototype._formatPaymentResourceData = function (e, t) {
    var n,
      r = this._configuration.gatewayConfiguration,
      i = e.intent,
      a = {
        returnUrl: t.returnUrl || "https://www.paypal.com/checkoutnow/error",
        cancelUrl: t.cancelUrl || "https://www.paypal.com/checkoutnow/error",
        offerPaypalCredit: !0 === e.offerCredit,
        merchantAccountId: this._merchantAccountId,
        experienceProfile: {
          brandName: e.displayName || r.paypal.displayName,
          localeCode: e.locale,
          noShipping: (!e.enableShippingAddress).toString(),
          addressOverride: !1 === e.shippingAddressEditable,
          landingPageType: e.landingPageType,
        },
        shippingOptions: e.shippingOptions,
      };
    if ("checkout" === e.flow) {
      for (n in ((a.amount = e.amount),
      (a.currencyIsoCode = e.currency),
      (a.requestBillingAgreement = e.requestBillingAgreement),
      i && ("capture" === i && (i = "sale"), (a.intent = i)),
      e.hasOwnProperty("lineItems") && (a.lineItems = e.lineItems),
      e.hasOwnProperty("vaultInitiatedCheckoutPaymentMethodToken") &&
        (a.vaultInitiatedCheckoutPaymentMethodToken =
          e.vaultInitiatedCheckoutPaymentMethodToken),
      e.hasOwnProperty("shippingOptions") &&
        (a.shippingOptions = e.shippingOptions),
      e.shippingAddressOverride))
        e.shippingAddressOverride.hasOwnProperty(n) &&
          (a[n] = e.shippingAddressOverride[n]);
      e.hasOwnProperty("billingAgreementDetails") &&
        (a.billingAgreementDetails = e.billingAgreementDetails);
    } else
      (a.shippingAddress = e.shippingAddressOverride),
        e.billingAgreementDescription &&
          (a.description = e.billingAgreementDescription);
    return (
      (this._riskCorrelationId = e.riskCorrelationId),
      e.riskCorrelationId && (a.correlationId = this._riskCorrelationId),
      a
    );
  }),
  (pw.prototype._verifyConsistentCurrency = function (e) {
    return (
      !(
        e.currency &&
        e.hasOwnProperty("shippingOptions") &&
        Array.isArray(e.shippingOptions)
      ) ||
      e.shippingOptions.every(function (t) {
        return (
          t.amount &&
          t.amount.currency &&
          e.currency.toLowerCase() === t.amount.currency.toLowerCase()
        );
      })
    );
  }),
  (pw.prototype._hasMissingOption = function (e, t) {
    var n, r;
    if (
      ((t = t || []),
      !e.hasOwnProperty("amount") && !e.hasOwnProperty("lineItems"))
    )
      return !0;
    for (n = 0; n < t.length; n++)
      if (((r = t[n]), !e.hasOwnProperty(r))) return !0;
    return !1;
  }),
  (pw.prototype._calculateAmount = function (e, t) {
    var n = 0;
    return (
      Array.isArray(e) &&
        (n += e.reduce(function (e, t) {
          return (
            e +
            ((parseFloat(t.unitAmount) || 0) +
              (parseFloat(t.unitTaxAmount) || 0)) *
              (parseInt(t.quantity, 10) || 0)
          );
        }, 0)),
      t &&
        Array.isArray(t) &&
        (n += t.reduce(function (e, t) {
          return t.selected && t.amount
            ? e + parseFloat(t.amount.value) || 0
            : e;
        }, 0)),
      n
    );
  }),
  (pw.prototype._formatUpdatePaymentData = function (e) {
    var t = {
      merchantAccountId: this._merchantAccountId,
      paymentId: e.paymentId,
      currencyIsoCode: e.currency,
    };
    return (
      e.hasOwnProperty("amount") && (t.amount = e.amount),
      e.hasOwnProperty("lineItems") &&
        ((t.lineItems = e.lineItems),
        e.hasOwnProperty("amount") ||
          (t.amount = this._calculateAmount(e.lineItems, e.shippingOptions))),
      e.hasOwnProperty("shippingOptions") &&
        (t.shippingOptions = e.shippingOptions),
      e.hasOwnProperty("shippingAddress") &&
        (pu.sendEvent(
          this._clientPromise,
          "paypal-checkout.updatePayment.shippingAddress.provided.by-the-merchant"
        ),
        (t.line1 = e.shippingAddress.line1),
        e.shippingAddress.hasOwnProperty("line2") &&
          (t.line2 = e.shippingAddress.line2),
        (t.city = e.shippingAddress.city),
        (t.state = e.shippingAddress.state),
        (t.postalCode = e.shippingAddress.postalCode),
        (t.countryCode = e.shippingAddress.countryCode),
        e.shippingAddress.hasOwnProperty("phone") &&
          (t.phone = e.shippingAddress.phone),
        e.shippingAddress.hasOwnProperty("recipientName") &&
          (t.recipientName = e.shippingAddress.recipientName)),
      t
    );
  }),
  (pw.prototype._formatTokenizeData = function (e, t) {
    var n = this._configuration,
      r = n.gatewayConfiguration,
      i = "TOKENIZATION_KEY" === n.authorizationType,
      a = "vault" === e.flow,
      o = {
        paypalAccount: {
          correlationId: this._riskCorrelationId || t.billingToken || t.ecToken,
          options: { validate: a && !i && e.vault },
        },
      };
    return (
      a
        ? (o.paypalAccount.billingAgreementToken = t.billingToken)
        : ((o.paypalAccount.paymentToken = t.paymentId),
          (o.paypalAccount.payerId = t.payerId),
          (o.paypalAccount.unilateral = r.paypal.unvettedMerchant),
          e.intent && (o.paypalAccount.intent = e.intent)),
      this._merchantAccountId &&
        (o.merchantAccountId = this._merchantAccountId),
      o
    );
  }),
  (pw.prototype._formatTokenizePayload = function (e) {
    var t,
      n = {};
    return (
      e.paypalAccounts && (n = e.paypalAccounts[0]),
      (t = { nonce: n.nonce, details: {}, type: n.type }),
      n.details && n.details.payerInfo && (t.details = n.details.payerInfo),
      n.details &&
        n.details.creditFinancingOffered &&
        (t.creditFinancingOffered = n.details.creditFinancingOffered),
      n.details &&
        n.details.shippingOptionId &&
        (t.shippingOptionId = n.details.shippingOptionId),
      n.details &&
        n.details.cobrandedCardLabel &&
        (t.cobrandedCardLabel = n.details.cobrandedCardLabel),
      t
    );
  }),
  (pw.prototype.teardown = function () {
    var e = this;
    return (
      pD(this, pA(pw.prototype)),
      this._paypalScript &&
        this._paypalScript.parentNode &&
        this._paypalScript.parentNode.removeChild(this._paypalScript),
      this._frameServicePromise
        .catch(function () {})
        .then(function () {
          return e._frameService ? e._frameService.teardown() : pf.resolve();
        })
    );
  });
var pL = p_.wrapPrototype(pw),
  pS = ig,
  pR = nn,
  pk = pL,
  pV = "3.91.0";
function pz(e) {
  return pS
    .verify({
      name: "PayPal Checkout",
      client: e.client,
      authorization: e.authorization,
    })
    .then(function () {
      return new pk(e)._initialize(e);
    });
}
function pU() {
  return !0;
}
var pH = { create: pR(pz), isSupported: pU, VERSION: pV },
  pB = {
    payingWith: "╪º┘ä╪»┘ü╪╣ ╪¿┘ê╪º╪│╪╖╪⌐ {{paymentSource}}",
    chooseAnotherWayToPay: "╪º╪«╪¬╪▒ ╪╖╪▒┘è┘é╪⌐ ╪»┘ü╪╣ ╪ú╪«╪▒┘ë",
    chooseAWayToPay: "╪º╪«╪¬╪▒ ╪╖╪▒┘è┘é╪⌐ ╪º┘ä╪»┘ü╪╣",
    otherWaysToPay: "╪╖╪▒┘é ╪ú╪«╪▒┘ë ┘ä┘ä╪»┘ü╪╣",
    edit: "╪¬╪¡╪▒┘è╪▒",
    doneEditing: "╪¬┘à",
    editPaymentMethods: "╪¬╪¡╪▒┘è╪▒ ╪╖╪▒┘é ╪º┘ä╪»┘ü╪╣",
    CreditCardDeleteConfirmationMessage:
      "┘ç┘ä ╪¬╪▒┘è╪» ╪¡╪░┘ü ╪¿╪╖╪º┘é╪⌐ {{secondaryIdentifier}} ╪º┘ä╪¬┘è ╪¬┘å╪¬┘ç┘è ╪¿╪º┘ä╪ú╪▒┘é╪º┘à {{identifier}}╪ƒ",
    PayPalAccountDeleteConfirmationMessage:
      "┘ç┘ä ╪¬╪▒┘è╪» ╪¡╪░┘ü {{identifier}}╪º┘ä╪¡╪│╪º╪¿ PayPal╪ƒ",
    VenmoAccountDeleteConfirmationMessage:
      "┘ç┘ä ╪¬╪▒┘è╪» ┘ü╪╣┘ä╪º┘ï ╪¡╪░┘ü ╪¡╪│╪º╪¿ Venmo ╪º┘ä╪░┘è ┘è╪¡┘à┘ä ╪º╪│┘à ╪º┘ä┘à╪│╪¬╪«╪»┘à {{identifier}}╪ƒ",
    genericDeleteConfirmationMessage:
      "┘ç┘ä ╪¬╪▒┘è╪» ╪¿╪º┘ä┘ü╪╣┘ä ╪¡╪░┘ü ╪╖╪▒┘è┘é╪⌐ ╪º┘ä╪»┘ü╪╣╪ƒ",
    deleteCancelButton: "╪Ñ┘ä╪║╪º╪í",
    deleteConfirmationButton: "╪¡╪░┘ü",
    fieldEmptyForCvv: "┘è╪▒╪¼┘ë ╪Ñ╪»╪«╪º┘ä ╪▒┘à╪▓ ╪¡┘à╪º┘è╪⌐ ╪º┘ä╪¿╪╖╪º┘é╪⌐.",
    fieldEmptyForExpirationDate:
      "┘è╪▒╪¼┘ë ╪Ñ╪»╪«╪º┘ä ╪¬╪º╪▒┘è╪« ╪º┘å╪¬┘ç╪º╪í ╪º┘ä╪╡┘ä╪º╪¡┘è╪⌐.",
    fieldEmptyForCardholderName:
      "┘è╪▒╪¼┘ë ╪Ñ╪»╪«╪º┘ä ╪º╪│┘à ╪╡╪º╪¡╪¿ ╪º┘ä╪¿╪╖╪º┘é╪⌐.",
    fieldTooLongForCardholderName:
      "┘è╪¼╪¿ ╪ú┘å ┘è┘é┘ä ╪º╪│┘à ╪╡╪º╪¡╪¿ ╪º┘ä╪¿╪╖╪º┘é╪⌐ ╪╣┘å 256 ╪¡╪▒┘ü╪º┘ï.",
    fieldEmptyForNumber: "┘è╪▒╪¼┘ë ╪Ñ╪»╪«╪º┘ä ╪▒┘é┘à.",
    fieldEmptyForPostalCode: "┘è╪▒╪¼┘ë ╪Ñ╪»╪«╪º┘ä ╪º┘ä╪▒┘à╪▓ ╪º┘ä╪¿╪▒┘è╪»┘è.",
    fieldInvalidForCardholderName:
      "╪º╪│┘à ╪¡╪º┘à┘ä ╪º┘ä╪¿╪╖╪º┘é╪⌐ ╪║┘è╪▒ ╪╡╪¡┘è╪¡.",
    fieldInvalidForCvv: "╪▒┘à╪▓ ╪º┘ä╪¡┘à╪º┘è╪⌐ ╪║┘è╪▒ ╪╡╪¡┘è╪¡.",
    fieldInvalidForExpirationDate:
      "╪¬╪º╪▒┘è╪« ╪º┘å╪¬┘ç╪º╪í ╪º┘ä╪╡┘ä╪º╪¡┘è╪⌐ ╪║┘è╪▒ ╪╡╪¡┘è╪¡.",
    fieldInvalidForNumber: "╪▒┘é┘à ╪º┘ä╪¿╪╖╪º┘é╪⌐ ╪║┘è╪▒ ╪╡╪¡┘è╪¡.",
    fieldInvalidForPostalCode: "╪º┘ä╪▒┘à╪▓ ╪º┘ä╪¿╪▒┘è╪»┘è ╪║┘è╪▒ ╪╡╪¡┘è╪¡.",
    genericError: "╪¡╪»╪½ ╪«╪╖╪ú ┘à╪º ┘à┘å ╪¼╪º┘å╪¿┘å╪º.",
    hostedFieldsTokenizationFailOnDuplicateError:
      "┘ç╪░┘ç ╪º┘ä╪¿╪╖╪º┘é╪⌐ ╪º┘ä╪º╪ª╪¬┘à╪º┘å┘è╪⌐ ┘à╪¡┘ü┘ê╪╕╪⌐ ┘â╪╖╪▒┘è┘é╪⌐ ╪»┘ü╪╣ ╪¡╪º┘ä┘è╪º┘ï.",
    hostedFieldsFailedTokenizationError:
      "┘è╪▒╪¼┘ë ┘à╪▒╪º╪¼╪╣╪⌐ ┘à╪╣┘ä┘ê┘à╪º╪¬┘â ┘ê╪Ñ╪╣╪º╪»╪⌐ ╪º┘ä┘à╪¡╪º┘ê┘ä╪⌐.",
    hostedFieldsFieldsInvalidError:
      "┘è╪▒╪¼┘ë ┘à╪▒╪º╪¼╪╣╪⌐ ┘à╪╣┘ä┘ê┘à╪º╪¬┘â ┘ê╪Ñ╪╣╪º╪»╪⌐ ╪º┘ä┘à╪¡╪º┘ê┘ä╪⌐.",
    hostedFieldsTokenizationNetworkErrorError:
      "╪«╪╖╪ú ┘ü┘è ╪º┘ä╪┤╪¿┘â╪⌐. ┘è╪▒╪¼┘ë ╪º┘ä┘à╪¡╪º┘ê┘ä╪⌐ ┘à╪¼╪»╪»╪º┘ï.",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "┘ü╪┤┘ä╪¬ ┘à╪╡╪º╪»┘é╪⌐ ╪¿╪╖╪º┘é╪⌐ ╪º┘ä╪º╪ª╪¬┘à╪º┘å. ┘è╪▒╪¼┘ë ┘à╪▒╪º╪¼╪╣╪⌐ ┘à╪╣┘ä┘ê┘à╪º╪¬┘â ┘ê╪Ñ╪╣╪º╪»╪⌐ ╪º┘ä┘à╪¡╪º┘ê┘ä╪⌐.",
    paypalButtonMustBeUsed:
      "╪º╪│╪¬╪«╪»┘à ╪▓╪▒ PayPal ┘ä╪º╪│╪¬╪ª┘å╪º┘ü ╪º┘ä╪»┘ü╪╣.",
    paypalAccountTokenizationFailedError:
      "┘ê┘é╪╣ ╪«╪╖╪ú ╪ú╪½┘å╪º╪í ╪Ñ╪╢╪º┘ü╪⌐ ╪¡╪│╪º╪¿ PayPal. ┘è╪▒╪¼┘ë ╪Ñ╪╣╪º╪»╪⌐ ╪º┘ä┘à╪¡╪º┘ê┘ä╪⌐.",
    paypalFlowFailedError:
      "┘ê┘é╪╣ ╪«╪╖╪ú ╪ú╪½┘å╪º╪í ╪º┘ä╪º╪¬╪╡╪º┘ä ╪¿┘Ç PayPal. ┘è╪▒╪¼┘ë ╪Ñ╪╣╪º╪»╪⌐ ╪º┘ä┘à╪¡╪º┘ê┘ä╪⌐.",
    paypalTokenizationRequestActiveError:
      "╪¬┘ü┘ê┘è╪╢ ╪º┘ä╪»┘ü╪╣ ╪╣╪¿╪▒ PayPal ┘é┘è╪» ╪º┘ä╪¬┘å┘ü┘è╪░.",
    venmoCanceledError:
      "┘ê┘é╪╣ ╪«╪╖╪ú. ╪¬╪ú┘â╪» ╪ú┘å ╪ú╪¡╪»╪½ ╪Ñ╪╡╪»╪º╪▒ ┘à┘å ╪¬╪╖╪¿┘è┘é Venmo ┘à╪½╪¿╪¬ ┘ü┘è ╪¼┘ç╪º╪▓┘â ┘ê╪ú┘å ┘à╪¬╪╡┘ü╪¡┘â ┘è╪»╪╣┘à ╪º┘ä╪¬╪¿╪»┘è┘ä ╪Ñ┘ä┘ë Venmo.",
    vaultManagerPaymentMethodDeletionError:
      "┘ü╪┤┘ä ╪¡╪░┘ü ╪╖╪▒┘è┘é╪⌐ ╪º┘ä╪»┘ü╪╣. ╪ú╪╣╪» ╪º┘ä┘à╪¡╪º┘ê┘ä╪⌐.",
    venmoAppFailedError: "╪¬╪╖╪¿┘è┘é Venmo ╪║┘è╪▒ ┘à┘ê╪¼┘ê╪» ┘ü┘è ╪¼┘ç╪º╪▓┘â.",
    unsupportedCardTypeError:
      "┘å┘ê╪╣ ╪º┘ä╪¿╪╖╪º┘é╪⌐ ╪║┘è╪▒ ┘à╪»╪╣┘ê┘à. ┘è╪▒╪¼┘ë ╪¬╪¼╪▒╪¿╪⌐ ╪¿╪╖╪º┘é╪⌐ ╪ú╪«╪▒┘ë.",
    applePayTokenizationError:
      "┘ê┘é╪╣ ╪«╪╖╪ú ┘ü┘è ╪º┘ä╪┤╪¿┘â╪⌐ ╪ú╪½┘å╪º╪í ┘à╪╣╪º┘ä╪¼╪⌐ ╪º┘ä╪»┘ü╪╣ ╪╣╪¿╪▒ Apple Pay. ┘è╪▒╪¼┘ë ╪Ñ╪╣╪º╪»╪⌐ ╪º┘ä┘à╪¡╪º┘ê┘ä╪⌐.",
    applePayActiveCardError:
      "╪Ñ╪╢╪º┘ü╪⌐ ╪¿╪╖╪º┘é╪⌐ ┘à╪»╪╣┘ê┘à╪⌐ ╪Ñ┘ä┘ë ┘à╪¡┘ü╪╕╪⌐ Apple Pay.",
    cardholderNameLabel: "╪º╪│┘à ╪╡╪º╪¡╪¿ ╪º┘ä╪¿╪╖╪º┘é╪⌐",
    cardNumberLabel: "╪▒┘é┘à ╪º┘ä╪¿╪╖╪º┘é╪⌐",
    cvvLabel: "╪▒┘à╪▓ CVVΓÇÅ",
    cvvThreeDigitLabelSubheading: "(3 ╪ú╪▒┘é╪º┘à)",
    cvvFourDigitLabelSubheading: "(4 ╪ú╪▒┘é╪º┘à)",
    cardholderNamePlaceholder: "╪º╪│┘à ╪╡╪º╪¡╪¿ ╪º┘ä╪¿╪╖╪º┘é╪⌐",
    expirationDateLabel: "╪¬╪º╪▒┘è╪« ╪º┘å╪¬┘ç╪º╪í ╪º┘ä╪╡┘ä╪º╪¡┘è╪⌐",
    expirationDateLabelSubheading: "(MM/YY)",
    expirationDatePlaceholder: "╪º┘ä╪┤┘ç╪▒/ ╪º┘ä╪│┘å╪⌐",
    postalCodeLabel: "╪º┘ä╪▒┘à╪▓ ╪º┘ä╪¿╪▒┘è╪»┘è",
    saveCardLabel: "╪¡┘ü╪╕ ╪º┘ä╪¿╪╖╪º┘é╪⌐",
    payWithCard: "╪º┘ä╪»┘ü╪╣ ╪¿╪¿╪╖╪º┘é╪⌐ ╪│╪¡╪¿ ╪ú┘ê ╪º╪ª╪¬┘à╪º┘å",
    endingIn: "╪¬┘å╪¬┘ç┘è ╪¿╪¬╪º╪▒┘è╪« {{lastFourCardDigits}}",
    "Apple Pay": "Apple Pay",
    Venmo: "VenmoΓÇÅ",
    Card: "╪º┘ä╪¿╪╖╪º┘é╪⌐",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal Credit",
    "Google Pay": "Google Pay",
    "American Express": "American ExpressΓÇÅ",
    Discover: "DiscoverΓÇÅ",
    "Diners Club": "Diners ClubΓÇÅ",
    Elo: "EloΓÇÅ",
    Hiper: "HiperΓÇÅ",
    Hipercard: "HipercardΓÇÅ",
    MasterCard: "MastercardΓÇÅ",
    Visa: "VisaΓÇÅ",
    JCB: "JCBΓÇÅ",
    Maestro: "MaestroΓÇÅ",
    UnionPay: "UnionPayΓÇÅ",
  },
  pj = {
    payingWith: "Forma \xfahrady: {{paymentSource}}",
    chooseAnotherWayToPay: "Vybrat jin\xfd zp┼»sob platby",
    chooseAWayToPay: "Vybrat zp┼»sob platby",
    otherWaysToPay: "Jin\xe9 zp┼»soby platby",
    edit: "Upravit",
    doneEditing: "Hotovo",
    editPaymentMethods: "Upravit zp┼»soby platby",
    CreditCardDeleteConfirmationMessage:
      "Chcete kartu {{secondaryIdentifier}} s koncov\xfdm ─ì\xedslem {{identifier}}odstranit?",
    PayPalAccountDeleteConfirmationMessage:
      "Chcete {{identifier}}\xfa─ìtu PayPal odstranit?",
    VenmoAccountDeleteConfirmationMessage:
      "Opravdu chcete \xfa─ìet Venmo s\xa0u┼╛ivatelsk\xfdm jm\xe9nem {{identifier}} odstranit?",
    genericDeleteConfirmationMessage:
      "Opravdu chcete tento zp┼»sob platby odstranit?",
    deleteCancelButton: "Zru┼íit",
    deleteConfirmationButton: "Odstranit",
    fieldEmptyForCvv: "Vypl┼ête k\xf3d CVV.",
    fieldEmptyForExpirationDate: "Vypl┼ête datum vypr┼íen\xed platnosti.",
    fieldEmptyForCardholderName: "Vypl┼ête jm\xe9no dr┼╛itele karty.",
    fieldTooLongForCardholderName:
      "Jm\xe9no dr┼╛itele karty mus\xed obsahovat m\xe9n─¢ ne┼╛ 256\xa0znak┼».",
    fieldEmptyForNumber: "Vypl┼ête ─ì\xedslo.",
    fieldEmptyForPostalCode: "Vypl┼ête po┼ítovn\xed sm─¢rovac\xed ─ì\xedslo.",
    fieldInvalidForCardholderName:
      "Toto jm\xe9no dr┼╛itele karty nen\xed platn\xe9.",
    fieldInvalidForCvv: "Tento bezpe─ìnostn\xed k\xf3d nen\xed platn\xfd.",
    fieldInvalidForExpirationDate:
      "Toto datum vypr┼íen\xed platnosti nen\xed platn\xe9.",
    fieldInvalidForNumber: "Toto ─ì\xedslo karty nen\xed platn\xe9.",
    fieldInvalidForPostalCode:
      "Toto po┼ítovn\xed sm─¢rovac\xed ─ì\xedslo nen\xed platn\xe9.",
    genericError: "Do┼ílo k\xa0chyb─¢ na na┼í\xed stran─¢.",
    hostedFieldsTokenizationFailOnDuplicateError:
      "Tato kreditn\xed karta je ji┼╛ jako zp┼»sob platby ulo┼╛ena.",
    hostedFieldsFailedTokenizationError:
      "Zkontrolujte zadan\xe9 informace a\xa0zkuste to znovu.",
    hostedFieldsFieldsInvalidError:
      "Zkontrolujte zadan\xe9 informace a\xa0zkuste to znovu.",
    hostedFieldsTokenizationNetworkErrorError:
      "Do┼ílo k\xa0chyb─¢ s\xedt─¢. Zkuste to znovu.",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "Ov─¢┼Öen\xed kreditn\xed karty se nezda┼Öilo. Zkontrolujte zadan\xe9 informace a\xa0zkuste to znovu.",
    paypalButtonMustBeUsed:
      "Chcete-li p┼Öej\xedt k\xa0platb─¢, pou┼╛ijte tla─ì\xedtko PayPal.",
    paypalAccountTokenizationFailedError:
      "P┼Öi p┼Öid\xe1v\xe1n\xed \xfa─ìtu PayPal do┼ílo k\xa0chyb─¢. Zkuste to znovu.",
    paypalFlowFailedError:
      "P┼Öi p┼Öipojov\xe1n\xed ke slu┼╛b─¢ PayPal do┼ílo k\xa0chyb─¢. Zkuste to znovu.",
    paypalTokenizationRequestActiveError:
      "Autorizace platby p┼Öes PayPal ji┼╛ prob\xedh\xe1.",
    venmoCanceledError:
      "Do┼ílo k\xa0chyb─¢. Zkontrolujte, zda m\xe1te v\xa0za┼Ö\xedzen\xed nainstalovanou nejnov─¢j┼í\xed verzi aplikace Venmo a\xa0zda prohl\xed┼╛e─ì p┼Öechod na aplikaci Venmo podporuje.",
    vaultManagerPaymentMethodDeletionError:
      "Zp┼»sob platby se nepoda┼Öilo odstranit. Zkuste to znovu.",
    venmoAppFailedError:
      "Aplikaci Venmo se ve va┼íem za┼Ö\xedzen\xed nepoda┼Öilo naj\xedt.",
    unsupportedCardTypeError:
      "Tento typ karty nen\xed podporov\xe1n. Vyzkou┼íejte jinou kartu.",
    applePayTokenizationError:
      "P┼Öi zpracov\xe1n\xed platby p┼Öes Apple Pay do┼ílo k\xa0chyb─¢ s\xedt─¢. Zkuste to znovu.",
    applePayActiveCardError:
      "P┼Öidejte si podporovanou kartu do pen─¢┼╛enky Apple Pay.",
    cardholderNameLabel: "Jm\xe9no dr┼╛itele karty",
    cardNumberLabel: "─î\xedslo karty",
    cvvLabel: "K\xf3d\xa0CVV",
    cvvThreeDigitLabelSubheading: "(3\xa0─ì\xedslice)",
    cvvFourDigitLabelSubheading: "(4\xa0─ì\xedslice)",
    cardholderNamePlaceholder: "Jm\xe9no dr┼╛itele karty",
    expirationDateLabel: "Datum vypr┼íen\xed platnosti",
    expirationDateLabelSubheading: "(MM/RR)",
    expirationDatePlaceholder: "MM/RR",
    postalCodeLabel: "Po┼ítovn\xed sm─¢rovac\xed ─ì\xedslo",
    saveCardLabel: "Ulo┼╛it kartu",
    payWithCard: "Zaplatit kartou",
    endingIn: "Koncov\xe9 ─ì\xedslo {{lastFourCardDigits}}",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "Karta",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal Credit",
    "Google Pay": "Google Pay",
    "American Express": "American Express",
    Discover: "Discover",
    "Diners Club": "Diners Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "UnionPay",
  },
  pW = {
    payingWith: "Betaling med {{paymentSource}}",
    chooseAnotherWayToPay: "V\xe6lg en anden betalingsmetode",
    chooseAWayToPay: "V\xe6lg, hvordan du vil betale",
    otherWaysToPay: "Andre m\xe5der at betale p\xe5",
    edit: "Rediger",
    doneEditing: "Udf\xf8rt",
    editPaymentMethods: "Rediger betalingsmetode",
    CreditCardDeleteConfirmationMessage:
      "Vil du slette dit {{secondaryIdentifier}}-kort, der slutter p\xe5 {{identifier}}?",
    PayPalAccountDeleteConfirmationMessage:
      "Vil du slette PayPal-kontoen for {{identifier}}?",
    VenmoAccountDeleteConfirmationMessage:
      "Er du sikker p\xe5, at du vil slette Venmo-konto med brugernavnet {{identifier}}?",
    genericDeleteConfirmationMessage:
      "Er du sikker p\xe5, at du vil slette denne betalingsmetode?",
    deleteCancelButton: "Annuller",
    deleteConfirmationButton: "Slet",
    fieldEmptyForCvv: "Du skal indtaste kontrolcifrene.",
    fieldEmptyForExpirationDate: "Du skal indtaste en udl\xf8bsdato.",
    fieldEmptyForCardholderName: "Du skal indtaste kortholderens navn.",
    fieldTooLongForCardholderName:
      "Kortholders navn skal v\xe6re mindre end 256 tegn.",
    fieldEmptyForNumber: "Du skal indtaste et nummer.",
    fieldEmptyForPostalCode: "Du skal indtaste et postnummer.",
    fieldInvalidForCardholderName: "Kortindehaverens navn er ugyldigt.",
    fieldInvalidForCvv: "Denne sikkerhedskode er ugyldig.",
    fieldInvalidForExpirationDate: "Denne udl\xf8bsdato er ugyldig.",
    fieldInvalidForNumber: "Dette kortnummer er ikke gyldigt.",
    fieldInvalidForPostalCode: "Dette postnummer er ikke gyldigt.",
    genericError: "Der opstod en fejl.",
    hostedFieldsTokenizationFailOnDuplicateError:
      "Dette betalingskort findes allerede som en gemt betalingsmetode.",
    hostedFieldsFailedTokenizationError: "Tjek oplysningerne, og pr\xf8v igen.",
    hostedFieldsFieldsInvalidError: "Tjek oplysningerne, og pr\xf8v igen.",
    hostedFieldsTokenizationNetworkErrorError: "Netv\xe6rksfejl. Pr\xf8v igen.",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "Bekr\xe6ftelse af betalingskort mislykkedes. Tjek oplysningerne, og pr\xf8v igen.",
    paypalButtonMustBeUsed:
      "Brug PayPal-knappen til at forts\xe6tte med din betaling.",
    paypalAccountTokenizationFailedError:
      "Der opstod en fejl under tilf\xf8jelsen af PayPal-kontoen. Pr\xf8v igen.",
    paypalFlowFailedError:
      "Det lykkedes ikke at oprette forbindelse til PayPal. Pr\xf8v igen.",
    paypalTokenizationRequestActiveError:
      "PayPals betalingsautorisation er allerede i gang.",
    venmoCanceledError:
      "Der opstod et problem. S\xf8rg for, at den nyeste version af Venmo-appen er installeret p\xe5 din enhed, og at din browser underst\xf8tter skift til Venmo.",
    vaultManagerPaymentMethodDeletionError:
      "Betalingsmetoden kunne ikke slettes. Pr\xf8v igen.",
    venmoAppFailedError: "Venmo-appen blev ikke fundet p\xe5 din enhed.",
    unsupportedCardTypeError:
      "Korttypen underst\xf8ttes ikke. Pr\xf8v et andet kort.",
    applePayTokenizationError:
      "Der opstod en netv\xe6rksfejl under behandling af Apple Pay-betalingen. Pr\xf8v igen.",
    applePayActiveCardError:
      "F\xf8j et underst\xf8ttet kort til din Apple Pay-e-pung.",
    cardholderNameLabel: "Kortindehaverens navn",
    cardNumberLabel: "Kortnummer",
    cvvLabel: "Kontrolcifre",
    cvvThreeDigitLabelSubheading: "(3 cifre)",
    cvvFourDigitLabelSubheading: "(4 cifre)",
    cardholderNamePlaceholder: "Kortindehaverens navn",
    expirationDateLabel: "Udl\xf8bsdato",
    expirationDateLabelSubheading: "(MM/\xc5\xc5)",
    expirationDatePlaceholder: "MM/\xc5\xc5",
    postalCodeLabel: "Postnummer",
    saveCardLabel: "Gem kort",
    payWithCard: "Betal med betalingskort",
    endingIn: "Slutter p\xe5 {{lastFourCardDigits}}",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "Kort",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal Credit",
    "Google Pay": "Google Pay",
    "American Express": "American Express",
    Discover: "Discover",
    "Diners Club": "Diners Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "UnionPay",
  },
  pK = {
    payingWith: "Zahlen mit {{paymentSource}}",
    chooseAnotherWayToPay: "W\xe4hlen Sie eine andere Zahlungsquelle",
    chooseAWayToPay: "W\xe4hlen Sie eine Zahlungsquelle",
    otherWaysToPay: "Sonstige Zahlungsquellen",
    edit: "\xc4ndern",
    doneEditing: "Fertig",
    editPaymentMethods: "Zahlungsquellen bearbeiten",
    CreditCardDeleteConfirmationMessage:
      "{{secondaryIdentifier}}-Karte mit den Endziffern {{identifier}} l\xf6schen?",
    PayPalAccountDeleteConfirmationMessage:
      "PayPal-Konto {{identifier}} l\xf6schen?",
    VenmoAccountDeleteConfirmationMessage:
      "Wollen Sie das Venmo-Konto mit dem Benutzernamen {{identifier}} wirklich l\xf6schen?",
    genericDeleteConfirmationMessage:
      "M\xf6chten Sie diese Zahlungsquelle wirklich l\xf6schen?",
    deleteCancelButton: "Abbrechen",
    deleteConfirmationButton: "L\xf6schen",
    fieldEmptyForCvv: "Geben Sie die Kartenpr\xfcfnummer (CVV) ein.",
    fieldEmptyForExpirationDate: "Geben Sie das Ablaufdatum ein.",
    fieldEmptyForCardholderName: "Geben Sie den Namen des Karteninhabers ein.",
    fieldTooLongForCardholderName:
      "Der Name des Karteninhabers darf nicht l\xe4nger als 256 Zeichen sein.",
    fieldEmptyForNumber: "Geben Sie eine Nummer ein.",
    fieldEmptyForPostalCode: "Geben Sie eine Postleitzahl ein.",
    fieldInvalidForCardholderName:
      "Der Name des Karteninhabers ist nicht g\xfcltig.",
    fieldInvalidForCvv: "Diese Kartenpr\xfcfnummer ist ung\xfcltig.",
    fieldInvalidForExpirationDate: "Dieses Ablaufdatum ist ung\xfcltig.",
    fieldInvalidForNumber: "Diese Kartennummer ist ung\xfcltig.",
    fieldInvalidForPostalCode: "Diese Postleitzahl ist ung\xfcltig.",
    genericError: "Bei uns ist ein Fehler aufgetreten.",
    hostedFieldsTokenizationFailOnDuplicateError:
      "Diese Kreditkarte ist bereits als gespeicherte Zahlungsquelle vorhanden.",
    hostedFieldsFailedTokenizationError:
      "Bitte pr\xfcfen Sie die Informationen und versuchen Sie es erneut.",
    hostedFieldsFieldsInvalidError:
      "Bitte pr\xfcfen Sie die Informationen und versuchen Sie es erneut.",
    hostedFieldsTokenizationNetworkErrorError:
      "Netzwerkfehler. Versuchen Sie es bitte erneut.",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "Die Kreditkartenverifizierung ist fehlgeschlagen. Bitte pr\xfcfen Sie die Informationen und versuchen Sie es erneut.",
    paypalButtonMustBeUsed:
      "Verwenden Sie den PayPal-Button, um mit der Zahlung fortzufahren.",
    paypalAccountTokenizationFailedError:
      "Beim Hinzuf\xfcgen des PayPal-Kontos ist ein Fehler aufgetreten. Versuchen Sie es bitte erneut.",
    paypalFlowFailedError:
      "Bei der Verbindung mit PayPal ist ein Fehler aufgetreten. Versuchen Sie es bitte erneut.",
    paypalTokenizationRequestActiveError:
      "Die PayPal-Zahlungsautorisierung wird bereits vorgenommen.",
    venmoCanceledError:
      "Etwas ist schief gelaufen. Vergewissern Sie sich, dass Sie die neueste Version der Venmo-App auf Ihrem Ger\xe4t installiert haben und Ihr Browser den Wechsel zu Venmo unterst\xfctzt.",
    vaultManagerPaymentMethodDeletionError:
      "Die Zahlungsquelle konnte nicht gel\xf6scht werden. Versuchen Sie es erneut.",
    venmoAppFailedError:
      "Die Venmo-App wurde nicht auf Ihrem Ger\xe4t gefunden.",
    unsupportedCardTypeError:
      "Dieser Kartentyp wird nicht unterst\xfctzt. Versuchen Sie es mit einer anderen Karte.",
    applePayTokenizationError:
      "Bei der Verarbeitung der Apple Pay-Zahlung ist ein Netzwerkfehler aufgetreten. Versuchen Sie es bitte erneut.",
    applePayActiveCardError:
      "F\xfcgen Sie Ihrem Apple Pay-Wallet eine unterst\xfctzte Karte hinzu.",
    cardholderNameLabel: "Name des Karteninhabers",
    cardNumberLabel: "Kartennummer",
    cvvLabel: "Kartenpr\xfcfnummer",
    cvvThreeDigitLabelSubheading: "(3-stellig)",
    cvvFourDigitLabelSubheading: "(4-stellig)",
    cardholderNamePlaceholder: "Name des Karteninhabers",
    expirationDateLabel: "G\xfcltig bis",
    expirationDateLabelSubheading: "(MM/JJ)",
    expirationDatePlaceholder: "MM/JJ",
    postalCodeLabel: "Postleitzahl",
    saveCardLabel: "Karte speichern",
    payWithCard: "Mit Karte zahlen",
    endingIn: "Mit den Endziffern {{lastFourCardDigits}}",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "Karte",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal Credit",
    "Google Pay": "Google Pay",
    "American Express": "American Express",
    Discover: "Discover",
    "Diners Club": "Diners Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "UnionPay",
  },
  pY = {
    payingWith: "╬á╬╗╬╖╧ü╧ë╬╝╬« ╬╝╬╡ {{paymentSource}}",
    chooseAnotherWayToPay:
      "╬ò╧Ç╬╣╬╗╬┐╬│╬« ╬╡╬╜╧î╧é ╬¼╬╗╬╗╬┐╧à ╧ä╧ü╧î╧Ç╬┐╧à ╧Ç╬╗╬╖╧ü╧ë╬╝╬«╧é",
    chooseAWayToPay: "╬ò╧Ç╬╣╬╗╬┐╬│╬« ╧ä╧ü╧î╧Ç╬┐╧à ╧Ç╬╗╬╖╧ü╧ë╬╝╬«╧é",
    otherWaysToPay: "╬å╬╗╬╗╬┐╬╣ ╧ä╧ü╧î╧Ç╬┐╬╣ ╧Ç╬╗╬╖╧ü╧ë╬╝╬«╧é",
    edit: "╬ò╧Ç╬╡╬╛╬╡╧ü╬│╬▒╧â╬»╬▒",
    doneEditing: "╬ñ╬¡╬╗╬┐╧é",
    editPaymentMethods:
      "╬ò╧Ç╬╡╬╛╬╡╧ü╬│╬▒╧â╬»╬▒ ╬╝╬╡╬╕╧î╬┤╧ë╬╜ ╧Ç╬╗╬╖╧ü╧ë╬╝╬«╧é",
    CreditCardDeleteConfirmationMessage:
      "╬ö╬╣╬▒╬│╧ü╬▒╧å╬« ╧ä╬╖╧é ╬║╬¼╧ü╧ä╬▒╧é {{secondaryIdentifier}} ╧Ç╬┐╧à ╬╗╬«╬│╬╡╬╣ ╧â╬╡ {{identifier}};",
    PayPalAccountDeleteConfirmationMessage:
      "╬ö╬╣╬▒╬│╧ü╬▒╧å╬« {{identifier}}╬╗╬┐╬│╬▒╧ü╬╣╬▒╧â╬╝╬┐╧ì PayPal;",
    VenmoAccountDeleteConfirmationMessage:
      "╬ÿ╬¡╬╗╬╡╧ä╬╡ ╧â╬»╬│╬┐╧à╧ü╬▒ ╬╜╬▒ ╬┤╬╣╬▒╬│╧ü╬¼╧ê╬╡╧ä╬╡ ╧ä╬┐╬╜ ╬╗╬┐╬│╬▒╧ü╬╣╬▒╧â╬╝╧î Venmo ╬╝╬╡ ╧ä╬┐ ╧î╬╜╬┐╬╝╬▒ ╧ç╧ü╬«╧â╧ä╬╖ {{identifier}};",
    genericDeleteConfirmationMessage:
      "╬ÿ╬¡╬╗╬╡╧ä╬╡ ╧â╬»╬│╬┐╧à╧ü╬▒ ╬╜╬▒ ╬┤╬╣╬▒╬│╧ü╬¼╧ê╬╡╧ä╬╡ ╬▒╧à╧ä╬«╬╜ ╧ä╬╖ ╬╝╬¡╬╕╬┐╬┤╬┐ ╧Ç╬╗╬╖╧ü╧ë╬╝╬«╧é;",
    deleteCancelButton: "╬æ╬║╧ì╧ü╧ë╧â╬╖",
    deleteConfirmationButton: "╬ö╬╣╬▒╬│╧ü╬▒╧å╬«",
    fieldEmptyForCvv:
      "╬ú╧à╬╝╧Ç╬╗╬╖╧ü╧Ä╧â╧ä╬╡ ╬¡╬╜╬▒╬╜ ╬║╧ë╬┤╬╣╬║╧î ╬▒╧â╧å╬▒╬╗╬╡╬»╬▒╧é (CVV).",
    fieldEmptyForExpirationDate:
      "╬ú╧à╬╝╧Ç╬╗╬╖╧ü╧Ä╧â╧ä╬╡ ╬╖╬╝╬╡╧ü╬┐╬╝╬╖╬╜╬»╬▒ ╬╗╬«╬╛╬╖╧é.",
    fieldEmptyForCardholderName:
      "╬ú╧à╬╝╧Ç╬╗╬╖╧ü╧Ä╧â╧ä╬╡ ╧ä╬┐ ╧î╬╜╬┐╬╝╬▒ ╬╡╬╜╧î╧é ╬║╬▒╧ä╧î╧ç╬┐╧à ╬║╬¼╧ü╧ä╬▒╧é.",
    fieldTooLongForCardholderName:
      "╬ñ╬┐ ╧î╬╜╬┐╬╝╬▒ ╧ä╬┐╧à ╬║╬▒╧ä╧î╧ç╬┐╧à ╧ä╬╖╧é ╬║╬¼╧ü╧ä╬▒╧é ╧Ç╧ü╬¡╧Ç╬╡╬╣ ╬╜╬▒ ╧Ç╬╡╧ü╬╣╬¡╧ç╬╡╬╣ ╬╗╬╣╬│╧î╧ä╬╡╧ü╬┐╧à╧é ╬▒╧Ç╧î 256 ╧ç╬▒╧ü╬▒╬║╧ä╬«╧ü╬╡╧é.",
    fieldEmptyForNumber: "╬ú╧à╬╝╧Ç╬╗╬╖╧ü╧Ä╧â╧ä╬╡ ╬¡╬╜╬▒╬╜ ╬▒╧ü╬╣╬╕╬╝╧î.",
    fieldEmptyForPostalCode:
      "╬ú╧à╬╝╧Ç╬╗╬╖╧ü╧Ä╧â╧ä╬╡ ╬¡╬╜╬▒╬╜ ╧ä╬▒╧ç╧à╬┤╧ü╬┐╬╝╬╣╬║╧î ╬║╧Ä╬┤╬╣╬║╬▒.",
    fieldInvalidForCardholderName:
      "╬æ╧à╧ä╧î ╧ä╬┐ ╧î╬╜╬┐╬╝╬▒ ╬║╬▒╧ä╧î╧ç╬┐╧à ╬║╬¼╧ü╧ä╬▒╧é ╬┤╬╡╬╜ ╬╡╬»╬╜╬▒╬╣ ╬¡╬│╬║╧à╧ü╬┐.",
    fieldInvalidForCvv:
      "╬æ╧à╧ä╧î╧é ╬┐ ╬║╧ë╬┤╬╣╬║╧î╧é ╬▒╧â╧å╬▒╬╗╬╡╬»╬▒╧é ╬┤╬╡╬╜ ╬╡╬»╬╜╬▒╬╣ ╬¡╬│╬║╧à╧ü╬┐╧é.",
    fieldInvalidForExpirationDate:
      "╬æ╧à╧ä╬« ╬╖ ╬╖╬╝╬╡╧ü╬┐╬╝╬╖╬╜╬»╬▒ ╬╗╬«╬╛╬╖╧é ╬┤╬╡╬╜ ╬╡╬»╬╜╬▒╬╣ ╬¡╬│╬║╧à╧ü╬╖.",
    fieldInvalidForNumber:
      "╬æ╧à╧ä╧î╧é ╬┐ ╬▒╧ü╬╣╬╕╬╝╧î╧é ╬║╬¼╧ü╧ä╬▒╧é ╬┤╬╡╬╜ ╬╡╬»╬╜╬▒╬╣ ╬¡╬│╬║╧à╧ü╬┐╧é.",
    fieldInvalidForPostalCode:
      "╬æ╧à╧ä╧î╧é ╬┐ ╧ä╬▒╧ç╧à╬┤╧ü╬┐╬╝╬╣╬║╧î╧é ╬║╧Ä╬┤╬╣╬║╬▒╧é ╬┤╬╡╬╜ ╬╡╬»╬╜╬▒╬╣ ╬¡╬│╬║╧à╧ü╬┐╧é.",
    genericError:
      "╬á╧ü╬┐╬¡╬║╧à╧ê╬╡ ╧Ç╧ü╧î╬▓╬╗╬╖╬╝╬▒ ╧â╧ä╬┐ ╧â╧ì╧â╧ä╬╖╬╝╬¼ ╬╝╬▒╧é.",
    hostedFieldsTokenizationFailOnDuplicateError:
      "╬æ╧à╧ä╬« ╬╖ ╧Ç╬╣╧â╧ä╧ë╧ä╬╣╬║╬« ╬║╬¼╧ü╧ä╬▒ ╧à╧Ç╬¼╧ü╧ç╬╡╬╣ ╬«╬┤╬╖ ╧ë╧é ╬▒╧Ç╬┐╬╕╬╖╬║╬╡╧à╬╝╬¡╬╜╬╖ ╬╝╬¡╬╕╬┐╬┤╬┐╧é ╧Ç╬╗╬╖╧ü╧ë╬╝╬«╧é.",
    hostedFieldsFailedTokenizationError:
      "╬ò╬╗╬¡╬│╬╛╧ä╬╡ ╧ä╬▒ ╧â╧ä╬┐╬╣╧ç╬╡╬»╬▒ ╧â╬▒╧é ╬║╬▒╬╣ ╬┤╬┐╬║╬╣╬╝╬¼╧â╧ä╬╡ ╬╛╬▒╬╜╬¼.",
    hostedFieldsFieldsInvalidError:
      "╬ò╬╗╬¡╬│╬╛╧ä╬╡ ╧ä╬▒ ╧â╧ä╬┐╬╣╧ç╬╡╬»╬▒ ╧â╬▒╧é ╬║╬▒╬╣ ╬┤╬┐╬║╬╣╬╝╬¼╧â╧ä╬╡ ╬╛╬▒╬╜╬¼.",
    hostedFieldsTokenizationNetworkErrorError:
      "╬ú╧å╬¼╬╗╬╝╬▒ ╬┤╬╣╬║╧ä╧ì╬┐╧à. ╬ö╬┐╬║╬╣╬╝╬¼╧â╧ä╬╡ ╬╛╬▒╬╜╬¼.",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "╬ù ╬╡╧Ç╬▒╬╗╬«╬╕╬╡╧à╧â╬╖ ╧ä╬╖╧é ╧Ç╬╣╧â╧ä╧ë╧ä╬╣╬║╬«╧é ╬║╬¼╧ü╧ä╬▒╧é ╬▒╧Ç╬¡╧ä╧à╧ç╬╡. ╬ò╬╗╬¡╬│╬╛╧ä╬╡ ╧ä╬▒ ╧â╧ä╬┐╬╣╧ç╬╡╬»╬▒ ╧â╬▒╧é ╬║╬▒╬╣ ╬┤╬┐╬║╬╣╬╝╬¼╧â╧ä╬╡ ╬╛╬▒╬╜╬¼.",
    paypalButtonMustBeUsed:
      "╬º╧ü╬╖╧â╬╣╬╝╬┐╧Ç╬┐╬╣╬«╧â╧ä╬╡ ╧ä╬┐ ╬║╬┐╧à╬╝╧Ç╬» PayPal ╬│╬╣╬▒ ╬╜╬▒ ╧â╧à╬╜╬╡╧ç╬»╧â╬╡╧ä╬╡ ╬╝╬╡ ╧ä╬╖╬╜ ╧Ç╬╗╬╖╧ü╧ë╬╝╬«.",
    paypalAccountTokenizationFailedError:
      "╬á╧ü╬┐╬¡╬║╧à╧ê╬╡ ╬║╬¼╧Ç╬┐╬╣╬┐ ╧Ç╧ü╧î╬▓╬╗╬╖╬╝╬▒ ╬╝╬╡ ╧ä╬╖╬╜ ╧Ç╧ü╬┐╧â╬╕╬«╬║╬╖ ╧ä╬┐╧à ╬╗╬┐╬│╬▒╧ü╬╣╬▒╧â╬╝╬┐╧ì PayPal. ╬ö╬┐╬║╬╣╬╝╬¼╧â╧ä╬╡ ╬╛╬▒╬╜╬¼.",
    paypalFlowFailedError:
      "╬á╧ü╬┐╬¡╬║╧à╧ê╬╡ ╬║╬¼╧Ç╬┐╬╣╬┐ ╧Ç╧ü╧î╬▓╬╗╬╖╬╝╬▒ ╬╝╬╡ ╧ä╬╖ ╧â╧ì╬╜╬┤╬╡╧â╬╖ ╧â╧ä╬╖╬╜ PayPal. ╬ö╬┐╬║╬╣╬╝╬¼╧â╧ä╬╡ ╬╛╬▒╬╜╬¼.",
    paypalTokenizationRequestActiveError:
      "╬ù ╬╡╬╛╬┐╧à╧â╬╣╬┐╬┤╧î╧ä╬╖╧â╬╖ ╧Ç╬╗╬╖╧ü╧ë╬╝╬«╧é ╬╝╬¡╧â╧ë PayPal ╬▓╧ü╬»╧â╬║╬╡╧ä╬▒╬╣ ╬«╬┤╬╖ ╧â╬╡ ╬╡╬╛╬¡╬╗╬╣╬╛╬╖.",
    venmoCanceledError:
      "╬á╧ü╬┐╬¡╬║╧à╧ê╬╡ ╧Ç╧ü╧î╬▓╬╗╬╖╬╝╬▒. ╬Æ╬╡╬▓╬▒╬╣╧ë╬╕╬╡╬»╧ä╬╡ ╧î╧ä╬╣ ╬¡╧ç╬╡╧ä╬╡ ╧ä╬╖╬╜ ╧Ç╬╣╬┐ ╧Ç╧ü╧î╧â╧å╬▒╧ä╬╖ ╬¡╬║╬┤╬┐╧â╬╖ ╧ä╬╖╧é ╬╡╧å╬▒╧ü╬╝╬┐╬│╬«╧é Venmo ╬╡╬│╬║╬▒╧ä╬╡╧â╧ä╬╖╬╝╬¡╬╜╬╖ ╧â╧ä╬╖ ╧â╧à╧â╬║╬╡╧à╬« ╧â╬▒╧é ╬║╬▒╬╣ ╧î╧ä╬╣ ╧ä╬┐ ╧Ç╧ü╧î╬│╧ü╬▒╬╝╬╝╬▒ ╧Ç╬╡╧ü╬╣╬«╬│╬╖╧â╬«╧é ╧â╬▒╧é ╧à╧Ç╬┐╧â╧ä╬╖╧ü╬»╬╢╬╡╬╣ ╧ä╬╖ ╬╝╬╡╧ä╬¼╬▓╬▒╧â╬╖ ╧â╧ä╬╖ Venmo.",
    vaultManagerPaymentMethodDeletionError:
      "╬ù ╬┤╬╣╬▒╬│╧ü╬▒╧å╬« ╧ä╬╖╧é ╬╝╬╡╬╕╧î╬┤╬┐╧à ╧Ç╬╗╬╖╧ü╧ë╬╝╬«╧é ╬╡╬»╬╜╬▒╬╣ ╬▒╬┤╧ì╬╜╬▒╧ä╬╖, ╬┤╬┐╬║╬╣╬╝╬¼╧â╧ä╬╡ ╬╛╬▒╬╜╬¼.",
    venmoAppFailedError:
      "╬ù ╬╡╧å╬▒╧ü╬╝╬┐╬│╬« Venmo ╬┤╬╡╬╜ ╬▓╧ü╬¡╬╕╬╖╬║╬╡ ╧â╧ä╬╖ ╧â╧à╧â╬║╬╡╧à╬« ╧â╬▒╧é.",
    unsupportedCardTypeError:
      "╬æ╧à╧ä╧î╧é ╬┐ ╧ä╧ì╧Ç╬┐╧é ╬║╬¼╧ü╧ä╬▒╧é ╬┤╬╡╬╜ ╧à╧Ç╬┐╧â╧ä╬╖╧ü╬»╬╢╬╡╧ä╬▒╬╣. ╬ö╬┐╬║╬╣╬╝╬¼╧â╧ä╬╡ ╬╝╬╣╬▒ ╬¼╬╗╬╗╬╖ ╬║╬¼╧ü╧ä╬▒.",
    applePayTokenizationError:
      "╬á╧ü╬┐╬¡╬║╧à╧ê╬╡ ╧â╧å╬¼╬╗╬╝╬▒ ╬┤╬╣╬║╧ä╧ì╬┐╧à ╬║╬▒╧ä╬¼ ╧ä╬╖╬╜ ╬╡╧Ç╬╡╬╛╬╡╧ü╬│╬▒╧â╬»╬▒ ╧ä╬╖╧é ╧Ç╬╗╬╖╧ü╧ë╬╝╬«╧é ╬╝╬¡╧â╧ë Apple Pay. ╬ö╬┐╬║╬╣╬╝╬¼╧â╧ä╬╡ ╬╛╬▒╬╜╬¼.",
    applePayActiveCardError:
      "╬á╧ü╬┐╧â╬╕╬¡╧â╧ä╬╡ ╬╝╬╣╬▒ ╧à╧Ç╬┐╧â╧ä╬╖╧ü╬╣╬╢╧î╬╝╬╡╬╜╬╖ ╬║╬¼╧ü╧ä╬▒ ╧â╧ä╬┐ ╧ê╬╖╧å╬╣╬▒╬║╧î ╧Ç╬┐╧ü╧ä╬┐╧å╧î╬╗╬╣ Apple Pay.",
    cardholderNameLabel: "╬î╬╜╬┐╬╝╬▒ ╬║╬▒╧ä╧î╧ç╬┐╧à ╬║╬¼╧ü╧ä╬▒╧é",
    cardNumberLabel: "╬æ╧ü╬╣╬╕╬╝╧î╧é ╬║╬¼╧ü╧ä╬▒╧é",
    cvvLabel: "╬Ü╧ë╬┤╬╣╬║╧î╧é ╬▒╧â╧å╬▒╬╗╬╡╬»╬▒╧é (CVV)",
    cvvThreeDigitLabelSubheading: "(3 ╧ê╬╖╧å╬»╬▒)",
    cvvFourDigitLabelSubheading: "(4 ╧ê╬╖╧å╬»╬▒)",
    cardholderNamePlaceholder: "╬î╬╜╬┐╬╝╬▒ ╬║╬▒╧ä╧î╧ç╬┐╧à ╬║╬¼╧ü╧ä╬▒╧é",
    expirationDateLabel: "╬ù╬╝╬╡╧ü╬┐╬╝╬╖╬╜╬»╬▒ ╬╗╬«╬╛╬╖╧é",
    expirationDateLabelSubheading: "(╬£╬£/╬ò╬ò)",
    expirationDatePlaceholder: "╬£╬£/╬ò╬ò",
    postalCodeLabel: "╬ñ╬▒╧ç╧à╬┤╧ü╬┐╬╝╬╣╬║╧î╧é ╬║╧Ä╬┤╬╣╬║╬▒╧é",
    saveCardLabel: "╬æ╧Ç╬┐╬╕╬«╬║╬╡╧à╧â╬╖ ╬║╬¼╧ü╧ä╬▒╧é",
    payWithCard: "╬á╬╗╬╖╧ü╧ë╬╝╬« ╬╝╬╡ ╬║╬¼╧ü╧ä╬▒",
    endingIn: "╬á╬┐╧à ╬╗╬«╬│╬╡╬╣ ╧â╬╡ {{lastFourCardDigits}}",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "╬Ü╬¼╧ü╧ä╬▒",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal Credit",
    "Google Pay": "Google Pay",
    "American Express": "American Express",
    Discover: "Discover",
    "Diners Club": "Diners Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "UnionPay",
  },
  pG = {
    payingWith: "Paying with {{paymentSource}}",
    chooseAnotherWayToPay: "Choose another way to pay",
    chooseAWayToPay: "Choose a way to pay",
    otherWaysToPay: "Other ways to pay",
    edit: "Edit",
    doneEditing: "Done",
    editPaymentMethods: "Edit payment methods",
    CreditCardDeleteConfirmationMessage:
      "Delete {{secondaryIdentifier}} card ending in {{identifier}}?",
    PayPalAccountDeleteConfirmationMessage:
      "Delete PayPal account {{identifier}}?",
    VenmoAccountDeleteConfirmationMessage:
      "Are you sure you want to delete Venmo account with username {{identifier}}?",
    genericDeleteConfirmationMessage:
      "Are you sure you want to delete this payment method?",
    deleteCancelButton: "Cancel",
    deleteConfirmationButton: "Delete",
    fieldEmptyForCvv: "Please enter a CVV.",
    fieldEmptyForExpirationDate: "Please enter an expiry date.",
    fieldEmptyForCardholderName: "Please enter a cardholder name.",
    fieldTooLongForCardholderName:
      "Cardholder name must be less than 256 characters.",
    fieldEmptyForNumber: "Please enter a number.",
    fieldEmptyForPostalCode: "Please enter a postcode.",
    fieldInvalidForCardholderName: "This cardholder name isn't valid.",
    fieldInvalidForCvv: "This CVV isn't valid.",
    fieldInvalidForExpirationDate: "This expiry date isn't valid.",
    fieldInvalidForNumber: "This card number isn't valid.",
    fieldInvalidForPostalCode: "This postcode isn't valid.",
    genericError: "We're sorry, something seems to have gone wrong.",
    hostedFieldsTokenizationFailOnDuplicateError:
      "This card already exists as a saved payment method.",
    hostedFieldsFailedTokenizationError:
      "Please check your entries and try again.",
    hostedFieldsFieldsInvalidError: "Please check your entries and try again.",
    hostedFieldsTokenizationNetworkErrorError:
      "Network error. Please try again.",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "Card verification failed. Please check your entries and try again.",
    paypalButtonMustBeUsed:
      "Use the PayPal button to continue with your payment.",
    paypalAccountTokenizationFailedError:
      "Something went wrong adding the PayPal account. Please try again.",
    paypalFlowFailedError:
      "Something went wrong connecting to PayPal. Please try again.",
    paypalTokenizationRequestActiveError:
      "PayPal payment authorisation is already in progress.",
    venmoCanceledError:
      "We're sorry, something seems to have gone wrong. Please make sure you have the most recent version of the Venmo app installed on your device and that your browser supports switching to Venmo.",
    vaultManagerPaymentMethodDeletionError:
      "Unable to delete payment method. Please try again.",
    venmoAppFailedError: "The Venmo app couldn't be found on your device.",
    unsupportedCardTypeError:
      "This card type isn't supported. Please try another card.",
    applePayTokenizationError:
      "A network error occurred while processing the Apple Pay payment. Please try again.",
    applePayActiveCardError: "Add a supported card to your Apple Pay wallet.",
    cardholderNameLabel: "Cardholder name",
    cardNumberLabel: "Card number",
    cvvLabel: "CVV",
    cvvThreeDigitLabelSubheading: "(3 digits)",
    cvvFourDigitLabelSubheading: "(4 digits)",
    cardholderNamePlaceholder: "Cardholder name",
    expirationDateLabel: "Expiry date",
    expirationDateLabelSubheading: "(MM/YY)",
    expirationDatePlaceholder: "MM/YY",
    postalCodeLabel: "Postcode",
    saveCardLabel: "Save card",
    payWithCard: "Pay with card",
    endingIn: "Ending in {{lastFourCardDigits}}",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "Card",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal Credit",
    "Google Pay": "Google Pay",
    "American Express": "American Express",
    Discover: "Discover",
    "Diners Club": "Diners Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "UnionPay",
  },
  pq = {
    payingWith: "Paying with {{paymentSource}}",
    chooseAnotherWayToPay: "Choose another way to pay",
    chooseAWayToPay: "Choose a way to pay",
    otherWaysToPay: "Other ways to pay",
    edit: "Edit",
    doneEditing: "Done",
    editPaymentMethods: "Edit funding sources",
    CreditCardDeleteConfirmationMessage:
      "Delete {{secondaryIdentifier}} card ending in {{identifier}}?",
    PayPalAccountDeleteConfirmationMessage:
      "Delete PayPal account {{identifier}}?",
    VenmoAccountDeleteConfirmationMessage:
      "Are you sure you want to delete Venmo account with username {{identifier}}?",
    genericDeleteConfirmationMessage:
      "Are you sure you want to delete this funding source?",
    deleteCancelButton: "Cancel",
    deleteConfirmationButton: "Delete",
    fieldEmptyForCvv: "Please enter a security code.",
    fieldEmptyForExpirationDate: "Please enter an expiry date.",
    fieldEmptyForCardholderName: "Please enter a cardholder name.",
    fieldTooLongForCardholderName:
      "Cardholder name must be less than 256 characters.",
    fieldEmptyForNumber: "Please enter a number.",
    fieldEmptyForPostalCode: "Please enter a postcode.",
    fieldInvalidForCardholderName: "This cardholder name isn't valid.",
    fieldInvalidForCvv: "This security code isn't valid.",
    fieldInvalidForExpirationDate: "This expiry date isn't valid.",
    fieldInvalidForNumber: "This card number isn't valid.",
    fieldInvalidForPostalCode: "This postcode isn't valid.",
    genericError: "Something went wrong on our end.",
    hostedFieldsTokenizationFailOnDuplicateError:
      "This credit card already exists as a saved funding source.",
    hostedFieldsFailedTokenizationError:
      "Please check your information and try again.",
    hostedFieldsFieldsInvalidError:
      "Please check your information and try again.",
    hostedFieldsTokenizationNetworkErrorError:
      "Network error. Please try again.",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "Credit card verification failed. Please check your information and try again.",
    paypalButtonMustBeUsed:
      "Use the PayPal button to continue with your payment.",
    paypalAccountTokenizationFailedError:
      "Something went wrong adding the PayPal account. Please try again.",
    paypalFlowFailedError:
      "Something went wrong connecting to PayPal. Please try again.",
    paypalTokenizationRequestActiveError:
      "PayPal payment authorisation is already in progress.",
    venmoCanceledError:
      "Something went wrong. Ensure you have the most recent version of the Venmo app installed on your device and your browser supports switching to Venmo.",
    vaultManagerPaymentMethodDeletionError:
      "We were unable to delete the funding source. Please try again.",
    venmoAppFailedError: "The Venmo app couldn't be found on your device.",
    unsupportedCardTypeError:
      "This card type isn't supported. Please try another card.",
    applePayTokenizationError:
      "A network error occurred while processing the Apple Pay payment. Please try again.",
    applePayActiveCardError: "Add a supported card to your Apple Pay wallet.",
    cardholderNameLabel: "Cardholder name",
    cardNumberLabel: "Card number",
    cvvLabel: "Security code",
    cvvThreeDigitLabelSubheading: "(3 digits)",
    cvvFourDigitLabelSubheading: "(4 digits)",
    cardholderNamePlaceholder: "Cardholder name",
    expirationDateLabel: "Expiry date",
    expirationDateLabelSubheading: "(MM/YY)",
    expirationDatePlaceholder: "MM/YY",
    postalCodeLabel: "Postcode",
    saveCardLabel: "Save card",
    payWithCard: "Pay with card",
    endingIn: "Ending in {{lastFourCardDigits}}",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "Card",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal Credit",
    "Google Pay": "Google Pay",
    "American Express": "American Express",
    Discover: "Discover",
    "Diners Club": "Diners Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "UnionPay",
  },
  pQ = {
    payingWith: "Paying with {{paymentSource}}",
    chooseAnotherWayToPay: "Choose another way to pay",
    chooseAWayToPay: "Choose a way to pay",
    otherWaysToPay: "Other ways to pay",
    edit: "Edit",
    doneEditing: "Done",
    editPaymentMethods: "Edit payment methods",
    CreditCardDeleteConfirmationMessage:
      "Delete {{secondaryIdentifier}} card ending in {{identifier}}?",
    PayPalAccountDeleteConfirmationMessage:
      "Delete PayPal account {{identifier}}?",
    VenmoAccountDeleteConfirmationMessage:
      "Are you sure you want to delete Venmo account with username {{identifier}}?",
    genericDeleteConfirmationMessage:
      "Are you sure you want to delete this payment method?",
    deleteCancelButton: "Cancel",
    deleteConfirmationButton: "Delete",
    fieldEmptyForCvv: "Please enter a CVV.",
    fieldEmptyForExpirationDate: "Please enter an expiry date.",
    fieldEmptyForCardholderName: "Please enter a cardholder name.",
    fieldTooLongForCardholderName:
      "Cardholder name must be less than 256 characters.",
    fieldEmptyForNumber: "Please enter a number.",
    fieldEmptyForPostalCode: "Please enter a PIN code.",
    fieldInvalidForCardholderName: "This cardholder name isn't valid.",
    fieldInvalidForCvv: "This CVV isn't valid.",
    fieldInvalidForExpirationDate: "This expiry date isn't valid.",
    fieldInvalidForNumber: "This card number isn't valid.",
    fieldInvalidForPostalCode: "This PIN code isn't valid.",
    genericError: "We're sorry, something seems to have gone wrong.",
    hostedFieldsTokenizationFailOnDuplicateError:
      "This card already exists as a saved payment method.",
    hostedFieldsFailedTokenizationError:
      "Please check your information and try again.",
    hostedFieldsFieldsInvalidError:
      "Please check your information and try again.",
    hostedFieldsTokenizationNetworkErrorError:
      "Network error. Please try again.",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "Card verification failed. Please check your information and try again.",
    paypalButtonMustBeUsed:
      "Use the PayPal button to continue with your payment.",
    paypalAccountTokenizationFailedError:
      "Something went wrong adding the PayPal account. Please try again.",
    paypalFlowFailedError:
      "Something went wrong connecting to PayPal. Please try again.",
    paypalTokenizationRequestActiveError:
      "PayPal payment authorisation is already in progress.",
    venmoCanceledError:
      "We're sorry, something seems to have gone wrong. Ensure you have the most recent version of the Venmo app installed on your device and your browser supports switching to Venmo.",
    vaultManagerPaymentMethodDeletionError:
      "Unable to delete payment method. Please try again.",
    venmoAppFailedError: "The Venmo app couldn't be found on your device.",
    unsupportedCardTypeError:
      "This card type isn't supported. Please try another card.",
    applePayTokenizationError:
      "A network error occurred while processing the Apple Pay payment. Please try again.",
    applePayActiveCardError:
      "Add a supported card to your Apple Pay digital wallet.",
    cardholderNameLabel: "Cardholder name",
    cardNumberLabel: "Card number",
    cvvLabel: "CVV",
    cvvThreeDigitLabelSubheading: "(3 digits)",
    cvvFourDigitLabelSubheading: "(4 digits)",
    cardholderNamePlaceholder: "Cardholder name",
    expirationDateLabel: "Expiry date",
    expirationDateLabelSubheading: "(MM/YY)",
    expirationDatePlaceholder: "MM/YY",
    postalCodeLabel: "PIN code",
    saveCardLabel: "Save card",
    payWithCard: "Pay with card",
    endingIn: "Ending in {{lastFourCardDigits}}",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "Card",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal Credit",
    "Google Pay": "Google Pay",
    "American Express": "American Express",
    Discover: "Discover",
    "Diners Club": "Diners Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "UnionPay",
  },
  pZ = {
    payingWith: "Paying with {{paymentSource}}",
    chooseAnotherWayToPay: "Choose another way to pay",
    chooseAWayToPay: "Choose a way to pay",
    otherWaysToPay: "Other ways to pay",
    edit: "Edit",
    doneEditing: "Done",
    editPaymentMethods: "Edit payment methods",
    CreditCardDeleteConfirmationMessage:
      "Delete {{secondaryIdentifier}} card ending in {{identifier}}?",
    PayPalAccountDeleteConfirmationMessage:
      "Delete PayPal account {{identifier}}?",
    VenmoAccountDeleteConfirmationMessage:
      "Are you sure you want to delete Venmo account with username {{identifier}}?",
    genericDeleteConfirmationMessage:
      "Are you sure you want to delete this payment method?",
    deleteCancelButton: "Cancel",
    deleteConfirmationButton: "Delete",
    fieldEmptyForCvv: "Please fill out a CVV.",
    fieldEmptyForExpirationDate: "Please fill out an expiration date.",
    fieldEmptyForCardholderName: "Please fill out a cardholder name.",
    fieldEmptyForNumber: "Please fill out a card number.",
    fieldEmptyForPostalCode: "Please fill out a postal code.",
    fieldInvalidForCardholderName: "This cardholder name is not valid.",
    fieldInvalidForCvv: "This security code is not valid.",
    fieldInvalidForExpirationDate: "This expiration date is not valid.",
    fieldInvalidForNumber: "This card number is not valid.",
    fieldInvalidForPostalCode: "This postal code is not valid.",
    fieldTooLongForCardholderName:
      "Cardholder name must be less than 256 characters.",
    genericError: "Something went wrong on our end.",
    hostedFieldsTokenizationFailOnDuplicateError:
      "This credit card already exists as a saved payment method.",
    hostedFieldsFailedTokenizationError:
      "Please check your information and try again.",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "Credit card verification failed. Please check your information and try again.",
    hostedFieldsTokenizationNetworkErrorError:
      "Network error. Please try again.",
    hostedFieldsFieldsInvalidError:
      "Please check your information and try again.",
    paypalButtonMustBeUsed:
      "Use the PayPal button to continue with your payment.",
    paypalAccountTokenizationFailedError:
      "Something went wrong adding the PayPal account. Please try again.",
    paypalFlowFailedError:
      "Something went wrong connecting to PayPal. Please try again.",
    paypalTokenizationRequestActiveError:
      "PayPal payment authorization is already in progress.",
    applePayTokenizationError:
      "A network error occurred while processing the Apple Pay payment. Please try again.",
    applePayActiveCardError: "Add a supported card to your Apple Pay wallet.",
    vaultManagerPaymentMethodDeletionError:
      "Unable to delete payment method, try again.",
    venmoCanceledError:
      "Something went wrong. Ensure you have the most recent version of the Venmo app installed on your device and your browser supports switching to Venmo.",
    venmoAppFailedError: "The Venmo app could not be found on your device.",
    unsupportedCardTypeError:
      "This card type is not supported. Please try another card.",
    cardholderNameLabel: "Cardholder Name",
    cardNumberLabel: "Card Number",
    cvvLabel: "CVV",
    cvvThreeDigitLabelSubheading: "(3 digits)",
    cvvFourDigitLabelSubheading: "(4 digits)",
    expirationDateLabel: "Expiration Date",
    expirationDateLabelSubheading: "(MM/YY)",
    cardholderNamePlaceholder: "Cardholder Name",
    expirationDatePlaceholder: "MM/YY",
    postalCodeLabel: "Postal Code",
    saveCardLabel: "Save card",
    payWithCard: "Pay with card",
    endingIn: "Ending in {{lastFourCardDigits}}",
    Card: "Card",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal Credit",
    "Apple Pay": "Apple Pay",
    "Google Pay": "Google Pay",
    Venmo: "Venmo",
    "American Express": "American Express",
    Discover: "Discover",
    "Diners Club": "Diners Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "UnionPay",
  },
  pJ = {
    payingWith: "Pagar con\xa0{{paymentSource}}",
    chooseAnotherWayToPay: "Seleccionar otra forma de pago",
    chooseAWayToPay: "Seleccionar forma de pago",
    otherWaysToPay: "Otras formas de pago",
    edit: "Editar",
    doneEditing: "Hecho",
    editPaymentMethods: "Editar formas de pago",
    CreditCardDeleteConfirmationMessage:
      "\xbfEliminar la tarjeta {{secondaryIdentifier}} terminada en {{identifier}}?",
    PayPalAccountDeleteConfirmationMessage:
      "\xbfEliminar la cuenta PayPal {{identifier}}?",
    VenmoAccountDeleteConfirmationMessage:
      "\xbfSeguro que deseas eliminar la cuenta de Venmo con el nombre de usuario {{identifier}}?",
    genericDeleteConfirmationMessage:
      "\xbfSeguro que deseas eliminar esta forma de pago?",
    deleteCancelButton: "Cancelar",
    deleteConfirmationButton: "Eliminar",
    fieldEmptyForCvv: "Introduce el CVV.",
    fieldEmptyForExpirationDate: "Introduce una fecha de vencimiento.",
    fieldEmptyForCardholderName:
      "Introduce el nombre del titular de la tarjeta.",
    fieldTooLongForCardholderName:
      "El nombre del titular de la tarjeta debe tener menos de 256 caracteres.",
    fieldEmptyForNumber: "Introduce un n\xfamero.",
    fieldEmptyForPostalCode: "Introduce un c\xf3digo postal.",
    fieldInvalidForCardholderName:
      "El nombre del titular de la tarjeta no es v\xe1lido.",
    fieldInvalidForCvv: "El c\xf3digo de seguridad no es v\xe1lido.",
    fieldInvalidForExpirationDate: "La fecha de vencimiento no es v\xe1lida.",
    fieldInvalidForNumber: "El n\xfamero de tarjeta no es v\xe1lido.",
    fieldInvalidForPostalCode: "El c\xf3digo postal no es v\xe1lido.",
    genericError: "Ha habido un problema.",
    hostedFieldsTokenizationFailOnDuplicateError:
      "Esta tarjeta de cr\xe9dito ya existe como forma de pago guardada.",
    hostedFieldsFailedTokenizationError:
      "Comprueba la informaci\xf3n e int\xe9ntalo de nuevo.",
    hostedFieldsFieldsInvalidError:
      "Comprueba la informaci\xf3n e int\xe9ntalo de nuevo.",
    hostedFieldsTokenizationNetworkErrorError:
      "Error de red. Int\xe9ntalo de nuevo.",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "Error al verificar la tarjeta de cr\xe9dito. Comprueba la informaci\xf3n e int\xe9ntalo de nuevo.",
    paypalButtonMustBeUsed:
      "Utiliza el bot\xf3n de PayPal para continuar con el pago.",
    paypalAccountTokenizationFailedError:
      "Se ha producido un error al a\xf1adir la cuenta PayPal. Int\xe9ntalo de nuevo.",
    paypalFlowFailedError:
      "Se ha producido un error al conectar con PayPal. Int\xe9ntalo de nuevo.",
    paypalTokenizationRequestActiveError:
      "La autorizaci\xf3n del pago de PayPal ya est\xe1 en curso.",
    venmoCanceledError:
      "Ha habido un error. Aseg\xfarate de tener la versi\xf3n m\xe1s reciente de la aplicaci\xf3n de Venmo instalada en el dispositivo y de que el navegador admita el cambio a Venmo.",
    vaultManagerPaymentMethodDeletionError:
      "No se puede eliminar la forma de pago. Int\xe9ntalo de nuevo.",
    venmoAppFailedError:
      "No se ha podido encontrar la aplicaci\xf3n de Venmo en tu dispositivo.",
    unsupportedCardTypeError:
      "No se admite este tipo de tarjeta. Prueba con otra tarjeta.",
    applePayTokenizationError:
      "Se ha producido un error de red al procesar el pago de Apple Pay. Int\xe9ntalo de nuevo.",
    applePayActiveCardError:
      "A\xf1ade una tarjeta compatible a tu cartera de Apple Pay.",
    cardholderNameLabel: "Nombre del titular de la tarjeta",
    cardNumberLabel: "N\xfamero de tarjeta",
    cvvLabel: "CVV",
    cvvThreeDigitLabelSubheading: "(3\xa0d\xedgitos)",
    cvvFourDigitLabelSubheading: "(4\xa0d\xedgitos)",
    cardholderNamePlaceholder: "Nombre del titular de la tarjeta",
    expirationDateLabel: "Fecha de vencimiento",
    expirationDateLabelSubheading: "(MM/AA)",
    expirationDatePlaceholder: "MM/AA",
    postalCodeLabel: "C\xf3digo postal",
    saveCardLabel: "Guardar tarjeta",
    payWithCard: "Pagar con tarjeta",
    endingIn: "Terminada en {{lastFourCardDigits}}",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "Tarjeta",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal Credit",
    "Google Pay": "Google Pay",
    "American Express": "American Express",
    Discover: "Discover",
    "Diners Club": "Diners Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "UnionPay",
  },
  pX = {
    payingWith: "Pagar con {{paymentSource}}",
    chooseAnotherWayToPay: "Elija otra forma de pago",
    chooseAWayToPay: "Seleccione una forma de pago",
    otherWaysToPay: "Otras formas de pago",
    edit: "Editar",
    doneEditing: "Listo",
    editPaymentMethods: "Editar m\xe9todos de pago",
    CreditCardDeleteConfirmationMessage:
      "\xbfEliminar tarjeta {{secondaryIdentifier}} con terminaci\xf3n {{identifier}}?",
    PayPalAccountDeleteConfirmationMessage:
      "\xbfDesea eliminar la cuenta de PayPal {{identifier}}?",
    VenmoAccountDeleteConfirmationMessage:
      "\xbfSeguro que desea eliminar la cuenta de Venmo con el nombre de usuario {{identifier}}?",
    genericDeleteConfirmationMessage:
      "\xbfSeguro que desea eliminar esta forma de pago?",
    deleteCancelButton: "Cancelar",
    deleteConfirmationButton: "Eliminar",
    fieldEmptyForCvv: "Ingrese un CVV.",
    fieldEmptyForExpirationDate: "Ingrese una fecha de vencimiento.",
    fieldEmptyForCardholderName: "Ingrese un nombre de titular de tarjeta.",
    fieldTooLongForCardholderName:
      "El nombre del titular de la tarjeta debe tener menos de 256 caracteres.",
    fieldEmptyForNumber: "Ingrese un n\xfamero.",
    fieldEmptyForPostalCode: "Ingrese un c\xf3digo postal.",
    fieldInvalidForCardholderName:
      "El nombre del titular de la tarjeta no es v\xe1lido.",
    fieldInvalidForCvv: "Este c\xf3digo de seguridad no es v\xe1lido.",
    fieldInvalidForExpirationDate: "Esta fecha de vencimiento no es v\xe1lida.",
    fieldInvalidForNumber: "Este n\xfamero de tarjeta no es v\xe1lido.",
    fieldInvalidForPostalCode: "Este c\xf3digo postal no es v\xe1lido.",
    genericError: "Se ha producido un error.",
    hostedFieldsTokenizationFailOnDuplicateError:
      "Esta tarjeta de cr\xe9dito ya existe como forma de pago guardada.",
    hostedFieldsFailedTokenizationError:
      "Revise la informaci\xf3n e int\xe9ntelo de nuevo.",
    hostedFieldsFieldsInvalidError:
      "Revise la informaci\xf3n e int\xe9ntelo de nuevo.",
    hostedFieldsTokenizationNetworkErrorError:
      "Error de red. Int\xe9ntelo de nuevo.",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "La verificaci\xf3n de la tarjeta de cr\xe9dito fall\xf3. Revise la informaci\xf3n e int\xe9ntelo de nuevo.",
    paypalButtonMustBeUsed:
      "Utilice el bot\xf3n de PayPal para continuar con su pago.",
    paypalAccountTokenizationFailedError:
      "Se ha producido un error al agregar la cuenta de PayPal. Int\xe9ntelo de nuevo.",
    paypalFlowFailedError:
      "Se ha producido un error al conectar con PayPal. Int\xe9ntelo de nuevo.",
    paypalTokenizationRequestActiveError:
      "La autorizaci\xf3n de pago de PayPal ya est\xe1 en curso.",
    venmoCanceledError:
      "Se ha producido un error. Aseg\xfarese de que tiene la versi\xf3n m\xe1s reciente de la aplicaci\xf3n de Venmo instalada en su dispositivo y que su navegador admita el sitio web Venmo.",
    vaultManagerPaymentMethodDeletionError:
      "No se pudo eliminar la forma de pago, int\xe9ntelo de nuevo.",
    venmoAppFailedError:
      "No se pudo encontrar la aplicaci\xf3n de Venmo en su dispositivo.",
    unsupportedCardTypeError:
      "Este tipo de tarjeta no es compatible. Int\xe9ntelo con otra tarjeta.",
    applePayTokenizationError:
      "Se ha producido un error de red al procesar el pago de Apple Pay. Int\xe9ntelo de nuevo.",
    applePayActiveCardError:
      "Agregue una tarjeta compatible a su cartera de Apple Pay.",
    cardholderNameLabel: "Nombre del titular de la tarjeta",
    cardNumberLabel: "N\xfamero de tarjeta",
    cvvLabel: "CVV",
    cvvThreeDigitLabelSubheading: "(3 d\xedgitos)",
    cvvFourDigitLabelSubheading: "(4 d\xedgitos)",
    cardholderNamePlaceholder: "Nombre del titular de la tarjeta",
    expirationDateLabel: "Fecha de vencimiento",
    expirationDateLabelSubheading: "(MM/AA)",
    expirationDatePlaceholder: "MM/AA",
    postalCodeLabel: "C\xf3digo postal",
    saveCardLabel: "Guardar tarjeta",
    payWithCard: "Pagar con tarjeta",
    endingIn: "Con terminaci\xf3n {{lastFourCardDigits}}",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "Tarjeta",
    PayPal: "Paypal",
    "PayPal Credit": "PayPal Credit",
    "Google Pay": "Google Pay",
    "American Express": "American Express",
    Discover: "Discover",
    "Diners Club": "Diners Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "UnionPay",
  },
  p$ = {
    payingWith: "Maksuv\xe4line: {{paymentSource}}",
    chooseAnotherWayToPay: "Valitse toinen maksutapa",
    chooseAWayToPay: "Valitse maksutapa",
    otherWaysToPay: "Muita maksutapoja",
    edit: "Muokkaa",
    doneEditing: "Valmis",
    editPaymentMethods: "Muokkaa maksutapoja",
    CreditCardDeleteConfirmationMessage:
      "Haluatko poistaa {{secondaryIdentifier}}} -kortin, joka p\xe4\xe4ttyy {{identifier}}}?",
    PayPalAccountDeleteConfirmationMessage:
      "Haluatko poistaa PayPal-tilin {{identifier}}}?",
    VenmoAccountDeleteConfirmationMessage:
      "Haluatko varmasti poistaa Venmo-tilin, jonka k\xe4ytt\xe4j\xe4tunnus on {{identifier}}}?",
    genericDeleteConfirmationMessage:
      "Haluatko varmasti poistaa t\xe4m\xe4n maksutavan?",
    deleteCancelButton: "Peruuta",
    deleteConfirmationButton: "Poista",
    fieldEmptyForCvv: "Anna turvakoodi.",
    fieldEmptyForExpirationDate:
      "Anna voimassaolon p\xe4\xe4ttymisp\xe4iv\xe4m\xe4\xe4r\xe4.",
    fieldEmptyForCardholderName: "Anna kortinhaltijan nimi.",
    fieldTooLongForCardholderName:
      "Kortinhaltijan nimen on oltava alle 256 merkki\xe4.",
    fieldEmptyForNumber: "Anna numero.",
    fieldEmptyForPostalCode: "Anna postinumero.",
    fieldInvalidForCardholderName: "Kortinhaltijan nimi ei ole kelvollinen.",
    fieldInvalidForCvv: "Turvakoodi ei ole kelvollinen.",
    fieldInvalidForExpirationDate:
      "P\xe4\xe4ttymisp\xe4iv\xe4m\xe4\xe4r\xe4 ei ole kelvollinen.",
    fieldInvalidForNumber: "Kortin numero ei ole kelvollinen.",
    fieldInvalidForPostalCode: "Postinumero ei ole kelvollinen.",
    genericError: "Jokin meni pieleen t\xe4ss\xe4 p\xe4\xe4ss\xe4.",
    hostedFieldsTokenizationFailOnDuplicateError:
      "T\xe4m\xe4 luottokortti on jo tallennettu maksutavaksi.",
    hostedFieldsFailedTokenizationError:
      "Tarkista tiedot ja yrit\xe4 uudelleen.",
    hostedFieldsFieldsInvalidError: "Tarkista tiedot ja yrit\xe4 uudelleen.",
    hostedFieldsTokenizationNetworkErrorError:
      "Verkkovirhe. Yrit\xe4 uudelleen.",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "Luottokortin varmennus ep\xe4onnistui. Tarkista tiedot ja yrit\xe4 uudelleen.",
    paypalButtonMustBeUsed: "Jatka maksua PayPal-painikkeen avulla.",
    paypalAccountTokenizationFailedError:
      "Jotain meni pieleen PayPal-tili\xe4 lis\xe4tess\xe4. Yrit\xe4 uudelleen.",
    paypalFlowFailedError:
      "Jotain meni pieleen muodostettaessa yhteytt\xe4 PayPaliin. Yrit\xe4 uudelleen.",
    paypalTokenizationRequestActiveError:
      "PayPal-maksun valtuutus on jo meneill\xe4\xe4n.",
    venmoCanceledError:
      "Jokin meni pieleen. Varmista, ett\xe4 laitteeseesi on asennettu Venmo-sovelluksen viimeisin versio, ja ett\xe4 selain tukee vaihtamista Venmoon.",
    vaultManagerPaymentMethodDeletionError:
      "Maksutavan poistaminen ei onnistu, yrit\xe4 uudelleen.",
    venmoAppFailedError: "Venmo-sovellusta ei l\xf6ytynyt laitteesta.",
    unsupportedCardTypeError:
      "T\xe4t\xe4 korttityyppi\xe4 ei tueta. Kokeile toista korttia.",
    applePayTokenizationError:
      "Tapahtui verkkovirhe Apple Pay -maksun k\xe4sittelyss\xe4. Yrit\xe4 uudelleen.",
    applePayActiveCardError: "Lis\xe4\xe4 tuettu kortti Apple Pay -lompakkoon.",
    cardholderNameLabel: "Kortinhaltijan nimi",
    cardNumberLabel: "Kortin numero",
    cvvLabel: "Kortin turvakoodi",
    cvvThreeDigitLabelSubheading: "(kolme numeroa)",
    cvvFourDigitLabelSubheading: "(nelj\xe4 numeroa)",
    cardholderNamePlaceholder: "Kortinhaltijan nimi",
    expirationDateLabel: "P\xe4\xe4ttymisp\xe4iv\xe4m\xe4\xe4r\xe4",
    expirationDateLabelSubheading: "(KK/VV)",
    expirationDatePlaceholder: "KK/VV",
    postalCodeLabel: "Postinumero",
    saveCardLabel: "Tallenna kortti",
    payWithCard: "Maksa kortilla",
    endingIn: "P\xe4\xe4ttyy {{lastFourCardDigits}}}",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "Kortti",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal Credit",
    "Google Pay": "Google Pay",
    "American Express": "American Express",
    Discover: "Discover",
    "Diners Club": "Diners Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "UnionPay",
  },
  p1 = {
    payingWith: "Payer avec {{paymentSource}}",
    chooseAnotherWayToPay: "Choisir un autre mode de paiement",
    chooseAWayToPay: "Choisir un mode de paiement",
    otherWaysToPay: "Autres modes de paiement",
    edit: "Modifier",
    doneEditing: "Termin\xe9",
    editPaymentMethods: "Modifier les modes de paiement",
    CreditCardDeleteConfirmationMessage:
      "Supprimer la carte {{secondaryIdentifier}} se terminant par {{identifier}}\xa0?",
    PayPalAccountDeleteConfirmationMessage:
      "Supprimer le compte PayPal {{identifier}}\xa0?",
    VenmoAccountDeleteConfirmationMessage:
      "Souhaitez-vous vraiment supprimer le compte Venmo dont le nom d'utilisateur est {{identifier}}\xa0?",
    genericDeleteConfirmationMessage:
      "Voulez-vous vraiment supprimer ce mode paiement\xa0?",
    deleteCancelButton: "Annuler",
    deleteConfirmationButton: "Supprimer",
    fieldEmptyForCvv: "Saisissez un CVV.",
    fieldEmptyForExpirationDate: "Saisissez une date d'expiration.",
    fieldEmptyForCardholderName: "Saisissez le nom du titulaire de la carte.",
    fieldTooLongForCardholderName:
      "Le nom du titulaire de la carte doit contenir moins de 256\xa0caract\xe8res.",
    fieldEmptyForNumber: "Saisissez un num\xe9ro.",
    fieldEmptyForPostalCode: "Saisissez un code postal.",
    fieldInvalidForCardholderName:
      "Le nom de ce titulaire de la carte n'est pas valide.",
    fieldInvalidForCvv: "Ce cryptogramme visuel n'est pas valide.",
    fieldInvalidForExpirationDate: "Cette date d'expiration n'est pas valide.",
    fieldInvalidForNumber: "Ce num\xe9ro de carte n'est pas valide.",
    fieldInvalidForPostalCode: "Ce code postal n'est pas valide.",
    genericError: "Une erreur s'est produite de notre c\xf4t\xe9.",
    hostedFieldsTokenizationFailOnDuplicateError:
      "Cette carte de cr\xe9dit est d\xe9j\xe0 enregistr\xe9e en tant que mode de paiement.",
    hostedFieldsFailedTokenizationError:
      "Veuillez v\xe9rifier vos informations, puis r\xe9essayer.",
    hostedFieldsFieldsInvalidError:
      "Veuillez v\xe9rifier vos informations, puis r\xe9essayer.",
    hostedFieldsTokenizationNetworkErrorError:
      "Erreur de r\xe9seau. R\xe9essayez.",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "\xc9chec de v\xe9rification de la carte de cr\xe9dit. Veuillez v\xe9rifier vos informations, puis r\xe9essayer.",
    paypalButtonMustBeUsed:
      "Utilisez le bouton PayPal pour poursuivre votre paiement.",
    paypalAccountTokenizationFailedError:
      "Une erreur s'est produite lors de l'ajout du compte PayPal. Veuillez r\xe9essayer.",
    paypalFlowFailedError:
      "Une erreur s'est produite lors de la connexion \xe0 PayPal. Veuillez r\xe9essayer.",
    paypalTokenizationRequestActiveError:
      "L'autorisation de paiement PayPal est d\xe9j\xe0 en cours.",
    venmoCanceledError:
      "Une erreur s'est produite. Assurez-vous que la version la plus r\xe9cente de l'application Venmo est install\xe9e sur votre appareil et que votre navigateur prend en charge la redirection vers Venmo.",
    vaultManagerPaymentMethodDeletionError:
      "Impossible de supprimer le mode de paiement. R\xe9essayez.",
    venmoAppFailedError:
      "L'application Venmo n'est pas pr\xe9sente sur votre appareil.",
    unsupportedCardTypeError:
      "Ce type de carte n'est pas pris en charge. Veuillez essayer une autre carte.",
    applePayTokenizationError:
      "Une erreur de r\xe9seau s'est produite lors du traitement du paiement Apple Pay. Veuillez r\xe9essayer.",
    applePayActiveCardError:
      "Ajoutez une carte prise en charge \xe0 votre portefeuille Apple Pay.",
    cardholderNameLabel: "Nom du titulaire de la carte",
    cardNumberLabel: "Num\xe9ro de carte",
    cvvLabel: "Cryptogramme visuel",
    cvvThreeDigitLabelSubheading: "(3\xa0chiffres)",
    cvvFourDigitLabelSubheading: "(4\xa0chiffres)",
    cardholderNamePlaceholder: "Nom du titulaire de la carte",
    expirationDateLabel: "Date d'expiration",
    expirationDateLabelSubheading: "(MM/AA)",
    expirationDatePlaceholder: "MM/AA",
    postalCodeLabel: "Code postal",
    saveCardLabel: "Enregistrer la carte",
    payWithCard: "Payer par carte",
    endingIn: "Se terminant par {{lastFourCardDigits}}",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "Carte",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal Credit",
    "Google Pay": "Google Pay",
    "American Express": "American Express",
    Discover: "Discover",
    "Diners Club": "Diners Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "UnionPay",
  },
  p0 = {
    payingWith: "Payer avec\xa0: {{paymentSource}}",
    chooseAnotherWayToPay: "Choisir un autre mode de paiement",
    chooseAWayToPay: "Choisir un mode de paiement",
    otherWaysToPay: "Autres modes de paiement",
    edit: "Modifier",
    doneEditing: "Termin\xe9",
    editPaymentMethods: "Modifier les modes de paiement",
    CreditCardDeleteConfirmationMessage:
      "Supprimer la carte {{secondaryIdentifier}} se terminant par {{identifier}}\xa0?",
    PayPalAccountDeleteConfirmationMessage:
      "Supprimer le compte PayPal {{identifier}}\xa0?",
    VenmoAccountDeleteConfirmationMessage:
      "Souhaitez-vous vraiment supprimer le compte Venmo associ\xe9 au nom d'utilisateur {{identifier}}\xa0?",
    genericDeleteConfirmationMessage:
      "Souhaitez-vous vraiment supprimer ce mode de paiement\xa0?",
    deleteCancelButton: "Annuler",
    deleteConfirmationButton: "Supprimer",
    fieldEmptyForCvv: "Renseignez un cryptogramme visuel.",
    fieldEmptyForExpirationDate: "Renseignez une date d'expiration.",
    fieldEmptyForCardholderName: "Renseignez le nom du titulaire de la carte.",
    fieldTooLongForCardholderName:
      "Le nom du titulaire de la carte doit comporter moins de 256\xa0caract\xe8res.",
    fieldEmptyForNumber: "Renseignez un num\xe9ro.",
    fieldEmptyForPostalCode: "Renseignez un code postal.",
    fieldInvalidForCardholderName:
      "Le nom de ce titulaire de la carte est incorrect.",
    fieldInvalidForCvv: "Ce cryptogramme visuel est incorrect.",
    fieldInvalidForExpirationDate: "Cette date d'expiration est incorrecte.",
    fieldInvalidForNumber: "Ce num\xe9ro de carte est incorrect.",
    fieldInvalidForPostalCode: "Ce code postal est incorrect.",
    genericError: "Une erreur est survenue.",
    hostedFieldsTokenizationFailOnDuplicateError:
      "Cette carte bancaire existe d\xe9j\xe0 en tant que mode de paiement enregistr\xe9.",
    hostedFieldsFailedTokenizationError:
      "V\xe9rifiez vos informations et r\xe9essayez.",
    hostedFieldsFieldsInvalidError:
      "V\xe9rifiez vos informations et r\xe9essayez.",
    hostedFieldsTokenizationNetworkErrorError:
      "Erreur r\xe9seau. R\xe9essayez.",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "\xc9chec de la v\xe9rification de carte bancaire. V\xe9rifiez vos informations et r\xe9essayez.",
    paypalButtonMustBeUsed:
      "Utilisez le bouton PayPal pour poursuivre le paiement.",
    paypalAccountTokenizationFailedError:
      "Une erreur est survenue lors de l'ajout du compte PayPal. R\xe9essayez.",
    paypalFlowFailedError:
      "Une erreur est survenue lors de la connexion \xe0 PayPal. R\xe9essayez.",
    paypalTokenizationRequestActiveError:
      "L'autorisation de paiement PayPal est d\xe9j\xe0 en cours.",
    venmoCanceledError:
      "Une erreur est survenue. V\xe9rifiez que la derni\xe8re version de l'application Venmo est install\xe9e sur votre appareil et que votre navigateur prend en charge la redirection vers Venmo.",
    vaultManagerPaymentMethodDeletionError:
      "Impossible de supprimer le mode de paiement, r\xe9essayez.",
    venmoAppFailedError:
      "Nous n'avons pas trouv\xe9 l'application Venmo sur votre appareil.",
    unsupportedCardTypeError:
      "Ce type de carte n'est pas pris en charge. Essayez une autre carte.",
    applePayTokenizationError:
      "Une erreur r\xe9seau est survenue lors du traitement du paiement Apple\xa0Pay. R\xe9essayez.",
    applePayActiveCardError:
      "Enregistrez une carte prise en charge sur votre portefeuille Apple\xa0Pay.",
    cardholderNameLabel: "Nom du titulaire de la carte",
    cardNumberLabel: "Num\xe9ro de carte",
    cvvLabel: "Crypto.",
    cvvThreeDigitLabelSubheading: "(3\xa0chiffres)",
    cvvFourDigitLabelSubheading: "(4\xa0chiffres)",
    cardholderNamePlaceholder: "Nom du titulaire de la carte",
    expirationDateLabel: "Date d'expiration",
    expirationDateLabelSubheading: "(MM/AA)",
    expirationDatePlaceholder: "MM/AA",
    postalCodeLabel: "Code postal",
    saveCardLabel: "Enregistrer la carte",
    payWithCard: "Payer par carte",
    endingIn: "Se terminant par {{lastFourCardDigits}}",
    "Apple Pay": "Apple\xa0Pay",
    Venmo: "Venmo",
    Card: "Carte",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal\xa0Credit",
    "Google Pay": "Google\xa0Pay",
    "American Express": "American\xa0Express",
    Discover: "Discover",
    "Diners Club": "Diners\xa0Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "UnionPay",
  },
  p2 = {
    payingWith: "Payer avec {{paymentSource}}",
    chooseAnotherWayToPay: "Choisir un autre mode de paiement",
    chooseAWayToPay: "Choisir un mode de paiement",
    otherWaysToPay: "Autres modes de paiement",
    edit: "Modifier",
    doneEditing: "Termin\xe9",
    editPaymentMethods: "Modifier les modes de paiement",
    CreditCardDeleteConfirmationMessage:
      "Supprimer la carte {{secondaryIdentifier}}} se terminant par {{identifier}}}\xa0?",
    PayPalAccountDeleteConfirmationMessage:
      "Supprimer le compte PayPal {{identifier}}}\xa0?",
    VenmoAccountDeleteConfirmationMessage:
      "Souhaitez-vous vraiment supprimer le compte Venmo associ\xe9 au nom d'utilisateur {{identifier}}}\xa0?",
    genericDeleteConfirmationMessage:
      "Souhaitez-vous vraiment supprimer ce mode de paiement\xa0?",
    deleteCancelButton: "Annuler",
    deleteConfirmationButton: "Supprimer",
    fieldEmptyForCvv: "Renseignez un cryptogramme visuel.",
    fieldEmptyForExpirationDate: "Renseignez une date d'expiration.",
    fieldEmptyForCardholderName: "Renseignez le nom du titulaire de la carte.",
    fieldTooLongForCardholderName:
      "Le nom du titulaire de la carte doit comporter moins de 256\xa0caract\xe8res.",
    fieldEmptyForNumber: "Renseignez un num\xe9ro.",
    fieldEmptyForPostalCode: "Renseignez un code postal.",
    fieldInvalidForCardholderName:
      "Le nom de ce titulaire de la carte est incorrect.",
    fieldInvalidForCvv: "Ce cryptogramme visuel est incorrect.",
    fieldInvalidForExpirationDate: "Cette date d'expiration est incorrecte.",
    fieldInvalidForNumber: "Ce num\xe9ro de carte est incorrect.",
    fieldInvalidForPostalCode: "Ce code postal est incorrect.",
    genericError: "Une erreur est survenue.",
    hostedFieldsTokenizationFailOnDuplicateError:
      "Cette carte bancaire existe d\xe9j\xe0 en tant que mode de paiement enregistr\xe9.",
    hostedFieldsFailedTokenizationError:
      "V\xe9rifiez vos informations et r\xe9essayez.",
    hostedFieldsFieldsInvalidError:
      "V\xe9rifiez vos informations et r\xe9essayez.",
    hostedFieldsTokenizationNetworkErrorError:
      "Erreur r\xe9seau. R\xe9essayez.",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "\xc9chec de la v\xe9rification de carte bancaire. V\xe9rifiez vos informations et r\xe9essayez.",
    paypalButtonMustBeUsed:
      "Utilisez le bouton PayPal pour poursuivre le paiement.",
    paypalAccountTokenizationFailedError:
      "Une erreur est survenue lors de l'ajout du compte PayPal. R\xe9essayez.",
    paypalFlowFailedError:
      "Une erreur est survenue lors de la connexion \xe0 PayPal. R\xe9essayez.",
    paypalTokenizationRequestActiveError:
      "L'autorisation de paiement PayPal est d\xe9j\xe0 en cours.",
    venmoCanceledError:
      "Une erreur est survenue. V\xe9rifiez que la derni\xe8re version de l'application Venmo est install\xe9e sur votre appareil et que votre navigateur prend en charge la redirection vers Venmo.",
    vaultManagerPaymentMethodDeletionError:
      "Impossible de supprimer le mode de paiement, r\xe9essayez.",
    venmoAppFailedError:
      "Nous n'avons pas trouv\xe9 l'application Venmo sur votre appareil.",
    unsupportedCardTypeError:
      "Ce type de carte n'est pas pris en charge. Essayez une autre carte.",
    applePayTokenizationError:
      "Une erreur r\xe9seau est survenue lors du traitement du paiement Apple\xa0Pay. R\xe9essayez.",
    applePayActiveCardError:
      "Enregistrez une carte prise en charge sur votre portefeuille Apple\xa0Pay.",
    cardholderNameLabel: "Nom du titulaire de la carte",
    cardNumberLabel: "Num\xe9ro de carte",
    cvvLabel: "Crypto.",
    cvvThreeDigitLabelSubheading: "(3\xa0chiffres)",
    cvvFourDigitLabelSubheading: "(4\xa0chiffres)",
    cardholderNamePlaceholder: "Nom du titulaire de la carte",
    expirationDateLabel: "Date d'expiration",
    expirationDateLabelSubheading: "(MM/AA)",
    expirationDatePlaceholder: "MM/AA",
    postalCodeLabel: "Code postal",
    saveCardLabel: "Enregistrer la carte",
    payWithCard: "Payer par carte",
    endingIn: "Se termine le {{lastFourCardDigits}}",
    "Apple Pay": "Apple\xa0Pay",
    Venmo: "Venmo",
    Card: "Carte",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal\xa0Credit",
    "Google Pay": "Google\xa0Pay",
    "American Express": "American\xa0Express",
    Discover: "Discover",
    "Diners Club": "Diners\xa0Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "UnionPay",
  },
  p3 = {
    payingWith: "╫¬╫⌐╫£╫ò╫¥ ╫æ╫É╫₧╫ª╫ó╫ò╫¬ {{paymentSource}}",
    chooseAnotherWayToPay: "╫ó╫£╫Ö╫Ü ╫£╫æ╫ù╫ò╫¿ ╫⌐╫Ö╫ÿ╫¬ ╫¬╫⌐╫£╫ò╫¥ ╫É╫ù╫¿╫¬",
    chooseAWayToPay: "╫¢╫Ö╫ª╫ô ╫æ╫¿╫ª╫ò╫á╫Ü ╫£╫⌐╫£╫¥?",
    otherWaysToPay: "╫⌐╫Ö╫ÿ╫ò╫¬ ╫¬╫⌐╫£╫ò╫¥ ╫É╫ù╫¿╫ò╫¬",
    edit: "╫ó╫¿╫Ö╫¢╫ö",
    doneEditing: "╫æ╫ò╫ª╫ó",
    editPaymentMethods: "╫ó╫¿╫Ö╫¢╫¬ ╫⌐╫Ö╫ÿ╫ò╫¬ ╫¬╫⌐╫£╫ò╫¥",
    CreditCardDeleteConfirmationMessage:
      "╫£╫₧╫ù╫ò╫º {{secondaryIdentifier}} ╫ö╫¢╫¿╫ÿ╫Ö╫í ╫ö╫₧╫í╫¬╫Ö╫Ö╫¥ {{identifier}}?",
    PayPalAccountDeleteConfirmationMessage:
      "╫£╫₧╫ù╫ò╫º PayPal ╫ö╫ù╫⌐╫æ╫ò╫ƒ {{identifier}}?",
    VenmoAccountDeleteConfirmationMessage:
      "╫ö╫É╫¥ ╫É╫¬╫ö ╫æ╫ÿ╫ò╫ù ╫⌐╫æ╫¿╫ª╫ò╫á╫Ü ╫£╫₧╫ù╫ò╫º ╫É╫¬ ╫ù╫⌐╫æ╫ò╫ƒ Venmo ╫ö╫¿╫⌐╫ò╫¥ ╫¬╫ù╫¬ ╫⌐╫¥ ╫ö╫₧╫⌐╫¬╫₧╫⌐ {{identifier}}?",
    genericDeleteConfirmationMessage:
      "╫ö╫É╫¥ ╫É╫¬╫ö ╫æ╫ÿ╫ò╫ù ╫⌐╫æ╫¿╫ª╫ò╫á╫Ü ╫£╫₧╫ù╫ò╫º ╫⌐╫Ö╫ÿ╫¬ ╫¬╫⌐╫£╫ò╫¥ ╫û╫ò?",
    deleteCancelButton: "╫æ╫Ö╫ÿ╫ò╫£",
    deleteConfirmationButton: "╫₧╫ù╫Ö╫º╫ö",
    fieldEmptyForCvv:
      "╫ó╫£╫Ö╫Ü ╫£╫₧╫£╫É ╫É╫¬ ╫₧╫í╫ñ╫¿ ╫ö╫É╫æ╫ÿ╫ù╫ö ╫⌐╫£ ╫¢╫¿╫ÿ╫Ö╫í ╫ö╫É╫⌐╫¿╫É╫Ö.",
    fieldEmptyForExpirationDate:
      "╫ó╫£╫Ö╫Ü ╫£╫₧╫£╫É ╫É╫¬ ╫¬╫É╫¿╫Ö╫Ü ╫ñ╫º╫Ö╫ó╫¬ ╫ö╫¬╫ò╫º╫ú.",
    fieldEmptyForCardholderName:
      "╫ó╫£╫Ö╫Ü ╫£╫₧╫£╫É ╫É╫¬ ╫⌐╫¥ ╫æ╫ó╫£ ╫ö╫¢╫¿╫ÿ╫Ö╫í.",
    fieldTooLongForCardholderName:
      "╫⌐╫¥ ╫æ╫ó╫£ ╫ö╫¢╫¿╫ÿ╫Ö╫í ╫Ö╫¢╫ò╫£ ╫£╫ö╫¢╫Ö╫£ 256 ╫¬╫ò╫ò╫Ö╫¥ ╫£╫¢╫£ ╫ö╫Ö╫ò╫¬╫¿.",
    fieldEmptyForNumber: "╫ó╫£╫Ö╫Ü ╫£╫₧╫£╫É ╫É╫¬ ╫ö╫₧╫í╫ñ╫¿.",
    fieldEmptyForPostalCode: "╫ó╫£╫Ö╫Ü ╫£╫₧╫£╫É ╫É╫¬ ╫ö╫₧╫Ö╫º╫ò╫ô.",
    fieldInvalidForCardholderName:
      "╫⌐╫¥ ╫æ╫ó╫£ ╫ö╫¢╫¿╫ÿ╫Ö╫í ╫É╫Ö╫á╫ò ╫ù╫ò╫º╫Ö.",
    fieldInvalidForCvv: "╫º╫ò╫ô ╫É╫æ╫ÿ╫ù╫ö ╫É╫Ö╫á╫ò ╫ù╫ò╫º╫Ö.",
    fieldInvalidForExpirationDate:
      "╫¬╫É╫¿╫Ö╫Ü ╫ñ╫º╫Ö╫ó╫¬ ╫ö╫¬╫ò╫º╫ú ╫É╫Ö╫á╫ò ╫ù╫ò╫º╫Ö.",
    fieldInvalidForNumber:
      "╫₧╫í╫ñ╫¿ ╫¢╫¿╫ÿ╫Ö╫í ╫ö╫É╫⌐╫¿╫É╫Ö ╫É╫Ö╫á╫ò ╫ù╫ò╫º╫Ö.",
    fieldInvalidForPostalCode: "╫ö╫₧╫Ö╫º╫ò╫ô ╫É╫Ö╫á╫ò ╫ù╫ò╫º╫Ö.",
    genericError: "╫á╫¿╫É╫ö ╫⌐╫₧╫⌐╫ö╫ò ╫ö╫⌐╫¬╫æ╫⌐ ╫æ╫ª╫ô ╫⌐╫£╫á╫ò.",
    hostedFieldsTokenizationFailOnDuplicateError:
      "╫¢╫¿╫ÿ╫Ö╫í ╫É╫⌐╫¿╫É╫Ö ╫û╫ö ╫¢╫æ╫¿ ╫⌐╫₧╫ò╫¿ ╫¢╫⌐╫Ö╫ÿ╫¬ ╫¬╫⌐╫£╫ò╫¥.",
    hostedFieldsFailedTokenizationError:
      "╫ó╫£╫Ö╫Ü ╫£╫æ╫ô╫ò╫º ╫É╫¬ ╫ö╫ñ╫¿╫ÿ╫Ö╫¥ ╫⌐╫£╫Ü ╫ò╫£╫á╫í╫ò╫¬ ╫⌐╫ò╫æ.",
    hostedFieldsFieldsInvalidError:
      "╫ó╫£╫Ö╫Ü ╫£╫æ╫ô╫ò╫º ╫É╫¬ ╫ö╫ñ╫¿╫ÿ╫Ö╫¥ ╫⌐╫£╫Ü ╫ò╫£╫á╫í╫ò╫¬ ╫⌐╫ò╫æ.",
    hostedFieldsTokenizationNetworkErrorError:
      "╫⌐╫Æ╫Ö╫É╫¬ ╫¿╫⌐╫¬. ╫ó╫£╫Ö╫Ü ╫£╫á╫í╫ò╫¬ ╫⌐╫ò╫æ.",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "╫É╫Ö╫₧╫ò╫¬ ╫¢╫¿╫ÿ╫Ö╫í ╫ö╫É╫⌐╫¿╫É╫Ö ╫á╫¢╫⌐╫£. ╫ó╫£╫Ö╫Ü ╫£╫æ╫ô╫ò╫º ╫É╫¬ ╫ö╫ñ╫¿╫ÿ╫Ö╫¥ ╫⌐╫£╫Ü ╫ò╫£╫á╫í╫ò╫¬ ╫⌐╫ò╫æ.",
    paypalButtonMustBeUsed:
      "╫£╫ö╫⌐╫¬╫₧╫⌐ ╫æ╫£╫ù╫ª╫ƒ PayPal ╫¢╫ô╫Ö ╫£╫ö╫₧╫⌐╫Ö╫Ü ╫æ╫æ╫Ö╫ª╫ò╫ó ╫ö╫¬╫⌐╫£╫ò╫¥ ╫⌐╫£╫Ü.",
    paypalAccountTokenizationFailedError:
      "╫₧╫⌐╫ö╫ò ╫ö╫⌐╫¬╫æ╫⌐ ╫æ╫ó╫¬ ╫ö╫ò╫í╫ñ╫¬ ╫ù╫⌐╫æ╫ò╫ƒ PayPal. ╫ó╫£╫Ö╫Ü ╫£╫á╫í╫ò╫¬ ╫⌐╫ò╫æ.",
    paypalFlowFailedError:
      "╫₧╫⌐╫ö╫ò ╫ö╫⌐╫¬╫æ╫⌐ ╫æ╫ö╫¬╫ù╫æ╫¿╫ò╫¬ ╫£-PayPal. ╫ó╫£╫Ö╫Ü ╫£╫á╫í╫ò╫¬ ╫⌐╫ò╫æ.",
    paypalTokenizationRequestActiveError:
      "╫É╫Ö╫⌐╫ò╫¿ ╫ö╫¬╫⌐╫£╫ò╫¥ ╫⌐╫£ PayPal ╫¢╫æ╫¿ ╫₧╫¬╫æ╫ª╫ó.",
    venmoCanceledError:
      "╫á╫¿╫É╫ö ╫⌐╫₧╫⌐╫ö╫ò ╫ö╫⌐╫¬╫æ╫⌐. ╫ó╫£╫Ö╫Ü ╫£╫ò╫ò╫ô╫É ╫⌐╫ö╫Æ╫¿╫í╫ö ╫ö╫ó╫ô╫¢╫á╫Ö╫¬ ╫æ╫Ö╫ò╫¬╫¿ ╫⌐╫£ ╫É╫ñ╫£╫Ö╫º╫ª╫Ö╫Ö╫¬ Venmo ╫₧╫ò╫¬╫º╫á╫¬ ╫æ╫₧╫¢╫⌐╫Ö╫¿ ╫⌐╫£╫Ü, ╫ò╫⌐╫ö╫ô╫ñ╫ô╫ñ╫ƒ ╫⌐╫£╫Ü ╫¬╫ò╫₧╫Ü ╫æ╫₧╫ó╫æ╫¿ ╫£-Venmo.",
    vaultManagerPaymentMethodDeletionError:
      "╫£╫É ╫ö╫ª╫£╫ù╫á╫ò ╫£╫₧╫ù╫ò╫º ╫É╫¬ ╫⌐╫Ö╫ÿ╫¬ ╫ö╫¬╫⌐╫£╫ò╫¥, ╫ó╫£╫Ö╫Ü ╫£╫á╫í╫ò╫¬ ╫⌐╫ò╫æ.",
    venmoAppFailedError:
      "╫£╫É ╫₧╫ª╫É╫á╫ò ╫£╫₧╫ª╫ò╫É ╫É╫¬ ╫É╫ñ╫£╫Ö╫º╫ª╫Ö╫Ö╫¬ Venmo ╫æ╫₧╫¢╫⌐╫Ö╫¿ ╫⌐╫£╫Ü.",
    unsupportedCardTypeError:
      "╫í╫ò╫Æ ╫¢╫¿╫ÿ╫Ö╫í ╫û╫ö ╫É╫Ö╫á╫ò ╫á╫¬╫₧╫Ü. ╫ó╫£╫Ö╫Ü ╫£╫á╫í╫ò╫¬ ╫¢╫¿╫ÿ╫Ö╫í ╫É╫ù╫¿.",
    applePayTokenizationError:
      "╫É╫Ö╫¿╫ó╫ö ╫⌐╫Æ╫Ö╫É╫¬ ╫¿╫⌐╫¬ ╫æ╫ó╫¬ ╫ó╫Ö╫æ╫ò╫ô ╫¬╫⌐╫£╫ò╫¥ ╫ö╫¬╫⌐╫£╫ò╫₧╫Ö╫¥ ╫⌐╫£ Apple Pay. ╫ó╫£╫Ö╫Ü ╫£╫á╫í╫ò╫¬ ╫⌐╫ò╫æ.",
    applePayActiveCardError:
      "╫ö╫ò╫í╫ñ╫¬ ╫¢╫¿╫ÿ╫Ö╫í ╫á╫¬╫₧╫Ü ╫£╫É╫¿╫á╫º Apple Pay ╫⌐╫£╫Ü.",
    cardholderNameLabel: "╫⌐╫¥ ╫æ╫ó╫£ ╫ö╫¢╫¿╫ÿ╫Ö╫í",
    cardNumberLabel: "╫₧╫í╫ñ╫¿ ╫¢╫¿╫ÿ╫Ö╫í",
    cvvLabel: "╫º╫ò╫ô ╫É╫æ╫ÿ╫ù╫¬ ╫¢╫¿╫ÿ╫Ö╫í (CVV)",
    cvvThreeDigitLabelSubheading: "(3 ╫í╫ñ╫¿╫ò╫¬)",
    cvvFourDigitLabelSubheading: "(4 ╫í╫ñ╫¿╫ò╫¬)",
    cardholderNamePlaceholder: "╫⌐╫¥ ╫æ╫ó╫£ ╫ö╫¢╫¿╫ÿ╫Ö╫í",
    expirationDateLabel: "╫¬╫É╫¿╫Ö╫Ü ╫ñ╫º╫Ö╫ó╫¬ ╫¬╫ò╫º╫ú",
    expirationDateLabelSubheading: "(MM/YY)",
    expirationDatePlaceholder: "MM/YYΓÇÅ",
    postalCodeLabel: "╫₧╫Ö╫º╫ò╫ô",
    saveCardLabel: "╫⌐╫₧╫Ö╫¿╫¬ ╫¢╫¿╫ÿ╫Ö╫í ╫É╫⌐╫¿╫É╫Ö",
    payWithCard: "╫£╫⌐╫£╫¥ ╫æ╫É╫₧╫ª╫ó╫ò╫¬ ╫¢╫¿╫ÿ╫Ö╫í ╫É╫⌐╫¿╫É╫Ö",
    endingIn: "╫₧╫í╫¬╫Ö╫Ö╫¥ ╫æ╫¬╫É╫¿╫Ö╫Ü {{lastFourCardDigits}}",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "╫¢╫¿╫ÿ╫Ö╫í",
    PayPal: "PayPalΓÇÅ",
    "PayPal Credit": "PayPal CreditΓÇÅ",
    "Google Pay": "Google Pay",
    "American Express": "╫É╫₧╫¿╫Ö╫º╫ƒ ╫É╫º╫í╫ñ╫¿╫í",
    Discover: "DiscoverΓÇÅ",
    "Diners Club": "╫ô╫Ö╫Ö╫á╫¿╫í ╫º╫£╫É╫æ",
    Elo: "EloΓÇÅ",
    Hiper: "HiperΓÇÅ",
    Hipercard: "HiperCardΓÇÅ",
    MasterCard: "╫₧╫É╫í╫ÿ╫¿╫º╫É╫¿╫ô",
    Visa: "Visa",
    JCB: "JCBΓÇÅ",
    Maestro: "MaestroΓÇÅ",
    UnionPay: "UnionPayΓÇÅ",
  },
  p4 = {
    payingWith: "Fizet\xe9s ezzel: {{paymentSource}}",
    chooseAnotherWayToPay: "V\xe1lasszon m\xe1sik fizet\xe9si m\xf3dot",
    chooseAWayToPay: "V\xe1lasszon fizet\xe9si m\xf3dot",
    otherWaysToPay: "Egy\xe9b fizet\xe9si m\xf3dok",
    edit: "Szerkeszt\xe9s",
    doneEditing: "K\xe9sz",
    editPaymentMethods: "Fizet\xe9si m\xf3dok szerkeszt\xe9se",
    CreditCardDeleteConfirmationMessage:
      "T\xf6rli a(z) {{identifier}}} v\xe9g┼▒ {{secondaryIdentifier}}} k\xe1rty\xe1t?",
    PayPalAccountDeleteConfirmationMessage:
      "T\xf6rli a(z) {{identifier}} PayPal-sz\xe1ml\xe1t?",
    VenmoAccountDeleteConfirmationMessage:
      "Biztosan t\xf6rli a(z) {{identifier}} felhaszn\xe1l\xf3n\xe9vhez tartoz\xf3 Venmo-sz\xe1ml\xe1t?",
    genericDeleteConfirmationMessage:
      "Biztosan t\xf6rli ezt a fizet\xe9si m\xf3dot?",
    deleteCancelButton: "M\xe9gse",
    deleteConfirmationButton: "T\xf6rl\xe9s",
    fieldEmptyForCvv: "K\xe9rj\xfck, t\xf6ltse ki a CVV-sz\xe1mot.",
    fieldEmptyForExpirationDate: "T\xf6ltse ki a lej\xe1rati d\xe1tumot.",
    fieldEmptyForCardholderName: "T\xf6ltse ki a k\xe1rtyabirtokos nev\xe9t.",
    fieldTooLongForCardholderName:
      "A k\xe1rtyatulajdonos neve nem lehet hosszabb mint 256 karakter.",
    fieldEmptyForNumber: "T\xf6ltse ki a sz\xe1mot.",
    fieldEmptyForPostalCode: "T\xf6ltse ki az ir\xe1ny\xedt\xf3sz\xe1mot.",
    fieldInvalidForCardholderName:
      "Ez a k\xe1rtyabirtokos neve nem \xe9rv\xe9nyes.",
    fieldInvalidForCvv: "Ez a biztons\xe1gi k\xf3d nem \xe9rv\xe9nyes.",
    fieldInvalidForExpirationDate:
      "Ez a lej\xe1rati d\xe1tum \xe9rv\xe9nytelen.",
    fieldInvalidForNumber: "Ez a k\xe1rtyasz\xe1m nem \xe9rv\xe9nyes.",
    fieldInvalidForPostalCode:
      "Ez az ir\xe1ny\xedt\xf3sz\xe1m nem \xe9rv\xe9nyes.",
    genericError: "Hiba t\xf6rt\xe9nt a mi oldalunkon.",
    hostedFieldsTokenizationFailOnDuplicateError:
      "Ez a hitelk\xe1rtya m\xe1r szerepel mentett fizet\xe9si m\xf3dk\xe9nt.",
    hostedFieldsFailedTokenizationError:
      "Ellen┼ærizze az adatait, majd pr\xf3b\xe1lja \xfajra.",
    hostedFieldsFieldsInvalidError:
      "Ellen┼ærizze az adatait, majd pr\xf3b\xe1lja \xfajra.",
    hostedFieldsTokenizationNetworkErrorError:
      "H\xe1l\xf3zati hiba. Pr\xf3b\xe1lja \xfajra.",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "A hitelk\xe1rtya hiteles\xedt\xe9se sikertelen. Ellen┼ærizze az adatait, majd pr\xf3b\xe1lja \xfajra.",
    paypalButtonMustBeUsed:
      "A fizet\xe9s folytat\xe1s\xe1hoz haszn\xe1lja a PayPal-gombot.",
    paypalAccountTokenizationFailedError:
      "Hiba t\xf6rt\xe9nt a PayPal-sz\xe1mla hozz\xe1ad\xe1sa k\xf6zben. Pr\xf3b\xe1lja \xfajra.",
    paypalFlowFailedError:
      "Hiba t\xf6rt\xe9nt a PayPalhoz val\xf3 kapcsol\xf3d\xe1s k\xf6zben. Pr\xf3b\xe1lja \xfajra.",
    paypalTokenizationRequestActiveError:
      "A PayPal-fizet\xe9s enged\xe9lyez\xe9se m\xe1r folyamatban van.",
    venmoCanceledError:
      "Hiba t\xf6rt\xe9nt. Ellen┼ærizze, hogy eszk\xf6z\xe9re a Venmo-alkalmaz\xe1s legfrissebb verzi\xf3ja van-e telep\xedtve, \xe9s hogy a b\xf6ng\xe9sz┼æje t\xe1mogatja-e a Venmo-ra t\xf6rt\xe9n┼æ \xe1tv\xe1lt\xe1st.",
    vaultManagerPaymentMethodDeletionError:
      "Nem siker\xfclt t\xf6r\xf6lni a fizet\xe9si m\xf3dot, pr\xf3b\xe1lja \xfajra.",
    venmoAppFailedError:
      "A Venmo alkalmaz\xe1st nem tal\xe1lja a rendszer az eszk\xf6z\xf6n.",
    unsupportedCardTypeError:
      "Ez a k\xe1rtyat\xedpus nem t\xe1mogatott. Pr\xf3b\xe1ljon meg egy m\xe1sik k\xe1rty\xe1t.",
    applePayTokenizationError:
      "H\xe1l\xf3zati hiba t\xf6rt\xe9nt az Apple Pay-kifizet\xe9s k\xf6zben. Pr\xf3b\xe1lja \xfajra.",
    applePayActiveCardError:
      "Adjon egy t\xe1mogatott k\xe1rty\xe1t az Apple Pay p\xe9nzt\xe1rc\xe1hoz.",
    cardholderNameLabel: "K\xe1rtyabirtokos neve",
    cardNumberLabel: "K\xe1rtyasz\xe1m",
    cvvLabel: "CVV",
    cvvThreeDigitLabelSubheading: "(3 sz\xe1mjegy)",
    cvvFourDigitLabelSubheading: "(4 sz\xe1mjegy)",
    cardholderNamePlaceholder: "K\xe1rtyabirtokos neve",
    expirationDateLabel: "Lej\xe1rati d\xe1tum",
    expirationDateLabelSubheading: "(HH/\xc9\xc9)",
    expirationDatePlaceholder: "HH/\xc9\xc9",
    postalCodeLabel: "Ir\xe1ny\xedt\xf3sz\xe1m",
    saveCardLabel: "K\xe1rtya ment\xe9se",
    payWithCard: "Fizet\xe9s bankk\xe1rty\xe1val vagy hitelk\xe1rty\xe1val",
    endingIn: "{{lastFourCardDigits}}} v\xe9g┼▒",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "K\xe1rtya",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal Credit",
    "Google Pay": "Google Pay",
    "American Express": "American Express",
    Discover: "Discover",
    "Diners Club": "Diners Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "UnionPay",
  },
  p5 = {
    payingWith: "Membayar dengan {{paymentSource}}",
    chooseAnotherWayToPay: "Pilih metode pembayaran lain",
    chooseAWayToPay: "Pilih cara pembayaran",
    otherWaysToPay: "Cara lain untuk membayar",
    edit: "Edit",
    doneEditing: "Selesai",
    editPaymentMethods: "Edit metode pembayaran",
    CreditCardDeleteConfirmationMessage:
      "Hapus kartu {{secondaryIdentifier}} yang berakhiran dengan {{identifier}}?",
    PayPalAccountDeleteConfirmationMessage:
      "Hapus rekening PayPal {{identifier}}?",
    VenmoAccountDeleteConfirmationMessage:
      "Yakin ingin menghapus rekening Venmo dengan nama pengguna {{identifier}}?",
    genericDeleteConfirmationMessage:
      "Yakin ingin menghapus metode pembayaran ini?",
    deleteCancelButton: "Batalkan",
    deleteConfirmationButton: "Hapus",
    fieldEmptyForCvv: "Mohon mengisi CVV.",
    fieldEmptyForExpirationDate: "Silakan mengisi tanggal kedaluwarsa.",
    fieldEmptyForCardholderName: "Silakan mengisi nama pemilik kartu.",
    fieldTooLongForCardholderName:
      "Nama pemilik kartu harus kurang dari 256 karakter.",
    fieldEmptyForNumber: "Mohon mengisi angkanya.",
    fieldEmptyForPostalCode: "Mohon mengisi kode pos.",
    fieldInvalidForCardholderName: "Nama pemilik kartu ini tidak valid.",
    fieldInvalidForCvv: "Kode keamanan ini tidak valid.",
    fieldInvalidForExpirationDate: "Tanggal kedaluwarsa ini tidak valid.",
    fieldInvalidForNumber: "Nomor kartu ini tidak valid.",
    fieldInvalidForPostalCode: "Kode pos ini tidak valid.",
    genericError: "Ada yang salah pada sistem kami.",
    hostedFieldsTokenizationFailOnDuplicateError:
      "Kartu kredit ini telah ada sebelumnya sebagai metode pembayaran tersimpan.",
    hostedFieldsFailedTokenizationError:
      "Mohon periksa informasi Anda dan coba lagi.",
    hostedFieldsFieldsInvalidError:
      "Mohon periksa informasi Anda dan coba lagi.",
    hostedFieldsTokenizationNetworkErrorError:
      "Kesalahan jaringan. Mohon coba lagi.",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "Verifikasi kartu kredit gagal. Mohon periksa informasi Anda dan coba lagi.",
    paypalButtonMustBeUsed:
      "Gunakan tombol PayPal untuk melanjutkan pembayaran.",
    paypalAccountTokenizationFailedError:
      "Terjadi kesalahan saat menambahkan rekening PayPal. Mohon coba lagi.",
    paypalFlowFailedError:
      "Terjadi kesalahan ketika menghubungkan ke PayPal. Mohon coba lagi.",
    paypalTokenizationRequestActiveError:
      "Otorisasi pembayaran PayPal sedang diproses.",
    venmoCanceledError:
      "Terjadi kesalahan. Pastikan Anda memiliki aplikasi Venmo versi terbaru di perangkat dan peramban Anda mendukung peralihan ke Venmo.",
    vaultManagerPaymentMethodDeletionError:
      "Tidak dapat menghapus metode pembayaran, coba lagi.",
    venmoAppFailedError:
      "Aplikasi Venmo tidak dapat ditemukan di perangkat Anda.",
    unsupportedCardTypeError:
      "Jenis kartu ini tidak didukung. Mohon coba kartu lainnya.",
    applePayTokenizationError:
      "Terjadi kesalahan pada jaringan saat memproses pembayaran Apple Pay. Mohon coba lagi.",
    applePayActiveCardError:
      "Tambahkan kartu yang didukung oleh wallet Apple Pay Anda.",
    cardholderNameLabel: "Nama Pemilik Kartu",
    cardNumberLabel: "Nomor Kartu",
    cvvLabel: "CVV",
    cvvThreeDigitLabelSubheading: "(3 angka)",
    cvvFourDigitLabelSubheading: "(4 angka)",
    cardholderNamePlaceholder: "Nama Pemilik Kartu",
    expirationDateLabel: "Tanggal Kedaluwarsa",
    expirationDateLabelSubheading: "(BB/TT)",
    expirationDatePlaceholder: "BB/TT",
    postalCodeLabel: "Kode Pos",
    saveCardLabel: "Simpan kartu",
    payWithCard: "Bayar dengan kartu",
    endingIn: "Berakhiran dengan {{lastFourCardDigits}}",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "Kartu",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal Credit",
    "Google Pay": "Google Pay",
    "American Express": "American Express",
    Discover: "Jelajahi",
    "Diners Club": "Diners Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "UnionPay",
  },
  p6 = {
    payingWith: "Metodo di pagamento: {{paymentSource}}",
    chooseAnotherWayToPay: "Scegli un altro metodo di pagamento",
    chooseAWayToPay: "Scegli un metodo di pagamento",
    otherWaysToPay: "Altri metodi di pagamento",
    edit: "Modifica",
    doneEditing: "Fine",
    editPaymentMethods: "Modifica metodi di pagamento",
    CreditCardDeleteConfirmationMessage:
      "Eliminare la carta {{secondaryIdentifier}} le cui ultime cifre sono {{identifier}}?",
    PayPalAccountDeleteConfirmationMessage:
      "Eliminare il conto PayPal {{identifier}}?",
    VenmoAccountDeleteConfirmationMessage:
      "Vuoi davvero eliminare il conto Venmo con il nome utente {{identifier}}?",
    genericDeleteConfirmationMessage:
      "Vuoi davvero eliminare questo metodo di pagamento?",
    deleteCancelButton: "Annulla",
    deleteConfirmationButton: "Rimuovi",
    fieldEmptyForCvv: "Compila un CVV.",
    fieldEmptyForExpirationDate: "Compila una data di scadenza.",
    fieldEmptyForCardholderName: "Compila un nome del titolare.",
    fieldTooLongForCardholderName:
      "Il nome del titolare della carta non pu\xf2 contenere pi\xf9 di 256 caratteri.",
    fieldEmptyForNumber: "Compila un numero.",
    fieldEmptyForPostalCode: "Compila un CAP.",
    fieldInvalidForCardholderName: "Il nome del titolare non \xe8 valido.",
    fieldInvalidForCvv: "Il codice di sicurezza non \xe8 valido.",
    fieldInvalidForExpirationDate: "La data di scadenza non \xe8 valida.",
    fieldInvalidForNumber: "Il numero di carta non \xe8 valido.",
    fieldInvalidForPostalCode: "Il CAP non \xe8 valido.",
    genericError: "Si \xe8 verificato un errore nei nostri sistemi.",
    hostedFieldsTokenizationFailOnDuplicateError:
      "Questa carta di credito esiste gi\xe0 come metodo di pagamento salvato.",
    hostedFieldsFailedTokenizationError: "Controlla i tuoi dati e riprova.",
    hostedFieldsFieldsInvalidError: "Controlla i tuoi dati e riprova.",
    hostedFieldsTokenizationNetworkErrorError: "Errore di rete. Riprova.",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "Verifica della carta di credito non riuscita. Controlla i tuoi dati e riprova.",
    paypalButtonMustBeUsed:
      "Usa il pulsante PayPal per continuare con il pagamento.",
    paypalAccountTokenizationFailedError:
      "Si \xe8 verificato un errore durante l'aggiunta del conto PayPal. Riprova.",
    paypalFlowFailedError:
      "Si \xe8 verificato un errore durante la connessione a PayPal. Riprova.",
    paypalTokenizationRequestActiveError:
      "Autorizzazione di pagamento PayPal gi\xe0 in corso.",
    venmoCanceledError:
      "Si \xe8 verificato un errore. Assicurati di avere installato la versione pi\xf9 recente dell'app Venmo sul tuo dispositivo e che il tuo browser supporti il passaggio a Venmo.",
    vaultManagerPaymentMethodDeletionError:
      "Impossibile eliminare il metodo di pagamento, riprova.",
    venmoAppFailedError: "Impossibile trovare l'app Venmo sul tuo dispositivo.",
    unsupportedCardTypeError:
      "Questo tipo di carta non \xe8 supportato. Prova con un'altra carta.",
    applePayTokenizationError:
      "Si \xe8 verificato un errore di rete durante l'elaborazione del pagamento Apple Pay. Riprova.",
    applePayActiveCardError:
      "Aggiungi una carta supportata al tuo portafoglio Apple Pay.",
    cardholderNameLabel: "Nome del titolare",
    cardNumberLabel: "Numero di carta",
    cvvLabel: "CVV",
    cvvThreeDigitLabelSubheading: "(3 cifre)",
    cvvFourDigitLabelSubheading: "(4 cifre)",
    cardholderNamePlaceholder: "Nome del titolare",
    expirationDateLabel: "Data di scadenza",
    expirationDateLabelSubheading: "(MM/AA)",
    expirationDatePlaceholder: "MM/AA",
    postalCodeLabel: "CAP",
    saveCardLabel: "Salva carta",
    payWithCard: "Paga con una carta",
    endingIn: "Le ultime cifre sono {{lastFourCardDigits}}",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "Carta",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal Credit",
    "Google Pay": "Google Pay",
    "American Express": "American Express",
    Discover: "Discover",
    "Diners Club": "Diners Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "UnionPay",
  },
  p7 = {
    payingWith: "{{paymentSource}}πüºπü«πüèµö»µëòπüä",
    chooseAnotherWayToPay: "σêÑπü«µö»µëòµû╣µ│òπéÆΘü╕µè₧πüùπüªπüÅπüáπüòπüä",
    chooseAWayToPay: "µö»µëòµû╣µ│òπéÆΘü╕µè₧πüùπüªπüÅπüáπüòπüä",
    otherWaysToPay: "πü¥πü«Σ╗ûπü«µö»µëòµû╣µ│ò",
    edit: "τ╖¿Θ¢å",
    doneEditing: "σ«îΣ║å",
    editPaymentMethods: "µö»µëòµû╣µ│òπü«τ╖¿Θ¢å",
    CreditCardDeleteConfirmationMessage:
      "{{secondaryIdentifier}}πé½πâ╝πâë(µ£½σ░╛τò¬σÅ╖: {{identifier}})πéÆσëèΘÖñπüùπü╛πüÖπüï?",
    PayPalAccountDeleteConfirmationMessage:
      "PayPalπéóπé½πéªπâ│πâê{{identifier}}πéÆσëèΘÖñπüùπü╛πüÖπüï?",
    VenmoAccountDeleteConfirmationMessage:
      "πâªπâ╝πé╢πâ╝σÉì{{identifier}}πü«Venmoπéóπé½πéªπâ│πâêπéÆσëèΘÖñπüùπüªπéêπéìπüùπüäπüºπüÖπüï?",
    genericDeleteConfirmationMessage:
      "πüôπü«µö»µëòµû╣µ│òπéÆσëèΘÖñπüùπü╛πüÖπüï?",
    deleteCancelButton: "πé¡πâúπâ│πé╗πâ½",
    deleteConfirmationButton: "σëèΘÖñ",
    fieldEmptyForCvv: "CVVπéÆσàÑσè¢πüùπüªπüÅπüáπüòπüäπÇé",
    fieldEmptyForExpirationDate: "µ£ëσè╣µ£ƒΘÖÉπéÆσàÑσè¢πüùπüªπüÅπüáπüòπüäπÇé",
    fieldEmptyForCardholderName:
      "πé½πâ╝πâëΣ┐¥µ£ëΦÇàπü«σÉìσëìπéÆσàÑσè¢πüùπüªπüÅπüáπüòπüäπÇé",
    fieldTooLongForCardholderName:
      "πé½πâ╝πâëΣ┐¥µ£ëΦÇàπü«σÉìσëìπü»256µûçσ¡ùµ£¬µ║Çπü½πüùπüªπüÅπüáπüòπüäπÇé",
    fieldEmptyForNumber: "τò¬σÅ╖πéÆσàÑσè¢πüùπüªπüÅπüáπüòπüäπÇé",
    fieldEmptyForPostalCode: "Θâ╡Σ╛┐τò¬σÅ╖πéÆσàÑσè¢πüùπüªπüÅπüáπüòπüäπÇé",
    fieldInvalidForCardholderName:
      "πüôπü«πé½πâ╝πâëΣ┐¥µ£ëΦÇàπü«σÉìσëìπü»τäíσè╣πüºπüÖπÇé",
    fieldInvalidForCvv: "πüôπü«πé╗πé¡πâÑπâ¬πâåπéúπé│πâ╝πâëπü»τäíσè╣πüºπüÖπÇé",
    fieldInvalidForExpirationDate: "πüôπü«µ£ëσè╣µ£ƒΘÖÉπü»τäíσè╣πüºπüÖπÇé",
    fieldInvalidForNumber: "πüôπü«πé½πâ╝πâëτò¬σÅ╖πü»τäíσè╣πüºπüÖπÇé",
    fieldInvalidForPostalCode: "πüôπü«Θâ╡Σ╛┐τò¬σÅ╖πü»τäíσè╣πüºπüÖπÇé",
    genericError: "σ╝èτñ╛σü┤πüºσòÅΘíîπüîτÖ║τöƒπüùπü╛πüùπüƒπÇé",
    hostedFieldsTokenizationFailOnDuplicateError:
      "πüôπü«πé»πâ¼πé╕πââπâêπé½πâ╝πâëπü»πÇüΣ┐¥σ¡ÿµ╕êπü┐πü«µö»µëòµû╣µ│òπü¿πüùπüªπüÖπüºπü½σ¡ÿσ£¿πüùπü╛πüÖπÇé",
    hostedFieldsFailedTokenizationError:
      "µâàσá▒πéÆτó║Φ¬ìπüùπüªπééπüåΣ╕Çσ║ªπüèΦ⌐ªπüùπüÅπüáπüòπüäπÇé",
    hostedFieldsFieldsInvalidError:
      "µâàσá▒πéÆτó║Φ¬ìπüùπüªπééπüåΣ╕Çσ║ªπüèΦ⌐ªπüùπüÅπüáπüòπüäπÇé",
    hostedFieldsTokenizationNetworkErrorError:
      "πâìπââπâêπâ»πâ╝πé»πé¿πâ⌐πâ╝πüºπüÖπÇéσåìσ║ªπüèΦ⌐ªπüùπüÅπüáπüòπüäπÇé",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "πé»πâ¼πé╕πââπâêπé½πâ╝πâëπü«Φ¬ìΦ¿╝πü½σñ▒µòùπüùπü╛πüùπüƒπÇéµâàσá▒πéÆτó║Φ¬ìπüùπüªπééπüåΣ╕Çσ║ªπüèΦ⌐ªπüùπüÅπüáπüòπüäπÇé",
    paypalButtonMustBeUsed:
      "µö»µëòπüäπéÆτ╢ÜΦíîπüÖπéïπü½πü»πÇüPayPalπâ£πé┐πâ│πéÆΣ╜┐τö¿πüùπü╛πüÖπÇé",
    paypalAccountTokenizationFailedError:
      "PayPalπéóπé½πéªπâ│πâêπü«Φ┐╜σèáΣ╕¡πü½σòÅΘíîπüîτÖ║τöƒπüùπü╛πüùπüƒπÇéσåìσ║ªπüèΦ⌐ªπüùπüÅπüáπüòπüäπÇé",
    paypalFlowFailedError:
      "PayPalπü╕πü«µÄÑτ╢Üπü½σòÅΘíîπüîτÖ║τöƒπüùπü╛πüùπüƒπÇéσåìσ║ªπüèΦ⌐ªπüùπüÅπüáπüòπüäπÇé",
    paypalTokenizationRequestActiveError:
      "PayPalπü«µö»µëòπüäµë┐Φ¬ìπü»πüÖπüºπü½σçªτÉåΣ╕¡πüºπüÖπÇé",
    venmoCanceledError:
      "σòÅΘíîπüîτÖ║τöƒπüùπü╛πüùπüƒπÇéπüèΣ╜┐πüäπü«τ½»µ£½πü½Venmoπéóπâùπâ¬πü«µ£Çµû░πâÉπâ╝πé╕πâºπâ│πüîπéñπâ│πé╣πâêπâ╝πâ½πüòπéîπüªπüèπéèπÇüπüèΣ╜┐πüäπü«πâûπâ⌐πéªπé╢πüîVenmoπü╕πü«σêçπéèµ¢┐πüêπéÆπé╡πâ¥πâ╝πâêπüùπüªπüäπéïπüôπü¿πéÆπüöτó║Φ¬ìπüÅπüáπüòπüäπÇé",
    vaultManagerPaymentMethodDeletionError:
      "µö»µëòµû╣µ│òπéÆσëèΘÖñπüºπüìπü¬πüäσá┤σÉêπü»πÇüπééπüåΣ╕Çσ║ªπüèΦ⌐ªπüùπüÅπüáπüòπüäπÇé",
    venmoAppFailedError:
      "πüèσ«óπüòπü╛πü«τ½»µ£½πüºVenmoπéóπâùπâ¬πéÆΦªïπüñπüæπéïπüôπü¿πüîπüºπüìπü╛πü¢πéôπüºπüùπüƒπÇé",
    unsupportedCardTypeError:
      "πüôπü«πé½πâ╝πâëπü«πé┐πéñπâùπü»πé╡πâ¥πâ╝πâêπüòπéîπüªπüäπü╛πü¢πéôπÇéσêÑπü«πé½πâ╝πâëπéÆπüöΣ╜┐τö¿πüÅπüáπüòπüäπÇé",
    applePayTokenizationError:
      "Apple Payπü«µö»µëòπüäπü«σçªτÉåΣ╕¡πü½πâìπââπâêπâ»πâ╝πé»πé¿πâ⌐πâ╝πüîτÖ║τöƒπüùπü╛πüùπüƒπÇéσåìσ║ªπüèΦ⌐ªπüùπüÅπüáπüòπüäπÇé",
    applePayActiveCardError:
      "Apple Payπéªπé⌐πâ¼πââπâêπü½σ»╛σ┐£πüùπüªπüäπéïπé½πâ╝πâëπéÆΦ┐╜σèáπüùπüªπüÅπüáπüòπüäπÇé",
    cardholderNameLabel: "πé½πâ╝πâëΣ┐¥µ£ëΦÇàπü«σÉìσëì",
    cardNumberLabel: "πé½πâ╝πâëτò¬σÅ╖",
    cvvLabel: "CVV",
    cvvThreeDigitLabelSubheading: "(3µíü)",
    cvvFourDigitLabelSubheading: "(4µíü)",
    cardholderNamePlaceholder: "πé½πâ╝πâëΣ┐¥µ£ëΦÇàπü«σÉìσëì",
    expirationDateLabel: "µ£ëσè╣µ£ƒΘÖÉ",
    expirationDateLabelSubheading: "(MM/YY)",
    expirationDatePlaceholder: "MM/YY",
    postalCodeLabel: "Θâ╡Σ╛┐τò¬σÅ╖",
    saveCardLabel: "πé½πâ╝πâëπéÆΣ┐¥σ¡ÿ",
    payWithCard: "πé½πâ╝πâëπüºµö»µëòπüå",
    endingIn: "µ£½σ░╛τò¬σÅ╖: {{lastFourCardDigits}}",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "πé½πâ╝πâë",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal Credit",
    "Google Pay": "Google Pay",
    "American Express": "American Express",
    Discover: "Discover",
    "Diners Club": "Diners Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "ΘèÇΦü»(UnionPay)",
  },
  p8 = {
    payingWith: "Ω▓░∞á£∞êÿδï¿: {{paymentSource}}",
    chooseAnotherWayToPay: "δïñδÑ╕ Ω▓░∞á£∞êÿδï¿∞¥ä ∞äáφâ¥φò┤ ∞ú╝∞ä╕∞Üö.",
    chooseAWayToPay: "Ω▓░∞á£∞êÿδï¿ ∞äáφâ¥",
    otherWaysToPay: "δïñδÑ╕ Ω▓░∞á£∞êÿδï¿",
    edit: "φÄ╕∞ºæ",
    doneEditing: "∞Öäδúî",
    editPaymentMethods: "Ω▓░∞á£∞êÿδï¿ φÄ╕∞ºæ",
    CreditCardDeleteConfirmationMessage:
      "{{identifier}}(∞£╝)δí£ δü¥δéÿδèö {{secondaryIdentifier}} ∞╣┤δô£δÑ╝ ∞é¡∞á£φòÿ∞ï£Ω▓á∞è╡δïêΩ╣î?",
    PayPalAccountDeleteConfirmationMessage:
      "PayPal Ω│ä∞áò {{identifier}}∞¥ä(δÑ╝) ∞é¡∞á£φòÿ∞ï£Ω▓á∞è╡δïêΩ╣î?",
    VenmoAccountDeleteConfirmationMessage:
      "∞é¼∞Ü⌐∞₧É ∞¥┤δªä {{identifier}}∞¥ÿ Venmo Ω│ä∞áò∞¥ä ∞áòδºÉ ∞é¡∞á£φòÿ∞ï£Ω▓á∞è╡δïêΩ╣î?",
    genericDeleteConfirmationMessage:
      "∞¥┤ Ω▓░∞á£∞êÿδï¿∞¥ä ∞é¡∞á£φòÿ∞ï£Ω▓á∞è╡δïêΩ╣î?",
    deleteCancelButton: "∞╖¿∞åî",
    deleteConfirmationButton: "∞é¡∞á£",
    fieldEmptyForCvv: "CVVδÑ╝ ∞₧àδáÑφòÿ∞ä╕∞Üö.",
    fieldEmptyForExpirationDate: "δºîδúî∞¥╝∞¥ä ∞₧àδáÑφòÿ∞ä╕∞Üö.",
    fieldEmptyForCardholderName: "∞╣┤δô£ ∞åî∞£á∞₧É ∞¥┤δªä∞¥ä ∞₧àδáÑφòÿ∞ä╕∞Üö.",
    fieldTooLongForCardholderName:
      "∞╣┤δô£ ∞åî∞£á∞₧É ∞¥┤δªä∞¥Ç 256∞₧É δ»╕δºî∞¥┤∞û┤∞ò╝ φò⌐δïêδïñ.",
    fieldEmptyForNumber: "δ▓êφÿ╕δÑ╝ ∞₧àδáÑφòÿ∞ä╕∞Üö.",
    fieldEmptyForPostalCode: "∞Ü░φÄ╕δ▓êφÿ╕δÑ╝ ∞₧àδáÑφòÿ∞ä╕∞Üö.",
    fieldInvalidForCardholderName:
      "∞¥┤ ∞╣┤δô£ ∞åî∞£á∞₧É ∞¥┤δªä∞¥Ç ∞£áφÜ¿φòÿ∞ºÇ ∞òè∞è╡δïêδïñ.",
    fieldInvalidForCvv: "∞¥┤ δ│┤∞òê ∞╜öδô£δèö ∞£áφÜ¿φòÿ∞ºÇ ∞òè∞è╡δïêδïñ.",
    fieldInvalidForExpirationDate:
      "∞¥┤ δºîδúî∞¥╝∞¥Ç ∞£áφÜ¿φòÿ∞ºÇ ∞òè∞è╡δïêδïñ.",
    fieldInvalidForNumber: "∞¥┤ ∞╣┤δô£ δ▓êφÿ╕δèö ∞£áφÜ¿φòÿ∞ºÇ ∞òè∞è╡δïêδïñ.",
    fieldInvalidForPostalCode: "∞¥┤ ∞Ü░φÄ╕δ▓êφÿ╕δèö ∞£áφÜ¿φòÿ∞ºÇ ∞òè∞è╡δïêδïñ.",
    genericError: "∞áÇφ¥¼ ∞¬╜∞ùÉ δ¼╕∞á£Ω░Ç δ░£∞â¥φûê∞è╡δïêδïñ.",
    hostedFieldsTokenizationFailOnDuplicateError:
      "∞¥┤ ∞ïá∞Ü⌐∞╣┤δô£δèö ∞¥┤δ»╕ ∞áÇ∞₧ÑδÉ£ Ω▓░∞á£∞êÿδï¿∞£╝δí£ ∞äñ∞áòδÉÿ∞û┤ ∞₧ê∞è╡δïêδïñ.",
    hostedFieldsFailedTokenizationError:
      "∞áòδ│┤δÑ╝ φÖò∞¥╕φòÿΩ│á δïñ∞ï£ ∞ï£δÅäφò┤ ∞ú╝∞ä╕∞Üö.",
    hostedFieldsFieldsInvalidError:
      "∞áòδ│┤δÑ╝ φÖò∞¥╕φòÿΩ│á δïñ∞ï£ ∞ï£δÅäφò┤ ∞ú╝∞ä╕∞Üö.",
    hostedFieldsTokenizationNetworkErrorError:
      "δäñφè╕∞¢îφü¼ ∞ÿñδÑÿ∞₧àδïêδïñ. δïñ∞ï£ ∞ï£δÅäφò┤ ∞ú╝∞ä╕∞Üö.",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "∞ïá∞Ü⌐∞╣┤δô£ ∞¥╕∞ª¥∞ùÉ ∞ïñφî¿φûê∞è╡δïêδïñ. ∞áòδ│┤δÑ╝ φÖò∞¥╕φòÿΩ│á δïñ∞ï£ ∞ï£δÅäφò┤ ∞ú╝∞ä╕∞Üö.",
    paypalButtonMustBeUsed:
      "PayPal δ▓äφè╝∞¥ä ∞é¼∞Ü⌐φòÿ∞ù¼ Ω▓░∞á£δÑ╝ Ω│ä∞åì ∞ºäφûëφòÿ∞ä╕∞Üö.",
    paypalAccountTokenizationFailedError:
      "PayPal Ω│ä∞áò∞¥ä ∞╢öΩ░Çφòÿδèö ∞ñæ∞ùÉ δ¼╕∞á£Ω░Ç δ░£∞â¥φûê∞è╡δïêδïñ. δïñ∞ï£ ∞ï£δÅäφò┤ ∞ú╝∞ä╕∞Üö.",
    paypalFlowFailedError:
      "PayPal∞ùÉ ∞ù░Ω▓░φòÿδèö δì░ δ¼╕∞á£Ω░Ç δ░£∞â¥φûê∞è╡δïêδïñ. δïñ∞ï£ ∞ï£δÅäφò┤ ∞ú╝∞ä╕∞Üö.",
    paypalTokenizationRequestActiveError:
      "PayPal Ω▓░∞á£ ∞è╣∞¥╕∞¥┤ ∞¥┤δ»╕ ∞ºäφûë ∞ñæ∞₧àδïêδïñ.",
    venmoCanceledError:
      "∞ÿñδÑÿΩ░Ç δ░£∞â¥φûê∞è╡δïêδïñ. Ω╕░Ω╕░∞ùÉ ∞╡£∞ïá δ▓ä∞áä∞¥ÿ Venmo ∞ò▒∞¥┤ ∞äñ∞╣ÿδÉÿ∞û┤ ∞₧êΩ│á δ╕îδ¥╝∞Ü░∞áÇΩ░Ç Venmoδí£∞¥ÿ ∞áäφÖÿ∞¥ä ∞ºÇ∞¢Éφòÿδèö∞ºÇ φÖò∞¥╕φòÿ∞ä╕∞Üö.",
    vaultManagerPaymentMethodDeletionError:
      "Ω▓░∞á£∞êÿδï¿∞¥ä ∞é¡∞á£φòá ∞êÿ ∞ùå∞è╡δïêδïñ. δïñ∞ï£ ∞ï£δÅäφò┤ ∞ú╝∞ä╕∞Üö.",
    venmoAppFailedError: "Ω╕░Ω╕░∞ùÉ∞ä£ Venmo ∞ò▒∞¥ä ∞░╛∞¥ä ∞êÿ ∞ùå∞è╡δïêδïñ.",
    unsupportedCardTypeError:
      "∞¥┤ ∞╣┤δô£ ∞£áφÿò∞¥Ç ∞ºÇ∞¢ÉδÉÿ∞ºÇ ∞òè∞è╡δïêδïñ. δïñδÑ╕ ∞╣┤δô£δí£ ∞ï£δÅäφò┤ ∞ú╝∞ä╕∞Üö.",
    applePayTokenizationError:
      "Apple Pay Ω▓░∞á£δÑ╝ ∞▓ÿδª¼φòÿδèö δÅÖ∞òê δäñφè╕∞¢îφü¼ ∞ÿñδÑÿΩ░Ç δ░£∞â¥φûê∞è╡δïêδïñ. δïñ∞ï£ ∞ï£δÅäφò┤ ∞ú╝∞ä╕∞Üö.",
    applePayActiveCardError:
      "Apple Pay ∞áä∞₧É∞ºÇΩ░æ∞ùÉ ∞ºÇ∞¢ÉδÉÿδèö ∞╣┤δô£δÑ╝ ∞╢öΩ░Çφòÿ∞ä╕∞Üö.",
    cardholderNameLabel: "∞╣┤δô£ ∞åî∞£á∞₧É ∞¥┤δªä",
    cardNumberLabel: "∞╣┤δô£ δ▓êφÿ╕",
    cvvLabel: "CVV",
    cvvThreeDigitLabelSubheading: "(3∞₧Éδª¼)",
    cvvFourDigitLabelSubheading: "(4∞₧Éδª¼)",
    cardholderNamePlaceholder: "∞╣┤δô£ ∞åî∞£á∞₧É ∞¥┤δªä",
    expirationDateLabel: "δºîδúî∞¥╝",
    expirationDateLabelSubheading: "(MM/YY)",
    expirationDatePlaceholder: "MM/YY",
    postalCodeLabel: "∞Ü░φÄ╕δ▓êφÿ╕",
    saveCardLabel: "∞╣┤δô£ ∞áÇ∞₧Ñ",
    payWithCard: "∞╣┤δô£δí£ Ω▓░∞á£",
    endingIn: "δïñ∞¥î∞£╝δí£ δü¥δé¿: {{lastFourCardDigits}}",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "∞╣┤δô£",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal Credit",
    "Google Pay": "Google Pay",
    "American Express": "American Express",
    Discover: "Discover",
    "Diners Club": "Diners Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "UnionPay",
  },
  p9 = {
    payingWith: "Betalen met {{paymentSource}}",
    chooseAnotherWayToPay: "Kies een andere betaalmethode",
    chooseAWayToPay: "Kies een betaalmethode",
    otherWaysToPay: "Andere betaalmethoden",
    edit: "Bewerken",
    doneEditing: "Klaar",
    editPaymentMethods: "Betaalmethoden bewerken",
    CreditCardDeleteConfirmationMessage:
      "{{secondaryIdentifier}}-kaart eindigend op {{identifier}} verwijderen?",
    PayPalAccountDeleteConfirmationMessage:
      "PayPal-rekening {{identifier}} verwijderen?",
    VenmoAccountDeleteConfirmationMessage:
      "Weet je zeker dat je de Venmo-rekening met gebruikersnaam {{identifier}} wilt verwijderen?",
    genericDeleteConfirmationMessage:
      "Weet je zeker dat je deze betaalmethode wilt verwijderen?",
    deleteCancelButton: "Annuleren",
    deleteConfirmationButton: "Verwijderen",
    fieldEmptyForCvv: "Vul een CVV in.",
    fieldEmptyForExpirationDate: "Vul een vervaldatum in.",
    fieldEmptyForCardholderName: "Vul de naam van de kaarthouder in.",
    fieldTooLongForCardholderName:
      "Naam kaarthouder moet minder dan 256 tekens bevatten.",
    fieldEmptyForNumber: "Vul een nummer in.",
    fieldEmptyForPostalCode: "Vul een postcode in.",
    fieldInvalidForCardholderName: "Naam kaarthouder is ongeldig.",
    fieldInvalidForCvv: "Deze beveiligingscode is ongeldig.",
    fieldInvalidForExpirationDate: "Deze vervaldatum is ongeldig.",
    fieldInvalidForNumber: "Dit kaartnummer is ongeldig.",
    fieldInvalidForPostalCode: "Deze postcode is ongeldig.",
    genericError: "Er is aan onze kant iets fout gegaan.",
    hostedFieldsTokenizationFailOnDuplicateError:
      "Deze creditcard bestaat al als opgeslagen betaalmethode.",
    hostedFieldsFailedTokenizationError:
      "Controleer je gegevens en probeer het opnieuw.",
    hostedFieldsFieldsInvalidError:
      "Controleer je gegevens en probeer het opnieuw.",
    hostedFieldsTokenizationNetworkErrorError:
      "Netwerkfout. Probeer het opnieuw.",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "Verificatie van creditcard is mislukt. Controleer je gegevens en probeer het opnieuw.",
    paypalButtonMustBeUsed:
      "Gebruik de PayPal-knop om door te gaan met je betaling.",
    paypalAccountTokenizationFailedError:
      "Er is iets fout gegaan bij het toevoegen van de PayPal-rekening. Probeer het opnieuw.",
    paypalFlowFailedError:
      "Er is iets fout gegaan bij het verbinden met PayPal. Probeer het opnieuw.",
    paypalTokenizationRequestActiveError:
      "PayPal-betaalautorisatie is al in voortgang.",
    venmoCanceledError:
      "Er is iets fout gegaan. Zorg ervoor dat je de recentste versie van de Venmo-app op je apparaat ge\xefnstalleerd hebt en dat je browser ondersteuning biedt voor overschakelen naar Venmo.",
    vaultManagerPaymentMethodDeletionError:
      "Kan betaalmethode niet verwijderen. Probeer het opnieuw.",
    venmoAppFailedError: "De Venmo-app is niet gevonden op je apparaat.",
    unsupportedCardTypeError:
      "Dit kaarttype wordt niet ondersteund. Gebruik een andere kaart.",
    applePayTokenizationError:
      "Er is een netwerkfout opgetreden bij het verwerken van de Apple Pay-betaling. Probeer het opnieuw.",
    applePayActiveCardError:
      "Voeg een ondersteunde kaart toe aan je Apple Pay-wallet.",
    cardholderNameLabel: "Naam kaarthouder",
    cardNumberLabel: "Kaartnummer",
    cvvLabel: "CVV",
    cvvThreeDigitLabelSubheading: "(3 cijfers)",
    cvvFourDigitLabelSubheading: "(4 cijfers)",
    cardholderNamePlaceholder: "Naam kaarthouder",
    expirationDateLabel: "Vervaldatum",
    expirationDateLabelSubheading: "(mm/jj)",
    expirationDatePlaceholder: "mm/jj",
    postalCodeLabel: "Postcode",
    saveCardLabel: "Kaart opslaan",
    payWithCard: "Betalen met kaart",
    endingIn: "Eindigend op {{lastFourCardDigits}}",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "Kaart",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal Credit",
    "Google Pay": "Google Pay",
    "American Express": "American Express",
    Discover: "Discover",
    "Diners Club": "Diners Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "UnionPay",
  },
  ue = {
    payingWith: "Betaler med {{paymentSource}}",
    chooseAnotherWayToPay: "Velg en annen betalingsm\xe5te",
    chooseAWayToPay: "Velg betalingsm\xe5te",
    otherWaysToPay: "Andre betalingsm\xe5ter",
    edit: "Endre",
    doneEditing: "Ferdig",
    editPaymentMethods: "Rediger betalingsmetode",
    CreditCardDeleteConfirmationMessage:
      "Vil du slette {{secondaryIdentifier}}-kortet som slutter p\xe5 {{identifier}}?",
    PayPalAccountDeleteConfirmationMessage:
      "Vil du slette PayPal-konto {{identifier}}?",
    VenmoAccountDeleteConfirmationMessage:
      "Er du sikker p\xe5 at du vil slette Venmo-kontoen med brukernavnet {{identifier}}?",
    genericDeleteConfirmationMessage:
      "Er du sikker p\xe5 at du vil slette denne betalingsmetoden?",
    deleteCancelButton: "Avbryt",
    deleteConfirmationButton: "Slett",
    fieldEmptyForCvv: "Fyll ut sikkerhetskode (CVV).",
    fieldEmptyForExpirationDate: "Fyll ut utl\xf8psdato.",
    fieldEmptyForCardholderName: "Fyll ut kortinnehavers navn.",
    fieldTooLongForCardholderName:
      "Kortinnehaverens m\xe5 ha mindre enn 256 tegn.",
    fieldEmptyForNumber: "Fyll ut nummer.",
    fieldEmptyForPostalCode: "Fyll ut postnummer.",
    fieldInvalidForCardholderName:
      "Denne kortinnehaverens navn er ikke gyldig.",
    fieldInvalidForCvv: "Denne sikkerhetskoden er ikke gyldig.",
    fieldInvalidForExpirationDate: "Denne utl\xf8psdatoen er ikke gyldig.",
    fieldInvalidForNumber: "Dette kortnummeret er ikke gyldig.",
    fieldInvalidForPostalCode: "Dette postnummeret er ikke gyldig.",
    genericError: "Noe gikk galt hos oss.",
    hostedFieldsTokenizationFailOnDuplicateError:
      "Dette betalingskortet finnes allerede som en lagret betalingsmetode.",
    hostedFieldsFailedTokenizationError:
      "Kontroller informasjonen, og pr\xf8v p\xe5 nytt.",
    hostedFieldsFieldsInvalidError:
      "Kontroller informasjonen, og pr\xf8v p\xe5 nytt.",
    hostedFieldsTokenizationNetworkErrorError:
      "Nettverksfeil. Pr\xf8v p\xe5 nytt.",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "Kontroll av betalingskort mislyktes. Kontroller informasjonen, og pr\xf8v p\xe5 nytt.",
    paypalButtonMustBeUsed:
      "Bruk PayPal-knappen for \xe5 fortsette med betalingen.",
    paypalAccountTokenizationFailedError:
      "Kan ikke legge til PayPal-kontoen. Pr\xf8v p\xe5 nytt.",
    paypalFlowFailedError: "Kan ikke koble til PayPal. Pr\xf8v p\xe5 nytt.",
    paypalTokenizationRequestActiveError:
      "PayPals prosess for betalingsgodkjenning har allerede startet.",
    venmoCanceledError:
      "Noe gikk galt. Kontroller at den nyeste versjonen av Venmo-appen er installert p\xe5 enheten din, og at nettleseren din st\xf8tter bruk av Venmo.",
    vaultManagerPaymentMethodDeletionError:
      "Kan ikke slette betalingsmetoden. Pr\xf8v p\xe5 nytt.",
    venmoAppFailedError: "Finner ikke Venmo-appen p\xe5 enheten.",
    unsupportedCardTypeError:
      "Denne korttypen st\xf8ttes ikke. Pr\xf8v et annet kort.",
    applePayTokenizationError:
      "Nettverksfeil under behandling av Apple Pay-betalingen. Pr\xf8v p\xe5 nytt.",
    applePayActiveCardError:
      "Legg til et st\xf8ttet kort i e-lommeboken for Apple Pay.",
    cardholderNameLabel: "Kortinnehavers navn",
    cardNumberLabel: "Kortnummer",
    cvvLabel: "CVV",
    cvvThreeDigitLabelSubheading: "(3 sifre)",
    cvvFourDigitLabelSubheading: "(4 sifre)",
    cardholderNamePlaceholder: "Kortinnehavers navn",
    expirationDateLabel: "Utl\xf8psdato",
    expirationDateLabelSubheading: "(MM/\xc5\xc5)",
    expirationDatePlaceholder: "MM/\xc5\xc5",
    postalCodeLabel: "Postnummer",
    saveCardLabel: "Lagre kort",
    payWithCard: "Betal med kort",
    endingIn: "Slutter p\xe5 {{lastFourCardDigits}}",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "Kort",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal Credit",
    "Google Pay": "Google Pay",
    "American Express": "American Express",
    Discover: "Discover",
    "Diners Club": "Diners Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "UnionPay",
  },
  ut = {
    payingWith: "┼╣r\xf3d┼éo finansowania p┼éatno┼¢ci: {{paymentSource}}",
    chooseAnotherWayToPay: "Wybierz inny spos\xf3b p┼éatno┼¢ci.",
    chooseAWayToPay: "Wybierz spos\xf3b p┼éatno┼¢ci",
    otherWaysToPay: "Inne sposoby p┼éatno┼¢ci",
    edit: "Edytuj",
    doneEditing: "Gotowe",
    editPaymentMethods: "Edytuj formy p┼éatno┼¢ci",
    CreditCardDeleteConfirmationMessage:
      "Usun─à─ç kart─Ö {{secondaryIdentifier}} o numerze zako┼äczonym cyframi {{identifier}}?",
    PayPalAccountDeleteConfirmationMessage:
      "Usun─à─ç {{identifier}}konta PayPal?",
    VenmoAccountDeleteConfirmationMessage:
      "Czy na pewno chcesz usun─à─ç konto Venmo o nazwie u┼╝ytkownika {{identifier}}?",
    genericDeleteConfirmationMessage:
      "Na pewno chcesz usun─à─ç t─Ö form─Ö p┼éatno┼¢ci?",
    deleteCancelButton: "Anuluj",
    deleteConfirmationButton: "Usu┼ä",
    fieldEmptyForCvv: "Wpisz kod CVV.",
    fieldEmptyForExpirationDate: "Wpisz dat─Ö wa┼╝no┼¢ci.",
    fieldEmptyForCardholderName: "Podaj imi─Ö i nazwisko posiadacza karty.",
    fieldTooLongForCardholderName:
      "Imi─Ö i nazwisko posiadacza karty musi mie─ç mniej ni┼╝ 256 znak\xf3w.",
    fieldEmptyForNumber: "Podaj numer.",
    fieldEmptyForPostalCode: "Podaj kod pocztowy.",
    fieldInvalidForCardholderName:
      "To imi─Ö i nazwisko posiadacza karty jest nieprawid┼éowe.",
    fieldInvalidForCvv: "Ten kod bezpiecze┼ästwa jest nieprawid┼éowy.",
    fieldInvalidForExpirationDate: "Ta data wa┼╝no┼¢ci jest nieprawid┼éowa.",
    fieldInvalidForNumber: "Numer karty jest nieprawid┼éowy.",
    fieldInvalidForPostalCode: "Kod pocztowy jest nieprawid┼éowy.",
    genericError: "Wyst─àpi┼é b┼é─àd po naszej stronie.",
    hostedFieldsTokenizationFailOnDuplicateError:
      "Ta karta kredytowa istnieje jako zapisana forma p┼éatno┼¢ci.",
    hostedFieldsFailedTokenizationError:
      "Sprawd┼║ swoje informacje i spr\xf3buj ponownie.",
    hostedFieldsFieldsInvalidError:
      "Sprawd┼║ swoje informacje i spr\xf3buj ponownie.",
    hostedFieldsTokenizationNetworkErrorError:
      "B┼é─àd sieci. Spr\xf3buj ponownie.",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "Weryfikacja karty kredytowej nie powiod┼éa si─Ö. Sprawd┼║ swoje informacje i spr\xf3buj ponownie.",
    paypalButtonMustBeUsed:
      "Aby kontynuowa─ç p┼éatno┼¢─ç, u┼╝yj przycisku PayPal.",
    paypalAccountTokenizationFailedError:
      "Co┼¢ posz┼éo nie tak przy dodawaniu konta PayPal. Spr\xf3buj ponownie.",
    paypalFlowFailedError:
      "Wyst─àpi┼é problem przy nawi─àzywaniu po┼é─àczenia z PayPal. Spr\xf3buj ponownie.",
    paypalTokenizationRequestActiveError:
      "Autoryzacja p┼éatno┼¢ci PayPal jest w trakcie realizacji.",
    venmoCanceledError:
      "Co┼¢ posz┼éo nie tak. Upewnij si─Ö, ┼╝e na Twoim urz─àdzeniu jest zainstalowana najnowsza wersja aplikacji Venmo, a Twoja przegl─àdarka obs┼éuguje prze┼é─àczanie na Venmo.",
    vaultManagerPaymentMethodDeletionError:
      "Nie mo┼╝na usun─à─ç formy p┼éatno┼¢ci, spr\xf3buj ponownie.",
    venmoAppFailedError:
      "Aplikacja Venmo nie zosta┼éa odnaleziona na Twoim urz─àdzeniu.",
    unsupportedCardTypeError:
      "Ten typ karty nie jest obs┼éugiwany. Spr\xf3buj u┼╝y─ç innej karty.",
    applePayTokenizationError:
      "Wyst─àpi┼é b┼é─àd sieciowy podczas przetwarzania p┼éatno┼¢ci Apple Pay. Spr\xf3buj ponownie.",
    applePayActiveCardError:
      "Dodaj obs┼éugiwan─à kart─Ö do portfela Apple Pay.",
    cardholderNameLabel: "Imi─Ö i nazwisko posiadacza karty",
    cardNumberLabel: "Numer karty",
    cvvLabel: "Kod CVV/CVC2",
    cvvThreeDigitLabelSubheading: "(3 cyfry)",
    cvvFourDigitLabelSubheading: "(4 cyfry)",
    cardholderNamePlaceholder: "Imi─Ö i nazwisko posiadacza karty",
    expirationDateLabel: "Data wa┼╝no┼¢ci",
    expirationDateLabelSubheading: "(MM/RR)",
    expirationDatePlaceholder: "MM/RR",
    postalCodeLabel: "Kod pocztowy",
    saveCardLabel: "Zapisz kart─Ö",
    payWithCard: "Zap┼éa─ç kart─à",
    endingIn: "Numer zako┼äczonym cyframi {{lastFourCardDigits}}",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "Karta",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal Credit",
    "Google Pay": "Google Pay",
    "American Express": "American Express",
    Discover: "Discover",
    "Diners Club": "Diners Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "UnionPay",
  },
  un = {
    payingWith: "Pagando com {{paymentSource}}",
    chooseAnotherWayToPay: "Escolha outro meio de pagamento",
    chooseAWayToPay: "Escolha um meio de pagamento",
    otherWaysToPay: "Outras formas de pagar",
    edit: "Editar",
    doneEditing: "Conclu\xeddo",
    editPaymentMethods: "Editar meios de pagamento",
    CreditCardDeleteConfirmationMessage:
      "Excluir cart\xe3o {{secondaryIdentifier}} de final {{identifier}}?",
    PayPalAccountDeleteConfirmationMessage:
      "Excluir conta do PayPal {{identifier}}?",
    VenmoAccountDeleteConfirmationMessage:
      "Tem certeza de que deseja excluir a conta do Venmo com nome de usu\xe1rio {{identifier}}?",
    genericDeleteConfirmationMessage:
      "Tem certeza que deseja excluir este meio de pagamento?",
    deleteCancelButton: "Cancelar",
    deleteConfirmationButton: "Excluir",
    fieldEmptyForCvv: "Preencha um CVV.",
    fieldEmptyForExpirationDate: "Preencha uma data de vencimento.",
    fieldEmptyForCardholderName:
      "Preencha um nome para o titular do cart\xe3o.",
    fieldTooLongForCardholderName:
      "O nome do titular do cart\xe3o deve ter menos de 256 caracteres.",
    fieldEmptyForNumber: "Preencha um n\xfamero.",
    fieldEmptyForPostalCode: "Preencha um c\xf3digo postal.",
    fieldInvalidForCardholderName:
      "O nome do titular do cart\xe3o \xe9 inv\xe1lido.",
    fieldInvalidForCvv: "Este c\xf3digo de seguran\xe7a \xe9 inv\xe1lido.",
    fieldInvalidForExpirationDate: "Esta data de vencimento \xe9 inv\xe1lida.",
    fieldInvalidForNumber: "O n\xfamero do cart\xe3o \xe9 inv\xe1lido.",
    fieldInvalidForPostalCode: "Este c\xf3digo postal \xe9 inv\xe1lido.",
    genericError: "Ocorreu um erro.",
    hostedFieldsTokenizationFailOnDuplicateError:
      "Este cart\xe3o de cr\xe9dito j\xe1 existe como um meio de pagamento salvo.",
    hostedFieldsFailedTokenizationError:
      "Verifique as informa\xe7\xf5es e tente novamente.",
    hostedFieldsFieldsInvalidError:
      "Verifique as informa\xe7\xf5es e tente novamente.",
    hostedFieldsTokenizationNetworkErrorError: "Erro de rede. Tente novamente.",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "Falha na verifica\xe7\xe3o do cart\xe3o de cr\xe9dito. Verifique as informa\xe7\xf5es e tente novamente.",
    paypalButtonMustBeUsed:
      "Use o bot\xe3o do PayPal para prosseguir com o pagamento.",
    paypalAccountTokenizationFailedError:
      "Ocorreu um erro ao adicionar a conta do PayPal. Tente novamente.",
    paypalFlowFailedError:
      "Ocorreu um erro na conex\xe3o com o PayPal. Tente novamente.",
    paypalTokenizationRequestActiveError:
      "A autoriza\xe7\xe3o de pagamento do PayPal j\xe1 est\xe1 em andamento.",
    venmoCanceledError:
      "Ocorreu um erro. Certifique-se de que voc\xea tenha a vers\xe3o mais recente do aplicativo Venmo instalada no seu dispositivo, e que seu navegador aceite a mudan\xe7a para o Venmo.",
    vaultManagerPaymentMethodDeletionError:
      "N\xe3o \xe9 poss\xedvel excluir o meio de pagamento, tente novamente.",
    venmoAppFailedError:
      "O aplicativo Venmo n\xe3o foi encontrado no seu dispositivo.",
    unsupportedCardTypeError:
      "Este tipo de cart\xe3o n\xe3o \xe9 aceito. Tente outro cart\xe3o.",
    applePayTokenizationError:
      "Ocorreu um erro de rede ao processar o pagamento do Apple Pay. Tente novamente.",
    applePayActiveCardError:
      "Adicione um cart\xe3o compat\xedvel \xe0 sua carteira Apple Pay.",
    cardholderNameLabel: "Nome do titular do cart\xe3o",
    cardNumberLabel: "N\xfamero do cart\xe3o",
    cvvLabel: "CSC",
    cvvThreeDigitLabelSubheading: "(3 d\xedgitos)",
    cvvFourDigitLabelSubheading: "(4 d\xedgitos)",
    cardholderNamePlaceholder: "Nome do titular do cart\xe3o",
    expirationDateLabel: "Data de vencimento",
    expirationDateLabelSubheading: "(MM/AA)",
    expirationDatePlaceholder: "MM/AA",
    postalCodeLabel: "CEP",
    saveCardLabel: "Salvar cart\xe3o",
    payWithCard: "Pague com seu cart\xe3o de cr\xe9dito",
    endingIn: "De final {{lastFourCardDigits}}",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "Cart\xe3o",
    PayPal: "PayPal",
    "PayPal Credit": "Cr\xe9dito do PayPal",
    "Google Pay": "Google Pay",
    "American Express": "American Express",
    Discover: "Descobrir",
    "Diners Club": "Diners Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "UnionPay",
  },
  ur = {
    payingWith: "Pagamento com {{paymentSource}}",
    chooseAnotherWayToPay: "Escolher outra forma de pagamento",
    chooseAWayToPay: "Escolher forma de pagamento",
    otherWaysToPay: "Outras formas de pagamento",
    edit: "Editar",
    doneEditing: "Conclu\xeddo",
    editPaymentMethods: "Editar meios de pagamento",
    CreditCardDeleteConfirmationMessage:
      "Eliminar cart\xe3o {{secondaryIdentifier}} terminado em {{identifier}}?",
    PayPalAccountDeleteConfirmationMessage:
      "Eliminar conta PayPal {{identifier}}?",
    VenmoAccountDeleteConfirmationMessage:
      "Quer mesmo eliminar a conta Venmo com o nome de utilizador {{identifier}}?",
    genericDeleteConfirmationMessage:
      "Quer mesmo eliminar este meio de pagamento?",
    deleteCancelButton: "Cancelar",
    deleteConfirmationButton: "Eliminar",
    fieldEmptyForCvv: "Introduza um CVV.",
    fieldEmptyForExpirationDate: "Introduza uma data de validade.",
    fieldEmptyForCardholderName: "Introduza um nome do titular do cart\xe3o.",
    fieldTooLongForCardholderName:
      "O Nome do titular do cart\xe3o deve ter menos de 256\xa0carateres.",
    fieldEmptyForNumber: "Introduza um n\xfamero.",
    fieldEmptyForPostalCode: "Introduza um c\xf3digo postal.",
    fieldInvalidForCardholderName:
      "Este nome do titular do cart\xe3o n\xe3o \xe9 v\xe1lido.",
    fieldInvalidForCvv: "Este c\xf3digo de seguran\xe7a n\xe3o \xe9 v\xe1lido.",
    fieldInvalidForExpirationDate:
      "Esta data de validade n\xe3o \xe9 v\xe1lida.",
    fieldInvalidForNumber: "Este n\xfamero de cart\xe3o n\xe3o \xe9 v\xe1lido.",
    fieldInvalidForPostalCode: "Este c\xf3digo postal n\xe3o \xe9 v\xe1lido.",
    genericError: "Tudo indica que houve um problema.",
    hostedFieldsTokenizationFailOnDuplicateError:
      "Este cart\xe3o de cr\xe9dito j\xe1 existe como meio de pagamento guardado.",
    hostedFieldsFailedTokenizationError:
      "Verifique as suas informa\xe7\xf5es e tente novamente.",
    hostedFieldsFieldsInvalidError:
      "Verifique as suas informa\xe7\xf5es e tente novamente.",
    hostedFieldsTokenizationNetworkErrorError: "Erro de rede. Tente novamente.",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "A verifica\xe7\xe3o do cart\xe3o de cr\xe9dito falhou. Verifique as suas informa\xe7\xf5es e tente novamente.",
    paypalButtonMustBeUsed:
      "Use o bot\xe3o PayPal para continuar o seu pagamento.",
    paypalAccountTokenizationFailedError:
      "Ocorreu um erro ao adicionar a conta PayPal. Tente novamente.",
    paypalFlowFailedError:
      "Ocorreu um erro ao ligar ao PayPal. Tente novamente.",
    paypalTokenizationRequestActiveError:
      "A autoriza\xe7\xe3o de pagamento com PayPal j\xe1 est\xe1 em curso.",
    venmoCanceledError:
      "Ocorreu um erro. Certifique-se de que tem a vers\xe3o mais recente da aplica\xe7\xe3o Venmo instalada no seu dispositivo e que o seu navegador suporta a mudan\xe7a para Venmo.",
    vaultManagerPaymentMethodDeletionError:
      "N\xe3o \xe9 poss\xedvel eliminar o meio de pagamento; tente novamente.",
    venmoAppFailedError:
      "A aplica\xe7\xe3o Venmo n\xe3o foi encontrada no seu dispositivo.",
    unsupportedCardTypeError:
      "Este tipo de cart\xe3o n\xe3o \xe9 suportado. Tente com outro cart\xe3o.",
    applePayTokenizationError:
      "Ocorreu um erro de rede ao processar o pagamento com Apple Pay. Tente novamente.",
    applePayActiveCardError:
      "Adicione um cart\xe3o suportado \xe0 sua carteira Apple Pay.",
    cardholderNameLabel: "Nome do titular do cart\xe3o",
    cardNumberLabel: "N\xfamero do cart\xe3o",
    cvvLabel: "CVV",
    cvvThreeDigitLabelSubheading: "(3\xa0d\xedgitos)",
    cvvFourDigitLabelSubheading: "(4\xa0d\xedgitos)",
    cardholderNamePlaceholder: "Nome do titular do cart\xe3o",
    expirationDateLabel: "Data de validade",
    expirationDateLabelSubheading: "(MM/AA)",
    expirationDatePlaceholder: "MM/AA",
    postalCodeLabel: "C\xf3digo postal",
    saveCardLabel: "Guardar cart\xe3o",
    payWithCard: "Pagar com cart\xe3o",
    endingIn: "Termina em {{lastFourCardDigits}}",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "Cart\xe3o",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal Credit",
    "Google Pay": "Google Pay",
    "American Express": "American Express",
    Discover: "Discover",
    "Diners Club": "Diners Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "UnionPay",
  },
  ui = {
    payingWith: "╨₧╨┐╨╗╨░╤é╨░ ╤ü ╨┐╨╛╨╝╨╛╤ë╤î╤Ä {{paymentSource}}",
    chooseAnotherWayToPay:
      "╨Æ╤ï╨▒╨╡╤Ç╨╕╤é╨╡ ╨┤╤Ç╤â╨│╨╛╨╣ ╤ü╨┐╨╛╤ü╨╛╨▒ ╨╛╨┐╨╗╨░╤é╤ï",
    chooseAWayToPay: "╨Æ╤ï╨▒╨╡╤Ç╨╕╤é╨╡ ╤ü╨┐╨╛╤ü╨╛╨▒ ╨╛╨┐╨╗╨░╤é╤ï",
    otherWaysToPay: "╨ö╤Ç╤â╨│╨╕╨╡ ╤ü╨┐╨╛╤ü╨╛╨▒╤ï ╨╛╨┐╨╗╨░╤é╤ï",
    edit: "╨ÿ╨╖╨╝╨╡╨╜╨╕╤é╤î",
    doneEditing: "╨ô╨╛╤é╨╛╨▓╨╛",
    editPaymentMethods: "╨ÿ╨╖╨╝╨╡╨╜╨╕╤é╤î ╤ü╨┐╨╛╤ü╨╛╨▒╤ï ╨╛╨┐╨╗╨░╤é╤ï",
    CreditCardDeleteConfirmationMessage:
      "╨ú╨┤╨░╨╗╨╕╤é╤î ╨║╨░╤Ç╤é╤â {{secondaryIdentifier}} ╤ü ╨╜╨╛╨╝╨╡╤Ç╨╛╨╝, ╨╖╨░╨║╨░╨╜╤ç╨╕╨▓╨░╤Ä╤ë╨╕╨╝╤ü╤Å ╨╜╨░ {{identifier}}?",
    PayPalAccountDeleteConfirmationMessage:
      "╨ú╨┤╨░╨╗╨╕╤é╤î ╤ü╤ç╨╡╤é PayPal {{identifier}}?",
    VenmoAccountDeleteConfirmationMessage:
      "╨Æ╤ï ╨┤╨╡╨╣╤ü╤é╨▓╨╕╤é╨╡╨╗╤î╨╜╨╛ ╤à╨╛╤é╨╕╤é╨╡ ╤â╨┤╨░╨╗╨╕╤é╤î ╤ü╤ç╨╡╤é Venmo ╤ü ╨╕╨╝╨╡╨╜╨╡╨╝ ╨┐╨╛╨╗╤î╨╖╨╛╨▓╨░╤é╨╡╨╗╤Å {{identifier}}?",
    genericDeleteConfirmationMessage:
      "╨Æ╤ï ╨┤╨╡╨╣╤ü╤é╨▓╨╕╤é╨╡╨╗╤î╨╜╨╛ ╤à╨╛╤é╨╕╤é╨╡ ╤â╨┤╨░╨╗╨╕╤é╤î ╤ì╤é╨╛╤é ╤ü╨┐╨╛╤ü╨╛╨▒ ╨╛╨┐╨╗╨░╤é╤ï?",
    deleteCancelButton: "╨₧╤é╨╝╨╡╨╜╨░",
    deleteConfirmationButton: "╨ú╨┤╨░╨╗╨╕╤é╤î",
    fieldEmptyForCvv: "╨ú╨║╨░╨╢╨╕╤é╨╡ ╨║╨╛╨┤ ╨▒╨╡╨╖╨╛╨┐╨░╤ü╨╜╨╛╤ü╤é╨╕.",
    fieldEmptyForExpirationDate:
      "╨ú╨║╨░╨╢╨╕╤é╨╡ ╨┤╨░╤é╤â ╨╛╨║╨╛╨╜╤ç╨░╨╜╨╕╤Å ╤ü╤Ç╨╛╨║╨░ ╨┤╨╡╨╣╤ü╤é╨▓╨╕╤Å.",
    fieldEmptyForCardholderName:
      "╨ú╨║╨░╨╢╨╕╤é╨╡ ╨╕╨╝╤Å ╨▓╨╗╨░╨┤╨╡╨╗╤î╤å╨░ ╨║╨░╤Ç╤é╤ï.",
    fieldTooLongForCardholderName:
      "╨ÿ╨╝╤Å ╨▓╨╗╨░╨┤╨╡╨╗╤î╤å╨░ ╨║╨░╤Ç╤é╤ï ╨┤╨╛╨╗╨╢╨╜╨╛ ╤ü╨╛╨┤╨╡╤Ç╨╢╨░╤é╤î ╨╜╨╡ ╨▒╨╛╨╗╨╡╨╡ 256 ╤ü╨╕╨╝╨▓╨╛╨╗╨╛╨▓.",
    fieldEmptyForNumber: "╨ú╨║╨░╨╢╨╕╤é╨╡ ╨╜╨╛╨╝╨╡╤Ç.",
    fieldEmptyForPostalCode: "╨ú╨║╨░╨╢╨╕╤é╨╡ ╨┐╨╛╤ç╤é╨╛╨▓╤ï╨╣ ╨╕╨╜╨┤╨╡╨║╤ü.",
    fieldInvalidForCardholderName:
      "╨¥╨╡╨┤╨╛╨┐╤â╤ü╤é╨╕╨╝╨╛╨╡ ╨╕╨╝╤Å ╨▓╨╗╨░╨┤╨╡╨╗╤î╤å╨░ ╨║╨░╤Ç╤é╤ï.",
    fieldInvalidForCvv:
      "╨¥╨╡╨┤╨╛╨┐╤â╤ü╤é╨╕╨╝╤ï╨╣ ╨║╨╛╨┤ ╨▒╨╡╨╖╨╛╨┐╨░╤ü╨╜╨╛╤ü╤é╨╕.",
    fieldInvalidForExpirationDate:
      "╨¥╨╡╨┤╨╛╨┐╤â╤ü╤é╨╕╨╝╨░╤Å ╨┤╨░╤é╨░ ╨╕╤ü╤é╨╡╤ç╨╡╨╜╨╕╤Å ╤ü╤Ç╨╛╨║╨░ ╨┤╨╡╨╣╤ü╤é╨▓╨╕╤Å.",
    fieldInvalidForNumber: "╨¥╨╡╨┤╨╛╨┐╤â╤ü╤é╨╕╨╝╤ï╨╣ ╨╜╨╛╨╝╨╡╤Ç ╨║╨░╤Ç╤é╤ï.",
    fieldInvalidForPostalCode:
      "╨¥╨╡╨┤╨╛╨┐╤â╤ü╤é╨╕╨╝╤ï╨╣ ╨┐╨╛╤ç╤é╨╛╨▓╤ï╨╣ ╨╕╨╜╨┤╨╡╨║╤ü.",
    genericError:
      "╨Æ╨╛╨╖╨╜╨╕╨║╨╗╨░ ╨┐╤Ç╨╛╨▒╨╗╨╡╨╝╨░ ╤ü ╨╜╨░╤ê╨╡╨╣ ╤ü╤é╨╛╤Ç╨╛╨╜╤ï.",
    hostedFieldsTokenizationFailOnDuplicateError:
      "╨ö╨░╨╜╨╜╨░╤Å ╨║╤Ç╨╡╨┤╨╕╤é╨╜╨░╤Å ╨║╨░╤Ç╤é╨░ ╤â╨╢╨╡ ╤ü╤â╤ë╨╡╤ü╤é╨▓╤â╨╡╤é ╨║╨░╨║ ╤ü╨╛╤à╤Ç╨░╨╜╨╡╨╜╨╜╤ï╨╣ ╤ü╨┐╨╛╤ü╨╛╨▒ ╨╛╨┐╨╗╨░╤é╤ï.",
    hostedFieldsFailedTokenizationError:
      "╨ƒ╤Ç╨╛╨▓╨╡╤Ç╤î╤é╨╡ ╨┐╤Ç╨░╨▓╨╕╨╗╤î╨╜╨╛╤ü╤é╤î ╨▓╨▓╨╛╨┤╨░ ╨┤╨░╨╜╨╜╤ï╤à ╨╕ ╨┐╨╛╨▓╤é╨╛╤Ç╨╕╤é╨╡ ╨┐╨╛╨┐╤ï╤é╨║╤â.",
    hostedFieldsFieldsInvalidError:
      "╨ƒ╤Ç╨╛╨▓╨╡╤Ç╤î╤é╨╡ ╨┐╤Ç╨░╨▓╨╕╨╗╤î╨╜╨╛╤ü╤é╤î ╨▓╨▓╨╛╨┤╨░ ╨┤╨░╨╜╨╜╤ï╤à ╨╕ ╨┐╨╛╨▓╤é╨╛╤Ç╨╕╤é╨╡ ╨┐╨╛╨┐╤ï╤é╨║╤â.",
    hostedFieldsTokenizationNetworkErrorError:
      "╨í╨▒╨╛╨╣ ╤ü╨╡╤é╨╕. ╨ƒ╨╛╨▓╤é╨╛╤Ç╨╕╤é╨╡ ╨┐╨╛╨┐╤ï╤é╨║╤â.",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "╨í╨▒╨╛╨╣ ╨┐╤Ç╨╕ ╨┐╤Ç╨╛╨▓╨╡╤Ç╨║╨╡ ╨║╤Ç╨╡╨┤╨╕╤é╨╜╨╛╨╣ ╨║╨░╤Ç╤é╤ï. ╨ƒ╤Ç╨╛╨▓╨╡╤Ç╤î╤é╨╡ ╨┐╤Ç╨░╨▓╨╕╨╗╤î╨╜╨╛╤ü╤é╤î ╨▓╨▓╨╛╨┤╨░ ╨┤╨░╨╜╨╜╤ï╤à ╨╕ ╨┐╨╛╨▓╤é╨╛╤Ç╨╕╤é╨╡ ╨┐╨╛╨┐╤ï╤é╨║╤â.",
    paypalButtonMustBeUsed:
      "╨ÿ╤ü╨┐╨╛╨╗╤î╨╖╤â╨╣╤é╨╡ ╨║╨╜╨╛╨┐╨║╤â PayPal, ╤ç╤é╨╛╨▒╤ï ╨┐╤Ç╨╛╨┤╨╛╨╗╨╢╨╕╤é╤î ╨╛╨┐╨╗╨░╤é╤â.",
    paypalAccountTokenizationFailedError:
      "╨Æ╨╛╨╖╨╜╨╕╨║╨╗╨░ ╨╛╤ê╨╕╨▒╨║╨░ ╨┐╤Ç╨╕ ╨┤╨╛╨▒╨░╨▓╨╗╨╡╨╜╨╕╨╕ ╤ü╤ç╨╡╤é╨░ PayPal. ╨ƒ╨╛╨▓╤é╨╛╤Ç╨╕╤é╨╡ ╨┐╨╛╨┐╤ï╤é╨║╤â.",
    paypalFlowFailedError:
      "╨Æ╨╛╨╖╨╜╨╕╨║╨╗╨░ ╨╛╤ê╨╕╨▒╨║╨░ ╨┐╤Ç╨╕ ╨┐╨╛╨┤╨║╨╗╤Ä╤ç╨╡╨╜╨╕╨╕ ╨║ PayPal. ╨ƒ╨╛╨▓╤é╨╛╤Ç╨╕╤é╨╡ ╨┐╨╛╨┐╤ï╤é╨║╤â.",
    paypalTokenizationRequestActiveError:
      "╨É╨▓╤é╨╛╤Ç╨╕╨╖╨░╤å╨╕╤Å ╨┐╨╗╨░╤é╨╡╨╢╨░ ╤ç╨╡╤Ç╨╡╨╖ PayPal ╤â╨╢╨╡ ╨▓╤ï╨┐╨╛╨╗╨╜╤Å╨╡╤é╤ü╤Å.",
    venmoCanceledError:
      "╨Æ╨╛╨╖╨╜╨╕╨║╨╗╨░ ╨╛╤ê╨╕╨▒╨║╨░. ╨ú╨▒╨╡╨┤╨╕╤é╨╡╤ü╤î, ╤ç╤é╨╛ ╨╜╨░ ╨▓╨░╤ê╨╡╨╝ ╤â╤ü╤é╤Ç╨╛╨╣╤ü╤é╨▓╨╡ ╤â╤ü╤é╨░╨╜╨╛╨▓╨╗╨╡╨╜╨░ ╤ü╨░╨╝╨░╤Å ╨┐╨╛╤ü╨╗╨╡╨┤╨╜╤Å╤Å ╨▓╨╡╤Ç╤ü╨╕╤Å ╨┐╤Ç╨╕╨╗╨╛╨╢╨╡╨╜╨╕╤Å Venmo ╨╕ ╨▒╤Ç╨░╤â╨╖╨╡╤Ç ╨┐╨╛╨┤╨┤╨╡╤Ç╨╢╨╕╨▓╨░╨╡╤é ╨┐╨╡╤Ç╨╡╤à╨╛╨┤ ╨╜╨░ Venmo.",
    vaultManagerPaymentMethodDeletionError:
      "╨¥╨╡ ╤â╨┤╨░╨╗╨╛╤ü╤î ╤â╨┤╨░╨╗╨╕╤é╤î ╤ü╨┐╨╛╤ü╨╛╨▒ ╨╛╨┐╨╗╨░╤é╤ï, ╨┐╨╛╨▓╤é╨╛╤Ç╨╕╤é╨╡ ╨┐╨╛╨┐╤ï╤é╨║╤â.",
    venmoAppFailedError:
      "╨ƒ╤Ç╨╕╨╗╨╛╨╢╨╡╨╜╨╕╨╡ Venmo ╨╜╨╡ ╤â╨┤╨░╨╡╤é╤ü╤Å ╨╛╨▒╨╜╨░╤Ç╤â╨╢╨╕╤é╤î ╨╜╨░ ╨▓╨░╤ê╨╡╨╝ ╤â╤ü╤é╤Ç╨╛╨╣╤ü╤é╨▓╨╡.",
    unsupportedCardTypeError:
      "╨ö╨░╨╜╨╜╤ï╨╣ ╤é╨╕╨┐ ╨║╨░╤Ç╤é╤ï ╨╜╨╡ ╨┐╨╛╨┤╨┤╨╡╤Ç╨╢╨╕╨▓╨░╨╡╤é╤ü╤Å. ╨ƒ╨╛╨┐╤Ç╨╛╨▒╤â╨╣╤é╨╡ ╨▓╨╛╤ü╨┐╨╛╨╗╤î╨╖╨╛╨▓╨░╤é╤î╤ü╤Å ╨┤╤Ç╤â╨│╨╛╨╣ ╨║╨░╤Ç╤é╨╛╨╣.",
    applePayTokenizationError:
      "╨Æ╨╛╨╖╨╜╨╕╨║╨╗╨░ ╨╛╤ê╨╕╨▒╨║╨░ ╤ü╨╡╤é╨╕ ╨┐╤Ç╨╕ ╨╛╨▒╤Ç╨░╨▒╨╛╤é╨║╨╡ ╨┐╨╗╨░╤é╨╡╨╢╨░ Apple Pay. ╨ƒ╨╛╨▓╤é╨╛╤Ç╨╕╤é╨╡ ╨┐╨╛╨┐╤ï╤é╨║╤â.",
    applePayActiveCardError:
      "╨ö╨╛╨▒╨░╨▓╤î╤é╨╡ ╨┐╨╛╨┤╨┤╨╡╤Ç╨╢╨╕╨▓╨░╨╡╨╝╤â╤Ä ╨║╨░╤Ç╤é╤â ╨▓ ╨▓╨░╤ê ╤ü╤ç╨╡╤é Apple Pay.",
    cardholderNameLabel: "╨ÿ╨╝╤Å ╨▓╨╗╨░╨┤╨╡╨╗╤î╤å╨░ ╨║╨░╤Ç╤é╤ï",
    cardNumberLabel: "╨¥╨╛╨╝╨╡╤Ç ╨║╨░╤Ç╤é╤ï",
    cvvLabel: "╨Ü╨╛╨┤ ╨▒╨╡╨╖╨╛╨┐╨░╤ü╨╜╨╛╤ü╤é╨╕ ╨║╨░╤Ç╤é╤ï CVV",
    cvvThreeDigitLabelSubheading: "(3 ╤å╨╕╤ä╤Ç╤ï)",
    cvvFourDigitLabelSubheading: "(4 ╤å╨╕╤ä╤Ç╤ï)",
    cardholderNamePlaceholder: "╨ÿ╨╝╤Å ╨▓╨╗╨░╨┤╨╡╨╗╤î╤å╨░ ╨║╨░╤Ç╤é╤ï",
    expirationDateLabel:
      "╨ö╨░╤é╨░ ╨╛╨║╨╛╨╜╤ç╨░╨╜╨╕╤Å ╤ü╤Ç╨╛╨║╨░ ╨┤╨╡╨╣╤ü╤é╨▓╨╕╤Å",
    expirationDateLabelSubheading: "(╨£╨£/╨ô╨ô)",
    expirationDatePlaceholder: "╨£╨£/╨ô╨ô",
    postalCodeLabel: "╨ÿ╨╜╨┤╨╡╨║╤ü",
    saveCardLabel: "╨í╨╛╤à╤Ç╨░╨╜╨╕╤é╤î ╨║╨░╤Ç╤é╤â",
    payWithCard: "╨₧╨┐╨╗╨░╤é╨╕╤é╤î ╨▒╨░╨╜╨║╨╛╨▓╤ü╨║╨╛╨╣ ╨║╨░╤Ç╤é╨╛╨╣",
    endingIn: "╨ù╨░╨║╨░╨╜╤ç╨╕╨▓╨░╨╡╤é╤ü╤Å ╨╜╨░ {{lastFourCardDigits}}",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "╨Ü╨░╤Ç╤é╨░",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal Credit",
    "Google Pay": "Google Pay",
    "American Express": "American Express",
    Discover: "╨ƒ╨╛╨╗╨╡╨╖╨╜╨╛╨╡",
    "Diners Club": "Diners Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "UnionPay",
  },
  ua = {
    payingWith: "Sp\xf4sob platby: {{paymentSource}}",
    chooseAnotherWayToPay: "Vyberte in\xfd sp\xf4sob platby",
    chooseAWayToPay: "Zvo─╛te sp\xf4sob platby",
    otherWaysToPay: "In\xe9 sp\xf4soby platby",
    edit: "Upravi┼Ñ",
    doneEditing: "Hotovo",
    editPaymentMethods: "Upravi┼Ñ sp\xf4soby platby",
    CreditCardDeleteConfirmationMessage:
      "Chcete odstr\xe1ni┼Ñ kartu {{secondaryIdentifier}} kon─ìiacu sa na {{identifier}}?",
    PayPalAccountDeleteConfirmationMessage:
      "Chcete odstr\xe1ni┼Ñ {{identifier}}\xfa─ìtu PayPal?",
    VenmoAccountDeleteConfirmationMessage:
      "Naozaj chcete odstr\xe1ni┼Ñ \xfa─ìet Venmo s\xa0menom pou┼╛\xedvate─╛a {{identifier}}?",
    genericDeleteConfirmationMessage:
      "Ste si ist\xed, ┼╛e chcete tento sp\xf4sob platby odstr\xe1ni┼Ñ?",
    deleteCancelButton: "Zru┼íi┼Ñ",
    deleteConfirmationButton: "Odstr\xe1ni┼Ñ",
    fieldEmptyForCvv: "Vypl┼ête k\xf3d CVV.",
    fieldEmptyForExpirationDate: "Zadajte d\xe1tum skon─ìenia platnosti.",
    fieldEmptyForCardholderName: "Zadajte meno majite─╛a karty.",
    fieldTooLongForCardholderName:
      "Meno majite─╛a karty mus\xed obsahova┼Ñ menej ako 256\xa0znakov.",
    fieldEmptyForNumber: "Zadajte ─ì\xedslo.",
    fieldEmptyForPostalCode: "Zadajte PS─î.",
    fieldInvalidForCardholderName: "Toto meno majite─╛a karty je neplatn\xe9.",
    fieldInvalidForCvv: "Tento bezpe─ìnostn\xfd k\xf3d je neplatn\xfd.",
    fieldInvalidForExpirationDate:
      "Tento d\xe1tum skon─ìenia platnosti je neplatn\xfd.",
    fieldInvalidForNumber: "Toto ─ì\xedslo karty je neplatn\xe9.",
    fieldInvalidForPostalCode: "Toto PS─î je neplatn\xe9.",
    genericError: "Vyskytla sa chyba na na┼íej strane.",
    hostedFieldsTokenizationFailOnDuplicateError:
      "T\xe1to kreditn\xe1 karta u┼╛ existuje ako ulo┼╛en\xfd sp\xf4sob platby.",
    hostedFieldsFailedTokenizationError:
      "Skontrolujte \xfadaje a\xa0sk\xfaste to znova.",
    hostedFieldsFieldsInvalidError:
      "Skontrolujte \xfadaje a\xa0sk\xfaste to znova.",
    hostedFieldsTokenizationNetworkErrorError:
      "Chyba v\xa0sieti. Sk\xfaste to znova.",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "Overenie kreditnej karty nebolo \xfaspe┼ín\xe9. Skontrolujte \xfadaje a\xa0sk\xfaste to znova.",
    paypalButtonMustBeUsed:
      "Ak chcete pokra─ìova┼Ñ v\xa0platbe, pou┼╛ite tla─ìidlo PayPal.",
    paypalAccountTokenizationFailedError:
      "Vyskytla sa chyba pri prid\xe1van\xed \xfa─ìtu PayPal. Sk\xfaste to znova.",
    paypalFlowFailedError:
      "Vyskytla sa chyba pri prip\xe1jan\xed do \xfa─ìtu PayPal. Sk\xfaste to znova.",
    paypalTokenizationRequestActiveError:
      "Autoriz\xe1cia platby PayPal u┼╛ prebieha.",
    venmoCanceledError:
      "Vyskytla sa chyba. Skontrolujte, ─ìi m\xe1te v\xa0zariaden\xed nain┼ítalovan\xfa najnov┼íiu verziu aplik\xe1cie Venmo a\xa0─ìi prehliada─ì podporuje prechod na aplik\xe1ciu Venmo.",
    vaultManagerPaymentMethodDeletionError:
      "Nebolo mo┼╛n\xe9 odstr\xe1ni┼Ñ sp\xf4sob platby, sk\xfaste to znova.",
    venmoAppFailedError:
      "Aplik\xe1ciu Venmo sa vo va┼íom zariaden\xed nepodarilo n\xe1js┼Ñ.",
    unsupportedCardTypeError:
      "Tento typ karty nie je podporovan\xfd. Pros\xedm sk\xfaste in\xfa kartu.",
    applePayTokenizationError:
      "Po─ìas sprac\xfavania platby cez Apple Pay do┼ílo k\xa0chybe siete. Sk\xfaste to znova.",
    applePayActiveCardError:
      "Pridajte si podporovan\xfa kartu do pe┼êa┼╛enky Apple Pay.",
    cardholderNameLabel: "Meno majite─╛a karty",
    cardNumberLabel: "─î\xedslo karty",
    cvvLabel: "CVV",
    cvvThreeDigitLabelSubheading: "(3\xa0─ì\xedslice)",
    cvvFourDigitLabelSubheading: "(4\xa0─ì\xedslice)",
    cardholderNamePlaceholder: "Meno majite─╛a karty",
    expirationDateLabel: "D\xe1tum skon─ìenia platnosti",
    expirationDateLabelSubheading: "(MM/RR)",
    expirationDatePlaceholder: "MM/RR",
    postalCodeLabel: "PS─î",
    saveCardLabel: "Ulo┼╛i┼Ñ kartu",
    payWithCard: "Zaplati┼Ñ kartou",
    endingIn: "Kon─ì\xed {{lastFourCardDigits}}",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "Karta",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal Credit",
    "Google Pay": "Google Pay",
    "American Express": "American Express",
    Discover: "Discover",
    "Diners Club": "Diners Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "UnionPay",
  },
  uo = {
    payingWith: "Betalar med {{paymentSource}}",
    chooseAnotherWayToPay: "V\xe4lj ett annat s\xe4tt att betala",
    chooseAWayToPay: "V\xe4lj ett s\xe4tt att betala",
    otherWaysToPay: "Andra s\xe4tt att betala",
    edit: "\xc4ndra",
    doneEditing: "Klart",
    editPaymentMethods: "\xc4ndra betalningsmetoder",
    CreditCardDeleteConfirmationMessage:
      "Ta bort {{secondaryIdentifier}}-kortet som slutar p\xe5 {{identifier}}?",
    PayPalAccountDeleteConfirmationMessage:
      "Ta bort PayPal-konto {{identifier}}?",
    VenmoAccountDeleteConfirmationMessage:
      "\xc4r du s\xe4ker p\xe5 att du vill ta bort Venmo-kontot med anv\xe4ndarnamnet {{identifier}}?",
    genericDeleteConfirmationMessage:
      "\xc4r du s\xe4ker p\xe5 att du vill ta bort den h\xe4r betalningsmetoden?",
    deleteCancelButton: "Avbryt",
    deleteConfirmationButton: "Ta bort",
    fieldEmptyForCvv: "Fyll i ett CVV.",
    fieldEmptyForExpirationDate: "Fyll i ett utg\xe5ngsdatum.",
    fieldEmptyForCardholderName: "Fyll i kortinnehavarens namn.",
    fieldTooLongForCardholderName:
      "Namnet p\xe5 kortinnehavaren m\xe5ste vara kortare \xe4n 256 tecken.",
    fieldEmptyForNumber: "Fyll i ett nummer.",
    fieldEmptyForPostalCode: "Fyll i ett postnummer.",
    fieldInvalidForCardholderName:
      "Namnet p\xe5 kortinnehavaren \xe4r ogiltigt.",
    fieldInvalidForCvv: "Den h\xe4r s\xe4kerhetskoden \xe4r inte giltig.",
    fieldInvalidForExpirationDate: "Utg\xe5ngsdatumet \xe4r ogiltigt.",
    fieldInvalidForNumber: "Det h\xe4r kortnumret \xe4r ogiltigt.",
    fieldInvalidForPostalCode: "Postnumret \xe4r ogiltigt.",
    genericError: "Ett fel uppstod.",
    hostedFieldsTokenizationFailOnDuplicateError:
      "Det h\xe4r kreditkortet finns redan som en sparad betalningsmetod.",
    hostedFieldsFailedTokenizationError:
      "Kontrollera uppgifterna och f\xf6rs\xf6k igen.",
    hostedFieldsFieldsInvalidError:
      "Kontrollera uppgifterna och f\xf6rs\xf6k igen.",
    hostedFieldsTokenizationNetworkErrorError:
      "N\xe4tverksfel. F\xf6rs\xf6k igen.",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "Verifiering av kreditkortet misslyckades. Kontrollera uppgifterna och f\xf6rs\xf6k igen.",
    paypalButtonMustBeUsed:
      "Anv\xe4nd PayPal-knappen f\xf6r att forts\xe4tta med din betalning.",
    paypalAccountTokenizationFailedError:
      "N\xe5got gick fel n\xe4r du lade till PayPal-kontot. F\xf6rs\xf6k igen.",
    paypalFlowFailedError:
      "N\xe5got gick fel med att ansluta till PayPal. F\xf6rs\xf6k igen.",
    paypalTokenizationRequestActiveError:
      "Godk\xe4nnande av PayPal-betalning p\xe5g\xe5r redan.",
    venmoCanceledError:
      "N\xe5got gick fel. Se till att du har den senaste versionen av Venmo-appen installerad p\xe5 din enhet och att din webbl\xe4sare st\xf6der byte till Venmo.",
    vaultManagerPaymentMethodDeletionError:
      "Kan inte ta bort betalningsmetoden, f\xf6rs\xf6k igen.",
    venmoAppFailedError: "Det gick inte att hitta Venmo-appen p\xe5 din enhet.",
    unsupportedCardTypeError:
      "Den h\xe4r korttypen st\xf6ds inte. Prova med ett annat kort.",
    applePayTokenizationError:
      "Ett n\xe4tverksfel uppstod n\xe4r Apple Pay-betalningen behandlades. F\xf6rs\xf6k igen.",
    applePayActiveCardError:
      "L\xe4gg till ett kort som st\xf6ds i din Apple Pay e-pl\xe5nbok.",
    cardholderNameLabel: "Kortinnehavarens namn",
    cardNumberLabel: "Kortnummer",
    cvvLabel: "CVV",
    cvvThreeDigitLabelSubheading: "(3 siffror)",
    cvvFourDigitLabelSubheading: "(4 siffror)",
    cardholderNamePlaceholder: "Kortinnehavarens namn",
    expirationDateLabel: "Utg\xe5ngsdatum",
    expirationDateLabelSubheading: "(MM/\xc5\xc5)",
    expirationDatePlaceholder: "MM/\xc5\xc5",
    postalCodeLabel: "Postnummer",
    saveCardLabel: "Spara kort",
    payWithCard: "Betala med kort",
    endingIn: "Slutar p\xe5 {{lastFourCardDigits}}",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "Kort",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal Credit",
    "Google Pay": "Google Pay",
    "American Express": "American Express",
    Discover: "Discover",
    "Diners Club": "Diners Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "UnionPay",
  },
  us = {
    payingWith: "α╕èα╕│α╕úα╕░α╣Çα╕çα╕┤α╕Öα╕öα╣ëα╕ºα╕ó {{paymentSource}}",
    chooseAnotherWayToPay:
      "α╣Çα╕Ñα╕╖α╕¡α╕üα╕ºα╕┤α╕ÿα╕╡α╕üα╕▓α╕úα╕èα╕│α╕úα╕░α╣Çα╕çα╕┤α╕Öα╕¡α╕╖α╣êα╕Ö",
    chooseAWayToPay:
      "α╣éα╕¢α╕úα╕öα╣Çα╕Ñα╕╖α╕¡α╕üα╕ºα╕┤α╕ÿα╕╡α╕èα╕│α╕úα╕░α╣Çα╕çα╕┤α╕Ö",
    otherWaysToPay:
      "α╕ºα╕┤α╕ÿα╕╡α╕¡α╕╖α╣êα╕Öα╣âα╕Öα╕üα╕▓α╕úα╕èα╕│α╕úα╕░α╣Çα╕çα╕┤α╕Ö",
    edit: "α╣üα╕üα╣ëα╣äα╕é",
    doneEditing: "α╣Çα╕¬α╕úα╣çα╕êα╣üα╕Ñα╣ëα╕º",
    editPaymentMethods:
      "α╣üα╕üα╣ëα╣äα╕éα╕ºα╕┤α╕ÿα╕╡α╕üα╕▓α╕úα╕èα╕│α╕úα╕░α╣Çα╕çα╕┤α╕Ö",
    CreditCardDeleteConfirmationMessage:
      "α╕Ñα╕Üα╕Üα╕▒α╕òα╕ú {{secondaryIdentifier}} α╕ùα╕╡α╣êα╕Ñα╕çα╕ùα╣ëα╕▓α╕óα╕öα╣ëα╕ºα╕ó {{identifier}} α╕½α╕úα╕╖α╕¡α╣äα╕íα╣ê",
    PayPalAccountDeleteConfirmationMessage:
      "α╕äα╕╕α╕ôα╕òα╣ëα╕¡α╕çα╕üα╕▓α╕úα╕Ñα╕Üα╕Üα╕▒α╕ìα╕èα╕╡ PayPal {{identifier}} α╕½α╕úα╕╖α╕¡α╣äα╕íα╣ê",
    VenmoAccountDeleteConfirmationMessage:
      "α╕äα╕╕α╕ôα╣üα╕Öα╣êα╣âα╕êα╕½α╕úα╕╖α╕¡α╣äα╕íα╣êα╕ºα╣êα╕▓α╕òα╣ëα╕¡α╕çα╕üα╕▓α╕úα╕Ñα╕Üα╕Üα╕▒α╕ìα╕èα╕╡ Venmo α╕ùα╕╡α╣êα╕íα╕╡α╕èα╕╖α╣êα╕¡α╕£α╕╣α╣ëα╣âα╕èα╣ë {{identifier}}",
    genericDeleteConfirmationMessage:
      "α╕äα╕╕α╕ôα╣üα╕Öα╣êα╣âα╕êα╕½α╕úα╕╖α╕¡α╣äα╕íα╣êα╕ºα╣êα╕▓α╕òα╣ëα╕¡α╕çα╕üα╕▓α╕úα╕Ñα╕Üα╕üα╕▓α╕úα╕èα╕│α╕úα╕░α╣Çα╕çα╕┤α╕Öα╕úα╕▓α╕óα╕üα╕▓α╕úα╕Öα╕╡α╣ëα╕¡α╕¡α╕ü",
    deleteCancelButton: "α╕óα╕üα╣Çα╕Ñα╕┤α╕ü",
    deleteConfirmationButton: "α╕Ñα╕Ü",
    fieldEmptyForCvv:
      "α╣éα╕¢α╕úα╕öα╕üα╕úα╕¡α╕üα╕éα╣ëα╕¡α╕íα╕╣α╕Ñα╣âα╕Öα╕Üα╕▒α╕òα╕ú CVV",
    fieldEmptyForExpirationDate:
      "α╣éα╕¢α╕úα╕öα╕üα╕úα╕¡α╕üα╕éα╣ëα╕¡α╕íα╕╣α╕Ñα╕ºα╕▒α╕Öα╕ùα╕╡α╣êα╕½α╕íα╕öα╕¡α╕▓α╕óα╕╕",
    fieldEmptyForCardholderName:
      "α╣éα╕¢α╕úα╕öα╕üα╕úα╕¡α╕üα╕èα╕╖α╣êα╕¡α╕£α╕╣α╣ëα╕ûα╕╖α╕¡α╕Üα╕▒α╕òα╕ú",
    fieldTooLongForCardholderName:
      "α╕èα╕╖α╣êα╕¡α╕£α╕╣α╣ëα╕ûα╕╖α╕¡α╕Üα╕▒α╕òα╕úα╕òα╣ëα╕¡α╕çα╣äα╕íα╣êα╣Çα╕üα╕┤α╕Ö 256 α╕¡α╕▒α╕üα╕éα╕úα╕░",
    fieldEmptyForNumber: "α╣éα╕¢α╕úα╕öα╕üα╕úα╕¡α╕üα╕½α╕íα╕▓α╕óα╣Çα╕Ñα╕é",
    fieldEmptyForPostalCode:
      "α╣éα╕¢α╕úα╕öα╕üα╕úα╕¡α╕üα╕éα╣ëα╕¡α╕íα╕╣α╕Ñα╣âα╕Öα╕úα╕½α╕▒α╕¬α╣äα╕¢α╕úα╕⌐α╕ôα╕╡α╕óα╣î",
    fieldInvalidForCardholderName:
      "α╕èα╕╖α╣êα╕¡α╕£α╕╣α╣ëα╕ûα╕╖α╕¡α╕Üα╕▒α╕òα╕úα╕Öα╕╡α╣ëα╣äα╕íα╣êα╕ûα╕╣α╕üα╕òα╣ëα╕¡α╕ç",
    fieldInvalidForCvv:
      "α╕úα╕½α╕▒α╕¬α╕äα╕ºα╕▓α╕íα╕¢α╕Ñα╕¡α╕öα╕áα╕▒α╕óα╕Öα╕╡α╣ëα╣äα╕íα╣êα╕ûα╕╣α╕üα╕òα╣ëα╕¡α╕ç",
    fieldInvalidForExpirationDate:
      "α╕ºα╕▒α╕Öα╕ùα╕╡α╣êα╕½α╕íα╕öα╕¡α╕▓α╕óα╕╕α╕Öα╕╡α╣ëα╣äα╕íα╣êα╕ûα╕╣α╕üα╕òα╣ëα╕¡α╕ç",
    fieldInvalidForNumber:
      "α╕½α╕íα╕▓α╕óα╣Çα╕Ñα╕éα╕Üα╕▒α╕òα╕úα╕Öα╕╡α╣ëα╣äα╕íα╣êα╕ûα╕╣α╕üα╕òα╣ëα╕¡α╕ç",
    fieldInvalidForPostalCode:
      "α╕úα╕½α╕▒α╕¬α╣äα╕¢α╕úα╕⌐α╕ôα╕╡α╕óα╣îα╕Öα╕╡α╣ëα╣äα╕íα╣êα╕ûα╕╣α╕üα╕òα╣ëα╕¡α╕ç",
    genericError:
      "α╣Çα╕üα╕┤α╕öα╕éα╣ëα╕¡α╕£α╕┤α╕öα╕₧α╕Ñα╕▓α╕öα╕éα╕╢α╣ëα╕Öα╣âα╕Öα╕úα╕░α╕Üα╕Üα╕éα╕¡α╕çα╣Çα╕úα╕▓",
    hostedFieldsTokenizationFailOnDuplicateError:
      "α╕Üα╕▒α╕òα╕úα╣Çα╕äα╕úα╕öα╕┤α╕òα╕Öα╕╡α╣ëα╣Çα╕¢α╣çα╕Öα╕ºα╕┤α╕ÿα╕╡α╕üα╕▓α╕úα╕èα╕│α╕úα╕░α╣Çα╕çα╕┤α╕Öα╕ùα╕╡α╣êα╕Üα╕▒α╕Öα╕ùα╕╢α╕üα╣äα╕ºα╣ëα╣üα╕Ñα╣ëα╕º",
    hostedFieldsFailedTokenizationError:
      "α╣éα╕¢α╕úα╕öα╕òα╕úα╕ºα╕êα╕¬α╕¡α╕Üα╕éα╣ëα╕¡α╕íα╕╣α╕Ñα╕éα╕¡α╕çα╕äα╕╕α╕ô α╣üα╕Ñα╣ëα╕ºα╕Ñα╕¡α╕çα╣âα╕½α╕íα╣êα╕¡α╕╡α╕üα╕äα╕úα╕▒α╣ëα╕ç",
    hostedFieldsFieldsInvalidError:
      "α╣éα╕¢α╕úα╕öα╕òα╕úα╕ºα╕êα╕¬α╕¡α╕Üα╕éα╣ëα╕¡α╕íα╕╣α╕Ñα╕éα╕¡α╕çα╕äα╕╕α╕ô α╣üα╕Ñα╣ëα╕ºα╕Ñα╕¡α╕çα╣âα╕½α╕íα╣êα╕¡α╕╡α╕üα╕äα╕úα╕▒α╣ëα╕ç",
    hostedFieldsTokenizationNetworkErrorError:
      "α╕éα╣ëα╕¡α╕£α╕┤α╕öα╕₧α╕Ñα╕▓α╕öα╕éα╕¡α╕çα╣Çα╕äα╕úα╕╖α╕¡α╕éα╣êα╕▓α╕ó α╣éα╕¢α╕úα╕öα╕Ñα╕¡α╕çα╕¡α╕╡α╕üα╕äα╕úα╕▒α╣ëα╕ç",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "α╕üα╕▓α╕úα╕òα╕úα╕ºα╕êα╕¬α╕¡α╕Üα╕óα╕╖α╕Öα╕óα╕▒α╕Öα╕Üα╕▒α╕òα╕úα╣Çα╕äα╕úα╕öα╕┤α╕òα╣äα╕íα╣êα╕¬α╕│α╣Çα╕úα╣çα╕ê α╣éα╕¢α╕úα╕öα╕òα╕úα╕ºα╕êα╕¬α╕¡α╕Üα╕éα╣ëα╕¡α╕íα╕╣α╕Ñα╕éα╕¡α╕çα╕äα╕╕α╕ô α╣üα╕Ñα╣ëα╕ºα╕Ñα╕¡α╕çα╣âα╕½α╕íα╣êα╕¡α╕╡α╕üα╕äα╕úα╕▒α╣ëα╕ç",
    paypalButtonMustBeUsed:
      "α╣âα╕èα╣ëα╕¢α╕╕α╣êα╕í PayPal α╣Çα╕₧α╕╖α╣êα╕¡α╕öα╕│α╣Çα╕Öα╕┤α╕Öα╕üα╕▓α╕úα╕èα╕│α╕úα╕░α╣Çα╕çα╕┤α╕Öα╕òα╣êα╕¡α╣äα╕¢",
    paypalAccountTokenizationFailedError:
      "α╣Çα╕üα╕┤α╕öα╕éα╣ëα╕¡α╕£α╕┤α╕öα╕₧α╕Ñα╕▓α╕öα╕Üα╕▓α╕çα╕¡α╕óα╣êα╕▓α╕çα╣âα╕Öα╕üα╕▓α╕úα╣Çα╕₧α╕┤α╣êα╕íα╕Üα╕▒α╕ìα╕èα╕╡ PayPal α╣éα╕¢α╕úα╕öα╕Ñα╕¡α╕çα╕¡α╕╡α╕üα╕äα╕úα╕▒α╣ëα╕ç",
    paypalFlowFailedError:
      "α╣Çα╕üα╕┤α╕öα╕éα╣ëα╕¡α╕£α╕┤α╕öα╕₧α╕Ñα╕▓α╕öα╣âα╕Öα╕üα╕▓α╕úα╣Çα╕èα╕╖α╣êα╕¡α╕íα╕òα╣êα╕¡α╕üα╕▒α╕Ü PayPal α╣éα╕¢α╕úα╕öα╕Ñα╕¡α╕çα╕¡α╕╡α╕üα╕äα╕úα╕▒α╣ëα╕ç",
    paypalTokenizationRequestActiveError:
      "α╕üα╕▓α╕úα╕¡α╕Öα╕╕α╕íα╕▒α╕òα╕┤α╕üα╕▓α╕úα╕èα╕│α╕úα╕░α╣Çα╕çα╕┤α╕Ö PayPal α╕¡α╕óα╕╣α╣êα╣âα╕Öα╕úα╕░α╕½α╕ºα╣êα╕▓α╕çα╕öα╕│α╣Çα╕Öα╕┤α╕Öα╕üα╕▓α╕úα╣üα╕Ñα╣ëα╕º",
    venmoCanceledError:
      "α╣Çα╕üα╕┤α╕öα╕éα╣ëα╕¡α╕£α╕┤α╕öα╕₧α╕Ñα╕▓α╕öα╕Üα╕▓α╕çα╕¢α╕úα╕░α╕üα╕▓α╕ú α╕òα╕úα╕ºα╕êα╕¬α╕¡α╕Üα╣âα╕½α╣ëα╣üα╕Öα╣êα╣âα╕êα╕ºα╣êα╕▓α╕äα╕╕α╕ôα╕íα╕╡α╣üα╕¡α╕¢α╕₧α╕Ñα╕┤α╣Çα╕äα╕èα╕▒α╕Ö Venmo α╣Çα╕ºα╕¡α╕úα╣îα╕èα╕▒α╕Öα╕Ñα╣êα╕▓α╕¬α╕╕α╕öα╕ùα╕╡α╣êα╕òα╕┤α╕öα╕òα╕▒α╣ëα╕çα╣äα╕ºα╣ëα╣âα╕Öα╕¡α╕╕α╕¢α╕üα╕úα╕ôα╣îα╕éα╕¡α╕çα╕äα╕╕α╕ôα╣üα╕Ñα╕░α╣Çα╕Üα╕úα╕▓α╕ºα╣îα╣Çα╕ïα╕¡α╕úα╣îα╕éα╕¡α╕çα╕äα╕╕α╕ôα╕úα╕¡α╕çα╕úα╕▒α╕Üα╕üα╕▓α╕úα╣Çα╕¢α╕Ñα╕╡α╣êα╕óα╕Öα╣Çα╕¢α╣çα╕Ö Venmo",
    vaultManagerPaymentMethodDeletionError:
      "α╣äα╕íα╣êα╕¬α╕▓α╕íα╕▓α╕úα╕ûα╕Ñα╕Üα╕ºα╕┤α╕ÿα╕╡α╕üα╕▓α╕úα╕èα╕│α╕úα╕░α╣Çα╕çα╕┤α╕Öα╣äα╕öα╣ëα╣éα╕¢α╕úα╕öα╕Ñα╕¡α╕çα╕¡α╕╡α╕üα╕äα╕úα╕▒α╣ëα╕ç",
    venmoAppFailedError:
      "α╣äα╕íα╣êα╕₧α╕Üα╣üα╕¡α╕¢ Venmo α╣âα╕Öα╕¡α╕╕α╕¢α╕üα╕úα╕ôα╣îα╕éα╕¡α╕çα╕äα╕╕α╕ô",
    unsupportedCardTypeError:
      "α╣äα╕íα╣êα╕úα╕¡α╕çα╕úα╕▒α╕Üα╕Üα╕▒α╕òα╕úα╕¢α╕úα╕░α╣Çα╕áα╕ùα╕Öα╕╡α╣ë α╣éα╕¢α╕úα╕öα╕Ñα╕¡α╕çα╣âα╕èα╣ëα╕Üα╕▒α╕òα╕úα╣âα╕Üα╕¡α╕╖α╣êα╕Ö",
    applePayTokenizationError:
      "α╣Çα╕üα╕┤α╕öα╕éα╣ëα╕¡α╕£α╕┤α╕öα╕₧α╕Ñα╕▓α╕öα╣âα╕Öα╣Çα╕äα╕úα╕╖α╕¡α╕éα╣êα╕▓α╕óα╕éα╕ôα╕░α╕¢α╕úα╕░α╕íα╕ºα╕Ñα╕£α╕Ñα╕üα╕▓α╕úα╕èα╕│α╕úα╕░α╣Çα╕çα╕┤α╕Öα╕éα╕¡α╕ç Apple Pay α╣éα╕¢α╕úα╕öα╕Ñα╕¡α╕çα╕¡α╕╡α╕üα╕äα╕úα╕▒α╣ëα╕ç",
    applePayActiveCardError:
      "α╣Çα╕₧α╕┤α╣êα╕íα╕Üα╕▒α╕òα╕úα╕ùα╕╡α╣êα╕úα╕¡α╕çα╕úα╕▒α╕Üα╣äα╕¢α╕óα╕▒α╕çα╕üα╕úα╕░α╣Çα╕¢α╣ïα╕▓α╕¬α╕òα╕▓α╕çα╕äα╣î Apple Pay α╕éα╕¡α╕çα╕äα╕╕α╕ô",
    cardholderNameLabel: "α╕èα╕╖α╣êα╕¡α╕éα╕¡α╕çα╕£α╕╣α╣ëα╕ûα╕╖α╕¡α╕Üα╕▒α╕òα╕ú",
    cardNumberLabel: "α╕½α╕íα╕▓α╕óα╣Çα╕Ñα╕éα╕Üα╕▒α╕òα╕ú",
    cvvLabel: "CVV",
    cvvThreeDigitLabelSubheading: "(3 α╕½α╕Ñα╕▒α╕ü)",
    cvvFourDigitLabelSubheading: "(4 α╕½α╕Ñα╕▒α╕ü)",
    cardholderNamePlaceholder:
      "α╕èα╕╖α╣êα╕¡α╕éα╕¡α╕çα╕£α╕╣α╣ëα╕ûα╕╖α╕¡α╕Üα╕▒α╕òα╕ú",
    expirationDateLabel: "α╕ºα╕▒α╕Öα╕½α╕íα╕öα╕¡α╕▓α╕óα╕╕",
    expirationDateLabelSubheading: "(MM/YY)",
    expirationDatePlaceholder: "MM/YY",
    postalCodeLabel: "α╕úα╕½α╕▒α╕¬α╣äα╕¢α╕úα╕⌐α╕ôα╕╡α╕óα╣î",
    saveCardLabel: "α╕Üα╕▒α╕Öα╕ùα╕╢α╕üα╕Üα╕▒α╕òα╕ú",
    payWithCard:
      "α╕èα╕│α╕úα╕░α╕öα╣ëα╕ºα╕óα╕Üα╕▒α╕òα╕úα╣Çα╕öα╕Üα╕┤α╕òα╕½α╕úα╕╖α╕¡α╕Üα╕▒α╕òα╕úα╣Çα╕äα╕úα╕öα╕┤α╕ò",
    endingIn: "α╕Ñα╕çα╕ùα╣ëα╕▓α╕óα╕öα╣ëα╕ºα╕ó {{lastFourCardDigits}}",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "α╕Üα╕▒α╕òα╕ú",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal Credit",
    "Google Pay": "Google Pay",
    "American Express": "American Express",
    Discover: "Discover",
    "Diners Club": "Diners Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "UnionPay",
  },
  ud = {
    payingWith: "Σ╜┐τö¿{{paymentSource}}Σ╗ÿµ¼╛",
    chooseAnotherWayToPay: "Φ»╖ΘÇëµï⌐σà╢σ«âΣ╗ÿµ¼╛µû╣σ╝ÅπÇé",
    chooseAWayToPay: "ΘÇëµï⌐Σ╗ÿµ¼╛µû╣σ╝Å",
    otherWaysToPay: "σà╢Σ╗ûΣ╗ÿµ¼╛µû╣σ╝Å",
    edit: "τ╝ûΦ╛æ",
    doneEditing: "σ«îµêÉ",
    editPaymentMethods: "τ╝ûΦ╛æΣ╗ÿµ¼╛µû╣σ╝Å",
    CreditCardDeleteConfirmationMessage:
      "σêáΘÖñσ░╛σÅ╖Σ╕║{{identifier}}τÜä{{secondaryIdentifier}}σìí∩╝ƒ",
    PayPalAccountDeleteConfirmationMessage:
      "σêáΘÖñPayPalΦ┤ªµê╖{{identifier}}∩╝ƒ",
    VenmoAccountDeleteConfirmationMessage:
      "µé¿τí«σ«ÜΦªüσêáΘÖñτö¿µê╖σÉìΣ╕║{{identifier}}τÜäVenmoΦ┤ªµê╖σÉù∩╝ƒ",
    genericDeleteConfirmationMessage: "τí«σ«ÜΦªüσêáΘÖñµ¡ñΣ╗ÿµ¼╛µû╣σ╝ÅσÉù∩╝ƒ",
    deleteCancelButton: "σÅûµ╢ê",
    deleteConfirmationButton: "σêáΘÖñ",
    fieldEmptyForCvv: "Φ»╖σí½σåÖCVVπÇé",
    fieldEmptyForExpirationDate: "Φ»╖σí½σåÖµ£ëµòêµ£ƒΘÖÉπÇé",
    fieldEmptyForCardholderName: "Φ»╖σí½σåÖµîüσìíΣ║║σºôσÉìπÇé",
    fieldTooLongForCardholderName: "µîüσìíΣ║║σºôσÉìσ┐àΘí╗σ░æΣ║Ä256Σ╕¬σ¡ùτ¼ªπÇé",
    fieldEmptyForNumber: "Φ»╖σí½σåÖΣ╕ÇΣ╕¬σÅ╖τáüπÇé",
    fieldEmptyForPostalCode: "Φ»╖σí½σåÖΘé«µö┐τ╝ûτáüπÇé",
    fieldInvalidForCardholderName: "µ¡ñµîüσìíΣ║║σºôσÉìµùáµòêπÇé",
    fieldInvalidForCvv: "µ¡ñσ«ëσà¿τáüµùáµòêπÇé",
    fieldInvalidForExpirationDate: "µ¡ñµ£ëµòêµ£ƒΘÖÉµùáµòêπÇé",
    fieldInvalidForNumber: "µ¡ñσìíσÅ╖µùáµòêπÇé",
    fieldInvalidForPostalCode: "µ¡ñΘé«µö┐τ╝ûτáüµùáµòêπÇé",
    genericError: "µêæΣ╗¼Θüçσê░Σ║åΣ╕ÇΣ║¢Θù«ΘóÿπÇé",
    hostedFieldsTokenizationFailOnDuplicateError:
      "µ¡ñΣ┐íτö¿σìíσ╖▓σ¡ÿσ£¿Σ║Äσ╖▓Σ┐¥σ¡ÿτÜäΣ╗ÿµ¼╛µû╣σ╝ÅπÇé",
    hostedFieldsFailedTokenizationError:
      "Φ»╖µúÇµƒÑµé¿τÜäΣ┐íµü»∩╝îτä╢σÉÄΘçìΦ»òπÇé",
    hostedFieldsFieldsInvalidError: "Φ»╖µúÇµƒÑµé¿τÜäΣ┐íµü»∩╝îτä╢σÉÄΘçìΦ»òπÇé",
    hostedFieldsTokenizationNetworkErrorError: "τ╜æτ╗£ΘöÖΦ»»πÇéΦ»╖ΘçìΦ»òπÇé",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "Σ┐íτö¿σìíΘ¬îΦ»üσñ▒Φ┤ÑπÇéΦ»╖µúÇµƒÑµé¿τÜäΣ┐íµü»∩╝îτä╢σÉÄΘçìΦ»òπÇé",
    paypalButtonMustBeUsed: "Σ╜┐τö¿PayPalµîëΘÆ«τ╗ºτ╗¡Σ╗ÿµ¼╛πÇé",
    paypalAccountTokenizationFailedError:
      "µ╖╗σèáPayPalΦ┤ªµê╖µù╢Θüçσê░Σ║åΣ╕ÇΣ║¢Θù«ΘóÿπÇéΦ»╖ΘçìΦ»òπÇé",
    paypalFlowFailedError:
      "Φ┐₧µÄÑσê░PayPalΘüçσê░Σ║åΣ╕ÇΣ║¢Θù«ΘóÿπÇéΦ»╖ΘçìΦ»òπÇé",
    paypalTokenizationRequestActiveError:
      "PayPalΣ╗ÿµ¼╛µÄêµ¥âσ╖▓σ£¿σñäτÉåΣ╕¡πÇé",
    venmoCanceledError:
      "Θüçσê░Σ║åΣ╕ÇΣ║¢Θù«ΘóÿπÇéΦ»╖τí«Σ┐¥µé¿τÜäΦ«╛σñçΣ╕èσ«ëΦúàΣ║åµ£Çµû░τëêµ£¼τÜäVenmoσ║öτö¿∩╝îσ╣╢Σ╕öµé¿τÜäµ╡ÅΦºêσÖ¿µö»µîüσêçµìóσê░VenmoπÇé",
    vaultManagerPaymentMethodDeletionError:
      "µùáµ│òσêáΘÖñΣ╗ÿµ¼╛µû╣σ╝Å∩╝îΦ»╖ΘçìΦ»òπÇé",
    venmoAppFailedError: "σ£¿µé¿τÜäΦ«╛σñçΣ╕èµë╛Σ╕ìσê░Venmoσ║öτö¿τ¿ïσ║ÅπÇé",
    unsupportedCardTypeError: "Σ╕ìµö»µîüΦ»Ñσìíτ▒╗σ₧ïπÇéΦ»╖σ░¥Φ»òσà╢Σ╗ûσìíπÇé",
    applePayTokenizationError:
      "σñäτÉåApple PayΣ╗ÿµ¼╛µù╢σÅæτöƒΣ║åτ╜æτ╗£ΘöÖΦ»»πÇéΦ»╖ΘçìΦ»òπÇé",
    applePayActiveCardError:
      "σ£¿µé¿τÜäApple PayΘÆ▒σîàΣ╕¡µ╖╗σèáΣ╕Çσ╝áσÅùµö»µîüτÜäσìíπÇé",
    cardholderNameLabel: "µîüσìíΣ║║σºôσÉì",
    cardNumberLabel: "σìíσÅ╖",
    cvvLabel: "CVV",
    cvvThreeDigitLabelSubheading: "∩╝ê3Σ╜ìµò░∩╝ë",
    cvvFourDigitLabelSubheading: "∩╝ê4Σ╜ìµò░∩╝ë",
    cardholderNamePlaceholder: "µîüσìíΣ║║σºôσÉì",
    expirationDateLabel: "µ£ëµòêµ£ƒΘÖÉ",
    expirationDateLabelSubheading: "∩╝êµ£ê/σ╣┤∩╝ë",
    expirationDatePlaceholder: "µ£ê/σ╣┤",
    postalCodeLabel: "Θé«µö┐τ╝ûτáü",
    saveCardLabel: "Σ┐¥σ¡ÿµ¡ñσìí",
    payWithCard: "Σ╜┐τö¿σìíµö»Σ╗ÿ",
    endingIn: "σ░╛σÅ╖Σ╕║{{lastFourCardDigits}}",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "σìí",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal Credit",
    "Google Pay": "Google Pay",
    "American Express": "American Express",
    Discover: "σÅæτÄ░",
    "Diners Club": "Diners Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "Θô╢Φüö",
  },
  ul = {
    payingWith: "Σ╗ÿµ¼╛µû╣σ╝Åτé║ {{paymentSource}}",
    chooseAnotherWayToPay: "Φ½ïΘü╕µôçσà╢Σ╗ûΣ╗ÿµ¼╛µû╣σ╝Å",
    chooseAWayToPay: "Θü╕µôçΣ╗ÿµ¼╛µû╣σ╝Å",
    otherWaysToPay: "σà╢Σ╗ûΣ╗ÿµ¼╛µû╣σ╝Å",
    edit: "τ╖¿Φ╝»",
    doneEditing: "σ«îµêÉ",
    editPaymentMethods: "τ╖¿Φ╝»Σ╗ÿµ¼╛µû╣σ╝Å",
    CreditCardDeleteConfirmationMessage:
      "σê¬ΘÖñµ£Çσ╛îµò╕σ¡ùτé║ {{identifier}} τÜä {{secondaryIdentifier}} σìíσùÄ∩╝ƒ",
    PayPalAccountDeleteConfirmationMessage:
      "σê¬ΘÖñ {{identifier}} PayPal σ╕│µê╢σùÄ∩╝ƒ",
    VenmoAccountDeleteConfirmationMessage:
      "τó║σ«ÜΦªüσê¬ΘÖñτö¿µê╢σÉìτ¿▒τé║ {{identifier}} τÜä Venmo σ╕│µê╢σùÄ∩╝ƒ",
    genericDeleteConfirmationMessage: "τó║σ«ÜΦªüσê¬ΘÖñµ¡ñΣ╗ÿµ¼╛µû╣σ╝ÅσùÄ∩╝ƒ",
    deleteCancelButton: "σÅûµ╢ê",
    deleteConfirmationButton: "σê¬ΘÖñ",
    fieldEmptyForCvv: "Φ½ïσí½σ»½Σ┐íτö¿σìíΦ¬ìΦ¡ëτó╝∩╝êCVV∩╝ëπÇé",
    fieldEmptyForExpirationDate: "Φ½ïσí½σ»½σê░µ£ƒµùÑπÇé",
    fieldEmptyForCardholderName: "Φ½ïσí½σ»½µîüσìíΣ║║σºôσÉìπÇé",
    fieldTooLongForCardholderName:
      "µîüσìíΣ║║σºôσÉìσ┐àΘáêσ░æµû╝ 256 σÇïσ¡ùσàâπÇé",
    fieldEmptyForNumber: "Φ½ïσí½σ»½µò╕σ¡ùπÇé",
    fieldEmptyForPostalCode: "Φ½ïσí½σ»½Θâ╡Θü₧σìÇΦÖƒπÇé",
    fieldInvalidForCardholderName: "µîüσìíΣ║║σºôσÉìτäíµòêπÇé",
    fieldInvalidForCvv: "µ¡ñσ«ëσà¿Σ╗úτó╝τäíµòêπÇé",
    fieldInvalidForExpirationDate: "µ¡ñσê░µ£ƒµùÑτäíµòêπÇé",
    fieldInvalidForNumber: "µ¡ñσìíΦÖƒτäíµòêπÇé",
    fieldInvalidForPostalCode: "Θâ╡Θü₧σìÇΦÖƒτäíµòêπÇé",
    genericError: "τ│╗τ╡▒τÖ╝τöƒΘî»Φ¬ñπÇé",
    hostedFieldsTokenizationFailOnDuplicateError:
      "µ¡ñΣ┐íτö¿σìíτé║σ╖▓σä▓σ¡ÿτÜäΣ╗ÿµ¼╛µû╣σ╝ÅπÇé",
    hostedFieldsFailedTokenizationError:
      "Φ½ïµ¬óµƒÑΣ╜áτÜäΦ│çµûÖ∩╝îτä╢σ╛îΘçìΦ⌐ªπÇé",
    hostedFieldsFieldsInvalidError: "Φ½ïµ¬óµƒÑΣ╜áτÜäΦ│çµûÖ∩╝îτä╢σ╛îΘçìΦ⌐ªπÇé",
    hostedFieldsTokenizationNetworkErrorError:
      "τ╢▓τ╡íΘî»Φ¬ñπÇéΦ½ïσåìΦ⌐ªΣ╕Çµ¼íπÇé",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "Σ┐íτö¿σìíΦ¬ìΦ¡ëσñ▒µòùπÇéΦ½ïµ¬óµƒÑΣ╜áτÜäΦ│çµûÖ∩╝îτä╢σ╛îΘçìΦ⌐ªπÇé",
    paypalButtonMustBeUsed: "Σ╜┐τö¿πÇîPayPal µîëΘêòπÇìτ╣╝τ║îΣ╗ÿµ¼╛πÇé",
    paypalAccountTokenizationFailedError:
      "µû░σó₧ PayPal σ╕│µê╢σç║τÅ╛σòÅΘíî∩╝îΦ½ïσåìΦ⌐ªΣ╕Çµ¼íπÇé",
    paypalFlowFailedError: "ΘÇúµÄÑΦç│ PayPal σç║τÅ╛σòÅΘíî∩╝îΦ½ïσåìΦ⌐ªΣ╕Çµ¼íπÇé",
    paypalTokenizationRequestActiveError: "µ¡úσ£¿ΦÖòτÉå PayPal µÄêµ¼èΣ╗ÿµ¼╛πÇé",
    venmoCanceledError:
      "τ│╗τ╡▒σç║τÅ╛Θî»Φ¬ñ∩╝îΦ½ïτó║Σ┐¥Φú¥τ╜«σ╖▓σ«ëΦú¥µ£Çµû░τëêµ£¼τÜä Venmo µçëτö¿τ¿ïσ╝Å∩╝îσÅèτÇÅΦª╜σÖ¿µö»µÅ┤σêçµÅ¢Φç│ VenmoπÇé",
    vaultManagerPaymentMethodDeletionError:
      "τäíµ│òσê¬ΘÖñΣ╗ÿµ¼╛µû╣σ╝Å∩╝îΦ½ïσåìΦ⌐ªΣ╕Çµ¼íπÇé",
    venmoAppFailedError: "τäíµ│òσ£¿Φú¥τ╜«Σ╕èµë╛σê░ Venmo µçëτö¿τ¿ïσ╝ÅπÇé",
    unsupportedCardTypeError:
      "Σ╕ìµö»µÅ┤µ¡ñσìíΘí₧σ₧ïπÇéΦ½ïµö╣τö¿σà╢Σ╗ûΣ┐íτö¿σìíπÇé",
    applePayTokenizationError:
      "ΦÖòτÉå Apple Pay Σ╗ÿµ¼╛µÖéτ╢▓Φ╖»τÖ╝τöƒΘî»Φ¬ñπÇéΦ½ïσåìΦ⌐ªΣ╕Çµ¼íπÇé",
    applePayActiveCardError: "µû░σó₧σÅ»τö¿τÜäΣ┐íτö¿σìíσê░ Apple Pay ΘîóσîàπÇé",
    cardholderNameLabel: "µîüσìíΣ║║σºôσÉì",
    cardNumberLabel: "σìíΦÖƒ",
    cvvLabel: "CVV",
    cvvThreeDigitLabelSubheading: "∩╝ê3 Σ╜ìµò╕∩╝ë",
    cvvFourDigitLabelSubheading: "∩╝ê4 Σ╜ìµò╕∩╝ë",
    cardholderNamePlaceholder: "µîüσìíΣ║║σºôσÉì",
    expirationDateLabel: "σê░µ£ƒµùÑ",
    expirationDateLabelSubheading: "(MM/YY)",
    expirationDatePlaceholder: "MM/YY",
    postalCodeLabel: "Θâ╡Θü₧σìÇΦÖƒ",
    saveCardLabel: "σä▓σ¡ÿσìí",
    payWithCard: "Σ╜┐τö¿µëúσ╕│σìíµêûΣ┐íτö¿σìíΣ╗ÿµ¼╛",
    endingIn: "µ£Çσ╛îµò╕σ¡ùτé║ {{lastFourCardDigits}}",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "Σ┐íτö¿σìí",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal Credit",
    "Google Pay": "Google Pay",
    "American Express": "American Express",
    Discover: "Discover",
    "Diners Club": "Diners Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "UnionPay",
  },
  uc = {
    payingWith: "Σ╜┐τö¿ {{paymentSource}} Σ╗ÿµ¼╛",
    chooseAnotherWayToPay: "Θü╕µôçσà╢Σ╗ûΣ╗ÿµ¼╛µû╣σ╝Å",
    chooseAWayToPay: "Θü╕µôçΣ╗ÿµ¼╛µû╣σ╝Å",
    otherWaysToPay: "σà╢Σ╗ûΣ╗ÿµ¼╛µû╣σ╝Å",
    edit: "τ╖¿Φ╝»",
    doneEditing: "σ«îµêÉ",
    editPaymentMethods: "τ╖¿Φ╝»Σ╗ÿµ¼╛µû╣σ╝Å",
    CreditCardDeleteConfirmationMessage:
      "σê¬ΘÖñµ£½τó╝τé║ {{identifier}} τÜä {{secondaryIdentifier}} σìíτëç∩╝ƒ",
    PayPalAccountDeleteConfirmationMessage:
      "σê¬ΘÖñ {{identifier}} τÜä PayPal σ╕│µê╢∩╝ƒ",
    VenmoAccountDeleteConfirmationMessage:
      "τó║σ«ÜΦªüσê¬ΘÖñτö¿µê╢σÉìτ¿▒τé║ {{identifier}} τÜä Venmo σ╕│µê╢∩╝ƒ",
    genericDeleteConfirmationMessage: "τó║σ«ÜΦªüσê¬ΘÖñµ¡ñΣ╗ÿµ¼╛µû╣σ╝Å∩╝ƒ",
    deleteCancelButton: "σÅûµ╢ê",
    deleteConfirmationButton: "σê¬ΘÖñ",
    fieldEmptyForCvv: "σí½σ»½Σ┐íτö¿σìíΘ⌐ùΦ¡ëτó╝πÇé",
    fieldEmptyForExpirationDate: "σí½σ»½σê░µ£ƒµùÑπÇé",
    fieldEmptyForCardholderName: "σí½σ»½µîüσìíΣ║║σºôσÉìπÇé",
    fieldTooLongForCardholderName:
      "µîüσìíΣ║║σºôσÉìσ┐àΘáêσ░æµû╝ 256 σÇïσ¡ùσàâπÇé",
    fieldEmptyForNumber: "σí½σ»½µò╕σ¡ùπÇé",
    fieldEmptyForPostalCode: "σí½σ»½Θâ╡Θü₧σìÇΦÖƒπÇé",
    fieldInvalidForCardholderName: "µ¡ñµîüσìíΣ║║σºôσÉìτäíµòêπÇé",
    fieldInvalidForCvv: "µ¡ñσ«ëσà¿Σ╗úτó╝τäíµòêπÇé",
    fieldInvalidForExpirationDate: "µ¡ñσê░µ£ƒµùÑτäíµòêπÇé",
    fieldInvalidForNumber: "µ¡ñσìíΦÖƒτäíµòêπÇé",
    fieldInvalidForPostalCode: "µ¡ñΘâ╡Θü₧σìÇΦÖƒτäíµòêπÇé",
    genericError: "µêæσÇæτÜäτ│╗τ╡▒τÖ╝τöƒσòÅΘíîπÇé",
    hostedFieldsTokenizationFailOnDuplicateError:
      "µ¡ñΣ┐íτö¿σìíσ╖▓τ╢ôµÿ»σä▓σ¡ÿτÜäΣ╗ÿµ¼╛µû╣σ╝ÅπÇé",
    hostedFieldsFailedTokenizationError: "Φ½ïµ¬óµƒÑΣ╜áτÜäΦ│çµûÖΣ╕ªΘçìΦ⌐ªπÇé",
    hostedFieldsFieldsInvalidError: "Φ½ïµ¬óµƒÑΣ╜áτÜäΦ│çµûÖΣ╕ªΘçìΦ⌐ªπÇé",
    hostedFieldsTokenizationNetworkErrorError: "τ╢▓Φ╖»Θî»Φ¬ñπÇéΦ½ïΘçìΦ⌐ªπÇé",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "Σ┐íτö¿σìíΦ¬ìΦ¡ëσñ▒µòùπÇéΦ½ïµ¬óµƒÑΣ╜áτÜäΦ│çµûÖΣ╕ªΘçìΦ⌐ªπÇé",
    paypalButtonMustBeUsed: "Σ╜┐τö¿ PayPal µîëΘêòτ╣╝τ║îΣ╗ÿµ¼╛πÇé",
    paypalAccountTokenizationFailedError:
      "µû░σó₧ PayPal σ╕│µê╢µÖéτÖ╝τöƒΘî»Φ¬ñπÇéΦ½ïΘçìΦ⌐ªπÇé",
    paypalFlowFailedError: "ΘÇúτ╡ÉΦç│ PayPal µÖéτÖ╝τöƒΘî»Φ¬ñπÇéΦ½ïΘçìΦ⌐ªπÇé",
    paypalTokenizationRequestActiveError:
      "PayPal Σ╗ÿµ¼╛µÄêµ¼èσ╖▓σ£¿ΘÇ▓ΦíîΣ╕¡πÇé",
    venmoCanceledError:
      "τ│╗τ╡▒τÖ╝τöƒΘî»Φ¬ñπÇéτó║Σ┐¥Σ╜áσ£¿Φú¥τ╜«Σ╕èσ«ëΦú¥Σ║åµ£Çµû░τëêµ£¼τÜä Venmo µçëτö¿τ¿ïσ╝Å∩╝îΣ╕öτÇÅΦª╜σÖ¿µö»µÅ┤Φ╜ëµÅ¢Φç│ VenmoπÇé",
    vaultManagerPaymentMethodDeletionError:
      "τäíµ│òσê¬ΘÖñΣ╗ÿµ¼╛µû╣σ╝Å∩╝îΦ½ïΘçìΦ⌐ªπÇé",
    venmoAppFailedError: "Σ╜áτÜäΦú¥τ╜«Σ╕èµë╛Σ╕ìσê░ Venmo µçëτö¿τ¿ïσ╝ÅπÇé",
    unsupportedCardTypeError:
      "Σ╕ìµö»µÅ┤µ¡ñσìíτëçΘí₧σ₧ï∩╝îΦ½ïµö╣τö¿σà╢Σ╗ûσìíτëçπÇé",
    applePayTokenizationError:
      "ΦÖòτÉå Apple Pay Σ╗ÿµ¼╛µÖéτÖ╝τöƒτ╢▓Φ╖»ΘÇúτ╖ÜΘî»Φ¬ñπÇéΦ½ïΘçìΦ⌐ªπÇé",
    applePayActiveCardError:
      "σ░çµö»µÅ┤σìíτëçµû░σó₧Φç│Σ╜áτÜä Apple Pay ΘîóσîàπÇé",
    cardholderNameLabel: "µîüσìíΣ║║σºôσÉì",
    cardNumberLabel: "σìíΦÖƒ",
    cvvLabel: "Σ┐íτö¿σìíΘ⌐ùΦ¡ëτó╝",
    cvvThreeDigitLabelSubheading: "∩╝ê3 Σ╜ìµò╕∩╝ë",
    cvvFourDigitLabelSubheading: "∩╝ê4 Σ╜ìµò╕∩╝ë",
    cardholderNamePlaceholder: "µîüσìíΣ║║σºôσÉì",
    expirationDateLabel: "σê░µ£ƒµùÑ",
    expirationDateLabelSubheading: "∩╝êµ£ê / σ╣┤∩╝ë",
    expirationDatePlaceholder: "µ£ê / σ╣┤",
    postalCodeLabel: "Θâ╡Θü₧σìÇΦÖƒ",
    saveCardLabel: "σä▓σ¡ÿσìíτëç",
    payWithCard: "Σ╜┐τö¿σìíτëçΣ╗ÿµ¼╛",
    endingIn: "µ£½τó╝τé║ {{lastFourCardDigits}}",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "σìíτëç",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal Credit",
    "Google Pay": "Google Pay",
    "American Express": "τ╛Äσ£ïΘüïΘÇÜ",
    Discover: "τÖ╝τÅ╛σìí",
    "Diners Club": "σñºΣ╛åσìí",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "ΘèÇΦü»",
  },
  up = {
    payingWith: "Σ╜┐τö¿{{paymentSource}}Σ╗ÿµ¼╛",
    chooseAnotherWayToPay: "ΘÇëµï⌐σà╢Σ╗ûΣ╗ÿµ¼╛µû╣σ╝Å",
    chooseAWayToPay: "ΘÇëµï⌐Σ╗ÿµ¼╛µû╣σ╝Å",
    otherWaysToPay: "σà╢Σ╗ûΣ╗ÿµ¼╛µû╣σ╝Å",
    edit: "τ╝ûΦ╛æ",
    doneEditing: "σ«îµêÉ",
    editPaymentMethods: "τ╝ûΦ╛æΣ╗ÿµ¼╛µû╣σ╝Å",
    CreditCardDeleteConfirmationMessage:
      "σêáΘÖñΣ╗Ñ{{identifier}}}τ╗ôσ░╛τÜä{{secondaryIdentifier}}}σìí∩╝ƒ",
    PayPalAccountDeleteConfirmationMessage:
      "σêáΘÖñPayPalΦ┤ªµê╖{{identifier}}}∩╝ƒ",
    VenmoAccountDeleteConfirmationMessage:
      "τí«σ«ÜΦªüσêáΘÖñτö¿µê╖σÉìΣ╕║{{identifier}}}τÜäVenmoΦ┤ªµê╖σÉù∩╝ƒ",
    genericDeleteConfirmationMessage: "τí«σ«ÜΦªüσêáΘÖñµ¡ñΣ╗ÿµ¼╛µû╣σ╝ÅσÉù∩╝ƒ",
    deleteCancelButton: "σÅûµ╢ê",
    deleteConfirmationButton: "σêáΘÖñ",
    fieldEmptyForCvv: "Φ»╖σí½σåÖσìíµáíΘ¬îσÇ╝πÇé",
    fieldEmptyForExpirationDate: "Φ»╖σí½σåÖµ£ëµòêµ£ƒΘÖÉπÇé",
    fieldEmptyForCardholderName: "Φ»╖σí½σåÖµîüσìíΣ║║σºôσÉìπÇé",
    fieldTooLongForCardholderName: "µîüσìíΣ║║σºôσÉìσ┐àΘí╗σ░æΣ║Ä256Σ╕¬σ¡ùτ¼ªπÇé",
    fieldEmptyForNumber: "Φ»╖σí½σåÖσÅ╖τáüπÇé",
    fieldEmptyForPostalCode: "Φ»╖σí½σåÖΘé«µö┐τ╝ûτáüπÇé",
    fieldInvalidForCardholderName: "µ¡ñµîüσìíΣ║║σºôσÉìµùáµòêπÇé",
    fieldInvalidForCvv: "µ¡ñΘ¬îΦ»üτáüµùáµòêπÇé",
    fieldInvalidForExpirationDate: "µ¡ñµ£ëµòêµ£ƒΘÖÉµùáµòêπÇé",
    fieldInvalidForNumber: "µ¡ñσìíσÅ╖µùáµòêπÇé",
    fieldInvalidForPostalCode: "µ¡ñΘé«µö┐τ╝ûτáüµùáµòêπÇé",
    genericError: "µêæΣ╗¼Θüçσê░Σ║åΣ╕ÇΣ║¢Θù«ΘóÿπÇé",
    hostedFieldsTokenizationFailOnDuplicateError:
      "µ¡ñΣ┐íτö¿σìíσ╖▓σ¡ÿσ£¿Σ║Äσ╖▓Σ┐¥σ¡ÿτÜäΣ╗ÿµ¼╛µû╣σ╝ÅΣ╕¡πÇé",
    hostedFieldsFailedTokenizationError:
      "Φ»╖µúÇµƒÑµé¿τÜäΣ┐íµü»∩╝îτä╢σÉÄΘçìΦ»òπÇé",
    hostedFieldsFieldsInvalidError: "Φ»╖µúÇµƒÑµé¿τÜäΣ┐íµü»∩╝îτä╢σÉÄΘçìΦ»òπÇé",
    hostedFieldsTokenizationNetworkErrorError: "τ╜æτ╗£ΘöÖΦ»»πÇéΦ»╖ΘçìΦ»òπÇé",
    hostedFieldsTokenizationCvvVerificationFailedError:
      "Σ┐íτö¿σìíΦ«ñΦ»üσñ▒Φ┤ÑπÇéΦ»╖µúÇµƒÑµé¿τÜäΣ┐íµü»∩╝îτä╢σÉÄΘçìΦ»òπÇé",
    paypalButtonMustBeUsed:
      "Σ╜┐τö¿PayPalµîëΘÆ«Σ╗ÑΣ╛┐τ╗ºτ╗¡Φ┐¢Φíîµé¿τÜäΣ╗ÿµ¼╛πÇé",
    paypalAccountTokenizationFailedError:
      "µ╖╗σèáPayPalΦ┤ªµê╖µù╢Θüçσê░Σ║åΘù«ΘóÿπÇéΦ»╖ΘçìΦ»òπÇé",
    paypalFlowFailedError: "Φ┐₧µÄÑσê░PayPalµù╢Θüçσê░Σ║åΘù«ΘóÿπÇéΦ»╖ΘçìΦ»òπÇé",
    paypalTokenizationRequestActiveError:
      "PayPalΣ╗ÿµ¼╛µÄêµ¥âµ¡úσ£¿σñäτÉåΣ╕¡πÇé",
    venmoCanceledError:
      "Θüçσê░Σ║åΣ╕ÇΣ║¢Θù«ΘóÿπÇéΦ»╖τí«Σ┐¥µé¿τÜäΦ«╛σñçΣ╕èσ«ëΦúàΣ║åµ£Çµû░τëêµ£¼τÜäVenmoσ║öτö¿∩╝îσ╣╢Σ╕öµé¿τÜäµ╡ÅΦºêσÖ¿µö»µîüσêçµìóσê░VenmoπÇé",
    vaultManagerPaymentMethodDeletionError:
      "µùáµ│òσêáΘÖñΣ╗ÿµ¼╛µû╣σ╝Å∩╝îΦ»╖ΘçìΦ»òπÇé",
    venmoAppFailedError: "µ£¬Φâ╜σ£¿µé¿τÜäΦ«╛σñçΣ╕èµë╛σê░Venmoσ║öτö¿πÇé",
    unsupportedCardTypeError: "Σ╕ìµö»µîüΦ»Ñσìíτ▒╗σ₧ïπÇéΦ»╖σ░¥Φ»òσà╢σ«âσìíπÇé",
    applePayTokenizationError:
      "σñäτÉåApple PayΣ╗ÿµ¼╛µù╢σç║τÄ░Σ║åτ╜æτ╗£ΘöÖΦ»»πÇéΦ»╖ΘçìΦ»òπÇé",
    applePayActiveCardError:
      "σ£¿µé¿τÜäApple PayΘÆ▒σîàΣ╕¡µ╖╗σèáΣ╕Çσ╝áσÅùµö»µîüτÜäσìíπÇé",
    cardholderNameLabel: "µîüσìíΣ║║σºôσÉì",
    cardNumberLabel: "σìíσÅ╖",
    cvvLabel: "σìíµáíΘ¬îσÇ╝",
    cvvThreeDigitLabelSubheading: "∩╝ê3Σ╜ìµò░∩╝ë",
    cvvFourDigitLabelSubheading: "∩╝ê4Σ╜ìµò░∩╝ë",
    cardholderNamePlaceholder: "µîüσìíΣ║║σºôσÉì",
    expirationDateLabel: "µ£ëµòêµ£ƒΘÖÉ",
    expirationDateLabelSubheading: "∩╝êµ£ê/σ╣┤∩╝ë",
    expirationDatePlaceholder: "µ£ê/σ╣┤",
    postalCodeLabel: "Θé«µö┐τ╝ûτáü",
    saveCardLabel: "Σ┐¥σ¡ÿσìí",
    payWithCard: "Σ╜┐τö¿σìíµö»Σ╗ÿ",
    endingIn: "Σ╗Ñ{{lastFourCardDigits}}}τ╗ôσ░╛",
    "Apple Pay": "Apple Pay",
    Venmo: "Venmo",
    Card: "σìí",
    PayPal: "PayPal",
    "PayPal Credit": "PayPal Credit",
    "Google Pay": "Google Pay",
    "American Express": "American Express",
    Discover: "σÅæτÄ░",
    "Diners Club": "Diners Club",
    Elo: "Elo",
    Hiper: "Hiper",
    Hipercard: "Hipercard",
    MasterCard: "Mastercard",
    Visa: "Visa",
    JCB: "JCB",
    Maestro: "Maestro",
    UnionPay: "Θô╢Φüö",
  },
  uu = E.assign,
  uh = {
    ar_EG: pB,
    cs_CZ: pj,
    da_DK: pW,
    de_DE: pK,
    el_GR: pY,
    en_AU: pG,
    en_GB: pq,
    en_IN: pQ,
    en_US: pZ,
    es_ES: pJ,
    es_XC: pX,
    fi_FI: p$,
    fr_CA: p1,
    fr_FR: p0,
    fr_XC: p2,
    he_IL: p3,
    hu_HU: p4,
    id_ID: p5,
    it_IT: p6,
    ja_JP: p7,
    ko_KR: p8,
    nl_NL: p9,
    no_NO: ue,
    pl_PL: ut,
    pt_BR: un,
    pt_PT: ur,
    ru_RU: ui,
    sk_SK: ua,
    sv_SE: uo,
    th_TH: us,
    zh_CN: ud,
    zh_HK: ul,
    zh_TW: uc,
    zh_XC: up,
  },
  um = {
    ar: uh.ar_EG,
    cs: uh.cs_CZ,
    da: uh.da_DK,
    de: uh.de_DE,
    el: uh.el_GR,
    en: uh.en_US,
    es: uh.es_ES,
    fi: uh.fi_FI,
    fr: uh.fr_FR,
    id: uh.id_ID,
    it: uh.it_IT,
    hu: uh.hu_HU,
    ja: uh.ja_JP,
    ko: uh.ko_KR,
    nl: uh.nl_NL,
    no: uh.no_NO,
    pl: uh.pl_PL,
    pt: uh.pt_PT,
    ru: uh.ru_RU,
    sk: uh.sk_SK,
    sv: uh.sv_SE,
    th: uh.th_TH,
    zh: uh.zh_CN,
  },
  uy = {
    twoCharacterLocaleAliases: um,
    fiveCharacterLocales: uh,
    translations: uu({}, um, uh),
  },
  uf = rW,
  uE = E.assign,
  u_ = d3,
  uv = it,
  ug = pH,
  uP = rX,
  uC = C,
  ub = lQ,
  uT = uy.fiveCharacterLocales,
  uA = r4,
  uI = 3e4,
  uD = ["offerCredit", "locale"],
  uN = "warn";
function uO() {
  uv.apply(this, arguments);
}
(uO.prototype = Object.create(uv.prototype)),
  (uO.prototype.initialize = function () {
    var e,
      t = Boolean(this._isPayPalCredit),
      n = !1,
      r = this,
      i = t ? "paypalCredit" : "paypal",
      a = this.model.merchantConfiguration[i],
      o = "#braintree--dropin__" + this.model.componentID;
    return (
      (this.paypalConfiguration = uE({}, a)),
      (e = setTimeout(function () {
        r.model.asyncDependencyFailed({
          view: r.ID,
          error: new uP("There was an error connecting to PayPal."),
        });
      }, uI)),
      ug
        .create({ client: this.client })
        .then(function (a) {
          var d,
            l = '[data-braintree-id="paypal-button"]',
            c =
              "production" ===
              r.client.getConfiguration().gatewayConfiguration.environment
                ? "production"
                : "sandbox",
            p = r.model.merchantConfiguration.locale;
          return (
            (r.paypalInstance = a),
            (r.paypalConfiguration.offerCredit = Boolean(t)),
            (d = {
              env: c,
              style: r.paypalConfiguration.buttonStyle || {},
              commit: r.paypalConfiguration.commit,
              payment: function () {
                return a.createPayment(r.paypalConfiguration).catch(s);
              },
              onAuthorize: function (e) {
                var t =
                  r.paypalConfiguration.vault &&
                  !1 === r.paypalConfiguration.vault.vaultPayPal;
                return (
                  t && (e.vault = !1),
                  a
                    .tokenizePayment(e)
                    .then(function (e) {
                      t ||
                        "vault" !== r.paypalConfiguration.flow ||
                        r.model.isGuestCheckout ||
                        (e.vaulted = !0),
                        r.model.addPaymentMethod(e);
                    })
                    .catch(s)
                );
              },
              onError: s,
            }),
            p &&
              p in uT &&
              ((r.paypalConfiguration.locale = p), (d.locale = p)),
            (d.funding = { disallowed: [] }),
            Object.keys(h.paypal.FUNDING).forEach(function (e) {
              "PAYPAL" !== e &&
                "CREDIT" !== e &&
                d.funding.disallowed.push(h.paypal.FUNDING[e]);
            }),
            t
              ? ((l = '[data-braintree-id="paypal-credit-button"]'),
                (d.style.label = "credit"))
              : d.funding.disallowed.push(h.paypal.FUNDING.CREDIT),
            (l = o + " " + l),
            h.paypal.Button.render(d, l).then(function () {
              r.model.asyncDependencyReady(i), (n = !0), clearTimeout(e);
            })
          );
        })
        .catch(s)
    );
    function s(t) {
      n
        ? r.model.reportError(t)
        : (r.model.asyncDependencyFailed({ view: r.ID, error: t }),
          clearTimeout(e));
    }
  }),
  (uO.prototype.requestPaymentMethod = function () {
    return (
      this.model.reportError("paypalButtonMustBeUsed"),
      uv.prototype.requestPaymentMethod.call(this)
    );
  }),
  (uO.prototype.updateConfiguration = function (e, t) {
    -1 === uD.indexOf(e) && (this.paypalConfiguration[e] = t);
  }),
  (uO.isEnabled = function (e) {
    var t = e.client.getConfiguration().gatewayConfiguration,
      n =
        e.merchantConfiguration.paypal || e.merchantConfiguration.paypalCredit;
    return t.paypalEnabled
      ? u_.isIe9() || u_.isIe10()
        ? (uf.sendEvent(
            e.client,
            e.viewID + ".checkout.js-browser-not-supported"
          ),
          uA.resolve(!1))
        : h.paypal && h.paypal.Button
        ? uA.resolve(!0)
        : u ||
          (u = ub
            .loadScript({
              src: uC.CHECKOUT_JS_SOURCE,
              id: uC.PAYPAL_CHECKOUT_SCRIPT_ID,
              dataAttributes: { "log-level": n.logLevel || uN },
            })
            .then(function () {
              return uA.resolve(!0);
            })
            .catch(function () {
              return uA.resolve(!1);
            })
            .then(function (e) {
              return (u = null), uA.resolve(e);
            }))
      : uA.resolve(!1);
  });
var ux = uO,
  uF = E.assign,
  uM = r4,
  uw = C.paymentOptionIDs,
  uL = ux;
function uS() {
  uL.apply(this, arguments);
}
(uS.prototype = Object.create(uL.prototype)),
  (uS.prototype.constructor = uS),
  (uS.ID = uS.prototype.ID = uw.paypal),
  (uS.isEnabled = function (e) {
    return e.merchantConfiguration.paypal
      ? uL.isEnabled(uF({ viewID: uS.ID }, e))
      : uM.resolve(!1);
  });
var uR = uS,
  uk = E.assign,
  uV = r4,
  uz = C.paymentOptionIDs,
  uU = ux;
function uH() {
  uU.apply(this, arguments), (this._isPayPalCredit = !0);
}
(uH.prototype = Object.create(uU.prototype)),
  (uH.prototype.constructor = uH),
  (uH.ID = uH.prototype.ID = uz.paypalCredit),
  (uH.isEnabled = function (e) {
    return e.merchantConfiguration.paypalCredit
      ? uU.isEnabled(uk({ viewID: uH.ID }, e))
      : uV.resolve(!1);
  });
var uB = uH,
  uj = D,
  uW = {
    VENMO_NOT_ENABLED: {
      type: uj.types.MERCHANT,
      code: "VENMO_NOT_ENABLED",
      message: "Venmo is not enabled for this merchant.",
    },
    VENMO_TOKENIZATION_REQUEST_ACTIVE: {
      type: uj.types.MERCHANT,
      code: "VENMO_TOKENIZATION_REQUEST_ACTIVE",
      message: "Another tokenization request is active.",
    },
    VENMO_TOKENIZATION_REQUEST_NOT_ACTIVE: {
      type: uj.types.MERCHANT,
      code: "VENMO_TOKENIZATION_REQUEST_NOT_ACTIVE",
      message: "No tokenization in progress.",
    },
    VENMO_APP_FAILED: {
      type: uj.types.UNKNOWN,
      code: "VENMO_APP_FAILED",
      message: "Venmo app encountered a problem.",
    },
    VENMO_APP_CANCELED: {
      type: uj.types.CUSTOMER,
      code: "VENMO_APP_CANCELED",
      message: "Venmo app authorization was canceled.",
    },
    VENMO_CANCELED: {
      type: uj.types.CUSTOMER,
      code: "VENMO_CANCELED",
      message:
        "User canceled Venmo authorization, or Venmo app is not available.",
    },
    VENMO_CUSTOMER_CANCELED: {
      type: uj.types.CUSTOMER,
      code: "VENMO_CUSTOMER_CANCELED",
      message: "User canceled Venmo authorization.",
    },
    VENMO_NETWORK_ERROR: {
      type: uj.types.NETWORK,
      code: "VENMO_NETWORK_ERROR",
      message: "Something went wrong making the request",
    },
    VENMO_DESKTOP_CANCELED: {
      type: uj.types.CUSTOMER,
      code: "VENMO_DESKTOP_CANCELED",
      message:
        "User canceled Venmo authorization by closing the Venmo Desktop modal.",
    },
    VENMO_TOKENIZATION_CANCELED_BY_MERCHANT: {
      type: uj.types.MERCHANT,
      code: "VENMO_TOKENIZATION_CANCELED_BY_MERCHANT",
      message: "The Venmo tokenization was canceled by the merchant.",
    },
    VENMO_DESKTOP_UNKNOWN_ERROR: {
      type: uj.types.UNKNOWN,
      code: "VENMO_DESKTOP_UNKNOWN_ERROR",
      message: "Something went wrong with the Venmo Desktop flow.",
    },
    VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED: {
      type: uj.types.NETWORK,
      code: "VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED",
      message: "Something went wrong creating the Venmo Payment Context.",
    },
    VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR: {
      type: uj.types.UNKNOWN,
      code: "VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR",
      message: "Something went wrong during mobile polling.",
    },
    VENMO_MOBILE_POLLING_TOKENIZATION_EXPIRED: {
      type: uj.types.CUSTOMER,
      code: "VENMO_MOBILE_POLLING_TOKENIZATION_EXPIRED",
      message: "The Venmo authorization request is expired.",
    },
    VENMO_MOBILE_POLLING_TOKENIZATION_CANCELED: {
      type: uj.types.CUSTOMER,
      code: "VENMO_MOBILE_POLLING_TOKENIZATION_CANCELED",
      message: "The Venmo authorization was canceled",
    },
    VENMO_MOBILE_POLLING_TOKENIZATION_TIMEOUT: {
      type: uj.types.CUSTOMER,
      code: "VENMO_MOBILE_POLLING_TOKENIZATION_TIMEOUT",
      message: "Customer took too long to authorize Venmo payment.",
    },
    VENMO_MOBILE_POLLING_TOKENIZATION_FAILED: {
      type: uj.types.UNKNOWN,
      code: "VENMO_MOBILE_POLLING_TOKENIZATION_FAILED",
      message: "The Venmo authorization failed.",
    },
    VENMO_INVALID_PROFILE_ID: {
      type: uj.types.MERCHANT,
      code: "VENMO_INVALID_PROFILE_ID",
      message: "Venmo profile ID is invalid.",
    },
    VENMO_INVALID_DEEP_LINK_RETURN_URL: {
      type: uj.types.MERCHANT,
      code: "VENMO_INVALID_DEEP_LINK_RETURN_URL",
      message: "Venmo deep link return URL is invalid.",
    },
    VENMO_TOKENIZATION_FAILED: {
      type: uj.types.UNKNOWN,
      code: "VENMO_TOKENIZATION_FAILED",
      message: "Venmo encountered a problem",
    },
  },
  uK = {},
  uY = {
    get exports() {
      return uK;
    },
    set exports(v) {
      uK = v;
    },
  },
  uG = oc,
  uq = cx,
  uQ = /webkit/i;
function uZ(e) {
  return uQ.test(e);
}
function uJ(e) {
  return e.indexOf("CriOS") > -1;
}
function uX(e) {
  return e.indexOf("FBAN") > -1;
}
var u$ = function (e) {
  return (
    uG((e = e || window.navigator.userAgent)) &&
    uZ(e) &&
    !uJ(e) &&
    !uq(e) &&
    !uX(e)
  );
};
uY.exports = u$;
var u1 = {},
  u0 = {
    get exports() {
      return u1;
    },
    set exports(v) {
      u1 = v;
    },
  };
u0.exports = om;
var u2 = on,
  u3 = op,
  u4 = od,
  u5 = uK,
  u6 = oL,
  u7 = u1;
function u8() {
  return u2() && window.navigator.userAgent.toLowerCase().indexOf("wv") > -1;
}
function u9() {
  return !!u4() && (u6() || !u5());
}
function he() {
  var e = window.navigator.userAgent.toLowerCase();
  return (
    !!(e.indexOf("huawei") > -1 && e.indexOf("fban") > -1) ||
    (!!u2() && (e.indexOf("fb_iab") > -1 || e.indexOf("instagram") > -1))
  );
}
function ht() {
  return u4() && u3();
}
var hn = {
    isAndroid: u2,
    isAndroidWebview: u8,
    isChrome: u3,
    isIos: u4,
    isIosChrome: ht,
    isSamsung: u7,
    isIosSafari: u5,
    isIosWebview: u6,
    isFacebookOwnedBrowserOnAndroid: he,
    doesNotSupportWindowOpenInIos: u9,
  },
  hr = hn;
function hi(e) {
  var t,
    n,
    r,
    i = hr.isAndroid(),
    a = i || hr.isIos(),
    o = i && hr.isChrome(),
    s = hr.isIosSafari() || o,
    d =
      hr.isIosChrome() ||
      hr.isFacebookOwnedBrowserOnAndroid() ||
      hr.isSamsung();
  return (
    (r = !0 === (e = e || {}).allowDesktop),
    (t = !e.hasOwnProperty("allowNewBrowserTab") || e.allowNewBrowserTab),
    (n = !e.hasOwnProperty("allowWebviews") || e.allowWebviews),
    !(d || (!n && (hr.isAndroidWebview() || hr.isIosWebview()))) &&
      (a ? (t ? a : s) : r)
  );
}
var ha = { isBrowserSupported: hi },
  ho = {
    DOCUMENT_VISIBILITY_CHANGE_EVENT_DELAY: 500,
    DEFAULT_PROCESS_RESULTS_DELAY: 1e3,
    VENMO_APP_OR_MOBILE_AUTH_URL: "https://venmo.com/go/checkout",
    VENMO_MOBILE_APP_AUTH_ONLY_URL: "https://venmo.com/braintree/checkout",
    VENMO_WEB_LOGIN_URL: "https://account.venmo.com/go/web",
  },
  hs = function (e) {
    e = e || window;
    try {
      return e.self !== e.top;
    } catch (e) {
      return !0;
    }
  },
  hd = ho;
function hl(e) {
  return e.useAllowDesktopWebLogin
    ? hd.VENMO_WEB_LOGIN_URL
    : e.mobileWebFallBack
    ? hd.VENMO_APP_OR_MOBILE_AUTH_URL
    : hd.VENMO_MOBILE_APP_AUTH_ONLY_URL;
}
var hc = hl,
  hp = pp,
  hu = a4,
  hh = t0,
  hm = "3.91.0",
  hy =
    '<svg width="198" height="58" viewBox="0 0 198 58" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M43.0702 13.6572C44.1935 15.4585 44.6999 17.3139 44.6999 19.6576C44.6999 27.1328 38.1277 36.8436 32.7935 43.6625H20.6099L15.7236 15.2939L26.3917 14.3105L28.9751 34.4966C31.389 30.6783 34.3678 24.6779 34.3678 20.587C34.3678 18.3477 33.9727 16.8225 33.3553 15.5666L43.0702 13.6572Z" fill="white"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M56.8965 26.1491C58.8596 26.1491 63.8018 25.2772 63.8018 22.5499C63.8018 21.2402 62.8481 20.587 61.7242 20.587C59.7579 20.587 57.1776 22.8763 56.8965 26.1491ZM56.6715 31.5506C56.6715 34.8807 58.5787 36.1873 61.107 36.1873C63.8603 36.1873 66.4966 35.534 69.923 33.8433L68.6324 42.3523C66.2183 43.4976 62.4559 44.2617 58.8039 44.2617C49.5403 44.2617 46.2249 38.8071 46.2249 31.9879C46.2249 23.1496 51.6179 13.765 62.7365 13.765C68.858 13.765 72.2809 17.0949 72.2809 21.7317C72.2815 29.2066 62.4005 31.4965 56.6715 31.5506Z" fill="white"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M103.067 20.3142C103.067 21.4052 102.897 22.9875 102.727 24.0216L99.5262 43.6622H89.1385L92.0585 25.658C92.1139 25.1696 92.284 24.1865 92.284 23.6411C92.284 22.3314 91.4414 22.0047 90.4282 22.0047C89.0826 22.0047 87.7337 22.6042 86.8354 23.0418L83.5234 43.6625H73.0772L77.8495 14.257H86.8908L87.0052 16.6041C89.1382 15.2404 91.9469 13.7656 95.932 13.7656C101.212 13.765 103.067 16.3845 103.067 20.3142Z" fill="white"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M133.906 16.9841C136.881 14.9131 139.69 13.765 143.563 13.765C148.897 13.765 150.753 16.3845 150.753 20.3142C150.753 21.4052 150.583 22.9875 150.413 24.0216L147.216 43.6622H136.825L139.801 25.2774C139.855 24.786 139.971 24.1865 139.971 23.8063C139.971 22.3317 139.128 22.0047 138.115 22.0047C136.824 22.0047 135.535 22.5501 134.577 23.0418L131.266 43.6625H120.878L123.854 25.2777C123.908 24.7863 124.02 24.1868 124.02 23.8065C124.02 22.332 123.177 22.0049 122.167 22.0049C120.819 22.0049 119.473 22.6045 118.574 23.0421L115.26 43.6628H104.817L109.589 14.2573H118.52L118.8 16.7122C120.878 15.241 123.684 13.7662 127.446 13.7662C130.704 13.765 132.837 15.129 133.906 16.9841Z" fill="white"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M171.426 25.5502C171.426 23.1496 170.808 21.513 168.956 21.513C164.857 21.513 164.015 28.55 164.015 32.1498C164.015 34.8807 164.802 36.5709 166.653 36.5709C170.528 36.5709 171.426 29.1497 171.426 25.5502ZM153.458 31.7152C153.458 22.442 158.511 13.765 170.136 13.765C178.896 13.765 182.098 18.7854 182.098 25.7148C182.098 34.8805 177.099 44.3723 165.194 44.3723C156.378 44.3723 153.458 38.7525 153.458 31.7152Z" fill="white"/>\n</svg>',
  hf =
    "Tap cancel payment to cancel and return to the business. Continue payment will relaunch the payment window.",
  hE = 400,
  h_ = 570,
  hv = {
    backdrop: "venmo-desktop-web-backdrop",
    backdropHidden: "venmo-desktop-web-backdrop.hidden",
    backdropContainer: "venmo-backdrop-container",
    cancelButton: "venmo-popup-cancel-button",
    continueButton: "venmo-popup-continue-button",
    message: "venmo-message",
    instructions: "venmo-instructions",
    venmoLogo: "venmo-full-logo",
  };
function hg(e) {
  var t = e.checkForStatusChange,
    n = e.cancelTokenization,
    r = e.venmoUrl,
    i = e.assetsUrl,
    a = e.debug || !1,
    o = hP(),
    s = i + "/web/" + hm + "/html";
  return new hh(function (e, i) {
    hp.create(
      {
        name: "venmoDesktopWebLogin",
        dispatchFrameUrl: s + "/dispatch-frame" + hu(a) + ".html",
        openFrameUrl: s + "/venmo-landing-frame" + hu(a) + ".html",
        top: o.top,
        left: o.left,
        height: h_,
        width: hE,
      },
      function (a) {
        document
          .getElementById(hv.continueButton)
          .addEventListener("click", function () {
            a.focus();
          }),
          document
            .getElementById(hv.cancelButton)
            .addEventListener("click", function () {
              a.close(), n(), hC();
            }),
          a.open({}, function (n) {
            n ? i(n) : t(1).then(e).catch(i), a.close(), hC();
          }),
          a.redirect(r);
      }
    );
  });
}
function hP() {
  return {
    top: Math.round((window.outerHeight - h_) / 2) + window.screenTop,
    left: Math.round((window.outerWidth - hE) / 2) + window.screenLeft,
  };
}
function hC() {
  document.getElementById("venmo-desktop-web-backdrop").classList.add("hidden");
}
function hb() {
  return [
    "#" + hv.backdropHidden + " {",
    "display: none;",
    "}",
    "#" + hv.backdrop + " {",
    "cursor: pointer;",
    "position: absolute;",
    "top: 0;",
    "left: 0;",
    "bottom: 0;",
    "width: 100%;",
    "background: rgba(0, 0, 0, 0.4);",
    "}",
  ]
    .concat(
      [
        "#" + hv.backdropContainer + " {",
        "display: flex;",
        "align-content: center;",
        "justify-content: center;",
        "align-items: center;",
        "width: 100%;",
        "height: 100%;",
        "flex-direction: column;",
        "}",
      ],
      [
        "#" + hv.cancelButton + " {",
        "height: 24px;",
        "width: 380px;",
        "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;",
        "font-style: normal;",
        "font-weight: 700;",
        "font-size: 18px;",
        "line-height: 24px;",
        "text-align: center;",
        "background-color: transparent;",
        "border: none;",
        "color: #FFFFFF;",
        "margin-top: 28px;",
        "}",
      ],
      [
        "#" + hv.continueButton + " {",
        "width: 400px;",
        "height: 50px;",
        "background: #0074DE;",
        "border-radius: 24px;",
        "border: none;",
        "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;",
        "font-style: normal;",
        "font-weight: 700;",
        "font-size: 18px;",
        "color: #FFFFFF;",
        "margin-top: 44px;",
        "}",
      ],
      [
        "#" + hv.message + " {",
        "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;",
        "font-style: normal;",
        "font-weight: 500;",
        "font-size: 24px;",
        "line-height: 32px;",
        "text-align: center;",
        "color: #FFFFFF;",
        "margin-top: 32px;",
        "}",
      ],
      [
        "#" + hv.instructions + " {",
        "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;",
        "font-style: normal;",
        "font-weight: 400;",
        "font-size: 16px;",
        "line-height: 20px;",
        "text-align: center;",
        "color: #FFFFFF;",
        "margin-top: 16px;",
        "width: 400px;",
        "}",
      ]
    )
    .join("\n");
}
function hT() {
  var e,
    t,
    n,
    r,
    i,
    a,
    o,
    s,
    d = document.getElementById(hv.backdrop);
  if (d) {
    d.classList.remove("hidden");
    return;
  }
  (e = document.createElement("style")),
    (t = document.createElement("div")),
    (n = document.createElement("div")),
    (r = document.createElement("div")),
    (i = document.createElement("div")),
    (a = document.createElement("div")),
    (o = document.createElement("button")),
    (s = document.createElement("button")),
    (e.id = "venmo-desktop-web__injected-styles"),
    (e.innerHTML = hb()),
    (t.id = hv.backdrop),
    (n.id = hv.backdropContainer),
    (r.id = hv.venmoLogo),
    (r.innerHTML = hy),
    (i.id = hv.message),
    (i.innerText = "What would you like to do?"),
    (a.id = hv.instructions),
    (a.innerText = hf),
    (o.id = hv.continueButton),
    (o.innerText = "Continue payment"),
    (s.id = hv.cancelButton),
    (s.innerText = "Cancel payment"),
    document.head.appendChild(e),
    n.appendChild(r),
    n.appendChild(i),
    n.appendChild(a),
    n.appendChild(o),
    n.appendChild(s),
    t.appendChild(n),
    document.body.appendChild(t);
}
function hA(e) {
  return hT(), hg(e);
}
var hI = { runWebLogin: hA, openPopup: hg, POPUP_WIDTH: hE, POPUP_HEIGHT: h_ },
  hD = {},
  hN = {};
Object.defineProperty(hN, "__esModule", { value: !0 }),
  (hN.VENMO_DESKTOP_UNKNOWN_ERROR =
    hN.VENMO_DESKTOP_REQUEST_NEW_QR_CODE =
    hN.VENMO_DESKTOP_CLOSED_FROM_PARENT =
    hN.VENMO_DESKTOP_IFRAME_READY =
    hN.VENMO_DESKTOP_DISPLAY_QR_CODE =
    hN.VENMO_DESKTOP_DISPLAY_ERROR =
    hN.VENMO_DESKTOP_CUSTOMER_CANCELED =
    hN.VENMO_DESKTOP_AUTHORIZING =
    hN.VENMO_DESKTOP_AUTHORIZE =
    hN.VENMO_DESKTOP_AUTHORIZATION_TIMED_OUT =
      void 0),
  (hN.VENMO_DESKTOP_AUTHORIZATION_TIMED_OUT =
    "VENMO_DESKTOP_AUTHORIZATION_TIMED_OUT"),
  (hN.VENMO_DESKTOP_AUTHORIZE = "VENMO_DESKTOP_AUTHORIZE"),
  (hN.VENMO_DESKTOP_AUTHORIZING = "VENMO_DESKTOP_AUTHORIZING"),
  (hN.VENMO_DESKTOP_CUSTOMER_CANCELED = "VENMO_DESKTOP_CUSTOMER_CANCELED"),
  (hN.VENMO_DESKTOP_DISPLAY_ERROR = "VENMO_DESKTOP_DISPLAY_ERROR"),
  (hN.VENMO_DESKTOP_DISPLAY_QR_CODE = "VENMO_DESKTOP_DISPLAY_QR_CODE"),
  (hN.VENMO_DESKTOP_IFRAME_READY = "VENMO_DESKTOP_IFRAME_READY"),
  (hN.VENMO_DESKTOP_CLOSED_FROM_PARENT = "VENMO_DESKTOP_CLOSED_FROM_PARENT"),
  (hN.VENMO_DESKTOP_REQUEST_NEW_QR_CODE = "VENMO_DESKTOP_REQUEST_NEW_QR_CODE"),
  (hN.VENMO_DESKTOP_UNKNOWN_ERROR = "VENMO_DESKTOP_UNKNOWN_ERROR");
var hO = {};
Object.defineProperty(hO, "__esModule", { value: !0 }),
  (hO.VENMO_PAYMENT_CONTEXT_STATUS_QUERY =
    hO.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY =
    hO.UPDATE_PAYMENT_CONTEXT_QUERY =
    hO.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY =
    hO.CREATE_PAYMENT_CONTEXT_QUERY =
    hO.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY =
      void 0),
  (hO.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY =
    "mutation CreateVenmoQRCodePaymentContext($input: CreateVenmoQRCodePaymentContextInput!) {\n  createVenmoQRCodePaymentContext(input: $input) {\n    clientMutationId\n    venmoQRCodePaymentContext {\n      id\n      merchantId\n      createdAt\n      expiresAt\n    }\n  }\n}"),
  (hO.CREATE_PAYMENT_CONTEXT_QUERY =
    "mutation CreateVenmoPaymentContext($input: CreateVenmoPaymentContextInput!) {\n  createVenmoPaymentContext(input: $input) {\n    clientMutationId\n    venmoPaymentContext {\n      id\n      merchantId\n      createdAt\n      expiresAt\n    }\n  }\n}"),
  (hO.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY =
    "mutation UpdateVenmoQRCodePaymentContext($input: UpdateVenmoQRCodePaymentContextInput!) {\n  updateVenmoQRCodePaymentContext(input: $input) {\n    clientMutationId\n  }\n}"),
  (hO.UPDATE_PAYMENT_CONTEXT_QUERY =
    "mutation UpdateVenmoPaymentContextStatus($input: UpdateVenmoPaymentContextStatusInput!) {\n  updateVenmoPaymentContextStatus(input: $input) {\n    clientMutationId\n  }\n}"),
  (hO.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY =
    "query PaymentContext($id: ID!) {\n  node(id: $id) {\n    ... on VenmoQRCodePaymentContext {\n      status\n      paymentMethodId\n      userName\n    }\n  }\n}"),
  (hO.VENMO_PAYMENT_CONTEXT_STATUS_QUERY =
    "query PaymentContext($id: ID!) {\n  node(id: $id) {\n    ... on VenmoPaymentContext {\n      status\n      paymentMethodId\n      userName\n      payerInfo {\n        firstName\n        lastName\n        phoneNumber\n        email\n        externalId\n        userName\n      }\n    }\n  }\n}");
var hx =
    (h && h.__assign) ||
    function () {
      return (hx =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }).apply(this, arguments);
    },
  hF =
    (h && h.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(hD, "__esModule", { value: !0 });
var hM = hF(aQ),
  hw = hF(aa),
  hL = hF(Q),
  hS = hN,
  hR = hO,
  hk = 1e3,
  hV = 2e3,
  hz = (function () {
    function e(e) {
      (this.isHidden = !0),
        (this.env = e.environment),
        (this.id = hL.default()),
        (this.profileId = e.profileId),
        (this.displayName = e.displayName),
        (this.paymentMethodUsage = e.paymentMethodUsage),
        (this.shouldUseLegacyQRCodeMutation = !this.paymentMethodUsage);
      var t = e.url + "#" + this.env + "_" + this.id;
      (this.bus = new hM.default({
        channel: this.id,
        verifyDomain: e.verifyDomain,
        targetFrames: [],
      })),
        (this.apiRequest = e.apiRequest),
        (this.sendEvent = e.sendEvent),
        (this.Promise = e.Promise),
        (this.alertBox = document.createElement("div")),
        this.alertBox.setAttribute("data-venmo-desktop-id", this.id),
        this.alertBox.setAttribute("role", "alert"),
        (this.alertBox.style.position = "fixed"),
        (this.alertBox.style.display = "none"),
        (this.alertBox.style.height = "1px"),
        (this.alertBox.style.width = "1px"),
        (this.alertBox.style.overflow = "hidden"),
        (this.alertBox.style.zIndex = "0"),
        (this.iframe = hw.default({
          src: t,
          name: "venmo-desktop-iframe",
          style: {
            display: "none",
            position: "fixed",
            top: "0",
            bottom: "0",
            right: "0",
            left: "0",
            height: "100%",
            width: "100%",
            zIndex: "9999999",
          },
          title: "Venmo Desktop",
        })),
        this.bus.addTargetFrame(this.iframe);
    }
    return (
      (e.prototype.initialize = function () {
        var e = this;
        return new this.Promise(function (t) {
          e.bus.on(hS.VENMO_DESKTOP_IFRAME_READY, function () {
            t(e);
          }),
            e.bus.on(hS.VENMO_DESKTOP_REQUEST_NEW_QR_CODE, function () {
              e.sendEvent("venmo.tokenize.desktop.restarted-from-error-view"),
                e.startPolling();
            }),
            document.body.appendChild(e.iframe),
            document.body.appendChild(e.alertBox);
        });
      }),
      (e.prototype.launchDesktopFlow = function () {
        var e = this;
        this.isHidden = !1;
        var t = new this.Promise(function (t, n) {
          e.launchDesktopPromiseRejectFunction = n;
          var r = function () {
              e.bus.off(hS.VENMO_DESKTOP_CUSTOMER_CANCELED, a),
                e.bus.off(hS.VENMO_DESKTOP_UNKNOWN_ERROR, i);
            },
            i = function (t) {
              r(),
                e.sendEvent("venmo.tokenize.desktop.unknown-error"),
                n({
                  allowUIToHandleError: !1,
                  reason: "UNKNOWN_ERROR",
                  err: t,
                });
            },
            a = function () {
              r(),
                e.updateVenmoDesktopPaymentContext("CANCELED"),
                e.sendEvent(
                  "venmo.tokenize.desktop.status-change.canceled-from-modal"
                ),
                n({ allowUIToHandleError: !1, reason: "CUSTOMER_CANCELED" });
            };
          (e.completedHandler = function (e) {
            r(), t(e);
          }),
            e.bus.on(hS.VENMO_DESKTOP_CUSTOMER_CANCELED, a),
            e.bus.on(hS.VENMO_DESKTOP_UNKNOWN_ERROR, i);
        });
        return (
          (this.iframe.style.display = "block"),
          this.setAlert("Generating a QR code, get your Venmo app ready"),
          this.iframe.focus(),
          this.startPolling(),
          t
            .then(function (t) {
              return (
                delete e.venmoContextId,
                delete e.launchDesktopPromiseRejectFunction,
                t
              );
            })
            .catch(function (t) {
              return (
                delete e.venmoContextId,
                delete e.launchDesktopPromiseRejectFunction,
                e.Promise.reject(t)
              );
            })
        );
      }),
      (e.prototype.triggerCompleted = function (e) {
        var t = this;
        this.isHidden ||
          setTimeout(function () {
            t.completedHandler && t.completedHandler(e),
              delete t.completedHandler;
          }, hV);
      }),
      (e.prototype.triggerRejected = function (e) {
        this.launchDesktopPromiseRejectFunction &&
          this.launchDesktopPromiseRejectFunction(e);
      }),
      (e.prototype.hideDesktopFlow = function () {
        this.setAlert(""),
          (this.iframe.style.display = "none"),
          this.bus.emit(hS.VENMO_DESKTOP_CLOSED_FROM_PARENT),
          (this.isHidden = !0);
      }),
      (e.prototype.displayError = function (e) {
        this.isHidden ||
          (this.bus.emit(hS.VENMO_DESKTOP_DISPLAY_ERROR, { message: e }),
          this.setAlert(e));
      }),
      (e.prototype.displayQRCode = function (e, t) {
        this.isHidden ||
          (this.bus.emit(hS.VENMO_DESKTOP_DISPLAY_QR_CODE, {
            id: e,
            merchantId: t,
          }),
          this.setAlert("To scan the QR code, open your Venmo app"));
      }),
      (e.prototype.authorize = function () {
        this.isHidden ||
          (this.bus.emit(hS.VENMO_DESKTOP_AUTHORIZE),
          this.setAlert("Venmo account authorized"));
      }),
      (e.prototype.authorizing = function () {
        this.isHidden ||
          (this.bus.emit(hS.VENMO_DESKTOP_AUTHORIZING),
          this.setAlert("Authorize on your Venmo app"));
      }),
      (e.prototype.startPolling = function () {
        var e = this;
        return this.createVenmoDesktopPaymentContext()
          .then(function (t) {
            var n =
                new Date(t.expiresAt).getTime() -
                new Date(t.createdAt).getTime(),
              r = Date.now() + n;
            return (
              e.displayQRCode(t.id, t.merchantId),
              e.pollForStatusChange(t.status, r)
            );
          })
          .then(function (t) {
            if (t) {
              var n = t.userName || "";
              (n = "@" + n.replace("@", "")),
                e.triggerCompleted({
                  paymentMethodNonce: t.paymentMethodId,
                  username: n,
                  payerInfo: t.payerInfo,
                  id: e.venmoContextId || "",
                });
            }
          })
          .catch(function (t) {
            t.allowUIToHandleError ||
              (e.sendEvent("venmo.tokenize.desktop.unhandled-error"),
              e.triggerRejected(t));
          });
      }),
      (e.prototype.pollForStatusChange = function (e, t) {
        var n = this;
        return this.venmoContextId
          ? Date.now() > t
            ? this.updateVenmoDesktopPaymentContext("EXPIRED").then(
                function () {
                  return (
                    n.displayError("Something went wrong"),
                    n.sendEvent(
                      "venmo.tokenize.desktop.status-change.sdk-timeout"
                    ),
                    n.Promise.reject({
                      allowUIToHandleError: !0,
                      reason: "TIMEOUT",
                    })
                  );
                }
              )
            : this.lookupVenmoDesktopPaymentContext().then(function (r) {
                if (!n.venmoContextId || !r) return n.Promise.resolve();
                var i = r.status;
                if (i !== e)
                  switch (
                    ((e = i),
                    n.sendEvent(
                      "venmo.tokenize.desktop.status-change." + e.toLowerCase()
                    ),
                    e)
                  ) {
                    case "CREATED":
                      break;
                    case "EXPIRED":
                    case "FAILED":
                    case "CANCELED":
                      var a =
                        "CANCELED" === e
                          ? "The authorization was canceled"
                          : "Something went wrong";
                      return (
                        n.displayError(a),
                        n.Promise.reject({
                          allowUIToHandleError: !0,
                          reason: e,
                        })
                      );
                    case "SCANNED":
                      n.authorizing();
                      break;
                    case "APPROVED":
                      return n.authorize(), n.Promise.resolve(r);
                  }
                return new n.Promise(function (r, i) {
                  setTimeout(function () {
                    n.pollForStatusChange(e, t).then(r).catch(i);
                  }, hk);
                });
              })
          : this.Promise.resolve();
      }),
      (e.prototype.teardown = function () {
        this.bus.teardown(),
          this.iframe.parentNode &&
            this.iframe.parentNode.removeChild(this.iframe),
          this.alertBox.parentNode &&
            this.alertBox.parentNode.removeChild(this.alertBox);
      }),
      (e.prototype.setAlert = function (e) {
        (this.alertBox.style.display = e ? "block" : "none"),
          (this.alertBox.textContent = e);
      }),
      (e.prototype.createPaymentContextFromGraphqlLegacyQRCodeMutation =
        function (e) {
          return this.apiRequest(hR.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY, {
            input: { environment: this.env, intent: e },
          }).then(function (e) {
            return e.createVenmoQRCodePaymentContext.venmoQRCodePaymentContext;
          });
        }),
      (e.prototype.createPaymentContextFromGraphQL = function (e) {
        var t = {
          intent: e,
          paymentMethodUsage: this.paymentMethodUsage,
          customerClient: "DESKTOP",
        };
        return (
          this.profileId && (t.merchantProfileId = this.profileId),
          this.displayName && (t.displayName = this.displayName),
          this.apiRequest(hR.CREATE_PAYMENT_CONTEXT_QUERY, { input: t }).then(
            function (e) {
              return e.createVenmoPaymentContext.venmoPaymentContext;
            }
          )
        );
      }),
      (e.prototype.createVenmoDesktopPaymentContext = function () {
        var e = this;
        return (
          this.shouldUseLegacyQRCodeMutation
            ? this.createPaymentContextFromGraphqlLegacyQRCodeMutation(
                "PAY_FROM_APP"
              )
            : this.createPaymentContextFromGraphQL("PAY_FROM_APP")
        ).then(function (t) {
          e.venmoContextId = t.id;
          var n = e.profileId || t.merchantId;
          return {
            id: t.id,
            status: t.status,
            merchantId: n,
            createdAt: t.createdAt,
            expiresAt: t.expiresAt,
          };
        });
      }),
      (e.prototype.updateVenmoDesktopPaymentContext = function (e, t) {
        if ((void 0 === t && (t = {}), !this.venmoContextId))
          return this.Promise.resolve();
        var n = { input: hx({ id: this.venmoContextId, status: e }, t) },
          r = this.shouldUseLegacyQRCodeMutation
            ? hR.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY
            : hR.UPDATE_PAYMENT_CONTEXT_QUERY;
        return this.apiRequest(r, n).then(function () {});
      }),
      (e.prototype.lookupVenmoDesktopPaymentContext = function () {
        if (!this.venmoContextId) return this.Promise.resolve();
        var e = this.shouldUseLegacyQRCodeMutation
          ? hR.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY
          : hR.VENMO_PAYMENT_CONTEXT_STATUS_QUERY;
        return this.apiRequest(e, { id: this.venmoContextId }).then(function (
          e
        ) {
          return e.node;
        });
      }),
      e
    );
  })();
hD.default = hz;
var hU =
    (h && h.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    },
  hH = hU(hD),
  hB = function (e) {
    return new hH.default(e).initialize();
  },
  hj = nG,
  hW = ha,
  hK = hn,
  hY = ho,
  hG = uW,
  hq = en,
  hQ = tx,
  hZ = nq,
  hJ = n$,
  hX = nn,
  h$ = D,
  h1 = hs,
  h0 = t0,
  h2 = tJ,
  h3 = hc,
  h4 = hI.runWebLogin,
  h5 = eP,
  h6 = hB,
  h7 = hO,
  h8 = "3.91.0",
  h9 = 250,
  me = 3e5;
function mt(e) {
  var t = this;
  (this._allowDesktopWebLogin = e.allowDesktopWebLogin || !1),
    (this._mobileWebFallBack = e.mobileWebFallBack || !1),
    (this._createPromise = e.createPromise),
    (this._allowNewBrowserTab = !1 !== e.allowNewBrowserTab),
    (this._allowWebviews = !1 !== e.allowWebviews),
    (this._allowDesktop = !0 === e.allowDesktop),
    (this._useRedirectForIOS = !0 === e.useRedirectForIOS),
    (this._profileId = e.profileId),
    (this._displayName = e.displayName),
    (this._deepLinkReturnUrl = e.deepLinkReturnUrl),
    (this._ignoreHistoryChanges = e.ignoreHistoryChanges),
    (this._paymentMethodUsage = (e.paymentMethodUsage || "").toUpperCase()),
    (this._shouldUseLegacyFlow = !this._paymentMethodUsage),
    (this._requireManualReturn = !0 === e.requireManualReturn),
    (this._useDesktopQRFlow =
      this._allowDesktop && this._isDesktop() && !this._allowDesktopWebLogin),
    (this._useAllowDesktopWebLogin =
      this._allowDesktopWebLogin && this._isDesktop()),
    (this._cannotHaveReturnUrls = h1() || this._requireManualReturn),
    (this._allowAndroidRecreation = !1 !== e.allowAndroidRecreation),
    (this._maxRetryCount = 3),
    (this._shouldCreateVenmoPaymentContext =
      this._cannotHaveReturnUrls || !this._shouldUseLegacyFlow),
    hj.sendEvent(
      this._createPromise,
      "venmo.desktop-flow.configured." + String(Boolean(this._allowDesktop))
    ),
    this.hasTokenizationResult()
      ? hj.sendEvent(this._createPromise, "venmo.appswitch.return-in-new-tab")
      : this._useDesktopQRFlow
      ? (this._createPromise = this._createPromise.then(function (e) {
          var n = e.getConfiguration().gatewayConfiguration;
          return h6({
            url: n.assetsUrl + "/web/" + h8 + "/html/venmo-desktop-frame.html",
            environment:
              "production" === n.environment ? "PRODUCTION" : "SANDBOX",
            profileId: t._profileId || n.payWithVenmo.merchantId,
            paymentMethodUsage: t._paymentMethodUsage,
            displayName: t._displayName,
            Promise: h0,
            apiRequest: function (t, n) {
              return e
                .request({
                  api: "graphQLApi",
                  data: { query: t, variables: n },
                })
                .then(function (e) {
                  return e.data;
                });
            },
            sendEvent: function (e) {
              hj.sendEvent(t._createPromise, e);
            },
            verifyDomain: hQ,
          })
            .then(function (n) {
              return (
                (t._venmoDesktopInstance = n),
                hj.sendEvent(t._createPromise, "venmo.desktop-flow.presented"),
                e
              );
            })
            .catch(function () {
              return (
                hj.sendEvent(
                  t._createPromise,
                  "venmo.desktop-flow.setup-failed"
                ),
                (t._useDesktopQRFlow = !1),
                e
              );
            });
        }))
      : this._shouldCreateVenmoPaymentContext &&
        ((this._mobilePollingInterval = h9),
        (this._mobilePollingExpiresThreshold = me),
        (this._createPromise = this._createPromise.then(function (e) {
          var n = t._cannotHaveReturnUrls
              ? "manual-return"
              : "mobile-payment-context",
            r = e.getConfiguration().gatewayConfiguration;
          return (
            (t._mobilePollingContextEnvironment = r.environment.toUpperCase()),
            t
              ._createVenmoPaymentContext(e)
              .then(function () {
                return (
                  hj.sendEvent(t._createPromise, "venmo." + n + ".presented"), e
                );
              })
              .catch(function (e) {
                return (
                  hj.sendEvent(
                    t._createPromise,
                    "venmo." + n + ".setup-failed"
                  ),
                  h0.reject(
                    new h$({
                      type: hG.VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED.type,
                      code: hG.VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED.code,
                      message:
                        hG.VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED.message,
                      details: { originalError: e },
                    })
                  )
                );
              })
          );
        })));
}
function mn(e) {
  var t = (e || window.location.hash.substring(1))
    .split("&")
    .reduce(function (e, t) {
      var n = t.split("="),
        r = h5(decodeURIComponent(n[0]).replace(/\W/g, "")),
        i = decodeURIComponent(n[1]);
      return (e[r] = i), e;
    }, {});
  return t.resourceId && (t.id = t.resourceId), t;
}
function mr(e) {
  return "@" + (e = e || "").replace("@", "");
}
function mi(e) {
  var t = {
    nonce: e.paymentMethodNonce,
    type: "VenmoAccount",
    details: { username: mr(e.username), paymentContextId: e.id },
  };
  return (
    e.payerInfo &&
      ((t.details.payerInfo = e.payerInfo),
      (t.details.payerInfo.userName = mr(e.payerInfo.userName))),
    t
  );
}
function ma() {
  var e;
  return (
    void 0 !== window.document.hidden
      ? (e = "visibilitychange")
      : void 0 !== window.document.msHidden
      ? (e = "msvisibilitychange")
      : void 0 !== window.document.webkitHidden &&
        (e = "webkitvisibilitychange"),
    e
  );
}
function mo() {
  return (
    window.navigator.platform &&
    /iPhone|iPad|iPod/.test(window.navigator.platform)
  );
}
(mt.prototype._createVenmoPaymentContext = function (e, t) {
  var n = this;
  return this._shouldCreateVenmoPaymentContext
    ? (this._shouldUseLegacyFlow
        ? e
            .request({
              api: "graphQLApi",
              data: {
                query: h7.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY,
                variables: {
                  input: {
                    environment: this._mobilePollingContextEnvironment,
                    intent: "PAY_FROM_APP",
                  },
                },
              },
            })
            .then(function (e) {
              return e
                .data.createVenmoQRCodePaymentContext.venmoQRCodePaymentContext;
            })
        : e
            .request({
              api: "graphQLApi",
              data: {
                query: h7.CREATE_PAYMENT_CONTEXT_QUERY,
                variables: {
                  input: {
                    paymentMethodUsage: this._paymentMethodUsage,
                    intent: "CONTINUE",
                    customerClient: "MOBILE_WEB",
                    displayName: this._displayName,
                  },
                },
              },
            })
            .then(function (e) {
              return e.data.createVenmoPaymentContext.venmoPaymentContext;
            })
      ).then(function (r) {
        var i = new Date(r.expiresAt) - new Date(r.createdAt);
        clearTimeout(n._refreshPaymentContextTimeout),
          (n._refreshPaymentContextTimeout = setTimeout(function () {
            n._tokenizationInProgress || n._createVenmoPaymentContext(e, !0);
          }, 0.6666 * i)),
          (t && n._tokenizationInProgress) ||
            ((n._venmoPaymentContextStatus = r.status),
            (n._venmoPaymentContextId = r.id));
      })
    : h0.resolve();
}),
  (mt.prototype.appSwitch = function (e) {
    this._deepLinkReturnUrl
      ? mo()
        ? (hj.sendEvent(
            this._createPromise,
            "venmo.appswitch.start.ios-webview"
          ),
          (window.location.href = e))
        : window.popupBridge && "function" == typeof window.popupBridge.open
        ? (hj.sendEvent(
            this._createPromise,
            "venmo.appswitch.start.popup-bridge"
          ),
          window.popupBridge.open(e))
        : (hj.sendEvent(this._createPromise, "venmo.appswitch.start.webview"),
          window.open(e))
      : (hj.sendEvent(this._createPromise, "venmo.appswitch.start.browser"),
        hK.doesNotSupportWindowOpenInIos() || this._shouldUseRedirectStrategy()
          ? (window.location.href = e)
          : window.open(e));
  }),
  (mt.prototype.getUrl = function () {
    return this._createPromise.then(
      function (e) {
        var t = e.getConfiguration(),
          n = {},
          r =
            this._deepLinkReturnUrl ||
            window.location.href.replace(window.location.hash, ""),
          i = t.gatewayConfiguration.payWithVenmo,
          a = t.analyticsMetadata,
          o = i.accessToken,
          s = {
            _meta: {
              version: a.sdkVersion,
              integration: a.integration,
              platform: a.platform,
              sessionId: a.sessionId,
            },
          };
        return (
          (this._isDebug = t.isDebug),
          (this._assetsUrl = t.gatewayConfiguration.assetsUrl),
          (r = r.replace(/#*$/, "")),
          this._venmoPaymentContextId &&
            (this._shouldUseLegacyFlow
              ? (o += "|pcid:" + this._venmoPaymentContextId)
              : (n.resource_id = this._venmoPaymentContextId)),
          this._shouldIncludeReturnUrls() || this._useAllowDesktopWebLogin
            ? (this._useAllowDesktopWebLogin &&
                (r =
                  this._assetsUrl + "/web/" + h8 + "/html/redirect-frame.html"),
              (n["x-success"] = r + "#venmoSuccess=1"),
              (n["x-cancel"] = r + "#venmoCancel=1"),
              (n["x-error"] = r + "#venmoError=1"))
            : ((n["x-success"] = "NOOP"),
              (n["x-cancel"] = "NOOP"),
              (n["x-error"] = "NOOP")),
          this._allowAndroidRecreation
            ? (n.allowAndroidRecreation = 1)
            : (n.allowAndroidRecreation = 0),
          (n.ua = window.navigator.userAgent),
          (n.braintree_merchant_id = this._profileId || i.merchantId),
          (n.braintree_access_token = o),
          (n.braintree_environment = i.environment),
          (n.braintree_sdk_data = btoa(JSON.stringify(s))),
          h3({
            useAllowDesktopWebLogin: this._useAllowDesktopWebLogin,
            mobileWebFallBack: this._mobileWebFallBack,
          }) +
            "?" +
            hq.stringify(n)
        );
      }.bind(this)
    );
  }),
  (mt.prototype.isBrowserSupported = function () {
    return hW.isBrowserSupported({
      allowNewBrowserTab: this._allowNewBrowserTab,
      allowWebviews: this._allowWebviews,
      allowDesktop: this._allowDesktop,
    });
  }),
  (mt.prototype.hasTokenizationResult = function () {
    return this._hasTokenizationResult();
  }),
  (mt.prototype._hasTokenizationResult = function (e) {
    var t = mn(e);
    return void 0 !== (t.venmoSuccess || t.venmoError || t.venmoCancel);
  }),
  (mt.prototype._shouldIncludeReturnUrls = function () {
    return !!this._deepLinkReturnUrl || !this._cannotHaveReturnUrls;
  }),
  (mt.prototype._isDesktop = function () {
    return !(hK.isIos() || hK.isAndroid());
  }),
  (mt.prototype.tokenize = function (e) {
    var t = this;
    return ((e = e || {}), !0 === this._tokenizationInProgress)
      ? h0.reject(new h$(hG.VENMO_TOKENIZATION_REQUEST_ACTIVE))
      : ((this._tokenizationInProgress = !0),
        (this._useDesktopQRFlow
          ? this._tokenizeForDesktopQRFlow(e)
          : this._useAllowDesktopWebLogin
          ? this._tokenizeWebLoginWithRedirect()
          : this._cannotHaveReturnUrls
          ? this._tokenizeForMobileWithManualReturn()
          : this._tokenizeForMobileWithHashChangeListeners(e)
        )
          .then(function (e) {
            return t._createPromise
              .then(function (e) {
                return t._createVenmoPaymentContext(e);
              })
              .then(function () {
                return (t._tokenizationInProgress = !1), mi(e);
              });
          })
          .catch(function (e) {
            return t._createPromise
              .then(function (e) {
                return t._createVenmoPaymentContext(e);
              })
              .then(function () {
                return (t._tokenizationInProgress = !1), h0.reject(e);
              });
          }));
  }),
  (mt.prototype.cancelTokenization = function () {
    return this._tokenizationInProgress
      ? (this._removeVisibilityEventListener(),
        this._tokenizePromise &&
          this._tokenizePromise.reject(
            new h$(hG.VENMO_TOKENIZATION_CANCELED_BY_MERCHANT)
          ),
        h0.all([
          this._cancelMobilePaymentContext(),
          this._cancelVenmoDesktopContext(),
        ]))
      : h0.reject(new h$(hG.VENMO_TOKENIZATION_REQUEST_NOT_ACTIVE));
  }),
  (mt.prototype._tokenizeWebLoginWithRedirect = function () {
    var e = this;
    return (
      hj.sendEvent(e._createPromise, "venmo.tokenize.web-login.start"),
      (this._tokenizePromise = new h2()),
      this.getUrl().then(function (t) {
        return (
          h4({
            checkForStatusChange:
              e._checkPaymentContextStatusAndProcessResult.bind(e),
            cancelTokenization: e.cancelTokenization.bind(e),
            venmoUrl: t,
            assetsUrl: e._assetsUrl,
            debug: e._isDebug,
          })
            .then(function (t) {
              return (
                hj.sendEvent(
                  e._createPromise,
                  "venmo.tokenize.web-login.success"
                ),
                e._tokenizePromise.resolve({
                  paymentMethodNonce: t.paymentMethodId,
                  username: t.userName,
                  payerInfo: t.payerInfo,
                  id: e._venmoPaymentContextId,
                })
              );
            })
            .catch(function (t) {
              return (
                hj.sendEvent(
                  e._createPromise,
                  "venmo.tokenize.web-login.failure"
                ),
                e._tokenizePromise.reject(t)
              );
            }),
          e._tokenizePromise
        );
      })
    );
  }),
  (mt.prototype._queryPaymentContextStatus = function (e) {
    var t = this;
    return this._createPromise
      .then(function (n) {
        var r = t._shouldUseLegacyFlow
          ? h7.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY
          : h7.VENMO_PAYMENT_CONTEXT_STATUS_QUERY;
        return n.request({
          api: "graphQLApi",
          data: { query: r, variables: { id: e } },
        });
      })
      .then(function (e) {
        return e.data.node;
      });
  }),
  (mt.prototype._checkPaymentContextStatusAndProcessResult = function (e) {
    var t = this;
    return t
      ._queryPaymentContextStatus(t._venmoPaymentContextId)
      .catch(function (e) {
        return h0.reject(
          new h$({
            type: hG.VENMO_NETWORK_ERROR.type,
            code: hG.VENMO_NETWORK_ERROR.code,
            message: hG.VENMO_NETWORK_ERROR.message,
            details: e,
          })
        );
      })
      .then(function (n) {
        var r = n.status;
        if (r !== t._venmoPaymentContextStatus)
          switch (
            ((t._venmoPaymentContextStatus = r),
            hj.sendEvent(
              t._createPromise,
              "venmo.tokenize.web-login.status-change"
            ),
            r)
          ) {
            case "APPROVED":
              return h0.resolve(n);
            case "CANCELED":
              return h0.reject(new h$(hG.VENMO_CUSTOMER_CANCELED));
            case "FAILED":
              return h0.reject(new h$(hG.VENMO_TOKENIZATION_FAILED));
          }
        return new h0(function (n, r) {
          return e < t._maxRetryCount
            ? (e++,
              t._checkPaymentContextStatusAndProcessResult(e).then(n).catch(r))
            : r(new h$(hG.VENMO_TOKENIZATION_FAILED));
        });
      });
  }),
  (mt.prototype._pollForStatusChange = function () {
    var e = this;
    return Date.now() > e._mobilePollingContextExpiresIn
      ? h0.reject(new h$(hG.VENMO_MOBILE_POLLING_TOKENIZATION_TIMEOUT))
      : this._queryPaymentContextStatus(this._venmoPaymentContextId)
          .catch(function (e) {
            return h0.reject(
              new h$({
                type: hG.VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR.type,
                code: hG.VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR.code,
                message:
                  hG.VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR.message,
                details: { originalError: e },
              })
            );
          })
          .then(function (t) {
            var n = t.status;
            if (n !== e._venmoPaymentContextStatus)
              switch (
                ((e._venmoPaymentContextStatus = n),
                hj.sendEvent(
                  e._createPromise,
                  "venmo.tokenize.manual-return.status-change." +
                    n.toLowerCase()
                ),
                n)
              ) {
                case "EXPIRED":
                case "FAILED":
                case "CANCELED":
                  return h0.reject(
                    new h$(hG["VENMO_MOBILE_POLLING_TOKENIZATION_" + n])
                  );
                case "APPROVED":
                  return h0.resolve(t);
              }
            return new h0(function (t, n) {
              setTimeout(function () {
                e._pollForStatusChange().then(t).catch(n);
              }, e._mobilePollingInterval);
            });
          });
  }),
  (mt.prototype._tokenizeForMobileWithManualReturn = function () {
    var e = this;
    return (
      hj.sendEvent(this._createPromise, "venmo.tokenize.manual-return.start"),
      (this._mobilePollingContextExpiresIn =
        Date.now() + this._mobilePollingExpiresThreshold),
      (this._tokenizePromise = new h2()),
      this._pollForStatusChange()
        .then(function (t) {
          hj.sendEvent(
            e._createPromise,
            "venmo.tokenize.manual-return.success"
          ),
            e._tokenizePromise.resolve({
              paymentMethodNonce: t.paymentMethodId,
              username: t.userName,
              payerInfo: t.payerInfo,
              id: e._venmoPaymentContextId,
            });
        })
        .catch(function (t) {
          hj.sendEvent(
            e._createPromise,
            "venmo.tokenize.manual-return.failure"
          ),
            e._tokenizePromise.reject(t);
        }),
      this.getUrl().then(function (t) {
        return e.appSwitch(t), e._tokenizePromise;
      })
    );
  }),
  (mt.prototype._shouldUseRedirectStrategy = function () {
    return (
      !!hK.isIos() &&
      (!0 === this._mobileWebFallBack || this._useRedirectForIOS)
    );
  }),
  (mt.prototype._tokenizeForMobileWithHashChangeListeners = function (e) {
    var t,
      n,
      r = this;
    if (this.hasTokenizationResult())
      return this.processHashChangeFlowResults();
    function i(e) {
      var t;
      r.processHashChangeFlowResults(e)
        .catch(function (e) {
          t = e;
        })
        .then(function (e) {
          r._ignoreHistoryChanges ||
            window.location.hash === r._previousHash ||
            (window.location.hash = r._previousHash),
            r._removeVisibilityEventListener(),
            t ? r._tokenizePromise.reject(t) : r._tokenizePromise.resolve(e),
            delete r._tokenizePromise;
        });
    }
    return (
      hj.sendEvent(this._createPromise, "venmo.tokenize.mobile.start"),
      (this._tokenizePromise = new h2()),
      (this._previousHash = window.location.hash),
      (this._onHashChangeListener = function (e) {
        var a = e.newURL.split("#")[1];
        r._hasTokenizationResult(a) && ((t = !0), clearTimeout(n), i(a));
      }),
      window.addEventListener("hashchange", this._onHashChangeListener, !1),
      (this._visibilityChangeListener = function () {
        var r = e.processResultsDelay || hY.DEFAULT_PROCESS_RESULTS_DELAY;
        window.document.hidden || t || (n = setTimeout(i, r));
      }),
      this.getUrl().then(function (e) {
        return (
          r.appSwitch(e),
          setTimeout(function () {
            window.document.addEventListener(ma(), r._visibilityChangeListener);
          }, hY.DOCUMENT_VISIBILITY_CHANGE_EVENT_DELAY),
          r._tokenizePromise
        );
      })
    );
  }),
  (mt.prototype._tokenizeForDesktopQRFlow = function () {
    var e = this;
    return (
      hj.sendEvent(this._createPromise, "venmo.tokenize.desktop.start"),
      (this._tokenizePromise = new h2()),
      this._createPromise
        .then(function () {
          return e._venmoDesktopInstance.launchDesktopFlow();
        })
        .then(function (t) {
          e._venmoDesktopInstance.hideDesktopFlow(),
            hj.sendEvent(e._createPromise, "venmo.tokenize.desktop.success"),
            e._tokenizePromise.resolve(t);
        })
        .catch(function (t) {
          if (
            (hj.sendEvent(e._createPromise, "venmo.tokenize.desktop.failure"),
            e._venmoDesktopInstance &&
              e._venmoDesktopInstance.hideDesktopFlow(),
            t && "CUSTOMER_CANCELED" === t.reason)
          ) {
            e._tokenizePromise.reject(new h$(hG.VENMO_DESKTOP_CANCELED));
            return;
          }
          e._tokenizePromise.reject(
            new h$({
              type: hG.VENMO_DESKTOP_UNKNOWN_ERROR.type,
              code: hG.VENMO_DESKTOP_UNKNOWN_ERROR.code,
              message: hG.VENMO_DESKTOP_UNKNOWN_ERROR.message,
              details: { originalError: t },
            })
          );
        }),
      this._tokenizePromise
    );
  }),
  (mt.prototype._cancelMobilePaymentContext = function () {
    var e = this;
    return this._createPromise.then(function (t) {
      var n;
      return e._venmoPaymentContextId
        ? ((n = e._shouldUseLegacyFlow
            ? h7.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY
            : h7.UPDATE_PAYMENT_CONTEXT_QUERY),
          t.request({
            api: "graphQLApi",
            data: {
              query: n,
              variables: {
                input: { id: e._venmoPaymentContextId, status: "CANCELED" },
              },
            },
          }))
        : h0.resolve();
    });
  }),
  (mt.prototype._cancelVenmoDesktopContext = function () {
    var e = this;
    return this._createPromise.then(function () {
      return (
        e._venmoDesktopInstance &&
          e._venmoDesktopInstance.updateVenmoDesktopPaymentContext("CANCELED"),
        h0.resolve()
      );
    });
  }),
  (mt.prototype.teardown = function () {
    var e = this;
    return (
      this._removeVisibilityEventListener(),
      this._createPromise.then(
        function () {
          e._venmoDesktopInstance && e._venmoDesktopInstance.teardown(),
            clearTimeout(e._refreshPaymentContextTimeout),
            e._cancelMobilePaymentContext(),
            hJ(this, hZ(mt.prototype));
        }.bind(this)
      )
    );
  }),
  (mt.prototype._removeVisibilityEventListener = function () {
    window.removeEventListener("hashchange", this._onHashChangeListener),
      window.document.removeEventListener(ma(), this._visibilityChangeListener),
      delete this._visibilityChangeListener,
      delete this._onHashChangeListener;
  }),
  (mt.prototype.processHashChangeFlowResults = function (e) {
    var t = this,
      n = mn(e);
    return new h0(function (e, r) {
      t._shouldUseLegacyFlow
        ? n.venmoSuccess
          ? (hj.sendEvent(t._createPromise, "venmo.appswitch.handle.success"),
            e(n))
          : n.venmoError
          ? (hj.sendEvent(t._createPromise, "venmo.appswitch.handle.error"),
            r(
              new h$({
                type: hG.VENMO_APP_FAILED.type,
                code: hG.VENMO_APP_FAILED.code,
                message: hG.VENMO_APP_FAILED.message,
                details: {
                  originalError: {
                    message: decodeURIComponent(n.errorMessage),
                    code: n.errorCode,
                  },
                },
              })
            ))
          : n.venmoCancel
          ? (hj.sendEvent(t._createPromise, "venmo.appswitch.handle.cancel"),
            r(new h$(hG.VENMO_APP_CANCELED)))
          : (hj.sendEvent(
              t._createPromise,
              "venmo.appswitch.cancel-or-unavailable"
            ),
            r(new h$(hG.VENMO_CANCELED)))
        : t
            ._pollForStatusChange()
            .then(function (n) {
              return (
                hj.sendEvent(
                  t._createPromise,
                  "venmo.appswitch.handle.payment-context-status-query.success"
                ),
                e({
                  paymentMethodNonce: n.paymentMethodId,
                  username: n.userName,
                  payerInfo: n.payerInfo,
                  id: t._venmoPaymentContextId,
                })
              );
            })
            .catch(function (i) {
              i.type === hG.VENMO_MOBILE_POLLING_TOKENIZATION_CANCELED.type &&
                r(i),
                hj.sendEvent(
                  t._createPromise,
                  "venmo.process-results.payment-context-status-query-failed"
                ),
                e(n);
            }),
        t._clearFragmentParameters();
    });
  }),
  (mt.prototype._clearFragmentParameters = function () {
    !this._ignoreHistoryChanges &&
      "function" == typeof window.history.replaceState &&
      window.location.hash &&
      history.pushState(
        {},
        "",
        window.location.href.slice(0, window.location.href.indexOf("#"))
      );
  });
var ms = hX.wrapPrototype(mt),
  md = nG,
  ml = ig,
  mc = ix,
  mp = ib,
  mu = uW,
  mh = nn,
  mm = D,
  my = ms,
  mf = t0,
  mE = ha,
  m_ = "3.91.0";
function mv(e) {
  var t = "Venmo";
  return ml
    .verify({ name: t, client: e.client, authorization: e.authorization })
    .then(function () {
      var n, r;
      return e.profileId && "string" != typeof e.profileId
        ? mf.reject(new mm(mu.VENMO_INVALID_PROFILE_ID))
        : e.deepLinkReturnUrl && "string" != typeof e.deepLinkReturnUrl
        ? mf.reject(new mm(mu.VENMO_INVALID_DEEP_LINK_RETURN_URL))
        : ((n = mc
            .create({
              authorization: e.authorization,
              client: e.client,
              debug: e.debug,
              assetsUrl: mp.create(e.authorization),
              name: t,
            })
            .then(function (t) {
              var n = t.getConfiguration();
              return ((e.client = t), n.gatewayConfiguration.payWithVenmo)
                ? t
                : mf.reject(new mm(mu.VENMO_NOT_ENABLED));
            })),
          (e.createPromise = n),
          (r = new my(e)),
          md.sendEvent(n, "venmo.initialized"),
          n.then(function () {
            return r;
          }));
    });
}
function mg(e) {
  return mE.isBrowserSupported(e);
}
var mP = { create: mh(mv), isBrowserSupported: mg, VERSION: m_ },
  mC = E.assign,
  mb = it,
  mT = mP,
  mA = rX,
  mI = r4,
  mD = C.paymentOptionIDs;
function mN() {
  mb.apply(this, arguments);
}
(mN.prototype = Object.create(mb.prototype)),
  (mN.prototype.constructor = mN),
  (mN.ID = mN.prototype.ID = mD.venmo),
  (mN.prototype.initialize = function () {
    var e = this,
      t = mC({}, e.model.merchantConfiguration.venmo, { client: this.client });
    return mT
      .create(t)
      .then(function (t) {
        return ((e.venmoInstance = t), e.venmoInstance.hasTokenizationResult())
          ? e.venmoInstance
              .tokenize()
              .then(function (t) {
                e.model.reportAppSwitchPayload(t);
              })
              .catch(function (t) {
                e._isIgnorableError(t) ||
                  e.model.reportAppSwitchError(mD.venmo, t);
              })
          : mI.resolve();
      })
      .then(function () {
        e
          .getElementById("venmo-button")
          .addEventListener("click", function (t) {
            return (
              t.preventDefault(),
              e.preventUserAction(),
              e.venmoInstance
                .tokenize()
                .then(function (t) {
                  e.model.addPaymentMethod(t);
                })
                .catch(function (t) {
                  e._isIgnorableError(t) || e.model.reportError(t);
                })
                .then(function () {
                  e.allowUserAction();
                })
            );
          }),
          e.model.asyncDependencyReady(mN.ID);
      })
      .catch(function (t) {
        e.model.asyncDependencyFailed({ view: e.ID, error: new mA(t) });
      });
  }),
  (mN.prototype._isIgnorableError = function (e) {
    return (
      "VENMO_APP_CANCELED" === e.code || "VENMO_DESKTOP_CANCELED" === e.code
    );
  }),
  (mN.isEnabled = function (e) {
    return e.client.getConfiguration().gatewayConfiguration.payWithVenmo &&
      Boolean(e.merchantConfiguration.venmo)
      ? mI.resolve(mT.isBrowserSupported(e.merchantConfiguration.venmo))
      : mI.resolve(!1);
  });
var mO = mN,
  mx = C.paymentOptionIDs,
  mF = {};
(mF[mx.applePay] = i1),
  (mF[mx.card] = lf),
  (mF[mx.googlePay] = ce),
  (mF[mx.paypal] = uR),
  (mF[mx.paypalCredit] = uB),
  (mF[mx.venmo] = mO);
var mM = mF,
  mw = D,
  mL = {
    VAULT_MANAGER_DELETE_PAYMENT_METHOD_NONCE_REQUIRES_CLIENT_TOKEN: {
      type: mw.types.MERCHANT,
      code: "VAULT_MANAGER_DELETE_PAYMENT_METHOD_NONCE_REQUIRES_CLIENT_TOKEN",
      message:
        "A client token with a customer id must be used to delete a payment method nonce.",
    },
    VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND: {
      type: mw.types.MERCHANT,
      code: "VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND",
    },
    VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR: {
      type: mw.types.UNKNOWN,
      code: "VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR",
    },
  },
  mS = nG,
  mR = D,
  mk = mL,
  mV = n$,
  mz = nq,
  mU = t0,
  mH = nn,
  mB =
    "mutation DeletePaymentMethodFromSingleUseToken($input: DeletePaymentMethodFromSingleUseTokenInput!) {  deletePaymentMethodFromSingleUseToken(input: $input) {    clientMutationId  }}";
function mj(e) {
  this._createPromise = e.createPromise;
}
function mW(e) {
  var t = {
    nonce: e.nonce,
    default: e.default,
    details: e.details,
    hasSubscription: e.hasSubscription,
    type: e.type,
  };
  return (
    e.description && (t.description = e.description),
    e.binData && (t.binData = e.binData),
    t
  );
}
(mj.prototype.fetchPaymentMethods = function (e) {
  var t;
  return (
    (t = !0 === (e = e || {}).defaultFirst ? 1 : 0),
    this._createPromise
      .then(function (e) {
        return e.request({
          endpoint: "payment_methods",
          method: "get",
          data: { defaultFirst: t },
        });
      })
      .then(
        function (e) {
          return (
            mS.sendEvent(
              this._createPromise,
              "vault-manager.fetch-payment-methods.succeeded"
            ),
            e.paymentMethods.map(mW)
          );
        }.bind(this)
      )
  );
}),
  (mj.prototype.deletePaymentMethod = function (e) {
    return this._createPromise.then(function (t) {
      return "CLIENT_TOKEN" !== t.getConfiguration().authorizationType
        ? mU.reject(
            new mR(
              mk.VAULT_MANAGER_DELETE_PAYMENT_METHOD_NONCE_REQUIRES_CLIENT_TOKEN
            )
          )
        : t
            .request({
              api: "graphQLApi",
              data: {
                query: mB,
                variables: { input: { singleUseTokenId: e } },
                operationName: "DeletePaymentMethodFromSingleUseToken",
              },
            })
            .then(function () {
              mS.sendEvent(t, "vault-manager.delete-payment-method.succeeded");
            })
            .catch(function (n) {
              var r,
                i = n.details.originalError;
              return (
                mS.sendEvent(t, "vault-manager.delete-payment-method.failed"),
                i[0] &&
                  "NOT_FOUND" === i[0].extensions.errorClass &&
                  (r = new mR({
                    type: mk.VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND.type,
                    code: mk.VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND.code,
                    message:
                      "A payment method for payment method nonce `" +
                      e +
                      "` could not be found.",
                    details: { originalError: i },
                  })),
                r ||
                  (r = new mR({
                    type: mk.VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR
                      .type,
                    code: mk.VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR
                      .code,
                    message:
                      "An unknown error occured when attempting to delete the payment method assocaited with the payment method nonce `" +
                      e +
                      "`.",
                    details: { originalError: i },
                  })),
                mU.reject(r)
              );
            });
    });
  }),
  (mj.prototype.teardown = function () {
    return mV(this, mz(mj.prototype)), mU.resolve();
  });
var mK = mH.wrapPrototype(mj),
  mY = ig,
  mG = ix,
  mq = ib,
  mQ = mK,
  mZ = "3.91.0",
  mJ = nn;
function mX(e) {
  var t = "Vault Manager";
  return mY
    .verify({ name: t, client: e.client, authorization: e.authorization })
    .then(function () {
      return new mQ({
        createPromise: mG.create({
          authorization: e.authorization,
          client: e.client,
          debug: e.debug,
          assetsUrl: mq.create(e.authorization),
          name: t,
        }),
      });
    });
}
var m$ = { create: mJ(mX), VERSION: mZ };
function m1(e, t) {
  e.addEventListener("click", t),
    e.addEventListener("keyup", function (e) {
      13 === e.keyCode && t();
    });
}
var m0 = m1,
  m2 = rW,
  m3 = m0,
  m4 = it,
  m5 = C.paymentOptionIDs,
  m6 =
    '<div class="braintree-option__logo">\n  <svg width="48" height="29" class="@CLASSNAME">\n    <use xlink:href="#@ICON"></use>\n  </svg>\n</div>\n\n<div class="braintree-option__label" aria-label="@OPTION_LABEL">\n  @OPTION_TITLE\n  <div class="braintree-option__disabled-message"></div>\n</div>\n';
function m7() {
  m4.apply(this, arguments), this._initialize();
}
(m7.prototype = Object.create(m4.prototype)),
  (m7.prototype.constructor = m7),
  (m7.ID = m7.prototype.ID = "options"),
  (m7.prototype._initialize = function () {
    (this.container = this.getElementById("payment-options-container")),
      (this.elements = {}),
      this.model.supportedPaymentOptions.forEach(
        function (e) {
          this._addPaymentOption(e);
        }.bind(this)
      );
  }),
  (m7.prototype._addPaymentOption = function (e) {
    var t,
      n = document.createElement("div"),
      r = m6,
      i = function () {
        this.mainView.setPrimaryView(e),
          this.model.selectPaymentOption(e),
          m2.sendEvent(this.client, "selected." + m5[e]);
      }.bind(this);
    switch (
      ((n.className = "braintree-option braintree-option__" + e),
      n.setAttribute("tabindex", "0"),
      n.setAttribute("role", "button"),
      e)
    ) {
      case m5.applePay:
        (t = this.strings["Apple Pay"]),
          (r = r.replace(/@ICON/g, "logoApplePay"));
        break;
      case m5.card:
        (t = this.strings.Card),
          (r = (r = r.replace(/@ICON/g, "iconCardFront")).replace(
            /@CLASSNAME/g,
            "braintree-icon--bordered"
          ));
        break;
      case m5.googlePay:
        (t = this.strings["Google Pay"]),
          (r = r.replace(/@ICON/g, "logoGooglePay"));
        break;
      case m5.paypal:
        (t = this.strings.PayPal), (r = r.replace(/@ICON/g, "logoPayPal"));
        break;
      case m5.paypalCredit:
        (t = this.strings["PayPal Credit"]),
          (r = r.replace(/@ICON/g, "logoPayPalCredit"));
        break;
      case m5.venmo:
        (t = this.strings.Venmo), (r = r.replace(/@ICON/g, "logoVenmo"));
    }
    (r = (r = (r = r.replace(
      /@OPTION_LABEL/g,
      this._generateOptionLabel(t)
    )).replace(/@OPTION_TITLE/g, t)).replace(/@CLASSNAME/g, "")),
      (n.innerHTML = r),
      m3(n, i),
      this.container.appendChild(n),
      (this.elements[e] = { div: n, clickHandler: i });
  }),
  (m7.prototype._generateOptionLabel = function (e) {
    return this.strings.payingWith.replace("{{paymentSource}}", e);
  });
var m8 = m7,
  m9 = rW,
  ye = rX,
  yt = r1,
  yn = C,
  yr = yn.paymentMethodTypes,
  yi = yn.paymentOptionIDs,
  ya = yn.dependencySetupStates,
  yo = r2,
  ys = r4,
  yd = mM,
  yl = m$,
  yc = m8.ID,
  yp = [yr.applePay, yr.googlePay, yr.venmo],
  yu = [
    yi.card,
    yi.paypal,
    yi.paypalCredit,
    yi.venmo,
    yi.applePay,
    yi.googlePay,
  ],
  yh = ["threeDSecure", "dataCollector"],
  ym = yu.concat(yh),
  yy = 200;
function yf(e) {
  for (
    this.rootNode = e.container,
      this.componentID = e.componentID,
      this.merchantConfiguration = e.merchantConfiguration,
      this.isGuestCheckout = yo(e.client),
      this.dependencyStates = ym.reduce(
        function (e, t) {
          return (
            this._shouldIncludeDependency(t) && (e[t] = ya.INITIALIZING), e
          );
        }.bind(this),
        {}
      ),
      this.hiddenVaultedPaymentMethodTypes = yg(
        e.merchantConfiguration.hiddenVaultedPaymentMethodTypes
      ),
      this.failedDependencies = {},
      this._options = e,
      this._setupComplete = !1;
    this.rootNode.parentNode;

  )
    this.rootNode = this.rootNode.parentNode;
  (this.isInShadowDom = "[object ShadowRoot]" === this.rootNode.toString()),
    yt.call(this);
}
function yE(e, t) {
  return y_(e, t).then(function (t) {
    return { success: t, id: yi[e] };
  });
}
function y_(e, t) {
  var n = yd[yi[e]];
  return n
    ? n
        .isEnabled({
          client: t.client,
          merchantConfiguration: t.merchantConfiguration,
        })
        .catch(function (e) {
          return (
            console.error(
              n.ID + " view errored when checking if it was supported."
            ),
            console.error(e),
            ys.resolve(!1)
          );
        })
    : ys.reject(
        new ye("paymentOptionPriority: Invalid payment option specified.")
      );
}
function yv(e, t) {
  return e && -1 === t.indexOf(e);
}
function yg(e) {
  var t = [].concat(yp);
  return (
    Array.isArray(e) &&
      e.forEach(function (e) {
        var n = yr[e];
        !n || t.indexOf(n) > -1 || t.push(n);
      }),
    t
  );
}
yt.createChild(yf),
  (yf.prototype.initialize = function () {
    var e,
      t = this,
      n = setInterval(function () {
        for (e in t.dependencyStates)
          if (t.dependencyStates[e] === ya.INITIALIZING) return;
        clearInterval(n), t._emit("asyncDependenciesReady");
      }, yy);
    return yl
      .create({ client: t._options.client })
      .then(function (e) {
        return (t._vaultManager = e), t._getSupportedPaymentOptions(t._options);
      })
      .then(function (e) {
        return (t.supportedPaymentOptions = e), t.getVaultedPaymentMethods();
      })
      .then(function (e) {
        (t._paymentMethods = e),
          (t._paymentMethodIsRequestable = t._paymentMethods.length > 0);
      });
  }),
  (yf.prototype.confirmDropinReady = function () {
    this._setupComplete = !0;
  }),
  (yf.prototype.isPaymentMethodRequestable = function () {
    return Boolean(this._paymentMethodIsRequestable);
  }),
  (yf.prototype.addPaymentMethod = function (e) {
    this._paymentMethods.push(e),
      this._emit("addPaymentMethod", e),
      this.changeActivePaymentMethod(e);
  }),
  (yf.prototype.removePaymentMethod = function (e) {
    var t = this._paymentMethods.indexOf(e);
    -1 !== t &&
      (this._paymentMethods.splice(t, 1), this._emit("removePaymentMethod", e));
  }),
  (yf.prototype.refreshPaymentMethods = function () {
    var e = this;
    return e.getVaultedPaymentMethods().then(function (t) {
      (e._paymentMethods = t), e._emit("refreshPaymentMethods");
    });
  }),
  (yf.prototype.changeActivePaymentMethod = function (e) {
    (this._activePaymentMethod = e), this._emit("changeActivePaymentMethod", e);
  }),
  (yf.prototype.changeActiveView = function (e) {
    var t = this._activePaymentViewId;
    (this._activePaymentViewId = e),
      this._emit("changeActiveView", { previousViewId: t, newViewId: e });
  }),
  (yf.prototype.removeActivePaymentMethod = function () {
    (this._activePaymentMethod = null),
      this._emit("removeActivePaymentMethod"),
      this.setPaymentMethodRequestable({ isRequestable: !1 });
  }),
  (yf.prototype.selectPaymentOption = function (e) {
    this._emit("paymentOptionSelected", { paymentOption: e });
  }),
  (yf.prototype.enableEditMode = function () {
    m9.sendEvent(this._options.client, "manager.appeared"),
      (this._isInEditMode = !0),
      this._emit("enableEditMode");
  }),
  (yf.prototype.disableEditMode = function () {
    (this._isInEditMode = !1), this._emit("disableEditMode");
  }),
  (yf.prototype.isInEditMode = function () {
    return Boolean(this._isInEditMode);
  }),
  (yf.prototype.confirmPaymentMethodDeletion = function (e) {
    (this._paymentMethodWaitingToBeDeleted = e),
      this._emit("confirmPaymentMethodDeletion", e);
  }),
  (yf.prototype._shouldIncludeDependency = function (e) {
    if ("card" === e) {
      if (!1 === this.merchantConfiguration.card) return !1;
    } else if (!this.merchantConfiguration[e]) return !1;
    return (
      yh.indexOf(e) > -1 ||
      (this.merchantConfiguration.paymentOptionPriority
        ? this.merchantConfiguration.paymentOptionPriority.indexOf(e) > -1
        : yu.indexOf(e) > -1)
    );
  }),
  (yf.prototype._shouldEmitRequestableEvent = function (e) {
    var t = this.isPaymentMethodRequestable() === e.isRequestable,
      n =
        (e.selectedPaymentMethod && e.selectedPaymentMethod.nonce) ===
        this._paymentMethodRequestableNonce;
    return !!this._setupComplete && (!t || (!!e.isRequestable && !n));
  }),
  (yf.prototype.setPaymentMethodRequestable = function (e) {
    var t = this._shouldEmitRequestableEvent(e),
      n = {
        paymentMethodIsSelected: Boolean(e.selectedPaymentMethod),
        type: e.type,
      };
    (this._paymentMethodIsRequestable = e.isRequestable),
      e.isRequestable
        ? (this._paymentMethodRequestableNonce =
            e.selectedPaymentMethod && e.selectedPaymentMethod.nonce)
        : delete this._paymentMethodRequestableNonce,
      t &&
        (e.isRequestable
          ? this._emit("paymentMethodRequestable", n)
          : this._emit("noPaymentMethodRequestable"));
  }),
  (yf.prototype.getPaymentMethods = function () {
    return this._paymentMethods.slice();
  }),
  (yf.prototype.getActivePaymentMethod = function () {
    return this._activePaymentMethod;
  }),
  (yf.prototype.hasPaymentMethods = function () {
    return this.getPaymentMethods().length > 0;
  }),
  (yf.prototype.getInitialViewId = function () {
    return this.supportedPaymentOptions.length > 1
      ? yc
      : this.supportedPaymentOptions[0];
  }),
  (yf.prototype.getActivePaymentViewId = function () {
    return this._activePaymentViewId;
  }),
  (yf.prototype.reportAppSwitchPayload = function (e) {
    this.appSwitchPayload = e;
  }),
  (yf.prototype.reportAppSwitchError = function (e, t) {
    this.appSwitchError = { id: e, error: t };
  }),
  (yf.prototype.hasAtLeastOneAvailablePaymentOption = function () {
    var e;
    for (e = 0; e < this.supportedPaymentOptions.length; e++)
      if (this.dependencyStates[this.supportedPaymentOptions[e]] === ya.DONE)
        return !0;
    return !1;
  }),
  (yf.prototype.asyncDependencyReady = function (e) {
    this.dependencyStates[e] = ya.DONE;
  }),
  (yf.prototype.asyncDependencyFailed = function (e) {
    this.failedDependencies.hasOwnProperty(e.view) ||
      ((this.failedDependencies[e.view] = e.error),
      (this.dependencyStates[e.view] = ya.FAILED));
  }),
  (yf.prototype.cancelInitialization = function (e) {
    this._emit("cancelInitialization", e);
  }),
  (yf.prototype.reportError = function (e) {
    this._emit("errorOccurred", e);
  }),
  (yf.prototype.clearError = function () {
    this._emit("errorCleared");
  }),
  (yf.prototype.preventUserAction = function () {
    this._emit("preventUserAction");
  }),
  (yf.prototype.allowUserAction = function () {
    this._emit("allowUserAction");
  }),
  (yf.prototype.deleteVaultedPaymentMethod = function () {
    var e,
      t = this,
      n = ys.resolve();
    return (
      this._emit("startVaultedPaymentMethodDeletion"),
      t.isGuestCheckout ||
        (n = this._vaultManager
          .deletePaymentMethod(this._paymentMethodWaitingToBeDeleted.nonce)
          .catch(function (t) {
            e = t;
          })),
      n
        .then(function () {
          return (
            delete t._paymentMethodWaitingToBeDeleted, t.refreshPaymentMethods()
          );
        })
        .then(function () {
          t.disableEditMode(), t._emit("finishVaultedPaymentMethodDeletion", e);
        })
    );
  }),
  (yf.prototype.cancelDeleteVaultedPaymentMethod = function () {
    this._emit("cancelVaultedPaymentMethodDeletion"),
      delete this._paymentMethodWaitingToBeDeleted;
  }),
  (yf.prototype.getVaultedPaymentMethods = function () {
    var e = this;
    return e.isGuestCheckout
      ? ys.resolve([])
      : e._vaultManager
          .fetchPaymentMethods({
            defaultFirst:
              !1 !== this.merchantConfiguration.showDefaultPaymentMethodFirst,
          })
          .then(function (t) {
            return e._getSupportedPaymentMethods(t).map(function (e) {
              return (e.vaulted = !0), e;
            });
          })
          .catch(function () {
            return ys.resolve([]);
          });
  }),
  (yf.prototype._getSupportedPaymentMethods = function (e) {
    var t = this,
      n = this.supportedPaymentOptions.reduce(function (e, n) {
        var r = yr[n];
        return yv(r, t.hiddenVaultedPaymentMethodTypes) && e.push(r), e;
      }, []);
    return e.filter(function (e) {
      return n.indexOf(e.type) > -1;
    });
  }),
  (yf.prototype._getSupportedPaymentOptions = function (e) {
    var t,
      n = this,
      r = e.merchantConfiguration.paymentOptionPriority || yu;
    if (!(r instanceof Array))
      throw new ye("paymentOptionPriority must be an array.");
    return (
      (t = (r = r.filter(function (e, t) {
        return r.indexOf(e) === t;
      })).map(function (t) {
        return yE(t, e).then(function (e) {
          return e.success || (n.dependencyStates[e.id] = ya.NOT_ENABLED), e;
        });
      })),
      ys.all(t).then(function (e) {
        return 0 ===
          (e = e.filter(function (e) {
            return e.success;
          })).length
          ? ys.reject(new ye("No valid payment options available."))
          : e.map(function (e) {
              return e.id;
            });
      })
    );
  });
var yP = yf,
  yC = rW,
  yb = it,
  yT = rK,
  yA = C,
  yI = m0,
  yD =
    '<div class="braintree-method__icon-container braintree-method__delete-container">\n  <div class="braintree-method__icon braintree-method__delete">\n    <svg width="48" height="29">\n      <use xlink:href="#iconX"></use>\n    </svg>\n  </div>\n</div>\n\n<div class="braintree-method__logo">\n  <svg width="40" height="24" class="@CLASSNAME">\n    <use xlink:href="#@ICON"></use>\n  </svg>\n</div>\n\n<div class="braintree-method__label">@TITLE<br><div class="braintree-method__label--small">@SUBTITLE</div></div>\n\n<div class="braintree-method__icon-container braintree-method__check-container">\n  <div class="braintree-method__icon braintree-method__check">\n    <svg height="100%" width="100%">\n      <use xlink:href="#iconCheck"></use>\n    </svg>\n  </div>\n</div>\n';
function yN() {
  yb.apply(this, arguments), this._initialize();
}
(yN.prototype = Object.create(yb.prototype)),
  (yN.prototype.constructor = yN),
  (yN.prototype._initialize = function () {
    var e,
      t = yD,
      n = yA.paymentMethodCardTypes,
      r = yA.paymentMethodTypes;
    switch (
      ((this.element = document.createElement("div")),
      (this.element.className = "braintree-method"),
      this.element.setAttribute("tabindex", "0"),
      this.element.setAttribute("role", "button"),
      yI(
        this.element,
        function () {
          this.model.isInEditMode()
            ? this._selectDelete()
            : this._choosePaymentMethod();
        }.bind(this)
      ),
      this.paymentMethod.type)
    ) {
      case r.applePay:
        t = t
          .replace(/@ICON/g, "logoApplePay")
          .replace(/@CLASSNAME/g, "")
          .replace(/@TITLE/g, this.strings["Apple Pay"])
          .replace(/@SUBTITLE/g, "");
        break;
      case r.card:
        (e = this.strings.endingIn.replace(
          "{{lastFourCardDigits}}",
          this.paymentMethod.details.lastFour
        )),
          (t = t
            .replace(/@ICON/g, "icon-" + n[this.paymentMethod.details.cardType])
            .replace(/@CLASSNAME/g, " braintree-icon--bordered")
            .replace(/@TITLE/g, e)
            .replace(
              /@SUBTITLE/g,
              this.strings[this.paymentMethod.details.cardType]
            ));
        break;
      case r.googlePay:
        t = t
          .replace(/@ICON/g, "logoGooglePay")
          .replace(/@CLASSNAME/g, "")
          .replace(/@TITLE/g, this.strings["Google Pay"])
          .replace(/@SUBTITLE/g, "");
        break;
      case r.paypal:
        t = t
          .replace(/@ICON/g, "logoPayPal")
          .replace(/@CLASSNAME/g, "")
          .replace(/@TITLE/g, this.paymentMethod.details.email)
          .replace(/@SUBTITLE/g, this.strings.PayPal);
        break;
      case r.venmo:
        t = t
          .replace(/@ICON/g, "logoVenmo")
          .replace(/@CLASSNAME/g, "")
          .replace(/@TITLE/g, this.paymentMethod.details.username)
          .replace(/@SUBTITLE/g, this.strings.Venmo);
    }
    (this.element.innerHTML = t),
      (this.checkMark = this.element.querySelector(
        ".braintree-method__check-container"
      ));
  }),
  (yN.prototype.setActive = function (e) {
    setTimeout(
      function () {
        yT.toggle(this.element, "braintree-method--active", e);
      }.bind(this),
      0
    );
  }),
  (yN.prototype.enableEditMode = function () {
    yT.add(this.checkMark, "braintree-hidden"),
      this.paymentMethod.hasSubscription &&
        yT.add(this.element, "braintree-method--disabled");
  }),
  (yN.prototype.disableEditMode = function () {
    yT.remove(this.checkMark, "braintree-hidden"),
      yT.remove(this.element, "braintree-method--disabled");
  }),
  (yN.prototype.teardown = function () {
    this.element.parentNode &&
      this.element.parentNode.removeChild(this.element);
  }),
  (yN.prototype._choosePaymentMethod = function () {
    this.paymentMethod.vaulted &&
      yC.sendEvent(
        this.client,
        "vaulted-" + yA.analyticsKinds[this.paymentMethod.type] + ".select"
      ),
      this.model.changeActivePaymentMethod(this.paymentMethod);
  }),
  (yN.prototype._selectDelete = function () {
    this.model.confirmPaymentMethodDeletion(this.paymentMethod);
  });
var yO = yN,
  yx = it,
  yF = yO,
  yM = rX,
  yw = rK,
  yL = C.errors,
  yS = r4,
  yR = m0,
  yk = {
    CreditCard: "Card",
    PayPalAccount: "PayPal",
    ApplePayCard: "Apple Pay",
    AndroidPayCard: "Google Pay",
    VenmoAccount: "Venmo",
  };
function yV() {
  yx.apply(this, arguments), this._initialize();
}
(yV.prototype = Object.create(yx.prototype)),
  (yV.prototype.constructor = yV),
  (yV.ID = yV.prototype.ID = "methods"),
  (yV.prototype._initialize = function () {
    (this.views = []),
      (this.container = this.getElementById("methods-container")),
      (this._headingLabel = this.getElementById("methods-label")),
      (this._editButton = this.getElementById("methods-edit")),
      this.model.on("addPaymentMethod", this._addPaymentMethod.bind(this)),
      this.model.on(
        "changeActivePaymentMethod",
        this._changeActivePaymentMethodView.bind(this)
      ),
      this.model.on(
        "refreshPaymentMethods",
        this.refreshPaymentMethods.bind(this)
      ),
      this.refreshPaymentMethods(),
      this.model.merchantConfiguration.vaultManager &&
        (this.model.on(
          "removePaymentMethod",
          this._removePaymentMethod.bind(this)
        ),
        yR(
          this._editButton,
          function () {
            this.model.isInEditMode()
              ? this.model.disableEditMode()
              : this.model.enableEditMode();
          }.bind(this)
        ),
        yw.remove(this._editButton, "braintree-hidden"));
  }),
  (yV.prototype.removeActivePaymentMethod = function () {
    this.activeMethodView &&
      (this.activeMethodView.setActive(!1),
      (this.activeMethodView = null),
      yw.add(this._headingLabel, "braintree-no-payment-method-selected"));
  }),
  (yV.prototype._getPaymentMethodString = function () {
    var e, t;
    return this.activeMethodView
      ? ((e = yk[this.activeMethodView.paymentMethod.type]),
        (t = this.strings[e]),
        this.strings.payingWith.replace("{{paymentSource}}", t))
      : "";
  }),
  (yV.prototype.enableEditMode = function () {
    yw.add(this.container, "braintree-methods--edit"),
      (this._editButton.innerHTML = this.strings.deleteCancelButton),
      (this._headingLabel.innerHTML = this.strings.editPaymentMethods),
      this.views.forEach(function (e) {
        e.enableEditMode();
      });
  }),
  (yV.prototype.disableEditMode = function () {
    yw.remove(this.container, "braintree-methods--edit"),
      (this._editButton.innerHTML = this.strings.edit),
      (this._headingLabel.innerHTML = this._getPaymentMethodString()),
      this.views.forEach(function (e) {
        e.disableEditMode();
      });
  }),
  (yV.prototype._addPaymentMethod = function (e) {
    var t = new yF({
      model: this.model,
      paymentMethod: e,
      client: this.client,
      strings: this.strings,
    });
    this.model.isGuestCheckout &&
      this.container.firstChild &&
      (this.views[0].teardown(), this.views.pop()),
      this.container.firstChild
        ? this.container.insertBefore(t.element, this.container.firstChild)
        : this.container.appendChild(t.element),
      this.views.push(t);
  }),
  (yV.prototype._removePaymentMethod = function (e) {
    var t;
    for (t = 0; t < this.views.length; t++)
      if (this.views[t].paymentMethod === e) {
        this.views[t].teardown(),
          (this._headingLabel.innerHTML = "&nbsp;"),
          this.views.splice(t, 1);
        break;
      }
  }),
  (yV.prototype._changeActivePaymentMethodView = function (e) {
    var t,
      n = this.activeMethodView;
    for (t = 0; t < this.views.length; t++)
      if (this.views[t].paymentMethod === e) {
        (this.activeMethodView = this.views[t]),
          (this._headingLabel.innerHTML = this._getPaymentMethodString());
        break;
      }
    n && n.setActive(!1),
      this.activeMethodView.setActive(!0),
      yw.remove(this._headingLabel, "braintree-no-payment-method-selected");
  }),
  (yV.prototype.requestPaymentMethod = function () {
    return !this.activeMethodView || this.model.isInEditMode()
      ? yS.reject(new yM(yL.NO_PAYMENT_METHOD_ERROR))
      : yS.resolve(this.activeMethodView.paymentMethod);
  }),
  (yV.prototype.refreshPaymentMethods = function () {
    var e,
      t = this.model.getPaymentMethods();
    for (
      this.views.forEach(function (e) {
        e.teardown();
      }),
        this.views = [],
        e = t.length - 1;
      e >= 0;
      e--
    )
      this._addPaymentMethod(t[e]);
  });
var yz = yV,
  yU = it,
  yH = m0,
  yB = C.paymentMethodTypes;
function yj() {
  yU.apply(this, arguments), this._initialize();
}
(yj.prototype = Object.create(yU.prototype)),
  (yj.prototype.constructor = yj),
  (yj.ID = yj.prototype.ID = "delete-confirmation"),
  (yj.prototype._initialize = function () {
    (this._yesButton = this.getElementById("delete-confirmation__yes")),
      (this._noButton = this.getElementById("delete-confirmation__no")),
      (this._messageBox = this.getElementById("delete-confirmation__message")),
      yH(
        this._yesButton,
        function () {
          this.model.deleteVaultedPaymentMethod();
        }.bind(this)
      ),
      yH(
        this._noButton,
        function () {
          this.model.cancelDeleteVaultedPaymentMethod();
        }.bind(this)
      );
  }),
  (yj.prototype.applyPaymentMethod = function (e) {
    var t,
      n,
      r = this.strings[e.type + "DeleteConfirmationMessage"];
    if (r) {
      switch (e.type) {
        case yB.card:
          (t = e.details.lastFour),
            (n = e.details.cardType),
            (n = this.strings[n] || n);
          break;
        case yB.paypal:
          t = e.details.email;
          break;
        case yB.venmo:
          t = e.details.username;
      }
      (r = r.replace("{{identifier}}", t)),
        n && (r = r.replace("{{secondaryIdentifier}}", n));
    } else r = this.strings.genericDeleteConfirmationMessage;
    this._messageBox.innerText = r;
  }),
  (yj.prototype.onSelection = function () {
    window.requestAnimationFrame(
      function () {
        this._yesButton.focus();
      }.bind(this)
    );
  });
var yW = yj,
  yK = r4;
function yY(e) {
  return (
    (e = e || 0),
    new yK(function (t) {
      window.setTimeout(t, e);
    })
  );
}
var yG = { delay: yY },
  yq = function () {
    var e = document.createElement("div");
    return (
      ["-webkit-", "-moz-", "-ms-", "-o-", ""].forEach(function (t) {
        e.style.cssText += t + "flex-basis: 1px";
      }),
      Boolean(e.style.length)
    );
  },
  yQ = rW,
  yZ = C.analyticsKinds,
  yJ = it,
  yX = rK,
  y$ = mM,
  y1 = yz,
  y0 = m8,
  y2 = yW,
  y3 = m0,
  y4 = r4,
  y5 = yG,
  y6 = yq,
  y7 = C.CHANGE_ACTIVE_PAYMENT_METHOD_TIMEOUT,
  y8 = C.errors.DEVELOPER_MISCONFIGURATION_MESSAGE;
function y9() {
  yJ.apply(this, arguments),
    (this.dependenciesInitializing = 0),
    this._initialize();
}
function fe(e) {
  return e.toLowerCase().replace(/(\_\w)/g, function (e) {
    return e[1].toUpperCase();
  });
}
function ft(e) {
  return "braintree-show-" + e;
}
(y9.prototype = Object.create(yJ.prototype)),
  (y9.prototype.constructor = y9),
  (y9.prototype._initialize = function () {
    var e;
    (this._hasMultiplePaymentOptions =
      this.model.supportedPaymentOptions.length > 1),
      (this._views = {}),
      (this.sheetContainer = this.getElementById("sheet-container")),
      (this.sheetErrorText = this.getElementById("sheet-error-text")),
      (this.toggle = this.getElementById("toggle")),
      (this.disableWrapper = this.getElementById("disable-wrapper")),
      (this.lowerContainer = this.getElementById("lower-container")),
      (this.loadingContainer = this.getElementById("loading-container")),
      (this.dropinContainer = this.element.querySelector(".braintree-dropin")),
      (this.supportsFlexbox = y6()),
      this.model.on(
        "asyncDependenciesReady",
        this.hideLoadingIndicator.bind(this)
      ),
      this.model.on("errorOccurred", this.showSheetError.bind(this)),
      this.model.on("errorCleared", this.hideSheetError.bind(this)),
      this.model.on("preventUserAction", this.preventUserAction.bind(this)),
      this.model.on("allowUserAction", this.allowUserAction.bind(this)),
      (this.paymentSheetViewIDs = Object.keys(y$).reduce(
        function (e, t) {
          var n, r;
          return (
            -1 !== this.model.supportedPaymentOptions.indexOf(t) &&
              ((r = new (n = y$[t])({
                element: this.getElementById(n.ID),
                mainView: this,
                model: this.model,
                client: this.client,
                strings: this.strings,
              })).initialize(),
              this.addView(r),
              e.push(r.ID)),
            e
          );
        }.bind(this),
        []
      )),
      (this.paymentMethodsViews = new y1({
        element: this.element,
        model: this.model,
        client: this.client,
        strings: this.strings,
      })),
      this.addView(this.paymentMethodsViews),
      (this.deleteConfirmationView = new y2({
        element: this.getElementById("delete-confirmation"),
        model: this.model,
        strings: this.strings,
      })),
      this.addView(this.deleteConfirmationView),
      y3(this.toggle, this.toggleAdditionalOptions.bind(this)),
      this.model.on(
        "changeActivePaymentMethod",
        function () {
          y5.delay(y7).then(
            function () {
              var e = y1.ID;
              this.model.hasPaymentMethods() ||
                (e = this.model.getInitialViewId()),
                this.setPrimaryView(e);
            }.bind(this)
          );
        }.bind(this)
      ),
      this.model.on("changeActiveView", this._onChangeActiveView.bind(this)),
      this.model.on(
        "removeActivePaymentMethod",
        function () {
          var e = this.getView(this.model.getActivePaymentViewId());
          e &&
            "function" == typeof e.removeActivePaymentMethod &&
            e.removeActivePaymentMethod();
        }.bind(this)
      ),
      this.model.on("enableEditMode", this.enableEditMode.bind(this)),
      this.model.on("disableEditMode", this.disableEditMode.bind(this)),
      this.model.on(
        "confirmPaymentMethodDeletion",
        this.openConfirmPaymentMethodDeletionDialog.bind(this)
      ),
      this.model.on(
        "cancelVaultedPaymentMethodDeletion",
        this.cancelVaultedPaymentMethodDeletion.bind(this)
      ),
      this.model.on(
        "startVaultedPaymentMethodDeletion",
        this.startVaultedPaymentMethodDeletion.bind(this)
      ),
      this.model.on(
        "finishVaultedPaymentMethodDeletion",
        this.finishVaultedPaymentMethodDeletion.bind(this)
      ),
      this._hasMultiplePaymentOptions &&
        ((e = new y0({
          client: this.client,
          element: this.getElementById(y0.ID),
          mainView: this,
          model: this.model,
          strings: this.strings,
        })),
        this.addView(e)),
      this._sendToDefaultView();
  }),
  (y9.prototype._onChangeActiveView = function (e) {
    var t = e.newViewId,
      n = this.getView(t);
    t === y1.ID
      ? (yX.add(
          this.paymentMethodsViews.container,
          "braintree-methods--active"
        ),
        yX.remove(this.sheetContainer, "braintree-sheet--active"))
      : (y5.delay(0).then(
          function () {
            yX.add(this.sheetContainer, "braintree-sheet--active");
          }.bind(this)
        ),
        yX.remove(
          this.paymentMethodsViews.container,
          "braintree-methods--active"
        ),
        this.getView(t).getPaymentMethod() ||
          this.model.setPaymentMethodRequestable({ isRequestable: !1 })),
      n.onSelection();
  }),
  (y9.prototype.addView = function (e) {
    this._views[e.ID] = e;
  }),
  (y9.prototype.getView = function (e) {
    return this._views[e];
  }),
  (y9.prototype.setPrimaryView = function (e, t) {
    var n;
    y5.delay(0).then(
      function () {
        (this.element.className = ft(e)), t && yX.add(this.element, ft(t));
      }.bind(this)
    ),
      (this.primaryView = this.getView(e)),
      this.model.changeActiveView(e),
      -1 !== this.paymentSheetViewIDs.indexOf(e)
        ? this.model.getPaymentMethods().length > 0 || this.getView(y0.ID)
          ? this.showToggle()
          : this.hideToggle()
        : e === y1.ID
        ? (this.showToggle(),
          this.getElementById("lower-container").appendChild(
            this.getElementById("options")
          ))
        : e === y0.ID && this.hideToggle(),
      this.supportsFlexbox ||
        this.element.setAttribute("data-braintree-no-flexbox", !0),
      (n = this.primaryView.getPaymentMethod()),
      this.model.setPaymentMethodRequestable({
        isRequestable: Boolean(n && !this.model.isInEditMode()),
        type: n && n.type,
        selectedPaymentMethod: n,
      }),
      this.model.clearError();
  }),
  (y9.prototype.requestPaymentMethod = function () {
    return this.getView(this.model.getActivePaymentViewId())
      .requestPaymentMethod()
      .then(
        function (e) {
          return (
            yQ.sendEvent(this.client, "request-payment-method." + yZ[e.type]), e
          );
        }.bind(this)
      )
      .catch(
        function (e) {
          return (
            yQ.sendEvent(this.client, "request-payment-method.error"),
            y4.reject(e)
          );
        }.bind(this)
      );
  }),
  (y9.prototype.hideLoadingIndicator = function () {
    yX.remove(this.dropinContainer, "braintree-loading"),
      yX.add(this.dropinContainer, "braintree-loaded"),
      yX.add(this.loadingContainer, "braintree-hidden");
  }),
  (y9.prototype.showLoadingIndicator = function () {
    yX.add(this.dropinContainer, "braintree-loading"),
      yX.remove(this.dropinContainer, "braintree-loaded"),
      yX.remove(this.loadingContainer, "braintree-hidden");
  }),
  (y9.prototype.toggleAdditionalOptions = function () {
    var e,
      t = -1 !== this.paymentSheetViewIDs.indexOf(this.primaryView.ID);
    this.hideToggle(),
      this._hasMultiplePaymentOptions
        ? t
          ? 0 === this.model.getPaymentMethods().length
            ? this.setPrimaryView(y0.ID)
            : (this.setPrimaryView(y1.ID, y0.ID), this.hideToggle())
          : yX.add(this.element, ft(y0.ID))
        : ((e = this.paymentSheetViewIDs[0]),
          yX.add(this.element, ft(e)),
          this.model.changeActiveView(e));
  }),
  (y9.prototype.showToggle = function () {
    this.model.isInEditMode() ||
      (yX.remove(this.toggle, "braintree-hidden"),
      yX.add(this.lowerContainer, "braintree-hidden"));
  }),
  (y9.prototype.hideToggle = function () {
    yX.add(this.toggle, "braintree-hidden"),
      yX.remove(this.lowerContainer, "braintree-hidden");
  }),
  (y9.prototype.showSheetError = function (e) {
    var t,
      n = this.strings.genericError;
    (t = this.strings.hasOwnProperty(e)
      ? this.strings[e]
      : e && "string" == typeof e.code
      ? this.strings[fe(e.code) + "Error"] || n
      : "developerError" === e
      ? y8
      : n),
      yX.add(this.dropinContainer, "braintree-sheet--has-error"),
      (this.sheetErrorText.innerHTML = t);
  }),
  (y9.prototype.hideSheetError = function () {
    yX.remove(this.dropinContainer, "braintree-sheet--has-error");
  }),
  (y9.prototype.getOptionsElements = function () {
    return this._views.options.elements;
  }),
  (y9.prototype.preventUserAction = function () {
    yX.remove(this.disableWrapper, "braintree-hidden");
  }),
  (y9.prototype.allowUserAction = function () {
    yX.add(this.disableWrapper, "braintree-hidden");
  }),
  (y9.prototype.teardown = function () {
    var e,
      t = Object.keys(this._views).map(
        function (t) {
          return this._views[t].teardown().catch(function (t) {
            e = t;
          });
        }.bind(this)
      );
    return y4.all(t).then(function () {
      return e ? y4.reject(e) : y4.resolve();
    });
  }),
  (y9.prototype.enableEditMode = function () {
    this.setPrimaryView(this.paymentMethodsViews.ID),
      this.paymentMethodsViews.enableEditMode(),
      this.hideToggle(),
      this.model.setPaymentMethodRequestable({ isRequestable: !1 });
  }),
  (y9.prototype.disableEditMode = function () {
    var e;
    this.hideSheetError(),
      this.paymentMethodsViews.disableEditMode(),
      this.showToggle(),
      (e = this.primaryView.getPaymentMethod()),
      this.model.setPaymentMethodRequestable({
        isRequestable: Boolean(e),
        type: e && e.type,
        selectedPaymentMethod: e,
      });
  }),
  (y9.prototype.openConfirmPaymentMethodDeletionDialog = function (e) {
    this.deleteConfirmationView.applyPaymentMethod(e),
      this.setPrimaryView(this.deleteConfirmationView.ID);
  }),
  (y9.prototype.cancelVaultedPaymentMethodDeletion = function () {
    this.setPrimaryView(this.paymentMethodsViews.ID);
  }),
  (y9.prototype.startVaultedPaymentMethodDeletion = function () {
    (this.element.className = ""), this.showLoadingIndicator();
  }),
  (y9.prototype.finishVaultedPaymentMethodDeletion = function (e) {
    var t = this;
    return (
      this.paymentMethodsViews.refreshPaymentMethods(),
      e && this.model.getPaymentMethods().length > 0
        ? (this.model.enableEditMode(),
          this.showSheetError("vaultManagerPaymentMethodDeletionError"))
        : this._sendToDefaultView(),
      new y4(function (e) {
        y5.delay(500).then(function () {
          t.hideLoadingIndicator(), e();
        });
      })
    );
  }),
  (y9.prototype._sendToDefaultView = function () {
    var e = this.model.getPaymentMethods(),
      t = !1 !== this.model.merchantConfiguration.preselectVaultedPaymentMethod;
    e.length > 0
      ? t
        ? (yQ.sendEvent(this.client, "vaulted-card.preselect"),
          this.model.changeActivePaymentMethod(e[0]))
        : this.setPrimaryView(this.paymentMethodsViews.ID)
      : this._hasMultiplePaymentOptions
      ? this.setPrimaryView(y0.ID)
      : this.setPrimaryView(this.paymentSheetViewIDs[0]);
  });
var fn = y9,
  fr = function (e) {
    return "string" != typeof e
      ? ""
      : e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  },
  fi = C,
  fa = rW,
  fo = lQ,
  fs = r4;
function fd(e) {
  this._config = e;
}
(fd.prototype.initialize = function () {
  var e = this;
  return fs
    .resolve()
    .then(function () {
      var t;
      return h.braintree && h.braintree.dataCollector
        ? fs.resolve()
        : ((t = e._config.client.getVersion()),
          fo.loadScript({
            src:
              "https://js.braintreegateway.com/web/" +
              t +
              "/js/data-collector.min.js",
            id: fi.DATA_COLLECTOR_SCRIPT_ID,
          }));
    })
    .then(function () {
      return h.braintree.dataCollector.create(e._config);
    })
    .then(function (t) {
      e._instance = t;
    })
    .catch(function (t) {
      fa.sendEvent(e._config.client, "data-collector.setup-failed"), e.log(t);
    });
}),
  (fd.prototype.log = function (e) {
    console.log(e);
  }),
  (fd.prototype.getDeviceData = function () {
    return this._instance ? this._instance.deviceData : "";
  }),
  (fd.prototype.teardown = function () {
    return this._instance ? this._instance.teardown() : fs.resolve();
  });
var fl = fd,
  fc = D,
  fp = {
    THREEDS_NOT_ENABLED: {
      type: fc.types.MERCHANT,
      code: "THREEDS_NOT_ENABLED",
      message: "3D Secure is not enabled for this merchant.",
    },
    THREEDS_CAN_NOT_USE_TOKENIZATION_KEY: {
      type: fc.types.MERCHANT,
      code: "THREEDS_CAN_NOT_USE_TOKENIZATION_KEY",
      message: "3D Secure can not use a tokenization key for authorization.",
    },
    THREEDS_HTTPS_REQUIRED: {
      type: fc.types.MERCHANT,
      code: "THREEDS_HTTPS_REQUIRED",
      message: "3D Secure requires HTTPS.",
    },
    THREEDS_NOT_ENABLED_FOR_V2: {
      type: fc.types.MERCHANT,
      code: "THREEDS_NOT_ENABLED_FOR_V2",
      message:
        "3D Secure version 2 is not enabled for this merchant. Contact Braintree Support for assistance at https://help.braintreepayments.com/",
    },
    THREEDS_UNRECOGNIZED_VERSION: {
      type: fc.types.MERCHANT,
      code: "THREEDS_UNRECOGNIZED_VERSION",
    },
    THREEDS_CARDINAL_SDK_SETUP_FAILED: {
      type: fc.types.UNKNOWN,
      code: "THREEDS_CARDINAL_SDK_SETUP_FAILED",
      message:
        "Something went wrong setting up Cardinal's Songbird.js library.",
    },
    THREEDS_CARDINAL_SDK_SCRIPT_LOAD_FAILED: {
      type: fc.types.NETWORK,
      code: "THREEDS_CARDINAL_SDK_SCRIPT_LOAD_FAILED",
      message: "Cardinal's Songbird.js library could not be loaded.",
    },
    THREEDS_CARDINAL_SDK_SETUP_TIMEDOUT: {
      type: fc.types.UNKNOWN,
      code: "THREEDS_CARDINAL_SDK_SETUP_TIMEDOUT",
      message: "Cardinal's Songbird.js took too long to setup.",
    },
    THREEDS_CARDINAL_SDK_RESPONSE_TIMEDOUT: {
      type: fc.types.UNKNOWN,
      code: "THREEDS_CARDINAL_SDK_RESPONSE_TIMEDOUT",
      message: "Cardinal's API took too long to respond.",
    },
    THREEDS_CARDINAL_SDK_BAD_CONFIG: {
      type: fc.types.MERCHANT,
      code: "THREEDS_CARDINAL_SDK_BAD_CONFIG",
      message:
        "JWT or other required field missing. Please check your setup configuration.",
    },
    THREEDS_CARDINAL_SDK_BAD_JWT: {
      type: fc.types.MERCHANT,
      code: "THREEDS_CARDINAL_SDK_BAD_JWT",
      message:
        "Cardinal JWT missing or malformed. Please check your setup configuration.",
    },
    THREEDS_CARDINAL_SDK_ERROR: {
      type: fc.types.UNKNOWN,
      code: "THREEDS_CARDINAL_SDK_ERROR",
      message:
        "A general error has occurred with Cardinal. See description for more information.",
    },
    THREEDS_CARDINAL_SDK_CANCELED: {
      type: fc.types.CUSTOMER,
      code: "THREEDS_CARDINAL_SDK_CANCELED",
      message: "Canceled by user.",
    },
    THREEDS_VERIFY_CARD_CANCELED_BY_MERCHANT: {
      type: fc.types.MERCHANT,
      code: "THREEDS_VERIFY_CARD_CANCELED_BY_MERCHANT",
      message: "3D Secure verfication canceled by merchant.",
    },
    THREEDS_AUTHENTICATION_IN_PROGRESS: {
      type: fc.types.MERCHANT,
      code: "THREEDS_AUTHENTICATION_IN_PROGRESS",
      message:
        "Cannot call verifyCard while existing authentication is in progress.",
    },
    THREEDS_MISSING_VERIFY_CARD_OPTION: {
      type: fc.types.MERCHANT,
      code: "THREEDS_MISSING_VERIFY_CARD_OPTION",
    },
    THREEDS_JWT_AUTHENTICATION_FAILED: {
      type: fc.types.UNKNOWN,
      code: "THREEDS_JWT_AUTHENTICATION_FAILED",
      message: "Something went wrong authenticating the JWT from Cardinal",
    },
    THREEDS_LOOKUP_TOKENIZED_CARD_NOT_FOUND_ERROR: {
      type: fc.types.MERCHANT,
      code: "THREEDS_LOOKUP_TOKENIZED_CARD_NOT_FOUND_ERROR",
      message:
        "Either the payment method nonce passed to `verifyCard` does not exist, or it was already consumed",
    },
    THREEDS_LOOKUP_VALIDATION_ERROR: {
      type: fc.types.CUSTOMER,
      code: "THREEDS_LOOKUP_VALIDATION_ERROR",
      message:
        "The data passed in `verifyCard` did not pass validation checks. See details for more info",
    },
    THREEDS_LOOKUP_ERROR: {
      type: fc.types.UNKNOWN,
      code: "THREEDS_LOOKUP_ERROR",
      message: "Something went wrong during the 3D Secure lookup",
    },
    THREEDS_INLINE_IFRAME_DETAILS_INCORRECT: {
      type: fc.types.UNKNOWN,
      code: "THREEDS_INLINE_IFRAME_DETAILS_INCORRECT",
      message:
        "Something went wrong when attempting to add the authentication iframe to the page.",
    },
    THREEDS_NO_VERIFICATION_PAYLOAD: {
      type: fc.types.MERCHANT,
      code: "THREEDS_NO_VERIFICATION_PAYLOAD",
      message: "No verification payload available.",
    },
    THREEDS_TERM_URL_REQUIRES_BRAINTREE_DOMAIN: {
      type: fc.types.INTERNAL,
      code: "THREEDS_TERM_URL_REQUIRES_BRAINTREE_DOMAIN",
      message: "Term Url must be on a Braintree domain.",
    },
    THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED: {
      type: fc.types.INTERNAL,
      code: "THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED",
      message: "Method not implemented for this framework.",
    },
    THREEDS_REQUESTED_EXEMPTION_TYPE_INVALID: {
      type: fc.types.MERCHANT,
      code: "THREEDS_REQUESTED_EXEMPTION_TYPE_INVALID",
      message: "Requested Exemption Type is invalid.",
    },
    THREEDS_UNSUPPORTED_VERSION: {
      type: fc.types.MERCHANT,
      code: "THREEDS_UNSUPPORTED_VERSION",
      message:
        "3D Secure `1` is deprecated and no longer supported. See available versions at https://braintree.github.io/braintree-web/current/module-braintree-web_three-d-secure.html#.create",
    },
  },
  fu = {
    LANDING_FRAME_NAME: "braintreethreedsecurelanding",
    CARDINAL_SCRIPT_SOURCE: {
      production: "https://songbird.cardinalcommerce.com/edge/v1/songbird.js",
      sandbox: "https://songbirdstag.cardinalcommerce.com/edge/v1/songbird.js",
    },
  },
  fh = T,
  fm = fh(["AUTHENTICATION_COMPLETE"], "threedsecure:"),
  fy = ey.assign,
  ff = nG,
  fE = D,
  f_ = t0,
  fv = tx,
  fg = tJ,
  fP = r1,
  fC = fp,
  fb = aa,
  fT = aQ,
  fA = fu,
  fI = Q,
  fD = fm,
  fN = a4,
  fO = nd.BUS_CONFIGURATION_REQUEST_EVENT,
  fx = "3.91.0",
  fF = 400,
  fM = 400;
function fw(e) {
  fP.call(this),
    (this._client = e.client),
    (this._createPromise = e.createPromise),
    (this._createOptions = e),
    this._client
      ? ((this._isDebug = this._client.getConfiguration().isDebug),
        (this._assetsUrl =
          this._client.getConfiguration().gatewayConfiguration.assetsUrl))
      : ((this._isDebug = Boolean(e.isDebug)), (this._assetsUrl = e.assetsUrl)),
    (this._assetsUrl = this._assetsUrl + "/web/" + fx);
}
fP.createChild(fw),
  (fw.prototype._waitForClient = function () {
    return this._client
      ? f_.resolve()
      : this._createPromise.then(
          function (e) {
            this._client = e;
          }.bind(this)
        );
  }),
  (fw.prototype.setUpEventListeners = function () {
    throw new fE(fC.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED);
  }),
  (fw.prototype.verifyCard = function (e, t) {
    var n,
      r,
      i = this;
    return ((t = t || {}), (r = this._checkForVerifyCardError(e, t)))
      ? f_.reject(r)
      : ((this._verifyCardInProgress = !0),
        (n = this._formatVerifyCardOptions(e)),
        this._formatLookupData(n)
          .then(function (e) {
            return (
              ff.sendEvent(
                i._createPromise,
                "three-d-secure.verification-flow.started"
              ),
              i._performLookup(n.nonce, e)
            );
          })
          .then(function (e) {
            return (
              ff.sendEvent(
                i._createPromise,
                "three-d-secure.verification-flow.3ds-version." +
                  e.lookup.threeDSecureVersion
              ),
              i._onLookupComplete(e, n)
            );
          })
          .then(function (e) {
            return i.initializeChallengeWithLookupResponse(e, n);
          })
          .then(function (e) {
            return (
              i._resetVerificationState(),
              ff.sendEvent(
                i._createPromise,
                "three-d-secure.verification-flow.completed"
              ),
              e
            );
          })
          .catch(function (e) {
            return (
              i._resetVerificationState(),
              ff.sendEvent(
                i._createPromise,
                "three-d-secure.verification-flow.failed"
              ),
              f_.reject(e)
            );
          }));
  }),
  (fw.prototype._checkForFrameworkSpecificVerifyCardErrors = function () {
    throw new fE(fC.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED);
  }),
  (fw.prototype._presentChallenge = function () {
    throw new fE(fC.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED);
  }),
  (fw.prototype.prepareLookup = function () {
    throw new fE(fC.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED);
  }),
  (fw.prototype._resetVerificationState = function () {
    (this._verifyCardInProgress = !1), (this._verifyCardPromisePlus = null);
  }),
  (fw.prototype._performLookup = function (e, t) {
    var n = this,
      r = "payment_methods/" + e + "/three_d_secure/lookup";
    return this._waitForClient().then(function () {
      return n._client
        .request({ endpoint: r, method: "post", data: t })
        .catch(function (e) {
          var t,
            r = e && e.details && e.details.httpStatus,
            i = "three-d-secure.verification-flow.lookup-failed";
          return (
            404 === r
              ? ((t = fC.THREEDS_LOOKUP_TOKENIZED_CARD_NOT_FOUND_ERROR),
                (i += ".404"))
              : 422 === r
              ? ((t = fC.THREEDS_LOOKUP_VALIDATION_ERROR), (i += ".422"))
              : (t = fC.THREEDS_LOOKUP_ERROR),
            ff.sendEvent(n._createPromise, i),
            f_.reject(
              new fE({
                type: t.type,
                code: t.code,
                message: t.message,
                details: { originalError: e },
              })
            )
          );
        });
    });
  }),
  (fw.prototype._checkForVerifyCardError = function (e, t) {
    var n;
    return !0 === this._verifyCardInProgress
      ? new fE(fC.THREEDS_AUTHENTICATION_IN_PROGRESS)
      : (e.nonce ? e.amount || (n = "an amount") : (n = "a nonce"),
        n || (n = this._checkForFrameworkSpecificVerifyCardErrors(e, t)),
        n)
      ? new fE({
          type: fC.THREEDS_MISSING_VERIFY_CARD_OPTION.type,
          code: fC.THREEDS_MISSING_VERIFY_CARD_OPTION.code,
          message: "verifyCard options must include " + n + ".",
        })
      : null;
  }),
  (fw.prototype.initializeChallengeWithLookupResponse = function (e, t) {
    var n = this;
    return (
      (t = t || {}),
      (this._lookupPaymentMethod = e.paymentMethod),
      (n._verifyCardPromisePlus = n._verifyCardPromisePlus || new fg()),
      n._handleLookupResponse(e, t),
      n._verifyCardPromisePlus.then(function (e) {
        return (
          ff.sendEvent(
            n._createPromise,
            "three-d-secure.verification-flow.liability-shifted." +
              String(e.liabilityShifted)
          ),
          ff.sendEvent(
            n._createPromise,
            "three-d-secure.verification-flow.liability-shift-possible." +
              String(e.liabilityShiftPossible)
          ),
          e
        );
      })
    );
  }),
  (fw.prototype._handleLookupResponse = function (e, t) {
    var n,
      r = Boolean(e.lookup && e.lookup.acsUrl);
    ff.sendEvent(
      this._createPromise,
      "three-d-secure.verification-flow.challenge-presented." + String(r)
    ),
      r
        ? this._presentChallenge(e, t)
        : (((n = this._formatAuthResponse(
            e.paymentMethod,
            e.threeDSecureInfo
          )).verificationDetails = e.threeDSecureInfo),
          this._verifyCardPromisePlus.resolve(n));
  }),
  (fw.prototype._onLookupComplete = function (e) {
    return (
      (this._lookupPaymentMethod = e.paymentMethod),
      (this._verifyCardPromisePlus = new fg()),
      f_.resolve(e)
    );
  }),
  (fw.prototype._formatAuthResponse = function (e, t) {
    return {
      nonce: e.nonce,
      type: e.type,
      binData: e.binData,
      details: e.details,
      description: e.description && e.description.replace(/\+/g, " "),
      liabilityShifted: t && t.liabilityShifted,
      liabilityShiftPossible: t && t.liabilityShiftPossible,
      threeDSecureInfo: e.threeDSecureInfo,
    };
  }),
  (fw.prototype._formatVerifyCardOptions = function (e) {
    return fy({}, e);
  }),
  (fw.prototype._formatLookupData = function (e) {
    var t = { amount: e.amount };
    return f_.resolve(t);
  }),
  (fw.prototype._handleV1AuthResponse = function (e) {
    var t = JSON.parse(e.auth_response);
    t.success
      ? this._verifyCardPromisePlus.resolve(
          this._formatAuthResponse(t.paymentMethod, t.threeDSecureInfo)
        )
      : t.threeDSecureInfo && t.threeDSecureInfo.liabilityShiftPossible
      ? this._verifyCardPromisePlus.resolve(
          this._formatAuthResponse(
            this._lookupPaymentMethod,
            t.threeDSecureInfo
          )
        )
      : this._verifyCardPromisePlus.reject(
          new fE({
            type: fE.types.UNKNOWN,
            code: "UNKNOWN_AUTH_RESPONSE",
            message: t.error.message,
          })
        );
  }),
  (fw.prototype.cancelVerifyCard = function () {
    var e, t;
    return ((this._verifyCardInProgress = !1), this._lookupPaymentMethod)
      ? ((t = this._lookupPaymentMethod.threeDSecureInfo),
        (e = fy({}, this._lookupPaymentMethod, {
          liabilityShiftPossible: t && t.liabilityShiftPossible,
          liabilityShifted: t && t.liabilityShifted,
          verificationDetails: t && t.verificationDetails,
        })),
        f_.resolve(e))
      : f_.reject(new fE(fC.THREEDS_NO_VERIFICATION_PAYLOAD));
  }),
  (fw.prototype._setupV1Bus = function (e) {
    var t = this._client.getConfiguration(),
      n = window.location.href.split("#")[0],
      r = e.lookupResponse,
      i = fI(),
      a = new fT({ channel: i, verifyDomain: fv }),
      o =
        this._assetsUrl +
        "/html/three-d-secure-authentication-complete-frame.html?channel=" +
        encodeURIComponent(i) +
        "&";
    return (
      a.on(fO, function (i) {
        i({
          clientConfiguration: t,
          nonce: e.nonce,
          acsUrl: r.acsUrl,
          pareq: r.pareq,
          termUrl:
            r.termUrl +
            "&three_d_secure_version=" +
            fx +
            "&authentication_complete_base_url=" +
            encodeURIComponent(o),
          md: r.md,
          parentUrl: n,
        });
      }),
      a.on(fD.AUTHENTICATION_COMPLETE, e.handleAuthResponse),
      a
    );
  }),
  (fw.prototype._setupV1Iframe = function (e) {
    return fb({
      src:
        this._assetsUrl +
        "/html/three-d-secure-bank-frame" +
        fN(this._isDebug) +
        ".html?showLoader=" +
        e.showLoader,
      height: fF,
      width: fM,
      name: fA.LANDING_FRAME_NAME + "_" + this._v1Bus.channel,
      title: "3D Secure Authorization Frame",
    });
  }),
  (fw.prototype._setupV1Elements = function (e) {
    (this._v1Bus = this._setupV1Bus(e)),
      (this._v1Iframe = this._setupV1Iframe(e));
  }),
  (fw.prototype._teardownV1Elements = function () {
    this._v1Bus && (this._v1Bus.teardown(), (this._v1Bus = null)),
      this._v1Iframe &&
        this._v1Iframe.parentNode &&
        (this._v1Iframe.parentNode.removeChild(this._v1Iframe),
        (this._v1Iframe = null)),
      this._onV1Keyup &&
        (document.removeEventListener("keyup", this._onV1Keyup),
        (this._onV1Keyup = null));
  }),
  (fw.prototype.teardown = function () {
    return (
      ff.sendEvent(this._createPromise, "three-d-secure.teardown-completed"),
      this._teardownV1Elements(),
      f_.resolve()
    );
  });
var fL = fw,
  fS = fL,
  fR = nB;
function fk(e) {
  fS.call(this, e);
}
(fk.prototype = Object.create(fS.prototype, { constructor: fk })),
  (fk.prototype.setUpEventListeners = function () {}),
  (fk.prototype.transformV1CustomerBillingAddress = function (e) {
    return (
      (e.billingAddress.line1 = e.billingAddress.streetAddress),
      (e.billingAddress.line2 = e.billingAddress.extendedAddress),
      (e.billingAddress.city = e.billingAddress.locality),
      (e.billingAddress.state = e.billingAddress.region),
      (e.billingAddress.countryCode = e.billingAddress.countryCodeAlpha2),
      delete e.billingAddress.streetAddress,
      delete e.billingAddress.extendedAddress,
      delete e.billingAddress.locality,
      delete e.billingAddress.region,
      delete e.billingAddress.countryCodeAlpha2,
      e
    );
  }),
  (fk.prototype._createIframe = function (e) {
    var t = this;
    return (
      this._setupV1Elements({
        nonce: e.nonce,
        lookupResponse: e.lookupResponse,
        showLoader: e.showLoader,
        handleAuthResponse: function (n) {
          t._handleAuthResponse(n, e);
        },
      }),
      this._v1Iframe
    );
  }),
  (fk.prototype._handleAuthResponse = function (e, t) {
    this._v1Bus.teardown(),
      t.removeFrame(),
      fR(
        function () {
          this._handleV1AuthResponse(e);
        }.bind(this)
      )();
  }),
  (fk.prototype._checkForFrameworkSpecificVerifyCardErrors = function (e) {
    var t;
    return (
      "function" != typeof e.addFrame
        ? (t = "an addFrame function")
        : "function" != typeof e.removeFrame && (t = "a removeFrame function"),
      t
    );
  }),
  (fk.prototype._formatVerifyCardOptions = function (e) {
    var t = fS.prototype._formatVerifyCardOptions.call(this, e);
    return (
      (t.addFrame = fR(e.addFrame)),
      (t.removeFrame = fR(e.removeFrame)),
      (t.showLoader = !1 !== e.showLoader),
      t
    );
  }),
  (fk.prototype._formatLookupData = function (e) {
    var t = this;
    return fS.prototype._formatLookupData.call(this, e).then(function (n) {
      return (
        e.customer &&
          e.customer.billingAddress &&
          (n.customer = t.transformV1CustomerBillingAddress(e.customer)),
        n
      );
    });
  }),
  (fk.prototype._presentChallenge = function (e, t) {
    t.addFrame(
      null,
      this._createIframe({
        showLoader: t.showLoader,
        lookupResponse: e.lookup,
        nonce: e.paymentMethod.nonce,
        removeFrame: t.removeFrame,
      })
    );
  });
var fV = fk,
  fz = fL,
  fU = ey.assign,
  fH = nB,
  fB = D,
  fj = tw,
  fW = nG,
  fK = rt,
  fY = fp,
  fG = T,
  fq = fu,
  fQ = t0,
  fZ = tJ,
  fJ = nd.INTEGRATION_TIMEOUT_MS,
  fX = nd.PLATFORM,
  f$ = "3.91.0",
  f1 = "01",
  f0 = [
    "ui.close",
    "ui.render",
    "ui.renderHidden",
    "ui.loading.close",
    "ui.loading.render",
  ],
  f2 = ["low_value", "transaction_risk_analysis"];
function f3(e) {
  fz.call(this, e),
    (this._useV1Fallback = !1),
    (this._clientMetadata = {
      requestedThreeDSecureVersion: "2",
      sdkVersion: fX + "/" + f$,
    }),
    (this._getDfReferenceIdPromisePlus = new fZ()),
    this.setupSongbird(e),
    (this._cardinalEvents = []);
}
function f4(e, t, n) {
  (t[n + "Line1"] = e.streetAddress),
    (t[n + "Line2"] = e.extendedAddress),
    (t[n + "Line3"] = e.line3),
    (t[n + "City"] = e.locality),
    (t[n + "State"] = e.region),
    (t[n + "PostalCode"] = e.postalCode),
    (t[n + "CountryCode"] = e.countryCodeAlpha2);
}
(f3.prototype = Object.create(fz.prototype, { constructor: f3 })),
  (f3.events = fG(
    [
      "LOOKUP_COMPLETE",
      "CUSTOMER_CANCELED",
      "UI.CLOSE",
      "UI.RENDER",
      "UI.RENDERHIDDEN",
      "UI.LOADING.CLOSE",
      "UI.LOADING.RENDER",
    ],
    "songbird-framework:"
  )),
  (f3.prototype.setUpEventListeners = function (e) {
    this.on(f3.events.LOOKUP_COMPLETE, function (t, n) {
      e("lookup-complete", t, n);
    }),
      this.on(f3.events.CUSTOMER_CANCELED, function () {
        e("customer-canceled");
      }),
      this.on(f3.events["UI.CLOSE"], function () {
        e("authentication-modal-close");
      }),
      this.on(f3.events["UI.RENDER"], function () {
        e("authentication-modal-render");
      }),
      this.on(f3.events["UI.RENDERHIDDEN"], function () {
        e("authentication-modal-render-hidden");
      }),
      this.on(f3.events["UI.LOADING.CLOSE"], function () {
        e("authentication-modal-loader-close");
      }),
      this.on(f3.events["UI.LOADING.RENDER"], function () {
        e("authentication-modal-loader-render");
      });
  }),
  (f3.prototype.prepareLookup = function (e) {
    var t = fU({}, e),
      n = this;
    return this.getDfReferenceId()
      .then(function (e) {
        t.dfReferenceId = e;
      })
      .then(function () {
        return n._triggerCardinalBinProcess(e.bin);
      })
      .catch(function () {})
      .then(function () {
        return n._waitForClient();
      })
      .then(function () {
        return (
          (t.clientMetadata = n._clientMetadata),
          (t.authorizationFingerprint =
            n._client.getConfiguration().authorizationFingerprint),
          (t.braintreeLibraryVersion = "braintree/web/" + f$),
          t
        );
      });
  }),
  (f3.prototype.initializeChallengeWithLookupResponse = function (e, t) {
    return this.setupSongbird().then(
      function () {
        return fz.prototype.initializeChallengeWithLookupResponse.call(
          this,
          e,
          t
        );
      }.bind(this)
    );
  }),
  (f3.prototype.initiateV1Fallback = function (e) {
    (this._useV1Fallback = !0),
      this._removeSongbirdListeners(),
      fW.sendEvent(this._createPromise, "three-d-secure.v1-fallback." + e),
      this._songbirdPromise && this._songbirdPromise.resolve();
  }),
  (f3.prototype._triggerCardinalBinProcess = function (e) {
    var t = this,
      n = Date.now();
    return window.Cardinal.trigger("bin.process", e).then(function (e) {
      (t._clientMetadata.issuerDeviceDataCollectionTimeElapsed =
        Date.now() - n),
        (t._clientMetadata.issuerDeviceDataCollectionResult = e && e.Status);
    });
  }),
  (f3.prototype.transformBillingAddress = function (e, t) {
    return (
      t &&
        (f4(t, e, "billing"),
        (e.billingPhoneNumber = t.phoneNumber),
        (e.billingGivenName = t.givenName),
        (e.billingSurname = t.surname)),
      e
    );
  }),
  (f3.prototype.transformShippingAddress = function (e) {
    var t = e.shippingAddress;
    return t && (f4(t, e, "shipping"), delete e.shippingAddress), e;
  }),
  (f3.prototype._createV1IframeModalElement = function (e) {
    var t = document.createElement("div");
    return (
      (t.innerHTML =
        '<div data-braintree-v1-fallback-iframe-container="true" style="height: 400px;"></div>'),
      t
        .querySelector('[data-braintree-v1-fallback-iframe-container="true"]')
        .appendChild(e),
      t
    );
  }),
  (f3.prototype._createV1IframeModal = function (e) {
    var t = this._createV1IframeModalElement(e),
      n = t.querySelector("[data-braintree-v1-fallback-close-button]"),
      r = t.querySelector("[data-braintree-v1-fallback-backdrop]"),
      i = this;
    function a() {
      t.parentNode.removeChild(t),
        i.cancelVerifyCard(fY.THREEDS_CARDINAL_SDK_CANCELED),
        document.removeEventListener("keyup", i._onV1Keyup),
        (i._onV1Keyup = null);
    }
    return (
      (this._onV1Keyup = function (e) {
        "Escape" === e.key && t.parentNode && a();
      }),
      n && n.addEventListener("click", a),
      r && r.addEventListener("click", a),
      document.addEventListener("keyup", this._onV1Keyup),
      t
    );
  }),
  (f3.prototype._addV1IframeToPage = function () {
    document.body.appendChild(this._v1Modal);
  }),
  (f3.prototype._handleAuthResponseFromV1Fallback = function (e) {
    this._teardownV1Elements(),
      this._v1Modal.parentNode.removeChild(this._v1Modal),
      this._handleV1AuthResponse(e);
  }),
  (f3.prototype._presentChallengeWithV1Fallback = function (e) {
    var t = this;
    this._setupV1Elements({
      lookupResponse: e,
      showLoader: !0,
      handleAuthResponse: function (e) {
        t._handleAuthResponseFromV1Fallback(e);
      },
    }),
      (this._v1Modal = this._createV1IframeModal(this._v1Iframe)),
      this._addV1IframeToPage();
  }),
  (f3.prototype.setupSongbird = function (e) {
    var t = this,
      n = Date.now();
    return (
      this._songbirdPromise ||
        ((e = e || {}),
        (this._songbirdPromise = new fZ()),
        (this._v2SetupFailureReason = "reason-unknown"),
        t
          ._loadCardinalScript(e)
          .then(function () {
            return window.Cardinal
              ? t._configureCardinalSdk({ setupOptions: e, setupStartTime: n })
              : ((t._v2SetupFailureReason = "cardinal-global-unavailable"),
                fQ.reject(new fB(fY.THREEDS_CARDINAL_SDK_SETUP_FAILED)));
          })
          .catch(function (e) {
            var n = fj(e, {
              type: fY.THREEDS_CARDINAL_SDK_SETUP_FAILED.type,
              code: fY.THREEDS_CARDINAL_SDK_SETUP_FAILED.code,
              message: fY.THREEDS_CARDINAL_SDK_SETUP_FAILED.message,
            });
            t._getDfReferenceIdPromisePlus.reject(n),
              window.clearTimeout(t._songbirdSetupTimeoutReference),
              fW.sendEvent(
                t._client,
                "three-d-secure.cardinal-sdk.init.setup-failed"
              ),
              t.initiateV1Fallback(
                "cardinal-sdk-setup-failed." + t._v2SetupFailureReason
              );
          })),
      this._songbirdPromise
    );
  }),
  (f3.prototype._configureCardinalSdk = function (e) {
    var t = this;
    return this._waitForClient()
      .then(function () {
        return t._client.getConfiguration().gatewayConfiguration.threeDSecure;
      })
      .then(function (n) {
        var r = n.cardinalAuthenticationJWT,
          i = e.setupOptions,
          a = e.setupStartTime,
          o = t._createCardinalConfigurationOptions(i);
        f0.forEach(function (e) {
          t.setCardinalListener(e, function () {
            t._emit(f3.events[e.toUpperCase()]);
          });
        }),
          t.setCardinalListener(
            "payments.setupComplete",
            t._createPaymentsSetupCompleteCallback()
          ),
          t._setupFrameworkSpecificListeners(),
          window.Cardinal.configure(o),
          window.Cardinal.setup("init", { jwt: r }),
          (t._clientMetadata.cardinalDeviceDataCollectionTimeElapsed =
            Date.now() - a),
          t.setCardinalListener(
            "payments.validated",
            t._createPaymentsValidatedCallback()
          );
      })
      .catch(function (e) {
        return (
          (t._v2SetupFailureReason = "cardinal-configuration-threw-error"),
          fQ.reject(e)
        );
      });
  }),
  (f3.prototype.setCardinalListener = function (e, t) {
    this._cardinalEvents.push(e), window.Cardinal.on(e, t);
  }),
  (f3.prototype._setupFrameworkSpecificListeners = function () {}),
  (f3.prototype._createCardinalConfigurationOptions = function (e) {
    var t = e.cardinalSDKConfig || {},
      n = t.payment || {};
    return (
      !t.logging && e.loggingEnabled && (t.logging = { level: "verbose" }),
      (t.payment = {}),
      n.hasOwnProperty("displayLoading") &&
        (t.payment.displayLoading = n.displayLoading),
      n.hasOwnProperty("displayExitButton") &&
        (t.payment.displayExitButton = n.displayExitButton),
      t
    );
  }),
  (f3.prototype._loadCardinalScript = function (e) {
    var t = this,
      n = fq.CARDINAL_SCRIPT_SOURCE.sandbox;
    return this._waitForClient()
      .then(function () {
        var r =
          "production" ===
          t._client.getConfiguration().gatewayConfiguration.environment;
        return (
          (t._songbirdSetupTimeoutReference = window.setTimeout(function () {
            fW.sendEvent(
              t._client,
              "three-d-secure.cardinal-sdk.init.setup-timeout"
            ),
              t.initiateV1Fallback("cardinal-sdk-setup-timeout");
          }, e.timeout || fJ)),
          r && (n = fq.CARDINAL_SCRIPT_SOURCE.production),
          fK.loadScript({ src: n })
        );
      })
      .catch(function (e) {
        return (
          (t._v2SetupFailureReason = "songbird-js-failed-to-load"),
          fQ.reject(fj(e, fY.THREEDS_CARDINAL_SDK_SCRIPT_LOAD_FAILED))
        );
      });
  }),
  (f3.prototype._createPaymentsSetupCompleteCallback = function () {
    var e = this;
    return function (t) {
      e._getDfReferenceIdPromisePlus.resolve(t.sessionId),
        window.clearTimeout(e._songbirdSetupTimeoutReference),
        fW.sendEvent(
          e._createPromise,
          "three-d-secure.cardinal-sdk.init.setup-completed"
        ),
        e._songbirdPromise.resolve();
    };
  }),
  (f3.prototype.getDfReferenceId = function () {
    return this._getDfReferenceIdPromisePlus;
  }),
  (f3.prototype._performJWTValidation = function (e, t) {
    var n = this,
      r = this._lookupPaymentMethod.nonce,
      i = "payment_methods/" + r + "/three_d_secure/authenticate_from_jwt",
      a =
        e &&
        e.Payment &&
        e.Payment.ExtendedData &&
        e.Payment.ExtendedData.ChallengeCancel;
    return (
      a &&
        (fW.sendEvent(
          this._createPromise,
          "three-d-secure.verification-flow.cardinal-sdk.cancel-code." + a
        ),
        a === f1 && this._emit(f3.events.CUSTOMER_CANCELED)),
      fW.sendEvent(
        this._createPromise,
        "three-d-secure.verification-flow.upgrade-payment-method.started"
      ),
      this._waitForClient()
        .then(function () {
          return n._client.request({
            method: "post",
            endpoint: i,
            data: { jwt: t, paymentMethodNonce: r },
          });
        })
        .then(function (t) {
          var r = t.paymentMethod || n._lookupPaymentMethod,
            i = n._formatAuthResponse(r, t.threeDSecureInfo);
          return (
            (i.rawCardinalSDKVerificationData = e),
            fW.sendEvent(
              n._client,
              "three-d-secure.verification-flow.upgrade-payment-method.succeeded"
            ),
            fQ.resolve(i)
          );
        })
        .catch(function (e) {
          var t = new fB({
            type: fY.THREEDS_JWT_AUTHENTICATION_FAILED.type,
            code: fY.THREEDS_JWT_AUTHENTICATION_FAILED.code,
            message: fY.THREEDS_JWT_AUTHENTICATION_FAILED.message,
            details: { originalError: e },
          });
          return (
            fW.sendEvent(
              n._client,
              "three-d-secure.verification-flow.upgrade-payment-method.errored"
            ),
            fQ.reject(t)
          );
        })
    );
  }),
  (f3.prototype._createPaymentsValidatedCallback = function () {
    var e = this;
    return function (t, n) {
      var r;
      if (e._useV1Fallback) {
        fW.sendEvent(
          e._createPromise,
          "three-d-secure.verification-flow.cardinal-sdk.payments-validated-callback-called-in-v1-fallback-flow"
        );
        return;
      }
      if (
        (fW.sendEvent(
          e._createPromise,
          "three-d-secure.verification-flow.cardinal-sdk.action-code." +
            t.ActionCode.toLowerCase()
        ),
        !e._verifyCardPromisePlus)
      ) {
        e.initiateV1Fallback(
          "cardinal-sdk-setup-error.number-" + t.ErrorNumber
        );
        return;
      }
      switch (t.ActionCode) {
        case "SUCCESS":
        case "NOACTION":
        case "FAILURE":
          e._performJWTValidation(t, n)
            .then(function (t) {
              e._verifyCardPromisePlus.resolve(t);
            })
            .catch(function (t) {
              e._verifyCardPromisePlus.reject(t);
            });
          break;
        case "ERROR":
          switch (
            (fW.sendEvent(
              e._createPromise,
              "three-d-secure.verification-flow.cardinal-sdk-error." +
                t.ErrorNumber
            ),
            t.ErrorNumber)
          ) {
            case 10001:
            case 10002:
              r = new fB(fY.THREEDS_CARDINAL_SDK_SETUP_TIMEDOUT);
              break;
            case 10003:
            case 10007:
            case 10009:
              r = new fB(fY.THREEDS_CARDINAL_SDK_RESPONSE_TIMEDOUT);
              break;
            case 10005:
            case 10006:
              r = new fB(fY.THREEDS_CARDINAL_SDK_BAD_CONFIG);
              break;
            case 10008:
            case 10010:
              r = new fB(fY.THREEDS_CARDINAL_SDK_BAD_JWT);
              break;
            case 10011:
              fW.sendEvent(
                e._createPromise,
                "three-d-secure.verification-flow.canceled"
              ),
                (r = new fB(fY.THREEDS_CARDINAL_SDK_CANCELED));
              break;
            default:
              r = new fB(fY.THREEDS_CARDINAL_SDK_ERROR);
          }
          (r.details = {
            originalError: {
              code: t.ErrorNumber,
              description: t.ErrorDescription,
            },
          }),
            e._verifyCardPromisePlus.reject(r);
      }
    };
  }),
  (f3.prototype._checkForVerifyCardError = function (e, t) {
    return e.bin
      ? fz.prototype._checkForVerifyCardError.call(this, e, t)
      : new fB({
          type: fY.THREEDS_MISSING_VERIFY_CARD_OPTION.type,
          code: fY.THREEDS_MISSING_VERIFY_CARD_OPTION.code,
          message: "verifyCard options must include a BIN.",
        });
  }),
  (f3.prototype._checkForFrameworkSpecificVerifyCardErrors = function (e, t) {
    var n;
    return (
      "function" == typeof e.onLookupComplete ||
        t.ignoreOnLookupCompleteRequirement ||
        (n = "an onLookupComplete function"),
      n
    );
  }),
  (f3.prototype._formatVerifyCardOptions = function (e) {
    var t = fz.prototype._formatVerifyCardOptions.call(this, e),
      n = t.additionalInformation || {};
    return (
      (n = this.transformBillingAddress(n, e.billingAddress)),
      (n = this.transformShippingAddress(n)),
      e.onLookupComplete && (t.onLookupComplete = fH(e.onLookupComplete)),
      e.email && (n.email = e.email),
      e.mobilePhoneNumber && (n.mobilePhoneNumber = e.mobilePhoneNumber),
      (t.additionalInformation = n),
      t
    );
  }),
  (f3.prototype._onLookupComplete = function (e, t) {
    var n = this;
    return fz.prototype._onLookupComplete.call(this, e).then(function (e) {
      return new fQ(function (r, i) {
        function a() {
          r(e);
        }
        (e.requiresUserAuthentication = Boolean(e.lookup && e.lookup.acsUrl)),
          n._verifyCardPromisePlus.catch(i),
          t.onLookupComplete
            ? t.onLookupComplete(e, a)
            : n._emit(f3.events.LOOKUP_COMPLETE, e, a);
      });
    });
  }),
  (f3.prototype._presentChallenge = function (e) {
    if (this._useV1Fallback || !e.lookup.transactionId) {
      this._presentChallengeWithV1Fallback(e.lookup);
      return;
    }
    window.Cardinal.continue(
      "cca",
      { AcsUrl: e.lookup.acsUrl, Payload: e.lookup.pareq },
      { OrderDetails: { TransactionId: e.lookup.transactionId } }
    );
  }),
  (f3.prototype._formatLookupData = function (e) {
    var t = this;
    return fz.prototype._formatLookupData.call(this, e).then(function (n) {
      if (
        ((n.additionalInfo = e.additionalInformation),
        e.accountType && (n.accountType = e.accountType),
        e.challengeRequested && (n.challengeRequested = e.challengeRequested),
        e.requestedExemptionType)
      ) {
        if (!f2.includes(e.requestedExemptionType))
          throw new fB({
            code: fY.THREEDS_REQUESTED_EXEMPTION_TYPE_INVALID.code,
            type: fY.THREEDS_REQUESTED_EXEMPTION_TYPE_INVALID.type,
            message:
              "requestedExemptionType `" +
              e.requestedExemptionType +
              "` is not a valid exemption. The accepted values are: `" +
              f2.join("`, `") +
              "`",
          });
        n.requestedExemptionType = e.requestedExemptionType;
      }
      return (
        e.dataOnlyRequested && (n.dataOnlyRequested = e.dataOnlyRequested),
        e.exemptionRequested && (n.exemptionRequested = e.exemptionRequested),
        e.bin && (n.bin = e.bin),
        null != e.cardAdd && (n.cardAdd = e.cardAdd),
        null != e.cardAddChallengeRequested &&
          (n.cardAdd = e.cardAddChallengeRequested),
        t.prepareLookup(n)
      );
    });
  }),
  (f3.prototype.cancelVerifyCard = function (e) {
    var t = this;
    return fz.prototype.cancelVerifyCard.call(this).then(function (n) {
      return (
        t._verifyCardPromisePlus &&
          ((e = e || new fB(fY.THREEDS_VERIFY_CARD_CANCELED_BY_MERCHANT)),
          t._verifyCardPromisePlus.reject(e)),
        n
      );
    });
  }),
  (f3.prototype._removeSongbirdListeners = function () {
    this._cardinalEvents.forEach(function (e) {
      window.Cardinal.off(e);
    }),
      (this._cardinalEvents = []);
  }),
  (f3.prototype.teardown = function () {
    return (
      window.Cardinal && this._removeSongbirdListeners(),
      fz.prototype.teardown.call(this)
    );
  });
var f5 = f3,
  f6 = f5;
function f7(e) {
  f6.call(this, e);
}
(f7.prototype = Object.create(f6.prototype, { constructor: f6 })),
  (f7.prototype._createV1IframeModalElement = function (e) {
    var t = document.createElement("div"),
      n = Boolean(
        this._createOptions &&
          this._createOptions.cardinalSDKConfig &&
          this._createOptions.cardinalSDKConfig.payment &&
          this._createOptions.cardinalSDKConfig.payment.displayExitButton
      );
    return (
      (t.innerHTML =
        '<div style="position: fixed;z-index: 999999;top: 50%;left: 50%;padding: 24px 20px;transform: translate(-50%,-50%);border-radius: 2px;background: #fff;max-width: 100%;overflow: auto;"><div><button data-braintree-v1-fallback-close-button style="font-family: Helvetica,Arial,sans-serif;font-size: 25px;line-height: 12px;position: absolute;top: 2px;right: 0px;cursor: pointer;color: #999;border: 0;outline: none;background: none;" onMouseOver="this.style.color=\'#000\'" onMouseOut="this.style.color=\'#999\'">\xd7</button></div><div data-braintree-v1-fallback-iframe-container style="height: 400px;"></div></div><div data-braintree-v1-fallback-backdrop style="position: fixed;z-index: 999998;cursor: pointer;top: 0;left: 0;width: 100%;height: 100%;transition: opacity 1ms ease;background: rgba(0,0,0,.6);"></div>'),
      n ||
        (t.querySelector(
          "[data-braintree-v1-fallback-close-button]"
        ).style.display = "none"),
      t
        .querySelector("[data-braintree-v1-fallback-iframe-container]")
        .appendChild(e),
      t
    );
  });
var f8 = f7,
  f9 = f5;
function Ee(e) {
  f9.call(this, e);
}
(Ee.prototype = Object.create(f9.prototype, { constructor: f9 })),
  (Ee.prototype._createV1IframeModalElement = function (e) {
    var t = document.createElement("div");
    return (
      (t.innerHTML =
        '<div class="modal fade in" tabindex="-1" role="dialog" aria-labelledby="CCAFrameModal-label" aria-hidden="true" style="display: block;"><div class="modal-dialog" style="width:440px;z-index:999999;"><div class="modal-content"><div class="modal-body" data-braintree-v1-fallback-iframe-container><button type="button" data-braintree-v1-fallback-close-button class="close" data-dismiss="modal" aria-hidden="true">\xd7</button></div></div></div><div data-braintree-v1-fallback-backdrop style="position: fixed;cursor: pointer;z-index: 999998;top: 0;left: 0;width: 100%;height: 100%;"></div></div>'),
      t
        .querySelector("[data-braintree-v1-fallback-iframe-container]")
        .appendChild(e),
      t
    );
  }),
  (Ee.prototype._createCardinalConfigurationOptions = function (e) {
    var t = f9.prototype._createCardinalConfigurationOptions.call(this, e);
    return (t.payment.framework = "bootstrap3"), t;
  });
var Et = Ee,
  En = f5,
  Er = D,
  Ei = fp,
  Ea = T;
function Eo(e) {
  En.call(this, e);
}
(Eo.prototype = Object.create(En.prototype, { constructor: En })),
  (Eo.events = Ea(
    ["AUTHENTICATION_IFRAME_AVAILABLE"],
    "inline-iframe-framework:"
  )),
  (Eo.prototype.setUpEventListeners = function (e) {
    En.prototype.setUpEventListeners.call(this, e),
      this.on(Eo.events.AUTHENTICATION_IFRAME_AVAILABLE, function (t, n) {
        e("authentication-iframe-available", t, n);
      });
  }),
  (Eo.prototype._createCardinalConfigurationOptions = function (e) {
    var t = En.prototype._createCardinalConfigurationOptions.call(this, e);
    return (t.payment.framework = "inline"), t;
  }),
  (Eo.prototype._addV1IframeToPage = function () {
    this._emit(
      Eo.events.AUTHENTICATION_IFRAME_AVAILABLE,
      { element: this._v1Modal },
      function () {}
    );
  }),
  (Eo.prototype._setupFrameworkSpecificListeners = function () {
    this.setCardinalListener("ui.inline.setup", this._onInlineSetup.bind(this));
  }),
  (Eo.prototype._onInlineSetup = function (e, t, n, r) {
    var i, a;
    if (
      (e && t
        ? "CCA" !== t.paymentType
          ? (a = !0)
          : "suppress" === t.data.mode || "static" === t.data.mode || (a = !0)
        : (a = !0),
      a)
    ) {
      r(new Er(Ei.THREEDS_INLINE_IFRAME_DETAILS_INCORRECT));
      return;
    }
    ((i = document.createElement("div")).innerHTML = e),
      "suppress" === t.data.mode
        ? ((i.style.display = "none"), document.body.appendChild(i), n())
        : "static" === t.data.mode &&
          this._emit(
            Eo.events.AUTHENTICATION_IFRAME_AVAILABLE,
            { element: i },
            function () {
              n();
            }
          );
  });
var Es = Eo,
  Ed = fV,
  El = f8,
  Ec = Et,
  Ep = Es,
  Eu = {
    legacy: Ed,
    "cardinal-modal": El,
    "bootstrap3-modal": Ec,
    "inline-iframe": Ep,
  },
  Eh = nn,
  Em = nq,
  Ey = n$,
  Ef = r1,
  EE = Eu;
function E_(e) {
  var t = this,
    n = EE[e.framework];
  Ef.call(this),
    (this._framework = new n(e)),
    this._framework.setUpEventListeners(function () {
      t._emit.apply(t, arguments);
    });
}
Ef.createChild(E_),
  (E_.prototype.verifyCard = function (e) {
    var t;
    return (
      this.hasListener("lookup-complete") &&
        (t = { ignoreOnLookupCompleteRequirement: !0 }),
      this._framework.verifyCard(e, t)
    );
  }),
  (E_.prototype.initializeChallengeWithLookupResponse = function (e) {
    return (
      "string" == typeof e && (e = JSON.parse(e)),
      this._framework.initializeChallengeWithLookupResponse(e)
    );
  }),
  (E_.prototype.prepareLookup = function (e) {
    return this._framework.prepareLookup(e).then(function (e) {
      return JSON.stringify(e);
    });
  }),
  (E_.prototype.cancelVerifyCard = function () {
    return this._framework.cancelVerifyCard();
  }),
  (E_.prototype.teardown = function () {
    return (
      Ey(this, Em(E_.prototype).concat(Em(Ef.prototype))),
      this._framework.teardown()
    );
  });
var Ev = Eh.wrapPrototype(E_),
  Eg = Ev,
  EP = c1.isHTTPS,
  EC = ig,
  Eb = ix,
  ET = ib,
  EA = D,
  EI = nG,
  ED = fp,
  EN = "3.91.0",
  EO = t0,
  Ex = nn;
function EF(e) {
  var t = "3D Secure",
    n = EM(e);
  return EC.verify({
    name: t,
    client: e.client,
    authorization: e.authorization,
  }).then(function () {
    var r = ET.create(e.authorization),
      i = Eb.create({
        authorization: e.authorization,
        client: e.client,
        debug: e.debug,
        assetsUrl: r,
        name: t,
      }).then(function (t) {
        var r,
          i = t.getConfiguration(),
          a = i.gatewayConfiguration;
        return ((e.client = t),
        a.threeDSecureEnabled || (r = ED.THREEDS_NOT_ENABLED),
        "TOKENIZATION_KEY" === i.authorizationType &&
          (r = ED.THREEDS_CAN_NOT_USE_TOKENIZATION_KEY),
        "production" !== a.environment ||
          EP() ||
          (r = ED.THREEDS_HTTPS_REQUIRED),
        "legacy" === n ||
          (a.threeDSecure && a.threeDSecure.cardinalAuthenticationJWT) ||
          (EI.sendEvent(
            e.client,
            "three-d-secure.initialization.failed.missing-cardinalAuthenticationJWT"
          ),
          (r = ED.THREEDS_NOT_ENABLED_FOR_V2)),
        r)
          ? EO.reject(new EA(r))
          : (EI.sendEvent(e.client, "three-d-secure.initialized"), t);
      }),
      a = new Eg({
        client: e.client,
        assetsUrl: r,
        createPromise: i,
        loggingEnabled: e.loggingEnabled,
        cardinalSDKConfig: e.cardinalSDKConfig,
        framework: n,
      });
    return e.client
      ? i.then(function () {
          return a;
        })
      : a;
  });
}
function EM(e) {
  var t = String(e.version || "");
  if (!t || "1" === t)
    throw new EA({
      code: ED.THREEDS_UNSUPPORTED_VERSION.code,
      type: ED.THREEDS_UNSUPPORTED_VERSION.type,
      message: ED.THREEDS_UNSUPPORTED_VERSION.message,
    });
  switch (t) {
    case "2":
    case "2-cardinal-modal":
      return "cardinal-modal";
    case "2-bootstrap3-modal":
      return "bootstrap3-modal";
    case "2-inline-iframe":
      return "inline-iframe";
    default:
      throw new EA({
        code: ED.THREEDS_UNRECOGNIZED_VERSION.code,
        type: ED.THREEDS_UNRECOGNIZED_VERSION.type,
        message:
          "Version `" +
          e.version +
          "` is not a recognized version. You may need to update the version of your Braintree SDK to support this version.",
      });
  }
}
var Ew = { create: Ex(EF), VERSION: EN },
  EL = E.assign,
  ES = Ew,
  ER = "03",
  Ek = [
    "customer-canceled",
    "authentication-modal-render",
    "authentication-modal-close",
  ];
function EV(e, t) {
  (this._client = e),
    (this._model = t),
    (this._config = EL({}, t.merchantConfiguration.threeDSecure));
}
(EV.prototype.initialize = function () {
  var e = this,
    t = { client: this._client, version: 2 };
  return (
    this._config.cardinalSDKConfig &&
      (t.cardinalSDKConfig = this._config.cardinalSDKConfig),
    ES.create(t).then(function (t) {
      (e._instance = t),
        Ek.forEach(function (t) {
          e._instance.on(t, function (n) {
            e._model._emit("3ds:" + t, n);
          });
        });
    })
  );
}),
  (EV.prototype.verify = function (e, t) {
    var n = EL({ amount: this._config.amount }, t, {
      nonce: e.nonce,
      bin: e.details.bin,
      onLookupComplete: function (e, t) {
        t();
      },
    });
    return (
      (n.additionalInformation = n.additionalInformation || {}),
      (n.additionalInformation.acsWindowSize =
        n.additionalInformation.acsWindowSize || ER),
      this._instance.verifyCard(n)
    );
  }),
  (EV.prototype.updateConfiguration = function (e, t) {
    this._config[e] = t;
  }),
  (EV.prototype.teardown = function () {
    return this._instance.teardown();
  });
var Ez = EV,
  EU = E.assign,
  EH = rW,
  EB = rK,
  Ej = C,
  EW = rX,
  EK = yP,
  EY = r1,
  EG = lQ,
  Eq = fn,
  EQ = yz.ID,
  EZ = Ej.paymentOptionIDs,
  EJ = uy.translations,
  EX = d1,
  E$ = Q,
  E1 = r4,
  E0 = fr,
  E2 = fl,
  E3 = Ez,
  E4 = nn.wrapPrototype,
  E5 =
    '<div class="braintree-dropin">\n  <div data-braintree-id="methods-label" class="braintree-heading">&nbsp;</div>\n  <div data-braintree-id="methods-edit" class="braintree-hidden braintree-heading" role="button" tabindex="0">{{edit}}</div>\n  <div data-braintree-id="choose-a-way-to-pay" class="braintree-heading">{{chooseAWayToPay}}</div>\n  <div class="braintree-placeholder">&nbsp;</div>\n\n  <div data-braintree-id="upper-container" class="braintree-upper-container">\n    <div data-braintree-id="loading-container" class="braintree-loader__container">\n      <div data-braintree-id="loading-indicator" class="braintree-loader__indicator">\n        <svg width="14" height="16" class="braintree-loader__lock">\n          <use xlink:href="#iconLockLoader"></use>\n        </svg>\n      </div>\n    </div>\n\n    <div data-braintree-id="delete-confirmation" class="braintree-delete-confirmation braintree-sheet">\n      <div data-braintree-id="delete-confirmation__message"></div>\n      <div class="braintree-delete-confirmation__button-container">\n        <div tabindex="0" role="button" data-braintree-id="delete-confirmation__no" class="braintree-delete-confirmation__button">{{deleteCancelButton}}</div>\n        <div tabindex="0" role="button" data-braintree-id="delete-confirmation__yes" class="braintree-delete-confirmation__button">{{deleteConfirmationButton}}</div>\n      </div>\n    </div>\n\n    <div data-braintree-id="methods" class="braintree-methods braintree-methods-initial">\n      <div data-braintree-id="methods-container"></div>\n    </div>\n\n    <div data-braintree-id="options" class="braintree-test-class braintree-options braintree-options-initial">\n      <div data-braintree-id="payment-options-container" class="braintree-options-list"></div>\n    </div>\n\n    <div data-braintree-id="sheet-container" class="braintree-sheet__container">\n      <div data-braintree-id="paypal" class="braintree-paypal braintree-sheet">\n        <div data-braintree-id="paypal-sheet-header" class="braintree-sheet__header">\n          <div class="braintree-sheet__header-label">\n            <div class="braintree-sheet__logo--header">\n              <svg width="40" height="24">\n                <use xlink:href="#logoPayPal"></use>\n              </svg>\n            </div>\n            <div class="braintree-sheet__label">{{PayPal}}</div>\n          </div>\n        </div>\n        <div class="braintree-sheet__content braintree-sheet__content--button">\n          <div data-braintree-id="paypal-button" class="braintree-sheet__button--paypal"></div>\n        </div>\n      </div>\n      <div data-braintree-id="paypalCredit" class="braintree-paypalCredit braintree-sheet">\n        <div data-braintree-id="paypal-credit-sheet-header" class="braintree-sheet__header">\n          <div class="braintree-sheet__header-label">\n            <div class="braintree-sheet__logo--header">\n              <svg width="40" height="24">\n                <use xlink:href="#logoPayPalCredit"></use>\n              </svg>\n            </div>\n            <div class="braintree-sheet__label">{{PayPal Credit}}</div>\n          </div>\n        </div>\n        <div class="braintree-sheet__content braintree-sheet__content--button">\n          <div data-braintree-id="paypal-credit-button" class="braintree-sheet__button--paypal"></div>\n        </div>\n      </div>\n      <div data-braintree-id="applePay" class="braintree-applePay braintree-sheet">\n        <div data-braintree-id="apple-pay-sheet-header" class="braintree-sheet__header">\n          <div class="braintree-sheet__header-label">\n            <div class="braintree-sheet__logo--header">\n              <svg height="24" width="40">\n              <use xlink:href="#logoApplePay"></use>\n              </svg>\n            </div>\n            <div class="braintree-sheet__label">{{Apple Pay}}</div>\n          </div>\n        </div>\n        <div class="braintree-sheet__content braintree-sheet__content--button">\n          <div data-braintree-id="apple-pay-button" class="braintree-sheet__button--apple-pay apple-pay-button"></div>\n        </div>\n      </div>\n      <div data-braintree-id="googlePay" class="braintree-googlePay braintree-sheet">\n        <div data-braintree-id="google-pay-sheet-header" class="braintree-sheet__header">\n          <div class="braintree-sheet__header-label">\n            <div class="braintree-sheet__logo--header">\n              <svg height="24" width="40">\n              <use xlink:href="#logoGooglePay"></use>\n              </svg>\n            </div>\n            <div class="braintree-sheet__label">{{Google Pay}}</div>\n          </div>\n        </div>\n        <div class="braintree-sheet__content braintree-sheet__content--button">\n          <div data-braintree-id="google-pay-button"></div>\n        </div>\n      </div>\n      <div data-braintree-id="venmo" class="braintree-venmo braintree-sheet">\n        <div data-braintree-id="venmo-sheet-header" class="braintree-sheet__header">\n          <div class="braintree-sheet__header-label">\n            <div class="braintree-sheet__logo--header">\n              <svg height="24" width="40">\n              <use xlink:href="#logoVenmo"></use>\n              </svg>\n            </div>\n            <div class="braintree-sheet__label">{{Venmo}}</div>\n          </div>\n        </div>\n        <div class="braintree-sheet__content braintree-sheet__content--button">\n          <svg data-braintree-id="venmo-button" class="braintree-sheet__button--venmo">\n            <use xlink:href="#buttonVenmo"></use>\n          </svg>\n        </div>\n      </div>\n      <div data-braintree-id="card" class="braintree-card braintree-form braintree-sheet">\n        <div data-braintree-id="card-sheet-header" class="braintree-sheet__header">\n          <div class="braintree-sheet__header-label">\n            <div class="braintree-sheet__logo--header">\n              <svg width="40" height="24" class="braintree-icon--bordered">\n                <use xlink:href="#iconCardFront"></use>\n              </svg>\n            </div>\n            <div class="braintree-sheet__text">{{payWithCard}}</div>\n          </div>\n          <div data-braintree-id="card-view-icons" class="braintree-sheet__icons"></div>\n        </div>\n        <div class="braintree-sheet__content braintree-sheet__content--form">\n          <div data-braintree-id="cardholder-name-field-group" class="braintree-form__field-group">\n            <label for="braintree__card-view-input__cardholder-name">\n              <div class="braintree-form__label">{{cardholderNameLabel}}</div>\n              <div class="braintree-form__field">\n                <div class="braintree-form-cardholder-name braintree-form__hosted-field"></div>\n                <div class="braintree-form__icon-container">\n                  <div class="braintree-form__icon braintree-form__field-error-icon">\n                    <svg width="24" height="24">\n                      <use xlink:href="#iconError"></use>\n                    </svg>\n                  </div>\n                </div>\n              </div>\n            </label>\n            <div data-braintree-id="cardholder-name-field-error" class="braintree-form__field-error"></div>\n          </div>\n          <div data-braintree-id="number-field-group" class="braintree-form__field-group">\n            <label>\n              <div class="braintree-form__label">{{cardNumberLabel}}</div>\n              <div class="braintree-form__field">\n                <div class="braintree-form-number braintree-form__hosted-field"></div>\n                <div class="braintree-form__icon-container">\n                  <div data-braintree-id="card-number-icon" class="braintree-form__icon braintree-form__field-secondary-icon">\n                    <svg width="40" height="24" class="braintree-icon--bordered">\n                    <use data-braintree-id="card-number-icon-svg" xlink:href="#iconCardFront"></use>\n                    </svg>\n                  </div>\n                  <div class="braintree-form__icon braintree-form__field-error-icon">\n                    <svg width="24" height="24">\n                      <use xlink:href="#iconError"></use>\n                    </svg>\n                  </div>\n                </div>\n              </div>\n            </label>\n            <div data-braintree-id="number-field-error" class="braintree-form__field-error"></div>\n          </div>\n\n          <div class="braintree-form__flexible-fields">\n            <div data-braintree-id="expiration-date-field-group" class="braintree-form__field-group">\n              <label>\n                <div class="braintree-form__label">{{expirationDateLabel}}\n                  <span class="braintree-form__descriptor">{{expirationDateLabelSubheading}}</span>\n                </div>\n                <div class="braintree-form__field">\n                  <div class="braintree-form__hosted-field braintree-form-expiration"></div>\n                  <div class="braintree-form__icon-container">\n                    <div class="braintree-form__icon braintree-form__field-error-icon">\n                      <svg width="24" height="24">\n                        <use xlink:href="#iconError"></use>\n                      </svg>\n                    </div>\n                  </div>\n                </div>\n              </label>\n              <div data-braintree-id="expiration-date-field-error" class="braintree-form__field-error"></div>\n            </div>\n\n\n            <div data-braintree-id="cvv-field-group" class="braintree-form__field-group">\n              <label>\n                <div class="braintree-form__label">{{cvvLabel}}\n                  <span data-braintree-id="cvv-label-descriptor" class="braintree-form__descriptor">{{cvvThreeDigitLabelSubheading}}</span>\n                </div>\n                <div class="braintree-form__field">\n                  <div class="braintree-form__hosted-field braintree-form-cvv"></div>\n                  <div class="braintree-form__icon-container">\n                    <div data-braintree-id="cvv-icon" class="braintree-form__icon braintree-form__field-secondary-icon">\n                      <svg width="40" height="24" class="braintree-icon--bordered">\n                      <use data-braintree-id="cvv-icon-svg" xlink:href="#iconCVVBack"></use>\n                      </svg>\n                    </div>\n                    <div class="braintree-form__icon braintree-form__field-error-icon">\n                      <svg width="24" height="24">\n                        <use xlink:href="#iconError"></use>\n                      </svg>\n                    </div>\n                  </div>\n                </div>\n              </label>\n              <div data-braintree-id="cvv-field-error" class="braintree-form__field-error"></div>\n            </div>\n\n            <div data-braintree-id="postal-code-field-group" class="braintree-form__field-group">\n              <label>\n                <div class="braintree-form__label">{{postalCodeLabel}}</div>\n                <div class="braintree-form__field">\n                  <div class="braintree-form__hosted-field braintree-form-postal-code"></div>\n                  <div class="braintree-form__icon-container">\n                    <div class="braintree-form__icon braintree-form__field-error-icon">\n                      <svg width="24" height="24">\n                        <use xlink:href="#iconError"></use>\n                      </svg>\n                    </div>\n                  </div>\n                </div>\n              </label>\n              <div data-braintree-id="postal-code-field-error" class="braintree-form__field-error"></div>\n            </div>\n          </div>\n\n          <div data-braintree-id="save-card-field-group" class="braintree-form__field-group braintree-hidden">\n            <label>\n              <div class="braintree-form__field braintree-form__checkbox">\n                <input type="checkbox" data-braintree-id="save-card-input" checked />\n              </div>\n              <div class="braintree-form__label">{{saveCardLabel}}</div>\n            </label>\n          </div>\n        </div>\n      </div>\n\n      <div data-braintree-id="sheet-error" class="braintree-sheet__error">\n        <div class="braintree-form__icon braintree-sheet__error-icon">\n          <svg width="24" height="24">\n            <use xlink:href="#iconError"></use>\n          </svg>\n        </div>\n        <div data-braintree-id="sheet-error-text" class="braintree-sheet__error-text"></div>\n      </div>\n    </div>\n  </div>\n\n  <div data-braintree-id="lower-container" class="braintree-test-class braintree-options braintree-hidden">\n    <div data-braintree-id="other-ways-to-pay" class="braintree-heading">{{otherWaysToPay}}</div>\n  </div>\n\n  <div data-braintree-id="toggle" class="braintree-large-button braintree-toggle braintree-hidden" tabindex="0" role="button">\n    <span>{{chooseAnotherWayToPay}}</span>\n  </div>\n</div>\n<div data-braintree-id="disable-wrapper" class="braintree-dropin__disabled braintree-hidden"></div>\n',
  E6 =
    '<svg data-braintree-id="svgs">\n  <defs>\n    <symbol id="icon-visa" viewBox="0 0 44 14.2">\n      <title>Visa</title>\n      <path fill="#1434CB" d="M16.8,0.2L11,13.9H7.3L4.5,3C4.3,2.3,4.2,2.1,3.6,1.8C2.8,1.3,1.4,0.9,0.1,0.6l0.1-0.4h6   c0.8,0,1.5,0.5,1.6,1.4l1.5,7.9L13,0.2H16.8z M31.4,9.4c0-3.6-5-3.8-5-5.4c0-0.5,0.5-1,1.5-1.1c0.5-0.1,1.9-0.1,3.5,0.6L32,0.6   C31.2,0.3,30.1,0,28.7,0c-3.5,0-6,1.9-6,4.5c0,2,1.8,3.1,3.1,3.7c1.4,0.7,1.8,1.1,1.8,1.7c0,0.9-1.1,1.3-2.1,1.3   c-1.8,0-2.8-0.5-3.6-0.9l-0.6,3c0.8,0.4,2.3,0.7,3.9,0.7C28.9,14.1,31.4,12.3,31.4,9.4 M40.6,13.9h3.3L41,0.2h-3   c-0.7,0-1.3,0.4-1.5,1l-5.3,12.7h3.7l0.7-2h4.5L40.6,13.9z M36.7,9.1l1.9-5.1l1.1,5.1H36.7z M21.8,0.2l-2.9,13.7h-3.5l2.9-13.7   H21.8z"/>\n    </symbol>\n\n    <symbol id="icon-master-card" viewBox="0 0 40 24">\n      <title>MasterCard</title>\n      <path d="M0 1.927C0 .863.892 0 1.992 0h36.016C39.108 0 40 .863 40 1.927v20.146C40 23.137 39.108 24 38.008 24H1.992C.892 24 0 23.137 0 22.073V1.927z" fill="#FFF" />\n      <path d="M11.085 22.2v-1.36c0-.522-.318-.863-.864-.863-.272 0-.568.09-.773.386-.16-.25-.386-.386-.727-.386-.228 0-.455.068-.637.318v-.272h-.478V22.2h.478v-1.202c0-.386.204-.567.523-.567.318 0 .478.205.478.568V22.2h.477v-1.202c0-.386.23-.567.524-.567.32 0 .478.205.478.568V22.2h.523zm7.075-2.177h-.774v-.658h-.478v.658h-.432v.43h.432v.998c0 .5.205.795.75.795.206 0 .433-.068.592-.16l-.136-.407c-.136.09-.296.114-.41.114-.227 0-.318-.137-.318-.363v-.976h.774v-.43zm4.048-.046c-.273 0-.454.136-.568.318v-.272h-.478V22.2h.478v-1.225c0-.363.16-.567.455-.567.09 0 .204.023.295.046l.137-.454c-.09-.023-.228-.023-.32-.023zm-6.118.227c-.228-.16-.546-.227-.888-.227-.546 0-.91.272-.91.703 0 .363.274.567.75.635l.23.023c.25.045.385.113.385.227 0 .16-.182.272-.5.272-.32 0-.57-.113-.728-.227l-.228.363c.25.18.59.272.932.272.637 0 1-.295 1-.703 0-.385-.295-.59-.75-.658l-.227-.022c-.205-.023-.364-.068-.364-.204 0-.16.16-.25.41-.25.272 0 .545.114.682.182l.205-.386zm12.692-.227c-.273 0-.455.136-.568.318v-.272h-.478V22.2h.478v-1.225c0-.363.16-.567.455-.567.09 0 .203.023.294.046L29.1 20c-.09-.023-.227-.023-.318-.023zm-6.096 1.134c0 .66.455 1.135 1.16 1.135.32 0 .546-.068.774-.25l-.228-.385c-.182.136-.364.204-.57.204-.385 0-.658-.272-.658-.703 0-.407.273-.68.66-.702.204 0 .386.068.568.204l.228-.385c-.228-.182-.455-.25-.774-.25-.705 0-1.16.477-1.16 1.134zm4.413 0v-1.087h-.48v.272c-.158-.204-.385-.318-.68-.318-.615 0-1.093.477-1.093 1.134 0 .66.478 1.135 1.092 1.135.317 0 .545-.113.68-.317v.272h.48v-1.09zm-1.753 0c0-.384.25-.702.66-.702.387 0 .66.295.66.703 0 .387-.273.704-.66.704-.41-.022-.66-.317-.66-.703zm-5.71-1.133c-.636 0-1.09.454-1.09 1.134 0 .682.454 1.135 1.114 1.135.32 0 .638-.09.888-.295l-.228-.34c-.18.136-.41.227-.636.227-.296 0-.592-.136-.66-.522h1.615v-.18c.022-.704-.388-1.158-1.002-1.158zm0 .41c.297 0 .502.18.547.52h-1.137c.045-.295.25-.52.59-.52zm11.852.724v-1.95h-.48v1.135c-.158-.204-.385-.318-.68-.318-.615 0-1.093.477-1.093 1.134 0 .66.478 1.135 1.092 1.135.318 0 .545-.113.68-.317v.272h.48v-1.09zm-1.752 0c0-.384.25-.702.66-.702.386 0 .66.295.66.703 0 .387-.274.704-.66.704-.41-.022-.66-.317-.66-.703zm-15.97 0v-1.087h-.476v.272c-.16-.204-.387-.318-.683-.318-.615 0-1.093.477-1.093 1.134 0 .66.478 1.135 1.092 1.135.318 0 .545-.113.682-.317v.272h.477v-1.09zm-1.773 0c0-.384.25-.702.66-.702.386 0 .66.295.66.703 0 .387-.274.704-.66.704-.41-.022-.66-.317-.66-.703z" fill="#000" />\n      <path fill="#FF5F00" d="M23.095 3.49H15.93v12.836h7.165" />\n      <path d="M16.382 9.91c0-2.61 1.23-4.922 3.117-6.42-1.39-1.087-3.14-1.745-5.05-1.745-4.528 0-8.19 3.65-8.19 8.164 0 4.51 3.662 8.162 8.19 8.162 1.91 0 3.66-.657 5.05-1.746-1.89-1.474-3.118-3.81-3.118-6.417z" fill="#EB001B" />\n      <path d="M32.76 9.91c0 4.51-3.664 8.162-8.19 8.162-1.91 0-3.662-.657-5.05-1.746 1.91-1.496 3.116-3.81 3.116-6.417 0-2.61-1.228-4.922-3.116-6.42 1.388-1.087 3.14-1.745 5.05-1.745 4.526 0 8.19 3.674 8.19 8.164z" fill="#F79E1B" />\n    </symbol>\n\n    <symbol id="icon-unionpay" viewBox="0 0 40 24">\n      <title>Union Pay</title>\n      <path d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z" fill="#FFF" />\n      <path d="M9.877 2h8.126c1.135 0 1.84.93 1.575 2.077l-3.783 16.35c-.267 1.142-1.403 2.073-2.538 2.073H5.13c-1.134 0-1.84-.93-1.574-2.073L7.34 4.076C7.607 2.93 8.74 2 9.878 2z" fill="#E21836" />\n      <path d="M17.325 2h9.345c1.134 0 .623.93.356 2.077l-3.783 16.35c-.265 1.142-.182 2.073-1.32 2.073H12.58c-1.137 0-1.84-.93-1.574-2.073l3.783-16.35C15.056 2.93 16.19 2 17.324 2z" fill="#00447B" />\n      <path d="M26.3 2h8.126c1.136 0 1.84.93 1.575 2.077l-3.782 16.35c-.266 1.142-1.402 2.073-2.54 2.073h-8.122c-1.137 0-1.842-.93-1.574-2.073l3.78-16.35C24.03 2.93 25.166 2 26.303 2z" fill="#007B84" />\n      <path d="M27.633 14.072l-.99 3.3h.266l-.208.68h-.266l-.062.212h-.942l.064-.21H23.58l.193-.632h.194l1.005-3.35.2-.676h.962l-.1.34s.255-.184.498-.248c.242-.064 1.636-.088 1.636-.088l-.206.672h-.33zm-1.695 0l-.254.843s.285-.13.44-.172c.16-.04.395-.057.395-.057l.182-.614h-.764zm-.38 1.262l-.263.877s.29-.15.447-.196c.157-.037.396-.066.396-.066l.185-.614h-.766zm-.614 2.046h.767l.222-.74h-.765l-.223.74z" fill="#FEFEFE" />\n      <path d="M28.055 13.4h1.027l.01.385c-.005.065.05.096.17.096h.208l-.19.637h-.555c-.48.035-.662-.172-.65-.406l-.02-.71zM28.193 16.415h-.978l.167-.566H28.5l.16-.517h-1.104l.19-.638h3.072l-.193.638h-1.03l-.16.516h1.032l-.17.565H29.18l-.2.24h.454l.11.712c.013.07.014.116.036.147.023.026.158.038.238.038h.137l-.21.694h-.348c-.054 0-.133-.004-.243-.01-.105-.008-.18-.07-.25-.105-.064-.03-.16-.11-.182-.24l-.11-.712-.507.7c-.162.222-.38.39-.748.39h-.712l.186-.62h.273c.078 0 .15-.03.2-.056.052-.023.098-.05.15-.126l.74-1.05zM17.478 14.867h2.59l-.19.622H18.84l-.16.53h1.06l-.194.64h-1.06l-.256.863c-.03.095.25.108.353.108l.53-.072-.212.71h-1.193c-.096 0-.168-.013-.272-.037-.1-.023-.145-.07-.19-.138-.043-.07-.11-.128-.064-.278l.343-1.143h-.588l.195-.65h.592l.156-.53h-.588l.188-.623zM19.223 13.75h1.063l-.194.65H18.64l-.157.136c-.067.066-.09.038-.18.087-.08.04-.254.123-.477.123h-.466l.19-.625h.14c.118 0 .198-.01.238-.036.046-.03.098-.096.157-.203l.267-.487h1.057l-.187.356zM20.74 13.4h.905l-.132.46s.286-.23.487-.313c.2-.075.65-.143.65-.143l1.464-.007-.498 1.672c-.085.286-.183.472-.244.555-.055.087-.12.16-.248.23-.124.066-.236.104-.34.115-.096.007-.244.01-.45.012h-1.41l-.4 1.324c-.037.13-.055.194-.03.23.02.03.068.066.135.066l.62-.06-.21.726h-.698c-.22 0-.383-.004-.495-.013-.108-.01-.22 0-.295-.058-.065-.058-.164-.133-.162-.21.007-.073.037-.192.082-.356l1.268-4.23zm1.922 1.69h-1.484l-.09.3h1.283c.152-.018.184.004.196-.003l.096-.297zm-1.402-.272s.29-.266.786-.353c.112-.022.82-.015.82-.015l.106-.357h-1.496l-.216.725z" fill="#FEFEFE" />\n      <path d="M23.382 16.1l-.084.402c-.036.125-.067.22-.16.302-.1.084-.216.172-.488.172l-.502.02-.004.455c-.006.13.028.117.048.138.024.022.045.032.067.04l.157-.008.48-.028-.198.663h-.552c-.385 0-.67-.008-.765-.084-.092-.057-.105-.132-.103-.26l.035-1.77h.88l-.013.362h.212c.072 0 .12-.007.15-.026.027-.02.047-.048.06-.093l.087-.282h.692zM10.84 7.222c-.032.143-.596 2.763-.598 2.764-.12.53-.21.91-.508 1.152-.172.14-.37.21-.6.21-.37 0-.587-.185-.624-.537l-.007-.12.113-.712s.593-2.388.7-2.703c.002-.017.005-.026.007-.035-1.152.01-1.357 0-1.37-.018-.007.024-.037.173-.037.173l-.605 2.688-.05.23-.1.746c0 .22.042.4.13.553.275.485 1.06.557 1.504.557.573 0 1.11-.123 1.47-.345.63-.375.797-.962.944-1.48l.067-.267s.61-2.48.716-2.803c.003-.017.006-.026.01-.035-.835.01-1.08 0-1.16-.018zM14.21 12.144c-.407-.006-.55-.006-1.03.018l-.018-.036c.042-.182.087-.363.127-.548l.06-.25c.086-.39.173-.843.184-.98.007-.084.036-.29-.2-.29-.1 0-.203.048-.307.096-.058.207-.174.79-.23 1.055-.118.558-.126.62-.178.897l-.036.037c-.42-.006-.566-.006-1.05.018l-.024-.04c.08-.332.162-.668.24-.998.203-.9.25-1.245.307-1.702l.04-.028c.47-.067.585-.08 1.097-.185l.043.047-.077.287c.086-.052.168-.104.257-.15.242-.12.51-.155.658-.155.223 0 .468.062.57.323.098.232.034.52-.094 1.084l-.066.287c-.13.627-.152.743-.225 1.174l-.05.036zM15.87 12.144c-.245 0-.405-.006-.56 0-.153 0-.303.008-.532.018l-.013-.02-.015-.02c.062-.238.097-.322.128-.406.03-.084.06-.17.115-.41.072-.315.116-.535.147-.728.033-.187.052-.346.075-.53l.02-.014.02-.018c.244-.036.4-.057.56-.082.16-.024.32-.055.574-.103l.008.023.008.022c-.047.195-.094.39-.14.588-.047.197-.094.392-.137.587-.093.414-.13.57-.152.68-.02.105-.026.163-.063.377l-.022.02-.023.017zM19.542 10.728c.143-.633.033-.928-.108-1.11-.213-.273-.59-.36-.978-.36-.235 0-.793.023-1.23.43-.312.29-.458.687-.546 1.066-.088.387-.19 1.086.447 1.344.198.085.48.108.662.108.466 0 .945-.13 1.304-.513.278-.312.405-.775.448-.965zm-1.07-.046c-.02.106-.113.503-.24.673-.086.123-.19.198-.305.198-.033 0-.235 0-.238-.3-.003-.15.027-.304.063-.47.108-.478.236-.88.56-.88.255 0 .27.298.16.78zM29.536 12.187c-.493-.004-.635-.004-1.09.015l-.03-.037c.124-.472.248-.943.358-1.42.142-.62.175-.882.223-1.244l.037-.03c.49-.07.625-.09 1.135-.186l.015.044c-.093.388-.186.777-.275 1.166-.19.816-.258 1.23-.33 1.658l-.044.035z" fill="#FEFEFE" />\n      <path d="M29.77 10.784c.144-.63-.432-.056-.525-.264-.14-.323-.052-.98-.62-1.2-.22-.085-.732.025-1.17.428-.31.29-.458.683-.544 1.062-.088.38-.19 1.078.444 1.328.2.085.384.11.567.103.638-.034 1.124-1.002 1.483-1.386.277-.303.326.115.368-.07zm-.974-.047c-.024.1-.117.503-.244.67-.083.117-.283.192-.397.192-.032 0-.232 0-.24-.3 0-.146.03-.3.067-.467.11-.47.235-.87.56-.87.254 0 .363.293.254.774zM22.332 12.144c-.41-.006-.55-.006-1.03.018l-.018-.036c.04-.182.087-.363.13-.548l.057-.25c.09-.39.176-.843.186-.98.008-.084.036-.29-.198-.29-.1 0-.203.048-.308.096-.057.207-.175.79-.232 1.055-.115.558-.124.62-.176.897l-.035.037c-.42-.006-.566-.006-1.05.018l-.022-.04.238-.998c.203-.9.25-1.245.307-1.702l.038-.028c.472-.067.587-.08 1.098-.185l.04.047-.073.287c.084-.052.17-.104.257-.15.24-.12.51-.155.655-.155.224 0 .47.062.575.323.095.232.03.52-.098 1.084l-.065.287c-.133.627-.154.743-.225 1.174l-.05.036zM26.32 8.756c-.07.326-.282.603-.554.736-.225.114-.498.123-.78.123h-.183l.013-.074.336-1.468.01-.076.007-.058.132.015.71.062c.275.105.388.38.31.74zM25.88 7.22l-.34.003c-.883.01-1.238.006-1.383-.012l-.037.182-.315 1.478-.793 3.288c.77-.01 1.088-.01 1.22.004l.21-1.024s.153-.644.163-.667c0 0 .047-.066.096-.092h.07c.665 0 1.417 0 2.005-.437.4-.298.675-.74.797-1.274.03-.132.054-.29.054-.446 0-.205-.04-.41-.16-.568-.3-.423-.896-.43-1.588-.433zM33.572 9.28l-.04-.043c-.502.1-.594.118-1.058.18l-.034.034-.005.023-.003-.007c-.345.803-.334.63-.615 1.26-.003-.03-.003-.048-.004-.077l-.07-1.37-.044-.043c-.53.1-.542.118-1.03.18l-.04.034-.006.056.003.007c.06.315.047.244.108.738.03.244.065.49.093.73.05.4.077.6.134 1.21-.328.55-.408.757-.722 1.238l.017.044c.478-.018.587-.018.94-.018l.08-.088c.265-.578 2.295-4.085 2.295-4.085zM16.318 9.62c.27-.19.304-.45.076-.586-.23-.137-.634-.094-.906.095-.273.186-.304.45-.075.586.228.134.633.094.905-.096z" fill="#FEFEFE" />\n      <path d="M31.238 13.415l-.397.684c-.124.232-.357.407-.728.41l-.632-.01.184-.618h.124c.064 0 .11-.004.148-.022.03-.01.054-.035.08-.072l.233-.373h.988z" fill="#FEFEFE" />\n    </symbol>\n\n    <symbol id="icon-american-express" viewBox="0 0 40 24">\n      <title>American Express</title>\n      <path d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z" fill="#FFF" />\n      <path fill="#1478BE" d="M6.26 12.32h2.313L7.415 9.66M27.353 9.977h-3.738v1.23h3.666v1.384h-3.675v1.385h3.821v1.005c.623-.77 1.33-1.466 2.025-2.235l.707-.77c-.934-1.004-1.87-2.08-2.804-3.075v1.077z" />\n      <path d="M38.25 7h-5.605l-1.328 1.4L30.072 7H16.984l-1.017 2.416L14.877 7h-9.58L1.25 16.5h4.826l.623-1.556h1.4l.623 1.556H29.99l1.327-1.483 1.328 1.483h5.605l-4.36-4.667L38.25 7zm-17.685 8.1h-1.557V9.883L16.673 15.1h-1.33L13.01 9.883l-.084 5.217H9.73l-.623-1.556h-3.27L5.132 15.1H3.42l2.884-6.772h2.42l2.645 6.233V8.33h2.646l2.107 4.51 1.868-4.51h2.575V15.1zm14.727 0h-2.024l-2.024-2.26-2.023 2.26H22.06V8.328H29.53l1.795 2.177 2.024-2.177h2.025L32.26 11.75l3.032 3.35z" fill="#1478BE" />\n    </symbol>\n\n    <symbol id="icon-jcb" viewBox="0 0 40 24">\n      <title>JCB</title>\n      <path d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z" fill="#FFF" />\n      <path d="M33.273 2.01h.013v17.062c-.004 1.078-.513 2.103-1.372 2.746-.63.47-1.366.67-2.14.67-.437 0-4.833.026-4.855 0-.01-.01 0-.07 0-.082v-6.82c0-.04.004-.064.033-.064h5.253c.867 0 1.344-.257 1.692-.61.44-.448.574-1.162.294-1.732-.24-.488-.736-.78-1.244-.913-.158-.04-.32-.068-.483-.083-.01 0-.064 0-.07-.006-.03-.034.023-.04.038-.046.102-.033.215-.042.32-.073.532-.164.993-.547 1.137-1.105.15-.577-.05-1.194-.524-1.552-.34-.257-.768-.376-1.187-.413-.43-.038-4.774-.022-5.21-.022-.072 0-.05-.02-.05-.09V5.63c0-.31.01-.616.073-.92.126-.592.41-1.144.815-1.59.558-.615 1.337-1.01 2.16-1.093.478-.048 4.89-.017 5.305-.017zm-4.06 8.616c.06.272-.01.567-.204.77-.173.176-.407.25-.648.253-.195.003-1.725 0-1.788 0l.003-1.645c.012-.027.02-.018.06-.018.097 0 1.713-.004 1.823.005.232.02.45.12.598.306.076.096.128.208.155.328zm-2.636 2.038h1.944c.242.002.47.063.652.228.226.204.327.515.283.815-.04.263-.194.5-.422.634-.187.112-.39.125-.6.125h-1.857v-1.8z" fill="#53B230" />\n      <path d="M6.574 13.89c-.06-.03-.06-.018-.07-.06-.006-.026-.005-8.365.003-8.558.04-.95.487-1.857 1.21-2.47.517-.434 1.16-.71 1.83-.778.396-.04.803-.018 1.2-.018.69 0 4.11-.013 4.12 0 .008.008.002 16.758 0 17.074-.003.956-.403 1.878-1.105 2.523-.506.465-1.15.77-1.83.86-.41.056-5.02.032-5.363.032-.066 0-.054.013-.066-.024-.01-.025 0-7 0-7.17.66.178 1.35.28 2.03.348.662.067 1.33.093 1.993.062.93-.044 1.947-.192 2.712-.762.32-.238.574-.553.73-.922.148-.353.2-.736.2-1.117 0-.348.006-3.93-.016-3.942-.023-.014-2.885-.015-2.9.012-.012.022 0 3.87 0 3.95-.003.47-.16.933-.514 1.252-.468.42-1.11.47-1.707.423-.687-.055-1.357-.245-1.993-.508-.157-.065-.312-.135-.466-.208z" fill="#006CB9" />\n      <path d="M15.95 9.835c-.025.02-.05.04-.072.06V6.05c0-.295-.012-.594.01-.888.12-1.593 1.373-2.923 2.944-3.126.382-.05 5.397-.042 5.41-.026.01.01 0 .062 0 .074v16.957c0 1.304-.725 2.52-1.89 3.1-.504.25-1.045.35-1.605.35-.322 0-4.757.015-4.834 0-.05-.01-.023.01-.035-.02-.007-.022 0-6.548 0-7.44v-.422c.554.48 1.256.75 1.96.908.536.12 1.084.176 1.63.196.537.02 1.076.01 1.61-.037.546-.05 1.088-.136 1.625-.244.137-.028.274-.057.41-.09.033-.006.17-.017.187-.044.013-.02 0-.097 0-.12v-1.324c-.582.292-1.19.525-1.83.652-.778.155-1.64.198-2.385-.123-.752-.326-1.2-1.024-1.274-1.837-.076-.837.173-1.716.883-2.212.736-.513 1.7-.517 2.553-.38.634.1 1.245.305 1.825.58.078.037.154.075.23.113V9.322c0-.02.013-.1 0-.118-.02-.028-.152-.038-.188-.046-.066-.016-.133-.03-.2-.045C22.38 9 21.84 8.908 21.3 8.85c-.533-.06-1.068-.077-1.603-.066-.542.01-1.086.054-1.62.154-.662.125-1.32.337-1.883.716-.085.056-.167.117-.245.18z" fill="#E20138" />\n    </symbol>\n\n    <symbol id="icon-discover" viewBox="0 0 40 24">\n      <title>Discover</title>\n      <path d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z" fill="#FFF" />\n      <path d="M38.995 11.75S27.522 20.1 6.5 23.5h31.495c.552 0 1-.448 1-1V11.75z" fill="#F48024" />\n      <path d="M5.332 11.758c-.338.305-.776.438-1.47.438h-.29V8.55h.29c.694 0 1.115.124 1.47.446.37.33.595.844.595 1.372 0 .53-.224 1.06-.595 1.39zM4.077 7.615H2.5v5.515h1.57c.833 0 1.435-.197 1.963-.637.63-.52 1-1.305 1-2.116 0-1.628-1.214-2.762-2.956-2.762zM7.53 13.13h1.074V7.616H7.53M11.227 9.732c-.645-.24-.834-.397-.834-.695 0-.347.338-.61.8-.61.322 0 .587.132.867.446l.562-.737c-.462-.405-1.015-.612-1.618-.612-.975 0-1.718.678-1.718 1.58 0 .76.346 1.15 1.355 1.513.42.148.635.247.743.314.215.14.322.34.322.57 0 .448-.354.78-.834.78-.51 0-.924-.258-1.17-.736l-.695.67c.495.726 1.09 1.05 1.907 1.05 1.116 0 1.9-.745 1.9-1.812 0-.876-.363-1.273-1.585-1.72zM13.15 10.377c0 1.62 1.27 2.877 2.907 2.877.462 0 .858-.09 1.347-.32v-1.267c-.43.43-.81.604-1.297.604-1.082 0-1.85-.785-1.85-1.9 0-1.06.792-1.895 1.8-1.895.512 0 .9.183 1.347.62V7.83c-.472-.24-.86-.34-1.322-.34-1.627 0-2.932 1.283-2.932 2.887zM25.922 11.32l-1.468-3.705H23.28l2.337 5.656h.578l2.38-5.655H27.41M29.06 13.13h3.046v-.934h-1.973v-1.488h1.9v-.934h-1.9V8.55h1.973v-.935H29.06M34.207 10.154h-.314v-1.67h.33c.67 0 1.034.28 1.034.818 0 .554-.364.852-1.05.852zm2.155-.91c0-1.033-.71-1.628-1.95-1.628H32.82v5.514h1.073v-2.215h.14l1.487 2.215h1.32l-1.733-2.323c.81-.165 1.255-.72 1.255-1.563z" fill="#221F20" />\n      <path d="M23.6 10.377c0 1.62-1.31 2.93-2.927 2.93-1.617.002-2.928-1.31-2.928-2.93s1.31-2.932 2.928-2.932c1.618 0 2.928 1.312 2.928 2.932z" fill="#F48024" />\n    </symbol>\n\n    <symbol id="icon-diners-club" viewBox="0 0 40 24">\n      <title>Diners Club</title>\n      <path d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z" fill="#FFF" />\n      <path d="M9.02 11.83c0-5.456 4.54-9.88 10.14-9.88 5.6 0 10.139 4.424 10.139 9.88-.002 5.456-4.54 9.88-10.14 9.88-5.6 0-10.14-4.424-10.14-9.88z" fill="#FEFEFE" />\n      <path fill="#FFF" d="M32.522 22H8.5V1.5h24.022" />\n      <path d="M25.02 11.732c-.003-2.534-1.607-4.695-3.868-5.55v11.102c2.26-.857 3.865-3.017 3.87-5.552zm-8.182 5.55V6.18c-2.26.86-3.86 3.017-3.867 5.55.007 2.533 1.61 4.69 3.868 5.55zm2.158-14.934c-5.25.002-9.503 4.202-9.504 9.384 0 5.182 4.254 9.38 9.504 9.382 5.25 0 9.504-4.2 9.505-9.382 0-5.182-4.254-9.382-9.504-9.384zM18.973 22C13.228 22.027 8.5 17.432 8.5 11.84 8.5 5.726 13.228 1.5 18.973 1.5h2.692c5.677 0 10.857 4.225 10.857 10.34 0 5.59-5.18 10.16-10.857 10.16h-2.692z" fill="#004A97" />\n    </symbol>\n\n    <symbol id="icon-maestro" viewBox="0 0 40 24">\n      <title>Maestro</title>\n      <path d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z" fill="#FFF" />\n      <path d="M14.67 22.39V21c.022-.465-.303-.86-.767-.882h-.116c-.3-.023-.603.14-.788.394-.164-.255-.442-.417-.743-.394-.256-.023-.51.116-.65.324v-.278h-.487v2.203h.487v-1.183c-.046-.278.162-.533.44-.58h.094c.325 0 .488.21.488.58v1.23h.487v-1.23c-.047-.278.162-.556.44-.58h.093c.325 0 .487.21.487.58v1.23l.534-.024zm2.712-1.09v-1.113h-.487v.28c-.162-.21-.417-.326-.695-.326-.65 0-1.16.51-1.16 1.16 0 .65.51 1.16 1.16 1.16.278 0 .533-.117.695-.325v.278h.487V21.3zm-1.786 0c.024-.37.348-.65.72-.626.37.023.65.348.626.72-.023.347-.302.625-.673.625-.372 0-.674-.28-.674-.65-.023-.047-.023-.047 0-.07zm12.085-1.16c.163 0 .325.024.465.094.14.046.278.14.37.255.117.115.186.23.256.37.117.3.117.626 0 .927-.046.14-.138.255-.254.37-.116.117-.232.186-.37.256-.303.116-.65.116-.952 0-.14-.046-.28-.14-.37-.255-.118-.116-.187-.232-.257-.37-.116-.302-.116-.627 0-.928.047-.14.14-.255.256-.37.115-.117.23-.187.37-.256.163-.07.325-.116.488-.093zm0 .465c-.092 0-.185.023-.278.046-.092.024-.162.094-.232.14-.07.07-.116.14-.14.232-.068.185-.068.394 0 .58.024.092.094.162.14.23.07.07.14.117.232.14.186.07.37.07.557 0 .092-.023.16-.092.23-.14.07-.068.117-.138.14-.23.07-.186.07-.395 0-.58-.023-.093-.093-.162-.14-.232-.07-.07-.138-.116-.23-.14-.094-.045-.187-.07-.28-.045zm-7.677.695c0-.695-.44-1.16-1.043-1.16-.65 0-1.16.534-1.137 1.183.023.65.534 1.16 1.183 1.136.325 0 .65-.093.905-.302l-.23-.348c-.187.14-.42.232-.65.232-.326.023-.627-.21-.673-.533h1.646v-.21zm-1.646-.21c.023-.3.278-.532.58-.532.3 0 .556.232.556.533h-1.136zm3.664-.346c-.207-.116-.44-.186-.695-.186-.255 0-.417.093-.417.255 0 .163.162.186.37.21l.233.022c.488.07.766.278.766.672 0 .395-.37.72-1.02.72-.348 0-.673-.094-.95-.28l.23-.37c.21.162.465.232.743.232.324 0 .51-.094.51-.28 0-.115-.117-.185-.395-.23l-.232-.024c-.487-.07-.765-.302-.765-.65 0-.44.37-.718.927-.718.325 0 .627.07.905.232l-.21.394zm2.32-.116h-.788v.997c0 .23.07.37.325.37.14 0 .3-.046.417-.115l.14.417c-.186.116-.395.162-.604.162-.58 0-.765-.302-.765-.812v-1.02h-.44v-.44h.44v-.673h.487v.672h.79v.44zm1.67-.51c.117 0 .233.023.35.07l-.14.463c-.093-.045-.21-.045-.302-.045-.325 0-.464.208-.464.58v1.25h-.487v-2.2h.487v.277c.116-.255.325-.37.557-.394z" fill="#000" />\n      <path fill="#7673C0" d="M23.64 3.287h-7.305V16.41h7.306" />\n      <path d="M16.8 9.848c0-2.55 1.183-4.985 3.2-6.56C16.384.435 11.12 1.06 8.29 4.7 5.435 8.32 6.06 13.58 9.703 16.41c3.038 2.387 7.283 2.387 10.32 0-2.04-1.578-3.223-3.99-3.223-6.562z" fill="#EB001B" />\n      <path d="M33.5 9.848c0 4.613-3.735 8.346-8.35 8.346-1.88 0-3.69-.626-5.15-1.785 3.618-2.83 4.245-8.092 1.415-11.71-.418-.532-.882-.996-1.415-1.413C23.618.437 28.883 1.06 31.736 4.7 32.873 6.163 33.5 7.994 33.5 9.85z" fill="#00A1DF" />\n    </symbol>\n\n    <symbol id="icon-elo" viewBox="0 0 48 29">\n      <title>Elo</title>\n      <path d="M46.177 29H1.823C.9 29 0 28.13 0 27.187V1.813C0 .87.9 0 1.823 0h44.354C47.1 0 48 .87 48 1.813v25.375C48 28.13 47.1 29 46.177 29z" fill="#FFF" />\n      <path d="M4.8 9.14c0-.427.57-.973 1.067-.973h7.466c.496 0 1.067.546 1.067.972v3.888c0 .425-.57.972-1.067.972H5.867c-.496 0-1.067-.547-1.067-.972v-3.89z" fill="#828282" />\n      <rect fill="#828282" x="10.8" y="22.167" width="3.6" height="2.333" rx="1.167" />\n      <rect fill="#828282" x="4.8" y="22.167" width="3.6" height="2.333" rx="1.167" />\n      <path d="M6.55 16.333h34.9c.966 0 1.75.784 1.75 1.75 0 .967-.784 1.75-1.75 1.75H6.55c-.966 0-1.75-.783-1.75-1.75 0-.966.784-1.75 1.75-1.75z" fill="#828282" />\n      <ellipse fill="#828282" cx="40.2" cy="6.417" rx="3" ry="2.917" />\n    </symbol>\n\n    <symbol id="icon-hiper" viewBox="0 0 48 29">\n      <title>Hiper</title>\n      <path d="M46.177 29H1.823C.9 29 0 28.13 0 27.187V1.813C0 .87.9 0 1.823 0h44.354C47.1 0 48 .87 48 1.813v25.375C48 28.13 47.1 29 46.177 29z" fill="#FFF" />\n      <path d="M4.8 9.14c0-.427.57-.973 1.067-.973h7.466c.496 0 1.067.546 1.067.972v3.888c0 .425-.57.972-1.067.972H5.867c-.496 0-1.067-.547-1.067-.972v-3.89z" fill="#828282" />\n      <rect fill="#828282" x="10.8" y="22.167" width="3.6" height="2.333" rx="1.167" />\n      <rect fill="#828282" x="4.8" y="22.167" width="3.6" height="2.333" rx="1.167" />\n      <path d="M6.55 16.333h34.9c.966 0 1.75.784 1.75 1.75 0 .967-.784 1.75-1.75 1.75H6.55c-.966 0-1.75-.783-1.75-1.75 0-.966.784-1.75 1.75-1.75z" fill="#828282" />\n      <ellipse fill="#828282" cx="40.2" cy="6.417" rx="3" ry="2.917" />\n    </symbol>\n\n    <symbol id="icon-hipercard" viewBox="0 0 48 29">\n      <title>Hipercard</title>\n      <path d="M46.177 29H1.823C.9 29 0 28.13 0 27.187V1.813C0 .87.9 0 1.823 0h44.354C47.1 0 48 .87 48 1.813v25.375C48 28.13 47.1 29 46.177 29z" fill="#FFF" />\n      <path d="M4.8 9.14c0-.427.57-.973 1.067-.973h7.466c.496 0 1.067.546 1.067.972v3.888c0 .425-.57.972-1.067.972H5.867c-.496 0-1.067-.547-1.067-.972v-3.89z" fill="#828282" />\n      <rect fill="#828282" x="10.8" y="22.167" width="3.6" height="2.333" rx="1.167" />\n      <rect fill="#828282" x="4.8" y="22.167" width="3.6" height="2.333" rx="1.167" />\n      <path d="M6.55 16.333h34.9c.966 0 1.75.784 1.75 1.75 0 .967-.784 1.75-1.75 1.75H6.55c-.966 0-1.75-.783-1.75-1.75 0-.966.784-1.75 1.75-1.75z" fill="#828282" />\n      <ellipse fill="#828282" cx="40.2" cy="6.417" rx="3" ry="2.917" />\n    </symbol>\n\n    <symbol id="logoPayPal" viewBox="0 0 48 29">\n      <title>PayPal Logo</title>\n      <path d="M46 29H2c-1.1 0-2-.87-2-1.932V1.934C0 .87.9 0 2 0h44c1.1 0 2 .87 2 1.934v25.134C48 28.13 47.1 29 46 29z" fill-opacity="0" fill="#FFF" />\n      <path d="M31.216 16.4c.394-.7.69-1.5.886-2.4.196-.8.196-1.6.1-2.2-.1-.7-.396-1.2-.79-1.7-.195-.3-.59-.5-.885-.7.1-.8.1-1.5 0-2.1-.1-.6-.394-1.1-.886-1.6-.885-1-2.56-1.6-4.922-1.6h-6.4c-.492 0-.787.3-.886.8l-2.658 17.2c0 .2 0 .3.1.4.097.1.294.2.393.2h4.036l-.295 1.8c0 .1 0 .3.1.4.098.1.195.2.393.2h3.35c.393 0 .688-.3.786-.7v-.2l.59-4.1v-.2c.1-.4.395-.7.788-.7h.59c1.675 0 3.152-.4 4.137-1.1.59-.5 1.083-1 1.478-1.7h-.002z" fill="#263B80" />\n      <path d="M21.364 9.4c0-.3.196-.5.492-.6.098-.1.196-.1.394-.1h5.02c.592 0 1.183 0 1.675.1.1 0 .295.1.394.1.098 0 .294.1.393.1.1 0 .1 0 .197.102.295.1.492.2.69.3.295-1.6 0-2.7-.887-3.8-.985-1.1-2.658-1.6-4.923-1.6h-6.4c-.49 0-.885.3-.885.8l-2.758 17.3c-.098.3.197.6.59.6h3.94l.985-6.4 1.083-6.9z" fill="#263B80" />\n      <path d="M30.523 9.4c0 .1 0 .3-.098.4-.887 4.4-3.742 5.9-7.484 5.9h-1.87c-.492 0-.787.3-.886.8l-.985 6.2-.296 1.8c0 .3.196.6.492.6h3.348c.394 0 .69-.3.787-.7v-.2l.592-4.1v-.2c.1-.4.394-.7.787-.7h.69c3.248 0 5.808-1.3 6.497-5.2.296-1.6.197-3-.69-3.9-.196-.3-.49-.5-.885-.7z" fill="#159BD7" />\n      <path d="M29.635 9c-.098 0-.295-.1-.394-.1-.098 0-.294-.1-.393-.1-.492-.102-1.083-.102-1.673-.102h-5.022c-.1 0-.197 0-.394.1-.198.1-.394.3-.492.6l-1.083 6.9v.2c.1-.5.492-.8.886-.8h1.87c3.742 0 6.598-1.5 7.484-5.9 0-.1 0-.3.098-.4-.196-.1-.492-.2-.69-.3 0-.1-.098-.1-.196-.1z" fill="#232C65" />\n    </symbol>\n\n    <symbol id="logoPayPalCredit" viewBox="0 0 48 29">\n      <title>PayPal Credit Logo</title>\n      <path d="M46 29H2c-1.1 0-2-.87-2-1.932V1.934C0 .87.9 0 2 0h44c1.1 0 2 .87 2 1.934v25.134C48 28.13 47.1 29 46 29z" fill-opacity="0" fill="#FFF" fill-rule="nonzero" />\n      <path d="M27.44 21.6h.518c1.377 0 2.67-.754 2.953-2.484.248-1.588-.658-2.482-2.14-2.482h-.38c-.093 0-.172.067-.187.16l-.763 4.805zm-1.254-6.646c.024-.158.16-.273.32-.273h2.993c2.47 0 4.2 1.942 3.81 4.436-.4 2.495-2.752 4.436-5.21 4.436h-3.05c-.116 0-.205-.104-.187-.218l1.323-8.38zM22.308 16.907l-.192 1.21h2.38c.116 0 .204.103.186.217l-.23 1.462c-.023.157-.16.273-.318.273h-2.048c-.16 0-.294.114-.32.27l-.203 1.26h2.52c.117 0 .205.102.187.217l-.228 1.46c-.025.16-.16.275-.32.275h-4.55c-.116 0-.204-.104-.186-.218l1.322-8.38c.025-.158.16-.273.32-.273h4.55c.116 0 .205.104.187.22l-.23 1.46c-.024.158-.16.274-.32.274H22.63c-.16 0-.295.115-.32.273M35.325 23.552h-1.81c-.115 0-.203-.104-.185-.218l1.322-8.38c.025-.158.16-.273.32-.273h1.81c.115 0 .203.104.185.22l-1.322 8.38c-.025.156-.16.272-.32.272M14.397 18.657h.224c.754 0 1.62-.14 1.777-1.106.158-.963-.345-1.102-1.15-1.104h-.326c-.097 0-.18.07-.197.168l-.326 2.043zm3.96 4.895h-2.37c-.102 0-.194-.058-.238-.15l-1.565-3.262h-.023l-.506 3.19c-.02.128-.13.222-.26.222h-1.86c-.116 0-.205-.104-.187-.218l1.33-8.432c.02-.128.13-.22.26-.22h3.222c1.753 0 2.953.834 2.66 2.728-.2 1.224-1.048 2.283-2.342 2.506l2.037 3.35c.076.125-.014.286-.16.286zM40.216 23.552h-1.808c-.116 0-.205-.104-.187-.218l1.06-6.7h-1.684c-.116 0-.205-.104-.187-.218l.228-1.462c.025-.157.16-.273.32-.273h5.62c.116 0 .205.104.186.22l-.228 1.46c-.025.158-.16.274-.32.274h-1.63l-1.05 6.645c-.025.156-.16.272-.32.272M11.467 17.202c-.027.164-.228.223-.345.104-.395-.405-.975-.62-1.6-.62-1.41 0-2.526 1.083-2.75 2.458-.21 1.4.588 2.41 2.022 2.41.592 0 1.22-.225 1.74-.6.144-.105.34.02.313.194l-.328 2.03c-.02.12-.108.22-.226.254-.702.207-1.24.355-1.9.355-3.823 0-4.435-3.266-4.238-4.655.553-3.894 3.712-4.786 5.65-4.678.623.034 1.182.117 1.73.323.177.067.282.25.252.436l-.32 1.99" fill="#21306F" />\n      <path d="M23.184 7.67c-.11.717-.657.717-1.186.717h-.302l.212-1.34c.013-.08.082-.14.164-.14h.138c.36 0 .702 0 .877.206.105.123.137.305.097.557zm-.23-1.87h-1.998c-.137 0-.253.098-.274.233l-.808 5.123c-.016.1.062.192.165.192h1.024c.095 0 .177-.07.192-.164l.23-1.452c.02-.135.136-.235.273-.235h.63c1.317 0 2.076-.636 2.275-1.898.09-.553.003-.987-.255-1.29-.284-.334-.788-.51-1.456-.51z" fill="#0093C7" />\n      <path d="M8.936 7.67c-.11.717-.656.717-1.186.717h-.302l.212-1.34c.013-.08.082-.14.164-.14h.138c.36 0 .702 0 .877.206.104.123.136.305.096.557zm-.23-1.87H6.708c-.136 0-.253.098-.274.233l-.808 5.123c-.016.1.062.192.165.192h.955c.136 0 .252-.1.274-.234l.217-1.382c.02-.135.137-.235.274-.235h.633c1.316 0 2.075-.636 2.274-1.898.09-.553.003-.987-.255-1.29-.284-.334-.788-.51-1.456-.51zM13.343 9.51c-.092.545-.526.912-1.08.912-.277 0-.5-.09-.642-.258-.14-.168-.193-.406-.148-.672.086-.542.527-.92 1.072-.92.27 0 .492.09.637.26.148.172.205.412.163.677zm1.334-1.863h-.957c-.082 0-.152.06-.164.14l-.042.268-.067-.097c-.208-.3-.67-.4-1.13-.4-1.057 0-1.96.8-2.135 1.923-.092.56.038 1.097.356 1.47.29.344.708.487 1.204.487.852 0 1.325-.548 1.325-.548l-.043.265c-.016.1.062.193.164.193h.862c.136 0 .253-.1.274-.234l.517-3.275c.017-.102-.06-.193-.163-.193z" fill="#21306F" />\n      <path d="M27.59 9.51c-.09.545-.525.912-1.078.912-.278 0-.5-.09-.643-.258-.142-.168-.195-.406-.15-.672.086-.542.526-.92 1.07-.92.273 0 .494.09.64.26.146.172.203.412.16.677zm1.334-1.863h-.956c-.082 0-.152.06-.164.14l-.043.268-.065-.097c-.208-.3-.67-.4-1.13-.4-1.057 0-1.96.8-2.136 1.923-.092.56.038 1.097.355 1.47.292.344.71.487 1.205.487.852 0 1.325-.548 1.325-.548l-.043.265c-.016.1.062.193.164.193h.862c.136 0 .253-.1.274-.234l.517-3.275c.015-.102-.063-.193-.166-.193z" fill="#0093C7" />\n      <path d="M19.77 7.647h-.96c-.092 0-.178.045-.23.122L17.254 9.72l-.562-1.877c-.035-.118-.143-.198-.266-.198h-.945c-.113 0-.194.112-.157.22l1.06 3.108-.997 1.404c-.078.11 0 .262.136.262h.96c.092 0 .177-.044.23-.12l3.196-4.614c.077-.11-.002-.26-.137-.26" fill="#21306F" />\n      <path d="M30.052 5.94l-.82 5.216c-.016.1.062.192.165.192h.824c.138 0 .254-.1.275-.234l.81-5.122c.015-.1-.064-.193-.166-.193h-.924c-.082 0-.15.06-.164.14" fill="#0093C7" />\n    </symbol>\n\n    <symbol id="iconCardFront" viewBox="0 0 48 29">\n      <title>Generic Card</title>\n      <path d="M46.177 29H1.823C.9 29 0 28.13 0 27.187V1.813C0 .87.9 0 1.823 0h44.354C47.1 0 48 .87 48 1.813v25.375C48 28.13 47.1 29 46.177 29z" fill="#FFF" />\n      <path d="M4.8 9.14c0-.427.57-.973 1.067-.973h7.466c.496 0 1.067.546 1.067.972v3.888c0 .425-.57.972-1.067.972H5.867c-.496 0-1.067-.547-1.067-.972v-3.89z" fill="#828282" />\n      <rect fill="#828282" x="10.8" y="22.167" width="3.6" height="2.333" rx="1.167" />\n      <rect fill="#828282" x="4.8" y="22.167" width="3.6" height="2.333" rx="1.167" />\n      <path d="M6.55 16.333h34.9c.966 0 1.75.784 1.75 1.75 0 .967-.784 1.75-1.75 1.75H6.55c-.966 0-1.75-.783-1.75-1.75 0-.966.784-1.75 1.75-1.75z" fill="#828282" />\n      <ellipse fill="#828282" cx="40.2" cy="6.417" rx="3" ry="2.917" />\n    </symbol>\n\n    <symbol id="iconCVVBack" viewBox="0 0 40 24">\n      <title>CVV Back</title>\n      <path d="M38.48 24H1.52C.75 24 0 23.28 0 22.5v-21C0 .72.75 0 1.52 0h36.96C39.25 0 40 .72 40 1.5v21c0 .78-.75 1.5-1.52 1.5z" fill="#FFF"/>\n      <path fill="#828282" d="M0 5h40v4H0z" />\n      <path d="M20 13.772v5.456c0 .423.37.772.82.772h13.36c.45 0 .82-.35.82-.772v-5.456c0-.423-.37-.772-.82-.772H20.82c-.45 0-.82.35-.82.772zm-1-.142c0-.9.76-1.63 1.68-1.63h13.64c.928 0 1.68.737 1.68 1.63v5.74c0 .9-.76 1.63-1.68 1.63H20.68c-.928 0-1.68-.737-1.68-1.63v-5.74z" fill="#000" fill-rule="nonzero" />\n      <circle fill="#828282" cx="23.5" cy="16.5" r="1.5" />\n      <circle fill="#828282" cx="27.5" cy="16.5" r="1.5" />\n      <circle fill="#828282" cx="31.5" cy="16.5" r="1.5" />\n    </symbol>\n\n    <symbol id="iconCVVFront" viewBox="0 0 40 24">\n      <title>CVV Front</title>\n      <path d="M38.48 24H1.52C.75 24 0 23.28 0 22.5v-21C0 .72.75 0 1.52 0h36.96C39.25 0 40 .72 40 1.5v21c0 .78-.75 1.5-1.52 1.5z" fill="#FFF" />\n      <path d="M16 5.772v5.456c0 .423.366.772.81.772h17.38c.444 0 .81-.348.81-.772V5.772C35 5.35 34.634 5 34.19 5H16.81c-.444 0-.81.348-.81.772zm-1-.142c0-.9.75-1.63 1.66-1.63h17.68c.917 0 1.66.737 1.66 1.63v5.74c0 .9-.75 1.63-1.66 1.63H16.66c-.917 0-1.66-.737-1.66-1.63V5.63z" fill="#000" fill-rule="nonzero" />\n      <circle fill="#828282" cx="19.5" cy="8.5" r="1.5" />\n      <circle fill="#828282" cx="27.5" cy="8.5" r="1.5" />\n      <circle fill="#828282" cx="23.5" cy="8.5" r="1.5" />\n      <circle fill="#828282" cx="31.5" cy="8.5" r="1.5" />\n      <path d="M4 7.833C4 7.47 4.476 7 4.89 7h6.22c.414 0 .89.47.89.833v3.334c0 .364-.476.833-.89.833H4.89c-.414 0-.89-.47-.89-.833V7.833zM4 18.5c0-.828.668-1.5 1.5-1.5h29c.828 0 1.5.666 1.5 1.5 0 .828-.668 1.5-1.5 1.5h-29c-.828 0-1.5-.666-1.5-1.5z" fill="#828282" />\n    </symbol>\n\n    <symbol id="iconCheck" viewBox="0 0 42 32">\n      <title>Check</title>\n      <path class="path1" d="M14.379 29.76L39.741 3.415 36.194.001l-21.815 22.79-10.86-11.17L0 15.064z" />\n    </symbol>\n\n    <symbol id="iconX" viewBox="0 0 32 32">\n      <title>X</title>\n      <path d="M29 3.54L25.46 0 14.5 10.97 3.54 0.01 0 3.54 10.96 14.5 0.01 25.46 3.54 28.99 14.5 18.04 25.46 29 28.99 25.46 18.03 14.5 29 3.54z"/>\n    </symbol>\n\n    <symbol id="iconLockLoader" viewBox="0 0 28 32">\n      <title>Lock Loader</title>\n      <path d="M6 10V8c0-4.422 3.582-8 8-8 4.41 0 8 3.582 8 8v2h-4V7.995C18 5.79 16.205 4 14 4c-2.21 0-4 1.792-4 3.995V10H6zM.997 14c-.55 0-.997.445-.997.993v16.014c0 .548.44.993.997.993h26.006c.55 0 .997-.445.997-.993V14.993c0-.548-.44-.993-.997-.993H.997z" />\n    </symbol>\n\n    <symbol id="iconError" height="24" viewBox="0 0 24 24" width="24">\n      <path d="M0 0h24v24H0z" fill="none" />\n      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />\n    </symbol>\n\n    <symbol id="logoApplePay" viewBox="0 0 165.52 105.97" width="24">\n      <title>Apple Pay Logo</title>\n      <path id="_Path_" data-name="&lt;Path&gt;" fill="#231f20" d="M150.7 0h-139a20.78 20.78 0 0 0-3.12.3 10.51 10.51 0 0 0-3 1 9.94 9.94 0 0 0-4.31 4.32 10.46 10.46 0 0 0-1 3A20.65 20.65 0 0 0 0 11.7v82.57a20.64 20.64 0 0 0 .3 3.11 10.46 10.46 0 0 0 1 3 9.94 9.94 0 0 0 4.35 4.35 10.47 10.47 0 0 0 3 1 20.94 20.94 0 0 0 3.11.27h142.06a21 21 0 0 0 3.11-.27 10.48 10.48 0 0 0 3-1 9.94 9.94 0 0 0 4.35-4.35 10.4 10.4 0 0 0 1-3 20.63 20.63 0 0 0 .27-3.11V11.69a20.64 20.64 0 0 0-.27-3.11 10.4 10.4 0 0 0-1-3 9.94 9.94 0 0 0-4.35-4.35 10.52 10.52 0 0 0-3-1 20.84 20.84 0 0 0-3.1-.23h-1.43z"/>\n      <path id="_Path_2" data-name="&lt;Path&gt;" fill="#fff" d="M150.7 3.53h3.03a17.66 17.66 0 0 1 2.58.22 7 7 0 0 1 2 .65 6.41 6.41 0 0 1 2.8 2.81 6.88 6.88 0 0 1 .64 2 17.56 17.56 0 0 1 .22 2.58v82.38a17.54 17.54 0 0 1-.22 2.59 6.85 6.85 0 0 1-.64 2 6.41 6.41 0 0 1-2.81 2.81 6.92 6.92 0 0 1-2 .65 18 18 0 0 1-2.57.22H11.79a18 18 0 0 1-2.58-.22 6.94 6.94 0 0 1-2-.65 6.41 6.41 0 0 1-2.8-2.8 6.93 6.93 0 0 1-.65-2 17.47 17.47 0 0 1-.22-2.58v-82.4a17.49 17.49 0 0 1 .22-2.59 6.92 6.92 0 0 1 .65-2 6.41 6.41 0 0 1 2.8-2.8 7 7 0 0 1 2-.65 17.63 17.63 0 0 1 2.58-.22H150.7"/>\n      <g id="_Group_" data-name="&lt;Group&gt;">\n      <g id="_Group_2" data-name="&lt;Group&gt;">\n      <path id="_Path_3" data-name="&lt;Path&gt;" class="cls-1" d="M43.51 35.77a9.15 9.15 0 0 0 2.1-6.52 9.07 9.07 0 0 0-6 3.11 8.56 8.56 0 0 0-2.16 6.27 7.57 7.57 0 0 0 6.06-2.86"/>\n      <path id="_Path_4" data-name="&lt;Path&gt;" class="cls-1" d="M45.59 39.08c-3.35-.2-6.2 1.9-7.79 1.9s-4-1.8-6.7-1.75a9.87 9.87 0 0 0-8.4 5.1c-3.6 6.2-.95 15.4 2.55 20.45 1.7 2.5 3.75 5.25 6.45 5.15s3.55-1.65 6.65-1.65 4 1.65 6.7 1.6 4.55-2.5 6.25-5a22.2 22.2 0 0 0 2.8-5.75 9.08 9.08 0 0 1-5.45-8.25A9.26 9.26 0 0 1 53 43.13a9.57 9.57 0 0 0-7.45-4"/>\n      </g>\n      <g id="_Group_3" data-name="&lt;Group&gt;">\n      <path id="_Compound_Path_" data-name="&lt;Compound Path&gt;" fill="#231f20" d="M79 32.11c7.28 0 12.35 5 12.35 12.32S86.15 56.8 78.79 56.8h-8.06v12.82h-5.82V32.11zm-8.27 19.81h6.68c5.07 0 8-2.73 8-7.46S82.48 37 77.44 37h-6.71z"/>\n      <path id="_Compound_Path_2" data-name="&lt;Compound Path&gt;" fill="#231f20" d="M92.76 61.85c0-4.81 3.67-7.56 10.42-8l7.25-.44v-2.06c0-3-2-4.7-5.56-4.7-2.94 0-5.07 1.51-5.51 3.82h-5.24c.16-4.86 4.73-8.4 10.92-8.4 6.65 0 11 3.48 11 8.89v18.66h-5.38v-4.5h-.13a9.59 9.59 0 0 1-8.58 4.78c-5.42 0-9.19-3.22-9.19-8.05zm17.68-2.42v-2.11l-6.47.42c-3.64.23-5.54 1.59-5.54 4s2 3.77 5.07 3.77c3.95-.05 6.94-2.57 6.94-6.08z"/>\n      <path id="_Compound_Path_3" data-name="&lt;Compound Path&gt;" fill="#231f20" d="M121 79.65v-4.5a17.14 17.14 0 0 0 1.72.1c2.57 0 4-1.09 4.91-3.9l.52-1.66-9.88-27.29h6.08l6.86 22.15h.13l6.86-22.15h5.93l-10.21 28.67c-2.34 6.58-5 8.73-10.68 8.73a15.93 15.93 0 0 1-2.24-.15z"/>\n      </g>\n      </g>\n    </symbol>\n    <symbol id="logoGooglePay" viewbox="0 0 752 400" >\n      <g>\n        <title>Google Pay Mark</title>\n        <path d="m552.7,0l-352,0c-110,0 -200,90 -200,200l0,0c0,110 90,200 200,200l352,0c110,0 200,-90 200,-200l0,0c0,-110 -90,-200 -200,-200z" fill="#FFFFFF" id="Base_1_"/>\n        <path d="m552.7,16.2c24.7,0 48.7,4.9 71.3,14.5c21.9,9.3 41.5,22.6 58.5,39.5c16.9,16.9 30.2,36.6 39.5,58.5c9.6,22.6 14.5,46.6 14.5,71.3s-4.9,48.7 -14.5,71.3c-9.3,21.9 -22.6,41.5 -39.5,58.5c-16.9,16.9 -36.6,30.2 -58.5,39.5c-22.6,9.6 -46.6,14.5 -71.3,14.5l-352,0c-24.7,0 -48.7,-4.9 -71.3,-14.5c-21.9,-9.3 -41.5,-22.6 -58.5,-39.5c-16.9,-16.9 -30.2,-36.6 -39.5,-58.5c-9.6,-22.6 -14.5,-46.6 -14.5,-71.3s4.9,-48.7 14.5,-71.3c9.3,-21.9 22.6,-41.5 39.5,-58.5c16.9,-16.9 36.6,-30.2 58.5,-39.5c22.6,-9.6 46.6,-14.5 71.3,-14.5l352,0m0,-16.2l-352,0c-110,0 -200,90 -200,200l0,0c0,110 90,200 200,200l352,0c110,0 200,-90 200,-200l0,0c0,-110 -90,-200 -200,-200l0,0z" fill="#3C4043" id="Outline"/>\n        <g id="G_Pay_Lockup_1_">\n         <g id="Pay_Typeface_3_">\n          <path d="m359.3,214.2l0,60.5l-19.2,0l0,-149.4l50.9,0c12.9,0 23.9,4.3 32.9,12.9c9.2,8.6 13.8,19.1 13.8,31.5c0,12.7 -4.6,23.2 -13.8,31.7c-8.9,8.5 -19.9,12.7 -32.9,12.7l-31.7,0l0,0.1zm0,-70.5l0,52.1l32.1,0c7.6,0 14,-2.6 19,-7.7c5.1,-5.1 7.7,-11.3 7.7,-18.3c0,-6.9 -2.6,-13 -7.7,-18.1c-5,-5.3 -11.3,-7.9 -19,-7.9l-32.1,0l0,-0.1z" fill="#3C4043" id="Letter_p_3_"/>\n          <path d="m487.9,169.1c14.2,0 25.4,3.8 33.6,11.4c8.2,7.6 12.3,18 12.3,31.2l0,63l-18.3,0l0,-14.2l-0.8,0c-7.9,11.7 -18.5,17.5 -31.7,17.5c-11.3,0 -20.7,-3.3 -28.3,-10s-11.4,-15 -11.4,-25c0,-10.6 4,-19 12,-25.2c8,-6.3 18.7,-9.4 32,-9.4c11.4,0 20.8,2.1 28.1,6.3l0,-4.4c0,-6.7 -2.6,-12.3 -7.9,-17c-5.3,-4.7 -11.5,-7 -18.6,-7c-10.7,0 -19.2,4.5 -25.4,13.6l-16.9,-10.6c9.3,-13.5 23.1,-20.2 41.3,-20.2zm-24.8,74.2c0,5 2.1,9.2 6.4,12.5c4.2,3.3 9.2,5 14.9,5c8.1,0 15.3,-3 21.6,-9s9.5,-13 9.5,-21.1c-6,-4.7 -14.3,-7.1 -25,-7.1c-7.8,0 -14.3,1.9 -19.5,5.6c-5.3,3.9 -7.9,8.6 -7.9,14.1z" fill="#3C4043" id="Letter_a_3_"/>\n          <path d="m638.2,172.4l-64,147.2l-19.8,0l23.8,-51.5l-42.2,-95.7l20.9,0l30.4,73.4l0.4,0l29.6,-73.4l20.9,0z" fill="#3C4043" id="Letter_y_3_"/>\n         </g>\n         <g id="G_Mark_1_">\n          <path d="m282.93,202c0,-6.26 -0.56,-12.25 -1.6,-18.01l-80.48,0l0,33l46.35,0.01c-1.88,10.98 -7.93,20.34 -17.2,26.58l0,21.41l27.59,0c16.11,-14.91 25.34,-36.95 25.34,-62.99z" fill="#4285F4" id="Blue_500"/>\n          <path d="m230.01,243.58c-7.68,5.18 -17.57,8.21 -29.14,8.21c-22.35,0 -41.31,-15.06 -48.1,-35.36l-28.46,0l0,22.08c14.1,27.98 43.08,47.18 76.56,47.18c23.14,0 42.58,-7.61 56.73,-20.71l-27.59,-21.4z" fill="#34A853" id="Green_500_1_"/>\n          <path d="m150.09,200.05c0,-5.7 0.95,-11.21 2.68,-16.39l0,-22.08l-28.46,0c-5.83,11.57 -9.11,24.63 -9.11,38.47s3.29,26.9 9.11,38.47l28.46,-22.08c-1.73,-5.18 -2.68,-10.69 -2.68,-16.39z" fill="#FABB05" id="Yellow_500_1_"/>\n          <path d="m200.87,148.3c12.63,0 23.94,4.35 32.87,12.85l24.45,-24.43c-14.85,-13.83 -34.21,-22.32 -57.32,-22.32c-33.47,0 -62.46,19.2 -76.56,47.18l28.46,22.08c6.79,-20.3 25.75,-35.36 48.1,-35.36z" fill="#E94235" id="Red_500"/>\n         </g>\n        </g>\n       </g>\n    </symbol>\n\n    <symbol id="logoVenmo" viewBox="0 0 48 32">\n      <title>Venmo</title>\n      <g fill="none" fill-rule="evenodd">\n        <rect fill="#3D95CE" width="47.4074074" height="31.6049383" rx="3.16049383"/>\n        <path d="M33.1851852,10.1131555 C33.1851852,14.8373944 29.2425262,20.9745161 26.0425868,25.2839506 L18.7337285,25.2839506 L15.8024691,7.35534396 L22.202175,6.73384536 L23.7519727,19.4912014 C25.2000422,17.0781163 26.9870326,13.2859484 26.9870326,10.7005 C26.9870326,9.28531656 26.7500128,8.32139205 26.3796046,7.52770719 L32.207522,6.32098765 C32.8813847,7.45939896 33.1851852,8.63196439 33.1851852,10.1131555 Z" fill="#FFF"/>\n      </g>\n    </symbol>\n    <symbol id="buttonVenmo" viewBox="0 0 295 42">\n      <g fill="none" fill-rule="evenodd">\n        <rect fill="#3D95CE" width="295" height="42" rx="3"/>\n        <path d="M11.3250791 0C11.7902741.780434316 12 1.58428287 12 2.59970884 12 5.838396 9.27822123 10.0456806 7.06917212 13L2.02356829 13 0 .709099732 4.41797878.283033306 5.48786751 9.02879887C6.48752911 7.3745159 7.72116169 4.77480706 7.72116169 3.00236102 7.72116169 2.03218642 7.55753727 1.37137098 7.30182933.827262801L11.3250791 0 11.3250791 0zM17.5051689 5.68512193C18.333931 5.68512193 20.4203856 5.28483546 20.4203856 4.03281548 20.4203856 3.43161451 20.0177536 3.13172102 19.5432882 3.13172102 18.7131868 3.13172102 17.6238766 4.18269796 17.5051689 5.68512193L17.5051689 5.68512193zM17.4102028 8.1647385C17.4102028 9.69351403 18.2153451 10.293301 19.2827401 10.293301 20.4451012 10.293301 21.5580312 9.99340752 23.0045601 9.21725797L22.4597224 13.1234575C21.440541 13.649203 19.8521716 14 18.310433 14 14.3996547 14 13 11.49596 13 8.36552446 13 4.30815704 15.2767521 0 19.9706358 0 22.554932 0 24 1.52864698 24 3.65720949 24.0002435 7.08869546 19.8287953 8.13992948 17.4102028 8.1647385L17.4102028 8.1647385zM37 2.84753211C37 3.32189757 36.9261179 4.00994664 36.8526108 4.45959542L35.4649774 12.9998782 30.9621694 12.9998782 32.2279161 5.1711436C32.2519185 4.95879931 32.3256755 4.53131032 32.3256755 4.29412759 32.3256755 3.72466988 31.9603904 3.5825794 31.5212232 3.5825794 30.9379171 3.5825794 30.3532359 3.84326124 29.9638234 4.03356751L28.5281854 13 24 13 26.0686989.213683657 29.9878258.213683657 30.0374555 1.23425123C30.9620444.641294408 32.1795365 3.90379019e-8 33.9069526 3.90379019e-8 36.1955476-.000243475057 37 1.1387937 37 2.84753211L37 2.84753211zM51.2981937 1.39967969C52.6582977.49918987 53.9425913 0 55.7133897 0 58.1518468 0 59 1.13900518 59 2.84769558 59 3.32204771 58.9223438 4.01007745 58.8448195 4.4597136L57.3830637 12.9997565 52.6328518 12.9997565 53.9932194 5.00577861C54.0182698 4.792101 54.0708756 4.53142648 54.0708756 4.36608506 54.0708756 3.72493046 53.6854953 3.58272222 53.2224587 3.58272222 52.6325881 3.58272222 52.0429812 3.81989829 51.6052587 4.03369766L50.0914245 12.9998782 45.3423992 12.9998782 46.7027668 5.00590037C46.7278172 4.79222275 46.7788409 4.53154824 46.7788409 4.36620681 46.7788409 3.72505221 46.3933287 3.58284398 45.9318743 3.58284398 45.3153711 3.58284398 44.7000546 3.84351849 44.2893602 4.03381941L42.7740757 13 38 13 40.1814929.214042876 44.2643098.214042876 44.3925941 1.28145692C45.3423992.641763367 46.6253743.000487014507 48.3452809.000487014507 49.8344603 0 50.8094476.593061916 51.2981937 1.39967969L51.2981937 1.39967969zM67.5285327 5.39061542C67.5285327 4.29258876 67.2694573 3.54396333 66.4936812 3.54396333 64.7759775 3.54396333 64.4232531 6.76273249 64.4232531 8.4093242 64.4232531 9.65848482 64.7530184 10.4315735 65.5285529 10.4315735 67.1521242 10.4315735 67.5285327 7.03707905 67.5285327 5.39061542L67.5285327 5.39061542zM60 8.21054461C60 3.96893154 62.1170713 0 66.988027 0 70.6583423 0 72 2.29633967 72 5.46592624 72 9.65835674 69.905767 14 64.9173573 14 61.2233579 14 60 11.4294418 60 8.21054461L60 8.21054461z" transform="translate(112 14)" fill="#FFF"/>\n      </g>\n    </symbol>\n\n    <symbol id="iconClose" width="21" height="21" viewBox="0 0 21 21" overflow="visible">\n      <path d="M16 5.414L14.586 4 10 8.586 5.414 4 4 5.414 8.586 10 4 14.586 5.414 16 10 11.414 14.586 16 16 14.586 11.414 10"/>\n    </symbol>\n  </defs>\n</svg>\n',
  E7 = [
    "changeActiveView",
    "paymentMethodRequestable",
    "noPaymentMethodRequestable",
    "paymentOptionSelected",
    "card:binAvailable",
    "card:blur",
    "card:cardTypeChange",
    "card:empty",
    "card:focus",
    "card:inputSubmitRequest",
    "card:notEmpty",
    "card:validityChange",
    "3ds:customer-canceled",
    "3ds:authentication-modal-render",
    "3ds:authentication-modal-close",
  ],
  E8 = [EZ.paypal, EZ.paypalCredit, EZ.applePay, EZ.googlePay, "threeDSecure"],
  E9 = [EZ.paypal, EZ.paypalCredit, EZ.applePay, EZ.googlePay],
  _e = {},
  _t = "1.35.0";
function _n(e) {
  (this._client = e.client),
    (this._componentID = E$()),
    (this._dropinWrapper = document.createElement("div")),
    (this._dropinWrapper.id = "braintree--dropin__" + this._componentID),
    this._dropinWrapper.setAttribute("data-braintree-id", "wrapper"),
    (this._dropinWrapper.style.display = "none"),
    (this._dropinWrapper.className = "braintree-loading"),
    (this._merchantConfiguration = e.merchantConfiguration),
    EY.call(this);
}
function _r(e) {
  var t = { nonce: e.nonce, details: e.details, type: e.type };
  return (
    null != e.vaulted && (t.vaulted = e.vaulted),
    e.type === Ej.paymentMethodTypes.card && (t.description = e.description),
    e.type in _e && (t.details.rawPaymentData = e.rawPaymentData),
    "boolean" == typeof e.liabilityShiftPossible &&
      ((t.liabilityShifted = e.liabilityShifted),
      (t.liabilityShiftPossible = e.liabilityShiftPossible)),
    e.threeDSecureInfo && (t.threeDSecureInfo = e.threeDSecureInfo),
    e.deviceData && (t.deviceData = e.deviceData),
    e.binData && (t.binData = e.binData),
    t
  );
}
(_e[Ej.paymentMethodTypes.googlePay] = !0),
  (_e[Ej.paymentMethodTypes.applePay] = !0),
  EY.createChild(_n),
  (_n.prototype._initialize = function (e) {
    var t,
      n,
      r = this,
      i =
        r._merchantConfiguration.container || r._merchantConfiguration.selector;
    if (i) {
      if (
        r._merchantConfiguration.container &&
        r._merchantConfiguration.selector
      ) {
        EH.sendEvent(r._client, "configuration-error"),
          e(
            new EW("Must only have one options.selector or options.container.")
          );
        return;
      }
    } else {
      EH.sendEvent(r._client, "configuration-error"),
        e(new EW("options.container is required."));
      return;
    }
    if (
      ("string" == typeof i && (i = document.querySelector(i)),
      !i || 1 !== i.nodeType)
    ) {
      EH.sendEvent(r._client, "configuration-error"),
        e(
          new EW(
            "options.selector or options.container must reference a valid DOM node."
          )
        );
      return;
    }
    if (i.innerHTML.trim()) {
      EH.sendEvent(r._client, "configuration-error"),
        e(
          new EW(
            "options.selector or options.container must reference an empty DOM node."
          )
        );
      return;
    }
    (r._strings = EU({}, EJ.en)),
      r._merchantConfiguration.locale &&
        ((t =
          EJ[r._merchantConfiguration.locale] ||
          EJ[r._merchantConfiguration.locale.split("_")[0]]),
        (r._strings = EU(r._strings, t))),
      EX() || (r._strings.endingIn = r._strings.endingIn.replace(/ΓÇó/g, "*")),
      r._merchantConfiguration.translations &&
        Object.keys(r._merchantConfiguration.translations).forEach(function (
          e
        ) {
          r._strings[e] = E0(r._merchantConfiguration.translations[e]);
        }),
      (n = Object.keys(r._strings).reduce(function (e, t) {
        var n = r._strings[t];
        return e.replace(RegExp("{{" + t + "}}", "g"), n);
      }, E5)),
      (r._dropinWrapper.innerHTML = E6 + n),
      i.appendChild(r._dropinWrapper),
      (r._model = new EK({
        client: r._client,
        container: i,
        componentID: r._componentID,
        merchantConfiguration: r._merchantConfiguration,
      })),
      r._injectStylesheet(),
      r._model
        .initialize()
        .then(function () {
          return (
            r._model.on("cancelInitialization", function (t) {
              (r._dropinWrapper.innerHTML = ""),
                EH.sendEvent(r._client, "load-error"),
                e(t);
            }),
            r._model.on("asyncDependenciesReady", function () {
              r._model.hasAtLeastOneAvailablePaymentOption()
                ? (EH.sendEvent(r._client, "appeared"),
                  r._disableErroredPaymentMethods(),
                  r._handleAppSwitch(),
                  r._model.confirmDropinReady(),
                  e(null, r))
                : r._model.cancelInitialization(
                    new EW("All payment options failed to load.")
                  );
            }),
            E7.forEach(function (e) {
              r._model.on(e, function (t) {
                r._emit(e, t);
              });
            }),
            r._setUpDependenciesAndViews()
          );
        })
        .catch(function (t) {
          r.teardown().then(function () {
            e(t);
          });
        });
  }),
  (_n.prototype.updateConfiguration = function (e, t, n) {
    var r;
    if (-1 !== E8.indexOf(e)) {
      if ("threeDSecure" === e) {
        this._threeDSecure && this._threeDSecure.updateConfiguration(t, n);
        return;
      }
      (r = this._mainView.getView(e)) &&
        (r.updateConfiguration(t, n),
        -1 !== E9.indexOf(e) &&
          (this._removeUnvaultedPaymentMethods(function (t) {
            return t.type === Ej.paymentMethodTypes[e];
          }),
          this._navigateToInitialView()));
    }
  }),
  (_n.prototype.getAvailablePaymentOptions = function () {
    return this._model.supportedPaymentOptions;
  }),
  (_n.prototype.clearSelectedPaymentMethod = function () {
    if (
      (this._removeUnvaultedPaymentMethods(),
      this._model.removeActivePaymentMethod(),
      0 === this._model.getPaymentMethods().length)
    ) {
      this._navigateToInitialView();
      return;
    }
    this._mainView.showLoadingIndicator(),
      this._model.refreshPaymentMethods().then(
        function () {
          this._navigateToInitialView(), this._mainView.hideLoadingIndicator();
        }.bind(this)
      );
  }),
  (_n.prototype._setUpDataCollector = function () {
    var e = this,
      t = EU({}, e._merchantConfiguration.dataCollector, { client: e._client });
    (this._dataCollector = new E2(t)),
      this._dataCollector
        .initialize()
        .then(function () {
          e._model.asyncDependencyReady("dataCollector");
        })
        .catch(function (t) {
          e._model.cancelInitialization(
            new EW({
              message: "Data Collector failed to set up.",
              braintreeWebError: t,
            })
          );
        });
  }),
  (_n.prototype._setUpThreeDSecure = function () {
    var e = this;
    (this._threeDSecure = new E3(this._client, this._model)),
      this._threeDSecure
        .initialize()
        .then(function () {
          e._model.asyncDependencyReady("threeDSecure");
        })
        .catch(function (t) {
          e._model.cancelInitialization(
            new EW({
              message: "3D Secure failed to set up.",
              braintreeWebError: t,
            })
          );
        });
  }),
  (_n.prototype._setUpDependenciesAndViews = function () {
    this._merchantConfiguration.dataCollector && this._setUpDataCollector(),
      this._merchantConfiguration.threeDSecure && this._setUpThreeDSecure(),
      (this._mainView = new Eq({
        client: this._client,
        element: this._dropinWrapper,
        model: this._model,
        strings: this._strings,
      }));
  }),
  (_n.prototype._removeUnvaultedPaymentMethods = function (e) {
    (e =
      e ||
      function () {
        return !0;
      }),
      this._model.getPaymentMethods().forEach(
        function (t) {
          e(t) && !t.vaulted && this._model.removePaymentMethod(t);
        }.bind(this)
      );
  }),
  (_n.prototype._navigateToInitialView = function () {
    this._mainView.primaryView.ID !== EQ ||
      this._model.hasPaymentMethods() ||
      this._mainView.setPrimaryView(this._model.getInitialViewId());
  }),
  (_n.prototype._supportsPaymentOption = function (e) {
    return -1 !== this._model.supportedPaymentOptions.indexOf(e);
  }),
  (_n.prototype._disableErroredPaymentMethods = function () {
    var e,
      t = Object.keys(this._model.failedDependencies);
    0 !== t.length &&
      ((e = this._mainView.getOptionsElements()),
      t.forEach(
        function (t) {
          var n = e[t],
            r = n.div,
            i = n.clickHandler,
            a = this._model.failedDependencies[t],
            o = r.querySelector(".braintree-option__disabled-message");
          EB.add(r, "braintree-disabled"),
            r.removeEventListener("click", i),
            (o.innerHTML = Ej.errors.DEVELOPER_MISCONFIGURATION_MESSAGE),
            console.error(a);
        }.bind(this)
      ));
  }),
  (_n.prototype._sendVaultedPaymentMethodAppearAnalyticsEvents = function () {
    var e,
      t,
      n = {},
      r = this._model._paymentMethods;
    for (e = 0; e < r.length; e++)
      (t = r[e].type) in n ||
        ((n[t] = !0),
        EH.sendEvent(
          this._client,
          "vaulted-" + Ej.analyticsKinds[t] + ".appear"
        ));
  }),
  (_n.prototype._handleAppSwitch = function () {
    this._model.appSwitchError
      ? (this._mainView.setPrimaryView(this._model.appSwitchError.id),
        this._model.reportError(this._model.appSwitchError.error))
      : this._model.appSwitchPayload
      ? this._model.addPaymentMethod(this._model.appSwitchPayload)
      : this._sendVaultedPaymentMethodAppearAnalyticsEvents();
  }),
  (_n.prototype.requestPaymentMethod = function (e) {
    var t = this;
    return (
      (e = e || {}),
      this._mainView
        .requestPaymentMethod()
        .then(function (n) {
          return t._shouldPerformThreeDSecureVerification(n)
            ? (t._mainView.showLoadingIndicator(),
              t._threeDSecure
                .verify(n, e.threeDSecure)
                .then(function (e) {
                  return (
                    (n.nonce = e.nonce),
                    (n.liabilityShifted = e.liabilityShifted),
                    (n.liabilityShiftPossible = e.liabilityShiftPossible),
                    (n.threeDSecureInfo = e.threeDSecureInfo),
                    t._mainView.hideLoadingIndicator(),
                    n
                  );
                })
                .catch(function (e) {
                  return (
                    t.clearSelectedPaymentMethod(),
                    t._model.refreshPaymentMethods().then(function () {
                      return (
                        t._mainView.hideLoadingIndicator(),
                        E1.reject(
                          new EW({
                            message:
                              "Something went wrong during 3D Secure authentication. Please try again.",
                            braintreeWebError: e,
                          })
                        )
                      );
                    })
                  );
                }))
            : n;
        })
        .then(function (e) {
          return (
            t._dataCollector &&
              (e.deviceData = t._dataCollector.getDeviceData()),
            e
          );
        })
        .then(function (e) {
          return _r(e);
        })
    );
  }),
  (_n.prototype._shouldPerformThreeDSecureVerification = function (e) {
    return (
      !!this._threeDSecure &&
      null == e.liabilityShifted &&
      (e.type === Ej.paymentMethodTypes.card ||
        (e.type === Ej.paymentMethodTypes.googlePay &&
          !1 === e.details.isNetworkTokenized))
    );
  }),
  (_n.prototype._removeStylesheet = function () {
    var e = document.getElementById(Ej.STYLESHEET_ID);
    e && e.parentNode.removeChild(e);
  }),
  (_n.prototype._injectStylesheet = function () {
    var e,
      t = { id: Ej.STYLESHEET_ID };
    document.getElementById(Ej.STYLESHEET_ID) ||
      ((e = this._client.getConfiguration().gatewayConfiguration.assetsUrl),
      (t.href = e + "/web/dropin/" + _t + "/css/dropin.css"),
      this._model.isInShadowDom && (t.container = this._model.rootNode),
      EG.loadStylesheet(t));
  }),
  (_n.prototype.teardown = function () {
    var e,
      t = E1.resolve(),
      n = this;
    return (
      this._removeStylesheet(),
      this._mainView &&
        t.then(function () {
          return n._mainView.teardown().catch(function (t) {
            e = t;
          });
        }),
      this._dataCollector &&
        t.then(
          function () {
            return this._dataCollector.teardown().catch(function (t) {
              e = new EW({
                message: "Drop-in errored tearing down Data Collector.",
                braintreeWebError: t,
              });
            });
          }.bind(this)
        ),
      this._threeDSecure &&
        t.then(
          function () {
            return this._threeDSecure.teardown().catch(function (t) {
              e = new EW({
                message: "Drop-in errored tearing down 3D Secure.",
                braintreeWebError: t,
              });
            });
          }.bind(this)
        ),
      t
        .then(function () {
          return n._removeDropinWrapper();
        })
        .then(function () {
          return e ? E1.reject(e) : E1.resolve();
        })
    );
  }),
  (_n.prototype.isPaymentMethodRequestable = function () {
    return this._model.isPaymentMethodRequestable();
  }),
  (_n.prototype._removeDropinWrapper = function () {
    return (
      this._dropinWrapper.parentNode.removeChild(this._dropinWrapper),
      E1.resolve()
    );
  });
var _i = E4(_n);
function _a(e) {
  var t = e.parentNode;
  return t && "FORM" !== t.nodeName ? _a(t) : t;
}
var _o = { findParentForm: _a };
function _s(e) {
  var t = e.split("-");
  return [t.shift()]
    .concat(
      t.map(function (e) {
        return e.charAt(0).toUpperCase() + e.substring(1);
      })
    )
    .join("");
}
var _d = _s,
  _l = rW,
  _c = _o,
  _p = Q,
  _u = rX,
  _h = _d,
  _m = [
    "locale",
    "payment-option-priority",
    "data-collector.kount",
    "data-collector.paypal",
    "card.cardholderName",
    "card.cardholderName.required",
    "card.cardholder-name",
    "card.cardholder-name.required",
    "paypal.amount",
    "paypal.currency",
    "paypal.flow",
    "paypal.landing-page-type",
    "paypal-credit.amount",
    "paypal-credit.currency",
    "paypal-credit.flow",
    "paypal-credit.landing-page-type",
  ];
function _y(e, t, n) {
  var r = n.querySelector('[name="' + e + '"]');
  r ||
    (((r = document.createElement("input")).type = "hidden"),
    (r.name = e),
    n.appendChild(r)),
    (r.value = t);
}
function _f(e, t, n) {
  var r = t.split("."),
    i = _h(r[0]);
  1 === r.length
    ? (e[i] = _E(n))
    : ((e[i] = e[i] || {}), _f(e[i], r.slice(1).join("."), n));
}
function _E(e) {
  try {
    return JSON.parse(e);
  } catch (t) {
    return e;
  }
}
function __(e, t) {
  var n, r, i, a;
  if (t) {
    if (!(n = t.getAttribute("data-braintree-dropin-authorization")))
      throw new _u(
        "Authorization not found in data-braintree-dropin-authorization attribute"
      );
    if (
      (((r = document.createElement("div")).id = "braintree-dropin-" + _p()),
      !(a = _c.findParentForm(t)))
    )
      throw new _u("No form found for script tag integration.");
    a.addEventListener("submit", function (e) {
      e.preventDefault();
    }),
      t.parentNode.insertBefore(r, t),
      (i = { authorization: n, container: r }),
      _m.forEach(function (e) {
        var n = t.getAttribute("data-" + e);
        null != n && _f(i, e, n);
      }),
      e(i).then(function (e) {
        _l.sendEvent(e._client, "integration-type.script-tag"),
          a.addEventListener("submit", function () {
            e.requestPaymentMethod(function (e, t) {
              e ||
                (_y("payment_method_nonce", t.nonce, a),
                t.deviceData && _y("device_data", t.deviceData, a),
                a.submit());
            });
          });
      });
  }
}
var _v = __,
  _g = _i,
  _P = rV,
  _C = _v,
  _b = C,
  _T = rW,
  _A = rX,
  _I = r4,
  _D = nn,
  _N = "1.35.0";
function _O(e) {
  return e.authorization
    ? _P
        .create({ authorization: e.authorization })
        .catch(function (e) {
          return _I.reject(
            new _A({
              message: "There was an error creating Drop-in.",
              braintreeWebError: e,
            })
          );
        })
        .then(function (t) {
          return (
            "TOKENIZATION_KEY" ===
            (t = _x(t)).getConfiguration().authorizationType
              ? _T.sendEvent(t, "started.tokenization-key")
              : _T.sendEvent(t, "started.client-token"),
            new _I(function (n, r) {
              new _g({ merchantConfiguration: e, client: t })._initialize(
                function (e, t) {
                  if (e) {
                    r(e);
                    return;
                  }
                  n(t);
                }
              );
            })
          );
        })
    : _I.reject(new _A("options.authorization is required."));
}
function _x(e) {
  var t = e.getConfiguration();
  return (
    (t.analyticsMetadata.integration = _b.INTEGRATION),
    (t.analyticsMetadata.integrationType = _b.INTEGRATION),
    (t.analyticsMetadata.dropinVersion = _N),
    (e.getConfiguration = function () {
      return t;
    }),
    e
  );
}
_C(
  _O,
  "undefined" != typeof document &&
    document.querySelector("script[data-braintree-dropin-authorization]")
);
var _F = { create: _D(_O), VERSION: _N },
  _M = _F;
async function _w(e, t) {
  return _M.create({
    ...e,
    dataCollector: { kount: !0 },
    card: { cardholderName: { required: !0 } },
    paypal: {
      flow: "vault",
      buttonStyle: {
        color: "black",
        shape: "rect",
        label: "paypal",
        size: "medium",
        tagline: !0,
      },
    },
    applePay: {
      displayName: "songsterr.com",
      paymentRequest: { total: { label: "songsterr.com", amount: t } },
    },
  });
}
export { _w as getInstance };
