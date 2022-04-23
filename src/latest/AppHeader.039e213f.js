import {
  g as e,
  v as t,
  e as a,
  a as s,
  A as i,
  d as n,
  m as r,
  _ as l,
  y as o,
} from "./preact.f8a34c73.js";
import {
  u as c,
  C as d,
  Z as h,
  T as u,
  H as m,
  I as p,
  L as f,
  Y as v,
  a2 as g,
  X as C,
  a9 as y,
  aa as k,
  ab as w,
  ac as x,
  K as b,
  a8 as N,
  a0 as H,
  a1 as z,
  p as S,
  a6 as M,
  a7 as B,
  a3 as T,
  a4 as P,
  a5 as L,
  $ as D,
} from "./index.3637aaf7.js";
import { U as I, J as F } from "./NetworkError.930b5b9c.js";
import { t as _ } from "./DifficultyIndicator.c7b5f0f9.js";
const A = {
    button: "Co02os",
    circle: "Co021p",
    rect: "Co0pr",
    tag: "Co02n3",
    shape: "Co0u4",
    text: "Co02e1",
    play: "Co0156",
    lock: "Co028a",
    stroke: "Co01mx",
    playLoading: "Co0156 Co0z7",
    active: "Co02os Co033q",
    main: "Co02os Co02v6",
    mainActive: "Co02os Co033q Co01t0",
    icon: "Co02f1",
    warningCircle: "Co0d2",
    textSpeed: "Co02e1 Co011p",
    textHelp: "Co02e1 Co0rk",
    textBpm: "Co02e1 Co01b4",
    tuning: "Co0eb",
    speed: "Co0u4 Co0zs",
    editor: "Co0u4 Co035k",
    loop: "Co01mx Co02su",
    solo: "Co0u4 Co022n",
    mute: "Co01mx Co0eh",
    learn: "Co0u4 Co022e",
    print: "Co01mx Co0mr",
    countin: "Co0u4 Co02d3",
    metronome: "Co0u4 Co0va",
    arrow: "Co0sc",
    "arrow-down": "Co0sc Co012h",
    new: "Co024j",
  },
  $ = () =>
    a("filter", {
      id: "svg_shadow",
      x: "-50%",
      y: "-50%",
      width: "200%",
      height: "200%",
      "color-interpolation-filters": "sRGB",
      children: [
        a("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }),
        a("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha",
        }),
        a("feOffset", { dy: "1" }),
        a("feGaussianBlur", { stdDeviation: "4" }),
        a("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",
        }),
        a("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_4297_138",
        }),
        a("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_4297_138",
          result: "shape",
        }),
      ],
    }),
  j = () =>
    a("filter", {
      id: "svg_shadow_light",
      x: "-50%",
      y: "-50%",
      width: "200%",
      height: "200%",
      "color-interpolation-filters": "sRGB",
      children: [
        a("feFlood", { "flood-opacity": "0", result: "BackgroundImageFix" }),
        a("feColorMatrix", {
          in: "SourceAlpha",
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
          result: "hardAlpha",
        }),
        a("feOffset", { dy: "1" }),
        a("feGaussianBlur", { stdDeviation: "1" }),
        a("feColorMatrix", {
          type: "matrix",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",
        }),
        a("feBlend", {
          mode: "normal",
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_4298_183",
        }),
        a("feBlend", {
          mode: "normal",
          in: "SourceGraphic",
          in2: "effect1_dropShadow_4298_183",
          result: "shape",
        }),
      ],
    });
