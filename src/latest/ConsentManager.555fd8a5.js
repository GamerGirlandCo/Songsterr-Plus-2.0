let e;
import { o as t, p as s, v as i, F as n, h as r } from "./preact.294f37c2.js";
import {
  cz as o,
  cA as a,
  L as l,
  u as c,
  cB as u,
  cC as d,
} from "./index.6eeae9f8.js";
class p extends Error {
  constructor(e) {
    super(e), (this.name = "DecodingError");
  }
}
class h extends Error {
  constructor(e) {
    super(e), (this.name = "EncodingError");
  }
}
class m extends Error {
  constructor(e) {
    super(e), (this.name = "GVLError");
  }
}
class g extends Error {
  constructor(e, t, s = "") {
    super(`invalid value ${t} passed for ${e} ${s}`),
      (this.name = "TCModelError");
  }
}
class f {
  static DICT =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
  static REVERSE_DICT = new Map([
    ["A", 0],
    ["B", 1],
    ["C", 2],
    ["D", 3],
    ["E", 4],
    ["F", 5],
    ["G", 6],
    ["H", 7],
    ["I", 8],
    ["J", 9],
    ["K", 10],
    ["L", 11],
    ["M", 12],
    ["N", 13],
    ["O", 14],
    ["P", 15],
    ["Q", 16],
    ["R", 17],
    ["S", 18],
    ["T", 19],
    ["U", 20],
    ["V", 21],
    ["W", 22],
    ["X", 23],
    ["Y", 24],
    ["Z", 25],
    ["a", 26],
    ["b", 27],
    ["c", 28],
    ["d", 29],
    ["e", 30],
    ["f", 31],
    ["g", 32],
    ["h", 33],
    ["i", 34],
    ["j", 35],
    ["k", 36],
    ["l", 37],
    ["m", 38],
    ["n", 39],
    ["o", 40],
    ["p", 41],
    ["q", 42],
    ["r", 43],
    ["s", 44],
    ["t", 45],
    ["u", 46],
    ["v", 47],
    ["w", 48],
    ["x", 49],
    ["y", 50],
    ["z", 51],
    ["0", 52],
    ["1", 53],
    ["2", 54],
    ["3", 55],
    ["4", 56],
    ["5", 57],
    ["6", 58],
    ["7", 59],
    ["8", 60],
    ["9", 61],
    ["-", 62],
    ["_", 63],
  ]);
  static BASIS = 6;
  static LCM = 24;
  static encode(e) {
    if (!/^[0-1]+$/.test(e)) throw new h("Invalid bitField");
    let t = e.length % this.LCM;
    e += t ? "0".repeat(this.LCM - t) : "";
    let s = "";
    for (let t = 0; t < e.length; t += this.BASIS)
      s += this.DICT[parseInt(e.substr(t, this.BASIS), 2)];
    return s;
  }
  static decode(e) {
    if (!/^[A-Za-z0-9\-_]+$/.test(e))
      throw new p("Invalidly encoded Base64URL string");
    let t = "";
    for (let s = 0; s < e.length; s++) {
      let i = this.REVERSE_DICT.get(e[s]).toString(2);
      t += "0".repeat(this.BASIS - i.length) + i;
    }
    return t;
  }
}
class C {
  clone() {
    let e = new this.constructor(),
      t = Object.keys(this);
    return (
      t.forEach((t) => {
        let s = this.deepClone(this[t]);
        void 0 !== s && (e[t] = s);
      }),
      e
    );
  }
  deepClone(e) {
    let t = typeof e;
    if ("number" === t || "string" === t || "boolean" === t) return e;
    if (null !== e && "object" === t) {
      if ("function" == typeof e.clone) return e.clone();
      if (e instanceof Date) return new Date(e.getTime());
      if (void 0 !== e[Symbol.iterator]) {
        let t = [];
        for (let s of e) t.push(this.deepClone(s));
        return e instanceof Array ? t : new e.constructor(t);
      }
      {
        let t = {};
        for (let s in e) e.hasOwnProperty(s) && (t[s] = this.deepClone(e[s]));
        return t;
      }
    }
  }
}
class y extends C {
  root = null;
  isEmpty() {
    return !this.root;
  }
  add(e) {
    let t;
    let s = { value: e, left: null, right: null };
    if (this.isEmpty()) this.root = s;
    else
      for (t = this.root; ; )
        if (e < t.value) {
          if (null === t.left) {
            t.left = s;
            break;
          }
          t = t.left;
        } else if (e > t.value) {
          if (null === t.right) {
            t.right = s;
            break;
          }
          t = t.right;
        } else break;
  }
  get() {
    let e = [],
      t = this.root;
    for (; t; )
      if (t.left) {
        let s = t.left;
        for (; s.right && s.right != t; ) s = s.right;
        s.right == t
          ? ((s.right = null), e.push(t.value), (t = t.right))
          : ((s.right = t), (t = t.left));
      } else e.push(t.value), (t = t.right);
    return e;
  }
  contains(e) {
    let t = !1,
      s = this.root;
    for (; s; ) {
      if (s.value === e) {
        t = !0;
        break;
      }
      e > s.value ? (s = s.right) : e < s.value && (s = s.left);
    }
    return t;
  }
  min() {
    let e,
      t =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : this.root;
    for (; t; ) t.left ? (t = t.left) : ((e = t.value), (t = null));
    return e;
  }
  max() {
    let e,
      t =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : this.root;
    for (; t; ) t.right ? (t = t.right) : ((e = t.value), (t = null));
    return e;
  }
  remove(e) {
    let t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : this.root,
      s = null,
      i = "left";
    for (; t; )
      if (e < t.value) (s = t), (t = t.left), (i = "left");
      else if (e > t.value) (s = t), (t = t.right), (i = "right");
      else {
        if (t.left || t.right) {
          if (t.left) {
            if (t.right) {
              let e = this.min(t.right);
              this.remove(e, t.right), (t.value = e);
            } else s ? (s[i] = t.left) : (this.root = t.left);
          } else s ? (s[i] = t.right) : (this.root = t.right);
        } else s ? (s[i] = null) : (this.root = null);
        t = null;
      }
  }
}
class b {
  static langSet = new Set([
    "BG",
    "CA",
    "CS",
    "DA",
    "DE",
    "EL",
    "EN",
    "ES",
    "ET",
    "FI",
    "FR",
    "HR",
    "HU",
    "IT",
    "JA",
    "LT",
    "LV",
    "MT",
    "NL",
    "NO",
    "PL",
    "PT",
    "RO",
    "RU",
    "SK",
    "SL",
    "SV",
    "TR",
    "ZH",
  ]);
  has(e) {
    return b.langSet.has(e);
  }
  forEach(e) {
    b.langSet.forEach(e);
  }
  get size() {
    return b.langSet.size;
  }
}
class E {
  static cmpId = "cmpId";
  static cmpVersion = "cmpVersion";
  static consentLanguage = "consentLanguage";
  static consentScreen = "consentScreen";
  static created = "created";
  static supportOOB = "supportOOB";
  static isServiceSpecific = "isServiceSpecific";
  static lastUpdated = "lastUpdated";
  static numCustomPurposes = "numCustomPurposes";
  static policyVersion = "policyVersion";
  static publisherCountryCode = "publisherCountryCode";
  static publisherCustomConsents = "publisherCustomConsents";
  static publisherCustomLegitimateInterests =
    "publisherCustomLegitimateInterests";
  static publisherLegitimateInterests = "publisherLegitimateInterests";
  static publisherConsents = "publisherConsents";
  static publisherRestrictions = "publisherRestrictions";
  static purposeConsents = "purposeConsents";
  static purposeLegitimateInterests = "purposeLegitimateInterests";
  static purposeOneTreatment = "purposeOneTreatment";
  static specialFeatureOptins = "specialFeatureOptins";
  static useNonStandardStacks = "useNonStandardStacks";
  static vendorConsents = "vendorConsents";
  static vendorLegitimateInterests = "vendorLegitimateInterests";
  static vendorListVersion = "vendorListVersion";
  static vendorsAllowed = "vendorsAllowed";
  static vendorsDisclosed = "vendorsDisclosed";
  static version = "version";
}
!(function (e) {
  (e[(e.NOT_ALLOWED = 0)] = "NOT_ALLOWED"),
    (e[(e.REQUIRE_CONSENT = 1)] = "REQUIRE_CONSENT"),
    (e[(e.REQUIRE_LI = 2)] = "REQUIRE_LI");
})(H || (H = {}));
class I extends C {
  static hashSeparator = "-";
  purposeId_;
  restrictionType;
  constructor(e, t) {
    super(),
      void 0 !== e && (this.purposeId = e),
      void 0 !== t && (this.restrictionType = t);
  }
  static unHash(e) {
    let t = e.split(this.hashSeparator),
      s = new I();
    if (2 !== t.length) throw new g("hash", e);
    return (
      (s.purposeId = parseInt(t[0], 10)),
      (s.restrictionType = parseInt(t[1], 10)),
      s
    );
  }
  get hash() {
    if (!this.isValid()) throw Error("cannot hash invalid PurposeRestriction");
    return `${this.purposeId}${I.hashSeparator}${this.restrictionType}`;
  }
  get purposeId() {
    return this.purposeId_;
  }
  set purposeId(e) {
    this.purposeId_ = e;
  }
  isValid() {
    return (
      Number.isInteger(this.purposeId) &&
      this.purposeId > 0 &&
      (this.restrictionType === H.NOT_ALLOWED ||
        this.restrictionType === H.REQUIRE_CONSENT ||
        this.restrictionType === H.REQUIRE_LI)
    );
  }
  isSameAs(e) {
    return (
      this.purposeId === e.purposeId &&
      this.restrictionType === e.restrictionType
    );
  }
}
class S extends C {
  bitLength = 0;
  map = new Map();
  gvl_;
  has(e) {
    return this.map.has(e);
  }
  isOkToHave(e, t, s) {
    let i = !0;
    if (this.gvl?.vendors) {
      let n = this.gvl.vendors[s];
      if (n) {
        if (e === H.NOT_ALLOWED)
          i = n.legIntPurposes.includes(t) || n.purposes.includes(t);
        else if (n.flexiblePurposes.length)
          switch (e) {
            case H.REQUIRE_CONSENT:
              i =
                n.flexiblePurposes.includes(t) && n.legIntPurposes.includes(t);
              break;
            case H.REQUIRE_LI:
              i = n.flexiblePurposes.includes(t) && n.purposes.includes(t);
          }
        else i = !1;
      } else i = !1;
    }
    return i;
  }
  add(e, t) {
    if (this.isOkToHave(t.restrictionType, t.purposeId, e)) {
      let s = t.hash;
      this.has(s) || (this.map.set(s, new y()), (this.bitLength = 0)),
        this.map.get(s).add(e);
    }
  }
  restrictPurposeToLegalBasis(e) {
    let t = this.gvl.vendorIds,
      s = e.hash,
      i = (function () {
        let e;
        for (e of t);
        return e;
      })();
    for (let e = 1; e <= i; e++)
      this.has(s) || (this.map.set(s, new y()), (this.bitLength = 0)),
        this.map.get(s).add(e);
  }
  getVendors(e) {
    let t = [];
    if (e) {
      let s = e.hash;
      this.has(s) && (t = this.map.get(s).get());
    } else {
      let e = new Set();
      this.map.forEach((t) => {
        t.get().forEach((t) => {
          e.add(t);
        });
      }),
        (t = Array.from(e));
    }
    return t;
  }
  getRestrictionType(e, t) {
    let s;
    return (
      this.getRestrictions(e).forEach((e) => {
        e.purposeId === t &&
          (void 0 === s || s > e.restrictionType) &&
          (s = e.restrictionType);
      }),
      s
    );
  }
  vendorHasRestriction(e, t) {
    let s = !1,
      i = this.getRestrictions(e);
    for (let e = 0; e < i.length && !s; e++) s = t.isSameAs(i[e]);
    return s;
  }
  getMaxVendorId() {
    let e = 0;
    return (
      this.map.forEach((t) => {
        e = Math.max(t.max(), e);
      }),
      e
    );
  }
  getRestrictions(e) {
    let t = [];
    return (
      this.map.forEach((s, i) => {
        e ? s.contains(e) && t.push(I.unHash(i)) : t.push(I.unHash(i));
      }),
      t
    );
  }
  getPurposes() {
    let e = new Set();
    return (
      this.map.forEach((t, s) => {
        e.add(I.unHash(s).purposeId);
      }),
      Array.from(e)
    );
  }
  remove(e, t) {
    let s = t.hash,
      i = this.map.get(s);
    i &&
      (i.remove(e), i.isEmpty() && (this.map.delete(s), (this.bitLength = 0)));
  }
  set gvl(e) {
    this.gvl_ ||
      ((this.gvl_ = e),
      this.map.forEach((e, t) => {
        let s = I.unHash(t),
          i = e.get();
        i.forEach((t) => {
          this.isOkToHave(s.restrictionType, s.purposeId, t) || e.remove(t);
        });
      }));
  }
  get gvl() {
    return this.gvl_;
  }
  isEmpty() {
    return 0 === this.map.size;
  }
  get numRestrictions() {
    return this.map.size;
  }
}
!(function (e) {
  (e.COOKIE = "cookie"), (e.WEB = "web"), (e.APP = "app");
})(z || (z = {})),
  (function (e) {
    (e.CORE = "core"),
      (e.VENDORS_DISCLOSED = "vendorsDisclosed"),
      (e.VENDORS_ALLOWED = "vendorsAllowed"),
      (e.PUBLISHER_TC = "publisherTC");
  })(j || (j = {}));
