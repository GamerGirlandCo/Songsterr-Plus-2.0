import { y as e, a as a, _ as t, d as n, e as i } from "./preact.3d326435.js";
import { S as s, H as r, a as l } from "./audio.1ae45449.js";
import {
	u as o,
	K as u,
	bK as c,
	L as d,
	M as p,
	by as m,
	bz as f,
	l as _,
	j as g,
	bL as C,
	bM as $,
	bN as v,
	bO as h,
	t as N,
	bP as y,
} from "./index.9148933a.js";
import { A as b } from "./ActionButton.02df805a.js";
import { I as B, f as P, h as k } from "./Input.bee63c02.js";
import { e as A, f as z } from "./user.f5791bbf.js";
import { b as E } from "./google.63a5e671.js";
import { P as j } from "./Panel.1b182ff5.js";
import "./env.1ef38fce.js";
function reducer(e, a) {
	switch (a.type) {
		case "process":
			return { ...e, processing: !0, error: null };
		case "success":
			return { ...e, processing: !1 };
		case "failure":
			return { ...e, processing: !1, error: a.error };
		default:
			return { ...e };
	}
}
let actions$2 = "Bok2qu",
	__default$3 = { actions: "Bok2qu" };
function AndroidPromoForm() {
	let { dispatch: t } = o(),
		[n, i] = e(reducer, { processing: !1, error: null }),
		s = async (e) => {
			e.preventDefault();
			try {
				i({ type: "process" });
				let e = await c();
				t("user/profile", e),
					t("curiosity/conversion", { event: "Activated android promo" }),
					i({ type: "success" });
			} catch (e) {
				console.error(e),
					t("curiosity/error", { error: "Android Promo", message: e.message }),
					i({ type: "failure", error: e });
			}
		};
	return a(
		"form",
		{ noValidate: !0, onSubmit: s, action: "" },
		a(u, { error: n.error }),
		a(
			"div",
			{ className: __default$3.actions },
			a(b, {
				id: "startAndroidPromo",
				title: "Start free trial",
				processing: n.processing,
			})
		)
	);
}
let section$1 = "Bab2hr",
	actions$1 = "Bab2hx",
	link$1 = "Bab2b4",
	__default$2 = { section: "Bab2hr", actions: "Bab2hx", link: "Bab2b4" },
	UpdateProfileForm = () => {
		let { dispatch: n, user: i } = o("user"),
			s = t(),
			r = t(),
			[l, c] = e(reducer, { processing: !1, error: null }),
			_ = async (e) => {
				e.preventDefault();
				try {
					c({ type: "process" }),
						p([
							{ field: s.current, validator: m },
							{ field: r.current, validator: f },
						]);
					let e = await A(s.current.value, r.current.value);
					n("user/profile", e), c({ type: "success" });
				} catch (e) {
					console.error(e), c({ type: "failure", error: e });
				}
			};
		return a(
			"section",
			{ className: __default$2.section, "data-section": "update" },
			a(
				"form",
				{ noValidate: !0, onSubmit: _, action: "" },
				a(u, { error: l.error }),
				a(B, {
					type: "text",
					label: "Name",
					ref: s,
					name: "name",
					defaultValue: i.profile.name || "",
					error: l.error,
					autocomplete: "name",
				}),
				a(B, {
					type: "email",
					label: "Email",
					ref: r,
					name: "email",
					defaultValue: i.profile.email || "",
					error: l.error,
					autocomplete: "email",
				}),
				a(
					"div",
					{ className: __default$2.actions },
					a(b, { title: "Save", processing: l.processing })
				)
			),
			a(
				d,
				{
					to: "/a/wa/account/password",
					className: __default$2.link,
					"data-link": "password",
				},
				"Change password"
			)
		);
	},
	sectionSignout = "C9u2vz",
	section = "C9u2j5",
	sectionAccount = "C9u2j5 C9u2nk",
	sectionProfile = "C9u2j5 C9u9g",
	sectionUpdateCard = "C9u2j5 C9u1d4",
	sectionPrivacy = "C9u2j5 C9uur",
	actions = "C9u1mb",
	field = P + " C9u1qv",
	hint = k + " C9u2ck",
	link = "C9u2gr",
	fieldCard = P + " C9u1qv C9uuh",
	miniCard = "C9u1q2",
	miniCardInner = "C9uxb",
	miniCardNumber = "C9u1zy",
	miniCardBtn = "C9u2x0",
	noticeTitle = "C9u2bk",
	notice = "C9ueb",
	noticeAndroid = "C9ueb C9uk4",
	noticeCancellation = "C9ueb C9u2k5",
	__default$1 = {
		sectionSignout: "C9u2vz",
		section: "C9u2j5",
		sectionAccount: "C9u2j5 C9u2nk",
		sectionProfile: "C9u2j5 C9u9g",
		sectionUpdateCard: "C9u2j5 C9u1d4",
		sectionPrivacy: "C9u2j5 C9uur",
		actions: "C9u1mb",
		field: P + " C9u1qv",
		hint: k + " C9u2ck",
		link: "C9u2gr",
		fieldCard: P + " C9u1qv C9uuh",
		miniCard: "C9u1q2",
		miniCardInner: "C9uxb",
		miniCardNumber: "C9u1zy",
		miniCardBtn: "C9u2x0",
		noticeTitle: "C9u2bk",
		notice: "C9ueb",
		noticeAndroid: "C9ueb C9uk4",
		noticeCancellation: "C9ueb C9u2k5",
	},
	badge = "Bpz1tm",
	badgePlus = "Bpz1tm Bpzg8",
	badgePlusExtended = "Bpz1tm Bpz2gy",
	badgeFree = "Bpz1tm Bpz1d",
	badgeAndroidLifetime = "Bpz1tm Bpz2j1",
	header = "Bpz1a9",
	secondary = "Bpzoo",
	primary = "Bpz1mu",
	footer = "Bpz2d3",
	icon = "Bpz32k",
	text = "Bpz171",
	button = _ + " Bpz1dt",
	__default = {
		badge: "Bpz1tm",
		badgePlus: "Bpz1tm Bpzg8",
		badgePlusExtended: "Bpz1tm Bpz2gy",
		badgeFree: "Bpz1tm Bpz1d",
		badgeAndroidLifetime: "Bpz1tm Bpz2j1",
		header: "Bpz1a9",
		secondary: "Bpzoo",
		primary: "Bpz1mu",
		footer: "Bpz2d3",
		icon: "Bpz32k",
		text: "Bpz171",
		button: _ + " Bpz1dt",
	};
