import {
	E as e,
	_ as t,
	s as r,
	p as s,
	F as n,
	e as i,
} from "./preact.3d0be470.js";
import {
	u as l,
	bc as a,
	bd as o,
	be as c,
	bf as m,
	bg as u,
	bh as g,
	bi as f,
	bj as d,
	bk as p,
	p as h,
	q as b,
	bl as $,
} from "./index.26929406.js";
import {
	u as F,
	_ as S,
	S as I,
	a as y,
	b as C,
	I as N,
	R as k,
} from "./SongsPanel.module.edfb9d62.js";
import { S as v } from "./SongsItem.2f4679ce.js";
import { S as M } from "./SearchBox.ba0bfad5.js";
import { S as R } from "./Stub.47893edd.js";
import { A as w } from "./ActionButton.41e1d0ef.js";
import { P as A } from "./Panel.6e54039a.js";
let P = "IntersectionObserver" in window,
	T = e((e) => {
		let { route: T, user: j, device: q, isSmallScreen: x, id: z } = e,
			{ dispatch: B, songs: D, meta: E } = l("songs", "meta");
		t(() => a({ route: T, songs: D, device: q }), [D.pattern, D.filters]);
		let V = r(),
			W = r();
		F(V, W, "SongsPanel");
		let { isDesktop: _ } = q,
			{ hasPlus: G } = j,
			H = D.songs.pattern,
			J = H.length > 0,
			K = o(D.filters, ""),
			L = "" !== K ? ` ${K}` : "",
			[O, Q] = s(D.pattern),
			U = r(),
			X = n(
				() => (e) => {
					clearTimeout(U.current), Q(e);
					let t = e.replace(/\s+/g, " ").trim();
					c(t);
					let r = () => B("songs/filter/pattern", t);
					"" === t ? r() : (U.current = setTimeout(r, 500));
				},
				[Q]
			),
			Y = () => {
				p($), B("songs/filter/reset");
			},
			[Z, ee] = s(null),
			et = D.songs.list || [],
			er = 0 === D.pattern.length && 0 === et.length,
			es = m(D.filters.instrument),
			en = m(D.songs.filters.instrument),
			ei = (e) => ee(e === Z ? null : e),
			el = 0 === D.pattern.length ? {} : { pattern: D.pattern },
			ea = u.map((e) => g("/", e, el)),
			eo = f(D.songs.filters),
			ec = D.songs.hasMore && !er,
			em = r();
			G = true;
		t(() => {
			try {
				if (em.current && P) {
					let e = new IntersectionObserver(
						(e) => {
							e[0].isIntersecting && B("songs/more");
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
		let eu = {
				tuningFilter: D.filters.tunings[D.filters.instrument] || d,
				instrumentFilter: D.filters.instrument,
				difficultyFilter: D.filters.difficulty,
				setTuningFilter: (e) =>
					B("songs/filter/tuning", {
						instrument: D.filters.instrument,
						tuning: e,
					}),
				setInstrumentFilter(e) {
					p(e), B("songs/filter/instrument", e);
				},
				setDifficultyFilter: (e) => B("songs/filter/difficulty", e),
				difficultyFilterNA: es,
				spacerSize: J ? "normal" : "big",
				numberSpacer: !J,
				isSmallScreen: x,
				instrumentSEOLinks: ea,
				activeFilter: Z,
				onFilterClick: ei,
			},
			eg = () => ee(null),
			ef = () => {
				Y(), X("");
			};
		return i(A, {
			title: `Search${L} Tabs`,
			id: z,
			styles: S,
			onClick: eg,
			children: [
				i(I, {
					children: [
						i("div", {
							className: S.searchContainer,
							children: [
								i(M, {
									value: O,
									setValue: X,
									isDesktop: _,
									loading: !!D.loading,
									inputRef: W,
									placeholder: "Search over 800,000 tabs",
								}),
							],
						}),
						i(y, eu),
						_ &&
							!G &&
							i(C, { page: T.page, instrumentFilter: D.filters.instrument }),
					],
				}),
				!er &&
					et.length > 0 &&
					i("div", {
						className: S.songs,
						"data-list": "songs",
						ref: V,
						children: et.map((e) =>
							i(
								v,
								{
									song: e,
									isActive: E && E.songId === e.songId,
									numerated: !J,
									difficultyNA: en,
								},
								e.songId.toString()
							)
						),
					}),
				!P &&
					D.songs.hasMore &&
					i("div", {
						className: S.button,
						children: i(w, {
							onClick: () => B("songs/more"),
							title: "Show more",
							processing: !!D.loading,
						}),
					}),
				P &&
					i("div", {
						ref: em,
						children: [
							ec &&
								!!D.loading &&
								i(h, {
									fill: "#777",
									width: 35,
									height: 35,
									className: b.songs,
								}),
						],
					}),
				!er &&
					0 === et.length &&
					i("div", {
						className: S.stubWrapper,
						children: [
							i(R, {
								id: "notfound",
								header: "No tabs found",
								headerColor: "red",
								icon: () => i(N, {}),
								children: i(k, {
									usesFilters: eo,
									numResults: 0,
									resetFilter: eo ? Y : ef,
								}),
							}),
						],
					}),
			],
		});
	});
export { T as default };