class w {
  static ID_TO_KEY = [
    j.CORE,
    j.VENDORS_DISCLOSED,
    j.VENDORS_ALLOWED,
    j.PUBLISHER_TC,
  ];
  static KEY_TO_ID = {
    [j.CORE]: 0,
    [j.VENDORS_DISCLOSED]: 1,
    [j.VENDORS_ALLOWED]: 2,
    [j.PUBLISHER_TC]: 3,
  };
}
class L extends C {
  bitLength = 0;
  maxId_ = 0;
  set_ = new Set();
  *[Symbol.iterator]() {
    for (let e = 1; e <= this.maxId; e++) yield [e, this.has(e)];
  }
  values() {
    return this.set_.values();
  }
  get maxId() {
    return this.maxId_;
  }
  has(e) {
    return this.set_.has(e);
  }
  unset(e) {
    Array.isArray(e)
      ? e.forEach((e) => this.unset(e))
      : "object" == typeof e
      ? this.unset(Object.keys(e).map((e) => Number(e)))
      : (this.set_.delete(Number(e)),
        (this.bitLength = 0),
        e === this.maxId &&
          ((this.maxId_ = 0),
          this.set_.forEach((e) => {
            this.maxId_ = Math.max(this.maxId, e);
          })));
  }
  isIntMap(e) {
    return (
      "object" == typeof e &&
      Object.keys(e).every((t) => {
        let s = Number.isInteger(parseInt(t, 10));
        return (s = s && this.isValidNumber(e[t].id)) && void 0 !== e[t].name;
      })
    );
  }
  isValidNumber(e) {
    return parseInt(e, 10) > 0;
  }
  isSet(e) {
    let t = !1;
    return e instanceof Set && (t = Array.from(e).every(this.isValidNumber)), t;
  }
  set(e) {
    if (Array.isArray(e)) e.forEach((e) => this.set(e));
    else if (this.isSet(e)) this.set(Array.from(e));
    else if (this.isIntMap(e)) this.set(Object.keys(e).map((e) => Number(e)));
    else if (this.isValidNumber(e))
      this.set_.add(e),
        (this.maxId_ = Math.max(this.maxId, e)),
        (this.bitLength = 0);
    else
      throw new g(
        "set()",
        e,
        "must be positive integer array, positive integer, Set<number>, or IntMap"
      );
  }
  empty() {
    this.set_ = new Set();
  }
  forEach(e) {
    for (let t = 1; t <= this.maxId; t++) e(this.has(t), t);
  }
  get size() {
    return this.set_.size;
  }
  setAll(e) {
    this.set(e);
  }
}
class N {
  static [E.cmpId] = 12;
  static [E.cmpVersion] = 12;
  static [E.consentLanguage] = 12;
  static [E.consentScreen] = 6;
  static [E.created] = 36;
  static [E.isServiceSpecific] = 1;
  static [E.lastUpdated] = 36;
  static [E.policyVersion] = 6;
  static [E.publisherCountryCode] = 12;
  static [E.publisherLegitimateInterests] = 24;
  static [E.publisherConsents] = 24;
  static [E.purposeConsents] = 24;
  static [E.purposeLegitimateInterests] = 24;
  static [E.purposeOneTreatment] = 1;
  static [E.specialFeatureOptins] = 12;
  static [E.useNonStandardStacks] = 1;
  static [E.vendorListVersion] = 12;
  static [E.version] = 6;
  static anyBoolean = 1;
  static encodingType = 1;
  static maxId = 16;
  static numCustomPurposes = 6;
  static numEntries = 12;
  static numRestrictions = 12;
  static purposeId = 6;
  static restrictionType = 2;
  static segmentType = 3;
  static singleOrRange = 1;
  static vendorId = 16;
}
class V {
  static encode(e) {
    return String(Number(e));
  }
  static decode(e) {
    return "1" === e;
  }
}
class _ {
  static encode(e, t) {
    let s;
    if (
      ("string" == typeof e && (e = parseInt(e, 10)),
      (s = e.toString(2)).length > t || e < 0)
    )
      throw new h(`${e} too large to encode into ${t}`);
    return s.length < t && (s = "0".repeat(t - s.length) + s), s;
  }
  static decode(e, t) {
    if (t !== e.length) throw new p("invalid bit length");
    return parseInt(e, 2);
  }
}
class A {
  static encode(e, t) {
    return _.encode(Math.round(e.getTime() / 100), t);
  }
  static decode(e, t) {
    if (t !== e.length) throw new p("invalid bit length");
    let s = new Date();
    return s.setTime(100 * _.decode(e, t)), s;
  }
}
class T {
  static encode(e, t) {
    let s = "";
    for (let i = 1; i <= t; i++) s += V.encode(e.has(i));
    return s;
  }
  static decode(e, t) {
    if (e.length !== t) throw new p("bitfield encoding length mismatch");
    let s = new L();
    for (let i = 1; i <= t; i++) V.decode(e[i - 1]) && s.set(i);
    return (s.bitLength = e.length), s;
  }
}
class O {
  static encode(e, t) {
    e = e.toUpperCase();
    let s = e.charCodeAt(0) - 65,
      i = e.charCodeAt(1) - 65;
    if (s < 0 || s > 25 || i < 0 || i > 25)
      throw new h(`invalid language code: ${e}`);
    if (t % 2 == 1) throw new h(`numBits must be even, ${t} is not valid`);
    t /= 2;
    let n = _.encode(s, t),
      r = _.encode(i, t);
    return n + r;
  }
  static decode(e, t) {
    let s;
    if (t !== e.length || e.length % 2)
      throw new p("invalid bit length for language");
    {
      let t = e.length / 2,
        i = _.decode(e.slice(0, t), t) + 65,
        n = _.decode(e.slice(t), t) + 65;
      s = String.fromCharCode(i) + String.fromCharCode(n);
    }
    return s;
  }
}
class P {
  static encode(e) {
    let t = _.encode(e.numRestrictions, N.numRestrictions);
    return (
      e.isEmpty() ||
        e.getRestrictions().forEach((s) => {
          t +=
            _.encode(s.purposeId, N.purposeId) +
            _.encode(s.restrictionType, N.restrictionType);
          let i = e.getVendors(s),
            n = i.length,
            r = 0,
            o = 0,
            a = "";
          for (let t = 0; t < n; t++) {
            let s = i[t];
            0 === o && (r++, (o = s));
            let l = i[n - 1],
              c = e.gvl.vendorIds,
              u = (e) => {
                for (; ++e <= l && !c.has(e); );
                return e;
              };
            if (t === n - 1 || i[t + 1] > u(s)) {
              let e = s !== o;
              (a += V.encode(e) + _.encode(o, N.vendorId)),
                e && (a += _.encode(s, N.vendorId)),
                (o = 0);
            }
          }
          t += _.encode(r, N.numEntries) + a;
        }),
      t
    );
  }
  static decode(e) {
    let t = 0,
      s = new S(),
      i = _.decode(e.substr(t, N.numRestrictions), N.numRestrictions);
    t += N.numRestrictions;
    for (let n = 0; n < i; n++) {
      let i = _.decode(e.substr(t, N.purposeId), N.purposeId);
      t += N.purposeId;
      let n = _.decode(e.substr(t, N.restrictionType), N.restrictionType);
      t += N.restrictionType;
      let r = new I(i, n),
        o = _.decode(e.substr(t, N.numEntries), N.numEntries);
      t += N.numEntries;
      for (let i = 0; i < o; i++) {
        let i = V.decode(e.substr(t, N.anyBoolean));
        t += N.anyBoolean;
        let n = _.decode(e.substr(t, N.vendorId), N.vendorId);
        if (((t += N.vendorId), i)) {
          let i = _.decode(e.substr(t, N.vendorId), N.vendorId);
          if (((t += N.vendorId), i < n))
            throw new p(
              `Invalid RangeEntry: endVendorId ${i} is less than ${n}`
            );
          for (let e = n; e <= i; e++) s.add(e, r);
        } else s.add(n, r);
      }
    }
    return (s.bitLength = t), s;
  }
}
!(function (e) {
  (e[(e.FIELD = 0)] = "FIELD"), (e[(e.RANGE = 1)] = "RANGE");
})($ || ($ = {}));
class R {
  static encode(e) {
    let t;
    let s = [],
      i = [],
      n = _.encode(e.maxId, N.maxId),
      r = "",
      o = N.maxId + N.encodingType,
      a = o + e.maxId,
      l = 2 * N.vendorId + N.singleOrRange + N.numEntries,
      c = o + N.numEntries;
    return (
      e.forEach((n, o) => {
        if (((r += V.encode(n)), (t = e.maxId > l && c < a) && n)) {
          let t = e.has(o + 1);
          t
            ? 0 === i.length && (i.push(o), (c += N.singleOrRange + N.vendorId))
            : (i.push(o), (c += N.vendorId), s.push(i), (i = []));
        }
      }),
      t
        ? (n += String($.RANGE) + this.buildRangeEncoding(s))
        : (n += String($.FIELD) + r),
      n
    );
  }
  static decode(e, t) {
    let s;
    let i = 0,
      n = _.decode(e.substr(i, N.maxId), N.maxId);
    i += N.maxId;
    let r = _.decode(e.charAt(i), N.encodingType);
    if (((i += N.encodingType), r === $.RANGE)) {
      if (((s = new L()), 1 === t)) {
        if ("1" === e.substr(i, 1))
          throw new p("Unable to decode default consent=1");
        i++;
      }
      let n = _.decode(e.substr(i, N.numEntries), N.numEntries);
      i += N.numEntries;
      for (let t = 0; t < n; t++) {
        let t = V.decode(e.charAt(i));
        i += N.singleOrRange;
        let n = _.decode(e.substr(i, N.vendorId), N.vendorId);
        if (((i += N.vendorId), t)) {
          let t = _.decode(e.substr(i, N.vendorId), N.vendorId);
          i += N.vendorId;
          for (let e = n; e <= t; e++) s.set(e);
        } else s.set(n);
      }
    } else {
      let t = e.substr(i, n);
      (i += n), (s = T.decode(t, n));
    }
    return (s.bitLength = i), s;
  }
  static buildRangeEncoding(e) {
    let t = e.length,
      s = _.encode(t, N.numEntries);
    return (
      e.forEach((e) => {
        let t = 1 === e.length;
        (s += V.encode(!t) + _.encode(e[0], N.vendorId)),
          t || (s += _.encode(e[1], N.vendorId));
      }),
      s
    );
  }
}
function x() {
  return {
    [E.version]: _,
    [E.created]: A,
    [E.lastUpdated]: A,
    [E.cmpId]: _,
    [E.cmpVersion]: _,
    [E.consentScreen]: _,
    [E.consentLanguage]: O,
    [E.vendorListVersion]: _,
    [E.policyVersion]: _,
    [E.isServiceSpecific]: V,
    [E.useNonStandardStacks]: V,
    [E.specialFeatureOptins]: T,
    [E.purposeConsents]: T,
    [E.purposeLegitimateInterests]: T,
    [E.purposeOneTreatment]: V,
    [E.publisherCountryCode]: O,
    [E.vendorConsents]: R,
    [E.vendorLegitimateInterests]: R,
    [E.publisherRestrictions]: P,
    segmentType: _,
    [E.vendorsDisclosed]: R,
    [E.vendorsAllowed]: R,
    [E.publisherConsents]: T,
    [E.publisherLegitimateInterests]: T,
    [E.numCustomPurposes]: _,
    [E.publisherCustomConsents]: T,
    [E.publisherCustomLegitimateInterests]: T,
  };
}
class k {
  1 = {
    [j.CORE]: [
      E.version,
      E.created,
      E.lastUpdated,
      E.cmpId,
      E.cmpVersion,
      E.consentScreen,
      E.consentLanguage,
      E.vendorListVersion,
      E.purposeConsents,
      E.vendorConsents,
    ],
  };
  2 = {
    [j.CORE]: [
      E.version,
      E.created,
      E.lastUpdated,
      E.cmpId,
      E.cmpVersion,
      E.consentScreen,
      E.consentLanguage,
      E.vendorListVersion,
      E.policyVersion,
      E.isServiceSpecific,
      E.useNonStandardStacks,
      E.specialFeatureOptins,
      E.purposeConsents,
      E.purposeLegitimateInterests,
      E.purposeOneTreatment,
      E.publisherCountryCode,
      E.vendorConsents,
      E.vendorLegitimateInterests,
      E.publisherRestrictions,
    ],
    [j.PUBLISHER_TC]: [
      E.publisherConsents,
      E.publisherLegitimateInterests,
      E.numCustomPurposes,
      E.publisherCustomConsents,
      E.publisherCustomLegitimateInterests,
    ],
    [j.VENDORS_ALLOWED]: [E.vendorsAllowed],
    [j.VENDORS_DISCLOSED]: [E.vendorsDisclosed],
  };
}
class D {
  1 = [j.CORE];
  2 = [j.CORE];
  constructor(e, t) {
    if (2 === e.version) {
      if (e.isServiceSpecific) this["2"].push(j.PUBLISHER_TC);
      else {
        let s = !!(t && t.isForVendors);
        (s && !0 !== e[E.supportOOB]) || this["2"].push(j.VENDORS_DISCLOSED),
          s &&
            (e[E.supportOOB] &&
              e[E.vendorsAllowed].size > 0 &&
              this["2"].push(j.VENDORS_ALLOWED),
            this["2"].push(j.PUBLISHER_TC));
      }
    }
  }
}
class M {
  static fieldSequence = new k();
  static encode(e, t) {
    let s;
    try {
      s = this.fieldSequence[String(e.version)][t];
    } catch (s) {
      throw new h(`Unable to encode version: ${e.version}, segment: ${t}`);
    }
    let i = "";
    t !== j.CORE && (i = _.encode(w.KEY_TO_ID[t], N.segmentType));
    let n = x();
    return (
      s.forEach((s) => {
        let r = e[s],
          o = n[s],
          a = N[s];
        void 0 === a &&
          this.isPublisherCustom(s) &&
          (a = Number(e[E.numCustomPurposes]));
        try {
          i += o.encode(r, a);
        } catch (e) {
          throw new h(`Error encoding ${t}->${s}: ${e.message}`);
        }
      }),
      f.encode(i)
    );
  }
  static decode(e, t, s) {
    let i = f.decode(e),
      n = 0;
    s === j.CORE &&
      (t.version = _.decode(i.substr(n, N[E.version]), N[E.version])),
      s !== j.CORE && (n += N.segmentType);
    let r = this.fieldSequence[String(t.version)][s],
      o = x();
    return (
      r.forEach((e) => {
        let s = o[e],
          r = N[e];
        if (
          (void 0 === r &&
            this.isPublisherCustom(e) &&
            (r = Number(t[E.numCustomPurposes])),
          0 !== r)
        ) {
          let o = i.substr(n, r);
          if (
            (s === R
              ? (t[e] = s.decode(o, t.version))
              : (t[e] = s.decode(o, r)),
            Number.isInteger(r))
          )
            n += r;
          else if (Number.isInteger(t[e].bitLength)) n += t[e].bitLength;
          else throw new p(e);
        }
      }),
      t
    );
  }
  static isPublisherCustom(e) {
    return 0 === e.indexOf("publisherCustom");
  }
}
class U {
  static processor = [
    (e) => e,
    (e, t) => {
      (e.publisherRestrictions.gvl = t), e.purposeLegitimateInterests.unset(1);
      let s = new Map();
      return (
        s.set("legIntPurposes", e.vendorLegitimateInterests),
        s.set("purposes", e.vendorConsents),
        s.forEach((s, i) => {
          s.forEach((n, r) => {
            if (n) {
              let n = t.vendors[r];
              if (!n || n.deletedDate) s.unset(r);
              else if (0 === n[i].length) {
                if (
                  "legIntPurposes" === i &&
                  0 === n.purposes.length &&
                  0 === n.legIntPurposes.length &&
                  n.specialPurposes.length > 0
                );
                else if (e.isServiceSpecific) {
                  if (0 === n.flexiblePurposes.length) s.unset(r);
                  else {
                    let t = e.publisherRestrictions.getRestrictions(r),
                      n = !1;
                    for (let e = 0, s = t.length; e < s && !n; e++)
                      n =
                        (t[e].restrictionType === H.REQUIRE_CONSENT &&
                          "purposes" === i) ||
                        (t[e].restrictionType === H.REQUIRE_LI &&
                          "legIntPurposes" === i);
                    n || s.unset(r);
                  }
                } else s.unset(r);
              }
            }
          });
        }),
        e.vendorsDisclosed.set(t.vendors),
        e
      );
    },
  ];
  static process(e, t) {
    let s = e.gvl;
    if (!s) throw new h("Unable to encode TCModel without a GVL");
    if (!s.isReady)
      throw new h(
        "Unable to encode TCModel tcModel.gvl.readyPromise is not resolved"
      );
    ((e = e.clone()).consentLanguage = s.language.toUpperCase()),
      t?.version > 0 && t?.version <= this.processor.length
        ? (e.version = t.version)
        : (e.version = this.processor.length);
    let i = e.version - 1;
    if (!this.processor[i]) throw new h(`Invalid version: ${e.version}`);
    return this.processor[i](e, s);
  }
}
class F {
  static absCall(e, t, s, i) {
    return new Promise((n, r) => {
      let o = new XMLHttpRequest(),
        a = () => {
          if (o.readyState == XMLHttpRequest.DONE) {
            if (o.status >= 200 && o.status < 300) {
              let e = o.response;
              if ("string" == typeof e)
                try {
                  e = JSON.parse(e);
                } catch (e) {}
              n(e);
            } else
              r(
                Error(
                  `HTTP Status: ${o.status} response type: ${o.responseType}`
                )
              );
          }
        },
        l = () => {
          r(Error("error"));
        },
        c = () => {
          r(Error("aborted"));
        },
        u = () => {
          r(Error("Timeout " + i + "ms " + e));
        };
      (o.withCredentials = s),
        o.addEventListener("load", a),
        o.addEventListener("error", l),
        o.addEventListener("abort", c),
        null === t ? o.open("GET", e, !0) : o.open("POST", e, !0),
        (o.responseType = "json"),
        (o.timeout = i),
        (o.ontimeout = u),
        o.send(t);
    });
  }
  static post(e, t) {
    let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    return this.absCall(e, JSON.stringify(t), s, i);
  }
  static fetch(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
    return this.absCall(e, null, t, s);
  }
}
class B extends C {
  static LANGUAGE_CACHE = new Map();
  static CACHE = new Map();
  static LATEST_CACHE_KEY = 0;
  static DEFAULT_LANGUAGE = "EN";
  static consentLanguages = new b();
  static baseUrl_;
  static set baseUrl(e) {
    if (/^https?:\/\/vendorlist\.consensu\.org\//.test(e))
      throw new m(
        "Invalid baseUrl!  You may not pull directly from vendorlist.consensu.org and must provide your own cache"
      );
    e.length > 0 && "/" !== e[e.length - 1] && (e += "/"), (this.baseUrl_ = e);
  }
  static get baseUrl() {
    return this.baseUrl_;
  }
  static latestFilename = "vendor-list.json";
  static versionedFilename = "archives/vendor-list-v[VERSION].json";
  static languageFilename = "purposes-[LANG].json";
  readyPromise;
  gvlSpecificationVersion;
  vendorListVersion;
  tcfPolicyVersion;
  lastUpdated;
  purposes;
  specialPurposes;
  features;
  specialFeatures;
  isReady_ = !1;
  vendors_;
  vendorIds;
  fullVendorList;
  byPurposeVendorMap;
  bySpecialPurposeVendorMap;
  byFeatureVendorMap;
  bySpecialFeatureVendorMap;
  stacks;
  lang_;
  isLatest = !1;
  constructor(e) {
    super();
    let t = B.baseUrl;
    if (((this.lang_ = B.DEFAULT_LANGUAGE), this.isVendorList(e)))
      this.populate(e), (this.readyPromise = Promise.resolve());
    else {
      if (!t) throw new m("must specify GVL.baseUrl before loading GVL json");
      e > 0
        ? B.CACHE.has(e)
          ? (this.populate(B.CACHE.get(e)),
            (this.readyPromise = Promise.resolve()))
          : ((t += B.versionedFilename.replace("[VERSION]", String(e))),
            (this.readyPromise = this.fetchJson(t)))
        : B.CACHE.has(B.LATEST_CACHE_KEY)
        ? (this.populate(B.CACHE.get(B.LATEST_CACHE_KEY)),
          (this.readyPromise = Promise.resolve()))
        : ((this.isLatest = !0),
          (this.readyPromise = this.fetchJson(t + B.latestFilename)));
    }
  }
  static emptyLanguageCache(e) {
    let t = !1;
    return (
      void 0 === e && B.LANGUAGE_CACHE.size > 0
        ? ((B.LANGUAGE_CACHE = new Map()), (t = !0))
        : "string" == typeof e &&
          this.consentLanguages.has(e.toUpperCase()) &&
          (B.LANGUAGE_CACHE.delete(e.toUpperCase()), (t = !0)),
      t
    );
  }
  static emptyCache(e) {
    let t = !1;
    return (
      Number.isInteger(e) && e >= 0
        ? (B.CACHE.delete(e), (t = !0))
        : void 0 === e && ((B.CACHE = new Map()), (t = !0)),
      t
    );
  }
  cacheLanguage() {
    B.LANGUAGE_CACHE.has(this.lang_) ||
      B.LANGUAGE_CACHE.set(this.lang_, {
        purposes: this.purposes,
        specialPurposes: this.specialPurposes,
        features: this.features,
        specialFeatures: this.specialFeatures,
        stacks: this.stacks,
      });
  }
  async fetchJson(e) {
    try {
      this.populate(await F.fetch(e));
    } catch (e) {
      throw new m(e.message);
    }
  }
  getJson() {
    return JSON.parse(
      JSON.stringify({
        gvlSpecificationVersion: this.gvlSpecificationVersion,
        vendorListVersion: this.vendorListVersion,
        tcfPolicyVersion: this.tcfPolicyVersion,
        lastUpdated: this.lastUpdated,
        purposes: this.purposes,
        specialPurposes: this.specialPurposes,
        features: this.features,
        specialFeatures: this.specialFeatures,
        stacks: this.stacks,
        vendors: this.fullVendorList,
      })
    );
  }
  async changeLanguage(e) {
    let t = e.toUpperCase();
    if (B.consentLanguages.has(t)) {
      if (t !== this.lang_) {
        if (((this.lang_ = t), B.LANGUAGE_CACHE.has(t))) {
          let e = B.LANGUAGE_CACHE.get(t);
          for (let t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
        } else {
          let t = B.baseUrl + B.languageFilename.replace("[LANG]", e);
          try {
            await this.fetchJson(t), this.cacheLanguage();
          } catch (e) {
            throw new m("unable to load language: " + e.message);
          }
        }
      }
    } else throw new m(`unsupported language ${e}`);
  }
  get language() {
    return this.lang_;
  }
  isVendorList(e) {
    return void 0 !== e && void 0 !== e.vendors;
  }
  populate(e) {
    (this.purposes = e.purposes),
      (this.specialPurposes = e.specialPurposes),
      (this.features = e.features),
      (this.specialFeatures = e.specialFeatures),
      (this.stacks = e.stacks),
      this.isVendorList(e) &&
        ((this.gvlSpecificationVersion = e.gvlSpecificationVersion),
        (this.tcfPolicyVersion = e.tcfPolicyVersion),
        (this.vendorListVersion = e.vendorListVersion),
        (this.lastUpdated = e.lastUpdated),
        "string" == typeof this.lastUpdated &&
          (this.lastUpdated = new Date(this.lastUpdated)),
        (this.vendors_ = e.vendors),
        (this.fullVendorList = e.vendors),
        this.mapVendors(),
        (this.isReady_ = !0),
        this.isLatest && B.CACHE.set(B.LATEST_CACHE_KEY, this.getJson()),
        B.CACHE.has(this.vendorListVersion) ||
          B.CACHE.set(this.vendorListVersion, this.getJson())),
      this.cacheLanguage();
  }
  mapVendors(e) {
    (this.byPurposeVendorMap = {}),
      (this.bySpecialPurposeVendorMap = {}),
      (this.byFeatureVendorMap = {}),
      (this.bySpecialFeatureVendorMap = {}),
      Object.keys(this.purposes).forEach((e) => {
        this.byPurposeVendorMap[e] = {
          legInt: new Set(),
          consent: new Set(),
          flexible: new Set(),
        };
      }),
      Object.keys(this.specialPurposes).forEach((e) => {
        this.bySpecialPurposeVendorMap[e] = new Set();
      }),
      Object.keys(this.features).forEach((e) => {
        this.byFeatureVendorMap[e] = new Set();
      }),
      Object.keys(this.specialFeatures).forEach((e) => {
        this.bySpecialFeatureVendorMap[e] = new Set();
      }),
      Array.isArray(e) || (e = Object.keys(this.fullVendorList).map((e) => +e)),
      (this.vendorIds = new Set(e)),
      (this.vendors_ = e.reduce((e, t) => {
        let s = this.vendors_[String(t)];
        return (
          s &&
            void 0 === s.deletedDate &&
            (s.purposes.forEach((e) => {
              let s = this.byPurposeVendorMap[String(e)];
              s.consent.add(t);
            }),
            s.specialPurposes.forEach((e) => {
              this.bySpecialPurposeVendorMap[String(e)].add(t);
            }),
            s.legIntPurposes.forEach((e) => {
              this.byPurposeVendorMap[String(e)].legInt.add(t);
            }),
            s.flexiblePurposes &&
              s.flexiblePurposes.forEach((e) => {
                this.byPurposeVendorMap[String(e)].flexible.add(t);
              }),
            s.features.forEach((e) => {
              this.byFeatureVendorMap[String(e)].add(t);
            }),
            s.specialFeatures.forEach((e) => {
              this.bySpecialFeatureVendorMap[String(e)].add(t);
            }),
            (e[t] = s)),
          e
        );
      }, {}));
  }
  getFilteredVendors(e, t, s, i) {
    let n = e.charAt(0).toUpperCase() + e.slice(1),
      r = {};
    return (
      ("purpose" === e && s
        ? this["by" + n + "VendorMap"][String(t)][s]
        : this["by" + (i ? "Special" : "") + n + "VendorMap"][String(t)]
      ).forEach((e) => {
        r[String(e)] = this.vendors[String(e)];
      }),
      r
    );
  }
  getVendorsWithConsentPurpose(e) {
    return this.getFilteredVendors("purpose", e, "consent");
  }
  getVendorsWithLegIntPurpose(e) {
    return this.getFilteredVendors("purpose", e, "legInt");
  }
  getVendorsWithFlexiblePurpose(e) {
    return this.getFilteredVendors("purpose", e, "flexible");
  }
  getVendorsWithSpecialPurpose(e) {
    return this.getFilteredVendors("purpose", e, void 0, !0);
  }
  getVendorsWithFeature(e) {
    return this.getFilteredVendors("feature", e);
  }
  getVendorsWithSpecialFeature(e) {
    return this.getFilteredVendors("feature", e, void 0, !0);
  }
  get vendors() {
    return this.vendors_;
  }
  narrowVendorsTo(e) {
    this.mapVendors(e);
  }
  get isReady() {
    return this.isReady_;
  }
  clone() {
    let e = new B(this.getJson());
    return this.lang_ !== B.DEFAULT_LANGUAGE && e.changeLanguage(this.lang_), e;
  }
  static isInstanceOf(e) {
    return "object" == typeof e && "function" == typeof e.narrowVendorsTo;
  }
}
class q extends C {
  static consentLanguages = B.consentLanguages;
  isServiceSpecific_ = !1;
  supportOOB_ = !0;
  useNonStandardStacks_ = !1;
  purposeOneTreatment_ = !1;
  publisherCountryCode_ = "AA";
  version_ = 2;
  consentScreen_ = 0;
  policyVersion_ = 2;
  consentLanguage_ = "EN";
  cmpId_ = 0;
  cmpVersion_ = 0;
  vendorListVersion_ = 0;
  numCustomPurposes_ = 0;
  gvl_;
  created;
  lastUpdated;
  specialFeatureOptins = new L();
  purposeConsents = new L();
  purposeLegitimateInterests = new L();
  publisherConsents = new L();
  publisherLegitimateInterests = new L();
  publisherCustomConsents = new L();
  publisherCustomLegitimateInterests = new L();
  customPurposes;
  vendorConsents = new L();
  vendorLegitimateInterests = new L();
  vendorsDisclosed = new L();
  vendorsAllowed = new L();
  publisherRestrictions = new S();
  constructor(e) {
    super(), e && (this.gvl = e), this.updated();
  }
  set gvl(e) {
    B.isInstanceOf(e) || (e = new B(e)),
      (this.gvl_ = e),
      (this.publisherRestrictions.gvl = e);
  }
  get gvl() {
    return this.gvl_;
  }
  set cmpId(e) {
    if (Number.isInteger((e = Number(e))) && e > 1) this.cmpId_ = e;
    else throw new g("cmpId", e);
  }
  get cmpId() {
    return this.cmpId_;
  }
  set cmpVersion(e) {
    if (Number.isInteger((e = Number(e))) && e > -1) this.cmpVersion_ = e;
    else throw new g("cmpVersion", e);
  }
  get cmpVersion() {
    return this.cmpVersion_;
  }
  set consentScreen(e) {
    if (Number.isInteger((e = Number(e))) && e > -1) this.consentScreen_ = e;
    else throw new g("consentScreen", e);
  }
  get consentScreen() {
    return this.consentScreen_;
  }
  set consentLanguage(e) {
    this.consentLanguage_ = e;
  }
  get consentLanguage() {
    return this.consentLanguage_;
  }
  set publisherCountryCode(e) {
    if (/^([A-z]){2}$/.test(e)) this.publisherCountryCode_ = e.toUpperCase();
    else throw new g("publisherCountryCode", e);
  }
  get publisherCountryCode() {
    return this.publisherCountryCode_;
  }
  set vendorListVersion(e) {
    if ((e = Number(e) >> 0) < 0) throw new g("vendorListVersion", e);
    this.vendorListVersion_ = e;
  }
  get vendorListVersion() {
    return this.gvl ? this.gvl.vendorListVersion : this.vendorListVersion_;
  }
  set policyVersion(e) {
    if (((this.policyVersion_ = parseInt(e, 10)), this.policyVersion_ < 0))
      throw new g("policyVersion", e);
  }
  get policyVersion() {
    return this.gvl ? this.gvl.tcfPolicyVersion : this.policyVersion_;
  }
  set version(e) {
    this.version_ = parseInt(e, 10);
  }
  get version() {
    return this.version_;
  }
  set isServiceSpecific(e) {
    this.isServiceSpecific_ = e;
  }
  get isServiceSpecific() {
    return this.isServiceSpecific_;
  }
  set useNonStandardStacks(e) {
    this.useNonStandardStacks_ = e;
  }
  get useNonStandardStacks() {
    return this.useNonStandardStacks_;
  }
  set supportOOB(e) {
    this.supportOOB_ = e;
  }
  get supportOOB() {
    return this.supportOOB_;
  }
  set purposeOneTreatment(e) {
    this.purposeOneTreatment_ = e;
  }
  get purposeOneTreatment() {
    return this.purposeOneTreatment_;
  }
  setAllVendorConsents() {
    this.vendorConsents.set(this.gvl.vendors);
  }
  unsetAllVendorConsents() {
    this.vendorConsents.empty();
  }
  setAllVendorsDisclosed() {
    this.vendorsDisclosed.set(this.gvl.vendors);
  }
  unsetAllVendorsDisclosed() {
    this.vendorsDisclosed.empty();
  }
  setAllVendorsAllowed() {
    this.vendorsAllowed.set(this.gvl.vendors);
  }
  unsetAllVendorsAllowed() {
    this.vendorsAllowed.empty();
  }
  setAllVendorLegitimateInterests() {
    this.vendorLegitimateInterests.set(this.gvl.vendors);
  }
  unsetAllVendorLegitimateInterests() {
    this.vendorLegitimateInterests.empty();
  }
  setAllPurposeConsents() {
    this.purposeConsents.set(this.gvl.purposes);
  }
  unsetAllPurposeConsents() {
    this.purposeConsents.empty();
  }
  setAllPurposeLegitimateInterests() {
    this.purposeLegitimateInterests.set(this.gvl.purposes);
  }
  unsetAllPurposeLegitimateInterests() {
    this.purposeLegitimateInterests.empty();
  }
  setAllSpecialFeatureOptins() {
    this.specialFeatureOptins.set(this.gvl.specialFeatures);
  }
  unsetAllSpecialFeatureOptins() {
    this.specialFeatureOptins.empty();
  }
  setAll() {
    this.setAllVendorConsents(),
      this.setAllPurposeLegitimateInterests(),
      this.setAllSpecialFeatureOptins(),
      this.setAllPurposeConsents(),
      this.setAllVendorLegitimateInterests();
  }
  unsetAll() {
    this.unsetAllVendorConsents(),
      this.unsetAllPurposeLegitimateInterests(),
      this.unsetAllSpecialFeatureOptins(),
      this.unsetAllPurposeConsents(),
      this.unsetAllVendorLegitimateInterests();
  }
  get numCustomPurposes() {
    let e = this.numCustomPurposes_;
    if ("object" == typeof this.customPurposes) {
      let t = Object.keys(this.customPurposes).sort(
        (e, t) => Number(e) - Number(t)
      );
      e = parseInt(t.pop(), 10);
    }
    return e;
  }
  set numCustomPurposes(e) {
    if (
      ((this.numCustomPurposes_ = parseInt(e, 10)), this.numCustomPurposes_ < 0)
    )
      throw new g("numCustomPurposes", e);
  }
  updated() {
    let e = new Date(),
      t = new Date(
        Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate())
      );
    (this.created = t), (this.lastUpdated = t);
  }
}
class G {
  static encode(e, t) {
    let s,
      i = "";
    return (
      (e = U.process(e, t)),
      (s = Array.isArray(t?.segments)
        ? t.segments
        : new D(e, t)["" + e.version]).forEach((t, n) => {
        let r = "";
        n < s.length - 1 && (r = "."), (i += M.encode(e, t) + r);
      }),
      i
    );
  }
  static decode(e, t) {
    let s = e.split("."),
      i = s.length;
    t || (t = new q());
    for (let e = 0; e < i; e++) {
      let i = s[e],
        n = f.decode(i.charAt(0)),
        r = n.substr(0, N.segmentType),
        o = w.ID_TO_KEY[_.decode(r, N.segmentType).toString()];
      M.decode(i, t, o);
    }
    return t;
  }
}
var H,
  z,
  j,
  $,
  Q,
  W,
  Y,
  J,
  K = {},
  X = {
    get exports() {
      return K;
    },
    set exports(v) {
      K = v;
    },
  };
!(function (e) {
  function t(e) {
    return (t =
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
          })(e);
  }
  e.exports = function () {
    for (var e, s, i = [], n = window, r = n; r; ) {
      try {
        if (r.frames.__tcfapiLocator) {
          e = r;
          break;
        }
      } catch (e) {}
      if (r === n.top) break;
      r = r.parent;
    }
    e ||
      (!(function e() {
        var t = n.document,
          s = !!n.frames.__tcfapiLocator;
        if (!s) {
          if (t.body) {
            var i = t.createElement("iframe");
            (i.style.cssText = "display:none"),
              (i.name = "__tcfapiLocator"),
              t.body.appendChild(i);
          } else setTimeout(e, 5);
        }
        return !s;
      })(),
      (n.__tcfapi = function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        if (!t.length) return i;
        "setGdprApplies" === t[0]
          ? t.length > 3 &&
            2 === parseInt(t[1], 10) &&
            "boolean" == typeof t[3] &&
            ((s = t[3]), "function" == typeof t[2] && t[2]("set", !0))
          : "ping" === t[0]
          ? "function" == typeof t[2] &&
            t[2]({ gdprApplies: s, cmpLoaded: !1, cmpStatus: "stub" })
          : i.push(t);
      }),
      n.addEventListener(
        "message",
        function (e) {
          var s = "string" == typeof e.data,
            i = {};
          if (s)
            try {
              i = JSON.parse(e.data);
            } catch (e) {}
          else i = e.data;
          var n = "object" === t(i) ? i.__tcfapiCall : null;
          n &&
            window.__tcfapi(
              n.command,
              n.version,
              function (t, i) {
                var r = {
                  __tcfapiReturn: {
                    returnValue: t,
                    success: i,
                    callId: n.callId,
                  },
                };
                e &&
                  e.source &&
                  e.source.postMessage &&
                  e.source.postMessage(s ? JSON.stringify(r) : r, "*");
              },
              n.parameter
            );
        },
        !1
      ));
  };
})(X);
var Z = K;
!(function (e) {
  (e.PING = "ping"),
    (e.GET_TC_DATA = "getTCData"),
    (e.GET_IN_APP_TC_DATA = "getInAppTCData"),
    (e.GET_VENDOR_LIST = "getVendorList"),
    (e.ADD_EVENT_LISTENER = "addEventListener"),
    (e.REMOVE_EVENT_LISTENER = "removeEventListener");
})(Q || (Q = {})),
  (function (e) {
    (e.STUB = "stub"),
      (e.LOADING = "loading"),
      (e.LOADED = "loaded"),
      (e.ERROR = "error");
  })(W || (W = {})),
  (function (e) {
    (e.VISIBLE = "visible"), (e.HIDDEN = "hidden"), (e.DISABLED = "disabled");
  })(Y || (Y = {})),
  (function (e) {
    (e.TC_LOADED = "tcloaded"),
      (e.CMP_UI_SHOWN = "cmpuishown"),
      (e.USER_ACTION_COMPLETE = "useractioncomplete");
  })(J || (J = {}));
