let e;
import {
  d as t,
  a as s,
  R as a,
  T as i,
  h as r,
  p as l,
  _ as n,
  F as o,
} from "./preact.3d326435.js";
import {
  bw as c,
  T as d,
  C as u,
  bx as p,
  bA as v,
  L as f,
  u as m,
  n as h,
  h as L,
  bk as g,
  bb as C,
  bB as w,
  bC as x,
  bD as b,
  bh as k,
  bi as y,
  bf as N,
  bE as M,
  aa as B,
  a9 as Z,
  bl as A,
  bm as j,
  bg as P,
  br as I,
  bp as D,
  bq as R,
} from "./index.659fabbf.js";
import {
  _ as S,
  u as E,
  S as F,
  a as W,
  b as z,
  I as O,
  R as q,
} from "./useSongListHotkeys.074f3727.js";
import { S as T } from "./SearchBox.3262ea86.js";
import { S as $ } from "./Stub.4f8edbef.js";
import { P as H } from "./Panel.693a3a8d.js";
import { _ as K } from "./SongsPanel.module.ee40cfdb.js";
class G extends t {
  render() {
    let { width: e, height: t, className: a } = this.props;
    return s(
      "svg",
      { className: a, height: t, width: e, viewBox: "0 0 16 4" },
      s("circle", { cx: "2", cy: "2", r: "2" }),
      s("circle", { cx: "8", cy: "2", r: "2" }),
      s("circle", { cx: "14", cy: "2", r: "2" })
    );
  }
}
let Y = "Clr13o",
  _ = "Clr2j2",
  V = "Clr2ma",
  J = "Clr1ed",
  Q = {
    dropdown: "Clr13o",
    setnames: "Clr2j2",
    disabled: "Clr2ma",
    dropdownDelete: "Clr1ed",
  },
  U = a((t) => {
    let {
        song: a,
        addOptions: l,
        removeCaption: n,
        onAdd: o,
        onClose: c,
        onRemove: d,
      } = t,
      u = { current: [] },
      p = i((e) => {
        e.preventDefault(), e.stopPropagation();
      }, []),
      v = i((t) => {
        t.preventDefault(),
          t.stopPropagation(),
          void 0 === e || e >= u.current.length - 1 ? (e = 0) : (e += 1),
          u.current && u.current[e].focus();
      }, []),
      f = i((t) => {
        t.preventDefault(),
          t.stopPropagation(),
          void 0 === e || e <= 0 ? (e = u.current.length - 1) : (e -= 1),
          u.current && u.current[e].focus();
      }, []);
    return (
      r(() => {
        let t = { up: f, down: v, tab: c, esc: c, space: p };
        return (
          window.hotKeysManager.bind(t, { onPanelPopup: !0 }),
          (e = void 0),
          () => {
            window.hotKeysManager.unbind(t, { onPanelPopup: !0 }), (e = void 0);
          }
        );
      }, [l]),
      s(
        "div",
        { className: Q.dropdown, "data-dropdown": "" },
        l &&
          0 !== l.length &&
          s(
            "div",
            { className: Q.setnames },
            s("p", {}, "Add to playlist:"),
            l.map((e) =>
              e.active
                ? s(
                    "button",
                    {
                      ref: (e) => {
                        u.current.push(e);
                      },
                      onClick: () => {
                        o(a, e.id);
                      },
                    },
                    e.name
                  )
                : s(
                    "button",
                    { onClick: p, className: Q.disabled, tabIndex: -1 },
                    e.name
                  )
            )
          ),
        s(
          "button",
          {
            ref: (e) => {
              u.current.push(e);
            },
            className: Q.dropdownDelete,
            onClick: d,
            "data-feature": "remove",
          },
          n
        )
      )
    );
  }),
  X = "w81kv",
  ee = "w8k4",
  et = "w81kv w82q9",
  es = { options: "w81kv", dots: "w8k4", optionsActive: "w81kv w82q9" },
  ea = a((e) => {
    let {
        song: t,
        addOptions: a,
        dropdownShown: r,
        optionsAlwaysOn: l,
        removeCaption: n,
        onAdd: o,
        onOptionsClick: c,
        onRemove: d,
      } = e,
      u = r || l ? es.optionsActive : es.options,
      p = i(
        (e) => {
          e.preventDefault(), e.stopPropagation(), r ? c() : c(t.songId);
        },
        [t, r]
      ),
      v = i(() => c(), []);
    return s(
      "div",
      { className: u, onClick: p },
      s(
        "button",
        { className: es.dots, title: "Options" },
        s(G, { width: 16, height: 4 })
      ),
      r &&
        s(U, {
          addOptions: a,
          song: t,
          onRemove: d,
          removeCaption: n,
          onAdd: o,
          onClose: v,
        })
    );
  }),
  ei = "Bp51ux",
  er = "Bp53",
  el = "Bp51c",
  en = "Bp51zj",
  eo = {
    exitActive: "Bp51ux",
    enterActive: "Bp53",
    enter: "Bp51c",
    exit: "Bp51zj",
  },
  ec = { animationStyles: eo },
  ed = a((e) => {
    let {
      song: t,
      isActive: a,
      addOptions: r,
      dropdownShown: n,
      optionsAlwaysOn: o,
      isPhone: m,
      inSetlist: h,
      onAdd: L,
      onClick: g,
      onOptionsClick: C,
      onRemove: w,
      difficultyNA: x,
    } = e;
    void 0 === x && (x = !1);
    let [b, k] = l(!1),
      y = S.favorite;
    a && (y += " " + S.active), b && (y += " " + S.removal);
    let N = t.tracks && t.tracks[t.defaultTrack],
      M = N && t.difficulty,
      B = c(t, t.defaultTrack),
      Z = i(
        (e) => {
          e.preventDefault(), e.stopPropagation(), k(!b);
        },
        [b]
      ),
      A = i(
        (e) => {
          e.preventDefault(), e.stopPropagation(), k(!1), w();
        },
        [w]
      );
    return s(
      f,
      { className: y, "data-song": "", to: B, onClick: g },
      m &&
        s(
          "div",
          {
            role: "button",
            className: S.fav,
            onClick: Z,
            title: "Remove from favorites",
          },
          s(v, {
            width: 17,
            height: 17,
            state: "fill",
            title: "Remove from favorites",
            styles: S,
          })
        ),
      s(
        "div",
        { className: S.wrapper },
        s("div", { className: S.name, "data-field": "name" }, t.title),
        s("div", { className: S.artist, "data-field": "artist" }, t.artist)
      ),
      !m &&
        s(ea, {
          song: t,
          addOptions: r,
          dropdownShown: n,
          optionsAlwaysOn: o,
          removeCaption: h
            ? "Remove from this playlist"
            : "Remove from favorites",
          onAdd: L,
          onOptionsClick: C,
          onRemove: w,
        }),
      s(p, { difficultyNA: x, difficultyString: M }),
      m &&
        s(
          d,
          { component: "div", className: S.controls },
          b &&
            s(
              u,
              ec,
              s(
                "div",
                { className: S.buttons },
                s(
                  "button",
                  { className: S.cancel, onClick: Z, "data-action": "cancel" },
                  "Cancel"
                ),
                s(
                  "button",
                  { className: S.remove, onClick: A, "data-action": "remove" },
                  "Remove"
                )
              )
            )
        )
    );
  });
