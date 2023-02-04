class _ {
  constructor(_, ...N) {
    (this.suffix = _), (this.halfToneOffsets = N);
  }
}
let N = {
    MAJOR: new _("", 0, 4, 7),
    MINOR: new _("m", 0, 3, 7),
    AUGMENTED: new _("aug", 0, 4, 8),
    DIMINISHED: new _("dim", 0, 3, 6),
    MAJOR_DOMINANT_SEVENTH: new _("7", 0, 4, 7, 10),
    MAJOR_DOMINANT_SEVENTH_M: new _("7M", 0, 4, 7, 11),
    MAJOR_DOMINANT_SEVENTH_M_SHARP_5: new _("7M(#5),", 0, 4, 8, 11),
    MAJOR_DOMINANT_SEVENTH_SHARP_5: new _("7(#5),", 0, 4, 8, 10),
    MAJOR_DOMINANT_SEVENTH_B_5: new _("7(b5),", 0, 4, 6, 10),
    MAJOR_DOMINANT_SEVENTH_ADD_9: new _("9", 0, 4, 7, 10, 14),
    MAJOR_DOMINANT_SEVENTH_ADD_B9: new _("7b9", 0, 4, 7, 10, 13),
    MAJOR_DOMINANT_SEVENTH_ADD_SHARP_9: new _("7#9", 0, 4, 7, 10, 15),
    MAJOR_DOMINANT_SEVENTH_ADD_11: new _("11", 0, 4, 7, 10, 17),
    MAJOR_DOMINANT_SEVENTH_ADD_B11: new _("7b11", 0, 4, 7, 10, 16),
    MAJOR_DOMINANT_SEVENTH_ADD_SHARP_11: new _("7#11", 0, 4, 7, 10, 18),
    MAJOR_DOMINANT_SEVENTH_ADD_13: new _("13", 0, 4, 7, 10, 21),
    MAJOR_DOMINANT_SEVENTH_ADD_B13: new _("7b13", 0, 4, 7, 10, 20),
    MAJOR_DOMINANT_SEVENTH_ADD_SHARP_13: new _("7#13", 0, 4, 7, 10, 22),
    MAJOR_DOMINANT_SEVENTH_M_ADD_9: new _("7M9", 0, 4, 7, 11, 14),
    MAJOR_DOMINANT_SEVENTH_M_ADD_11: new _("7Madd11", 0, 4, 7, 11, 17),
    MAJOR_DOMINANT_SEVENTH_M_ADD_SHARP_11: new _("7Madd#11", 0, 4, 7, 11, 18),
    MAJOR_DOMINANT_SEVENTH_M_ADD_13: new _("7Madd#13", 0, 4, 7, 11, 20),
    MINOR_DOMINANT_SEVENTH: new _("m7", 0, 3, 7, 10),
    MINOR_DOMINANT_SEVENTH_M: new _("m7M", 0, 3, 7, 11),
    MINOR_DOMINANT_SEVENTH_B_5: new _("m7(b5),", 0, 3, 6, 10),
    MINOR_DOMINANT_SEVENTH_ADD_9: new _("m9", 0, 3, 7, 10, 14),
    MINOR_DOMINANT_SEVENTH_ADD_11: new _("m7add11", 0, 3, 7, 10, 17),
    MINOR_DOMINANT_SEVENTH_MAJ_9: new _("m7M9", 0, 3, 7, 11, 14),
    DIMINISHED_DOMINANT_SEVENTH: new _("dim7", 0, 3, 6, 9),
    MAJOR_DIMINISHED_FIFTH: new _("(b5),", 0, 4, 6),
    SUSPENDED_2: new _("sus2", 0, 2, 7),
    SUSPENDED_4: new _("sus4", 0, 5, 7),
    SEVENTH_SUSPENDED_2: new _("7sus2", 0, 2, 7, 10),
    SEVENTH_SUSPENDED_4: new _("7sus4", 0, 5, 7, 10),
    SEVENTH_M_SUSPENDED_4: new _("7Msus4", 0, 5, 7, 11),
    MAJOR_SIXTH: new _("6", 0, 4, 7, 9),
    MINOR_SIXTH: new _("m6", 0, 3, 7, 9),
    QUINT: new _("5", 0, 7),
    MAJOR_ADD_9: new _("add9", 0, 4, 7, 14),
    MINOR_ADD_9: new _("madd9", 0, 3, 7, 14),
    MAJOR_SIXTH_ADD_9: new _("6add9", 0, 4, 7, 9, 14),
    MINOR_SIXTH_ADD_9: new _("m6add9", 0, 3, 7, 9, 14),
    MAJOR_ADD_11: new _("add11", 0, 4, 7, 17),
  },
  A = "[A-H][#bΓÖ¡ΓÖ»]?",
  D = /([A-H])([#b\u266D\u266F])?/,
  M = "ΓÖ»",
  E = [
    "A",
    "AΓÖ»",
    "B",
    "C",
    "CΓÖ»",
    "D",
    "DΓÖ»",
    "E",
    "F",
    "FΓÖ»",
    "G",
    "GΓÖ»",
  ];
class T {
  constructor(_) {
    this.name = _;
  }
}
function e(_) {
  let N = _.match(D);
  if (N) {
    let _ = N[1].replace("H", "B"),
      A = E.findIndex((N) => N === _);
    if (-1 !== A) {
      if (N[2])
        switch (N[2][0]) {
          case "#":
          case "ΓÖ»":
            A = (A + 1) % E.length;
            break;
          default:
            A = (A - 1 + E.length) % E.length;
        }
      return new T(E[A]);
    }
  }
  throw Error(_);
}
let O = `${A}[0-9majSsudibfgnoM\u266D\u266F#+]{0,7}(?:\\([0-9nob#maj. ]+\\))?(?:/${A})?`,
  I = "N\\.C\\.",
  t = `(${A})([^/]*)(?:/(${A}))?`;
class S {
  constructor(_, A, D) {
    (this.baseNote = _),
      (this.firstNote = D || _),
      (this.chordType = A || N.MAJOR);
  }
}
function s(_) {
  return `${_.baseNote.name}${_.chordType.suffix}${
    _.firstNote.name == _.baseNote.name ? "" : "/" + _.firstNote.name
  }`;
}
let H = new Map()
    .set("maj", N.MAJOR)
    .set("min", N.MINOR)
    .set("mi", N.MINOR)
    .set("M7", N.MAJOR_DOMINANT_SEVENTH_M)
    .set("maj7", N.MAJOR_DOMINANT_SEVENTH_M)
    .set("maj7b5", N.MAJOR_DOMINANT_SEVENTH_B_5)
    .set("7b5", N.MAJOR_DOMINANT_SEVENTH_B_5)
    .set("7-5", N.MAJOR_DOMINANT_SEVENTH_B_5)
    .set("m7b5", N.MINOR_DOMINANT_SEVENTH_B_5)
    .set("7+5", N.MAJOR_DOMINANT_SEVENTH_SHARP_5)
    .set("maj7(#5)", N.MAJOR_DOMINANT_SEVENTH_SHARP_5)
    .set("maj7(+5)", N.MAJOR_DOMINANT_SEVENTH_SHARP_5)
    .set("aug(maj5)", N.MAJOR_DOMINANT_SEVENTH_SHARP_5)
    .set("7/9", N.MAJOR_DOMINANT_SEVENTH_ADD_9)
    .set("7+9", N.MAJOR_DOMINANT_SEVENTH_ADD_SHARP_9)
    .set(" #9", N.MAJOR_DOMINANT_SEVENTH_ADD_SHARP_9)
    .set("7-9", N.MAJOR_DOMINANT_SEVENTH_ADD_B9)
    .set(" b9", N.MAJOR_DOMINANT_SEVENTH_ADD_B9)
    .set("7/add9", N.MAJOR_DOMINANT_SEVENTH_ADD_9)
    .set("7add11", N.MAJOR_DOMINANT_SEVENTH_ADD_11)
    .set("7add#11", N.MAJOR_DOMINANT_SEVENTH_ADD_SHARP_11)
    .set("7/11", N.MAJOR_DOMINANT_SEVENTH_ADD_11)
    .set("7/add11", N.MAJOR_DOMINANT_SEVENTH_ADD_11)
    .set("add13", N.MAJOR_DOMINANT_SEVENTH_ADD_13)
    .set("7add13", N.MAJOR_DOMINANT_SEVENTH_ADD_13)
    .set("7/13", N.MAJOR_DOMINANT_SEVENTH_ADD_13)
    .set("7/add13", N.MAJOR_DOMINANT_SEVENTH_ADD_13)
    .set("7addb13", N.MAJOR_DOMINANT_SEVENTH_ADD_B13)
    .set("m(maj7)", N.MINOR_DOMINANT_SEVENTH_M)
    .set("mi7", N.MINOR_DOMINANT_SEVENTH)
    .set("maj9", N.MAJOR_DOMINANT_SEVENTH_M_ADD_9)
    .set("maj7/9", N.MAJOR_DOMINANT_SEVENTH_M_ADD_9)
    .set("maj7/11", N.MAJOR_DOMINANT_SEVENTH_M_ADD_11)
    .set("maj7/#11", N.MAJOR_DOMINANT_SEVENTH_M_ADD_SHARP_11)
    .set("maj7#11", N.MAJOR_DOMINANT_SEVENTH_M_ADD_SHARP_11)
    .set("maj7/13", N.MAJOR_DOMINANT_SEVENTH_M_ADD_13)
    .set("m7/9", N.MINOR_DOMINANT_SEVENTH_ADD_9)
    .set("m7/11", N.MINOR_DOMINANT_SEVENTH_ADD_11)
    .set("min/maj9", N.MINOR_DOMINANT_SEVENTH_MAJ_9)
    .set("+", N.AUGMENTED)
    .set("+5", N.AUGMENTED)
    .set(" #5", N.AUGMENTED)
    .set("-", N.DIMINISHED)
    .set("maj-5", N.MAJOR_DIMINISHED_FIFTH)
    .set("-5", N.MAJOR_DIMINISHED_FIFTH)
    .set("Mb5", N.MAJOR_DIMINISHED_FIFTH)
    .set(" b5", N.MAJOR_DIMINISHED_FIFTH)
    .set("6/add9", N.MAJOR_SIXTH_ADD_9)
    .set("6/9", N.MAJOR_SIXTH_ADD_9)
    .set("69", N.MAJOR_SIXTH_ADD_9)
    .set("m6/9", N.MINOR_SIXTH_ADD_9)
    .set("2", N.MAJOR_ADD_9)
    .set("+4", N.MAJOR_ADD_11)
    .set("7Sus2", N.SEVENTH_SUSPENDED_2)
    .set("7Sus4", N.SEVENTH_SUSPENDED_4),
  R = new Map();
for (let _ in N) R.set(N[_].suffix, N[_]);
for (let [_, N] of H) R.set(_, N);
function n(_) {
  return R.get(_);
}
function a(_) {
  let N = _.match(t);
  if (N)
    try {
      let [_, A, D, M] = N;
      return new S(e(A), n(D) || { suffix: D }, M && e(M));
    } catch (N) {
      throw (console.error(N), Error("Unable to parse chord: " + _));
    }
  throw Error("Invalid chord: " + _);
}
let J = "tuning",
  V = "capo",
  d = "chord",
  w = "text",
  r = "noise",
  m = "section",
  o = "comment",
  i = "line";
export {
  O as C,
  I as N,
  r as T,
  w as a,
  d as b,
  i as c,
  o as d,
  m as e,
  V as f,
  J as g,
  s as h,
  a as p,
};
