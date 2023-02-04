import {
  R as e,
  h as t,
  _ as s,
  p as n,
  F as r,
  o as i,
} from "./preact.3d326435.js";
import {
  u as l,
  n as a,
  bd as o,
  be as u,
  bf as c,
  bg as m,
  bh as g,
  bi as d,
  bj as f,
  bk as p,
  bl as h,
  h as b,
  k as S,
  m as v,
  bm as I,
} from "./index.659fabbf.js";
import {
  u as j,
  S as x,
  a as y,
  b as F,
  I as k,
  R as C,
} from "./useSongListHotkeys.074f3727.js";
import { S as N } from "./SongsItem.48fdaca6.js";
import { S as w } from "./SearchBox.3262ea86.js";
import { S as P } from "./Stub.4f8edbef.js";
import { A as T } from "./ActionButton.1cbc2cf9.js";
import { P as A } from "./Panel.693a3a8d.js";
import { _ as B } from "./SongsPanel.module.ee40cfdb.js";
import "./YoutubeLogo.249f9c5a.js";
var M = null,
  R = null,
  _ = null,
  L = null,
  O = null,
  $ = null,
  z = null,
  D = null,
  E = null,
  H = null,
  V = [M, R, _, L, O, $, z, D, E, H];
let W = "IntersectionObserver" in window,
  Y = e((e) => {
    let { route: M, user: R, device: _, isSmallScreen: L, id: O } = e,
      {
        dispatch: $,
        songs: z,
        meta: D,
        experiments: E,
      } = l("songs", "meta", "experiments"),
      { gettext: H } = a(V);
    t(() => o({ route: M, songs: z, device: _ }), [z.pattern, z.filters]),
      t(() => {
        E.search_admin?.status === "pending" &&
          $("experiments/activate", { experimentName: "search_admin" });
      });
    let Y = s(),
      q = s();
    j(Y, q, "SongsPanel");
    let { isDesktop: G } = _,
      J = z.songs.pattern,
      K = J.length > 0,
      Q = u(z.filters, ""),
      U = "" !== Q ? ` ${Q}` : "",
      [X, Z] = n(z.pattern),
      ee = s(),
      et = r(
        () => (e) => {
          clearTimeout(ee.current), Z(e);
          let t = e.replace(/\s+/g, " ").trim();
          c(t);
          let s = () => $("songs/filter/pattern", t);
          "" === t ? s() : (ee.current = setTimeout(s, 500));
        },
        [Z]
      ),
      es = () => {
        h(I), $("songs/filter/reset");
      },
      [en, er] = n(null),
      ei = z.songs.list || [],
      el = 0 === z.pattern.length && 0 === ei.length,
      ea = m(z.filters.instrument),
      eo = m(z.songs.filters.instrument),
      eu = (e) => er(e === en ? null : e),
      ec = 0 === z.pattern.length ? {} : { pattern: z.pattern },
      em = g.map((e) => d("/", e, ec)),
      eg = f(z.songs.filters),
      ed = z.songs.hasMore && !el,
      ef = s();
    t(() => {
      try {
        if (ef.current && W) {
          let e = new IntersectionObserver(
            (e) => {
              e[0].isIntersecting && $("songs/more");
            },
            {
              rootMargin: "0px 0px 300px 0px",
              threshold: 1,
              root: document.getElementById("panel-search"),
            }
          );
          return e.observe(ef.current), () => e.disconnect();
        }
      } catch (e) {
        console.error(e);
      }
    }, []);
    let ep = {
        tuningFilter: z.filters.tunings[z.filters.instrument] || p,
        instrumentFilter: z.filters.instrument,
        difficultyFilter: z.filters.difficulty,
        setTuningFilter: (e) =>
          $("songs/filter/tuning", {
            instrument: z.filters.instrument,
            tuning: e,
          }),
        setInstrumentFilter: (e) => {
          h(e), $("songs/filter/instrument", e);
        },
        setDifficultyFilter: (e) => $("songs/filter/difficulty", e),
        difficultyFilterNA: ea,
        spacerSize: K ? "normal" : "big",
        numberSpacer: !K,
        isSmallScreen: L,
        instrumentSEOLinks: em,
        activeFilter: en,
        onFilterClick: eu,
      },
      eh = () => er(null),
      eb = () => {
        es(), et("");
      };
    return i(A, {
      title: `Search${U} Tabs`,
      id: O,
      styles: B,
      onClick: eh,
      children: [
        i(x, {
          children: [
            i("div", {
              className: B.searchContainer,
              children: [
                i(w, {
                  value: X,
                  setValue: et,
                  isDesktop: G,
                  loading: !!z.loading,
                  inputRef: q,
                  placeholder: H("Search over 800,000 tabs"),
                }),
              ],
            }),
            i(y, ep),
            G &&
              !b(R) &&
              i(F, { page: M.page, instrumentFilter: z.filters.instrument }),
          ],
        }),
        !el &&
          ei.length > 0 &&
          i("div", {
            className: B.songs,
            "data-list": "songs",
            ref: Y,
            children: ei.map((e) =>
              i(
                N,
                {
                  song: e,
                  isActive: D && D.songId === e.songId,
                  numerated: !K,
                  onClick: () => {
                    $("curiosity/event", {
                      event: "Clicked tab in search results",
                      songId: e.songId,
                      "Typo in search phrase": !1,
                    });
                  },
                  difficultyNA: eo,
                },
                e.songId.toString()
              )
            ),
          }),
        !W &&
          z.songs.hasMore &&
          i("div", {
            className: B.button,
            children: i(T, {
              onClick: () => $("songs/more"),
              title: H("Show more"),
              processing: !!z.loading,
            }),
          }),
        W &&
          i("div", {
            ref: ef,
            children: [
              ed &&
                !!z.loading &&
                i(S, {
                  fill: "#777",
                  width: 35,
                  height: 35,
                  className: v.songs,
                }),
            ],
          }),
        !el &&
          0 === ei.length &&
          i("div", {
            className: B.stubWrapper,
            children: [
              i(P, {
                id: "notfound",
                header: H("No tabs found"),
                headerColor: "red",
                icon: () => i(k, {}),
                children: i(C, {
                  usesFilters: eg,
                  numResults: 0,
                  resetFilter: eg ? es : eb,
                }),
              }),
            ],
          }),
      ],
    });
  });
export { Y as default };