class ee {
  listenerId;
  callback;
  next;
  param;
  success = !0;
  constructor(e, t, s, i) {
    Object.assign(this, { callback: e, listenerId: s, param: t, next: i });
    try {
      this.respond();
    } catch (e) {
      this.invokeCallback(null);
    }
  }
  invokeCallback(e) {
    let t = null !== e;
    "function" == typeof this.next
      ? this.callback(this.next, e, t)
      : this.callback(e, t);
  }
}
class et extends ee {
  respond() {
    this.throwIfParamInvalid(),
      this.invokeCallback(new eo(this.param, this.listenerId));
  }
  throwIfParamInvalid() {
    if (
      void 0 !== this.param &&
      (!Array.isArray(this.param) || !this.param.every(Number.isInteger))
    )
      throw Error("Invalid Parameter");
  }
}
class es {
  eventQueue = new Map();
  queueNumber = 0;
  add(e) {
    return this.eventQueue.set(this.queueNumber, e), this.queueNumber++;
  }
  remove(e) {
    return this.eventQueue.delete(e);
  }
  exec() {
    this.eventQueue.forEach((e, t) => {
      new et(e.callback, e.param, t, e.next);
    });
  }
  clear() {
    (this.queueNumber = 0), this.eventQueue.clear();
  }
  get size() {
    return this.eventQueue.size;
  }
}
class ei {
  static apiVersion = "2";
  static tcfPolicyVersion;
  static eventQueue = new es();
  static cmpStatus = W.LOADING;
  static disabled = !1;
  static displayStatus = Y.HIDDEN;
  static cmpId;
  static cmpVersion;
  static eventStatus;
  static gdprApplies;
  static tcModel;
  static tcString;
  static reset() {
    delete this.cmpId,
      delete this.cmpVersion,
      delete this.eventStatus,
      delete this.gdprApplies,
      delete this.tcModel,
      delete this.tcString,
      delete this.tcfPolicyVersion,
      (this.cmpStatus = W.LOADING),
      (this.disabled = !1),
      (this.displayStatus = Y.HIDDEN),
      this.eventQueue.clear();
  }
}
class en {
  cmpId = ei.cmpId;
  cmpVersion = ei.cmpVersion;
  gdprApplies = ei.gdprApplies;
  tcfPolicyVersion = ei.tcfPolicyVersion;
}
class er extends en {
  cmpStatus = W.ERROR;
}
class eo extends en {
  tcString;
  listenerId;
  eventStatus;
  cmpStatus;
  isServiceSpecific;
  useNonStandardStacks;
  publisherCC;
  purposeOneTreatment;
  outOfBand;
  purpose;
  vendor;
  specialFeatureOptins;
  publisher;
  constructor(e, t) {
    if (
      (super(),
      (this.eventStatus = ei.eventStatus),
      (this.cmpStatus = ei.cmpStatus),
      (this.listenerId = t),
      ei.gdprApplies)
    ) {
      let t = ei.tcModel;
      (this.tcString = ei.tcString),
        (this.isServiceSpecific = t.isServiceSpecific),
        (this.useNonStandardStacks = t.useNonStandardStacks),
        (this.purposeOneTreatment = t.purposeOneTreatment),
        (this.publisherCC = t.publisherCountryCode),
        (this.outOfBand = {
          allowedVendors: this.createVectorField(t.vendorsAllowed, e),
          disclosedVendors: this.createVectorField(t.vendorsDisclosed, e),
        }),
        (this.purpose = {
          consents: this.createVectorField(t.purposeConsents),
          legitimateInterests: this.createVectorField(
            t.purposeLegitimateInterests
          ),
        }),
        (this.vendor = {
          consents: this.createVectorField(t.vendorConsents, e),
          legitimateInterests: this.createVectorField(
            t.vendorLegitimateInterests,
            e
          ),
        }),
        (this.specialFeatureOptins = this.createVectorField(
          t.specialFeatureOptins
        )),
        (this.publisher = {
          consents: this.createVectorField(t.publisherConsents),
          legitimateInterests: this.createVectorField(
            t.publisherLegitimateInterests
          ),
          customPurpose: {
            consents: this.createVectorField(t.publisherCustomConsents),
            legitimateInterests: this.createVectorField(
              t.publisherCustomLegitimateInterests
            ),
          },
          restrictions: this.createRestrictions(t.publisherRestrictions),
        });
    }
  }
  createRestrictions(e) {
    let t = {};
    if (e.numRestrictions > 0) {
      let s = e.getMaxVendorId();
      for (let i = 1; i <= s; i++) {
        let s = i.toString();
        e.getRestrictions(i).forEach((e) => {
          let i = e.purposeId.toString();
          t[i] || (t[i] = {}), (t[i][s] = e.restrictionType);
        });
      }
    }
    return t;
  }
  createVectorField(e, t) {
    return t
      ? t.reduce((t, s) => ((t[String(s)] = e.has(Number(s))), t), {})
      : [...e].reduce((e, t) => ((e[t[0].toString(10)] = t[1]), e), {});
  }
}
class ea extends eo {
  constructor(e) {
    super(e), delete this.outOfBand;
  }
  createVectorField(e) {
    return [...e].reduce((e, t) => (e += t[1] ? "1" : "0"), "");
  }
  createRestrictions(e) {
    let t = {};
    if (e.numRestrictions > 0) {
      let s = e.getMaxVendorId();
      e.getRestrictions().forEach((e) => {
        t[e.purposeId.toString()] = "_".repeat(s);
      });
      for (let i = 0; i < s; i++) {
        let s = i + 1;
        e.getRestrictions(s).forEach((e) => {
          let s = e.restrictionType.toString(),
            n = e.purposeId.toString(),
            r = t[n].substr(0, i),
            o = t[n].substr(i + 1);
          t[n] = r + s + o;
        });
      }
    }
    return t;
  }
}
class el extends en {
  cmpLoaded = !0;
  cmpStatus = ei.cmpStatus;
  displayStatus = ei.displayStatus;
  apiVersion = String(ei.apiVersion);
  gvlVersion;
  constructor() {
    super(),
      ei.tcModel &&
        ei.tcModel.vendorListVersion &&
        (this.gvlVersion = +ei.tcModel.vendorListVersion);
  }
}
class ec extends ee {
  respond() {
    this.invokeCallback(new el());
  }
}
class eu extends et {
  respond() {
    this.throwIfParamInvalid(), this.invokeCallback(new ea(this.param));
  }
}
class ed extends ee {
  respond() {
    let e;
    let t = ei.tcModel,
      s = t.vendorListVersion;
    void 0 === this.param && (this.param = s),
      (e =
        this.param === s && t.gvl
          ? t.gvl
          : new B(this.param)).readyPromise.then(() => {
        this.invokeCallback(e.getJson());
      });
  }
}
class ep extends et {
  respond() {
    (this.listenerId = ei.eventQueue.add({
      callback: this.callback,
      param: this.param,
      next: this.next,
    })),
      super.respond();
  }
}
class eh extends ee {
  respond() {
    this.invokeCallback(ei.eventQueue.remove(this.param));
  }
}
class em {
  static [Q.PING] = ec;
  static [Q.GET_TC_DATA] = et;
  static [Q.GET_IN_APP_TC_DATA] = eu;
  static [Q.GET_VENDOR_LIST] = ed;
  static [Q.ADD_EVENT_LISTENER] = ep;
  static [Q.REMOVE_EVENT_LISTENER] = eh;
}
class eg {
  static set_ = new Set([0, 2, void 0, null]);
  static has(e) {
    return "string" == typeof e && (e = Number(e)), this.set_.has(e);
  }
}
let ev = "__tcfapi";
class ef {
  callQueue;
  customCommands;
  constructor(e) {
    if (e) {
      let t = Q.ADD_EVENT_LISTENER;
      if (e?.[t])
        throw Error(
          `Built-In Custom Commmand for ${t} not allowed: Use ${Q.GET_TC_DATA} instead`
        );
      if (((t = Q.REMOVE_EVENT_LISTENER), e?.[t]))
        throw Error(`Built-In Custom Commmand for ${t} not allowed`);
      e?.[Q.GET_TC_DATA] &&
        ((e[Q.ADD_EVENT_LISTENER] = e[Q.GET_TC_DATA]),
        (e[Q.REMOVE_EVENT_LISTENER] = e[Q.GET_TC_DATA])),
        (this.customCommands = e);
    }
    try {
      this.callQueue = window[ev]() || [];
    } catch (e) {
      this.callQueue = [];
    } finally {
      (window[ev] = this.apiCall.bind(this)), this.purgeQueuedCalls();
    }
  }
  apiCall(e, t, s) {
    for (
      var i = arguments.length, n = Array(i > 3 ? i - 3 : 0), r = 3;
      r < i;
      r++
    )
      n[r - 3] = arguments[r];
    if ("string" != typeof e) s(null, !1);
    else if (eg.has(t)) {
      if ("function" != typeof s) throw Error("invalid callback function");
      ei.disabled
        ? s(new er(), !1)
        : this.isCustomCommand(e) || this.isBuiltInCommand(e)
        ? this.isCustomCommand(e) && !this.isBuiltInCommand(e)
          ? this.customCommands[e](s, ...n)
          : e === Q.PING
          ? this.isCustomCommand(e)
            ? new em[e](this.customCommands[e], n[0], null, s)
            : new em[e](s, n[0])
          : void 0 === ei.tcModel
          ? this.callQueue.push([e, t, s, ...n])
          : this.isCustomCommand(e) && this.isBuiltInCommand(e)
          ? new em[e](this.customCommands[e], n[0], null, s)
          : new em[e](s, n[0])
        : s(null, !1);
    } else s(null, !1);
  }
  purgeQueuedCalls() {
    let e = this.callQueue;
    (this.callQueue = []),
      e.forEach((e) => {
        window[ev](...e);
      });
  }
  isCustomCommand(e) {
    return this.customCommands && "function" == typeof this.customCommands[e];
  }
  isBuiltInCommand(e) {
    return void 0 !== em[e];
  }
}
class eC {
  callResponder;
  isServiceSpecific;
  numUpdates = 0;
  constructor(e, t, s = !1, i) {
    this.throwIfInvalidInt(e, "cmpId", 2),
      this.throwIfInvalidInt(t, "cmpVersion", 0),
      (ei.cmpId = e),
      (ei.cmpVersion = t),
      (ei.tcfPolicyVersion = 2),
      (this.isServiceSpecific = !!s),
      (this.callResponder = new ef(i));
  }
  throwIfInvalidInt(e, t, s) {
    if (!("number" == typeof e && Number.isInteger(e) && e >= s))
      throw Error(`Invalid ${t}: ${e}`);
  }
  update(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (ei.disabled) throw Error("CmpApi Disabled");
    (ei.cmpStatus = W.LOADED),
      t
        ? ((ei.displayStatus = Y.VISIBLE), (ei.eventStatus = J.CMP_UI_SHOWN))
        : void 0 === ei.tcModel
        ? ((ei.displayStatus = Y.DISABLED), (ei.eventStatus = J.TC_LOADED))
        : ((ei.displayStatus = Y.HIDDEN),
          (ei.eventStatus = J.USER_ACTION_COMPLETE)),
      (ei.gdprApplies = null !== e),
      ei.gdprApplies
        ? ("" === e
            ? ((ei.tcModel = new q()),
              (ei.tcModel.cmpId = ei.cmpId),
              (ei.tcModel.cmpVersion = ei.cmpVersion))
            : (ei.tcModel = G.decode(e)),
          (ei.tcModel.isServiceSpecific = this.isServiceSpecific),
          (ei.tcfPolicyVersion = Number(ei.tcModel.policyVersion)),
          (ei.tcString = e))
        : (ei.tcModel = null),
      0 === this.numUpdates
        ? this.callResponder.purgeQueuedCalls()
        : ei.eventQueue.exec(),
      this.numUpdates++;
  }
  disable() {
    (ei.disabled = !0), (ei.cmpStatus = W.ERROR);
  }
}
let ey = "nv2u9",
  eb = "nv348",
  eE = { search: "nv2u9", notfound: "nv348" },
  eI = "t26u",
  eS = "t26u t22ky",
  ew = "t2128",
  eL = "t2f4",
  eN = "t21qn",
  eV = "t21qi",
  e_ = "t21pl",
  eA = "t2ob",
  eT = "t2y6",
  eO = "t21cy",
  eP = "t22q9",
  eR = "t2zi",
  ex = "t2p2",
  ek = {
    vendor: "t26u",
    vendorExpanded: "t26u t22ky",
    line: "t2128",
    name: "t2f4",
    toggle: "t21qn",
    descriptions: "t21qi",
    point: "t21pl",
    feature: "t2ob",
    section: "t2y6",
    cookie: "t21cy",
    details: "t22q9",
    stroke: "t2zi",
    policy: "t2p2",
  },
  eD = "Beh28h",
  eM = "Beh29q",
  eU = "Beh1k3",
  eF = "Behyf",
  eB = { toggle: "Beh28h", button: "Beh29q", on: "Beh1k3", off: "Behyf" },
  eq = (e) => e.stopPropagation();