var devices$1 = "/static/media/devices.fde9455f.svg",
	de$2 = null,
	es$2 = null,
	fr$2 = null,
	it$2 = null,
	ja$2 = null,
	ko$2 = null,
	pt$2 = null,
	ru$2 = null,
	zh$2 = null,
	locales$2 = [de$2, es$2, fr$2, it$2, ja$2, ko$2, pt$2, ru$2, zh$2];
function BadgeFree(e) {
	let { onClick: t } = e,
		{ gettext: n } = g(locales$2);
	return a(
		"div",
		{ className: __default.badgeFree },
		a(
			"div",
			{ className: __default.header },
			a("img", {
				src: devices$1,
				className: __default.icon,
				width: 149,
				height: 66,
			}),
			a(
				"div",
				{ className: __default.text, id: "account-type" },
				a("span", { className: __default.secondary }, n("ACCOUNT TYPE")),
				a("span", { className: __default.primary }, n("FREE"))
			)
		),
		a(
			"div",
			{ className: __default.footer, id: "account-meta" },
			a(
				d,
				{ to: "/a/wa/plus", className: __default.button, onClick: t },
				n("Upgrade to PLUS")
			)
		)
	);
}
var plus = "/static/media/plus.eaeb734d.svg",
	de$1 = null,
	es$1 = null,
	fr$1 = null,
	it$1 = null,
	ja$1 = null,
	ko$1 = null,
	pt$1 = null,
	ru$1 = null,
	zh$1 = null,
	locales$1 = [de$1, es$1, fr$1, it$1, ja$1, ko$1, pt$1, ru$1, zh$1];
