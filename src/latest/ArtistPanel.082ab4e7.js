import {
  x as t,
  h as e,
  b as s,
  p as r,
  F as i,
  o as n,
} from "./preact.294f37c2.js";
import {
  u as a,
  ay as l,
  bf as o,
  bg as c,
  bh as u,
  bi as f,
  bz as m,
  bj as d,
  bk as g,
  bl as p,
  bm as b,
  bn as C,
  h as h,
  b9 as v,
  ba as I,
  bo as y,
} from "./index.6eeae9f8.js";
import { A as F } from "./ActionButton.5286af2f.js";
import {
  u as S,
  S as j,
  a as k,
  b as w,
  I as x,
  R as A,
} from "./useSongListHotkeys.b5832e87.js";
import { S as T } from "./SongsItem.8578f60d.js";
import { S as L } from "./SearchBox.791647c7.js";
import { S as N } from "./Stub.f5c89f87.js";
import { P as P } from "./Panel.404ed07e.js";
import "./YoutubeLogo.e2fbfaeb.js";
let $ = "Cac9v",
  B = "Cac9v Cac32o",
  M = "Cacqb",
  R = "Cac112",
  W = "Cac299",
  q = "Cac299 Cac9s",
  O = "Cac1v8",
  z = "Cac2cy",
  D = "Cac2nk",
  E = "Cac2pm",
  H = "Cac1e8",
  U = {
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
var V = null,
  Y = null,
  G = null,
  J = null,
  K = null,
  Q = null,
  X = null,
  Z = null,
  _ = null,
  tt = null,
  te = [V, Y, G, J, K, Q, X, Z, _, tt];
let ts = "IntersectionObserver" in window,
  tr = t((t) => {
    let { route: $, user: B, device: M, isSmallScreen: R, id: W } = t,
      { artist: q, meta: O, dispatch: z } = a("artist", "meta"),
      { gettext: D } = l(te);
    e(() => o({ route: $, artist: q, device: M }), [q.pattern, q.filters]);
    let E = s(),
      H = s();
    S(E, H, "ArtistPanel");
    let { isDesktop: V } = M,
      Y = +$.artistId,
      G = q.artists[Y] || "Unknown Artist",
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
          let s = () => z("artist/filter/pattern", e);
          "" === e ? s() : (_.current = setTimeout(s, 500));
        },
        [Z]
      ),
      tr = () => {
        C(y), z("artist/filter/reset");
      },
      [ti, tn] = r(null),
      ta = q.songs.list || [],
      tl = !!q.loading,
      to = f(q.filters.instrument),
      tc = f(q.songs.filters.instrument),
      tu = (t) => tn(t === ti ? null : t),
      tf = 0 === q.pattern.length ? {} : { pattern: q.pattern },
      tm = m({ artist: G, artistId: Y }),
      td = d.map((t) => g(tm, t, tf)),
      tg = p(q.filters),
      tp = q.songs.hasMore,
      tb = s();
    e(() => {
      try {
        if (tb.current && ts) {
          let t = new IntersectionObserver(
            (t) => {
              t[0].isIntersecting && z("artist/more");
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
          z("artist/filter/tuning", {
            instrument: q.filters.instrument,
            tuning: t,
          }),
        setInstrumentFilter: (t) => {
          C(t), z("artist/filter/instrument", t);
        },
        setDifficultyFilter: (t) => z("artist/filter/difficulty", t),
        difficultyFilterNA: to,
        isSmallScreen: R,
        instrumentSEOLinks: td,
        activeFilter: ti,
        onFilterClick: tu,
      },
      th = () => tn(null),
      tv = () => {
        tr(), tt("");
      };
    return n(P, {
      title: Q,
      id: W,
      listId: Y,
      styles: U,
      onClick: th,
      children: [
        n(j, {
          children: [
            n(L, {
              value: X,
              setValue: tt,
              isDesktop: V,
              loading: tl,
              inputRef: H,
              placeholder: R ? D("Filter tabs") : `Filter ${G} tabs`,
            }),
            n(k, tC),
            V &&
              !h(B) &&
              n(w, { page: $.page, instrumentFilter: q.filters.instrument }),
          ],
        }),
        ta.length > 0 &&
          n("div", {
            className: U.songs,
            "data-list": "artist",
            ref: E,
            children: ta.map((t) =>
              n(
                T,
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
          n("div", {
            className: U.button,
            children: n(F, {
              onClick: () => z("artist/more"),
              title: D("Show more"),
              processing: !!q.loading,
            }),
          }),
        ts &&
          n("div", {
            ref: tb,
            children: [
              tp &&
                !!q.loading &&
                n(v, {
                  fill: "#777",
                  width: 35,
                  height: 35,
                  className: I.songs,
                }),
            ],
          }),
        !tl &&
          0 === ta.length &&
          n("div", {
            className: U.stubWrapper,
            children: [
              n(N, {
                id: "notfound",
                header: D("Songs not found"),
                headerColor: "red",
                icon: () => n(x, {}),
                children: n(A, {
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