function eG(e) {
  let { checked: s, onChange: i } = e;
  return t("div", {
    className: eB.toggle,
    onClick: eq,
    children: [
      t("label", {
        className: eB.on,
        children: [
          t("input", {
            type: "radio",
            checked: "on" === s,
            value: "on",
            onChange: i,
          }),
          t("span", { className: eB.button, children: "On" }),
        ],
      }),
      t("label", {
        className: eB.off,
        children: [
          t("input", {
            type: "radio",
            checked: "off" === s,
            value: "off",
            onChange: i,
          }),
          t("span", { className: eB.button, children: "Off" }),
        ],
      }),
    ],
  });
}
function eH(e) {
  let { vendor: t, gvl: s, show: n } = e,
    r = "consent" === n ? t.purposes : t.legIntPurposes,
    o = t.features.length > 0,
    a = t.specialPurposes.length > 0,
    l = t.specialFeatures.length > 0,
    c = Math.ceil((t.cookieMaxAgeSeconds || 0) / 86400);
  return i(
    "div",
    { className: ek.details },
    i(
      "a",
      {
        href: t.policyUrl,
        className: ek.policy,
        title: "Privacy Policy",
        target: "_blank",
      },
      t.name
    ),
    i(
      "div",
      { className: ek.section },
      "consent" === n ? "Consent Purposes" : "Legitimate Interest Purposes"
    ),
    r.map((e) => i("div", { className: ek.feature }, s.purposes[e].name)),
    o && i("div", { className: ek.section }, "Features"),
    o &&
      t.features.map((e) =>
        i("div", { className: ek.feature }, s.features[e].name)
      ),
    a && i("div", { className: ek.section }, "Special Purposes"),
    a &&
      t.specialPurposes.map((e) =>
        i("div", { className: ek.feature }, s.specialPurposes[e].name)
      ),
    l && i("div", { className: ek.section }, "Special Features"),
    l &&
      t.specialFeatures.map((e) =>
        i("div", { className: ek.feature }, s.specialFeatures[e].name)
      ),
    i(
      "div",
      { className: ek.cookie },
      `Uses cookies: ${t.usesCookies ? "Yes" : "No"}`
    ),
    t.usesCookies &&
      i(
        "div",
        { className: ek.cookie },
        `Cookie refresh: ${t.cookieRefresh ? "Yes" : "No"}`
      ),
    t.usesCookies &&
      i(
        "div",
        { className: ek.cookie },
        `Cookie max age: ${c} ${1 === c ? "day" : "days"}`
      ),
    i(
      "div",
      { className: ek.cookie },
      `Uses Non-Cookie Access: ${t.usesNonCookieAccess ? "Yes" : "No"}`
    )
  );
}
function ez(e) {
  let { gvl: n, vendor: r, consents: a, show: l } = e,
    c = a.has(r.id),
    [u, d] = s(c ? "on" : "off"),
    [p, h] = s(!1),
    m = (e) => {
      let t = e.target.value;
      d(t), "on" === t ? a.set(r.id) : a.unset(r.id), e.stopPropagation();
    },
    g = () => {
      h(!p);
    };
  return t("div", {
    className: p ? ek.vendorExpanded : ek.vendor,
    children: [
      t("div", {
        className: ek.line,
        onClick: g,
        children: [
          t(o, { up: p, styles: ek }),
          t("div", { className: ek.name, children: r.name }),
          t("div", {
            className: ek.toggle,
            children: t(eG, { checked: u, onChange: m }),
          }),
        ],
      }),
      p && i(eH, { vendor: r, gvl: n, show: l }),
    ],
  });
}
let ej = "Bt45n",
  e$ = "Bt4vb",
  eQ = { toggle: "Bt45n", button: "Bt4vb" };
