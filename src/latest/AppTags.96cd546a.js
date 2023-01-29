import {
	n as e,
	o as a,
	q as s,
	r as t,
	s as l,
	t as r,
	v as n,
	u as i,
	c as d,
} from "./index.c64a48b4.js";
import { o as c, a as o } from "./preact.3d326435.js";
import {
	N as g,
	a as h,
	A as p,
	L as f,
	S as u,
} from "./AppFooter.b4e298aa.js";
import { S as m } from "./SWW.c1493299.js";
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
		? c("div", {
				className: __default.songs,
				children: [
					c("header", {
						className: __default.header,
						children: c("h1", {
							className: __default.title,
							children: [
								"Top " + (a?.tag || "") + " Tabs",
								!!a?.page && c("span", { children: " Page " + a.page }, "page"),
							],
						}),
					}),
					c("div", {
						className: __default.content,
						children: a?.songs.map((e) =>
							[
								e.hasPlayer &&
									c(
										"a",
										{ href: s(e, 0), children: e.title + " Tab" },
										"player"
									),
								e.hasChords &&
									c("a", { href: t(e), children: e.title + " Chords" }, "tags"),
							].filter(Boolean)
						),
					}),
					c("div", {
						className: __default.nav,
						children: [
							a?.page >= 1 &&
								c("a", {
									className: __default.prev,
									rel: "prev",
									href: l(a.tag, a.page - 1),
									children: "Prev page",
								}),
							a?.hasNext &&
								c("a", {
									className: __default.next,
									rel: "next",
									href: l(a.tag, a.page + 1),
									children: "Next page",
								}),
						],
					}),
				],
		  })
		: c("div", {
				className: __default.tags,
				children: [
					c("header", {
						className: __default.header,
						children: c("h1", {
							className: __default.title,
							children: [
								"Top Tags",
								!!a?.page && c("span", { children: " Page " + a.page }, "page"),
							],
						}),
					}),
					c("div", {
						className: __default.content,
						children: a?.tags.map((e) =>
							c("a", { href: l(e.name), children: r(e.name) })
						),
					}),
					c("div", {
						className: __default.nav,
						children: [
							a?.page >= 1 &&
								c("a", {
									className: __default.prev,
									rel: "prev",
									href: n(a.page - 1),
									children: "Prev page",
								}),
							a?.hasNext &&
								c("a", {
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
		if (a.isNotFound) return o(g, null);
		if (a.isNetworkFailed || a.isNetworkFailed) return o(h, null);
		if (a.isFailed || a.isFailed) return o(m, null);
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
		c = n && !r && !l && !r,
		g = n && !r && !!s.content;
	return o(
		"section",
		{ className: d.tablature, role: a.isPanel ? "complementary" : "main" },
		o(AlertManagerTags, { tags: s }),
		c &&
			o(
				"section",
				{ className: d.showroom },
				o(u, { key: "tags-showroom", songId: 27 })
			),
		r && o(f, null),
		g && o(Tags, { content: s.content, route: s.route }),
		g && o(p, { withAds: c, device: e, copyright: !1 })
	);
}
export { AppTags as default };
