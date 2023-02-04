import { d as e, h as t, p as s, T as o, a as a } from "./preact.3d326435.js";
import {
  q as n,
  ck as i,
  cl as l,
  cm as r,
  bn as c,
  r as y,
  y as u,
  n as d,
  cg as p,
  cd as m,
  L as h,
  T as B,
  C as z,
  i as g,
  A as f,
} from "./index.659fabbf.js";
import { g as v, a as b } from "./gplay.79326319.js";
import { P as w } from "./Panel.693a3a8d.js";
var N = "/static/media/i-sign.d0cc0e61.svg";
let x = "Bzy1br",
  P = "Bzymw",
  k = "Bzy32p",
  T = "Bzyru",
  S = "Bzy2wp",
  C = "Bzy1n2",
  A = "Bzy2ga",
  I = "Bzyqt",
  L = "Bzy330",
  E = "Bzy2p2",
  j = "Bzyay",
  q = "Bzy33y",
  W = "Bzy2mg",
  M = "Bzy1sr",
  F = "Bzy4s",
  Y = "Bzy1lf",
  O = "Bzy2im",
  R = "Bzy18h",
  V = "Bzy24q",
  D = "Bzy24q Bzy22l",
  H = "Bzy44",
  G = "Bzy44 Bzy34q",
  $ = "Bzy2g3",
  _ = "Bzy333",
  K = "Bzy1r9",
  U = "Bzy2tl",
  J = "Bzy2tl Bzyar",
  Q = "Bzy2tl Bzyyn",
  X = "Bzy2tl Bzy8m",
  Z = "Bzy2tl Bzyne",
  ee = "Bzy2n",
  et = "Bzy2n Bzy2l4",
  es = "Bzy2n Bzymk",
  eo = "Bzy2n Bzy120",
  ea = "Bzy2n Bzy28x",
  en = "Bzy2n Bzy2sh",
  ei = "Bzy2n Bzy17h",
  el = n + " Bzy27f",
  er = i + " " + l + " Bzy2py",
  ec = i + " " + r + " Bzy2j7",
  ey = c + " " + y + " Bzy2ez",
  eu = "Bzy11z",
  ed = "Bzy23j",
  ep = "Bzygo",
  em = "Bzy2bi",
  eh = "Bzy2hk",
  eB = "Bzywl",
  ez = "Bzy272",
  eg = "Bzy2y7",
  ef = "Bzy2g1",
  ev = "Bzy2o8",
  eb = {
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
  ew = "Cs92dy",
  eN = "Cs99u",
  ex = "Cs91dd",
  eP = "Cs91wf",
  ek = {
    exitActive: "Cs92dy",
    enterActive: "Cs99u",
    exit: "Cs91dd",
    enter: "Cs91wf",
  };
var eT = "/static/media/printoutSample.ae2c22c5.pdf";
let eS = [];
class eC extends e {
  constructor(e) {
    super(e), (this.state = { counter: 0, transition: "left" });
  }
  refVideo = (e) => {
    this.video = e;
  };
  render() {
    var e;
    let { gettext: n } = d(eS);
    this.props.user.isLoggedIn && p();
    let i = n`${m(this.props.payment.plan)}/mo.`,
      l = this.props.experiments.play_along_mobile,
      r = l?.status === "pending" || l?.segment === "off";
    t(() => {
      E("curiosity/conversion", { event: "Opened Plus panel" });
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
    let [c, y] = s(!1),
      u = o(() => {
        this.video &&
          ((this.video.currentTime = 0),
          y(!1),
          this.video.removeEventListener("ended", u)),
          this.props.dispatch("curiosity/event", {
            event: "Watched video on Plus panel",
          });
      }, []),
      x = o(() => {
        this.video &&
          (c
            ? (this.video.pause(), this.video.removeEventListener("ended", u))
            : (this.video.play(),
              this.video.addEventListener("ended", u, !1),
              this.props.dispatch("curiosity/event", {
                event: "Clicked video on Plus panel",
              }))),
          y(!c);
      }, [c]),
      P = [
        {
          w: n`I would definitely recommend Songsterr Plus to everybody who learn playing guitar. ItΓÇÖs simple and user-friendly way to play songs you like, no matter what is your level.`,
          a: "Kevin Wimer",
          s: "jamplay.com",
        },
        {
          w: n`Songsterr Plus ROCKS. Great features and great sound, and totally web-based. I love the looping feature. Plenty of songs available, too: I did a random search for several songs and found accurate versions of all of them.`,
          a: "Rob Hampton",
          s: "heartwoodguitar.com",
        },
        {
          w: n`With Songsterr Plus our students learn songs faster and practice more frequently. Thank you, on the behalf of our in-home lesson community. You guys are Teriffic!`,
          a: "Winston McFarlane",
          s: "VisionMusicLive.com",
        },
        {
          w: n`With Songsterr Plus learning to play guitar has never been so simple, or so enjoyable.`,
          a: "Anze Sustar",
          s: "YourChords.com",
        },
        {
          w: n`Most people start learning guitar for the only reason ΓÇô to play their favorite songs. Songsterr Plus is a great way to learn a lot of new songs both for beginners and skilled guitarists.`,
          a: "Paul Hackett",
          s: "guitarnoise.com",
        },
      ],
      k = P[this.state.counter],
      T = () =>
        this.setState((e) => ({
          counter: 0 === e.counter ? P.length - 1 : e.counter - 1,
          transition: "left",
        })),
      S = () =>
        this.setState((e) => ({
          counter: e.counter === P.length - 1 ? 0 : e.counter + 1,
          transition: "right",
        })),
      C = (e, t, s) =>
        a(
          "tr",
          null,
          a("td", null),
          a(
            "td",
            { className: eb.details },
            a("em", { className: eb.summary }, e),
            a("img", { src: N, className: eb.infoSign }),
            a("div", { className: eb.description }, t)
          ),
          a("td", { className: s ? "" : eb.freeCell }, s ? n`YES` : n`NO`),
          a("td", null, n`YES`)
        ),
      A = this.props.user.isLoggedIn
        ? "/a/wa/account"
        : "/a/wa/signin?next=account",
      { isTablet: I, os: L } = this.props.device,
      { dispatch: E } = this.props,
      j = o(() => {
        E("demo/activate");
      }, [E]),
      q = o(() => {
        E("curiosity/conversion", {
          event: "Clicked subscribe link on the Plus panel",
          button: "table",
        });
      }, [E]),
      W = o(() => {
        E("curiosity/conversion", {
          event: "Clicked subscribe link on the Plus panel",
          button: "bottom",
        });
      }, [E]);
    return a(
      w,
      { title: n`Songsterr Plus`, id: this.props.id },
      !this.props.screen.isSmall &&
        a(
          "section",
          { className: eb.sectionEmotions, "data-section": "emotions" },
          a(
            "div",
            { className: eb.emotions },
            a(
              "article",
              { className: eb.emotionsBox },
              a("h3", { className: eb.emotionsBoxTitle }, n`Before Plus`),
              a(
                "p",
                { className: eb.emotionsBoxText },
                n`Rehearsing with a clunky computer, slowing down via YouTube, clicking constantly to nail a fragment, `,
                a("strong", null, n`feeling unproductive`),
                "."
              )
            ),
            a(
              "article",
              { className: eb.emotionsBox },
              a("h3", { className: eb.emotionsBoxTitleAfter }, n`After Plus`),
              a(
                "p",
                { className: eb.emotionsBoxText },
                n`Playing with a marked up printout, looping and slowing down via one click, `,
                a("strong", null, n`feeling badass`),
                "."
              )
            )
          )
        ),
      a(
        "section",
        { className: eb.sectionPlus, "data-section": "plus" },
        a(
          "div",
          { className: eb.wrapper },
          a(
            "table",
            { className: eb.table },
            a(
              "thead",
              null,
              a(
                "tr",
                null,
                a("th", null),
                a("th", null),
                a("th", null, n`FREE`),
                a("th", null, n`PLUS`)
              )
            ),
            a(
              "tbody",
              null,
              C(
                "Playback",
                n`A key feature of Songsterr Tab Player. Allows you to playback tabs with a realistic guitar engine.`,
                !0
              ),
              C(
                "Print",
                a(
                  "span",
                  null,
                  n`High quality, high contrast printing of tabs. You can print either the whole tab or just the selected page. Here is a `,
                  a(
                    "a",
                    { href: eT, target: "_blank", rel: "noopener noreferrer" },
                    n`sample printout`
                  ),
                  "."
                )
              ),
              C(
                n`Tempo Control`,
                n`Adjust playback speed without changing pitch. Indispensable feature for learning complicated parts of the song.`
              ),
              C(
                n`Loop`,
                n`Allows you to playback the selected measures over and over again. Looping can be very helpful for training when you\'re learning a particular part of the song.`
              ),
              C(
                n`Mute`,
                n`Silences the current track. Mute your instrument and play along with the rest of the band.`
              ),
              C(
                n`Solo`,
                n`Makes the selected track audible, and silences all the other tracks. Use this to learn your part of the song.`
              ),
              C(
                n`Pitch Shift`,
                n`Allows you to change the sound pitch to match your guitar tuning.`
              ),
              !r &&
                C(
                  "Official Audio",
                  "Play along with synchronized YouTube videos of our Top 100 songs."
                ),
              C(
                n`Ad Free`,
                n`Removes all the ads from the site. Gives more screen real estate for the player on the song page.`
              )
            ),
            a(
              "tfoot",
              null,
              a(
                "tr",
                null,
                a("td", null),
                a("td", null, n`PRICE`),
                a("td", null, n("FREE")),
                a("td", null, i)
              )
            )
          ),
          a(
            "aside",
            { className: eb.aside },
            a(
              h,
              {
                to: this.props.user.isLoggedIn
                  ? "/a/wa/plus/payment"
                  : "/a/wa/signin?next=subscribe",
                onClick: q,
                id: "CTA-side",
                className: eb.buttonSide,
              },
              n`Subscribe to Plus`,
              a("span", null, n` for ${i}`)
            ),
            a(
              h,
              {
                to: "/a/wsa/led-zeppelin-stairway-to-heaven-tab-s27t1",
                onClick: j,
                id: "demo",
                "data-action": "demosong",
                className: eb.buttonOrangeDemo,
              },
              n`Demo Song`,
              a("span", null, n`all features enabled`)
            ),
            I &&
              (eb.store,
              (e = g(L)),
              a(
                f,
                {
                  source: "plus",
                  attrs: { id: "Plus-store", className: eb.store },
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
          { className: eb.titleC, id: "performance" },
          n`Songsterr Plus users are 60%\u00A0more likely to\u00A0finish learning\u00A0a\u00A0tab`,
          a("a", { className: eb.proved, href: "#proved" }, "*")
        )
      ),
      a(
        "section",
        { className: eb.sectionVideo, "data-section": "video" },
        a("h4", { className: eb.titleE }, n`How Tempo Control and Loop work`),
        a(
          "div",
          { className: eb.bounds, onClick: x },
          a(
            "video",
            { ref: this.refVideo, id: "plus-loop-demo", preload: "auto" },
            a("source", {
              type: "video/mp4",
              src: "https://audio4-1.songsterr.com/video/loop-v6.mp4",
            })
          ),
          !c &&
            a(
              "button",
              { className: eb.play },
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
                  className: eb.playIcon,
                  d: "M1.497.857A1 1 0 0 0 0 1.725v18.55a1 1 0 0 0 1.497.868l16.205-9.275a1 1 0 0 0 0-1.736L1.497.857z",
                })
              )
            )
        )
      ),
      a(
        "section",
        { className: eb.sectionWords, "data-section": "words" },
        a(
          "div",
          { className: eb.notice },
          a("span", { className: eb.noticeBold }, n`Millions`),
          n` of guitarists, bassists and drummers worldwide have used Songsterr Plus to learn over 400,000 songs & 800,000 tabs by 60,000 artists!`
        ),
        a(
          "div",
          { className: eb.opinions },
          a(
            "div",
            { className: eb.words },
            a(
              "div",
              { className: eb.wordsTitle },
              n`Check out what guitar experts say about Songsterr Plus.`
            ),
            a(
              B,
              { component: "div", className: eb.wordsWrapper },
              a(
                z,
                { animationStyles: ek, key: k.a },
                a(
                  "div",
                  { className: eb.wordsText },
                  k.w,
                  a("br", null),
                  k.a,
                  " ",
                  a(
                    "a",
                    { className: eb.wordsTextLink, href: "https://" + k.s },
                    k.s
                  )
                )
              )
            )
          ),
          a("div", { className: eb.opinionsTriangle }),
          a(
            "div",
            { className: eb.opinionsButtons },
            a("button", { className: eb.buttonSmall, onClick: T }, n`Prev`),
            a("button", { className: eb.buttonSmall, onClick: S }, n`Next`)
          )
        )
      ),
      a(
        "section",
        { className: eb.sectionInfo, "data-section": "info" },
        a(
          "div",
          { className: eb.info },
          a(
            "article",
            { className: eb.infoBox },
            a(
              "h3",
              { className: eb.infoBoxTitle },
              n`Is this a long-term commitment?`
            ),
            a(
              "p",
              { className: eb.infoBoxText },
              n`No. It\'s a pay-as-you-go service. You can cancel any time with one click on your `,
              a(h, { to: A, "data-action": "account" }, n`account page`),
              n`. If you cancel, you\'ll be able to use paid features until the end of the paid month (30 days since your last payment).`
            )
          ),
          a(
            "article",
            { className: eb.infoBoxCenter },
            a(
              "h3",
              { className: eb.infoBoxTitle },
              n`What payment types do you accept?`
            ),
            a(
              "p",
              { className: eb.infoBoxText },
              n`Currently, we accept PayPal, Apple Pay, Visa, MasterCard, Discover, American Express and JCB. At\u00A0this time we only accept payments online so we will not be able to accept a P.O., invoice you, or take an order over the phone.`
            )
          ),
          a(
            "article",
            { className: eb.infoBox },
            a(
              "h3",
              { className: eb.infoBoxTitle },
              n`Are there any hidden charges?`
            ),
            a(
              "p",
              { className: eb.infoBoxText },
              n`There are no hidden charges. Monthly price gives you access to paid features of all the tabs on Songsterr. We\u00A0are confident that you\'ll enjoy your subscription and we\'ll give you a 100% "no\u00A0questions asked" refund otherwise.`
            )
          )
        )
      ),
      a(
        "section",
        { className: eb.sectionFooter, "data-section": "footer" },
        a(
          "h4",
          { className: eb.titleD, id: "proved" },
          a("a", { className: eb.proved, href: "#performance" }, "*"),
          n`Based on the conversion rate of\u00A0users who have used our Mark\u00A0as\u00A0learned feature`
        ),
        a(
          h,
          {
            to: this.props.user.isLoggedIn
              ? "/a/wa/plus/payment"
              : "/a/wa/signin?next=subscribe",
            onClick: W,
            id: "CTA-footer",
            className: eb.buttonFooter,
          },
          n`Subscribe to Plus`,
          a("span", null, n` for ${i}`)
        )
      )
    );
  }
}
var eA = u(eC, "user", "device", "payment", "experiments", "screen");
export { eA as default };
