import {
	R as t,
	h as e,
	_ as s,
	p as r,
	F as a,
	o as i,
} from "./preact.3d326435.js";
import {
	u as n,
	j as l,
	aZ as o,
	a_ as c,
	a$ as u,
	b0 as d,
	bp as f,
	b1 as m,
	b2 as p,
	b3 as g,
	b4 as h,
	b5 as C,
	g as b,
	h as v,
	b6 as I,
} from "./index.9148933a.js";
import "./audio.1ae45449.js";
import { A as j } from "./ActionButton.02df805a.js";
import {
	u as F,
	S as _,
	a as y,
	b as S,
	I as k,
	R as w,
} from "./useSongListHotkeys.231a3f1f.js";
import { S as x } from "./SongsItem.9cde747f.js";
import { S as A } from "./SearchBox.94e72d54.js";
import { S as O } from "./Stub.4f8edbef.js";
import { P as T } from "./Panel.1b182ff5.js";
import "./env.1ef38fce.js";
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
		F(z, D, "ArtistPanel");
		let { isDesktop: E } = P,
			// { hasPlus: H } = N,
			H = true,
			U = +L.artistId,
			V = B.artists[U] || "Unknown Artist",
			Z = c(B.filters, ""),
			G = "" !== Z ? ` ${Z}` : "",
			J = `${V}${G} Tabs`,
			[K, Q] = r(B.pattern),
			X = s(),
			Y = a(
				() => (t) => {
					clearTimeout(X.current), Q(t);
					let e = t.replace(/\s+/g, " ").trim();
					u(e);
					let s = () => R("artist/filter/pattern", e);
					"" === e ? s() : (X.current = setTimeout(s, 500));
				},
				[Q]
			),
			tt = () => {
				C(I), R("artist/filter/reset");
			},
			[te, ts] = r(null),
			tr = B.songs.list || [],
			ta = !!B.loading,
			ti = d(B.filters.instrument),
			tn = d(B.songs.filters.instrument),
			tl = (t) => ts(t === te ? null : t),
			to = 0 === B.pattern.length ? {} : { pattern: B.pattern },
			tc = f({ artist: V, artistId: U }),
			tu = m.map((t) => p(tc, t, to)),
			td = g(B.filters),
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
		let tp = {
				tuningFilter: B.filters.tunings[B.filters.instrument] || h,
				instrumentFilter: B.filters.instrument,
				difficultyFilter: B.filters.difficulty,
				setTuningFilter: (t) =>
					R("artist/filter/tuning", {
						instrument: B.filters.instrument,
						tuning: t,
					}),
				setInstrumentFilter: (t) => {
					C(t), R("artist/filter/instrument", t);
				},
				setDifficultyFilter: (t) => R("artist/filter/difficulty", t),
				difficultyFilterNA: ti,
				isSmallScreen: W,
				instrumentSEOLinks: tu,
				activeFilter: te,
				onFilterClick: tl,
			},
			tg = () => ts(null),
			th = () => {
				tt(), Y("");
			};
		return i(T, {
			title: J,
			id: $,
			listId: U,
			styles: __default,
			onClick: tg,
			children: [
				i(_, {
					children: [
						i(A, {
							value: K,
							setValue: Y,
							isDesktop: E,
							loading: ta,
							inputRef: D,
							placeholder: W ? q("Filter tabs") : `Filter ${V} tabs`,
						}),
						i(y, tp),
						E &&
							!H &&
							i(S, { page: L.page, instrumentFilter: B.filters.instrument }),
					],
				}),
				tr.length > 0 &&
					i("div", {
						className: __default.songs,
						"data-list": "artist",
						ref: z,
						children: tr.map((t) =>
							i(
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
					i("div", {
						className: __default.button,
						children: i(j, {
							onClick: () => R("artist/more"),
							title: q("Show more"),
							processing: !!B.loading,
						}),
					}),
				hasIntersectionObserver &&
					i("div", {
						ref: tm,
						children: [
							tf &&
								!!B.loading &&
								i(b, {
									fill: "#777",
									width: 35,
									height: 35,
									className: v.songs,
								}),
						],
					}),
				!ta &&
					0 === tr.length &&
					i("div", {
						className: __default.stubWrapper,
						children: [
							i(O, {
								id: "notfound",
								header: q("No tabs found"),
								headerColor: "red",
								icon: () => i(k, {}),
								children: i(w, {
									usesFilters: td,
									numResults: 0,
									resetFilter: td ? tt : th,
								}),
							}),
						],
					}),
			],
		});
	});
export { ArtistPanel as default };