function eW(e) {
  let { show: s, setShow: i } = e,
    n = (e) => {
      let t = e.target.value;
      i(t), e.stopPropagation();
    };
  return t("div", {
    className: eQ.toggle,
    children: [
      t("label", {
        children: [
          t("input", {
            type: "radio",
            checked: "consent" === s,
            value: "consent",
            onChange: n,
          }),
          t("span", { className: eQ.button, children: "User Consent" }),
        ],
      }),
      t("label", {
        children: [
          t("input", {
            type: "radio",
            checked: "interest" === s,
            value: "interest",
            onChange: n,
          }),
          t("span", { className: eQ.button, children: "Legitimate Interest" }),
        ],
      }),
    ],
  });
}
function eY(e) {
  let { gvl: r, tcModel: o } = e,
    [a, l] = s("consent"),
    [c, u] = s(""),
    d = n(
      () =>
        Object.values(r.vendors).sort((e, t) => e.name.localeCompare(t.name)),
      [r.vendors]
    ),
    p = c.toLowerCase(),
    h = d
      .filter(
        "consent" === a
          ? (e) =>
              e.purposes.length > 0 ||
              e.specialPurposes.length > 0 ||
              e.specialFeatures.length > 0
          : (e) => e.legIntPurposes.length > 0
      )
      .filter((e) => -1 !== e.name.toLowerCase().indexOf(p)),
    m = "consent" === a ? o.vendorConsents : o.vendorLegitimateInterests,
    g = (e) => u(e.target.value);
  return i(
    "div",
    { className: eE.vendors },
    i(eW, { show: a, setShow: l }),
    i("input", {
      className: eE.search,
      value: c,
      onChange: g,
      placeholder: "Search Vendors...",
    }),
    h.map((e) => t(ez, { gvl: r, vendor: e, consents: m, show: a }, a + e.id)),
    0 === h.length && i("p", { className: eE.notfound }, "No results")
  );
}
let eJ = "u21rn",
  eK = "u254",
  eX = { title: "u21rn", help: "u254" },
  eZ = "Bnz2i8",
  e0 = "Bnz2i8 Bnz2qy",
  e1 = "Bnzr2",
  e2 = "Bnz2mj",
  e3 = "Bnz2v6",
  e4 = "Bnzg6",
  e6 = "Bnzui",
  e5 = "Bnzhx",
  e8 = "Bnz4o",
  e9 = "Bnz148",
  e7 = "Bnzpc",
  te = "Bnzxr",
  tt = {
    purpose: "Bnz2i8",
    purposeExpanded: "Bnz2i8 Bnz2qy",
    line: "Bnzr2",
    name: "Bnz2mj",
    toggle: "Bnz2v6",
    descriptions: "Bnzg6",
    point: "Bnzui",
    bullet: "Bnzhx",
    details: "Bnz4o",
    stroke: "Bnz148",
    vendor: "Bnzpc",
    more: "Bnzxr",
  };
