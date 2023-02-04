import {
  R as t,
  h as e,
  _ as s,
  p as r,
  F as i,
  o as a,
} from "./preact.3d326435.js";
import {
  u as n,
  n as l,
  bd as o,
  be as c,
  bf as u,
  bg as m,
  bF as f,
  bh as d,
  bi as g,
  bj as p,
  bk as b,
  bl as C,
  h as h,
  k as v,
  m as F,
  bm as I,
} from "./index.659fabbf.js";
import { A as j } from "./ActionButton.1cbc2cf9.js";
import {
  u as y,
  S as S,
  a as k,
  b as w,
  I as x,
  R as A,
} from "./useSongListHotkeys.074f3727.js";
import { S as N } from "./SongsItem.48fdaca6.js";
import { S as T } from "./SearchBox.3262ea86.js";
import { S as L } from "./Stub.4f8edbef.js";
import { P as P } from "./Panel.693a3a8d.js";
import "./YoutubeLogo.249f9c5a.js";
let $ = "Cac9v",
  B = "Cac9v Cac32o",
  M = "Cacqb",
  R = "Cac112",
  W = "Cac299",
  q = "Cac299 Cac9s",
  O = "Cac1v8",
  D = "Cac2cy",
  E = "Cac2nk",
  H = "Cac2pm",
  U = "Cac1e8",
  V = {
    title: "Cac9v",
    artistWithLogoTitle: "Cac9v Cac32o",
    searchContainer: "Cacqb",
    divider: "Cac112",
    list: "Cac299",
    songs: "Cac299 Cac9s",
    header: "Cac1v8",
    showroom: "Cac2cy",
    button: "Cac2nk",
    stubWrapper: "Cac2pm",
    artistLogo: "Cac1e8",
  };
var Y = null,
  z = null,
  G = null,
  J = null,
  K = null,
  Q = null,
  X = null,
  Z = null,
  _ = null,
  tt = null,
  te = [Y, z, G, J, K, Q, X, Z, _, tt];
let ts = "IntersectionObserver" in window,
  tr = t((t) => {
    let { route: $, user: B, device: M, isSmallScreen: R, id: W } = t,
      { artist: q, meta: O, dispatch: D } = n("artist", "meta"),
      { gettext: E } = l(te);
    e(() => o({ route: $, artist: q, device: M }), [q.pattern, q.filters]);
    let H = s(),
      U = s();
    y(H, U, "ArtistPanel");
    let { isDesktop: Y } = M,
      z = +$.artistId,
      G = q.artists[z] || "Unknown Artist",
      J = c(q.filters, ""),
      K = "" !== J ? ` ${J}` : "",
      Q = `${G}${K} Tabs`,
      [X, Z] = r(q.pattern),
      _ = s(),
      tt = i(
        () => (t) => {
          clearTimeout(_.current), Z(t);
          let e = t.replace(/\s+/g, " ").trim();
          u(e);
          let s = () => D("artist/filter/pattern", e);
          "" === e ? s() : (_.current = setTimeout(s, 500));
        },
        [Z]
      ),
      tr = () => {
        C(I), D("artist/filter/reset");
      },
      [ti, ta] = r(null),
      tn = q.songs.list || [],
      tl = !!q.loading,
      to = m(q.filters.instrument),
      tc = m(q.songs.filters.instrument),
      tu = (t) => ta(t === ti ? null : t),
      tm = 0 === q.pattern.length ? {} : { pattern: q.pattern },
      tf = f({ artist: G, artistId: z }),
      td = d.map((t) => g(tf, t, tm)),
      tg = p(q.filters),
      tp = q.songs.hasMore,
      tb = s();
    e(() => {
      try {
        if (tb.current && ts) {
          let t = new IntersectionObserver(
            (t) => {
              t[0].isIntersecting && D("artist/more");
            },
            {
              rootMargin: "0px 0px 300px 0px",
              threshold: 1,
              root: document.getElementById("panel-artist"),
            }
          );
          return t.observe(tb.current), () => t.disconnect();
        }
      } catch (t) {
        console.error(t);
      }
    }, []);
    let tC = {
        tuningFilter: q.filters.tunings[q.filters.instrument] || b,
        instrumentFilter: q.filters.instrument,
        difficultyFilter: q.filters.difficulty,
        setTuningFilter: (t) =>
          D("artist/filter/tuning", {
            instrument: q.filters.instrument,
            tuning: t,
          }),
        setInstrumentFilter: (t) => {
          C(t), D("artist/filter/instrument", t);
        },
        setDifficultyFilter: (t) => D("artist/filter/difficulty", t),
        difficultyFilterNA: to,
        isSmallScreen: R,
        instrumentSEOLinks: td,
        activeFilter: ti,
        onFilterClick: tu,
      },
      th = () => ta(null),
      tv = () => {
        tr(), tt("");
      };
    return a(P, {
      title: Q,
      id: W,
      listId: z,
      styles: V,
      onClick: th,
      children: [
        a(S, {
          children: [
            a(T, {
              value: X,
              setValue: tt,
              isDesktop: Y,
              loading: tl,
              inputRef: U,
              placeholder: R ? E("Filter tabs") : `Filter ${G} tabs`,
            }),
            a(k, tC),
            Y &&
              !h(B) &&
              a(w, { page: $.page, instrumentFilter: q.filters.instrument }),
          ],
        }),
        tn.length > 0 &&
          a("div", {
            className: V.songs,
            "data-list": "artist",
            ref: H,
            children: tn.map((t) =>
              a(
                N,
                {
                  song: t,
                  isActive: O && O.songId === t.songId,
                  numerated: !1,
                  difficultyNA: tc,
                },
                t.songId.toString()
              )
            ),
          }),
        !ts &&
          q.songs.hasMore &&
          a("div", {
            className: V.button,
            children: a(j, {
              onClick: () => D("artist/more"),
              title: E("Show more"),
              processing: !!q.loading,
            }),
          }),
        ts &&
          a("div", {
            ref: tb,
            children: [
              tp &&
                !!q.loading &&
                a(v, {
                  fill: "#777",
                  width: 35,
                  height: 35,
                  className: F.songs,
                }),
            ],
          }),
        !tl &&
          0 === tn.length &&
          a("div", {
            className: V.stubWrapper,
            children: [
              a(L, {
                id: "notfound",
                header: E("No tabs found"),
                headerColor: "red",
                icon: () => a(x, {}),
                children: a(A, {
                  usesFilters: tg,
                  numResults: 0,
                  resetFilter: tg ? tr : tv,
                }),
              }),
            ],
          }),
      ],
    });
  });
export { tr as default };