function q() {
  return t("defs", null, t($, {}), t(j, {}));
}
class E extends s {
  componentDidUpdate(e) {
    const { canPlay: t } = this.props;
    e.canPlay && !t
      ? (this.animationTimer && clearTimeout(this.animationTimer),
        (this.animationTimer = setTimeout(
          () => this.setState({ loading: !0 }),
          600
        )))
      : !e.canPlay &&
        t &&
        (this.animationTimer && clearTimeout(this.animationTimer),
        (this.animationTimer = setTimeout(
          () => this.setState({ loading: !1 }),
          600
        )));
  }
  constructor(e) {
    super(e), (this.state = { loading: !e.canPlay });
  }
  render() {
    const {
        onClick: e,
        shouldPlay: a,
        canPlay: s,
        hideDefs: i,
        title: n,
        titlePressed: r,
      } = this.props,
      { loading: l } = this.state,
      o = l ? A.playLoading : A.play;
    return t(
      "button",
      {
        className: a ? A.mainActive : A.main,
        onClick: e,
        "aria-pressed": a,
        "data-can-play": s,
      },
      t(
        "svg",
        {
          className: A.icon,
          width: 65,
          height: 65,
          viewBox: "-5 -4 65 65",
          role: "img",
          "aria-labelledby": "mainplay-title-id",
          "data-loading": l,
        },
        !i && q(),
        t("title", {}, a && r ? r : n),
        t("circle", {
          className: A.circle,
          cx: "27.5",
          cy: "27.5",
          r: "27.5",
          filter: "url(#svg_shadow)",
        }),
        t("path", {
          className: o,
          transform: "translate(19 15)",
          d: a
            ? "M-1 4c0-2 0-2 2-2h3c2 0 2 0 2 2v17c0 2 0 2-2 2h-3c-2 0-2 0-2-2zm12 0c0-2 0-2 2-2h3c2 0 2 0 2 2v17c0 2 0 2-2 2h-3c-2 0-2 0-2-2z"
            : "M1 3s0-2 2-2 12.2 7 15 8.9c2.7 2 2.7 3.2 0 5.2-2.8 1.9-13 8.9-15 8.9s-2-2-2-2z",
        })
      )
    );
  }
}
function R(e) {
  switch (e) {
    case "loop":
      return "M29.5 17.5h2v10h-12m3-2.6l-3 2.6 3 2.6m-6.5-2.5h-2v-10h12m-3-2.6l3 2.6-3 2.6";
    case "solo":
      return "M12.5 24a10 10 0 1 1 20 0 8 8 0 0 1-1.3 4c-2 2-5 2.5-5 2.5a.6.6 0 0 1-.7-.5v-9a.6.6 0 0 1 .7-.5l4.55 2.8a8.3 8.5 0 0 0-16.5 0l4.55-2.8a.6.6 0 0 1 .7.5v9a.6.6 0 0 1-.7.5s-3-.5-5-2.5a8 8 0 0 1-1.3-4zm5.5-1a.5.5 0 0 0-.5-.3c-2.8 2-3 1.7-3 2.7 0 .9.5 2 3 2.9a.5.5 0 0 0 .5-.3zm9 5a.5.5 0 0 0 .5.3c2.5-.9 3-2 3-2.9 0-1-.2-.7-3-2.7a.5.5 0 0 0-.5.3z";
    case "mute":
      return "M23.5 30c0 1-1 2-2 1l-5-5h-2.5q-1 0-1-1v-4.5q0-1 1-1h2.5l5-5c1-1 2 0 2 1z m3-10.5l6 6m0-6l-6 6";
    case "print":
      return "M16.5 28h-2c-.8 0-1.5-.7-1.5-1.5v-5c0-.8.7-1.5 1.5-1.5h16c.8 0 1.5.7 1.5 1.5v5c0 .8-.7 1.5-1.5 1.5h-2v3c0 .8-.7 1.5-1.5 1.5h-9c-.8 0-1.5-.7-1.5-1.5zm0 0v-4h12v4m-12-8v-6h12v6m-9.5 9h7m-7-2h7";
    case "countin":
      return "M34 22a11.5 11.5 0 1 0-1 4.7l-1.8-.8a9.5 9.5 0 1 1-8.7-13.4v2A7.5 7.5 0 0 1 30 22zm-13.2 2.65c0 .6.5 1.3 1.45 1.3s1.45-.65 1.45-1.3S23.35 23 22.25 23H21v-1.5h1.25c1 0 1.3-1 1.3-1.5s-.4-1.2-1.3-1.2-1.35.75-1.35 1.2h-2c0-1.2 1-2.75 3.35-2.75S25.5 18.8 25.5 20s-.9 2-1.5 2.2c.85.25 1.7 1.15 1.7 2.45s-1 2.8-3.45 2.8-3.45-1.5-3.45-2.8";
    case "editor":
      return "M0 16.03h8.93l-.49 1.6H0v-1.6zM3.8 4.6h8.4a.8.8 0 1 1 0 1.6H3.8a.8.8 0 1 1 0-1.6zm3.4 5V1.2a.8.8 0 1 1 1.6 0v8.4a.8.8 0 0 1-1.6 0zM15.8.4c.51 0 .93.42.93.94v13.12c0 .52-.81 1.45-.94.94-.12-.52-.08-1.95-.94-1.36V1.34c0-.52.42-.94.94-.94zm.6 13.27c.27.37.39.96.33 1.41-.06.42-.27.94-.55 1.37a8.88 8.88 0 0 1-2.67 2.52 9.69 9.69 0 0 1-3.5 1.4c-.55.08-1.14.08-1.59-.02a2.44 2.44 0 0 1-1.32-.8c-.28-.37-.4-.96-.33-1.41.06-.42.27-.93.54-1.37a8.88 8.88 0 0 1 2.67-2.52 9.67 9.67 0 0 1 3.5-1.4 4.6 4.6 0 0 1 1.6.02c.47.11 1.03.43 1.31.8zm-1.67.7a2.46 2.46 0 0 0-.93 0c-.86.14-1.83.5-2.86 1.16a6.96 6.96 0 0 0-2.2 2.05c-.2.33-.3.55-.33.8-.03.22-.03.22.04.32.08.1.08.1.31.15.26.06.53.06.94 0 .86-.13 1.83-.5 2.86-1.16a6.94 6.94 0 0 0 2.19-2.05c.2-.33.3-.55.33-.8.03-.21.04-.21-.04-.32-.08-.1-.08-.1-.3-.15zm.15 1.66H25v1.6H13.8l1.08-1.6z";
    case "arrow":
    case "arrow-down":
      return "M 1 14 L 7 7.5 L 1 1";
    case "tuning":
      return "M9.7 19.1h-6m2-2-2 2 2 2m10-2h6m-2 2 2-2-2-2m-10-10v7s0 3 3 3 3-3 3-3v-7m-3 10v5";
    case "metronome":
      return "m10.7 4.7-.4-2.2c0-.1 0-.2-.2-.2H4c-.1 0-.2 0-.2.2L2.3 14.7h3.5l9.6-12.3c.7-.8 2 .2 1.2 1L8 14.7h3.7l-.1-1.5A.8.8 0 1 1 13 13l.2 2.4.4 2.9c0 1-.8 2-1.8 2H2c-1 0-1.9-1-1.8-2l1.8-16C2.2 1.3 3 .7 4 .7h6.2c1 0 1.7.6 1.8 1.5l.4 2.2a.8.8 0 0 1-1.6.3ZM2.2 16.3l-.3 2.2.2.2H12l.2-.2-.3-2.2H2.2Z";
  }
}
class V extends s {
  render() {
    const {
        pressed: e,
        disabled: a,
        onClick: s,
        icon: i,
        text: n,
        title: r,
        titlePressed: l,
        hasPopup: o,
        isNew: c,
        warning: d,
        lock: h,
      } = this.props,
      u = `${i}-title-id`,
      m = !e && d ? A.warningCircle : A.circle;
    return t(
      "button",
      {
        className: e ? A.active : A.button,
        onClick: s,
        "aria-haspopup": o,
        "aria-pressed": e,
        id:
          "arrow" === i || "arrow-down" === i
            ? "control-minimizer"
            : `control-${i}`,
        disabled: a,
      },
      t(
        "svg",
        {
          className: A.icon,
          width: 55,
          height: 55,
          viewBox: "-4 -4 55 55",
          role: "img",
          "aria-labelledby": u,
        },
        t("title", { id: u }, e && l ? l : r),
        "arrow" === i || "arrow-down" === i
          ? t("rect", {
              className: A.rect,
              x: 2,
              y: 2,
              width: 40,
              height: 40,
              rx: 6,
              filter: "url(#svg_shadow)",
            })
          : t("circle", {
              className: m,
              cx: "22.5",
              cy: "22.5",
              r: "22.5",
              filter: "url(#svg_shadow)",
            }),
        (function (e) {
          switch (e) {
            case "speed":
              return t(
                "text",
                {
                  className: A.textSpeed,
                  "text-anchor": "middle",
                  x: "22.5",
                  y: "31",
                },
                "SPEED"
              );
            case "help":
              return t(
                "text",
                {
                  className: A.textHelp,
                  "text-anchor": "middle",
                  x: "22",
                  y: "30",
                },
                "?"
              );
            default:
              return t("path", { className: A[e], d: R(e) });
          }
        })(i),
        n &&
          t(
            "text",
            { className: A.text, "text-anchor": "middle", x: "22.5", y: "21" },
            n
          ),
        h &&
          t(
            "g",
            { transform: "translate(22, 24)" },
            t("circle", {
              className: m,
              cx: "16.5",
              cy: "15.5",
              r: "8.5",
              filter: "url(#svg_shadow)",
            }),
            t("path", {
              className: A.lock,
              d: "M14.2 14.3v-1.1c0-1.4 1-2.5 2.3-2.5 1.3 0 2.3 1.1 2.3 2.5v1.1m-5.3 0h6a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-4.5a.5.5 0 0 1 .5-.5z",
            }),
            t("circle", { className: A.shape, cx: 16.5, cy: 17, r: 0.8 })
          )
      ),
      c && t("div", { className: A.new }, "NEW")
    );
  }
}
function G() {
  return t(
    "svg",
    { width: 54, height: 54, viewBox: "0 0 54 54" },
    t("path", {
      d: "M48 0a6 6 0 0 1 6 6v42a6 6 0 0 1-6 6h-42a6 6 0 0 1-6-6v-42a6 6 0 0 1 6-6zm-6.5 22.5h-10v-10h-9v10h-10v9h10v10h9v-10h10v-9z",
      fill: "#68d517",
    })
  );
}
function O(e) {
  let {
    shadow: a = "#CA7F06",
    width: s = 54,
    height: i = 30,
    id: n = "iconDemo",
  } = e;
  return t(
    "svg",
    { width: s, height: i, viewBox: "0 0 54 30" },
    t(
      "defs",
      {},
      t(
        "filter",
        {
          id: n,
          x: "-200%",
          y: "-200%",
          width: "400%",
          height: "400%",
          "filter-units": "objectBoundingBox",
          "color-interpolation-filters": "sRGB",
        },
        t("feGaussianBlur", { in: "SourceGraphic" }),
        t("feOffset", { dy: 3, result: "offsetBlur" }),
        t("feFlood", { "flood-color": a, "flood-opacity": 1 }),
        t("feComposite", {
          in2: "offsetBlur",
          operator: "in",
          result: "dropShadow",
        }),
        t("feBlend", { in: "SourceGraphic", in2: "dropShadow" })
      )
    ),
    t("path", {
      d: "M6.75 0h40.5A6.75 6.75 0 0 1 54 6.75v13.5A6.75 6.75 0 0 1 47.25 27H6.75A6.75 6.75 0 0 1 0 20.25V6.75A6.75 6.75 0 0 1 6.75 0z",
      fill: "#FF9D00",
      filter: `url(#${n})`,
      databackgound: "",
    }),
    t("path", {
      fill: "#FFF",
      d: "M13.18 15.76c.02.29.06.52.11.69.06.17.13.29.23.36s.23.1.38.1.28-.03.37-.1c.1-.07.18-.19.23-.36.06-.17.1-.4.11-.69a15.57 15.57 0 0 0 0-2.13 3.03 3.03 0 0 0-.1-.69.67.67 0 0 0-.24-.36.62.62 0 0 0-.37-.1.66.66 0 0 0-.38.1.67.67 0 0 0-.23.36c-.05.17-.09.4-.1.69a16.65 16.65 0 0 0 0 2.13zm4.12-6.55v9.47h-2.57V17.6h-.03c-.17.44-.4.76-.68.96-.28.2-.66.3-1.13.3-.89 0-1.5-.36-1.86-1.05a7.6 7.6 0 0 1-.53-3.28c0-.75.06-1.39.18-1.9.12-.5.28-.92.5-1.23.2-.32.46-.55.76-.68a2.4 2.4 0 0 1 2.02.03c.3.17.51.45.65.87h.03V9.2h2.66zM14.63 5.48h2.69v2.69h-2.69zM22.12 12.42c-.1-.2-.3-.3-.58-.3-.28 0-.46.1-.57.3-.1.2-.15.5-.15.93v.35h1.46v-.35c0-.43-.05-.74-.16-.93zm-1.3 3.77c0 .43.07.72.22.86a.7.7 0 0 0 .5.21c.23 0 .42-.09.55-.28.14-.2.2-.56.2-1.1h2.39c-.02.98-.27 1.72-.75 2.22-.48.5-1.28.74-2.38.74-.64 0-1.17-.07-1.6-.21a2.19 2.19 0 0 1-1.05-.7 3.02 3.02 0 0 1-.57-1.3 9.42 9.42 0 0 1-.17-1.93c0-.77.07-1.41.2-1.94.12-.54.32-.97.6-1.3.27-.34.63-.58 1.05-.73.43-.15.94-.23 1.54-.23.54 0 1 .06 1.4.2.4.12.73.33 1 .63s.47.7.6 1.18c.14.49.2 1.1.2 1.82v.81h-3.93v1.05zM29.22 12.7c-.1-.15-.27-.22-.5-.22-.24 0-.4.07-.5.22-.1.14-.15.39-.15.72v5.26H25.4v-7.97h2.57v.97h.03c.34-.79.99-1.18 1.93-1.18.55 0 .97.1 1.26.3.29.2.52.51.69.92.2-.45.48-.77.84-.95.36-.18.75-.27 1.16-.27.3 0 .57.03.82.1.25.06.47.18.65.34.2.17.34.4.45.67.1.27.16.63.16 1.06v6.01h-2.65v-5.26c0-.33-.05-.58-.15-.72-.1-.15-.27-.22-.5-.22-.24 0-.4.07-.5.22-.1.14-.15.39-.15.72v5.26h-2.65v-5.26c0-.33-.05-.58-.15-.72zM39.4 15.93c.02.32.06.57.12.76.06.19.14.31.23.38.1.07.21.1.36.1s.27-.03.37-.1c.1-.07.17-.2.23-.38.05-.19.09-.44.1-.76a21.45 21.45 0 0 0 0-2.47 3.69 3.69 0 0 0-.1-.76c-.06-.19-.13-.32-.23-.39a.63.63 0 0 0-.37-.1.6.6 0 0 0-.36.1c-.1.07-.17.2-.23.39-.06.18-.1.44-.12.76a20.82 20.82 0 0 0 0 2.47zm3.99.3c-.07.5-.23.95-.47 1.34-.23.39-.57.7-1.02.93-.45.23-1.04.34-1.79.34-.78 0-1.39-.1-1.84-.31-.45-.21-.8-.51-1.02-.89a3.4 3.4 0 0 1-.43-1.32 13 13 0 0 1 .01-3.17c.07-.5.23-.95.47-1.34.23-.4.57-.7 1.02-.95a3.78 3.78 0 0 1 1.79-.36c.78 0 1.39.11 1.84.33.45.22.8.53 1.02.9.23.4.37.84.43 1.34a13 13 0 0 1-.01 3.16z",
    })
  );
}
const W = "i5k2",
  U = {
    base: "i5k2",
    horizontalPopup: "i5k2 i52z2",
    verticalPopup: "i5k2 i51pj",
    verticalLeftPopup: "i5k2 i52e5",
    speedPopup: "i5k2 i52z2 i533w",
    pitchPopup: "i5k2 i52z2 i515d",
    soloPopup: "i5k2 i52z2 i527v",
    mutePopup: "i5k2 i52z2 i513s",
    loopPopup: "i5k2 i52z2 i51e9",
    printPopup: "i5k2 i52z2 i51xu",
    pitchshiftPopup: "i5k2 i52wn",
    link: "i5p0",
    basewrapper: "i5tp",
    wrapper: "i5tp i51jx",
    demowrapper: "i5tp i5173",
    text: "i5t4",
    linkText: "i51o8",
    demoText: "i517k",
    divider: "i52ov",
  };
