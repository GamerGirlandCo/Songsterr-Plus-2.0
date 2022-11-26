import {
	d as e,
	a as o,
	w as a,
	T as s,
	h as r,
	q as t,
} from "./preact.df92b1fd.js";
import {
	p as l,
	u as n,
	i as i,
	d as c,
	L as m,
	e as h,
	A as d,
	S as u,
	f as p,
	c as g,
} from "./index.9a48cd28.js";
var f = "/static/media/plus-showroom-footer.6a04360c.svg";
let w = "ln1lo",
	y = "ln27z",
	k = "ln1js",
	N = { loading: "ln1lo", line: "ln27z", string: "ln1js" };
var C = N;
let v = 7,
	P = 5;
class b extends e {
	render() {
		let e = Array(7);
		for (let a = 0; a < 7; a++) {
			let s = [, , , , ,];
			for (let r = 0; r < 5; r++)
				s[r] = o("div", { className: C.string, key: r + 1 });
			e[a] = o("div", { className: C.line, key: a + 1 }, s);
		}
		return o("div", { className: C.loading, role: "main" }, e);
	}
}
let B = "Cek21w",
	A = l + " Cek1gy",
	F = l + " Cek1gy Cek2c7",
	S = "Cek20l",
	T = "Cek1yy",
	_ = "Cek1lw",
	x = "Ceksv",
	G = "Cek1f0",
	L = {
		main: "Cek21w",
		showroom: l + " Cek1gy",
		showroomPlusBanner: l + " Cek1gy Cek2c7",
		plusBanner: "Cek20l",
		link: "Cek1yy",
		approom: "Cek1lw",
		plus: "Ceksv",
		banner: "Cek1f0",
	};
var j = "/static/media/download375.5971505d.svg";
let D = a((e) => {
		let { songId: a, showPlusBanner: r } = e,
			{
				dispatch: t,
				device: l,
				ads: u,
				isTestMode: p,
			} = n("device", "ads", "isTestMode"),
			g = s(() => {
				let e = u.notsyFailed ? "Footer Banner" : "Footer Banner All Later";
				t("curiosity/setConversionProps", { "Last referring link": e }),
					t("curiosity/google", {
						category: "Showroom",
						action: "Clicked on Footer Banner",
					});
			}, [t, u]),
			w = i(l.os),
			y = c(l.os),
			k = !w && !y;
		if (k) {
			if (r)
				return o(
					"section",
					{ className: L.main, id: "showroom" },
					o(
						"div",
						{ className: L.showroomPlusBanner, id: "PlusBanner" },
						o(
							m,
							{ className: L.plusBanner, to: "/a/wa/plus", onClick: g },
							o("img", { src: f, alt: "Get Plus" })
						)
					)
				);
			h("tab_page", { isTargeted: !0, page: "tab" });
			let N = u.notsyFailed || p,
				C = N ? L.showroomPlusBanner : L.showroom;
			return o(
				"section",
				{ className: L.main, id: "showroom" },
				o(
					"div",
					{ className: C, id: "Redesign_ATF_tab_page_728x90" },
					N &&
						o(
							m,
							{ className: L.plusBanner, to: "/a/wa/plus", onClick: g },
							o("img", { src: f, alt: "Get Plus" })
						)
				)
			);
		}
		return o(
			"section",
			{ className: L.main, id: "showroom" },
			o(
				d,
				{
					source: "bottom_banner",
					attrs: { className: L.link },
					extra: { songId: a },
					eventProperties: {
						Via: "bottom banner",
						"App store": w ? "Google Play" : "App Store",
					},
				},
				o("img", { src: j, className: L.approom, alt: "Download the App" })
			)
		);
	}),
	R = "Bho10o",
	z = "Bho1s0",
	E = "Bho1fy",
	M = { error: "Bho10o", title: "Bho1s0", subtitle: "Bho1fy" };
function I() {
	return o(
		"section",
		{ className: M.error },
		o("h1", { className: M.title }, o("span", null, "Page Not Found!")),
		o(
			"h2",
			{ className: M.subtitle },
			"Please try ",
			o(m, { to: "/" }, "searching"),
			" for the song you need."
		)
	);
}
function O() {
	let { dispatch: e } = n();
	return (
		r(() => e("curiosity/error", { error: "Network" }), []),
		o(
			"section",
			{ className: M.error },
			o("h1", { className: M.title }, o("span", null, "Network Error")),
			o(
				"h2",
				{ className: M.subtitle },
				"Please, check your network connection and try again."
			)
		)
	);
}
function V() {
	let e = t(u);
	return o(
		"button",
		{
			className: p.link,
			onClick: () =>
				e.dispatch("consent/view", { suite: "tcf", view: "details" }),
		},
		"Privacy Settings"
	);
}
function W(e) {
	let { withAds: a, device: s, copyright: r, links: t = !0 } = e;
	return o(
		"footer",
		{ className: a ? g.footerWithAds : g.footer },
		r &&
			o(
				"div",
				{ className: g.copyright, "aria-label": "copyright" },
				"All content on this page is the property of the copyright owner of the original composition"
			),
		t &&
			o(
				"div",
				{ className: g.tos, "aria-label": "terms of service" },
				o(m, { href: "/a/wa/about" }, "About"),
				" | ",
				o(m, { href: "/a/wa/privacy" }, "Privacy Policy"),
				" | ",
				o(m, { href: "/a/wa/terms" }, "Terms Of Service"),
				" | ",
				s.hasGDPR && o(V, null),
				s.hasGDPR && " | ",
				o("a", { href: "https://www.songsterr.com/blog/" }, "Blog"),
				" | ",
				o(m, { href: "/tags" }, "Top Tags "),
				s.hasCCPA && " | ",
				s.hasCCPA &&
					o(
						"a",
						{
							href: "/a/wa/do-not-sell-my-personal-information",
							rel: "nofollow",
						},
						"Do Not Sell My Personal Information"
					)
			)
	);
}
export { W as A, b as L, I as N, D as S, O as a };
