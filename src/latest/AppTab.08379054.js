let t, e;
import {
  L as i,
  A as o,
  u as s,
  n as a,
  M as n,
  o as r,
  q as l,
  r as p,
  s as d,
  t as h,
  v as c,
  w as u,
  U as m,
  x as g,
  y as y,
  z as f,
  B as b,
  E as v,
  F as w,
  G as L,
  H as k,
  I as C,
  T as x,
  C as S,
  J as T,
  K as B,
  N as M,
  O as N,
  P as E,
  Q as P,
  R as I,
  S as D,
  V as A,
  W as O,
  X as X,
  Y as $,
  Z as R,
  $ as V,
  a0 as F,
  a1 as z,
  a2 as Y,
  a3 as U,
  a4 as K,
  a5 as _,
  a6 as H,
  a7 as q,
  a8 as j,
  a9 as W,
  aa as G,
  ab as Q,
  h as Z,
  ac as J,
  e as tt,
  c as te,
} from "./index.6eeae9f8.js";
import {
  v as ti,
  _ as to,
  c as ts,
  b as ta,
  h as tn,
  p as tr,
  d as tl,
  E as tp,
  F as td,
  j as th,
  o as tc,
  x as tu,
  T as tm,
} from "./preact.294f37c2.js";
import {
  A as tg,
  u as ty,
  s as tf,
  a as tb,
  b as tv,
  c as tw,
  d as tL,
  L as tk,
  P as tC,
  S as tx,
  M as tS,
  C as tT,
} from "./Line.e444fc91.js";
import { N as tB, a as tM } from "./NetworkError.a663a2cf.js";
import { S as tN } from "./SWW.5ca6aca6.js";
import { A as tE, L as tP, S as tI } from "./AppFooter.d26621e6.js";
import { Y as tD } from "./YoutubeLogo.e2fbfaeb.js";
import { P as tA } from "./Capo.a4ddb887.js";
import { _ as tO } from "./Input.9e959f35.js";
import "./ActionButton.5286af2f.js";
import "./UploadRevisionForm.module.967e0aac.js";
import "./gplay.79326319.js";
let tX = "Brk2di",
  t$ = "Brk2yo",
  tR = "Brk1b7",
  tV = { error: "Brk2di", title: "Brk2yo", subtitle: "Brk1b7" };
function tF() {
  return ti(
    "div",
    { className: tV.error, role: "alert" },
    ti(
      "h1",
      { className: tV.title },
      ti("span", null, "The song was successfully deleted!")
    ),
    ti(
      "h2",
      { className: tV.subtitle },
      "Try ",
      ti(i, { to: "/" }, "searching"),
      " for other songs."
    )
  );
}
class tz extends to {
  render() {
    return ti(
      "svg",
      { width: 112, height: 112, viewBox: "0 0 112 112" },
      ti(
        "g",
        {
          fill: "none",
          fillRule: "evenodd",
          stroke: "#FD651A",
          "stroke-width": "11",
          transform: "translate(6 6)",
        },
        ti("circle", { cx: 50, cy: 50, r: 50 }),
        ti("path", { d: "M16.5 84.5l68-69", "stroke-linecap": "square" })
      )
    );
  }
}
function tY() {
  return ti(
    o,
    {
      level: "notice",
      title:
        "Sorry this content has been removed in your country at the request of the underlying music publisher.",
      action:
        "We will work hard to license this content and make sure music creators get paid, which is our philosophy at Songsterr. In the meantime if you would like to provide us a comment we could share with the publisher, please do so.",
      reason: "license",
    },
    ti(tz, null)
  );
}
function tU() {
  let {
    audio: t,
    meta: e,
    part: i,
    user: d,
    player: h,
    cursor: c,
  } = s("audio", "meta", "part", "user", "player", "cursor");
  if (e.loading || i.loading) return;
  let u = !!e.current,
    m = e.current && !!e.current.tracks,
    g = a(e, d),
    y = u && n.get(e.current, r.MASTER),
    f = e.current && e.current.isBlocked;
  if (e.isNotFound || i.isNotFound) return ti(tB, null);
  if (e.isDeleted) return ti(tF, null);
  if (e.isNetworkFailed || i.isNetworkFailed) return ti(tM, null);
  if (e.isFailed || i.isFailed) return ti(tN, null);
  if (!e.allowedByLicense) return ti(tY, null);
  if (u && !g && y.audioError) {
    let t = y.audioError,
      e = "Our virtual band was unable to play it O_o";
    return (
      t === l.TOO_LONG && (e = "Its duration exceeds the 30 minutes limit"),
      ti(o, {
        level: "error",
        title: "Sorry, playback is not possible on this song",
        action: e,
        reason: "audio",
      })
    );
  }
  if (u && (!m || !g))
    return ti(o, {
      level: "info",
      title: "Tab audio is being rendered",
      action:
        "We'll send you an email within 15 minutes once your tab is ready",
      reason: "render",
    });
  else if (!h.webworkerOperational)
    return ti(o, {
      level: "info",
      title: "Sorry, playback is not possible on this song",
      action: "Probably there is not enough memory",
      reason: "webworker",
    });
  else if (!h.playbackAvailable || !p)
    return ti(o, {
      level: "info",
      title: "Sorry, playback is not supported in your browser",
      action: "Try to use latest Google Chrome",
      reason: h.playbackAvailable ? "animate" : "audio",
    });
  else if (t.isAudioNetworkFailed)
    return ti(o, {
      level: "info",
      title: "Audio can't be loaded because of network error.",
      action: "Probably you are offline or connection was canceled",
      reason: "network",
    });
  else if (t.isAudioFailed)
    return ti(o, {
      level: "error",
      title: "Sorry, but there are some problems with playback",
      action: "Please, try to reload page",
      reason: "playback",
    });
  else if (c.isFailed)
    return ti(o, {
      level: "error",
      title: "Sorry, but there are some problems with cursor",
      action: "Please, try to reload page",
      reason: "cursor",
    });
  else if (f)
    return ti(o, {
      level: "notice",
      title: "Sorry, but that revision was blocked",
      action: "Please let us know if you disagree with this decision",
      reason: "block",
    });
}
class tK extends to {
  inputRef = ts();
  constructor(t) {
    super(t), (this.state = { active: !1 });
  }
  onClick = () => {
    this.setState({ active: !0 });
  };
  setValue = (t) => {
    if (27 === t.keyCode) this.setState({ active: !1 });
    else if (13 === t.keyCode) {
      let t = +this.inputRef.current?.value;
      this.props.editValue(this.props.index, t), this.setState({ active: !1 });
    }
  };
  render = () => {
    let { index: t, value: e } = this.props,
      { active: i } = this.state;
    return ti(
      "li",
      { onClick: this.onClick, key: t },
      i
        ? ti("input", {
            ref: this.inputRef,
            defaultValue: e,
            title: "Enter to edit, Esc to cancel",
            onKeyDown: this.setValue,
          })
        : `${t + 1}. ${e},
`
    );
  };
}
let t_ = "Bwr2bn",
  tH = "Bwr2bn Bwr31x",
  tq = "Bwrhb",
  tj = "Bwr2yk",
  tW = "Bwra8",
  tG = "Bwr1rq",
  tQ = "Bwr34e",
  tZ = "Bwr34e Bwr25b",
  tJ = "Bwrhb Bwr2id",
  t1 = "Bwrhb Bwr1xe",
  t0 = "Bwrbh",
  t2 = "Bwrb4",
  t3 = "Bwr1g3",
  t5 = "Bwra6",
  t4 = {
    container: "Bwr2bn",
    mobileContainer: "Bwr2bn Bwr31x",
    hideBtn: "Bwrhb",
    inner: "Bwr2yk",
    video: "Bwra8",
    openSection: "Bwr1rq",
    toggleButton: "Bwr34e",
    toggleButtonClose: "Bwr34e Bwr25b",
    editorBtn: "Bwrhb Bwr2id",
    hideMobileBtn: "Bwrhb Bwr1xe",
    settings: "Bwrbh",
    videoInput: "Bwrb4",
    buttons: "Bwr1g3",
    timestamps: "Bwra6",
  },
  t6 = "playedVideoFor10Seconds",
  t9 = (t, e) => document.querySelector(`iframe#youtube-player-${t}-${e}`),
  t8 = () => {
    try {
      return window.location.hostname;
    } catch {
      return;
    }
  };