function ts(e) {
  let { getVendors: t, purpose: r, consents: a } = e,
    l = r.description.split("\n"),
    c = r.descriptionLegal.split("\n"),
    u = a && a.has(r.id),
    [d, p] = s(u ? "on" : "off"),
    [h, m] = s(!1),
    [g, f] = s(!1),
    C = (e) => {
      let t = e.target.value;
      p(t), "on" === t ? a.set(r.id) : a.unset(r.id), e.stopPropagation();
    },
    y = () => {
      m(!h);
    },
    b = () => {
      f(!g);
    },
    E = n(() => {
      if (!h) return null;
      let e = Object.values(t(r.id)).sort((e, t) =>
        e.name.localeCompare(t.name)
      );
      return g ? e : e.slice(0, 3);
    }, [h, g, t]);
  return i(
    "div",
    { className: h ? tt.purposeExpanded : tt.purpose },
    i(
      "div",
      { className: tt.line, onClick: y },
      i(o, { up: h, styles: tt }),
      i("div", { className: tt.name }, r.name),
      a &&
        i("div", { className: tt.toggle }, i(eG, { checked: d, onChange: C }))
    ),
    h &&
      i(
        "div",
        { className: tt.details },
        l.map((e) => i("div", { className: tt.description }, e)),
        c.map((e) =>
          i(
            "div",
            { className: 0 === e.indexOf("*") ? tt.bullet : tt.point },
            e.replace(/^\*/, "").trim()
          )
        ),
        E.map((e) =>
          i(
            "a",
            { href: e.policyUrl, className: tt.vendor, target: "_blank" },
            e.name
          )
        ),
        E.length > 0 &&
          i(
            "span",
            { className: tt.more, onClick: b },
            g ? "View\xa0\xa0less" : "View\xa0all"
          )
      )
  );
}
function ti(e) {
  let { gvl: n, tcModel: r } = e,
    [o, a] = s("consent"),
    l =
      "consent" === o
        ? n.getVendorsWithConsentPurpose.bind(n)
        : n.getVendorsWithLegIntPurpose.bind(n),
    c = "consent" === o ? r.purposeConsents : r.purposeLegitimateInterests;
  return i(
    "div",
    { className: eX.purposes },
    i(eW, { show: o, setShow: a }),
    i("p", { className: eX.title }, "Purposes"),
    i(
      "p",
      { className: eX.help },
      "consent" === o
        ? "You give an affirmative action to indicate that we can use your data for this purpose."
        : "We have a need to use your data for this processing purpose that is required for us to deliver services to you."
    ),
    Object.values(n.purposes)
      .filter((e) => "consent" === o || 1 !== e.id)
      .map((e) =>
        t(ts, { getVendors: l, purpose: e, consents: c, show: o }, o + e.id)
      ),
    i("p", { className: eX.title }, "Special Purposes"),
    i(
      "p",
      { className: eX.help },
      "We have a need to use your data for this processing purpose that is required for us to deliver services to you."
    ),
    Object.values(n.specialPurposes).map((e) =>
      t(
        ts,
        { getVendors: n.getVendorsWithSpecialPurpose.bind(n), purpose: e },
        e.name
      )
    )
  );
}
let tn = "B7n1dc",
  tr = "B7n31f",
  to = { highlight: "B7n1dc", text: "B7n31f" };