let CAN_BE_CANCELED = [s.BRAINTREE, s.APP_STORE, s.GOOGLE_PLAY];
function BadgePlus(e) {
	let { subscription: t } = e,
		{ gettext: n } = g(locales$1),
		{ device: i } = o("device"),
		r = null;
	if (t) {
		let e = CAN_BE_CANCELED.includes(t.type) && t.cancellationDate,
			l = t.type === s.COUPON,
			o = t.type === s.MANUAL,
			u = t.type === s.APP_STORE && !e,
			c = t.type === s.GOOGLE_PLAY && !e,
			d = t.type === s.BRAINTREE && "plus" !== t.plan.id && !e,
			p = C.get(t.countryCode),
			m = p && n`${$(t.plan)}/mo.`,
			f = o ? "forever" : null;
		if ((t.countryCode && d && (f = n`in ${p}`), t.endDate)) {
			let e = i.locale ? [i.locale] : void 0;
			f = n`till ${v(new Date(t.endDate), e)}`;
		}
		r =
			(l || o || e || u || c || d) &&
			a(
				"div",
				{ className: __default.footer, id: "account-meta" },
				l && a("span", null, a("strong", null, "Promo")),
				o && a("span", null, a("strong", null, "Holy cow!")),
				e && a("span", null, a("strong", null, "Canceled")),
				u && a("span", null, a("strong", null, "App Store")),
				c && a("span", null, a("strong", null, "Google Play")),
				d && m && a("span", null, a("strong", null, m)),
				f && a("span", null, `Active ${f}`)
			);
	}
	return a(
		"div",
		{ className: r ? __default.badgePlusExtended : __default.badgePlus },
		a(
			"div",
			{ className: __default.header },
			a(
				"div",
				{ className: __default.header },
				a("img", {
					src: plus,
					className: __default.icon,
					width: 144,
					height: 73,
				}),
				a(
					"div",
					{ className: __default.text, id: "account-type" },
					a("span", { className: __default.secondary }, n("ACCOUNT TYPE")),
					a("span", { className: __default.primary }, n("PLUS"))
				)
			),
			r
		)
	);
}
var devices = "/static/media/android.a60e0f77.svg";
function BadgeAndroidLifetime() {
	return a(
		"div",
		{ className: __default.badgeAndroidLifetime },
		a(
			"div",
			{ className: __default.header },
			a("img", {
				src: devices,
				className: __default.icon,
				width: 86,
				height: 65,
			}),
			a(
				"div",
				{ className: __default.text, id: "account-type" },
				a("span", { className: __default.secondary }, "ACCOUNT TYPE"),
				a("span", { className: __default.primary }, "Android"),
				a("span", { className: __default.primary }, "Lifetime")
			)
		),
		a(
			"div",
			{ className: __default.footer, id: "account-meta" },
			a(
				"span",
				null,
				"You have all the features unlocked for the ",
				a(
					"a",
					{ href: h({ name: "Android" }, "android_lifetime") },
					"Songsterr Android"
				),
				" app."
			)
		)
	);
}
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
class AccountPanel extends n {
	name = i();
	email = i();
	constructor(e) {
		super(e),
			(this.state = {
				error: null,
				processing: !1,
				signoutError: null,
				signoutProcessing: !1,
			});
	}
	onUpgradeClick = () => {
		this.props.dispatch("curiosity/setConversionProps", {
			"Last referring link": "AccountPanel Upgrade Link",
		});
	};
	onMigrateClick = () => {
		this.props.dispatch("payment/popup:show");
	};
	handleSignOut = async (e) => {
		e.preventDefault();
		try {
			this.setState({ signoutProcessing: !0, signoutError: null }),
				await z(),
				this.props.dispatch("user/signOut"),
				E(),
				this.setState({ signoutProcessing: !1, signoutError: null }),
				this.props.dispatch("navigate", "/a/wa/signin");
		} catch (e) {
			this.setState({ signoutProcessing: !1, signoutError: e });
		}
	};
	render() {
		let { gettext: e } = g(locales);
		y();
		let { hasPlus: t, isLoggedIn: n, profile: i } = this.props.user;
			t = true;
		if (!n)
			return a(
				j,
				{ title: "Account", id: "account" },
				a("div", { className: "Panel-inner" })
			);
		let { plan: o, subscription: c } = i,
			p = c && !c.cancellationDate,
			m = p && c.type === s.BRAINTREE,
			f = p && c.type !== s.MANUAL,
			_ = m && "plus" === c.plan.id && "plus" !== this.props.payment.plan.id,
			C = !t && i.androidLicence === r.LIFETIME,
			$ = o === l.FREE && !C,
			v = o === l.PLUS && !C;
		return a(
			j,
			{ title: e("Account"), id: this.props.id },
			a(
				"div",
				{ className: "Panel-inner" },
				a(UpdateProfileForm, null),
				a(
					"section",
					{ className: __default$1.sectionProfile, "data-section": "profile" },
					C && a(BadgeAndroidLifetime, null),
					C &&
						a(
							"div",
							{
								className: __default$1.noticeAndroid,
								id: "account-android-notice",
							},
							a(
								d,
								{
									id: "upgradeFromAndroid",
									to: "/a/wa/plus",
									onClick: this.onUpgradeClick,
								},
								e("Upgrade to PLUS")
							),
							e(
								" to get all the features across all the platforms, or\xa0start a\xa0one month free trial."
							),
							a(AndroidPromoForm, null)
						),
					$ && a(BadgeFree, { onClick: this.onUpgradeClick }),
					$ &&
						a(
							d,
							{
								id: "activateCoupon",
								to: "/a/wa/plus/coupon",
								className: __default$1.link,
								"data-link": "coupon",
							},
							e("Activate coupon")
						),
					v && a(BadgePlus, { subscription: c }),
					f &&
						a(
							d,
							{
								id: "cancelSubscription",
								to: "/a/wa/account/subscription",
								className: __default$1.link,
								"data-link": "cancel",
							},
							e("Cancel subscription")
						),
					_ &&
						a(
							"a",
							{
								onClick: this.onMigrateClick,
								className: __default$1.link,
								"data-link": "migrate",
							},
							e("Migrate to regional price")
						)
				),
				m &&
					a(
						"section",
						{
							className: __default$1.sectionUpdateCard,
							"data-section": "card",
						},
						a(
							"div",
							{ className: __default$1.miniCard },
							a(
								"div",
								{ className: __default$1.miniCardInner },
								a(
									"div",
									{
										className: __default$1.miniCardNumber,
										"data-value": "card",
									},
									"XXXX-XXXX-XXXX-XXXX"
								),
								a(
									"div",
									{ className: __default$1.miniCardBtn },
									a(
										d,
										{
											id: "updateCardLink",
											to: "/a/wa/account/card",
											"data-link": "card",
										},
										e("Update card")
									)
								)
							)
						)
					),
				a(
					"section",
					{ className: __default$1.sectionPrivacy, "data-section": "privacy" },
					a("p", { className: __default$1.noticeTitle }, e("EXPORT")),
					a(
						"p",
						{ className: __default$1.notice, "data-label": "privacy-notice" },
						e(
							"You are in\xa0control of\xa0the content in\xa0your Songsterr account, even if\xa0you stop using Songsterr or\xa0decide to\xa0delete your account altogether."
						)
					),
					a(
						"a",
						{
							id: "exportPersonalData",
							className: __default$1.link,
							target: "_blank",
							href: "/api/privacy/data",
							"data-link": "export",
						},
						e("Download my data (JSON)")
					),
					!t &&
						a(
							d,
							{
								to: "/a/wa/account/deactivate",
								className: __default$1.link,
								"data-link": "deactivate",
							},
							e("Delete my account")
						)
				),
				a(
					"section",
					{ className: __default$1.sectionSignout, "data-section": "signout" },
					a(u, { error: this.state.signoutError }),
					a(
						"form",
						{ noValidate: !0, onSubmit: this.handleSignOut },
						a(b, {
							id: "signout",
							title: e("Sign out"),
							processing: this.state.signoutProcessing,
						})
					)
				)
			)
		);
	}
}
var AccountPanel$1 = N(AccountPanel, "user", "payment");
export { AccountPanel$1 as default };
