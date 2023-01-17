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
	j as a,
	aZ as o,
	a_ as c,
	a$ as u,
	b0 as m,
	b1 as d,
	b2 as g,
	b3 as f,
	b4 as p,
	b5 as h,
	g as b,
	h as v,
	b6 as S,
} from "./index.9148933a.js";
import {
	u as I,
	S as j,
	a as x,
	b as y,
	I as F,
	R as k,
} from "./useSongListHotkeys.231a3f1f.js";
import { S as C } from "./SongsItem.9cde747f.js";
import { S as N } from "./SearchBox.94e72d54.js";
import { S as O } from "./Stub.4f8edbef.js";
import { A as P } from "./ActionButton.02df805a.js";
import { P as w } from "./Panel.1b182ff5.js";
import { _ as T } from "./SongsPanel.module.ee40cfdb.js";
import "./audio.1ae45449.js";
import "./env.1ef38fce.js";
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
		let { route: _, user: z, device: A, isSmallScreen: B, id: M } = e,
			{
				dispatch: R,
				songs: $,
				meta: D,
				experiments: E,
			} = l("songs", "meta", "experiments"),
			{ gettext: H } = a(locales);
		t(() => o({ route: _, songs: $, device: A }), [$.pattern, $.filters]),
			t(() => {
				E.search_admin?.status === "pending" &&
					R("experiments/activate", { experimentName: "search_admin" });
			});
		let L = s(),
			V = s();
		I(L, V, "SongsPanel");
		let { isDesktop: W } = A,
			// { hasPlus: Z } = z,
			Z = true,
			q = $.songs.pattern,
			G = q.length > 0,
			J = c($.filters, ""),
			K = "" !== J ? ` ${J}` : "",
			[Q, U] = n($.pattern),
			X = s(),
			Y = r(
				() => (e) => {
					clearTimeout(X.current), U(e);
					let t = e.replace(/\s+/g, " ").trim();
					u(t);
					let s = () => R("songs/filter/pattern", t);
					"" === t ? s() : (X.current = setTimeout(s, 500));
				},
				[U]
			),
			ee = () => {
				h(S), R("songs/filter/reset");
			},
			[et, en] = n(null),
			er = $.songs.list || [],
			ei = 0 === $.pattern.length && 0 === er.length,
			el = m($.filters.instrument),
			ea = m($.songs.filters.instrument),
			eo = (e) => en(e === et ? null : e),
			ec = 0 === $.pattern.length ? {} : { pattern: $.pattern },
			eu = d.map((e) => g("/", e, ec)),
			em = f($.songs.filters),
			ed = $.songs.hasMore && !ei,
			eg = s();
		t(() => {
			try {
				if (eg.current && hasIntersectionObserver) {
					let e = new IntersectionObserver(
						(e) => {
							e[0].isIntersecting && R("songs/more");
						},
						{
							rootMargin: "0px 0px 300px 0px",
							threshold: 1,
							root: document.getElementById("panel-search"),
						}
					);
					return e.observe(eg.current), () => e.disconnect();
				}
			} catch (e) {
				console.error(e);
			}
		}, []);
		let ef = {
				tuningFilter: $.filters.tunings[$.filters.instrument] || p,
				instrumentFilter: $.filters.instrument,
				difficultyFilter: $.filters.difficulty,
				setTuningFilter: (e) =>
					R("songs/filter/tuning", {
						instrument: $.filters.instrument,
						tuning: e,
					}),
				setInstrumentFilter: (e) => {
					h(e), R("songs/filter/instrument", e);
				},
				setDifficultyFilter: (e) => R("songs/filter/difficulty", e),
				difficultyFilterNA: el,
				spacerSize: G ? "normal" : "big",
				numberSpacer: !G,
				isSmallScreen: B,
				instrumentSEOLinks: eu,
				activeFilter: et,
				onFilterClick: eo,
			},
			ep = () => en(null),
			eh = () => {
				ee(), Y("");
			};
		return i(w, {
			title: `Search${K} Tabs`,
			id: M,
			styles: T,
			onClick: ep,
			children: [
				i(j, {
					children: [
						i("div", {
							className: T.searchContainer,
							children: [
								i(N, {
									value: Q,
									setValue: Y,
									isDesktop: W,
									loading: !!$.loading,
									inputRef: V,
									placeholder: H("Search over 800,000 tabs"),
								}),
							],
						}),
						i(x, ef),
						W &&
							!Z &&
							i(y, { page: _.page, instrumentFilter: $.filters.instrument }),
					],
				}),
				!ei &&
					er.length > 0 &&
					i("div", {
						className: T.songs,
						"data-list": "songs",
						ref: L,
						children: er.map((e) =>
							i(
								C,
								{
									song: e,
									isActive: D && D.songId === e.songId,
									numerated: !G,
									onClick: () => {
										R("curiosity/event", {
											event: "Clicked tab in search results",
											songId: e.songId,
											"Typo in search phrase": !1,
										});
									},
									difficultyNA: ea,
								},
								e.songId.toString()
							)
						),
					}),
				!hasIntersectionObserver &&
					$.songs.hasMore &&
					i("div", {
						className: T.button,
						children: i(P, {
							onClick: () => R("songs/more"),
							title: H("Show more"),
							processing: !!$.loading,
						}),
					}),
				hasIntersectionObserver &&
					i("div", {
						ref: eg,
						children: [
							ed &&
								!!$.loading &&
								i(b, {
									fill: "#777",
									width: 35,
									height: 35,
									className: v.songs,
								}),
						],
					}),
				!ei &&
					0 === er.length &&
					i("div", {
						className: T.stubWrapper,
						children: [
							i(O, {
								id: "notfound",
								header: H("No tabs found"),
								headerColor: "red",
								icon: () => i(F, {}),
								children: i(k, {
									usesFilters: em,
									numResults: 0,
									resetFilter: em ? ee : eh,
								}),
							}),
						],
					}),
			],
		});
	});
export { SongsPanel as default };