function ta(e) {
  let { gvl: s, tcModel: n } = e;
  return i(
    "div",
    { className: to.features },
    i(
      "p",
      { className: to.text },
      i("strong", { className: to.highlight }, "Features"),
      " are a use of the data that you have already agreed to share with us."
    ),
    Object.values(s.features).map((e) =>
      t(ts, { getVendors: s.getVendorsWithFeature.bind(s), purpose: e }, e.name)
    ),
    i(
      "p",
      { className: to.text },
      i("strong", { className: to.highlight }, "Special Features"),
      " are processing purposes that require your explicit consent."
    ),
    Object.values(s.specialFeatures).map((e) =>
      t(
        ts,
        {
          getVendors: s.getVendorsWithSpecialFeature.bind(s),
          purpose: e,
          consents: n.specialFeatureOptins,
        },
        e.name
      )
    )
  );
}
function tl(e) {
  let { state: t, options: n, closeView: r, openSummaryView: o } = e,
    l = () => {
      r(), t.acceptAll(2);
    },
    c = () => {
      r(), t.rejectAll(2);
    },
    u = () => {
      r(), t.confirmChoice(2);
    },
    d = () => {
      n?.cancel === "summary" ? o() : r();
    },
    [p, h] = s(n?.section || "purposes"),
    m = () => h("purposes"),
    g = () => h("features"),
    f = () => h("vendors"),
    C = t.tcModel.gvl;
  return i(
    "section",
    { className: a.settings },
    i(
      "div",
      { className: a.panel },
      i(
        "div",
        { className: a.head },
        i("div", { className: a.title }, "Privacy settings"),
        i(
          "p",
          null,
          "Please manage your cookie choices by switching the consent toggles on or off under the Purposes listed below. You can also choose to click:"
        ),
        i(
          "div",
          { className: a.fastActions },
          i(
            "button",
            { id: "accept", className: a.fast, onClick: c },
            "Reject all"
          ),
          i(
            "button",
            { id: "refuse", className: a.fast, onClick: l },
            "Accept all"
          )
        ),
        i(
          "button",
          {
            className: "purposes" === p ? a.switchActive : a.switch,
            onClick: m,
          },
          "Purposes"
        ),
        i(
          "button",
          {
            className: "features" === p ? a.switchActive : a.switch,
            onClick: g,
          },
          "Features"
        ),
        i(
          "button",
          {
            className: "vendors" === p ? a.switchActive : a.switch,
            onClick: f,
          },
          "Vendors"
        )
      ),
      i(
        "div",
        { className: a.body },
        "purposes" === p && i(ti, { gvl: C, tcModel: t.tcModel }),
        "features" === p && i(ta, { gvl: C, tcModel: t.tcModel }),
        "vendors" === p && i(eY, { gvl: C, tcModel: t.tcModel })
      ),
      i(
        "div",
        { className: a.actions },
        i(
          "p",
          null,
          "You can change the above settings for this browser at any time by clicking the privacy settings link in the footer of the page."
        ),
        i(
          "button",
          { id: "save", className: a.button, onClick: u },
          "Save & close"
        ),
        i(
          "button",
          { id: "cancel", className: a.buttonGray, onClick: d },
          "Cancel"
        )
      )
    )
  );
}
let tc = "Cqw1bs",
  tu = "Cqw1d2",
  td = "Cqw11o",
  tp = "Cqw76",
  th = "Cqw1q5",
  tm = "Cqw1hm",
  tg = "Cqw1id",
  tv = "Cqw1wb",
  tf = "Cqw1q5 Cqwii",
  tC = "Cqw1if",
  ty = "Cqwug",
  tb = "Cqwdk",
  tE = "Cqwdk Cqw3e",
  tI = "Cqw1yo",
  tS = {
    consent: "Cqw1bs",
    panel: "Cqw1d2",
    align: "Cqw11o",
    row: "Cqw76",
    column: "Cqw1q5",
    title: "Cqw1hm",
    caption: "Cqw1id",
    note: "Cqw1wb",
    columnSmallScreen: "Cqw1q5 Cqwii",
    text: "Cqw1if",
    actions: "Cqwug",
    button: "Cqwdk",
    buttonGray: "Cqwdk Cqw3e",
    buttonInline: "Cqw1yo",
  };