class eu extends t {
  render() {
    return s(
      "svg",
      { width: 189, height: 101, viewBox: "0 0 189 101", fill: "none" },
      s("rect", {
        x: "139",
        y: "60",
        width: "50",
        height: "4",
        rx: "1",
        fill: "#3A3A3A",
      }),
      s("rect", {
        y: "60",
        width: "50",
        height: "4",
        rx: "1",
        fill: "#3A3A3A",
      }),
      s("path", {
        fill: "#3A3A3A",
        d: "M94 78L95.1452 76.3603L94.009 75.5668L92.8669 76.3519L94 78ZM115 61L113.879 59.3438L112.698 60.1431L113.069 61.5199L115 61ZM107.5 36.5L105.631 37.2109L106.089 38.4157L107.375 38.4961L107.5 36.5ZM82 36.5L82.1217 38.4963L83.464 38.4144L83.8947 37.1405L82 36.5ZM73 61L74.9249 61.5429L75.3139 60.1637L74.1331 59.3519L73 61ZM43.899 38.8232L43.7773 36.8269L43.899 38.8232ZM43.3933 40.6454L44.5264 38.9973L43.3933 40.6454ZM94.9901 3.60352L96.8595 2.89262L94.9901 3.60352ZM93.108 3.63874L91.2134 2.99828L93.108 3.63874ZM145.072 40.6433L143.951 38.9871L145.072 40.6433ZM123.248 98.4268L122.102 100.067L123.248 98.4268ZM124.786 97.347L126.717 96.8271L124.786 97.347ZM64.2801 98.4324L65.4132 100.081L64.2801 98.4324ZM62.7511 97.3369L60.8262 96.794L62.7511 97.3369ZM65.4132 100.081L95.1331 79.6481L92.8669 76.3519L63.147 96.7843L65.4132 100.081ZM92.8548 79.6397L122.102 100.067L124.393 96.7872L95.1452 76.3603L92.8548 79.6397ZM126.717 96.8271L116.931 60.4801L113.069 61.5199L122.855 97.867L126.717 96.8271ZM116.121 62.6562L146.194 42.2995L143.951 38.9871L113.879 59.3438L116.121 62.6562ZM144.699 36.821L107.625 34.5039L107.375 38.4961L144.449 40.8132L144.699 36.821ZM109.369 35.7891L96.8595 2.89262L93.1207 4.31441L105.631 37.2109L109.369 35.7891ZM91.2134 2.99828L80.1053 35.8595L83.8947 37.1405L95.0027 4.27919L91.2134 2.99828ZM81.8783 34.5037L43.7773 36.8269L44.0207 40.8195L82.1217 38.4963L81.8783 34.5037ZM42.2603 42.2935L71.8669 62.6481L74.1331 59.3519L44.5264 38.9973L42.2603 42.2935ZM71.0751 60.4571L60.8262 96.794L64.676 97.8799L74.9249 61.5429L71.0751 60.4571ZM43.7773 36.8269C40.9293 37.0006 39.9091 40.6771 42.2603 42.2935L44.5264 38.9973C45.3101 39.5361 44.97 40.7616 44.0207 40.8195L43.7773 36.8269ZM96.8595 2.89262C95.8593 0.26248 92.1145 0.332526 91.2134 2.99828L95.0027 4.27919C94.7023 5.16779 93.4541 5.19112 93.1207 4.31441L96.8595 2.89262ZM146.194 42.2995C148.563 40.6953 147.555 36.9995 144.699 36.821L144.449 40.8132C143.497 40.7537 143.161 39.5218 143.951 38.9871L146.194 42.2995ZM122.102 100.067C124.399 101.67 127.445 99.5316 126.717 96.8271L122.855 97.867C122.612 96.9655 123.627 96.2526 124.393 96.7872L122.102 100.067ZM63.147 96.7843C63.9182 96.2542 64.9301 96.9791 64.676 97.8799L60.8262 96.794C60.0641 99.4962 63.0996 101.671 65.4132 100.081L63.147 96.7843Z",
      })
    );
  }
}
let ep = "rp1zs",
  ev = "rptx",
  ef = { setlistEdit: "rp1zs", textarea: "rptx" },
  em = 30,
  eh = (e) => {
    let { name: t, onConfirm: a, onCancel: i, setName: l } = e,
      o = n(null);
    r(() => {
      o.current && o.current.focus();
    }, []);
    let c = (e) => {
        13 === e.keyCode && (e.preventDefault(), a()),
          27 === e.keyCode && (e.preventDefault(), i());
      },
      d = (e) => {
        l(e.target.value);
      };
    o.current && o.current.focus();
    let u = t.length > 15 ? 2 : 1;
    return s(
      "form",
      {
        className: ef.setlistEdit,
        noValidate: !0,
        onClick: (e) => {
          e.stopPropagation();
        },
      },
      s("textarea", {
        spellcheck: !1,
        className: ef.setlistEdit,
        placeholder: "New playlist",
        maxlength: 30,
        rows: u,
        value: t,
        ref: o,
        autoComplete: "off",
        onKeyDown: c,
        onChange: d,
      })
    );
  };