function Q(e, t, a) {
  return a
    ? U[`${a}Popup`]
    : e
    ? U.horizontalPopup
    : t
    ? U.verticalLeftPopup
    : U.verticalPopup;
}
function Z(e) {
  let {
      title: a,
      left: s,
      horizontal: n,
      classPrefix: r,
      leftOffset: l,
      topOffset: o,
    } = e,
    d = {};
  void 0 !== l && void 0 !== o && (d = { top: `${o}px`, left: `${l}px` });
  const { dispatch: h } = c(),
    u = i(() => {
      h("demo/activate");
    }, [h]),
    m = i(() => {
      h("curiosity/setConversionProps", {
        "Last referring link": `${a} Popup`,
      });
    }, [a, h]);
  return t(
    "div",
    { className: Q(n, s, r), style: d, role: "dialog" },
    t(
      f,
      {
        className: U.link,
        to: "/a/wa/plus",
        "aria-label": `${a} is available on the Plus plan`,
        onClick: m,
      },
      t("span", { className: U.wrapper }, t(G, null)),
      t(
        "div",
        { className: U.text },
        `${a} is available`,
        t("br", null),
        "on the Plus plan",
        t("br", null),
        t("span", { className: U.linkText }, "See plans and pricing")
      )
    ),
    t("div", { className: U.divider }),
    t(
      f,
      {
        className: U.link,
        to: "/a/wsa/led-zeppelin-stairway-to-heaven-tab-s27t1",
        "aria-label": "Try out Demo Song (all the features enabled)",
        onClick: u,
      },
      t("span", { className: U.demowrapper }, t(O, null)),
      t(
        "div",
        { className: U.demoText },
        `Try out ${a}`,
        t("br", null),
        t("span", { className: U.linkText }, "on the Demo Song")
      )
    )
  );
}
var J = {
  pane: "Ctogp",
  paneStandart: "Ctogp Cto2oj",
  panePlusSecondary: "Ctogp Cto204",
  panePlus1a: "Ctogp Cto2a3",
  panePlus1Secondary: "Ctogp Cto2v9",
  panePlus2: "Ctogp Cto22p",
  panePlus2Secondary: "Ctogp Cto2qi",
  centerGroup: "Cto1ei",
  secondaryControls: "Ctozt",
  item: "Cto2qn",
  itemSmall: "Cto2qn Cto2ih",
  itemSmallHidden: "Cto2qn Cto2ih Cto10u",
  handler: "Cto1nx",
};
const K = {
  exitActive: "Byam0",
  enterActive: "Bya2az",
  enter: "Bya2dc",
  exit: "Bya1se",
};
function Y(e) {
  switch (e) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
function X(e) {
  let { capo: t, layer: s } = e;
  if (!s) return null;
  const { x1: i, y: r } = s;
  return a(n, {
    children: [
      a(
        "path",
        {
          id: "capo",
          transform: `translate(${i}, ${-16 - r})`,
          d: "M24.5 1.5c.5.5.25 2.5-.25 2.5C13 3.5 7 3.9 3.8 4.35c0 0-.05 3.9 2.7 6.15 2.75 2.25 5 2.5 7.75 2.75 3 0 1.75.5 1.75.75s1.25.75-.75 1c-3 .25-7 0-10-1 .5.5.75 1.25.5 1.5L4.5 17C2.76 16.75.6 15.25 0 13l1-1.25c.5-.75 1.75.25 1.75.25C2 10.75.25 6.5.25 3.75.25 1.5 1 1 2 .75S19 0 24.5 1.5zm-1.3 1.65c.65-.3 1.05-.9-.7-1.15-3.75-.75-14.75-.75-20-.5-.5 0-1 .25-1.25 1.25-.75 3 2.25 8.5 2.5 9.25L3 13s-1-.5-1.5-.5L1 13c.75 2 1.75 2.25 3.25 2.75l.5-.5C4.75 14.75 4 14 4 14l1.25-1c3 1 5.25 1.5 9.75 1.25.12-.01.25-.25 0-.25-3.75 0-6.5-.75-8.5-2.25S2.5 7.25 3 3.5c-.13-.05 9.8-1.2 20.2-.35z",
          className: "gs2yb",
        },
        "path"
      ),
      a(
        "text",
        {
          className: "gs2y2",
          x: 30 + i,
          y: -3 - r,
          children: `Capo ${t}${Y(t)} fret`,
        },
        "text"
      ),
    ],
  });
}
const ee = {
    header: "C6110p",
    separator: "C61zq",
    placeholder: "C6131n",
    song: "C612su",
    dash: "C61p",
    artist: "C61rs",
    track: "C61a4",
    difficulty: "C6133l",
    fill: "C611xo",
    fillText: "C612yg",
    explainLink: "C612gh",
    difficultyLinksPanel: "C61287",
    findEasierSongsLink: "C612h7",
    reportInvalidDifficultyLink: "C612h7 C611ae",
    label: "C61az",
    showroom: "C61jc",
    demo: "C611ts",
    instrumentTab: "C612rd",
    burger: "C61212",
    icon: "C611fz",
    stroke: "C611m5",
  },
  te = {
    title: "Bcrye",
    line: "Bcr2z8",
    toggle: "Bcr19p",
    wrap: "Bcr1zk",
    wrapHorizontal: "Bcr236",
    notation: "Bcr1zo",
    name: "Bcr1os",
    def: "Bcr1dk",
    notation__old: "Bcr1zo Bcrlb",
    subtitle: "Bcrl3",
  },
  ae = 31,
  se = 34,
  ie = 91,
  ne = 46,
  re = 92,
  le = 53,
  oe = [
    [36, "Kick/Bass\nDrum"],
    [35, "Acoustic\nBass\nDrum"],
    [50, "High\nFloor\nTom"],
    [48, "High\nTom"],
    [47, "Mid\nTom"],
    [45, "Low\n(Floor)\nTom"],
    [41, "Low\n(Floor)\nTom"],
    [43, "Very\nLow\nTom"],
    [38, "Snare"],
    [40, "Electric\nSnare"],
    [37, "Side\nStick\nSnare"],
    [ie, "Rim\nShot\nSnare"],
    [42, "Closed\nHi Hat"],
    [re, "Half\nHi Hat"],
    [ne, "Open\nHi Hat"],
    [44, "Foot\nHi Hat"],
    [93, "Ride\nEdge\n"],
    [59, "Ride\nEdge\n"],
    [51, "Ride\nCymbal\n"],
    [le, "Ride\nBell"],
    [55, "Splash\n"],
    [52, "China\n\n"],
    [49, "High\nCrash\n"],
    [57, "Medium\nCrash\n"],
    [99, "Low\nCowbell"],
    [56, "Cowbell"],
    [102, "High\nCowbell"],
    [27, "High Q"],
    [28, "Slap"],
    [29, "Scratch\nPush\n"],
    [30, "Scratch\nPull\n"],
    [ae, "Sticks"],
    [32, "Square\nClick"],
    [33, "Metronome\nClick"],
    [se, "Metronome\nBell"],
    [39, "Hand\nClap"],
    [54, "Tambourine\n"],
    [58, "Vibraslap"],
    [60, "High\nBongo"],
    [61, "Low\nBongo"],
    [62, "Mute\nHigh\nConga"],
    [63, "Open\nHigh\nConga"],
    [64, "Low\nConga"],
    [65, "High\nTimbale"],
    [66, "Low\nTimbale"],
    [67, "High\nAgogo"],
    [68, "Low\nAgogo"],
    [69, "Cabasa"],
    [70, "Maracas"],
    [71, "Short\nWhistle"],
    [72, "Long\nWhistle"],
    [73, "Short\nGuiro\n"],
    [74, "Long\nGuiro\n"],
    [75, "Claves"],
    [76, "High\nWood\nBlock"],
    [77, "Low\nWood\nBlock"],
    [78, "Mute\nCuica"],
    [79, "Open\nCuica"],
    [80, "Mute\nTriangle"],
    [81, "Open\nTriangle"],
    [82, "Shaker\n"],
    [83, "Jingle\nBell\n"],
    [84, "Bell\nTree\n"],
    [85, "Castinets\n"],
    [86, "Mute\nSurdo\n"],
    [87, "Open\nSurdo\n"],
  ],
  ce = [42, 44, 37, 29, 30, 33, 55, 51, 78, 80, 86, 32, 62, 93, 59],
  de = [49, 57],
  he = [56, 102, 99, 54, 76, 77];
function ue(e, t) {
  const a = C * (5 - t) + 3;
  return ce.includes(e) ||
    de.includes(e) ||
    e === re ||
    e === ne ||
    52 === e ||
    93 === e ||
    59 === e
    ? "M0 4v" + (a - 4)
    : he.includes(e)
    ? "M0 3v" + (a - 3)
    : `M0 0v${a}`;
}
function me(e) {
  let { noteString: t, className: s, noteTransform: i } = e;
  const n = -(t - Math.round(0.999 * t)) * C;
  return a("use", {
    className: s,
    transform: i + ` translate(0, ${n})`,
    xlinkHref: "#extraLine",
  });
}
function pe(e) {
  let { fret: t, className: s, transform: i } = e;
  return ce.includes(t)
    ? a("use", { className: s, transform: i, xlinkHref: "#drumCross" })
    : de.includes(t)
    ? a("use", {
        className: s,
        transform: i,
        xlinkHref: "#drumCross",
        style: "stroke-width: 2",
      })
    : 52 === t
    ? a("g", {
        className: s,
        transform: i,
        children: [
          a("use", { xlinkHref: "#drumHat" }),
          a("use", { xlinkHref: "#drumCross", style: "stroke-width: 2" }),
        ],
      })
    : he.includes(t)
    ? a("use", { className: s, transform: i, xlinkHref: "#drumTriangle" })
    : [le, ie, se].includes(t)
    ? a("use", { className: s, transform: i, xlinkHref: "#drumRhomb" })
    : [ne].includes(t)
    ? a("use", { className: s, transform: i, xlinkHref: "#drumCircleCross" })
    : [re].includes(t)
    ? a("use", { className: s, transform: i, xlinkHref: "#drumCircleStroke" })
    : [ae].includes(t)
    ? a("use", { className: s, transform: i, xlinkHref: "#drumStroke" })
    : a("use", { className: s, transform: i, xlinkHref: "#drum" });
}
const fe = { strings: "B6413b" },
  ve = {
    harmonic: "h82xl",
    rest0: "h89u",
    rest1: "h82ou",
    rest2: "h8j2",
    rest3: "h82so",
    voice: "h81p9",
    voice0: "h81p9 h8e1",
    voice1: "h81p9 h82d8",
    voice2: "h81p9 h82c6",
    voice3: "h81p9 h8cd",
    edited: "h816m",
    vDrum: "h818t",
    vDrum0: "h818t h810t",
    vDrum1: "h81w1",
    vDrum2: "h82qg",
    vDrum3: "h8152",
    drumstick: "h8ey",
    drums0: "h8ey h81yr",
    drums1: "h8ey h8306",
    drums2: "h8ey h81cu",
    drums3: "h8ey h82xx",
    stick0: "h8ey h81cp",
    stick1: "h8ey h82tw",
    stick2: "h8ey h85n",
    stick3: "h8ey h82pf",
  };
function ge(e) {
  let { end: a } = e,
    s = "M0,0v48";
  for (let e = 0; e < 5; e++) s += `M0,${C * e} h${a}`;
  return (s += "V0"), t("path", { className: fe.strings, d: s });
}
function Ce(e) {
  let { x: a, title: s, fret: i, string: r } = e;
  return t(
    n,
    null,
    t(
      "text",
      { "text-anchor": "middle" },
      s.split("\n").map((e, s) => t("tspan", { x: a, y: -14 * (3 - s) }, e))
    ),
    t(ye, { x: a, fret: i, string: r })
  );
}
function ye(e) {
  let { x: a, fret: s, string: i } = e;
  const r = ve.drums0,
    l = `translate(${a}, ${0.5 + C * i})`,
    o = t(pe, { fret: s, className: r, transform: l }),
    c =
      (i <= -1 || i >= 5) &&
      t(me, { noteString: i, className: fe.strings, noteTransform: l });
  return 93 === s || 59 === s
    ? t(
        n,
        null,
        c,
        t("use", {
          className: r,
          transform: `translate(${a}, ${0.5 - C / 2})`,
          xlinkHref: "#drumHatEdge",
        }),
        o
      )
    : c
    ? t(n, null, c, o)
    : o;
}
function ke(e) {
  const { drumNotes: a } = e,
    s = 60 * Math.max(4, a.length);
  return t(
    "svg",
    { className: "rw29l", width: s, height: 130 },
    t(
      "g",
      { transform: "translate(0, 54)" },
      t(ge, { end: s }),
      a.map((e, a) =>
        t(Ce, { fret: e[0], string: v(e[0], !0), title: e[1], x: 60 * a + 30 })
      )
    )
  );
}
const we = { animationStyles: K },
  xe = { animationStyles: I },
  be = "help_notation",
  Ne = e((e) => {
    let { usedDrums: s, horizontal: i } = e;
    const { layer: n, experiments: r } = c("layer", "experiments"),
      l = "help_notation" === n.layer,
      o = "drop" !== r.drum_standard_notation,
      m = o
        ? (function (e, t) {
            const a = (function (e) {
                let t = oe.filter((t) => e.has(t[0]));
                return (
                  e.has(41) && e.has(45) && (t = t.filter((e) => 45 !== e[0])),
                  t
                );
              })(e),
              s = [];
            for (let e = 0; e < a.length; e += 4) s.push(a.slice(e, e + 4));
            return t && s.length % 2 == 1 && s.push([]), s;
          })(s, i)
        : (function (e) {
            const t = Math.floor((e.size + 2) / 3),
              a = [...e.values()];
            return [a.slice(0, t), a.slice(t, 2 * t), a.slice(2 * t)];
          })(s);
    return t(
      u,
      null,
      l &&
        t(
          d,
          i ? we : xe,
          t(
            "div",
            { className: i ? te.wrapHorizontal : te.wrap },
            t(
              "div",
              {
                className: o ? te.notation : te.notation__old,
                id: "drum_notation",
              },
              t(
                "h3",
                { className: te.title },
                "Instruments in the current track"
              ),
              o
                ? m.map((e) => a(ke, { drumNotes: e }))
                : m.map((e, a) =>
                    t(
                      "div",
                      { className: te.col, key: a },
                      e.map((e) =>
                        t(
                          "dl",
                          { className: te.line, key: e.name },
                          t("dt", { className: te.name }, e.name),
                          t("dd", { className: te.def }, h[e.name])
                        )
                      )
                    )
                  )
            )
          )
        )
    );
  });
function He(e) {
  let { styles: a } = e;
  return t(
    "svg",
    {
      width: 13,
      height: 13,
      className: a.icon,
      viewBox: "0 -3 13 13",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    t("rect", { y: 1, width: 13, height: 11, rx: 3, className: a.fill }),
    t("path", {
      className: a.fillText,
      d: "M4.032 5.18h1.46c.02-.68.25-1.23 1.04-1.23.52 0 .86.32.86.8 0 .62-.52.91-.94 1.27-.66.57-.69 1.02-.69 1.84h1.33c0-.7.12-.89.7-1.29.64-.44 1.13-.96 1.13-1.79 0-1.23-.95-2.05-2.37-2.05-1.6 0-2.43.96-2.52 2.45zm3.16 3.29h-1.55V10h1.55V8.47z",
    })
  );
}
var ze = m(
  class extends s {
    constructor() {
      super(...arguments),
        p(this, "onUnderstandLinkClick", (e) => {
          e.preventDefault(), this.props.dispatch("layer/hide");
        }),
        p(this, "onStillHaveQuestionsLinkClick", () => {});
    }
    componentDidMount() {}
    render() {
      return t(
        "div",
        { className: "i5k2 vtm3", id: "explain-difficulty-popup" },
        t(
          "div",
          { className: "i5t4 vt1nf" },
          "Each guitar track is assigned a difficulty level based on:",
          t(
            "ol",
            {},
            t(
              "li",
              {},
              "The speed required for playing left and right hand. Faster is harder."
            ),
            t(
              "li",
              {},
              "The techniques required: bends, vibrato, harmonics, sweep picking, string skipping, etc. and their combinations."
            ),
            t(
              "li",
              {},
              "The relative complexity of the chords used: F is harder than G because it requires a barre, Cm7b5 is harder than C5, etc."
            )
          ),
          t(
            "p",
            {},
            "We usually skip the hardest 30% of a song (to skip solos) and roughly calculate the difficulty level based on the remaining 70%. In most cases, you can play the whole song in a band if you can play just 70% of the song."
          ),
          t(
            "p",
            {},
            t(
              "i",
              {},
              "Disclaimer: the difficulty detection algorithm is experimental and designed for classic rock/metal songs that are played with a pick and it may produce less accurate results for other styles."
            )
          ),
          t(
            "div",
            { className: "vt25r" },
            t(
              "a",
              { onClick: this.onUnderstandLinkClick, href: "", role: "button" },
              "I understand, all clear"
            ),
            t(
              f,
              {
                to: "/a/wa/help#contact-us",
                onClick: this.onStillHaveQuestionsLinkClick,
              },
              "I still have questions"
            )
          )
        )
      );
    }
  }
);
const Se = { animationStyles: I };
function Me(e) {
  let { handleNotation: a, track: s } = e;
  const {
      dispatch: r,
      part: l,
      screen: o,
      layer: h,
      device: m,
      isDeleted: p,
    } = c("layer", "part", "meta", "screen", "layer", "device", "isDeleted"),
    f = m.isDesktop,
    v = o.isSmall,
    g = l.current && l.current.usedDrums,
    C = i(() => {
      r("layer/show", "difficulty_explained_popup");
    }, []),
    y = s.difficulty,
    k = !v && y && "difficulty_explained_popup" === h.layer;
  return t(
    n,
    null,
    t("div", { className: ee.name, "aria-label": "track" }, "Track: ", s.title),
    v &&
      !p &&
      g &&
      t(
        "button",
        { className: te.toggle, onClick: a, "aria-label": "notation" },
        "(notation)"
      ),
    v && !p && g && t(Ne, { usedDrums: g }),
    v && t("hr", { className: ee.separator, width: 250 }),
    y &&
      t(
        "div",
        { className: ee.difficulty, "aria-label": "track difficulty (rhythm)" },
        t("span", { className: ee.label }, "Difficulty (Rhythm):"),
        t(_, { id: "track-difficulty", difficultyString: s.difficulty }),
        f &&
          t(
            "button",
            {
              className: ee.explainLink,
              onClick: C,
              title: "Explain how difficulty is calculated",
              id: "explain_difficulty_link",
            },
            t(He, { styles: ee })
          ),
        f && t(u, null, k && t(d, Se, t(ze, null)))
      )
  );
}
function Be() {
  return t(
    "svg",
    { width: 55, height: 55, viewBox: "0 0 55 55" },
    t("path", {
      d: "M48 0a6 6 0 0 1 6 6v42a6 6 0 0 1-6 6h-42a6 6 0 0 1-6-6v-42a6 6 0 0 1 6-6z",
      fill: "#FFAD00",
    }),
    t("path", {
      stroke: "#FFF",
      "stroke-width": 1.5,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      fill: "none",
      transform: "translate(7 10) scale(1.85)",
      d: D,
    })
  );
}
function Te(e) {
  let { onClick: a, id: s } = e;
  return t(
    f,
    {
      className: "i5k2 Cpv2j2",
      id: s,
      to: "/a/wa/signin",
      onClick: a,
      role: "dialog",
      "aria-label": "Sign up for free to favorite this tab.",
    },
    t("span", { className: "i5tp Cpv16o" }, t(Be, null)),
    t(
      "div",
      { className: "i5t4 Cpv2mh" },
      "Please ",
      t("span", { className: "Cpv2hv" }, "sign up"),
      " for free",
      t("br", null),
      "to favorite this tab."
    )
  );
}
const Pe = { animationStyles: I };
function Le() {
  const {
    dispatch: e,
    user: a,
    favorites: s,
    meta: n,
    layer: r,
    isDeleted: l,
  } = c("user", "favorites", "meta", "experiments", "layer", "isDeleted");
  if (l || !n.allowedByLicense) return;
  const o = "favorite" === r.layer,
    h = a.isLoggedIn,
    m = n.partId,
    p =
      h &&
      (n.wasFavoriteOnServerRender ||
        s.favorites.some((e) => e.songId === n.songId)),
    f = i(() => {
      if (h && n.current) {
        if (p) e("favorites/delete", n.songId);
        else {
          const {
              songId: t,
              artistId: a,
              artist: s,
              title: i,
              tracks: r,
            } = n.current,
            l = {
              songId: t,
              artistId: a,
              artist: s,
              title: i,
              tracks: r
                ? r.map((e) => {
                    let {
                      instrument: t,
                      instrumentId: a,
                      name: s,
                      difficulty: i,
                      tuning: n,
                    } = e;
                    return {
                      instrument: t,
                      instrumentId: a,
                      name: s,
                      tuning: n,
                      difficulty: i,
                    };
                  })
                : r,
              defaultTrack: m,
            };
          H(l), e("favorites/add", { songId: t, song: l });
        }
        r.layer && e("layer/hide");
      } else o ? e("layer/hide") : e("layer/show", "favorite");
    }, [r, h, p, n, m]);
  return t(
    "div",
    { className: "xji4", id: "favorite" },
    t(
      "button",
      {
        className: "xj3s",
        id: "favorite-toggle",
        onClick: f,
        title: p ? "Remove from favorites" : "Add to favorites",
      },
      t(z, {
        width: 30,
        height: 30,
        viewbox: "-4 -3 35 35",
        state: p ? "fill" : "none",
        styles: { icon: p ? "xj248 xj13q" : "xj248" },
        id: "favorite-icon",
      })
    ),
    t(u, null, o && t(d, Pe, t(Te, { id: "favorite-popup" })))
  );
}
function De(e) {
  let { styles: a } = e;
  return t(
    "svg",
    {
      width: 21,
      height: 21,
      viewBox: "1050 24.198 18 20.996",
      className: a.icon,
      id: "tab-delete-icon",
      role: "img",
      "aria-labelledby": "tab-delete-id",
    },
    t("title", { id: "tab-delete-id" }, "Delete Tab"),
    t("path", {
      className: a.strokeAnim,
      d: "M1063.828 45.177l-10.282.017c-1.224-.003-2.215-.959-2.218-2.14V28.767c0-.434.364-.785.814-.785l13.716-.017c.45 0 .814.352.814.785v14.287c-.003 1.181-.995 2.138-2.219 2.14h-.625zm-10.768-15.625V42.86c0 .315.264.57.591.57h10.667a.58.58 0 0 0 .591-.57V29.552h-11.849z",
    }),
    t("path", {
      className: a.fill,
      d: "M1062.375 29.552h-7.094c-.449 0-.813-.352-.813-.785v-2.229c.002-1.292 1.087-2.339 2.426-2.34h3.868c1.339.001 2.425 1.048 2.426 2.34v2.229c0 .433-.364.785-.813.785zm-6.15-1.57h5.206v-1.266a.786.786 0 0 0-.8-.771h-3.607a.786.786 0 0 0-.799.771v1.266zM1059 41.691c-.483 0-.875-.351-.875-.785v-8.719c0-.433.392-.784.875-.784s.875.351.875.784v8.719c0 .434-.392.785-.875.785zM1055.781 41.691c-.483 0-.875-.351-.875-.785v-8.719c0-.433.392-.784.875-.784s.875.351.875.784v8.719c0 .434-.392.785-.875.785zM1062.25 41.691c-.483 0-.875-.351-.875-.785v-8.718c0-.434.392-.785.875-.785s.875.351.875.785v8.718c0 .434-.392.785-.875.785z",
    }),
    t("path", {
      className: a.strokeAnim,
      d: "M1067.169 29.677h-16.338c-.459 0-.831-.441-.831-.875 0-.433.372-.851.831-.851h16.338c.459 0 .831.418.831.851 0 .434-.372.875-.831.875z",
    })
  );
}
const Ie = {
    delete: "tnv2",
    button: "tn1vk",
    buttonActive: "tn1vk tnwo",
    icon: "tn13b",
    fill: "tn1pz",
    strokeAnim: "tn1pz tn10k",
  },
  Fe = () => {
    const {
      dispatch: e,
      meta: a,
      part: s,
      editor: n,
      isDeleted: r,
    } = c("meta", "part", "editor", "isDeleted");
    if (
      r ||
      a.isFailed ||
      s.isFailed ||
      !a.current ||
      !a.current.tracks ||
      !a.current.audio ||
      !n.canDelete
    )
      return;
    const l = i(() => {
        a.current &&
          ((e, t) => {
            const a = `${e}, ${t}`,
              s =
                "You are about to delete the whole song with all its revisions permanently. To confirm deletion, please enter the song artist and title as described below:\n\n" +
                a +
                "\n";
            return (
              window.prompt(s) === a ||
              (window.alert(
                "Confirmation string does not match artist and title. Aborting deletion!"
              ),
              !1)
            );
          })(a.current.artist, a.current.title) &&
          e("editor/delete", a.current);
      }, [e, a.current]),
      o = n.processingDeletion;
    return t(
      "div",
      { className: Ie.delete, id: "deletion" },
      o && t(S, { width: 21, height: 21, fill: "#42a4f8" }),
      !o &&
        t("button", { className: Ie.button, onClick: l }, t(De, { styles: Ie }))
    );
  };
function _e(e) {
  let { styles: a } = e;
  return t(
    "svg",
    {
      width: 25,
      height: 24,
      viewBox: "0 0 25 24",
      className: a.icon,
      id: "revisions-icon",
      role: "img",
      "aria-labelledby": "revisions-title-id",
    },
    t("title", { id: "revisions-title-id" }, "Revisions"),
    t("path", {
      className: a.strokeAnim,
      "stroke-width": "2",
      d: "M19 10.5V17a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h9",
    }),
    t("path", {
      className: a.stroke,
      "stroke-width": "1.8",
      "stroke-linecap": "round",
      strokeLinejoin: "round",
      d: "M17.8 7l-7 6.6-4.5 1.7 1.9-4.6 7-6.6",
    }),
    t("path", {
      className: a.fill,
      d: "M8.2 10.7l2.6 2.9-4.5 1.7zM19.4 6.3l1.8-1.7c1.4-1.4-2-5-3.5-3.6l-1.8 1.7z",
    })
  );
}
const Ae = g(
    () => import("./RevisionsPopupContent.8e81935d.js"),
    [
      "/static/latest/RevisionsPopupContent.129d737a03dd279c.css",
      "/static/latest/index.8e38cca3af87a066.css",
      "/static/latest/FileInput.e0d0c5f987ab54e4.css",
      "/static/latest/FormError.b880d263c7949fde.css",
      "/static/latest/Input.2762c3e20d6520b6.css",
      "/static/latest/Linkify.1a05e390b506e6fc.css",
    ],
    []
  ),
  $e = () => {
    const { dispatch: e, meta: a } = c("meta"),
      [s, i] = r({ height: 298 });
    return (
      l(async () => {
        const t = new T();
        return await P(e, a.songId, t.signal), t.abort.bind(t);
      }, [a.songId]),
      o(() => e("upload/reset"), []),
      t(
        "div",
        { id: "revisions-popup", className: "Bo82u2", style: s },
        t(L, { component: Ae, style: s, setStyle: i }),
        t("div", { className: "Bo81oq" })
      )
    );
  },
  je = {
    revisions: "e32l8",
    toggle: "e32ah",
    toggleActive: "e32ah e3d0",
    icon: "e32em",
    fill: "e32kz",
    stroke: "e319r",
    strokeAnim: "e319r e31k",
  },
  qe = { animationStyles: I },
  Ee = () => {
    const {
      dispatch: e,
      layer: a,
      isDeleted: s,
      screen: n,
      meta: r,
    } = c("layer", "screen", "isDeleted", "meta");
    if (s || n.isSmall || !r.allowedByLicense) return;
    const l = "revisions" === a.layer,
      o = i(() => {
        "revisions" === a.layer
          ? e("layer/hide")
          : e("layer/show", "revisions");
      }, [a.layer]),
      h = {
        className: l ? je.toggleActive : je.toggle,
        id: "revisions-toggle",
        onClick: o,
        title: l ? "Hide revisions" : "Show revisions",
      },
      m = t($e, null);
    return t(
      "div",
      { className: je.revisions, id: "revisions" },
      t("button", h, t(_e, { styles: je })),
      t(u, null, l && t(d, qe, m))
    );
  },
  Re = { animationStyles: I, timeout: 500 };
class Ve extends s {
  constructor() {
    super(),
      p(this, "pendingHideHint", null),
      p(this, "onEscHintClick", () => {
        this.cancelPendingHideHint(), this.setState({ showHint: !1 });
      }),
      (this.state = { showHint: !1 });
  }
  componentWillReceiveProps(e) {
    const t = this.props;
    e.isFullscreen !== t.isFullscreen &&
      (this.cancelPendingHideHint(),
      e.isFullscreen &&
        (this.setState({ showHint: !0 }),
        (this.pendingHideHint = setTimeout(() => {
          this.setState({ showHint: !1 });
        }, 3500)))),
      e.isFullscreen || this.setState({ showHint: !1 });
  }
  componentWillUnmount() {
    this.cancelPendingHideHint();
  }
  render() {
    const e = this.props.isFullscreen,
      a = "fullscreen-title-id";
    return t(
      "div",
      { id: "fullscreen" },
      t(
        u,
        null,
        this.state.showHint &&
          t(
            d,
            Re,
            t(
              "div",
              { className: "Cye2dx", onClick: this.onEscHintClick },
              "Press ESC to exit fullscreen mode"
            )
          )
      ),
      t(
        "div",
        { className: "Cye1em", id: "fullscreen-controls" },
        t(
          "button",
          {
            className: e ? "Cye35a Cye1tx" : "Cye35a",
            onClick: this.props.handleFullscreen,
            "aria-label": "fullscreen",
          },
          t(
            "svg",
            { width: 24, height: 17, role: "img", "aria-labelledby": a },
            t(
              "title",
              { id: a },
              e
                ? "Turn off fullscreen mode (ESC)"
                : "Turn on fullscreen mode (Alt + Enter)"
            ),
            t("path", {
              className: "Cye1ja",
              d: e
                ? "M18.948 17.041h-2.015l.001-2.326c0-1.412 1.031-2.679 2.655-2.679h4.277l-.016 2.02h-4.183c-.49-.042-.735.186-.735.685 0 .498.006 1.265.016 2.3zM4.918 17.072h2.015v-2.326c0-1.412-1.031-2.679-2.655-2.679H0l.016 2.02H4.2c.49-.042.734.186.734.685 0 .499-.006 1.265-.016 2.3zM18.948.032h-2.015l.001 2.325c0 1.412 1.031 2.679 2.655 2.679h4.277l-.016-2.019h-4.183c-.49.041-.735-.187-.735-.686 0-.498.006-1.264.016-2.299zM4.918 0h2.015v2.326c0 1.412-1.031 2.679-2.655 2.679H0l.016-2.019H4.2c.49.041.734-.187.734-.686 0-.498-.006-1.265-.016-2.3z"
                : "M2.015 5.005H0l.001-2.326C.001 1.267 1.032 0 2.656 0h4.277l-.016 2.02H2.734c-.49-.042-.735.186-.735.685 0 .498.006 1.265.016 2.3zM21.985 5.036H24l-.001-2.326c0-1.412-1.03-2.679-2.654-2.679h-4.278l.016 2.02h4.184c.49-.042.734.186.734.685 0 .499-.006 1.265-.016 2.3zM2.015 11.996H0l.001 2.325C.001 15.733 1.032 17 2.656 17h4.277l-.016-2.019H2.734c-.49.041-.735-.187-.735-.686 0-.498.006-1.264.016-2.299zM21.985 11.964H24l-.001 2.326c0 1.412-1.03 2.679-2.654 2.679h-4.278l.016-2.019h4.184c.49.041.734-.187.734-.686 0-.498-.006-1.265-.016-2.3z",
            })
          )
        )
      )
    );
  }
  cancelPendingHideHint() {
    null != this.pendingHideHint &&
      (clearTimeout(this.pendingHideHint), (this.pendingHideHint = null));
  }
}
function Ge(e) {
  let { isTab: t, isChords: s, song: i, meta: n, chords: r } = e;
  if (t && i.hasChords) {
    const e = i.title + " Chords";
    return a(f, {
      to: M(n.current),
      className: "Cy52of",
      title: e,
      children: [
        a("img", {
          src: "/static/media/to-chords.e5117428.svg",
          width: 23,
          height: 22,
          alt: e,
        }),
      ],
    });
  }
  if (s && i.hasPlayer) {
    const e = i.title + " Tab";
    return a(f, {
      to: B(r.current),
      className: "Cy52of",
      title: e,
      children: [
        a("img", {
          src: "/static/media/to-tab.10ed68c4.svg",
          width: 23,
          height: 22,
          alt: e,
        }),
      ],
    });
  }
}
function Oe(e) {
  return y(e) ? " Bass Tab" : k(e) ? " Drum Tab" : " Tab";
}
function We(e) {
  let { plusAccess: s, handleFullscreen: i, handleNotation: n } = e;
  const {
      dispatch: r,
      route: l,
      routeContent: o,
      songs: d,
      artist: h,
      screen: u,
      favorites: m,
      meta: p,
      demo: v,
      chords: g,
      isDeleted: C,
    } = c(
      "route",
      "routeContent",
      "songs",
      "artist",
      "favorites",
      "screen",
      "meta",
      "demo",
      "chords",
      "isDeleted"
    ),
    y = l.isPanel,
    k = u.landscape,
    H = u.isSmall,
    z = o.songId;
  let S,
    M,
    B = !1,
    T = !1,
    P = !1,
    L = null;
  if (
    ("tab" === o.page
      ? ((B = !0),
        (P = !s && p.allowedByLicense),
        p.current &&
          p.current.songId === z &&
          ((S = p.current),
          null != p.partId &&
            p.current.tracks &&
            (L = p.current.tracks[p.partId])),
        !S &&
          g.current &&
          g.current.songId === z &&
          (S = Object.assign({}, g.current, { hasChords: !0 })),
        (M = " Tab"))
      : "chords" === o.page &&
        ((T = !0),
        g.current && g.current.songId === z && (S = g.current),
        !S &&
          p.current &&
          p.current.songId === z &&
          (S = Object.assign({}, p.current, { hasPlayer: !0 })),
        (M = " Chords")),
    S || (S = d.songs.list.find((e) => e.songId === z)),
    S || (S = h.songs.list.find((e) => e.songId === z)),
    S || (S = m.favorites.find((e) => e.songId === z)),
    S)
  ) {
    if ("tab" === o.page)
      if (L) M = Oe(L.instrumentId);
      else if (null == o.partId)
        "bass" === o.partInstrument
          ? (M = Oe(w))
          : "drum" === o.partInstrument && (M = Oe(x));
      else {
        const e = S.tracks;
        e && e[o.partId] && (M = Oe(e[o.partId].instrumentId));
      }
    return a("header", {
      className: ee.header,
      id: "header",
      children: [
        H &&
          k &&
          a(f, {
            to: `/${b(d.pattern, d.filters)}`,
            className: ee.burger,
            title: "Search",
            id: "burger",
            children: [t(F, { styles: ee })],
          }),
        B && a(Le, null),
        a(Ge, { isTab: B, isChords: T, song: S, meta: p, chords: g }),
        a(
          y ? "div" : "h1",
          {
            className: ee.song,
            children: [
              a(f, {
                className: ee.artist,
                "aria-label": "artist",
                to: `${N(S)}${b(h.pattern, h.filters)}`,
                children: S.artist,
              }),
              a("span", { className: ee.dash, children: " - " }),
              a("span", {
                className: ee.title,
                "aria-label": "title",
                children: S.title,
              }),
              a("span", {
                className: ee.instrumentTab,
                "aria-label": "tab type",
                children: M,
              }),
              !u.fullscreen &&
                v.enabled &&
                t(
                  f,
                  {
                    to: "/a/wa/plus",
                    className: ee.demo,
                    "aria-label": "Demo Song",
                    onClick: () => {
                      r("curiosity/setConversionProps", {
                        "Last referring link": "Demo Link",
                      });
                    },
                  },
                  a(O, {
                    width: 42,
                    height: 22,
                    shadow: "transparent",
                    id: "iconDemo2",
                  })
                ),
            ],
          },
          "h1"
        ),
        B && a(Fe, null),
        B && a(Ee, null),
        !u.isSmall &&
          a(Ve, { isFullscreen: u.fullscreen, handleFullscreen: i }),
        P &&
          a(f, {
            id: "text-showroom",
            className: ee.showroom,
            to: "/a/wa/plus?from=header_link",
            onClick: () => {
              r("curiosity/setConversionProps", {
                "Last referring link": "Header Link",
              });
            },
            children: [`Learn "${S.title}" faster with Songsterr Plus plan!`],
          }),
        L &&
          !C &&
          a(
            y ? "div" : "h2",
            {
              className: ee.track,
              children: a(Me, { track: L, handleNotation: n }),
            },
            "h2"
          ),
      ],
    });
  }
}
export {
  ve as C,
  j as E,
  be as H,
  J,
  V as O,
  We as Q,
  q as R,
  E as V,
  K as X,
  Z as Y,
  W as a,
  Y as e,
  me as f,
  fe as g,
  A as j,
  ue as p,
  $ as q,
  X as t,
  pe as v,
  Ne as z,
};
//# sourceMappingURL=AppHeader.039e213f.js.map
