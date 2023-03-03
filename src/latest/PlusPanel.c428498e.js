import { o as e, _ as t, h as s, T as o, v as a } from "./preact.294f37c2.js";
import {
  d as n,
  c8 as i,
  c9 as l,
  ca as r,
  bA as c,
  f as y,
  s as u,
  ay as d,
  c4 as p,
  c1 as m,
  L as h,
  T as B,
  C as z,
  G as g,
  am as f,
} from "./index.6eeae9f8.js";
import { g as v, a as b } from "./gplay.79326319.js";
import { P as w } from "./Panel.404ed07e.js";
let N = "Bzy1br",
  P = "Bzymw",
  x = "Bzy32p",
  k = "Bzyru",
  T = "Bzy2wp",
  S = "Bzy1n2",
  A = "Bzy2ga",
  C = "Bzyqt",
  I = "Bzy330",
  L = "Bzy2p2",
  E = "Bzyay",
  M = "Bzy33y",
  j = "Bzy2mg",
  q = "Bzy1sr",
  W = "Bzy4s",
  V = "Bzy1lf",
  F = "Bzy2im",
  Y = "Bzy18h",
  H = "Bzy24q",
  O = "Bzy24q Bzy22l",
  R = "Bzy44",
  D = "Bzy44 Bzy34q",
  G = "Bzy2g3",
  $ = "Bzy333",
  K = "Bzy1r9",
  U = "Bzy2tl",
  J = "Bzy2tl Bzyar",
  _ = "Bzy2tl Bzyyn",
  Q = "Bzy2tl Bzy8m",
  X = "Bzy2tl Bzyne",
  Z = "Bzy2n",
  ee = "Bzy2n Bzy2l4",
  et = "Bzy2n Bzymk",
  es = "Bzy2n Bzy120",
  eo = "Bzy2n Bzy28x",
  ea = "Bzy2n Bzy2sh",
  en = "Bzy2n Bzy17h",
  ei = n + " Bzy27f",
  el = i + " " + l + " Bzy2py",
  er = i + " " + r + " Bzy2j7",
  ec = c + " " + y + " Bzy2ez",
  ey = "Bzy11z",
  eu = "Bzy23j",
  ed = "Bzygo",
  ep = "Bzy2bi",
  em = "Bzy2hk",
  eh = "Bzywl",
  eB = "Bzy272",
  ez = "Bzy2y7",
  eg = "Bzy2g1",
  ef = "Bzy2o8",
  ev = {
    wrapper: "Bzy1br",
    table: "Bzymw",
    freeCell: "Bzy32p",
    aside: "Bzyru",
    store: "Bzy2wp",
    logoWrapper: "Bzy1n2",
    notice: "Bzy2ga",
    noticeBold: "Bzyqt",
    opinionsTriangle: "Bzy330",
    opinionsButtons: "Bzy2p2",
    wordsWrapper: "Bzyay",
    words: "Bzy33y",
    wordsTitle: "Bzy2mg",
    wordsText: "Bzy1sr",
    wordsTextLink: "Bzy4s",
    emotions: "Bzy1lf",
    emotionsBox: "Bzy2im",
    info: "Bzy18h",
    infoBox: "Bzy24q",
    infoBoxCenter: "Bzy24q Bzy22l",
    emotionsBoxTitle: "Bzy44",
    emotionsBoxTitleAfter: "Bzy44 Bzy34q",
    infoBoxTitle: "Bzy2g3",
    emotionsBoxText: "Bzy333",
    infoBoxText: "Bzy1r9",
    title: "Bzy2tl",
    titleB: "Bzy2tl Bzyar",
    titleC: "Bzy2tl Bzyyn",
    titleD: "Bzy2tl Bzy8m",
    titleE: "Bzy2tl Bzyne",
    section: "Bzy2n",
    sectionPlus: "Bzy2n Bzy2l4",
    sectionEmotions: "Bzy2n Bzymk",
    sectionWords: "Bzy2n Bzy120",
    sectionVideo: "Bzy2n Bzy28x",
    sectionInfo: "Bzy2n Bzy2sh",
    sectionFooter: "Bzy2n Bzy17h",
    buttonFooter: n + " Bzy27f",
    buttonSide: i + " " + l + " Bzy2py",
    buttonOrangeDemo: i + " " + r + " Bzy2j7",
    buttonSmall: c + " " + y + " Bzy2ez",
    opinions: "Bzy11z",
    divider: "Bzy23j",
    details: "Bzygo",
    description: "Bzy2bi",
    summary: "Bzy2hk",
    infoSign: "Bzywl",
    proved: "Bzy272",
    bounds: "Bzy2y7",
    play: "Bzy2g1",
    playIcon: "Bzy2o8",
  },
  eb = "Cs92dy",
  ew = "Cs99u",
  eN = "Cs91dd",
  eP = "Cs91wf",
  ex = {
    exitActive: "Cs92dy",
    enterActive: "Cs99u",
    exit: "Cs91dd",
    enter: "Cs91wf",
  };