class eL extends t {
  render() {
    let { width: e, height: t, className: a } = this.props;
    return s(
      "svg",
      { className: a, height: t, width: e, viewBox: "0 0 9 9" },
      s("rect", {
        y: "1.17",
        width: "1.65",
        height: "10",
        transform: "rotate(-45 0 1.17)",
      }),
      s("rect", {
        x: "7.07",
        width: "1.65",
        height: "10",
        transform: "rotate(45 7.07 0)",
      })
    );
  }
}
let eg = "Bxc1j",
  eC = "Bxc11z",
  ew = "Bxc2az",
  ex = "Bxc1j Bxc11e",
  eb = "Bxc1j Bxc160",
  ek = "Bxc23n",
  ey = {
    setlist: "Bxc1j",
    name: "Bxc11z",
    remove: "Bxc2az",
    setlistActive: "Bxc1j Bxc11e",
    setlistRemove: "Bxc1j Bxc160",
    shaking: "Bxc23n",
  },
  eN = a((e) => {
    let {
        name: t,
        id: a,
        removable: i,
        confirmRemove: r,
        active: l,
        shaking: n,
        onClick: o,
        onRemoveClick: c,
      } = e,
      d = () => {
        o(a);
      },
      u = (e) => {
        e.stopPropagation(), c(a);
      },
      p = l ? ey.setlistActive : ey.setlist;
    return s(
      "li",
      {
        className: (p = `${(p = r ? ey.setlistRemove : p)} ${
          n ? ey.shaking : ""
        }`),
        onClick: d,
        "data-playlist": t,
      },
      s("button", { className: ey.name, title: t }, t),
      i &&
        s(
          "button",
          { className: ey.remove, onClick: u, "data-feature": "remove" },
          s(eL, { width: 9, height: 9 })
        )
    );
  }),
  eM = "E41oo",
  eB = "E422r",
  eZ = "E42as",
  eA = "E4bj",
  ej = { setlists: "E41oo", add: "E422r", edit: "E42as", container: "E4bj" },
  eP = () => {
    let { setlists: e, dispatch: t } = m("setlists"),
      { activeSetId: a, createSetForm: i, removeSetId: r, markedIds: l } = e,
      n = (e) => {
        e.stopPropagation(), t("setlists/openCreate");
      };
    return s(
      "aside",
      { id: "playlist-menu", className: ej.setlists },
      s(
        "div",
        { className: ej.container },
        s(
          "ul",
          null,
          s(eN, {
            name: "Favorites",
            active: !a,
            onClick: () => t("setlists/select", void 0),
          }),
          s(
            "li",
            {},
            s(
              "button",
              { id: "create-playlist", className: ej.add, onClick: n },
              "Create playlist"
            )
          ),
          i &&
            s(
              "li",
              { className: ej.edit },
              s(eh, {
                name: i.name,
                onConfirm: () => t("setlists/confirmCreate"),
                onCancel: () => t("setlists/cancelCreate"),
                setName: (e) => t("setlists/changeName", e),
              })
            ),
          e.setlists.map((e) =>
            s(eN, {
              id: e.id,
              name: e.name,
              active: e.id === a,
              shaking: l.includes(e.id),
              removable: !0,
              confirmRemove: r === e.id,
              onRemoveClick: (s) =>
                t(
                  r === e.id ? "setlists/confirmRemove" : "setlists/initRemove",
                  s
                ),
              onClick: (e) => t("setlists/select", e),
            })
          )
        )
      )
    );
  };
