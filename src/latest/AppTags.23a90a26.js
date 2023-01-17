import {
	l as e,
	m as a,
	n as s,
	o as t,
	q as l,
	r as r,
	s as n,
	u as i,
	c as d,
} from "./index.9148933a.js";
import { o, a as c } from "./preact.3d326435.js";
import {
	N as g,
	a as p,
	A as h,
	L as f,
	S as m,
} from "./AppFooter.3676e584.js";
import "./audio.1ae45449.js";
import { S as u } from "./SWW.1ac5d8c8.js";
import "./env.1ef38fce.js";
let content = "C27i",
	tags = "C2x4",
	songs = "C22f1",
	nav = "C21dc",
	prev = e + " " + a + " C21oy",
	next = e + " " + a + " C2200",
	header = "C24a",
	title = "C22rm",
	__default = {
		content: "C27i",
		tags: "C2x4",
		songs: "C22f1",
		nav: "C21dc",
		prev: e + " " + a + " C21oy",
		next: e + " " + a + " C2200",
		header: "C24a",
		title: "C22rm",
	};
function Tags(e) {
	let { content: a, route: i } = e;
	return "tag" === i.page
		? o("div", {
				className: __default.songs,
				children: [
					o("header", {
						className: __default.header,
						children: o("h1", {
							className: __default.title,
							children: [
								"Top " + (a?.tag || "") + " Tabs",
								!!a?.page && o("span", { children: " Page " + a.page }, "page"),
							],
						}),
					}),
					o("div", {
						className: __default.content,
						children: a?.songs.map((e) =>
							[
								e.hasPlayer &&
									o(
										"a",
										{ href: s(e, 0), children: e.title + " Tab" },
										"player"
									),
								e.hasChords &&
									o("a", { href: t(e), children: e.title + " Chords" }, "tags"),
							].filter(Boolean)
						),
					}),
					o("div", {
						className: __default.nav,
						children: [
							a?.page >= 1 &&
								o("a", {
									className: __default.prev,
									rel: "prev",
									href: l(a.tag, a.page - 1),
									children: "Prev page",
								}),
							a?.hasNext &&
								o("a", {
									className: __default.next,
									rel: "next",
									href: l(a.tag, a.page + 1),
									children: "Next page",
								}),
						],
					}),
				],
		  })
		: o("div", {
				className: __default.tags,
				children: [
					o("header", {
						className: __default.header,
						children: o("h1", {
							className: __default.title,
							children: [
								"Top Tags",
								!!a?.page && o("span", { children: " Page " + a.page }, "page"),
							],
						}),
					}),
					o("div", {
						className: __default.content,
						children: a?.tags.map((e) =>
							o("a", { href: l(e.name), children: r(e.name) })
						),
					}),
					o("div", {
						className: __default.nav,
						children: [
							a?.page >= 1 &&
								o("a", {
									className: __default.prev,
									rel: "prev",
									href: n(a.page - 1),
									children: "Prev page",
								}),
							a?.hasNext &&
								o("a", {
									className: __default.next,
									rel: "next",
									href: n(a.page + 1),
									children: "Next page",
								}),
						],
					}),
				],
		  });
}
function AlertManagerTags(e) {
	let { tags: a } = e;
	if (!a.loading) {
		if (a.isNotFound) return c(g, null);
		if (a.isNetworkFailed || a.isNetworkFailed) return c(p, null);
		if (a.isFailed || a.isFailed) return c(u, null);
	}
}
function AppTags() {
	let {
			device: e,
			route: a,
			tags: s,
			user: t,
		} = i("device", "route", "tags", "user"),
		l = true,
		r = s.loading,
		n = !s.isFailed,
		o = n && !r && !l && !r,
		g = n && !r && !!s.content;
	return c(
		"section",
		{ className: d.tablature, role: a.isPanel ? "complementary" : "main" },
		c(AlertManagerTags, { tags: s }),
		o &&
			c(
				"section",
				{ className: d.showroom },
				c(m, { key: "tags-showroom", songId: 27 })
			),
		r && c(f, null),
		g && c(Tags, { content: s.content, route: s.route }),
		g && c(h, { withAds: o, device: e, copyright: !1 })
	);
}
export { AppTags as default };