var ek = "/static/media/printoutSample.ae2c22c5.pdf";
function eT(t) {
  return e("svg", {
    className: t.className,
    width: "4",
    height: "9",
    children: e("path", {
      d: "M1.39 4h1.27v4H1.39zM0 9V8h4v1zM0 4V3h3v1zM1 0h2v1.55H1z",
    }),
  });
}
let eS = [];
class eA extends t {
  constructor(e) {
    super(e), (this.state = { counter: 0, transition: "left", isPlaying: !1 });
  }
  refVideo = (e) => {
    this.video = e;
  };
  rewind = () => {
    this.video &&
      ((this.video.currentTime = 0),
      this.video.removeEventListener("ended", this.rewind)),
      this.setState({ isPlaying: !1 });
  };
  togglePlayer = () => {
    let { isPlaying: e } = this.state;
    this.video &&
      (e
        ? (this.video.pause(),
          this.video.removeEventListener("ended", this.rewind))
        : (this.video.play(),
          this.video.addEventListener("ended", this.rewind, !1))),
      this.setState({ isPlaying: !e });
  };
  render() {
    var e;
    let { gettext: t } = d(eS);
    this.props.user.isLoggedIn && p();
    let n = t`${m(this.props.payment.plan)}/mo.`,
      { isPlaying: i } = this.state,
      { dispatch: l } = this.props;
    s(() => {
      l("curiosity/conversion", { event: "Opened Plus panel" });
      let e = setTimeout(
          () =>
            this.props.dispatch("curiosity/event", {
              event: "Stayed 10 seconds on the Plus panel",
            }),
          1e4
        ),
        t = setTimeout(
          () =>
            this.props.dispatch("curiosity/event", {
              event: "Stayed 30 seconds on the Plus panel",
            }),
          3e4
        ),
        s = setTimeout(
          () =>
            this.props.dispatch("curiosity/event", {
              event: "Stayed 40 seconds on the Plus panel",
            }),
          4e4
        );
      return () => {
        clearTimeout(e), clearTimeout(t), clearTimeout(s);
      };
    }, []);
    let r = [
        {
          w: t`I would definitely recommend Songsterr Plus to everybody who learn playing guitar. ItΓÇÖs simple and user-friendly way to play songs you like, no matter what is your level.`,
          a: "Kevin Wimer",
          s: "jamplay.com",
        },
        {
          w: t`Songsterr Plus ROCKS. Great features and great sound, and totally web-based. I love the looping feature. Plenty of songs available, too: I did a random search for several songs and found accurate versions of all of them.`,
          a: "Rob Hampton",
          s: "heartwoodguitar.com",
        },
        {
          w: t`With Songsterr Plus our students learn songs faster and practice more frequently. Thank you, on the behalf of our in-home lesson community. You guys are Teriffic!`,
          a: "Winston McFarlane",
          s: "VisionMusicLive.com",
        },
        {
          w: t`With Songsterr Plus learning to play guitar has never been so simple, or so enjoyable.`,
          a: "Anze Sustar",
          s: "YourChords.com",
        },
        {
          w: t`Most people start learning guitar for the only reason ΓÇô to play their favorite songs. Songsterr Plus is a great way to learn a lot of new songs both for beginners and skilled guitarists.`,
          a: "Paul Hackett",
          s: "guitarnoise.com",
        },
      ],
      c = r[this.state.counter],
      y = () =>
        this.setState((e) => ({
          counter: 0 === e.counter ? r.length - 1 : e.counter - 1,
          transition: "left",
        })),
      u = () =>
        this.setState((e) => ({
          counter: e.counter === r.length - 1 ? 0 : e.counter + 1,
          transition: "right",
        })),
      N = (e, s, o) =>
        a(
          "tr",
          null,
          a("td", null),
          a(
            "td",
            { className: ev.details },
            a("em", { className: ev.summary }, e),
            a(eT, { className: ev.infoSign }),
            a("div", { className: ev.description }, s)
          ),
          a("td", { className: o ? "" : ev.freeCell }, o ? t`YES` : t`NO`),
          a("td", null, t`YES`)
        ),
      P = this.props.user.isLoggedIn
        ? "/a/wa/account"
        : "/a/wa/signin?next=account",
      { isTablet: x, os: k } = this.props.device,
      T = o(() => {
        l("demo/activate");
      }, [l]),
      S = o(() => {
        l("curiosity/conversion", {
          event: "Clicked subscribe link on the Plus panel",
          button: "table",
        });
      }, [l]),
      A = o(() => {
        l("curiosity/conversion", {
          event: "Clicked subscribe link on the Plus panel",
          button: "bottom",
        });
      }, [l]);
    return a(
      w,
      { title: t`Songsterr Plus`, id: this.props.id },
      !this.props.screen.isSmall &&
        a(
          "section",
          { className: ev.sectionEmotions, "data-section": "emotions" },
          a(
            "div",
            { className: ev.emotions },
            a(
              "article",
              { className: ev.emotionsBox },
              a("h3", { className: ev.emotionsBoxTitle }, t`Before Plus`),
              a(
                "p",
                { className: ev.emotionsBoxText },
                t`Rehearsing with a clunky computer, slowing down via YouTube, clicking constantly to nail a fragment, `,
                a("strong", null, t`feeling unproductive`),
                "."
              )
            ),
            a(
              "article",
              { className: ev.emotionsBox },
              a("h3", { className: ev.emotionsBoxTitleAfter }, t`After Plus`),
              a(
                "p",
                { className: ev.emotionsBoxText },
                t`Playing with a marked up printout, looping and slowing down via one click, `,
                a("strong", null, t`feeling badass`),
                "."
              )
            )
          )
        ),
      a(
        "section",
        { className: ev.sectionPlus, "data-section": "plus" },
        a(
          "div",
          { className: ev.wrapper },
          a(
            "table",
            { className: ev.table },
            a(
              "thead",
              null,
              a(
                "tr",
                null,
                a("th", null),
                a("th", null),
                a("th", null, t`FREE`),
                a("th", null, t`PLUS`)
              )
            ),
            a(
              "tbody",
              null,
              N(
                "Playback",
                t`A key feature of Songsterr Tab Player. Allows you to playback tabs with a realistic guitar engine.`,
                !0
              ),
              N(
                "Print",
                a(
                  "span",
                  null,
                  t`High quality, high contrast printing of tabs. You can print either the whole tab or just the selected page. Here is a `,
                  a(
                    "a",
                    { href: ek, target: "_blank", rel: "noopener noreferrer" },
                    t`sample printout`
                  ),
                  "."
                )
              ),
              N(
                t`Tempo Control`,
                t`Adjust playback speed without changing pitch. Indispensable feature for learning complicated parts of the song.`
              ),
              N(
                t`Loop`,
                t`Allows you to playback the selected measures over and over again. Looping can be very helpful for training when you\'re learning a particular part of the song.`
              ),
              N(
                t`Mute`,
                t`Silences the current track. Mute your instrument and play along with the rest of the band.`
              ),
              N(
                t`Solo`,
                t`Makes the selected track audible, and silences all the other tracks. Use this to learn your part of the song.`
              ),
              N(
                t`Pitch Shift`,
                t`Allows you to change the sound pitch to match your guitar tuning.`
              ),
              N(
                "Official Audio",
                "Play along with synchronized YouTube videos of our Top 500 songs."
              ),
              N(
                t`Ad Free`,
                t`Removes all the ads from the site. Gives more screen real estate for the player on the song page.`
              )
            ),
            a(
              "tfoot",
              null,
              a(
                "tr",
                null,
                a("td", null),
                a("td", null, t`PRICE`),
                a("td", null, t("FREE")),
                a("td", null, n)
              )
            )
          ),
          a(
            "aside",
            { className: ev.aside },
            a(
              h,
              {
                to: this.props.user.isLoggedIn
                  ? "/a/wa/plus/payment"
                  : "/a/wa/signin?next=subscribe",
                onClick: S,
                id: "CTA-side",
                className: ev.buttonSide,
              },
              t`Subscribe to Plus`,
              a("span", null, t` for ${n}`)
            ),
            a(
              h,
              {
                to: "/a/wsa/led-zeppelin-stairway-to-heaven-tab-s27t1",
                onClick: T,
                id: "demo",
                "data-action": "demosong",
                className: ev.buttonOrangeDemo,
              },
              t`Demo Song`,
              a("span", null, t`all features enabled`)
            ),
            x &&
              (ev.store,
              (e = g(k)),
              a(
                f,
                {
                  source: "plus",
                  attrs: { id: "Plus-store", className: ev.store },
                  eventProperties: {
                    Via: "plus page",
                    "App store": e ? "Google Play" : "App Store",
                  },
                },
                e
                  ? a("img", {
                      src: v,
                      width: 145,
                      height: 47 / (160 / 145),
                      alt: "Google Play",
                    })
                  : a("img", {
                      src: b,
                      width: 145,
                      height: 53 / (160 / 145),
                      alt: "AppStore",
                    })
              ))
          )
        ),
        a(
          "h4",
          { className: ev.titleC, id: "performance" },
          t`Songsterr Plus users are 60%\u00A0more likely to\u00A0finish learning\u00A0a\u00A0tab`,
          a("a", { className: ev.proved, href: "#proved" }, "*")
        )
      ),
      a(
        "section",
        { className: ev.sectionVideo, "data-section": "video" },
        a("h4", { className: ev.titleE }, t`How Tempo Control and Loop work`),
        a(
          "div",
          { className: ev.bounds, onClick: this.togglePlayer },
          a(
            "video",
            { ref: this.refVideo, id: "plus-loop-demo", preload: "auto" },
            a("source", {
              type: "video/mp4",
              src: "https://audio4-1.songsterr.com/video/loop-v6.mp4",
            })
          ),
          !i &&
            a(
              "button",
              { className: ev.play },
              a(
                "svg",
                {
                  width: 19,
                  height: 22,
                  role: "img",
                  "aria-labelledby": "loop-video-play",
                },
                a("title", { id: "loop-video-play" }, "play"),
                a("path", {
                  className: ev.playIcon,
                  d: "M1.497.857A1 1 0 0 0 0 1.725v18.55a1 1 0 0 0 1.497.868l16.205-9.275a1 1 0 0 0 0-1.736L1.497.857z",
                })
              )
            )
        )
      ),
      a(
        "section",
        { className: ev.sectionWords, "data-section": "words" },
        a(
          "div",
          { className: ev.notice },
          a("span", { className: ev.noticeBold }, t`Millions`),
          t` of guitarists, bassists and drummers worldwide have used Songsterr Plus to learn over 400,000 songs & 800,000 tabs by 60,000 artists!`
        ),
        a(
          "div",
          { className: ev.opinions },
          a(
            "div",
            { className: ev.words },
            a(
              "div",
              { className: ev.wordsTitle },
              t`Check out what guitar experts say about Songsterr Plus.`
            ),
            a(
              B,
              { component: "div", className: ev.wordsWrapper },
              a(
                z,
                { animationStyles: ex, key: c.a },
                a(
                  "div",
                  { className: ev.wordsText },
                  c.w,
                  a("br", null),
                  c.a,
                  " ",
                  a(
                    "a",
                    { className: ev.wordsTextLink, href: "https://" + c.s },
                    c.s
                  )
                )
              )
            )
          ),
          a("div", { className: ev.opinionsTriangle }),
          a(
            "div",
            { className: ev.opinionsButtons },
            a("button", { className: ev.buttonSmall, onClick: y }, t`Prev`),
            a("button", { className: ev.buttonSmall, onClick: u }, t`Next`)
          )
        )
      ),
      a(
        "section",
        { className: ev.sectionInfo, "data-section": "info" },
        a(
          "div",
          { className: ev.info },
          a(
            "article",
            { className: ev.infoBox },
            a(
              "h3",
              { className: ev.infoBoxTitle },
              t`Is this a long-term commitment?`
            ),
            a(
              "p",
              { className: ev.infoBoxText },
              t`No. It\'s a pay-as-you-go service. You can cancel any time with one click on your `,
              a(h, { to: P, "data-action": "account" }, t`account page`),
              t`. If you cancel, you\'ll be able to use paid features until the end of the paid month (30 days since your last payment).`
            )
          ),
          a(
            "article",
            { className: ev.infoBoxCenter },
            a(
              "h3",
              { className: ev.infoBoxTitle },
              t`What payment types do you accept?`
            ),
            a(
              "p",
              { className: ev.infoBoxText },
              t`Currently, we accept PayPal, Apple Pay, Visa, MasterCard, Discover, American Express and JCB. At\u00A0this time we only accept payments online so we will not be able to accept a P.O., invoice you, or take an order over the phone.`
            )
          ),
          a(
            "article",
            { className: ev.infoBox },
            a(
              "h3",
              { className: ev.infoBoxTitle },
              t`Are there any hidden charges?`
            ),
            a(
              "p",
              { className: ev.infoBoxText },
              t`There are no hidden charges. Monthly price gives you access to paid features of all the tabs on Songsterr. We\u00A0are confident that you\'ll enjoy your subscription and we\'ll give you a 100% "no\u00A0questions asked" refund otherwise.`
            )
          )
        )
      ),
      a(
        "section",
        { className: ev.sectionFooter, "data-section": "footer" },
        a(
          "h4",
          { className: ev.titleD, id: "proved" },
          a("a", { className: ev.proved, href: "#performance" }, "*"),
          t`Based on the conversion rate of\u00A0users who have used our Mark\u00A0as\u00A0learned feature`
        ),
        a(
          h,
          {
            to: this.props.user.isLoggedIn
              ? "/a/wa/plus/payment"
              : "/a/wa/signin?next=subscribe",
            onClick: A,
            id: "CTA-footer",
            className: ev.buttonFooter,
          },
          t`Subscribe to Plus`,
          a("span", null, t` for ${n}`)
        )
      )
    );
  }
}
var eC = u(eA, "user", "device", "payment", "screen");
export { eC as default };
