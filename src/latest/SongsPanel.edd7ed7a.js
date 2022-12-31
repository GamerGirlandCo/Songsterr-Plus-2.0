import {
	R as e,
	h as t,
	_ as s,
	p as n,
	F as r,
	o as l,
} from "./preact.bf58aca5.js";
import {
	u as i,
	k as a,
	be as o,
	bf as u,
	bg as c,
	bh as g,
	bi as m,
	bj as f,
	bk as d,
	bl as h,
	bm as p,
	h as b,
	j as S,
	bn as v,
} from "./index.e8b15340.js";
import {
	u as I,
	S as j,
	a as F,
	b as k,
	I as y,
	R as x,
} from "./useSongListHotkeys.29d43cc6.js";
import { S as N } from "./SongsItem.64889677.js";
import { S as O } from "./SearchBox.64953707.js";
import { S as P } from "./Stub.d0f0fd56.js";
import { A as w } from "./ActionButton.45f3bd1f.js";
import { P as C } from "./Panel.98ba2c65.js";
import { _ as T } from "./SongsPanel.module.ee40cfdb.js";
var de = null,
	es = null,
	fr = null,
	it = null,
	ja = null,
	ko = null,
	pt = null,
	ru = null,
	zh = null,
	locales = [de, es, fr, it, ja, ko, pt, ru, zh];
let hasIntersectionObserver = "IntersectionObserver" in window,
	SongsPanel = e((e) => {
		let { route: z, user: A, device: B, isSmallScreen: M, id: R } = e,
			{ dispatch: $, songs: D, meta: E } = i("songs", "meta"),
			{ gettext: H } = a(locales);
		t(() => o({ route: z, songs: D, device: B }), [D.pattern, D.filters]);
		let L = s(),
			V = s();
		I(L, V, "SongsPanel");
		let { isDesktop: W } = B,
			{ hasPlus: _ } = A,
			q = D.songs.pattern,
			G = q.length > 0,
			J = u(D.filters, ""),
			K = "" !== J ? ` ${J}` : "",
			[Q, U] = n(D.pattern),
			X = s(),
			Y = r(
				() => (e) => {
					clearTimeout(X.current), U(e);
					let t = e.replace(/\s+/g, " ").trim();
					c(t);
					let s = () => $("songs/filter/pattern", t);
					"" === t ? s() : (X.current = setTimeout(s, 500));
				},
				[U]
			),
			Z = () => {
				p(v), $("songs/filter/reset");
			},
			[ee, et] = n(null),
			en = D.songs.list || [],
			er = 0 === D.pattern.length && 0 === en.length,
			el = g(D.filters.instrument),
			ei = g(D.songs.filters.instrument),
			ea = (e) => et(e === ee ? null : e),
			eo = 0 === D.pattern.length ? {} : { pattern: D.pattern },
			eu = m.map((e) => f("/", e, eo)),
			ec = d(D.songs.filters),
			eg = D.songs.hasMore && !er,
			em = s();
		t(() => {
			try {
				if (em.current && hasIntersectionObserver) {
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
					return e.observe(em.current), () => e.disconnect();
				}
			} catch (t) {
				console.error(t);
			}
		}, []);
		let ef = {
				tuningFilter: D.filters.tunings[D.filters.instrument] || h,
				instrumentFilter: D.filters.instrument,
				difficultyFilter: D.filters.difficulty,
				setTuningFilter: (e) =>
					$("songs/filter/tuning", {
						instrument: D.filters.instrument,
						tuning: e,
					}),
				setInstrumentFilter: (e) => {
					p(e), $("songs/filter/instrument", e);
				},
				setDifficultyFilter: (e) => $("songs/filter/difficulty", e),
				difficultyFilterNA: el,
				spacerSize: G ? "normal" : "big",
				numberSpacer: !G,
				isSmallScreen: M,
				instrumentSEOLinks: eu,
				activeFilter: ee,
				onFilterClick: ea,
			},
			ed = () => et(null),
			eh = () => {
				Z(), Y("");
			};
		return l(C, {
			title: `Search${K} Tabs`,
			id: R,
			styles: T,
			onClick: ed,
			children: [
				l(j, {
					children: [
						l("div", {
							className: T.searchContainer,
							children: [
								l(O, {
									value: Q,
									setValue: Y,
									isDesktop: W,
									loading: !!D.loading,
									inputRef: V,
									placeholder: H("Search over 800,000 tabs"),
								}),
							],
						}),
						l(F, ef),
						W &&
							!_ &&
							l(k, { page: z.page, instrumentFilter: D.filters.instrument }),
					],
				}),
				!er &&
					en.length > 0 &&
					l("div", {
						className: T.songs,
						"data-list": "songs",
						ref: L,
						children: en.map((e) =>
							l(
								N,
								{
									song: e,
									isActive: E && E.songId === e.songId,
									numerated: !G,
									difficultyNA: ei,
								},
								e.songId.toString()
							)
						),
					}),
				!hasIntersectionObserver &&
					D.songs.hasMore &&
					l("div", {
						className: T.button,
						children: l(w, {
							onClick: () => $("songs/more"),
							title: H("Show more"),
							processing: !!D.loading,
						}),
					}),
				hasIntersectionObserver &&
					l("div", {
						ref: em,
						children: [
							eg &&
								!!D.loading &&
								l(b, {
									fill: "#777",
									width: 35,
									height: 35,
									className: S.songs,
								}),
						],
					}),
				!er &&
					0 === en.length &&
					l("div", {
						className: T.stubWrapper,
						children: [
							l(P, {
								id: "notfound",
								header: H("No tabs found"),
								headerColor: "red",
								icon: () => l(y, {}),
								children: l(x, {
									usesFilters: ec,
									numResults: 0,
									resetFilter: ec ? Z : eh,
								}),
							}),
						],
					}),
			],
		});
	});
export { SongsPanel as default };
