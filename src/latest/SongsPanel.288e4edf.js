import {
  x as e,
  h as t,
  b as s,
  p as n,
  F as r,
  o as i,
} from "./preact.294f37c2.js";
import {
  u as l,
  ay as a,
  bf as o,
  bg as u,
  bh as c,
  bi as m,
  bj as g,
  bk as f,
  bl as d,
  bm as p,
  bn as h,
  h as b,
  b9 as S,
  ba as v,
  bo as I,
} from "./index.6eeae9f8.js";
import {
  u as j,
  S as y,
  a as x,
  b as F,
  I as k,
  R as C,
} from "./useSongListHotkeys.b5832e87.js";
import { S as N } from "./SongsItem.8578f60d.js";
import { S as w } from "./SearchBox.791647c7.js";
import { S as P } from "./Stub.f5c89f87.js";
import { A as T } from "./ActionButton.5286af2f.js";
import { P as _ } from "./Panel.404ed07e.js";
import { _ as A } from "./SongsPanel.module.ee40cfdb.js";
import "./YoutubeLogo.e2fbfaeb.js";
var B = null,
  M = null,
  R = null,
  L = null,
  O = null,
  $ = null,
  z = null,
  D = null,
  E = null,
  H = null,
  V = [B, M, R, L, O, $, z, D, E, H];
let W = "IntersectionObserver" in window,
  Y = e((e) => {
    let { route: B, user: M, device: R, isSmallScreen: L, id: O } = e,
      {
        dispatch: $,
        songs: z,
        meta: D,
        experiments: E,
      } = l("songs", "meta", "experiments"),
      { gettext: H } = a(V);
    t(() => o({ route: B, songs: z, device: R }), [z.pattern, z.filters]),
      t(() => {
        E.search_admin?.status === "pending" &&
          $("experiments/activate", { experimentName: "search_admin" });
      });
    let Y = s(),
      q = s(),
      { isDesktop: G } = R;
    j(Y, q, "SongsPanel");
    let J = z.songs.pattern,
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
      em = g.map((e) => f("/", e, ec)),
      eg = d(z.songs.filters),
      ef = z.songs.hasMore && !el,
      ed = s();
    t(() => {
      try {
        if (ed.current && W) {
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
          return e.observe(ed.current), () => e.disconnect();
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
    return i(_, {
      title: `Search${U} Tabs`,
      id: O,
      styles: A,
      onClick: eh,
      children: [
        i(y, {
          children: [
            i("div", {
              className: A.searchContainer,
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
            i(x, ep),
            G &&
              !b(M) &&
              i(F, { page: B.page, instrumentFilter: z.filters.instrument }),
          ],
        }),
        !el &&
          ei.length > 0 &&
          i("div", {
            className: A.songs,
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
                    E.search_admin?.status === "active" &&
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
            className: A.button,
            children: i(T, {
              onClick: () => $("songs/more"),
              title: H("Show more"),
              processing: !!z.loading,
            }),
          }),
        W &&
          i("div", {
            ref: ed,
            children: [
              ef &&
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
            className: A.stubWrapper,
            children: [
              i(P, {
                id: "notfound",
                header: H("Songs not found"),
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