class eI extends t {
  render() {
    return s(
      "svg",
      { height: 100, width: 188, viewBox: "0 0 188 100", fill: "#3A3A3A" },
      s("rect", { x: "53", width: "135", height: "4.1" }),
      s("rect", { x: "53", y: "24", width: "135", height: "4.1" }),
      s("rect", { x: "89", y: "48", width: "99", height: "4.1" }),
      s("rect", { y: "48", width: "70", height: "4.1" }),
      s("rect", {
        x: "33",
        y: "85",
        width: "70",
        height: "4.1",
        transform: "rotate(-90 33 85)",
      }),
      s("rect", { x: "53", y: "72", width: "135", height: "4.1" }),
      s("rect", { y: "96", width: "188", height: "4.1" })
    );
  }
}
let eD = "Cw8192",
  eR = "Cw82ur",
  eS = "Cw82yi",
  eE = "Cw8xl",
  eF = "Cw81er",
  eW = "Cw84r",
  ez = "Cw823p",
  eO = "Cw8gq",
  eq = "Cw81et",
  eT = "Cw8i5",
  e$ = {
    favoritesContainer: "Cw8192",
    stubWrapper: "Cw82ur",
    songsWrapper: "Cw82yi",
    songsWrapperMobile: "Cw8xl",
    resetHint: "Cw81er",
    favorites: "Cw84r",
    exitActive: "Cw823p",
    enterActive: "Cw8gq",
    enter: "Cw81et",
    exit: "Cw8i5",
  };