class t7 extends to {
  playerAPI = null;
  playTimer = null;
  listRef = ts();
  constructor(t) {
    super(t),
      (this.state = { timestamps: [], openedEditor: !1, disabledCursor: !1 });
  }
  componentDidMount = () => {
    if (window.YT) this.loadVideo();
    else {
      let t = document.createElement("script");
      (t.src = "https://www.youtube.com/player_api"),
        (window.onYouTubeIframeAPIReady = this.loadVideo);
      let e = document.getElementsByTagName("script")[0],
        i = e.parentNode;
      i && i.insertBefore(t, e);
    }
  };
  componentDidUpdate(t) {
    let { songId: e, video: i } = this.props,
      o = t.songId,
      s = t.video.current.videoOffset,
      a = t.video.current.videoId;
    if (e !== o || i.current.videoOffset !== s || i.current.videoId !== a) {
      i.player.destroy();
      let t = t9(a, o);
      for (; t; ) t.remove(), (t = t9(a, o));
      this.loadVideo();
    }
  }
  componentWillUnmount() {
    this.props.video.player.destroy(),
      clearTimeout(this.playTimer),
      window.hotKeysManager.unbindOne("j", { global: !0 });
  }
  loadVideo = () => {
    try {
      let {
          songId: t,
          cursor: { position: e },
          video: i,
          player: { speed: o },
          screen: s,
          dispatch: a,
        } = this.props,
        n = i.current.videoId,
        r = i.current.videoOffset;
      this.playerAPI = new window.YT.Player(`youtube-player-${n}-${t}`, {
        videoId: n,
        playerVars: {
          controls: 0,
          disablekb: 1,
          showinfo: 0,
          rel: 0,
          modestbranding: 0,
          origin: t8(),
          fs: 0,
          cc_load_policy: 0,
          iv_load_policy: 3,
          enablejsapi: 1,
          start: Math.floor(r) + e.cursor / 1e3,
        },
        width: s.isSmall ? "200" : "355",
        height: "200",
        events: {
          onReady: () => {
            i.player.load(this.playerAPI, r, e, o);
          },
          onError: (t) => {
            console.error(t),
              a("curiosity/event", { event: "Video player error" });
          },
          onStateChange: this.onYTPlayerStateChange,
        },
      });
    } catch {}
  };
  addBarTimestamp = () => {
    let { timestamps: t } = this.state,
      e = [...t],
      i = this.playerAPI.getCurrentTime();
    e.push((i = +i.toFixed(6))),
      this.setState({ timestamps: e }, () => {
        this.listRef.current?.scrollTo({
          top: this.listRef.current?.scrollHeight,
        });
      });
  };
  editTimestamp = (t, e) => {
    let { timestamps: i } = this.state,
      o = [...i];
    (o[t] = e), this.setState({ timestamps: o });
  };
  syncClick = async () => {
    let { dispatch: t } = this.props,
      { timestamps: e } = this.state;
    t("video/applyVideoBarPoints", { points: e });
  };
  saveClick = () => {
    let { dispatch: t } = this.props,
      { timestamps: e } = this.state;
    t("video/saveVideoPoints", { points: e });
  };
  resetPoints = () => {
    this.setState({ timestamps: [] });
  };
  changeVideoId = (t) => {
    this.props.dispatch("video/changeVideoId", t.target.value);
  };
  played10Seconds = () => {
    h(t6) ||
      (this.props.dispatch("curiosity/event", {
        event: "Played video for 10 sec first time",
      }),
      c(t6, !0));
  };
  onYTPlayerStateChange = (t) => {
    switch (t.data) {
      case 1:
        this.props.video.player.setBuffering(!1),
          this.state.disabledCursor || this.props.handlePlayVideo(),
          window.focus(),
          clearTimeout(this.playTimer),
          (this.playTimer = setTimeout(this.played10Seconds, 1e4));
        break;
      case 2:
        this.props.handlePauseVideo(),
          window.focus(),
          clearTimeout(this.playTimer);
        break;
      case 3:
        this.props.video.player.setBuffering(!0);
        break;
      case 0:
        this.props.handlePauseVideo(), clearTimeout(this.playTimer);
    }
  };
  openVideo = () => {
    this.props.dispatch("player/toggleVideo", !0);
  };
  closeVideo = () => {
    this.props.dispatch("player/toggleVideo", !1);
  };
  toggleEditor = () => {
    this.state.openedEditor
      ? window.hotKeysManager.unbindOne("j", { global: !0 })
      : window.hotKeysManager.bindOne("j", this.addBarTimestamp, {
          global: !0,
        }),
      this.setState({ openedEditor: !this.state.openedEditor });
  };
  toggleCursor = () => {
    this.setState({ disabledCursor: !this.state.disabledCursor });
  };
  render = () => {
    let { videoOpened: t } = this.props.player,
      { songId: e, user: i, screen: o, video: s } = this.props,
      { timestamps: a, openedEditor: n } = this.state,
      r = u(i, m.USE_VIDEO_SYNCHRONISATION),
      l = o.isSmall ? t4.mobileContainer : t4.container,
      p = o.isSmall ? t4.hideMobileBtn : t4.hideBtn;
    return [
      t
        ? ti(
            "div",
            { className: t4.openSection },
            ti(
              "button",
              {
                className: t4.toggleButtonClose,
                onClick: this.closeVideo,
                id: "close-video",
                tittle: "Close video",
              },
              "Close official audio"
            )
          )
        : ti(
            "div",
            { className: t4.openSection },
            ti(
              "button",
              {
                className: t4.toggleButton,
                onClick: this.openVideo,
                id: "open-video",
                tittle: "Open video",
              },
              "Play along with official audio"
            )
          ),
      ti(
        "div",
        {
          className: l,
          style: `display: ${t ? "block" : "none"}`,
          id: "youtube-container",
        },
        ti(
          "div",
          { className: t4.inner },
          n &&
            r &&
            ti(
              "div",
              { className: t4.settings },
              ti("input", {
                className: t4.videoInput,
                type: "text",
                placeholder: "videoId",
                onBlur: this.changeVideoId,
              }),
              ti(
                "div",
                { className: t4.timestamps, ref: this.listRef },
                ti(
                  "ul",
                  null,
                  a.map((t, e) =>
                    ti(tK, {
                      index: e,
                      value: t,
                      editValue: this.editTimestamp,
                    })
                  )
                )
              ),
              ti(
                "div",
                { className: t4.buttons },
                ti("button", { onClick: this.syncClick }, "Sync"),
                ti("button", { onClick: this.saveClick }, "Save"),
                ti("button", { onClick: this.resetPoints }, "Reset"),
                ti(
                  "label",
                  null,
                  ti("input", {
                    type: "checkbox",
                    onChange: this.toggleCursor,
                    checked: this.state.disabledCursor,
                  }),
                  "Disable cursor"
                )
              )
            ),
          ti(
            "div",
            { className: t4.video, id: "youtube-video-container" },
            ti("div", { id: `youtube-player-${s.current.videoId}-${e}` }),
            !n &&
              ti(
                "button",
                {
                  className: p,
                  onClick: this.closeVideo,
                  tittle: "Close video",
                  id: "close-video-tag",
                },
                ti(
                  "svg",
                  { width: 14, height: 14 },
                  ti("rect", {
                    width: 1.5,
                    height: 18,
                    y: 1,
                    fill: "#fff",
                    rx: 0.75,
                    transform: "rotate(-45 0 1)",
                  }),
                  ti("rect", {
                    width: 1.5,
                    height: 18,
                    x: 12.7,
                    fill: "#fff",
                    rx: 0.75,
                    transform: "rotate(45 12.7 0)",
                  })
                )
              ),
            !o.isSmall &&
              r &&
              ti(
                "button",
                {
                  className: t4.editorBtn,
                  onClick: this.toggleEditor,
                  tittle: "Open editor video",
                },
                "S"
              )
          )
        )
      ),
    ];
  };
}
var et = d(t7, "player", "video", "cursor", "user", "screen", "experiments");
let ee = "Bmc1ad",
  ei = "Bmcp7",
  eo = "Bmc18w",
  es = "Bmc20d",
  ea = "Bmc26v",
  en = "Bmc23j",
  er = "Bmc1ps",
  el = "Bmc1ps Bmcm3",
  ep = "Bmc1ps Bmc16f",
  ed = "Bmc1ll",
  eh = {
    ad: "Bmc1ad",
    yellow: "Bmcp7",
    blue: "Bmc18w",
    green: "Bmc20d",
    circles: "Bmc26v",
    plus: "Bmc23j",
    adButton: "Bmc1ps",
    plans: "Bmc1ps Bmcm3",
    demo: "Bmc1ps Bmc16f",
    plusText: "Bmc1ll",
  },
  ec = class extends to {
    render = () => {
      let {
        onYTLogoClick: t,
        onPlusLinkClick: e,
        onDemoLinkClick: o,
        isOpened: s,
      } = this.props;
      return ti(
        "div",
        {
          className: eh.ad,
          style: `display: ${s ? "flex" : "none"}`,
          id: "youtube-ad",
        },
        ti("div", { className: eh.yellow }),
        ti("div", { className: eh.blue }),
        ti("div", { className: eh.green }),
        ti(
          "div",
          { className: eh.circles },
          ti(
            "svg",
            {
              width: 360,
              height: 180,
              viewBox: "0 0 360 180",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            ti("circle", {
              cx: 279,
              cy: 90,
              r: 90,
              fillOpacity: 0.15,
              fill: "#fff",
            }),
            ti("circle", {
              cx: 181,
              cy: 90,
              r: 90,
              fillOpacity: 0.1,
              fill: "#fff",
            }),
            ti("circle", {
              cx: 82,
              cy: 90,
              r: 90,
              fillOpacity: 0.15,
              fill: "#fff",
            }),
            ti("circle", {
              cx: -3,
              cy: 90,
              r: 90,
              fillOpacity: 0.15,
              fill: "#fff",
            }),
            ti("circle", {
              cx: 367,
              cy: 90,
              r: 90,
              fillOpacity: 0.1,
              fill: "#fff",
            })
          )
        ),
        ti(
          "div",
          { className: eh.plus },
          ti(
            i,
            {
              to: "/a/wa/plus",
              "aria-label": "See plans and pricing",
              onClick: t,
            },
            ti(tD, { width: 104, height: 73 })
          ),
          ti(
            "p",
            { className: eh.plusText },
            "Play along with",
            ti("br", null),
            "Official Audio on Plus plan"
          ),
          ti(
            "div",
            { className: eh.buttons },
            ti(
              i,
              {
                to: "/a/wa/plus",
                "aria-label": "See plans and pricing",
                onClick: e,
              },
              ti(
                "button",
                {
                  className: eh.plans,
                  tittle: "Plans and Pricing",
                  alt: "plans&pricing",
                },
                "See plans and pricing"
              )
            ),
            ti(
              i,
              {
                to: "/a/wsa/led-zeppelin-stairway-to-heaven-tab-s27t1",
                "aria-label": "On the demo song",
                onClick: o,
              },
              ti(
                "button",
                {
                  className: eh.demo,
                  tittle: "On the demo song",
                  alt: "demo song",
                },
                "Try on the demo song"
              )
            )
          )
        )
      );
    };
  };
var eu = "/static/media/guitarist1.9e7bdbba.png",
  em = "/static/media/guitarist1.248c82bc.webp",
  eg = "/static/media/guitarist2.a198f632.png",
  ey = "/static/media/guitarist2.2f1df3af.webp",
  ef = "/static/media/guitarist3.b1b8abdb.png",
  eb = "/static/media/guitarist3.4dba70b0.webp";
let ev = "o3108",
  ew = "o31st",
  eL = "o30",
  ek = "o320m",
  eC = "o32k",
  ex = "o31fn",
  eS = "o319v",
  eT = "o32qe",
  eB = "o3a1",
  eM = "o32lz",
  eN = "o3s2",
  eE = "o3s2 o31wv",
  eP = "o3s2 o324",
  eI = "o31rh",
  eD = {
    ad: "o3108",
    adMobile: "o31st",
    circles: "o30",
    background: "o320m",
    ellipse1: "o32k",
    ellipse2: "o31fn",
    ellipse3: "o319v",
    yellow: "o32qe",
    blue: "o3a1",
    green: "o32lz",
    adButton: "o3s2",
    plans: "o3s2 o31wv",
    demo: "o3s2 o324",
    plusText: "o31rh",
  },
  eA =
    "M306.56 175A165.5 165.5 0 0 0 329 91.5c0-33.83-10.09-65.3-27.4-91.5H27.4A165.44 165.44 0 0 0 0 91.5 165.5 165.5 0 0 0 22.44 175h284.12Z";
class eO extends to {
  render = () => {
    let {
      onYTLogoClick: t,
      onPlusLinkClick: e,
      onDemoLinkClick: o,
      isOpened: s,
    } = this.props;
    return ti(
      "div",
      {
        className: eD.ad,
        style: `display: ${s ? "block" : "none"}`,
        id: "youtube-ad",
      },
      ti(
        "div",
        { className: eD.yellow },
        ti(
          "picture",
          {},
          ti("source", { srcSet: em, type: "image/webp" }),
          ti("img", {
            height: 200,
            width: 163,
            src: eu,
            alt: "First guitarist",
          })
        )
      ),
      ti(
        "div",
        { className: eD.blue },
        ti(
          "picture",
          {},
          ti("source", { srcSet: ey, type: "image/webp" }),
          ti("img", {
            height: 266,
            width: 118,
            src: eg,
            alt: "Second guitarist",
          })
        ),
        ti(
          i,
          {
            to: "/a/wa/plus",
            "aria-label": "See plans and pricing",
            onClick: t,
          },
          ti(tD, { width: 127, height: 97 })
        )
      ),
      ti(
        "div",
        { className: eD.background },
        ti(
          "svg",
          {
            className: eD.ellipse1,
            width: 329,
            height: 175,
            viewBox: "0 0 329 175",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          ti("path", { d: eA, fillOpacity: 0.12, fill: "#fff" })
        ),
        ti(
          "svg",
          {
            className: eD.ellipse2,
            width: 329,
            height: 175,
            viewBox: "0 0 329 175",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          ti("path", { d: eA, fillOpacity: 0.12, fill: "#fff" })
        ),
        ti(
          "svg",
          {
            className: eD.ellipse3,
            width: 329,
            height: 175,
            viewBox: "0 0 329 175",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          ti("path", { d: eA, fillOpacity: 0.12, fill: "#fff" })
        )
      ),
      ti(
        "div",
        { className: eD.green },
        ti(
          "picture",
          {},
          ti("source", { srcSet: eb, type: "image/webp" }),
          ti("img", {
            height: 200,
            width: 163,
            src: ef,
            alt: "Third guitarist",
          })
        )
      ),
      ti(
        "p",
        { className: eD.plusText },
        "Play along with Official Audio on Plus plan"
      ),
      ti(
        i,
        { to: "/a/wa/plus", "aria-label": "See plans and pricing", onClick: e },
        ti(
          "button",
          {
            className: eD.plans,
            tittle: "Plans and Pricing",
            alt: "plans&pricing",
          },
          "See plans and pricing"
        )
      ),
      ti(
        i,
        {
          to: "/a/wsa/led-zeppelin-stairway-to-heaven-tab-s27t1",
          "aria-label": "On the demo song",
          onClick: o,
        },
        ti(
          "button",
          { className: eD.demo, tittle: "On the demo song", alt: "demo song" },
          "Try on the demo song"
        )
      )
    );
  };
}
let eX = "Cc92gg",
  e$ = "Cc91c2",
  eR = "Cc91c2 Cc91oc",
  eV = {
    openSection: "Cc92gg",
    toggleButton: "Cc91c2",
    toggleButtonClose: "Cc91c2 Cc91oc",
  };
class eF extends to {
  toggleAd = () => {
    this.props.dispatch("playAlongAd/toggle");
  };
  openAd = () => {
    this.props.dispatch("playAlongAd/toggle");
  };
  closeAd = () => {
    this.props.dispatch("playAlongAd/toggle");
  };
  onDemoLinkClick = () => {
    this.props.dispatch("demo/activate", "play-along");
  };
  onPlusLinkClick = () => {
    this.props.dispatch("curiosity/setConversionProps", {
      "Last referring link": "Play Along ad",
    });
  };
  onYTLogoClick = () => {
    this.props.dispatch("curiosity/setConversionProps", {
      "Last referring link": "YT Logo on Play Along ad",
    });
  };
  render = () => {
    let { isSmall: t } = this.props.screen,
      { isOpened: e } = this.props.playAlongAd,
      i = t ? ec : eO;
    return [
      e
        ? ti(
            "div",
            { className: eV.openSection },
            ti(
              "button",
              {
                className: eV.toggleButtonClose,
                onClick: this.closeAd,
                id: "close-video",
                tittle: "Close video",
              },
              "Close official audio"
            )
          )
        : ti(
            "div",
            { className: eV.openSection },
            ti(
              "button",
              {
                className: eV.toggleButton,
                onClick: this.openAd,
                id: "open-video",
                tittle: "Open video",
              },
              "Play along with official audio"
            )
          ),
      ti(i, {
        isOpened: e,
        onYTLogoClick: this.onYTLogoClick,
        onPlusLinkClick: this.onPlusLinkClick,
        onDemoLinkClick: this.onDemoLinkClick,
      }),
    ];
  };
}
var ez = d(eF, "playAlongAd", "screen", "experiments");
let eY = g + " Ciz8g",
  eU = y + " Ciz1gw",
  eK = f + " Ciz2vw",
  e_ = {
    popup: g + " Ciz8g",
    text: y + " Ciz1gw",
    popoverButton: f + " Ciz2vw",
  },
  eH = () => {
    let t = () => document.getElementById("tablature")?.clientWidth,
      [e, i] = tr(t),
      o = () => i(t());
    return (
      tn(
        () => (
          window.addEventListener("resize", o),
          () => window.removeEventListener("resize", o)
        ),
        []
      ),
      e
    );
  },
  eq = (t, e) =>
    t < 100
      ? { "--popup-left": `-${t - 10}px`, "--popup-tip-left": `${t - 6}px` }
      : t + 130 > e
      ? {
          "--popup-left": `-${220 - (e - t)}px`,
          "--popup-tip-left": `${220 - (e - t) + 6}px`,
        }
      : { "--popup-left": "-89px", "--popup-tip-left": "94px" },
  ej = (t, e) => {
    tn(() => {
      let i = (i) => {
        !t.current || t.current.contains(i.target) || e(i);
      };
      return (
        document.addEventListener("mousedown", i),
        document.addEventListener("touchstart", i),
        () => {
          document.removeEventListener("mousedown", i),
            document.removeEventListener("touchstart", i);
        }
      );
    }, [t, e]);
  },
  eW = () => {
    let { tabEditor: t, dispatch: e } = s("tabEditor"),
      i = ta(),
      o = t.autoReplaced > 0,
      a = eH(),
      n = eq(t.formX, a),
      r = () => e("tabEditor/autoReplace:reset");
    ej(i, r),
      tn(
        () => (
          o && document.addEventListener("keydown", r),
          () => document.removeEventListener("keydown", r)
        ),
        [o]
      );
    let l = (t) => {
      t.stopPropagation(), e("tabEditor/autoReplace:revert");
    };
    return (
      o &&
      ti(
        "div",
        { className: e_.popup, id: "auto-replace-popup", style: n, ref: i },
        ti("div", { className: e_.text }, [
          "Applied this change in ",
          ti("strong", null, t.autoReplaced),
          " identical measures",
        ]),
        ti("button", { className: e_.popoverButton, onMouseDown: l }, "Revert")
      )
    );
  },
  eG = "Ceg2uy",
  eQ = "Ceg2gt",
  eZ = "Ceg9t",
  eJ = "Ceghf",
  e1 = "Ceg19o",
  e0 = "Ceg2im",
  e2 = {
    editor: "Ceg2uy",
    correction: "Ceg2gt",
    keyboard: "Ceg9t",
    digit: "Ceghf",
    remove: "Ceg19o",
    zero: "Ceg2im",
  },
  e3 = (t) => {
    let { enabled: e, onDragStart: i, onDrag: o } = t,
      s = ta(null),
      a = ta(!1),
      n = (t) => {
        document.addEventListener("mousemove", l),
          document.addEventListener("mouseup", r),
          clearTimeout(s.current),
          (s.current = setTimeout(() => {
            a.current = !0;
          }, 100)),
          i(t);
      },
      r = () => {
        document.removeEventListener("mousemove", l),
          document.removeEventListener("mouseup", r),
          (a.current = !1);
      },
      l = (t) => {
        e && a.current && o(t);
      };
    return (
      tn(
        () => (
          document.addEventListener("mousedown", n),
          () => document.removeEventListener("mousedown", n)
        ),
        []
      ),
      null
    );
  },
  e5 = () => {
    clearTimeout(t), (t = null);
  },
  e4 = 24;
class e6 extends to {
  formClick = (t) => {
    t.preventDefault();
  };
  keyHandler = (e) => {
    let { tabEditor: i, dispatch: o } = this.props;
    if (t && 1 === i.fret.length && "0" !== i.fret) {
      let t = `${i.fret}${e}`;
      if ((e5(), 24 >= +t)) {
        o("tabEditor/changeNote", {
          newFret: t,
          prevFret: this.state.prevFret,
        });
        return;
      }
    }
    this.setState({ prevFret: i.fret }),
      o("tabEditor/changeNote", { newFret: e }),
      (t = setTimeout(() => (t = null), 1e3));
  };
  moveNote = (t) => {
    let { scale: e, dispatch: i } = this.props;
    i("tabEditor/moveNote:shortcut", { scale: e, direction: t });
  };
  moveNoteViaDrag(t) {
    let { scale: e, dispatch: i } = this.props;
    i("tabEditor/moveNote:dnd", { scale: e, newString: t });
  }
  onDigit = (t) => {
    t.preventDefault(), t.stopPropagation(), this.keyHandler(t.key);
  };
  onDeadNote = (t) => {
    t.preventDefault(),
      t.stopPropagation(),
      e5(),
      this.props.dispatch("tabEditor/changeNote", { newFret: "X" });
  };
  onMobileKeyboard = (t) => () => this.keyHandler(t);
  onBackspace = () => {
    this.props.dispatch("tabEditor/changeNote", { newFret: "" }), e5();
  };
  onRight = () => {
    let { scale: t, dispatch: e } = this.props;
    e("tabEditor/formMove", { scale: t, direction: "right" });
  };
  onLeft = () => {
    let { scale: t, dispatch: e } = this.props;
    e("tabEditor/formMove", { scale: t, direction: "left" });
  };
  onUp = (t) => {
    t.preventDefault(), t.stopPropagation();
    let { scale: e, dispatch: i } = this.props;
    i("tabEditor/formMove", { scale: e, direction: "up" });
  };
  onDown = (t) => {
    t.preventDefault(), t.stopPropagation();
    let { scale: e, dispatch: i } = this.props;
    i("tabEditor/formMove", { scale: e, direction: "down" });
  };
  onShiftUp = (t) => {
    t.preventDefault(), t.stopPropagation(), this.moveNote("up");
  };
  onShiftDown = (t) => {
    t.preventDefault(), t.stopPropagation(), this.moveNote("down");
  };
  onEscape = () => {
    this.props.dispatch("layer/hide");
  };
  getDragY = (t) => {
    let e = document.getElementById("tablature").offsetTop;
    return t.pageY - e;
  };
  getStringOnY = (t) => {
    let e = this.props.tabEditor.beat?.layout.measureLayout.lineLayout;
    return e && b(e, t);
  };
  onDragStart = (t) => {
    let e = this.getDragY(t);
    this.setState({ dragBaseY: e, prevString: this.getStringOnY(e) });
  };
  onDrag = v((t) => {
    if (!t.clientX || !t.clientY) return;
    let e = this.getDragY(t),
      i = this.getStringOnY(e);
    if (void 0 === i) return;
    let o = i - this.state.prevString,
      s = Math.abs(o);
    0 !== s &&
      (this.setState({ dragBaseY: e, prevString: i }), this.moveNoteViaDrag(i));
  }, 50);
  constructor(t) {
    super(t);
    let { device: i } = t;
    (e = w(i) || L(i.os) || k(i.os)),
      (this.state = { dragBaseY: 0, prevString: null, prevFret: null }),
      (this.keyMap = {
        right: this.onRight,
        left: this.onLeft,
        up: this.onUp,
        down: this.onDown,
        enter: this.onRight,
        backspace: this.onBackspace,
        delete: this.onBackspace,
        escape: this.onEscape,
        "digits*": this.onDigit,
        "numpad*": this.onDigit,
        x: this.onDeadNote,
      });
  }
  componentDidMount() {
    window.hotKeysManager.bind(this.keyMap, { onPopup: !0 }),
      window.hotKeysManager.bindMeta("shift+up", this.onShiftUp, "onPopup"),
      window.hotKeysManager.bindMeta("shift+down", this.onShiftDown, "onPopup");
  }
  componentWillUnmount() {
    window.hotKeysManager.unbind(this.keyMap, { onPopup: !0 }),
      window.hotKeysManager.unbindMeta("shift+up", "onPopup"),
      window.hotKeysManager.unbindMeta("shift+down", "onPopup"),
      e5();
  }
  componentDidUpdate(t) {
    (t.tabEditor.formX !== this.props.tabEditor.formX ||
      t.tabEditor.formY !== this.props.tabEditor.formY) &&
      e5();
  }
  render() {
    let { tabEditor: t, scale: i } = this.props,
      o = {
        top: t.formY - 1,
        left: t.formX + 2.5,
        display: t.positioned ? "block" : "none",
        transform: `scale(${i})`,
        transformOrigin: "left 0px",
      };
    0 !== t.voice && (o.color = "#868686"),
      t.fret !== t.originalFret && "" !== t.fret && (o.color = "#ff3130");
    let s = {
        top: t.formY + 31 * i,
        left: t.formX - 64 * i,
        display: t.positioned ? "flex" : "none",
        transform: `scale(${i})`,
        transformOrigin: "left 0px",
      },
      a = !this.props.tabEditor.positioned;
    return ti(
      tl,
      null,
      ti(
        "div",
        {
          id: "note-editor",
          className: e2.editor,
          style: o,
          tabIndex: -1,
          onMouseUp: this.formClick,
        },
        "" === t.fret && "" !== t.originalFret
          ? ti(
              tl,
              {},
              t.originalFret,
              ti(
                "svg",
                { className: e2.correction, width: 25, height: 23 },
                ti("line", { x1: 6, y1: 4, x2: 14, y2: 15 })
              )
            )
          : t.fret,
        ti(eW, null)
      ),
      ti(e3, {
        enabled: a,
        onDragStart: this.onDragStart,
        onDrag: this.onDrag,
      }),
      e &&
        ti(
          "div",
          { className: e2.keyboard, style: s, id: "mobileKeyboard" },
          ti(
            "button",
            { className: e2.remove, onClick: this.onBackspace },
            "<-"
          ),
          ["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((t) =>
            ti(
              "button",
              {
                key: t,
                className: e2.digit,
                onClick: this.onMobileKeyboard(t),
              },
              t
            )
          ),
          ti(
            "button",
            { className: e2.zero, onClick: this.onMobileKeyboard("0") },
            "0"
          )
        )
    );
  }
}
var e9 = d(e6, "tabEditor", "device", "part", "experiments");
let e8 = 5,
  e7 = 100,
  it = "scrollBehavior" in document.documentElement.style,
  ie = (t) => 0.5 * (1 - Math.cos(Math.PI * t));
class ii {
  constructor() {
    (this.y = 0),
      (this.startY = 0),
      (this.startTime = 0),
      (this.scrollId = void 0);
  }
  scroll(t, e, i) {
    if (
      (this.scrollId &&
        (cancelAnimationFrame(this.scrollId), (this.scrollId = void 0)),
      it)
    )
      window.scrollTo({ left: 0, top: t, behavior: e ? "auto" : "smooth" });
    else {
      let o =
        i ||
        (window.visualViewport
          ? window.visualViewport.pageTop
          : window.scrollY);
      if (e || 5 >= Math.abs(t - o)) window.scrollTo(0, t);
      else {
        (this.y = t), (this.startY = o), (this.startTime = C());
        let e = window.requestAnimationFrame;
        this.scrollId = e(this.animationLoop);
      }
    }
  }
  animationLoop = () => {
    let t = ie(Math.min((C() - this.startTime) / 100, 1)),
      e = this.startY + (this.y - this.startY) * t;
    if ((window.scrollTo(0, e), e !== this.y)) {
      let t = window.requestAnimationFrame;
      this.scrollId = t(this.animationLoop);
    } else this.scrollId = void 0;
  };
  unmount() {
    this.scrollId &&
      (cancelAnimationFrame(this.scrollId), (this.scrollId = void 0));
  }
}
function io(t) {
  let { tab: e, tuningButton: i } = t,
    { device: o } = s("device"),
    a = 0,
    n = 0;
  if (e && i) {
    let t = e.getBoundingClientRect(),
      o = i.getBoundingClientRect();
    (a = o.left - t.left + o.width + 21),
      (n = o.top - t.top - (23 - o.height) - 14.5) < 2 && (n = 2);
  }
  return L(o.os) || k(o.os) || w(o)
    ? ti(tg, {
        title: "Pitch Shift",
        device: o,
        leftOffset: a,
        topOffset: n,
        feature: "pitch shift",
      })
    : ti(tA, {
        title: "Pitch Shift",
        classPrefix: "pitchshift",
        leftOffset: a,
        topOffset: n,
      });
}
async function is(t) {
  return "IntersectionObserver" in window
    ? new Promise((e) => {
        let i = new IntersectionObserver((t) => {
          i.disconnect(), e(t[0].boundingClientRect);
        });
        i.observe(t);
      })
    : t.getBoundingClientRect();
}
let ia = "D28105",
  ir = "D28105 D286d",
  il = "D28105 D28180",
  ip = "D281b5",
  id = "D281qz",
  ih = "D2820n",
  ic = {
    tablature: "D28105",
    tablaturePrint: "D28105 D286d",
    tablatureNoPrint: "D28105 D28180",
    handlersLine: "D281b5",
    handlers: "D281qz",
    lineWrap: "D2820n",
  },
  iu = "d418f",
  im = "d41sr",
  ig = "d41bt",
  iy = "d42bj",
  ib = {
    exitActive: "d418f",
    enterActive: "d41sr",
    enter: "d41bt",
    exit: "d42bj",
  },
  iv = "Bhf2w4",
  iw = "Bhf1e0",
  iL = "Bhf2h5",
  ik = "Bhf1on",
  iC = "Bhf45",
  ix = {
    toast: "Bhf2w4",
    toast__text: "Bhf1e0",
    toast__closeBtn: "Bhf2h5",
    goodToast: "Bhf1on",
    badToast: "Bhf45",
  };
var iS = "/static/media/positiveMarker.bc247688.svg",
  iT = "/static/media/negativeMarker.50879a92.svg";
let iB = (t) => {
    let { close: e, timeout: i = 5e3, text: o, type: s } = t;
    return (
      tn(() => {
        let t = setTimeout(e, i);
        return () => clearTimeout(t);
      }, [e, i]),
      ti(
        "div",
        { className: ix.toast },
        "good" === s
          ? ti(
              "div",
              { className: ix.goodToast },
              ti(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "17",
                  height: "25",
                  fill: "none",
                },
                ti("use", { xlinkHref: `${iS}#icon` })
              )
            )
          : ti(
              "div",
              { className: ix.badToast },
              ti(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "17",
                  height: "25",
                  fill: "none",
                },
                ti("use", { xlinkHref: `${iT}#icon` })
              )
            ),
        ti(
          "div",
          { className: ix.toast__text },
          o,
          ti("button", { className: ix.toast__closeBtn, onClick: e }, "Γ£ò")
        )
      )
    );
  },
  iM = tp(null),
  iN = (t) => {
    let { children: e, device: i } = t,
      [o, s] = tr(null),
      a = (t) => {
        let { text: e, type: i } = t;
        s({ text: e, type: i });
      },
      n = () => {
        s(null);
      },
      r = td(() => ({ open: a }), []);
    return ti(iM.Provider, {
      value: r,
      children: [
        !i.isDesktop &&
          th(
            ti(
              x,
              null,
              o &&
                ti(
                  S,
                  { animationStyles: tO, timeout: 150 },
                  ti(iB, { close: n, text: o.text, type: o.type })
                )
            ),
            document.body
          ),
        e,
      ],
    });
  };
function iE(t, e) {
  let i = t.measureLayout,
    o = e.measureLayout;
  return i !== o
    ? i.lineLayout !== o.lineLayout || i.measure.index + 1 !== o.measure.index
    : t.x >= e.x;
}
let iP = (t) => t.player.shouldPlay && t.player.canPlay;
class iI extends to {
  constructor(t) {
    super(t),
      (this.state = {}),
      (this.animationPlayId = void 0),
      (this.keyMap = {
        backspace: this.handleBackspace,
        left: this.handleLeft,
        down: this.handleDown,
        up: this.handleUp,
        right: this.handleRight,
      }),
      (this.tempoIndex = 0),
      (this.pause = !0),
      (this.layout = null),
      (this.layoutTimestamp = 0),
      (this.nextLayout = null),
      (this.nextLayoutTimestamp = 0);
  }
  componentDidMount() {
    window.hotKeysManager.bind(this.keyMap, { onTab: !0 }),
      window.hotKeysManager.bindMeta(
        "shift+right",
        this.handleShiftLoopRight,
        "onTab"
      ),
      window.hotKeysManager.bindMeta(
        "shift+left",
        this.handleShiftLoopLeft,
        "onTab"
      ),
      window.hotKeysManager.bindMeta(
        "shift+down",
        this.handleShiftLoopRight,
        "onTab"
      ),
      window.hotKeysManager.bindMeta(
        "shift+up",
        this.handleShiftLoopLeft,
        "onTab"
      ),
      iP(this.props) ? this.animationPlay() : this.animationSeek();
  }
  componentDidUpdate(t) {
    let e = this.props;
    if (e.print) return;
    let i = e.part !== t.part || e.lines !== t.lines,
      o = e.cursor.position !== t.cursor.position;
    (i || o) &&
      ((this.layout = null),
      (this.layoutTimestamp = 0),
      (this.nextLayout = null),
      (this.nextLayoutTimestamp = 0));
    let s =
      t.print ||
      i ||
      o ||
      e.player.speed !== t.player.speed ||
      e.player.type !== t.player.type ||
      e.player.pitchShift !== t.player.pitchShift ||
      iP(e) !== iP(t);
    if (s) {
      let i = this.animationSeek;
      iP(t)
        ? (i = iP(e) ? this.animationRestart : this.animationPause)
        : iP(e) && (i = this.animationPlay),
        i.call(this);
    }
  }
  componentWillUnmount() {
    (this.pause = !0),
      this.animationPlayId && cancelAnimationFrame(this.animationPlayId),
      window.hotKeysManager.unbindMeta("shift+right", "onTab"),
      window.hotKeysManager.unbindMeta("shift+left", "onTab"),
      window.hotKeysManager.unbindMeta("shift+down", "onTab"),
      window.hotKeysManager.unbindMeta("shift+up", "onTab"),
      window.hotKeysManager.unbind(this.keyMap, { onTab: !0 });
  }
  applyTransform(t, e) {
    let i = `translate3d(${t - B / 2}px, ${-M}px, 0)`,
      o = this.props.refs.current;
    if (o) {
      let t = o[e.line.index];
      if ((t && (t.style.transform = i), this.state.lineLayout != e)) {
        if (this.state.lineLayout) {
          let t = o[this.state.lineLayout.line.index];
          t && (t.style.visibility = "hidden");
        }
        t && (t.style.visibility = "visible"), this.setState({ lineLayout: e });
      }
    }
  }
  applyCursorCoordinates(t) {
    let e;
    let { layout: i, nextLayout: o, layoutTimestamp: s } = this;
    if (o && iE(i, o)) {
      let t = i.absoluteLoopRightX - i.absoluteX,
        a = o.absoluteX - o.absoluteLoopLeftX,
        n = (i.duration * t) / (t + a),
        r = i.duration - n;
      e = (e) => {
        let l = e - s;
        l < n
          ? this.applyTransform(
              i.absoluteX + (t * l) / n,
              i.measureLayout.lineLayout
            )
          : this.applyTransform(
              o.absoluteLoopLeftX + (a * (l - n)) / r,
              o.measureLayout.lineLayout
            );
      };
    } else {
      let t = o
        ? o.absoluteX - i.absoluteX
        : i.absoluteLoopRightX - i.absoluteX;
      e = (e) => {
        this.applyTransform(
          i.absoluteX + (t * (e - s)) / i.duration,
          i.measureLayout.lineLayout
        );
      };
    }
    return e(t), e;
  }
  updateCurrentTempo(t) {
    let e = this.props.part.tempos;
    if (e.length) {
      let i = (i) =>
        e[i].timestamp <= t && (i === e.length - 1 || t < e[i + 1].timestamp);
      this.tempoIndex >= e.length && (this.tempoIndex = 0),
        i(this.tempoIndex) ||
          ((this.tempoIndex = e.findIndex((t, e) => i(e))),
          -1 === this.tempoIndex && (this.tempoIndex = 0),
          this.props.dispatch("tempo/apply", e[this.tempoIndex].tempo));
    }
  }
  findLayoutUnderCursor(t) {
    if (
      !this.layout ||
      !(
        this.layoutTimestamp <= t &&
        t < this.layoutTimestamp + this.layout.duration
      )
    ) {
      let e = T(this.props.part, t),
        { timeline: i, timestamps: o } = this.props.part;
      (this.layoutTimestamp = o[e]),
        (this.layout = i.get(this.layoutTimestamp));
      let s = e < o.length - 1 ? o[e + 1] : null,
        a = this.props.cursor.position.loopEnd;
      return (
        0 !== a &&
          (null === s || s >= a - 1e-15) &&
          (s = this.props.cursor.position.loopStart),
        (this.nextLayout = null !== s ? i.get(s) : null),
        !0
      );
    }
    return !1;
  }
  findLineLayoutUnderCursor(t) {
    let e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "left",
      i = T(this.props.part, t, e),
      { timeline: o, timestamps: s } = this.props.part,
      a = o.get(s[i]);
    return a.measureLayout.lineLayout;
  }
  animationSeek() {
    let t = this.props.player.instance?.getCursor() || 0;
    this.findLayoutUnderCursor(t),
      this.applyCursorCoordinates(t),
      this.updateCurrentTempo(t);
  }
  animationPlay() {
    this.animationPlayId && cancelAnimationFrame(this.animationPlayId);
    let t = !1,
      e = this.props.player.instance.getCursor();
    this.findLayoutUnderCursor(e);
    let i = this.applyCursorCoordinates(e),
      o = null,
      s = () => {
        let t = this.layout.absoluteLoopRightX - this.layout.absoluteX,
          e = this.nextLayout.absoluteX - this.nextLayout.absoluteLoopLeftX,
          i = ((this.layout.duration * t) / (t + e)) * 0.8;
        return (o = (t) =>
          !!this.layout &&
          !!this.nextLayout &&
          t - this.layoutTimestamp > i &&
          (this.props.ensureLineVisibility(
            this.layout.measureLayout.lineLayout,
            this.nextLayout.measureLayout.lineLayout,
            !1
          ),
          (o = null),
          !0));
      };
    (this.nextLayout && iE(this.layout, this.nextLayout) && s()(e)) ||
      this.props.ensureLineVisibility(
        null,
        this.layout.measureLayout.lineLayout,
        !1
      );
    let a = window.requestAnimationFrame,
      n = () => {
        try {
          if (
            (!t && this.props.player.instance.isPositionChanged() && (t = !0),
            t)
          ) {
            let t = this.props.player.instance.getCursor();
            i && i(t),
              o && o(t),
              this.findLayoutUnderCursor(t) &&
                ((i = this.applyCursorCoordinates(t)),
                this.nextLayout && iE(this.layout, this.nextLayout) && s(),
                !this.nextLayout &&
                  t >= N(this.layout) - 1e-15 &&
                  (this.stopPlayback(), (this.pause = !0))),
              this.updateCurrentTempo(t);
          }
          this.pause || (this.animationPlayId = a(n));
        } catch (t) {
          console.error(t);
        }
      };
    (this.pause = !1), (this.animationPlayId = a(n));
  }
  animationPause() {
    this.pause = !0;
  }
  animationRestart() {
    this.animationPlayId && cancelAnimationFrame(this.animationPlayId),
      (this.layout = null),
      (this.layoutTimestamp = 0),
      (this.nextLayout = null),
      (this.nextLayoutTimestamp = 0),
      this.animationPlay();
  }
  stopPlayback = () => {
    this.props.dispatch("player/togglePlay", !1);
  };
  handleBackspace = async (t) => {
    t.preventDefault(), await this.props.dispatch("cursor/backspace");
    let e = this.findLineLayoutUnderCursor(
      this.props.store.get().cursor.position.cursor
    );
    this.props.ensureLineVisibility(null, e, !1);
  };
  handleLeft = async (t) => {
    t.preventDefault(), await this.props.dispatch("cursor/left");
    let e = this.findLineLayoutUnderCursor(
      this.props.store.get().cursor.position.cursor
    );
    this.props.ensureLineVisibility(null, e, !1);
  };
  handleRight = async (t) => {
    t.preventDefault(), await this.props.dispatch("cursor/right");
    let e = this.findLineLayoutUnderCursor(
      this.props.store.get().cursor.position.cursor
    );
    this.props.ensureLineVisibility(null, e, !1);
  };
  handleUp = (t) => {
    t.preventDefault(), this.props.dispatch("cursor/up");
    let e = this.findLineLayoutUnderCursor(
      this.props.store.get().cursor.position.cursor
    );
    this.props.ensureLineVisibility(null, e, !1);
  };
  handleDown = async (t) => {
    t.preventDefault(), await this.props.dispatch("cursor/down");
    let e = this.findLineLayoutUnderCursor(
      this.props.store.get().cursor.position.cursor
    );
    this.props.ensureLineVisibility(null, e, !1);
  };
  handleShiftLoopRight = async (t) => {
    t.preventDefault(),
      t.stopPropagation(),
      await this.props.dispatch("cursor/shiftRight");
    let e = this.props.store.get().cursor.position;
    if (0 !== e.loopEnd) {
      let t = this.findLineLayoutUnderCursor(e.loopEnd, "right");
      this.props.ensureLineVisibility(null, t, !1);
    }
  };
  handleShiftLoopLeft = async (t) => {
    t.preventDefault(),
      t.stopPropagation(),
      await this.props.dispatch("cursor/shiftLeft");
    let e = this.props.store.get().cursor.position;
    if (0 !== e.loopEnd) {
      let t = this.findLineLayoutUnderCursor(e.loopStart);
      this.props.ensureLineVisibility(null, t, !1);
    }
  };
  render() {
    return this.props.children;
  }
}
var iD = d(iI, "player", "cursor");
let iA = "hlii",
  iO = { lineControls: "hlii" },
  iX = "Ckd11i",
  i$ = "Ckdzh",
  iR = "Ckd22n",
  iV = "Ckd11i Ckduv",
  iF = "Ckdte",
  iz = {
    btn: "Ckd11i",
    shape: "Ckdzh",
    bg: "Ckd22n",
    active: "Ckd11i Ckduv",
    badge: "Ckdte",
  };
function iY(t) {
  let {
      reference: e,
      handlePitchshift: i,
      isActive: o,
      isPitchshiftToStandard: a,
      lock: n,
    } = t,
    {
      player: { pitchShift: r },
    } = s("player"),
    l = "Shift pitch (R)";
  0 !== r
    ? (l = "Pitch shifted (R)")
    : a && (l = "Pitch can be shifted to match standard tuning (R)");
  let p = 5 * (Math.abs(r).toString(10).length - 1) + (r > 0 ? 2 : 0);
  return ti(
    "g",
    {
      vectorEffect: "non-scaling-stroke",
      transform: "translate(-8 -47)",
      className: o ? iz.active : iz.btn,
      onClick: i,
      "data-tab-control": "tuning-button",
    },
    ti("title", null, l),
    ti("rect", {
      x: 0,
      y: 3,
      rx: 4,
      ry: 4,
      width: 25,
      height: 23,
      filter: "url(#svg_shadow)",
      className: iz.bg,
      ref: e,
    }),
    ti("path", {
      d: "M9.7 19.1h-6m2-2l-2 2 2 2m10-2h6m-2 2l2-2-2-2",
      "stroke-width": "1.3",
    }),
    ti("path", {
      d: "M9.7 7.1v7s0 3 3 3 3-3 3-3v-7m-3 10v5",
      "stroke-width": "1.6",
    }),
    (a || 0 !== r) &&
      ti("rect", {
        x: 18,
        y: 0,
        width: 13 + p,
        height: 13,
        rx: 6.5,
        ry: 6.5,
        className: iz.badge,
      }),
    0 !== r && ti("text", { x: 20, y: 9.5 }, `${r > 0 ? "+" : ""}${r}`),
    n &&
      ti(
        "g",
        { transform: "translate(-17, -12)" },
        ti("circle", {
          className: iz.bg,
          cx: "16.5",
          cy: "15.5",
          r: "8.5",
          filter: "url(#svg_shadow_light)",
        }),
        ti("path", {
          className: iz.lock,
          d: "M14.2 14.3v-1.1c0-1.4 1-2.5 2.3-2.5 1.3 0 2.3 1.1 2.3 2.5v1.1m-5.3 0h6a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-4.5a.5.5 0 0 1 .5-.5z",
        }),
        ti("circle", { className: iz.shape, cx: 16.5, cy: 17, r: 0.8 })
      )
  );
}
let iU = "Cgh21m",
  iK = "Cgh2b2",
  i_ = "Cgh1j0",
  iH = "Cgh16l",
  iq = "Cgh2v6",
  ij = {
    background: "Cgh21m",
    loop: "Cgh2b2",
    shape: "Cgh1j0",
    area: "Cgh16l",
    icon: "Cgh2v6",
  };
function iW(t) {
  let { leftLayout: e, rightLayout: i, line: o } = t,
    s = e.measureLayout.lineLayout,
    a = i.measureLayout.lineLayout,
    n = o.layout,
    r = ij.background,
    l = e.absoluteLoopLeftX - 1,
    p = i.absoluteLoopRightX,
    d = -n.layers.height + E - P;
  return s === a && s === n
    ? tc("rect", {
        className: r,
        rx: 3,
        height: I(s),
        x: l,
        y: d,
        width: p - l + 1,
      })
    : s === n
    ? tc("rect", {
        className: r,
        rx: 3,
        height: I(s),
        x: l,
        y: d,
        width: s.maxX - l,
      })
    : a === n
    ? tc("rect", {
        className: r,
        rx: 3,
        height: I(a),
        x: a.minX - 1,
        y: d,
        width: p - a.minX + 2,
      })
    : tc("rect", {
        className: r,
        rx: 3,
        height: I(n),
        x: n.minX - 1,
        y: d,
        width: n.maxX + 2,
      });
}
let iG = 10,
  iQ = 27;
function iZ(t) {
  let { x: e, layout: i, handle: o } = t,
    s = i.measureLayout.lineLayout,
    a = s.layers.height - E + P - 10,
    n = I(s) - 20,
    r = `translate(${"left" === o ? e - 1 : e},${-a})`,
    l = "left" === o ? "matrix(-1,0,0,1,1,0)" : "",
    p = Math.floor(n / 2);
  return tc("g", {
    className: ij.loop,
    transform: r,
    "data-loop-handle": o,
    children: [
      tc("path", {
        d: `M0 ${p - 12}q15 0 15 12t-15 12m1 0v${p - 12}h-2 v-${n}h2z`,
        className: ij.shape,
        transform: l,
      }),
      tc("path", {
        d: `M8 ${p - 4.5}l-4.5 4.5l4.5 4.5`,
        className: ij.icon,
        transform: l,
      }),
      tc("rect", {
        x: -10,
        y: -1,
        height: n,
        width: 27,
        transform: l,
        className: ij.area,
      }),
    ],
  });
}
let iJ = "Chc1pg",
  i1 = "Chc2v9",
  i0 = "Chcl9",
  i2 = "Chclw",
  i3 = "Chc14h",
  i5 = "Chcfq",
  i4 = "Chctb",
  i6 = "Chc2va",
  i9 = "Chc28t",
  i8 = "Chc29",
  i7 = "Chc31o",
  ot = "Chc1aq",
  oe = "Chca7",
  oi = {
    marker: "Chc1pg",
    markerTransparent: "Chc2v9",
    learnedMarker: "Chcl9",
    learnedMarkerContainerWithAnime: "Chclw",
    markerText: "Chc14h",
    group: "Chcfq",
    hideGroup: "Chctb",
    activeGroup: "Chc2va",
    decorationCircle: "Chc28t",
    decorationCircleHole: "Chc29",
    particles: "Chc31o",
    dots: "Chc1aq",
    number: "Chca7",
  };
function oo() {
  return -18;
}
let os = tu((t) => {
    let { line: e } = t,
      i = [];
    for (let t of e.layout.measureLayouts) {
      let e = t.measure;
      if (e.layouts[0] !== t) continue;
      let o = D(e).x + 2,
        s = oo(),
        a = e.index + 1;
      i.push(
        tc("g", {
          className: oi.group,
          children: [
            tc(
              "text",
              { className: oi.number, x: 2 + o, y: s + 10, children: a },
              "number"
            ),
          ],
        })
      );
    }
    return tc(tl, { children: [i] });
  }),
  oa = [5, 12, 19, 25],
  on = (t, e, i) =>
    `M${t + 7} ${
      e + 14
    }l-2 3-2-3c-2 0-3-1-3-3v-10c0-2 1-3 3-3h${i}c2 0 3 1 3 3v10c0 2-1 3-3 3z`;
class or extends to {
  static contextType = iM;
  onBarClick = () => {
    let { barNumber: t, isLearned: e, onToggle: i } = this.props;
    i(t, e),
      this.context.open(
        e
          ? { text: "Marked as not learned", type: "bad" }
          : { text: "Marked as learned", type: "good" }
      ),
      this.setState({ leftAfterClick: !1, clicked: !0 });
  };
  constructor(t) {
    super(t), (this.state = { clicked: !1, leftAfterClick: !0 });
  }
  getMarkerParticles = (t, e) => {
    let i = [
        tc("circle", {
          className: oi.decorationCircle,
          r: 3,
          cx: t + 4 + 2 * String(this.props.barNumber + 1).length,
          cy: e + 6,
        }),
        tc("circle", {
          className: oi.decorationCircleHole,
          r: 3,
          cx: t + 4 + 2 * String(this.props.barNumber + 1).length,
          cy: e + 6,
        }),
      ],
      o = [];
    for (let i = 0; i < 7; i++) {
      let s = 0.9 * i,
        a =
          (14 + String(this.props.barNumber + 1).length) * Math.cos(s) +
          t +
          4.5 +
          2 * String(this.props.barNumber + 1).length,
        n = 14 * Math.sin(s) + e + 6,
        r =
          (14 + String(this.props.barNumber + 1).length) *
            Math.cos(s + 0.45 * Math.random() - 0.225) +
          t +
          4.5 +
          2 * String(this.props.barNumber + 1).length,
        l = 14 * Math.sin(s + 0.45 * Math.random() - 0.225) + e + 6,
        p = tc("circle", {
          cx: a,
          cy: n,
          r: 0.75,
          className: `${oi.particle} ${oi.particle_big}`,
        }),
        d = tc("circle", {
          cx: r,
          cy: l,
          r: 0.5,
          className: `${oi.particle} ${oi.particle_small}`,
        });
      o.push(p, d);
    }
    return [i, tc("g", { className: oi.particles, children: o })];
  };
  componentDidUpdate(t) {
    t.isLearned !== this.props.isLearned &&
      (this.setState({ clicked: !0 }),
      setTimeout(() => {
        this.setState({ clicked: !1 });
      }, 1e3));
  }
  render() {
    let { x: t, y: e, barNumber: i, isLearned: o } = this.props,
      s = `add-${i}`,
      a = "".padEnd(1 + 2 * String(i).length, "."),
      n = oa[i.toString().length - 1];
    return o
      ? tc("g", {
          onClick: this.onBarClick,
          className: oi.group,
          "data-tab-control": "marker",
          children: [
            this.props.isMobileOs &&
              tc("rect", {
                x: t - 10,
                y: e - 8,
                width: 30 + n,
                height: 30,
                fillOpacity: 0,
              }),
            this.state.clicked && this.getMarkerParticles(t, e),
            tc("g", {
              className:
                this.state.clicked && oi.learnedMarkerContainerWithAnime,
              children: [
                tc("path", { className: oi.learnedMarker, d: on(t, e, n) }),
                tc("text", {
                  className: oi.markerText,
                  x: t + 2.4,
                  y: e + 10,
                  id: s,
                  children: i,
                }),
              ],
            }),
          ],
        })
      : tc("g", {
          className: oi.group,
          onClick: this.onBarClick,
          "data-tab-control": "marker",
          children: [
            this.props.isMobileOs &&
              tc("rect", {
                x: t - 10,
                y: e - 8,
                width: 30 + n,
                height: 30,
                fillOpacity: 0,
              }),
            tc(
              "text",
              { className: oi.number, x: 2 + t, y: e + 10, children: i },
              "number"
            ),
            tc("text", {
              className: oi.dots,
              x: 1 + t,
              y: e + 14,
              children: a,
            }),
            !this.props.isMobileOs &&
              tc("path", {
                className: oi.markerTransparent,
                d: on(t, e, n + 107),
              }),
          ],
        });
  }
}
let ol = [5, 12, 19, 25],
  op = 117,
  od = 95;
class oh extends to {
  static contextType = iM;
  labelRef = ts();
  onBarClick = () => {
    let { barNumber: t, isLearned: e, onToggle: i } = this.props;
    i(t, e),
      this.context.open(
        e
          ? { text: "Marked as not learned", type: "bad" }
          : { text: "Marked as learned", type: "good" }
      ),
      this.labelRef.current.classList.remove(oi.activeGroup);
  };
  constructor(t) {
    super(t), (this.addActiveClass = this.addActiveClass.bind(this));
  }
  addActiveClass() {
    this.labelRef.current.classList.add(oi.activeGroup);
  }
  componentDidMount() {
    this.labelRef.current &&
      this.labelRef.current.addEventListener("mouseleave", this.addActiveClass);
  }
  componentWillUnmount() {
    this.labelRef.current &&
      this.labelRef.current.removeEventListener(
        "mouseleave",
        this.addActiveClass
      );
  }
  getMarkerParticles = (t, e) => {
    let i = [
        tc("circle", {
          className: oi.decorationCircle,
          r: 3,
          cx: t + 4 + 2 * String(this.props.barNumber + 1).length,
          cy: e + 6,
        }),
        tc("circle", {
          className: oi.decorationCircleHole,
          r: 3,
          cx: t + 4 + 2 * String(this.props.barNumber + 1).length,
          cy: e + 6,
        }),
      ],
      o = [];
    for (let i = 0; i < 7; i++) {
      let s = 0.9 * i,
        a =
          (14 + String(this.props.barNumber + 1).length) * Math.cos(s) +
          t +
          4.5 +
          2 * String(this.props.barNumber + 1).length,
        n = 14 * Math.sin(s) + e + 6,
        r =
          (14 + String(this.props.barNumber + 1).length) *
            Math.cos(s + 0.45 * Math.random() - 0.225) +
          t +
          4.5 +
          2 * String(this.props.barNumber + 1).length,
        l = 14 * Math.sin(s + 0.45 * Math.random() - 0.225) + e + 6,
        p = tc("circle", {
          cx: a,
          cy: n,
          r: 0.75,
          className: `${oi.particle} ${oi.particle_big}`,
        }),
        d = tc("circle", {
          cx: r,
          cy: l,
          r: 0.5,
          className: `${oi.particle} ${oi.particle_small}`,
        });
      o.push(p, d);
    }
    return [i, tc("g", { className: oi.particles, children: o })];
  };
  render() {
    let {
        x: t,
        y: e,
        barNumber: i,
        isLearned: o,
        isLoopChanging: s,
      } = this.props,
      a = `add-${i}`,
      n = ol[i.toString().length - 1];
    return tc("g", {
      className: oi.group,
      onClick: this.onBarClick,
      "data-tab-control": "marker",
      children: [
        !this.props.isMobileOs &&
          !s &&
          tc("g", {
            className: `${oi.hideGroup} ${oi.activeGroup}`,
            ref: this.labelRef,
            children: o
              ? [
                  tc("path", { className: oi.marker, d: on(t, e, n + 117) }),
                  tc("text", {
                    className: oi.markerText,
                    x: t + 2.4,
                    y: e + 10,
                    id: a,
                    children: `${i} Mark as not learned`,
                  }),
                ]
              : [
                  tc("path", { className: oi.marker, d: on(t, e, n + 95) }),
                  tc("text", {
                    className: oi.markerText,
                    x: t + 2.4,
                    y: e + 10,
                    id: a,
                    children: `${i} Mark as learned`,
                  }),
                ],
          }),
      ],
    });
  }
}
function oc() {
  return -18;
}
let ou = tu((t) => {
    let { line: e, partId: i, songId: o } = t,
      {
        learnMarkers: a,
        device: n,
        player: r,
        dispatch: l,
      } = s("learnMarkers", "experiments", "device", "player"),
      p =
        a.data.find((t) => t.songId === o && t.partId === i)?.learnedBars || [],
      d = td(() => w(n) || L(n.os) || k(n.os), [n]),
      h = tm(
        (t, e) => {
          l("learnMarkers/markToggle", {
            songId: o,
            partId: i,
            barNumber: t,
            isLearned: e,
          });
        },
        [o, i]
      ),
      c = [],
      u = [];
    for (let t of e.layout.measureLayouts) {
      let e = t.measure;
      if (e.layouts[0] !== t) continue;
      let i = D(e).x + 2,
        o = oc(),
        s = e.index + 1,
        a = p.includes(s);
      c.push(
        tc(or, {
          x: i,
          y: o,
          barNumber: s,
          isLearned: a,
          isMobileOs: d,
          isLoopChanging: r.isLoopChanging,
          onToggle: h,
        })
      ),
        u.push(
          tc(oh, {
            x: i,
            y: o,
            barNumber: s,
            isLearned: a,
            isMobileOs: d,
            isLoopChanging: r.isLoopChanging,
            onToggle: h,
          })
        );
    }
    return tc(tl, { children: [c, u] });
  }),
  om = "Cpk2dh",
  og = "Cpk2dh Cpk1rm",
  oy = "Cpk9f",
  of = "Cpk2r",
  ob = "Cpk34y",
  ov = {
    normal: "Cpk2dh",
    hide: "Cpk2dh Cpk1rm",
    shadow: "Cpk9f",
    body: "Cpk2r",
    icon: "Cpk34y",
  };
function ow(t) {
  return Math.round(1e4 * t) / 1e4;
}
function oL(t, e, i) {
  let o = t / 2,
    s = ow(o * i),
    a = ow(o);
  return `M 0,${s}
     Q 0,0 ${a},0 q ${a},0 ${a},${s}
     v ${ow(e - 2 * s)}
     q 0,${s} -${a},${s} q -${a},0 -${a},-${s}
     v -${ow(e - 2 * s)}`;
}
let ok =
  "M 3.3534,10.3314 Q 0,3.96 5.4,3.96 L 6.6,3.96 Q 12,3.96 8.6466,10.3314 L 7.6767,12.1743 Q 6,15.36 4.3233,12.1743 z";
function oC(t) {
  let { intervalSize: e, strings: i, defs: o } = t,
    s = oL(B, (i - 1) * e + (M + A), 1.3);
  return tc("g", {
    ref: this.props.setRef,
    class: ov.normal,
    children: [
      o &&
        tc("defs", {
          children: tc("filter", {
            id: "CursorShadow",
            x: "-40%",
            width: "180%",
            children: [
              tc("feGaussianBlur", { in: "SourceGraphic", stdDeviation: 2 }),
              tc("feOffset", { dx: 0, dy: 2 }),
            ],
          }),
        }),
      tc(
        "path",
        { class: ov.shadow, filter: "url(#CursorShadow)", d: s },
        "shadow"
      ),
      tc("path", { class: ov.body, d: s }, "body"),
      tc(
        "path",
        {
          class: ov.icon,
          d: "M 3.3534,10.3314 Q 0,3.96 5.4,3.96 L 6.6,3.96 Q 12,3.96 8.6466,10.3314 L 7.6767,12.1743 Q 6,15.36 4.3233,12.1743 z",
        },
        "path"
      ),
    ],
  });
}
let ox = tu((t) => {
  let {
      part: e,
      reference: i,
      print: o,
      refs: s,
      tabEditorActive: a,
      hasLoopBackground: n,
      hasLoopStart: r,
      hasLoopEnd: l,
      loopStartLayout: d,
      loopEndLayout: h,
      loopStartX: c,
      loopEndX: u,
      line: m,
      slicingMode: g,
      handlePitchshift: f,
      showTuningButton: b,
      showTuningButtonActive: v,
      isPitchshiftToStandard: w,
    } = t,
    y = true,
    L = m.layout.height,
    k = g.expectedSliceWidth(m.layout.unscaledWidth) + O,
    C = `${-O / 2} -${m.layout.layers.height} ${k} ${L}`;
  return tc("svg", {
    width: k,
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    height: L,
    viewBox: C,
    className: iO.lineControls,
    children: [
      b &&
        !o &&
        tc(
          iY,
          {
            reference: i,
            handlePitchshift: f,
            isPitchshiftToStandard: w,
            isActive: v,
            lock: !y,
          },
          "tuning"
        ),
      p && !o && n && tc(iW, { leftLayout: d, rightLayout: h, line: m }, "bg"),
      p && !o && r && tc(iZ, { x: c, layout: d, handle: "left" }, "left"),
      p && !o && l && tc(iZ, { x: u, layout: h, handle: "right" }, "right"),
      tc(
        a ? os : ou,
        { line: m, partId: e.partId, songId: e.songId },
        a ? "bar" : "markers"
      ),
      !o &&
        tc(
          oC,
          {
            strings: m.strings,
            intervalSize: m.layout.intervalSize,
            defs: 0 === m.index,
            setRef: (t) => {
              s.current[m.index] = t;
            },
          },
          "cursor"
        ),
    ],
  });
});
class oS extends to {
  constructor() {
    super(), (this.state = { isFailed: !1 });
  }
  componentDidCatch(t) {
    this.setState({ isFailed: !0 }),
      "Sentry" in window &&
        "function" == typeof window.Sentry.captureException &&
        window.Sentry.captureException(t),
      this.props.dispatch("cursor/failed", { error: t });
  }
  render() {
    return this.state.isFailed ? null : this.props.children;
  }
}
var oT = d(oS);
let oB = O / 2,
  oM = 0,
  oN = 7,
  oE = 48,
  oP = 48,
  oI = { animationStyles: ib };
function oD(t, e) {
  return t ? Math.abs(e.x - t.x) + Math.abs(e.y - t.y) : 0;
}
function oA(t) {
  return (e) => e === t;
}
let oO = "ontouchstart" in window;
function oX(t, e, i) {
  return (
    e &&
    i &&
    e.measureLayout.lineLayout.line.index <= t.index &&
    t.index <= i.measureLayout.lineLayout.line.index
  );
}
function o$(t, e) {
  return e && e.measureLayout.lineLayout.line == t;
}
class oR extends to {
  constructor(t) {
    super(t),
      (this.lastMeasureIndex = void 0),
      (this.readyHack = !0),
      (this.state = {
        loopStartLayout: null,
        loopStartX: 0,
        loopEndLayout: null,
        loopEndX: 0,
        activeLoopHandle: void 0,
        deltaLeftX: 0,
        deltaRightX: 0,
        isPitchshiftToStandard: !1,
      }),
      (this.lastTouch = null),
      (this.onTouchMoveTickId = void 0),
      (this.windowScroller = new ii()),
      (this.scrollToCursor = k(t.device.os)
        ? () => setTimeout(this.scrollToCursorBase, 250)
        : this.scrollToCursorBase);
  }
  componentDidMount() {
    window.addEventListener("resize", this.viewportResizeDebounced),
      this.viewportResize();
  }
  scrollToCursorBase = () => {
    if (this.tab) {
      let t = X(
        this.props.part,
        this.props.store.get().player.instance?.getCursor() || 0,
        "left"
      );
      t && this.ensureLineVisibility(null, t.measureLayout.lineLayout, !1);
    }
  };
  componentDidUpdate(t) {
    t.lines.lines !== this.props.lines.lines ||
    t.lines.scale !== this.props.lines.scale ||
    t.plusAccess !== this.props.plusAccess ||
    t.videoAvailable !== this.props.videoAvailable
      ? this.viewportResize().then(this.scrollToCursor)
      : t.videoIsOpened !== this.props.videoIsOpened && this.viewportResize();
  }
  componentWillUnmount() {
    let t = this.tab;
    t && ty(t, this.onTouchStart),
      window.removeEventListener("resize", this.viewportResizeDebounced),
      this.windowScroller.unmount();
  }
  viewportResize = async () => {
    let t = this.tab;
    if (t) {
      let e = await is(t);
      (this.pageX =
        e.left +
        oB +
        (window.visualViewport
          ? window.visualViewport.pageLeft
          : document.body.scrollLeft + document.documentElement.scrollLeft)),
        (this.pageY =
          e.top +
          0 +
          (window.visualViewport
            ? window.visualViewport.pageTop
            : document.body.scrollTop + document.documentElement.scrollTop)),
        (this.clientHeight = window.visualViewport
          ? window.visualViewport.height
          : document.documentElement.clientHeight);
    }
  };
  viewportResizeDebounced = $(this.viewportResize, 100);
  static getDerivedStateFromProps(t, e) {
    let i = e.loopStartLayout,
      o = i && !e.activeLoopHandle ? i.absoluteLoopLeftX : e.loopStartX,
      s = e.loopEndLayout,
      a = s && !e.activeLoopHandle ? s.absoluteLoopRightX : e.loopEndX,
      { tuning: n, instrumentId: r } = t.part,
      l = n && R(r, n),
      p = !1;
    (V(r) || F(r)) && l && 0 !== l.pitch && (p = !0);
    let d = t.position,
      h = !1,
      c = !1;
    if (0 !== d.loopStart || 0 !== d.loopEnd) {
      if (
        ((i && -1 !== i.occurrences.findIndex(oA(t.position.loopStart))) ||
          ((o = (i = X(t.part, d.loopStart, "left")).absoluteLoopLeftX),
          (h = !0)),
        (s && -1 !== s.occurrences.findIndex(oA(d.loopEnd - s.duration))) ||
          ((a = (s = X(t.part, d.loopEnd, "right")).absoluteLoopRightX),
          (c = !0)),
        h || c)
      ) {
        let e = z(t.part, d.cursor, i, s);
        Y(d, e) || t.dispatch("cursor/move", e);
      }
    } else (i = null), (o = 0), (s = null), (a = 0);
    return {
      loopStartLayout: i,
      loopStartX: o,
      loopEndLayout: s,
      loopEndX: a,
      isPitchshiftToStandard: p,
    };
  }
  ensureLineVisibility = (t, e, i) => {
    let { showPitchshiftLayer: o } = this.props;
    if (this.props.lines.print) return;
    let s = window.visualViewport
        ? window.visualViewport.pageTop
        : window.scrollY,
      a = this.props.lines.scale,
      n = U(),
      r = this.props.videoIsReady ? 200 : 0,
      l = (n ? 48 : 0) + r,
      p = n ? 48 : 0,
      { pageY: d, clientHeight: h } = this,
      c = s - d + l,
      u = s - d + h - p,
      m = u - c,
      g = e.line.index,
      y = this.props.lines;
    if (t && (t.maxY * a < c || u < t.y * a)) return;
    let f = s,
      { loopStartLayout: b, loopEndLayout: v } = this.state;
    if (o) f = 0;
    else if (b && v) {
      let t = e.y * a - c;
      if (t < 0) f = s + t;
      else if (
        ((t = u - e.maxY * a) < 0 && (f = s - t),
        g < v.measureLayout.lineLayout.line.index)
      ) {
        let i = y.lines[g + 1];
        if (i) {
          let o = e.y,
            n = i.layout.maxY;
          (n - o) * a < m && (t = u - n * a) < 0 && (f = s - t);
        }
      }
    } else if (0 === g) f = 0;
    else if (((f = e.y * a + d - l), g < y.lines.length - 1)) {
      let t = y.lines[g - 1],
        e = y.lines[g + 1];
      if (t && e) {
        let i = t.layout.y,
          o = e.layout.maxY;
        (o - i) * a < m && (f = i * a + d - l);
      }
    }
    f !== s && this.windowScroller.scroll(f, i, s);
  };
  onTouchStart = (t) => {
    if (oO && "mousedown" === t.type) return;
    let e = this.props.store.get(),
      { tabEditorActive: i } = this.props;
    if (i && !(e.player.shouldPlay && e.player.canPlay)) {
      this.handleTabEditor(t);
      return;
    }
    let o = t.target;
    for (; o && o !== this.tab; ) {
      if (
        o.getAttribute("data-tab-control") ||
        "dialog" === o.getAttribute("role")
      )
        return;
      o = o.parentNode;
    }
    if (this.props.layer) {
      this.props.dispatch("layer/hide"),
        t.preventDefault(),
        t.stopPropagation();
      return;
    }
    let s =
        t.target.parentElement &&
        t.target.parentElement.getAttribute("data-loop-handle"),
      a = this.getTouchPoint(t);
    if (((this.lastTouch = a), "left" === s || "right" === s)) {
      if (
        (t.preventDefault(),
        t.stopPropagation(),
        this.props.dispatch("player/changeLoop", !0),
        this.setState((t) =>
          "left" === s
            ? { activeLoopHandle: s, deltaLeftX: t.loopStartX - a.x }
            : { activeLoopHandle: s, deltaRightX: t.loopEndX - a.x }
        ),
        !this.onTouchMoveTickId)
      ) {
        let t = window.requestAnimationFrame;
        this.onTouchMoveTickId = t(this.onTouchMoveTick);
      }
      tf(document, this.onTouchMove);
    }
    tb(document, this.onTouchEnd);
  };
  onTouchMove = (t) => {
    t.preventDefault(),
      t.stopPropagation(),
      (this.lastTouch = this.getTouchPoint(t));
  };
  limitX(t) {
    return Math.min(Math.max(t, 0), this.props.lines.width - 1);
  }
  onTouchMoveTick = () => {
    this.lastTouch &&
      this.setState((t) => {
        let e = this.lastTouch;
        if (!e) throw Error("Wrong state during touch move");
        let i = {
          loopStartX: t.loopStartX,
          loopStartLayout: t.loopStartLayout,
          loopEndX: t.loopEndX,
          loopEndLayout: t.loopEndLayout,
        };
        {
          let { loopStartLayout: o, loopEndLayout: s } = i;
          if (!o || !s) throw Error("Wrong loop state");
          if ("left" === t.activeLoopHandle) {
            let a = { x: this.limitX(e.x + t.deltaLeftX), y: e.y },
              n = K(this.props.lines.lines, a, "left"),
              r = _(n),
              l = _(s);
            r < l || (r === l && a.x <= s.absoluteLoopLeftX)
              ? ((i.loopStartLayout = n), (i.loopStartX = a.x))
              : ((i.loopStartLayout = i.loopEndLayout),
                (i.loopStartX = o.absoluteLoopLeftX));
          } else {
            let a = { x: this.limitX(e.x + t.deltaRightX), y: e.y },
              n = K(this.props.lines.lines, a, "right"),
              r = _(n),
              l = _(o);
            r > l || (r === l && a.x >= o.absoluteLoopRightX)
              ? ((i.loopEndLayout = n), (i.loopEndX = a.x))
              : ((i.loopEndLayout = i.loopStartLayout),
                (i.loopEndX = s.absoluteLoopRightX));
          }
        }
        {
          let { loopStartLayout: e, loopEndLayout: o } = i;
          e &&
            o &&
            (e !== t.loopStartLayout || o !== t.loopEndLayout) &&
            this.props.dispatch("cursor/loop", {
              loopStartLayout: e,
              loopEndLayout: o,
              side: t.activeLoopHandle,
            });
        }
        return (this.lastTouch = null), i;
      });
    let t = window.requestAnimationFrame;
    this.onTouchMoveTickId = t(this.onTouchMoveTick);
  };
  onTouchEnd = (t) => {
    if (this.state.activeLoopHandle)
      tv(document, this.onTouchMove),
        t.preventDefault(),
        this.onTouchMoveTickId && cancelAnimationFrame(this.onTouchMoveTickId),
        (this.onTouchMoveTickId = void 0),
        this.setState(
          (t) => (
            this.props.dispatch("player/changeLoop", !1),
            {
              activeLoopHandle: void 0,
              loopStartX: t.loopStartLayout
                ? t.loopStartLayout.absoluteLoopLeftX
                : 0,
              loopEndX: t.loopEndLayout
                ? t.loopEndLayout.absoluteLoopRightX
                : 0,
            }
          )
        );
    else {
      let e = this.getTouchPoint(t),
        i = oD(this.lastTouch, e);
      i < 7 &&
        (t.preventDefault(),
        this.setState((t) => {
          let i = {
              loopStartX: t.loopStartX,
              loopStartLayout: t.loopStartLayout,
              loopEndX: t.loopEndX,
              loopEndLayout: t.loopEndLayout,
            },
            o = this.props.position,
            s = K(this.props.lines.lines, e);
          if (0 === o.loopStart && 0 === o.loopEnd)
            o = { cursor: H(s), loopStart: 0, loopEnd: 0 };
          else {
            let t = H(s),
              e = q(s);
            if (o.loopStart <= t && t < o.loopEnd)
              o = { cursor: t, loopStart: o.loopStart, loopEnd: o.loopEnd };
            else if (o.loopStart <= e && e < o.loopEnd)
              o = { cursor: e, loopStart: o.loopStart, loopEnd: o.loopEnd };
            else {
              let e = s.measureLayout.measure.layouts,
                a = e[0].beatsLayouts,
                n = e[e.length - 1].beatsLayouts;
              (i.loopStartLayout = a[0]),
                (i.loopEndLayout = n[n.length - 1]),
                (i.loopStartX = i.loopStartLayout.absoluteLoopLeftX),
                (i.loopEndX = i.loopEndLayout.absoluteLoopRightX),
                (o = {
                  cursor: t,
                  loopStart: j(i.loopStartLayout),
                  loopEnd: W(i.loopEndLayout),
                });
            }
          }
          return (
            this.props.dispatch("cursor/move", o),
            this.ensureLineVisibility(null, s.measureLayout.lineLayout, !1),
            i
          );
        })),
        (this.lastTouch = null);
    }
    tw(document, this.onTouchEnd);
  };
  getTouchPoint(t) {
    let e = t.changedTouches ? t.changedTouches[0] : t,
      i = (e.pageX - this.pageX) / this.props.lines.scale,
      o = (e.pageY - this.pageY) / this.props.lines.scale;
    return { x: i, y: o };
  }
  handleTabEditor(t) {
    let e = this.getTouchPoint(t),
      i = this.props.device,
      o = w(i) || L(i.os) || k(i.os);
    if (o) {
      let t = document.querySelector("#mobileKeyboard").getBoundingClientRect(),
        i =
          this.lastTouch &&
          e.y > this.lastTouch.y + 10 &&
          e.y < this.lastTouch.y + 10 + t.height,
        o =
          this.lastTouch &&
          e.x > this.lastTouch.x - t.width / 2 &&
          e.x < this.lastTouch.x + t.width / 2;
      if (i && o) return;
      this.lastTouch = e;
    }
    let s = K(this.props.lines.lines, e),
      a = b(s.measureLayout.lineLayout, e.y);
    this.props.setTabEditor({
      beatsLayout: s,
      stringNum: a,
      scale: this.props.lines.scale,
    });
  }
  refMain = (t) => {
    (this.tab = t),
      p && t && (ty(t, this.onTouchStart), tL(t, this.onTouchStart));
  };
  refTuning = (t) => {
    this.tuningButton = t;
  };
  render() {
    let {
        loopStartLayout: t,
        loopEndLayout: e,
        loopStartX: i,
        loopEndX: o,
        isPitchshiftToStandard: s,
      } = this.state,
      a = this.props.lines.lines,
      n = this.props.lines.scale,
      r = this.props.lines.print,
      l = this.props.lines.slicingMode,
      {
        part: p,
        isSmallScreen: h,
        handlePitchshift: c,
        showPitchshiftPopup: u,
        showPitchshiftLayer: m,
        tuning: g,
        tabEditorActive: y,
        tabEditorData: f,
        fingerings: b,
        videoIsOpened: v,
      } = this.props,
      d = true,
      w = a[0].layout.layers.height,
      L = b && b.partId === p.partId ? b.data : void 0,
      k = r ? ic.tablaturePrint : ic.tablatureNoPrint,
      C = !h && p.tuning && !v,
      T = !((d && !this.props.device.isDesktop) || r),
      B = ta([]);
    return ti(
      tl,
      null,
      ti(
        "section",
        {
          id: "tablature",
          className: k,
          "data-id": d ? G : Q,
          role: "application",
          key: "main",
          ref: this.refMain,
        },
        0 !== n && y && ti(e9, { scale: n }),
        tc(iN, {
          device: this.props.device,
          children: tc(oT, {
            children: tc(iD, {
              print: r,
              part: p,
              lines: a,
              refs: B,
              ensureLineVisibility: this.ensureLineVisibility,
              children: a.map((a) => {
                let n = 0 === a.index,
                  h = C && n,
                  b = this.state.activeLoopHandle,
                  v = oX(a, t, e),
                  w = o$(a, t),
                  k = o$(a, e),
                  x = n ? this.refTuning : null;
                return tc("div", {
                  className: ic.lineWrap,
                  children: [
                    tc(
                      tk,
                      {
                        line: a,
                        part: p,
                        tuning: n && g,
                        inlineDefs: n,
                        slicingMode: l,
                        tabEditorData: f,
                        fingerings: L,
                        lazy: T,
                      },
                      "line-" + a.index.toString()
                    ),
                    tc(
                      ox,
                      {
                        line: a,
                        part: p,
                        reference: x,
                        slicingMode: l,
                        handlePitchshift: c,
                        plusAccess: d,
                        showTuningButton: h,
                        showTuningButtonActive: h && (u || m),
                        isPitchshiftToStandard: !!h && s,
                        hasLoopBackground: v,
                        hasLoopStart: w,
                        hasLoopEnd: k,
                        loopStartLayout: v || w ? t : null,
                        loopStartX: w ? i : null,
                        loopEndLayout: v || k ? e : null,
                        loopEndX: k ? o : null,
                        activeLoopHandle: w || k ? b : null,
                        tabEditorActive: y,
                        refs: B,
                        print: r,
                      },
                      "ctrls-" + a.index.toString()
                    ),
                  ],
                });
              }),
            }),
          }),
        }),
        ti(
          x,
          null,
          !h &&
            u &&
            ti(
              S,
              { ...oI, key: "popup" },
              ti(io, { tab: this.tab, tuningButton: this.tuningButton })
            ),
          !h &&
            m &&
            ti(
              S,
              { ...oI, key: "layer" },
              ti(tC, {
                firstLineLayoutHeight: w,
                ensureLineVisibility: this.ensureLineVisibility,
                tab: this.tab,
                tuningButton: this.tuningButton,
              })
            )
        )
      )
    );
  }
}
let oV = { onTab: !0 };
class oF extends to {
  activateFingeringsExperiment = () => {
    let { dispatch: t, user: e, experiments: i } = this.props;
    Z(e) &&
      i.paid_fingerings?.status === "pending" &&
      t("experiments/activate", { experimentName: "paid_fingerings" });
  };
  setTabEditor = (t) => this.props.dispatch("tabEditor/setForm", t);
  isZoomShortcutsTestSegment =
    this.props.experiments.zoom_shortcuts?.segment === "on";
  componentDidMount() {
    let t = window.hotKeysManager;
    t.bindOne("space", this.props.handlePlay, oV),
      t.bindOne("l", this.props.handleLoop, oV),
      t.bindOne("f", this.props.handleSolo, oV),
      t.bindOne("m", this.props.handleMute, oV),
      t.bindOne("r", this.props.handlePitchshift, oV),
      t.bindOne("t", this.props.handleMixer, oV),
      t.bindOne("s", this.props.handleSpeed, oV),
      t.bindOne("p", this.props.handlePrint, oV),
      t.bindOne("c", this.props.handleCountin, oV),
      t.bindOne("n", this.props.handleMetronome, oV),
      t.bindOne("e", this.props.handleTabEditor, oV),
      t.bindOne("g", this.props.handleFingerings, oV),
      t.bindMeta("alt+s", this.props.handleIncreaseBpm, "global", "App", !0),
      t.bindMeta("alt+a", this.props.handleDecreaseBpm, "global", "App", !0),
      this.isZoomShortcutsTestSegment &&
        (t.bindMeta(
          "ctrl++",
          this.props.handleIncreaseTabScale,
          "onTab",
          "App",
          !0
        ),
        t.bindMeta(
          "ctrl+NumpadPlus",
          this.props.handleIncreaseTabScale,
          "onTab",
          "App",
          !0
        ),
        t.bindMeta(
          "ctrl+-",
          this.props.handleDecreaseTabScale,
          "onTab",
          "App",
          !0
        ),
        t.bindMeta(
          "ctrl+NumpadMinus",
          this.props.handleDecreaseTabScale,
          "onTab",
          "App",
          !0
        ),
        t.bindMeta(
          "ctrl+0",
          this.props.handleResetTabScale,
          "onTab",
          "App",
          !0
        ),
        t.bindMeta(
          "ctrl+Numpad0",
          this.props.handleResetTabScale,
          "onTab",
          "App",
          !0
        )),
      window.addEventListener("keydown", (t) => {
        let e = [187, 107],
          i = [189, 109],
          o = [...e, ...i];
        (t.ctrlKey || t.metaKey) &&
          o.includes(t.keyCode) &&
          this.props.experiments.zoom_shortcuts?.status === "pending" &&
          this.props.dispatch("experiments/activate", {
            experimentName: "zoom_shortcuts",
          }),
          !1 === this.isZoomShortcutsTestSegment &&
            (t.ctrlKey || t.metaKey) &&
            (e.includes(t.keyCode) &&
              this.props.dispatch("curiosity/event", { event: "Zoomed in" }),
            i.includes(t.keyCode) &&
              this.props.dispatch("curiosity/event", { event: "Zoomed out" }));
      }),
      this.props?.query?.from === "email" &&
        this.props.dispatch("curiosity/conversion", {
          event: "Clicked link in new comment notification email",
        }),
      [
        { key: "alt+1", speed: 25 },
        { key: "alt+2", speed: 50 },
        { key: "alt+3", speed: 75 },
        { key: "alt+4", speed: 100 },
        { key: "alt+5", speed: 125 },
        { key: "alt+6", speed: 150 },
        { key: "alt+7", speed: 175 },
      ].forEach((e) => {
        t.bindMeta(
          e.key,
          this.props.handleChangeSpeed(e.speed),
          "global",
          "App",
          !0
        );
      });
  }
  componentWillUnmount() {
    let t = window.hotKeysManager;
    t.unbindOne("space", oV),
      t.unbindOne("l", oV),
      t.unbindOne("f", oV),
      t.unbindOne("m", oV),
      t.unbindOne("r", oV),
      t.unbindOne("t", oV),
      t.unbindOne("s", oV),
      t.unbindOne("p", oV),
      t.unbindOne("c", oV),
      t.unbindOne("n", oV),
      t.unbindOne("e", oV),
      this.resizeObserver && this.resizeObserver.disconnect();
  }
  render() {
    let {
        dispatch: t,
        user: e,
        demo: i,
        player: o,
        meta: s,
        part: a,
        video: n,
        cursor: r,
        screen: l,
        layer: { layer: p },
        device: d,
        route: h,
        tabEditor: c,
        fingerings: u,
        experiments: m,
        playAlongAd: g,
      } = this.props,
      y = h.isPanel,
      f = l.isSmall,
      b = J(s),
      v = "saving" === c.status || "changes" === c.status,
      { pitchShift: w } = o,
      L = td(
        () =>
          !!a.current &&
          !!a.current.tuning &&
          a.current.tuning.map((t) => t + w),
        [w, a]
      ),
      k = s.allowedByLicense,
      C = !s.isFailed && !a.isFailed && k && !s.isDeleted,
      x = C && !!a.current && !!a.lines.lines.length,
      S = C && (!a.current || !a.lines.lines.length),
      T = C && !Z(e) && !tt(i),
      B = C && !Z(e) && !tt(i) && d.isPhone && x,
      M = !!n.current && !s.isDeleted,
      N = o.videoOpened || g.isOpened,
      E = !n.current,
      P = Z(e) || tt(i) ? et : ez,
      I = m.paid_fingerings?.segment,
      D = Z(e) && ("ut" === I || "on" === I),
      A = h.hasEditor,
      O = A ? te.paneWithEditor : te.pane;
    return ti(
      "section",
      {
        className: te.tablature,
        id: "apptab",
        role: y ? "complementary" : "main",
        "data-tab-editor": A ? "yes" : "no",
      },
      ti(tU, null),
      M &&
        ti(P, {
          songId: a.songId,
          handlePlayVideo: this.props.handlePlayVideo,
          handlePauseVideo: this.props.handlePauseVideo,
        }),
      E && ti("div", { className: te.videoButtonPlug }),
      ti(f ? tS : tT, {
        ...this.props,
        shouldPlay: o.shouldPlay,
        canPlay: o.canPlay || y,
        track: b,
        device: d,
        layer: p,
        plusAccess: Z(e) || tt(i),
        fingeringsEnabled: D,
        fingeringsStatus: u.status,
        fingeringsActive: u.shown,
        loop: 0 !== r.position.loopEnd,
        type: o.type,
        speed: o.speed,
        pitchShift: o.pitchShift,
        pitchShiftAvailable: !a.current || !!a.current.tuning,
        isCountin: o.isCountin,
        isMetronome: o.isMetronome,
        metronomeType: o.metronomeType,
        tadEditorWarning: v,
        tabEditorActive: A,
        usedDrums: a.current && a.current.usedDrums,
        videoIsOpened: o.videoOpened,
        fingeringsOnActivate: this.activateFingeringsExperiment,
        playAlongAdOpened: g.isOpened,
      }),
      T && ti(tI, { key: `tab-showroom-${s.songId}`, songId: s.songId }),
      ti(
        "section",
        { class: O, key: `tab-${s.songId}` },
        S && ti(tP, { key: `loading-${s.songId}` }),
        x &&
          tc(
            oR,
            {
              key: `tab-${s.songId}-${a.current.partId}`,
              dispatch: t,
              store: this.props.store,
              part: a.current,
              lines: a.lines,
              isSmallScreen: f,
              plusAccess: Z(e) || tt(i),
              position: r.position,
              handlePitchshift: this.props.handlePitchshift,
              showPitchshiftPopup: "plus_pitchshift" === p,
              showPitchshiftLayer: "pitchshift" === p,
              tuning: L,
              layer: p,
              tabEditorData: c.data,
              tabEditorActive: A,
              setTabEditor: this.setTabEditor,
              fingerings: u.shown && u.trackFingering,
              device: d,
              isLoggedIn: e.isLoggedIn,
              videoIsReady: N,
              videoAvailable: M,
              videoIsOpened: o.videoOpened,
            },
            a.lines.hash
          )
      ),
      B && ti(tx, { key: `bottom-showroom-${s.songId}-${a.current.partId}` }),
      x && ti(tE, { withAds: T, device: d, copyright: !0 })
    );
  }
}
var oz = d(
  oF,
  "user",
  "demo",
  "player",
  "meta",
  "video",
  "part",
  "cursor",
  "screen",
  "layer",
  "device",
  "route",
  "experiments",
  "tabEditor",
  "fingerings",
  "playAlongAd"
);
export { oz as default };
