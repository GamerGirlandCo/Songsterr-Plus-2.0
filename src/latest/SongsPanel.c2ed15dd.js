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
	k as a,
	bb as o,
	bc as c,
	bd as u,
	be as m,
	bf as d,
	bg as g,
	bh as f,
	bi as h,
	bj as p,
	h as b,
	j as v,
	bk as S,
} from "./index.c64a48b4.js";
import {
	u as I,
	S as j,
	a as k,
	b as x,
	I as y,
	R as F,
} from "./useSongListHotkeys.4d7153e3.js";
import { S as C } from "./SongsItem.5dc8f031.js";
import { S as N } from "./SearchBox.a04960d8.js";
import { S as O } from "./Stub.4f8edbef.js";
import { A as P } from "./ActionButton.3cab06c5.js";
import { P as w } from "./Panel.7e25754f.js";
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
			{
				dispatch: _,
				songs: $,
				meta: D,
				experiments: E,
			} = l("songs", "meta", "experiments"),
			{ gettext: H } = a(locales);
		t(() => o({ route: z, songs: $, device: B }), [$.pattern, $.filters]),
			t(() => {
				E.search_admin?.status === "pending" &&
					_("experiments/activate", { experimentName: "search_admin" });
			});
		let L = s(),
			V = s();
		I(L, V, "SongsPanel");
		let { isDesktop: W } = B,
			// { hasPlus: q } = A,
			q = true,
			G = $.songs.pattern,
			J = G.length > 0,
			K = c($.filters, ""),
			Q = "" !== K ? ` ${K}` : "",
			[U, X] = n($.pattern),
			Y = s(),
			Z = r(
				() => (e) => {
					clearTimeout(Y.current), X(e);
					let t = e.replace(/\s+/g, " ").trim();
					u(t);
					let s = () => _("songs/filter/pattern", t);
					"" === t ? s() : (Y.current = setTimeout(s, 500));
				},
				[X]
			),
			ee = () => {
				p(S), _("songs/filter/reset");
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
							e[0].isIntersecting && _("songs/more");
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
				tuningFilter: $.filters.tunings[$.filters.instrument] || h,
				instrumentFilter: $.filters.instrument,
				difficultyFilter: $.filters.difficulty,
				setTuningFilter: (e) =>
					_("songs/filter/tuning", {
						instrument: $.filters.instrument,
						tuning: e,
					}),
				setInstrumentFilter: (e) => {
					p(e), _("songs/filter/instrument", e);
				},
				setDifficultyFilter: (e) => _("songs/filter/difficulty", e),
				difficultyFilterNA: el,
				spacerSize: J ? "normal" : "big",
				numberSpacer: !J,
				isSmallScreen: M,
				instrumentSEOLinks: eu,
				activeFilter: et,
				onFilterClick: eo,
			},
			eh = () => en(null),
			ep = () => {
				ee(), Z("");
			};
		return i(w, {
			title: `Search${Q} Tabs`,
			id: R,
			styles: T,
			onClick: eh,
			children: [
				i(j, {
					children: [
						i("div", {
							className: T.searchContainer,
							children: [
								i(N, {
									value: U,
									setValue: Z,
									isDesktop: W,
									loading: !!$.loading,
									inputRef: V,
									placeholder: H("Search over 800,000 tabs"),
								}),
							],
						}),
						i(k, ef),
						W &&
							!q &&
							i(x, { page: z.page, instrumentFilter: $.filters.instrument }),
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
									numerated: !J,
									onClick: () => {
										_("curiosity/event", {
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
							onClick: () => _("songs/more"),
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
								icon: () => i(y, {}),
								children: i(F, {
									usesFilters: em,
									numResults: 0,
									resetFilter: em ? ee : ep,
								}),
							}),
						],
					}),
			],
		});
	});
export { SongsPanel as default };
