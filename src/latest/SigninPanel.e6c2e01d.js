import { _ as o, v as e, c as a, d as n } from "./preact.294f37c2.js";
import {
  av as t,
  b9 as i,
  ba as r,
  s as s,
  bW as l,
  ar as u,
  bO as c,
  bX as g,
  ay as p,
  aq as d,
  L as f,
} from "./index.6eeae9f8.js";
import { A as h } from "./ActionButton.5286af2f.js";
import { I as m } from "./Input.9e959f35.js";
import { a as S } from "./user.6707f531.js";
import { g as w, a as v, s as y } from "./google.ad6b2083.js";
import { P as C } from "./Panel.404ed07e.js";
class P extends o {
  render() {
    let o = this.props.className;
    return e(
      "svg",
      { width: 40, height: 40, viewBox: "0 0 26 26", className: o },
      e(
        "g",
        { fill: "none", fillRule: "evenodd" },
        e("rect", { width: "26", height: "26", fill: "#FFF", rx: "2" }),
        e(
          "g",
          { fill: "#000" },
          e("path", {
            fill: "#EA4335",
            d: "M13 7.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C17.46 4.89 15.43 4 13 4 9.48 4 6.44 6.02 4.96 8.96l2.91 2.26C8.6 9.05 10.62 7.48 13 7.48z",
          }),
          e("path", {
            fill: "#4285F4",
            d: "M21.64 13.2c0-.74-.06-1.28-.19-1.84H13v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z",
          }),
          e("path", {
            fill: "#FBBC05",
            d: "M7.88 14.78a5.54 5.54 0 0 1-.3-1.78c0-.62.11-1.22.29-1.78L4.96 8.96A9.008 9.008 0 0 0 4 13c0 1.45.35 2.82.96 4.04l2.92-2.26z",
          }),
          e("path", {
            fill: "#34A853",
            d: "M13 22c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74l-2.91 2.26C6.45 19.98 9.48 22 13 22z",
          }),
          e("path", { fill: "none", d: "M4 4h18v18H4z" })
        )
      )
    );
  }
}
let x = (o) => {
    let { onClick: a, processing: n, disabled: s, title: l, id: u } = o;
    return e(
      "button",
      { id: u, className: t.google, onClick: a, disabled: s || n },
      n && e(i, { width: 25, height: 20, fill: "#fff", className: r.google }),
      !n && e(P, { className: t.googleIcon }),
      e("span", null, l)
    );
  },
  G = "Cou30y",
  b = "Cou1l3",
  E = "Cou1l3 Cou2at",
  F = "Cou2xu",
  I = "Cou1l3 Coubs",
  z = "Cou1kb",
  N = "Cou1l3 Cou26q",
  O = "Cou1b8",
  R = "Cou1l3 Couf6",
  k = "Cou1l3 Cou2fe",
  D = {
    title: "Cou30y",
    section: "Cou1l3",
    sectionGoogle: "Cou1l3 Cou2at",
    separator: "Cou2xu",
    sectionSignin: "Cou1l3 Coubs",
    actions: "Cou1kb",
    sectionCouponNotice: "Cou1l3 Cou26q",
    notice: "Cou1b8",
    sectionForgotPassword: "Cou1l3 Couf6",
    sectionCreateAccount: "Cou1l3 Cou2fe",
  };
