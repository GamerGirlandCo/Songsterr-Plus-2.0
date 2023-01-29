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
	k as l,
	bb as o,
	bc as c,
	bd as u,
	be as d,
	bD as f,
	bf as m,
	bg as g,
	bh as h,
	bi as p,
	bj as b,
	h as C,
	j as v,
	bk as I,
} from "./index.c64a48b4.js";
import { A as j } from "./ActionButton.3cab06c5.js";
import {
	u as k,
	S as F,
	a as y,
	b as S,
	I as _,
	R as w,
} from "./useSongListHotkeys.4d7153e3.js";
import { S as x } from "./SongsItem.5dc8f031.js";
import { S as A } from "./SearchBox.a04960d8.js";
import { S as O } from "./Stub.4f8edbef.js";
import { P as T } from "./Panel.7e25754f.js";
let title = "Cac9v",
	artistWithLogoTitle = "Cac9v Cac32o",
	searchContainer = "Cacqb",
	divider = "Cac112",
	list = "Cac299",
	songs = "Cac299 Cac9s",
	header = "Cac1v8",
	showroom = "Cac2cy",
	button = "Cac2nk",
	stubWrapper = "Cac2pm",
	artistLogo = "Cac1e8",
	__default = {
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
	ArtistPanel = t((t) => {
		let { route: L, user: N, device: P, isSmallScreen: W, id: $ } = t,
			{ artist: B, meta: M, dispatch: R } = n("artist", "meta"),
			{ gettext: q } = l(locales);
		e(() => o({ route: L, artist: B, device: P }), [B.pattern, B.filters]);
		let z = s(),
			D = s();
		k(z, D, "ArtistPanel");
		let { isDesktop: E } = P,
			// { hasPlus: H } = N,
			H = true,
			U = +L.artistId,
			V = B.artists[U] || "Unknown Artist",
			G = c(B.filters, ""),
			J = "" !== G ? ` ${G}` : "",
			K = `${V}${J} Tabs`,
			[Q, X] = r(B.pattern),
			Y = s(),
			Z = i(
				() => (t) => {
					clearTimeout(Y.current), X(t);
					let e = t.replace(/\s+/g, " ").trim();
					u(e);
					let s = () => R("artist/filter/pattern", e);
					"" === e ? s() : (Y.current = setTimeout(s, 500));
				},
				[X]
			),
			tt = () => {
				b(I), R("artist/filter/reset");
			},
			[te, ts] = r(null),
			tr = B.songs.list || [],
			ti = !!B.loading,
			ta = d(B.filters.instrument),
			tn = d(B.songs.filters.instrument),
			tl = (t) => ts(t === te ? null : t),
			to = 0 === B.pattern.length ? {} : { pattern: B.pattern },
			tc = f({ artist: V, artistId: U }),
			tu = m.map((t) => g(tc, t, to)),
			td = h(B.filters),
			tf = B.songs.hasMore,
			tm = s();
		e(() => {
			try {
				if (tm.current && hasIntersectionObserver) {
					let t = new IntersectionObserver(
						(t) => {
							t[0].isIntersecting && R("artist/more");
						},
						{
							rootMargin: "0px 0px 300px 0px",
							threshold: 1,
							root: document.getElementById("panel-artist"),
						}
					);
					return t.observe(tm.current), () => t.disconnect();
				}
			} catch (t) {
				console.error(t);
			}
		}, []);
		let tg = {
				tuningFilter: B.filters.tunings[B.filters.instrument] || p,
				instrumentFilter: B.filters.instrument,
				difficultyFilter: B.filters.difficulty,
				setTuningFilter: (t) =>
					R("artist/filter/tuning", {
						instrument: B.filters.instrument,
						tuning: t,
					}),
				setInstrumentFilter: (t) => {
					b(t), R("artist/filter/instrument", t);
				},
				setDifficultyFilter: (t) => R("artist/filter/difficulty", t),
				difficultyFilterNA: ta,
				isSmallScreen: W,
				instrumentSEOLinks: tu,
				activeFilter: te,
				onFilterClick: tl,
			},
			th = () => ts(null),
			tp = () => {
				tt(), Z("");
			};
		return a(T, {
			title: K,
			id: $,
			listId: U,
			styles: __default,
			onClick: th,
			children: [
				a(F, {
					children: [
						a(A, {
							value: Q,
							setValue: Z,
							isDesktop: E,
							loading: ti,
							inputRef: D,
							placeholder: W ? q("Filter tabs") : `Filter ${V} tabs`,
						}),
						a(y, tg),
						E &&
							!H &&
							a(S, { page: L.page, instrumentFilter: B.filters.instrument }),
					],
				}),
				tr.length > 0 &&
					a("div", {
						className: __default.songs,
						"data-list": "artist",
						ref: z,
						children: tr.map((t) =>
							a(
								x,
								{
									song: t,
									isActive: M && M.songId === t.songId,
									numerated: !1,
									difficultyNA: tn,
								},
								t.songId.toString()
							)
						),
					}),
				!hasIntersectionObserver &&
					B.songs.hasMore &&
					a("div", {
						className: __default.button,
						children: a(j, {
							onClick: () => R("artist/more"),
							title: q("Show more"),
							processing: !!B.loading,
						}),
					}),
				hasIntersectionObserver &&
					a("div", {
						ref: tm,
						children: [
							tf &&
								!!B.loading &&
								a(C, {
									fill: "#777",
									width: 35,
									height: 35,
									className: v.songs,
								}),
						],
					}),
				!ti &&
					0 === tr.length &&
					a("div", {
						className: __default.stubWrapper,
						children: [
							a(O, {
								id: "notfound",
								header: q("No tabs found"),
								headerColor: "red",
								icon: () => a(_, {}),
								children: a(w, {
									usesFilters: td,
									numResults: 0,
									resetFilter: td ? tt : tp,
								}),
							}),
						],
					}),
			],
		});
	});
export { ArtistPanel as default };
