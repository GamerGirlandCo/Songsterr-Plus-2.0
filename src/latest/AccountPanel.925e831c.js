import { y as e, a as a, _ as t, d as n, e as i } from "./preact.3d326435.js";
import {
	u as s,
	Q as l,
	c8 as r,
	L as o,
	R as u,
	bN as c,
	bO as d,
	n as p,
	k as m,
	c9 as f,
	ca as _,
	cb as g,
	cc as C,
	cd as $,
	w as v,
	ce as h,
	cf as N,
	bS as y,
} from "./index.c64a48b4.js";
import { A as b } from "./ActionButton.3cab06c5.js";
import { I as B, f as P, h as k } from "./Input.33ac2f73.js";
import { e as A, f as z } from "./user.0e209c5e.js";
import { b as E } from "./google.5e7db2d1.js";
import { P as x } from "./Panel.7e25754f.js";
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
	let { dispatch: t } = s(),
		[n, i] = e(reducer, { processing: !1, error: null }),
		o = async (e) => {
			e.preventDefault();
			try {
				i({ type: "process" });
				let e = await r();
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
		{ noValidate: !0, onSubmit: o, action: "" },
		a(l, { error: n.error }),
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
		let { dispatch: n, user: i } = s("user"),
			r = t(),
			p = t(),
			[m, f] = e(reducer, { processing: !1, error: null }),
			_ = async (e) => {
				e.preventDefault();
				try {
					f({ type: "process" }),
						u([
							{ field: r.current, validator: c },
							{ field: p.current, validator: d },
						]);
					let e = await A(r.current.value, p.current.value);
					n("user/profile", e), f({ type: "success" });
				} catch (e) {
					console.error(e), f({ type: "failure", error: e });
				}
			};
		return a(
			"section",
			{ className: __default$2.section, "data-section": "update" },
			a(
				"form",
				{ noValidate: !0, onSubmit: _, action: "" },
				a(l, { error: m.error }),
				a(B, {
					type: "text",
					label: "Name",
					ref: r,
					name: "name",
					defaultValue: i.profile.name || "",
					error: m.error,
					autocomplete: "name",
				}),
				a(B, {
					type: "email",
					label: "Email",
					ref: p,
					name: "email",
					defaultValue: i.profile.email || "",
					error: m.error,
					autocomplete: "email",
				}),
				a(
					"div",
					{ className: __default$2.actions },
					a(b, { title: "Save", processing: m.processing })
				)
			),
			a(
				o,
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
	button = p + " Bpz1dt",
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
		button: p + " Bpz1dt",
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
		{ gettext: n } = m(locales$2);
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
				o,
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
let CAN_BE_CANCELED = [f.BRAINTREE, f.APP_STORE, f.GOOGLE_PLAY];
function BadgePlus(e) {
	let { subscription: t } = e,
		{ gettext: n } = m(locales$1),
		{ device: i } = s("device"),
		l = null;
	if (t) {
		let e = CAN_BE_CANCELED.includes(t.type) && t.cancellationDate,
			s = t.type === f.COUPON,
			r = t.type === f.MANUAL,
			o = t.type === f.APP_STORE && !e,
			u = t.type === f.GOOGLE_PLAY && !e,
			c = t.type === f.BRAINTREE && "plus" !== t.plan.id && !e,
			d = _.get(t.countryCode),
			p = d && n`${g(t.plan)}/mo.`,
			m = r ? "forever" : null;
		if ((t.countryCode && c && (m = n`in ${d}`), t.endDate)) {
			let e = i.locale ? [i.locale] : void 0;
			m = n`till ${C(new Date(t.endDate), e)}`;
		}
		l =
			(s || r || e || o || u || c) &&
			a(
				"div",
				{ className: __default.footer, id: "account-meta" },
				s && a("span", null, a("strong", null, "Promo")),
				r && a("span", null, a("strong", null, "Holy cow!")),
				e && a("span", null, a("strong", null, "Canceled")),
				o && a("span", null, a("strong", null, "App Store")),
				u && a("span", null, a("strong", null, "Google Play")),
				c && p && a("span", null, a("strong", null, p)),
				m && a("span", null, `Active ${m}`)
			);
	}
	return a(
		"div",
		{ className: l ? __default.badgePlusExtended : __default.badgePlus },
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
			l
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
					{ href: $({ name: "Android" }, "android_lifetime") },
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
		let { gettext: e } = m(locales);
		h();
		let { isLoggedIn: n, profile: i } = this.props.user,
			t = true;
		if (!n)
			return a(
				x,
				{ title: "Account", id: "account" },
				a("div", { className: "Panel-inner" })
			);
		let { plan: s, subscription: r } = i,
			u = r && !r.cancellationDate,
			c = u && r.type === f.BRAINTREE,
			d = u && r.type !== f.MANUAL,
			p = c && "plus" === r.plan.id && "plus" !== this.props.payment.plan.id,
			_ = !t && i.androidLicence === N.LIFETIME,
			g = s === y.FREE && !_,
			C = s === y.PLUS && !_;
		return a(
			x,
			{ title: e("Account"), id: this.props.id },
			a(
				"div",
				{ className: "Panel-inner" },
				a(UpdateProfileForm, null),
				a(
					"section",
					{ className: __default$1.sectionProfile, "data-section": "profile" },
					_ && a(BadgeAndroidLifetime, null),
					_ &&
						a(
							"div",
							{
								className: __default$1.noticeAndroid,
								id: "account-android-notice",
							},
							a(
								o,
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
					g && a(BadgeFree, { onClick: this.onUpgradeClick }),
					g &&
						a(
							o,
							{
								id: "activateCoupon",
								to: "/a/wa/plus/coupon",
								className: __default$1.link,
								"data-link": "coupon",
							},
							e("Activate coupon")
						),
					C && a(BadgePlus, { subscription: r }),
					d &&
						a(
							o,
							{
								id: "cancelSubscription",
								to: "/a/wa/account/subscription",
								className: __default$1.link,
								"data-link": "cancel",
							},
							e("Cancel subscription")
						),
					p &&
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
				c &&
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
										o,
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
							o,
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
					a(l, { error: this.state.signoutError }),
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
var AccountPanel$1 = v(AccountPanel, "user", "payment");
export { AccountPanel$1 as default };