var A = {
    translations: {
      "": {
        "Don't have an account?": ["Du hast noch kein Konto?"],
        Email: ["E-Mail"],
        "Forgot your password?": ["Passwort vergessen?"],
        "Loading...": ["Lade..."],
        OR: ["ODER"],
        Password: ["Passwort"],
        "Please sign in to your account or sign up for free to activate your coupon code.":
          [
            "Bitte melden Sie sich bei Ihrem Konto an oder registrieren Sie sich kostenlos, um Ihren Gutscheincode zu aktivieren.",
          ],
        "Sign in": ["Anmelden"],
        "Sign In": ["Anmelden"],
        "Sign in with Google": ["Anmelden mit Google"],
        "Sign up for a free account": [
          "Registrieren Sie sich f\xfcr ein kostenloses Konto",
        ],
      },
    },
    language: "de",
    pluralForms: "nplurals=2; plural=(n != 1);",
  },
  L = {
    translations: {
      "": {
        "Don't have an account?": ["\xbfNo tienes una cuenta?"],
        Email: ["Email"],
        "Forgot your password?": ["\xbfOlvidaste tu contrase\xf1a?"],
        "Loading...": ["Cargando..."],
        OR: ["O"],
        Password: ["Contrase\xf1a"],
        "Please sign in to your account or sign up for free to activate your coupon code.":
          [
            "Inicie sesi\xf3n en su cuenta o reg\xedstrese gratuitamente para activar su c\xf3digo de cup\xf3n.",
          ],
        "Sign in": ["Iniciar sesi\xf3n"],
        "Sign In": ["Iniciar sesi\xf3n"],
        "Sign in with Google": ["Inicia sesion con Google"],
        "Sign up for a free account": [
          "Reg\xedstrese para obtener una cuenta gratuita",
        ],
      },
    },
    language: "es",
    pluralForms: "nplurals=2; plural=(n != 1);",
  },
  q = {
    translations: {
      "": {
        "Don't have an account?": ["Vous n'avez pas de compte?"],
        Email: ["Courriel"],
        "Forgot your password?": ["Mot de passe oubli\xe9\xa0?"],
        "Loading...": ["Chargement..."],
        OR: ["OU"],
        Password: ["Mot de passe"],
        "Please sign in to your account or sign up for free to activate your coupon code.":
          [
            "Veuillez vous connecter \xe0 votre compte ou vous inscrire gratuitement pour activer votre code promo.",
          ],
        "Sign in": ["Se connecter"],
        "Sign In": ["Connexion"],
        "Sign in with Google": ["Connectez-vous avec Google"],
        "Sign up for a free account": ["Inscrivez-vous pour un compte gratuit"],
      },
    },
    language: "fr",
    pluralForms: "nplurals=2; plural=(n > 1);",
  },
  j = {
    translations: {
      "": {
        "Don't have an account?": ["Non hai un account?"],
        Email: ["Email"],
        "Forgot your password?": ["Hai dimenticato la password?"],
        "Loading...": ["Caricamento..."],
        OR: ["O"],
        Password: ["Password"],
        "Please sign in to your account or sign up for free to activate your coupon code.":
          [
            "Si prega di acceda al tuo account o si registri gratuitamente per attivare il tuo codice coupon.",
          ],
        "Sign in": ["Accedi"],
        "Sign In": ["Accedi"],
        "Sign in with Google": ["Accedi con Google"],
        "Sign up for a free account": [
          "Registrati per avere un account gratuito",
        ],
      },
    },
    language: "it",
    pluralForms: "nplurals=2; plural=(n != 1);",
  },
  M = {
    translations: {
      "": {
        "Don't have an account?": [
          "πéóπé½πéªπâ│πâêπéÆµîüπüúπüªπüäπü╛πü¢πéôπüï∩╝ƒ",
        ],
        Email: ["Eπâíπâ╝πâ½"],
        "Forgot your password?": ["πâæπé╣πâ»πâ╝πâëπéÆπüèσ┐ÿπéîπüºπüÖπüï∩╝ƒ"],
        "Loading...": ["Φ¬¡πü┐Φ╛╝πü┐Σ╕¡ΓÇª"],
        OR: ["πü╛πüƒπü»"],
        Password: ["πâæπé╣πâ»πâ╝πâë"],
        "Please sign in to your account or sign up for free to activate your coupon code.":
          [
            "πéóπé½πéªπâ│πâêπü½πé╡πéñπâ│πéñπâ│πüùπüªπüÅπüáπüòπüäπü╛πüƒπü»πÇüπé»πâ╝πâ¥πâ│πé│πâ╝πâëπéÆµ£ëσè╣πü½πüÖπéïπüƒπéüπü½τäíµûÖπüºπé╡πéñπâ│πéóπââπâùπüùπüªπüÅπüáπüòπüäπÇé",
          ],
        "Sign in": ["πé╡πéñπâ│πéñπâ│"],
        "Sign In": ["πé╡πéñπâ│πéñπâ│"],
        "Sign in with Google": ["Googleπüºπé╡πéñπâ│πéñπâ│"],
        "Sign up for a free account": ["τäíµûÖπéóπé½πéªπâ│πâêπü½τÖ╗Θî▓πüÖπéï"],
      },
    },
    language: "ja",
    pluralForms: "nplurals=1; plural=0;",
  },
  B = {
    translations: {
      "": {
        "Don't have an account?": ["Ω│ä∞áò∞¥┤ ∞ùå∞£╝∞ïáΩ░Ç∞Üö?"],
        Email: ["∞¥┤δ⌐ö∞¥╝"],
        "Forgot your password?": ["∞òöφÿ╕δÑ╝ ∞₧è∞£╝∞à¿δéÿ∞Üö?"],
        "Loading...": ["δí£δö⌐ ∞ñæ..."],
        OR: ["δÿÉδèö"],
        Password: ["δ╣äδ░Çδ▓êφÿ╕"],
        "Please sign in to your account or sign up for free to activate your coupon code.":
          [
            "∞á£δ░£Ω│ä∞áò∞ùÉ δí£Ω╖╕∞¥╕φòÿΩ▒░δéÿ δ¼┤δúîδí£ Ω░Ç∞₧àφòÿ∞ù¼ ∞┐áφÅ░ ∞╜öδô£δÑ╝ φÖ£∞ä▒φÖöφòÿ∞ï¡∞ï£∞ÿñ.",
          ],
        "Sign in": ["δí£Ω╖╕∞¥╕"],
        "Sign In": ["δí£Ω╖╕∞¥╕"],
        "Sign in with Google": ["Googleδí£ δí£Ω╖╕∞¥╕"],
        "Sign up for a free account": ["δ¼┤δúî Ω│ä∞áò Ω░Ç∞₧à"],
      },
    },
    language: "ko",
    pluralForms: "nplurals=1; plural=0;",
  },
  V = {
    translations: {
      "": {
        "Don't have an account?": ["N\xe3o tem uma conta?"],
        Email: ["E-mail"],
        "Forgot your password?": ["Esqueceu sua senha?"],
        "Loading...": ["Carregando..."],
        OR: ["OU"],
        Password: ["Senha"],
        "Please sign in to your account or sign up for free to activate your coupon code.":
          [
            "Por favor, entre na sua conta ou inscreva-se gratuitamente para ativar o seu c\xf3digo de cup\xe3o.",
          ],
        "Sign in": ["Entrar"],
        "Sign In": ["Entrar"],
        "Sign in with Google": ["Entrar com Google"],
        "Sign up for a free account": ["Assine uma conta gratuita"],
      },
    },
    language: "pt",
    pluralForms: "nplurals=2; plural=(n != 1);",
  },
  H = {
    translations: {
      "": {
        "Don't have an account?": ["╨¥╨╡╤é ╨░╨║╨║╨░╤â╨╜╤é╨░?"],
        Email: ["Email"],
        "Forgot your password?": ["╨ù╨░╨▒╤ï╨╗╨╕ ╨┐╨░╤Ç╨╛╨╗╤î?"],
        "Loading...": ["╨ù╨░╨│╤Ç╤â╨╖╨║╨░..."],
        OR: ["╨ÿ╨¢╨ÿ"],
        Password: ["╨ƒ╨░╤Ç╨╛╨╗╤î"],
        "Please sign in to your account or sign up for free to activate your coupon code.":
          [
            "╨º╤é╨╛╨▒╤ï ╨░╨║╤é╨╕╨▓╨╕╤Ç╨╛╨▓╨░╤é╤î ╨║╨╛╨┤ ╨║╤â╨┐╨╛╨╜╨░, ╨▓╨╛╨╣╨┤╨╕╤é╨╡ ╨▓ ╤ü╨▓╨╛╨╣ ╨░╨║╨║╨░╤â╨╜╤é ╨╕╨╗╨╕ ╨╖╨░╤Ç╨╡╨│╨╕╤ü╤é╤Ç╨╕╤Ç╤â╨╣╤é╨╡╤ü╤î ╨▒╨╡╤ü╨┐╨╗╨░╤é╨╜╨╛.",
          ],
        "Sign in": ["╨Æ╨╛╨╣╤é╨╕"],
        "Sign In": ["╨Æ╤à╨╛╨┤"],
        "Sign in with Google": ["╨Æ╨╛╨╣╤é╨╕ ╤ç╨╡╤Ç╨╡╨╖ Google"],
        "Sign up for a free account": [
          "╨í╨╛╨╖╨┤╨░╤é╤î ╨▒╨╡╤ü╨┐╨╗╨░╤é╨╜╤ï╨╣ ╨░╨║╨║╨░╤â╨╜╤é",
        ],
      },
    },
    language: "ru",
    pluralForms:
      "nplurals=3; plural=(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);",
  },
  K = {
    translations: {
      "": {
        "Don't have an account?": ["µ▓Æµ£ëσ╕│µê╢∩╝ƒ"],
        Email: ["τö╡Θé«"],
        "Forgot your password?": ["σ┐ÿΦ¿ÿσ»åτó╝Σ║åσùÄ∩╝ƒ"],
        "Loading...": ["Φ╜╜σàÑΣ╕¡..."],
        OR: ["µêû"],
        Password: ["σ»åτáü"],
        "Please sign in to your account or sign up for free to activate your coupon code.":
          [
            "Φ»╖τÖ╗σ╜òµé¿τÜäΦ┤ªµê╖µêûσàìΦ┤╣µ│¿σåîΣ╗Ñµ┐Çµ┤╗µé¿τÜäΣ╝ÿµâáσê╕Σ╗úτáüπÇé",
          ],
        "Sign in": ["τÖ╗σ╜ò"],
        "Sign In": ["τÖ╗σ╜ò"],
        "Sign in with Google": ["Σ╜┐τö¿GoogleτÖ╗σ╜ò"],
        "Sign up for a free account": ["µ│¿σåîΣ╕ÇΣ╕¬σàìΦ┤╣Φ┤ªµê╖"],
      },
    },
    language: "zh",
    pluralForms: "nplurals=1; plural=0;",
  },
  Y = {
    translations: {
      "": {
        "Don't have an account?": ["Hesab─▒n─▒z yok mu?"],
        Email: ["E-posta"],
        "Forgot your password?": ["Parolan─▒z─▒ m─▒ unuttunuz?"],
        "Loading...": ["Y\xfckleniyor..."],
        OR: ["VEYA"],
        Password: ["┼₧ifre"],
        "Please sign in to your account or sign up for free to activate your coupon code.":
          [
            "Kupon kodunuzu etkinle┼ƒtirmek i\xe7in l\xfctfen hesab─▒n─▒zda oturum a\xe7─▒n veya \xfccretsiz kaydolun.",
          ],
        "Sign in": ["Giri┼ƒ Yap"],
        "Sign In": ["Giri┼ƒ Yap"],
        "Sign in with Google": ["Google ile giri┼ƒ yap"],
        "Sign up for a free account": [
          "\xdccretsiz bir hesap i\xe7in kaydolun",
        ],
      },
    },
    language: "tr",
    pluralForms: "nplurals=2; plural=(n > 1);",
  },
  U = [A, L, q, j, M, B, V, H, K, Y];