function tw(e) {
  let { state: t, openDetailsView: s, closeView: n } = e,
    r = (e) => {
      e.preventDefault(), n(), t.acceptAll(1);
    },
    o = (e) => {
      e.preventDefault(), s("purposes");
    },
    a = (e) => {
      e.preventDefault(), s("vendors");
    };
  return i(
    "section",
    { className: tS.consent },
    i(
      "div",
      { className: tS.panel },
      i(
        "div",
        { className: tS.align },
        i("div", { className: tS.title }, "ItΓÇÖs your choice"),
        i(
          "div",
          { className: tS.summary },
          i(
            "div",
            { className: tS.row },
            i(
              "div",
              { className: tS.column },
              i(
                "p",
                null,
                "When we\xa0make the Songsterr available to\xa0you online, we\xa0use cookies and similar technologies to\xa0help\xa0us to\xa0do\xa0this. Some are necessary to\xa0help our website work properly and can't be\xa0switched off, and some are optional but support the Songsterr and your experience in\xa0other ways."
              )
            ),
            i(
              "div",
              { className: tS.column },
              i(
                "p",
                null,
                "We\xa0and ",
                i(
                  "button",
                  { className: tS.buttonInline, onClick: a },
                  "our partners"
                ),
                " store and access information on a\xa0device, such as\xa0cookies, and process personal data, such as\xa0unique identifiers, page visits, IP address, and standard information sent by a\xa0device to\xa0provide, analyse, and improve our services. This includes personalising content or\xa0advertising for you."
              )
            ),
            i(
              "div",
              { className: tS.column },
              i(
                "p",
                { className: tS.note },
                "We\xa0use cookies and similar technologies for the following purposes:"
              ),
              i(
                "ul",
                null,
                i(
                  "li",
                  null,
                  "Store and/or access information on\xa0a\xa0device"
                ),
                i(
                  "li",
                  null,
                  "Personalised ads and content, ad\xa0and content measurement, audience insights and product development"
                )
              )
            ),
            i(
              "div",
              { className: tS.column },
              i(
                "p",
                null,
                "You can find out more in\xa0our ",
                i(l, { href: "/a/wa/privacy" }, "privacy\xa0policy"),
                " and ",
                i(l, { href: "/a/wa/terms" }, "terms of\xa0service"),
                " and manage the choices available to\xa0you at\xa0any time by\xa0going to 'Privacy settings' at\xa0the bottom of\xa0any page."
              )
            )
          ),
          i(
            "div",
            { className: tS.cta },
            i(
              "p",
              { className: tS.text },
              i(
                "span",
                { className: tS.caption },
                "Are you happy to accept cookies? "
              ),
              "To\xa0manage your cookie choices now, including how to\xa0opt out where our partners rely on\xa0legitimate interests to\xa0use your information, ",
              i(
                "span",
                { className: tS.note },
                "click on\xa0Manage\xa0my\xa0cookies."
              )
            )
          )
        )
      ),
      i(
        "div",
        { className: tS.actions },
        i(
          "div",
          { className: tS.align },
          i(
            "button",
            { id: "accept", className: tS.button, onClick: r },
            "Accept cookies"
          ),
          i(
            "button",
            { id: "refuse", className: tS.buttonGray, onClick: o },
            "Manage my cookies"
          )
        )
      )
    )
  );
}
Z(), (B.baseUrl = "/vendor-list.consensu.org/v2");
let tL = 384,
  tN = 1,
  tV = () => (e || (e = new eC(384, 1, !0)), e);
class t_ {
  constructor(e, t) {
    if (((this.actions = t), e))
      try {
        this.tcModel = G.decode(e);
      } catch (t) {
        console.error(t), (e = void 0);
      }
    e || (this.tcModel = new q()),
      (this.hasConsent = !!e),
      tV().update(e || "", !e),
      (this.gvl = new B()),
      (this.tcModel.gvl = this.gvl),
      (this.tcModel.cmpId = 384),
      (this.tcModel.cmpVersion = 1),
      (this.tcModel.isServiceSpecific = !0),
      this.hasConsent &&
        this.ready().then(() => {
          this.tcModel.policyVersion !== this.gvl.tcfPolicyVersion &&
            this.actions.openSummaryView();
        });
  }
  confirmChoice() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
    (this.tcModel.consentScreen = e), (this.hasConsent = !0);
    let t = G.encode(this.tcModel);
    d("euconsent-v2", t), tV().update(t, !1);
  }
  async acceptAll() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
    await this.ready(), this.tcModel.setAll(), this.confirmChoice(e);
  }
  async rejectAll() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
    await this.ready(), this.tcModel.unsetAll(), this.confirmChoice(e);
  }
  ready() {
    return this.tcModel.gvl.readyPromise;
  }
  shouldShow() {
    return !this.hasConsent;
  }
}
function tA() {
  let { dispatch: e, consent: t, isTestMode: n } = c("consent", "isTestMode"),
    [o, a] = s(null);
  if (n) return null;
  let l = () => {
      e("consent/view", { suite: "tcf", view: "summary", options: null });
    },
    d = async (t) => {
      await o.ready(),
        e("consent/view", {
          suite: "tcf",
          view: "details",
          options: { section: t, cancel: "summary" },
        });
    },
    p = () => {
      e("consent/view", { suite: null, view: null, options: null });
    };
  if (
    (r(() => {
      try {
        let e = u("euconsent-v2"),
          t = new t_(e, {
            openSummaryView: l,
            openDetailsView: d,
            closeView: p,
          });
        a(t), t.shouldShow() && l();
      } catch (e) {
        console.error(e);
      }
    }, []),
    !t.suite || !t.view || !o)
  )
    return null;
  let h = {
    state: o,
    options: t.options,
    openSummaryView: l,
    openDetailsView: d,
    closeView: p,
  };
  return "summary" === t.view
    ? i(tw, h)
    : "details" === t.view
    ? i(tl, h)
    : void 0;
}
export { t_ as ConsentState, tA as default };