var eH = null,
  eK = null,
  eG = null,
  eY = null,
  e_ = null,
  eV = null,
  eJ = null,
  eQ = null,
  eU = null,
  eX = null,
  e1 = [eH, eK, eG, eY, e_, eV, eJ, eQ, eU, eX];
function e9(e, t) {
  if (t && "" !== t) {
    let s = t
      .toLowerCase()
      .trim()
      .split(" ")
      .filter((e) => e);
    return e.filter((e) => {
      let t = e.title.toLowerCase(),
        a = e.artist.toLowerCase();
      return s.every((e) => -1 !== t.indexOf(e) || -1 !== a.indexOf(e));
    });
  }
  return e;
}
let e3 = (e, t) =>
    e &&
    e.map((e) => {
      let s = e.tracks;
      if (s) {
        let a = s.reduce(t, -1);
        return -1 !== a ? { ...e, defaultTrack: a } : e;
      }
      return e;
    }),
  e4 = (e) => {
    switch (e) {
      case R:
        return B;
      case D:
        return M;
      case I:
        return Z;
      default:
        return () => !1;
    }
  },
  e2 = (e) => (e && e.isDrums ? M : e && e.isBassGuitar ? B : Z),
  e6 = a((e) => {
    let { route: t, query: a, user: r, device: c, isSmallScreen: d, id: u } = e,
      { gettext: p } = h(e1),
      {
        favorites: v,
        setlists: f,
        meta: M,
        dispatch: B,
      } = m("favorites", "setlists", "meta"),
      Z = n(),
      I = n();
    E(Z, I, "FavoritesPanel");
    let { isLoggedIn: D } = r,
      { isDesktop: R, isPhone: S, isTablet: G } = c,
      { pattern: Y, loading: _ } = v,
      { activeSetId: V } = f,
      J = R && !L(r),
      [Q] = l("none"),
      [U, X] = l(void 0),
      [ee, et] = l(null),
      es = v.filters.instrument,
      ea = (e) => {
        A(e), B("favorites/filter/instrument", e);
      },
      ei = () => {
        A(j), B("favorites/filter/reset");
      },
      er = v.filters.difficulty,
      el = (e) => B("favorites/filter/difficulty", e),
      en = v.filters.tunings,
      eo = en[es] || g,
      ec = (e) => B("favorites/filter/tuning", { instrument: es, tuning: e }),
      ep = C(M),
      ev = e2(ep);
    es !== j && (ev = e4(es));
    let ef = (e, t, s, a) =>
        ev(t.instrumentId) && (-1 === e || t.views > a[e].views) ? s : e,
      em = o(() => {
        let e = V ? f.setlists.find((e) => e.id === V).songs : v.favorites;
        return e3(e, ef);
      }, [v.favorites, V, f.setlists, ev]),
      eh = o(() => e9(em, Y), [em, Y]),
      eL = P(es),
      eg = o(() => {
        let e = eL ? eh : w(eh, Q, er),
          t = x(e, es),
          s = b(t, eo);
        return s;
      }, [eh, Q, er, es, eo]),
      eC = !S && f.setlists && f.setlists.length > 0,
      ew = v.favorites && v.favorites.length > 0,
      ex = em && em.length > 0,
      eb = eg && eg.length > 0,
      ek = (e) => {
        e === ee ? et(null) : et(e), X(void 0);
      },
      ey = 0 === v.pattern.length ? {} : { pattern: v.pattern },
      eN = k.map((e) => y("/a/wa/favorites", e, ey)),
      eM = {
        tuningFilter: eo,
        instrumentFilter: es,
        difficultyFilter: er,
        setTuningFilter: ec,
        setInstrumentFilter: ea,
        setDifficultyFilter: el,
        difficultyFilterNA: eL,
        isSmallScreen: d,
        spacerSize: S ? "big" : "small",
        instrumentSEOLinks: eN,
        activeFilter: ee,
        onFilterClick: ek,
      },
      eB = i((e) => {
        B("favorites/filter", e), N(e);
      }, []),
      eZ = i((e) => {
        e.preventDefault(), B("setlists/select", void 0);
      }, []),
      eA = (e) => {
        X(e), et(null), B("setlists/panelClick");
      },
      ej = i(() => {
        X(void 0), et(null), B("setlists/panelClick");
      }, []),
      eD = i(() => {
        ei(), eB("");
      }, []),
      eR = V
        ? `Filter ${f.setlists.find((e) => e.id === V).name}`
        : "Filter favorites";
    return s(
      H,
      { title: p("Favorites"), id: u, onClick: ej },
      (ew || eC) &&
        s(
          F,
          { noObserver: !0 },
          s(T, {
            inputRef: I,
            value: Y,
            isDesktop: R,
            loading: _,
            placeholder: eR,
            setValue: eB,
          })
        ),
      (ew || eC) &&
        s(
          "div",
          { className: e$.favoritesContainer },
          !S && s(eP, null),
          ex &&
            eb &&
            s(
              "div",
              { className: S ? e$.songsWrapperMobile : e$.songsWrapper },
              s(
                F,
                {},
                s(W, eM),
                D && J && s(z, { page: t.page, instrumentFilter: es })
              ),
              s(
                "div",
                { ref: Z, className: e$.favorites, "data-list": "favorites" },
                eg.map((e) => {
                  let t = [];
                  f.setlists.forEach((s) => {
                    let a = !s.songs.find((t) => t.songId === e.songId);
                    t.push({ name: s.name, id: s.id, active: a });
                  });
                  let a = V
                    ? () =>
                        B("setlists/removeSong", {
                          setlistId: V,
                          songId: e.songId,
                        })
                    : () => B("favorites/delete", e.songId);
                  return s(ed, {
                    key: `${V}${e.songId}`,
                    isPhone: S,
                    song: e,
                    addOptions: t,
                    dropdownShown: U === e.songId,
                    isActive: M && M.songId === e.songId,
                    optionsAlwaysOn: G,
                    inSetlist: !!V,
                    onAdd: (e, t) =>
                      B("setlists/addSong", { song: e, setlistId: t }),
                    onClick: () => {
                      B("setlists/panelClick");
                    },
                    onOptionsClick: eA,
                    onRemove: a,
                    difficultyNA: eL,
                  });
                })
              )
            ),
          ex &&
            !eb &&
            s(
              "div",
              { className: e$.stubWrapper },
              s(
                "div",
                { className: K.stubWrapper },
                s(W, eM),
                s(
                  $,
                  {
                    id: "notfound",
                    header: p("No tabs found"),
                    headerColor: "red",
                    icon: () => s(O, null),
                  },
                  q({
                    usesFilters: !1,
                    numResults: eh.length,
                    resetFilter: eh.length > 0 ? ei : eD,
                  })
                )
              )
            ),
          !ex &&
            s(
              "div",
              { className: e$.stubWrapper },
              s(
                "div",
                { className: K.stubWrapper },
                V
                  ? s(
                      $,
                      {
                        id: "notfound",
                        header: p("Playlist is empty"),
                        icon: () => s(eI, null),
                      },
                      s(
                        "div",
                        { className: e$.resetHint },
                        s(
                          "a",
                          { onClick: eZ, tabIndex: 0 },
                          p("Go to Favorites")
                        ),
                        p(" to fill it with songs")
                      )
                    )
                  : s($, {
                      id: "nofavorites",
                      header: p("You have no favorites."),
                      icon: () => s(eu, null),
                      hint: () =>
                        p(
                          "To create a\xa0favorite, open a\xa0song and click on the\xa0star."
                        ),
                    })
              )
            )
        ),
      !eC &&
        !ew &&
        s($, {
          id: "nofavorites",
          header: v.error
            ? p("Favorites are temporary unavailable")
            : p("You have no favorites"),
          icon: () => s(eu, null),
          hint: () =>
            v.error
              ? p("We will return them back as\xa0soon as\xa0possible")
              : p(
                  "To create a\xa0favorite, open a\xa0song and click on the\xa0star."
                ),
        })
    );
  });
export { e6 as default };