class $ extends o {
  email = a();
  password = a();
  state = {
    error: null,
    processing: !1,
    googleError: null,
    googleInitialized: !1,
    googleProcessing: !1,
  };
  componentDidMount() {
    w().then(() => {
      this.setState({ googleInitialized: !0 });
    });
  }
  redirect = () => {
    if (this.props.query.next?.includes("/mailer/")) {
      window.location.replace(window.location.origin + this.props.query.next);
      return;
    }
    this.props.dispatch("navigate", l(this.props.query));
  };
  handleSignin = async (o) => {
    o.preventDefault();
    let e = this.email && this.email.current,
      a = this.password && this.password.current;
    if (e && a)
      try {
        u([
          { field: e, validator: c },
          { field: a, validator: g },
        ]),
          this.setState({ processing: !0, error: null });
        let o = await S(e.value, a.value);
        this.props.dispatch("user/signIn", o),
          this.setState({ processing: !1, error: null }),
          this.redirect();
      } catch (o) {
        this.setState({ processing: !1, error: o });
      }
  };
  handleGoogleSignin = async (o) => {
    o.preventDefault();
    try {
      this.setState({ googleProcessing: !0, googleError: null });
      let o = await v();
      this.props.dispatch("user/googleSignIn", o),
        this.setState({ googleProcessing: !1, googleError: null }),
        this.redirect();
    } catch (e) {
      let o = y(e);
      this.setState({ googleProcessing: !1, googleError: o });
    }
  };
  render() {
    let { gettext: o } = p(U),
      a = Object.keys(this.props.query).length
        ? `?${new URLSearchParams(this.props.query)}`
        : "",
      {
        googleInitialized: i,
        googleError: r,
        googleProcessing: s,
      } = this.state,
      l = this.props.query && "coupon" === this.props.query.next,
      u = e(
        "section",
        { className: D.sectionCouponNotice, "data-section": "coupon-notice" },
        e(
          "p",
          { className: D.notice },
          o(
            "Please sign in to your account or sign up for free to activate your coupon code."
          )
        )
      );
    return e(
      C,
      { title: o("Sign In"), id: this.props.id },
      e(
        n,
        null,
        l && u,
        e(
          "section",
          { className: D.sectionGoogle, "data-section": "google" },
          e(
            "form",
            { noValidate: !0, onSubmit: this.handleGoogleSignin },
            e(d, { error: r }),
            e(x, {
              id: "google-signin",
              title: o(i ? "Sign in with Google" : "Loading..."),
              onClick: this.handleGoogleSignin,
              processing: s,
              disabled: !i,
            })
          )
        ),
        e(
          "section",
          { className: D.sectionSignin, "data-section": "signin" },
          e("div", { className: D.separator }, e("span", null, o("OR"))),
          e(
            "form",
            { noValidate: !0, onSubmit: this.handleSignin, action: "" },
            e(d, { error: this.state.error }),
            e(m, {
              ref: this.email,
              name: "email",
              type: "email",
              label: o("Email"),
              autocomplete: "email",
              error: this.state.error,
            }),
            e(m, {
              ref: this.password,
              name: "password",
              type: "password",
              label: o("Password"),
              autocomplete: "current-password",
              error: this.state.error,
            }),
            e(
              "div",
              { className: D.actions },
              e(h, {
                id: "signin",
                title: o("Sign in"),
                processing: this.state.processing,
              })
            )
          )
        ),
        e(
          "section",
          { className: D.sectionForgotPassword, "data-section": "forgot" },
          e(f, { to: "/a/wa/forgotPassword" }, o("Forgot your password?"))
        ),
        e(
          "section",
          { className: D.sectionCreateAccount, "data-section": "signup" },
          e("h3", { className: D.title }, o("Don't have an account?")),
          e(
            f,
            {
              to: "/a/wa/signup" + a,
              id: "create_acc",
              className: t.buttonGreen,
            },
            o("Sign up for a free account")
          )
        )
      )
    );
  }
}
var W = s($, "query");
export { W as default };
