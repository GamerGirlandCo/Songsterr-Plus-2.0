import { a as e, p as t, _ as s, T as n } from "./preact.3d326435.js";
import {
  cA as r,
  q as a,
  u as l,
  cB as i,
  cC as o,
  cD as c,
  cE as u,
  cF as d,
  cG as p,
  U as m,
  V as h,
  bQ as g,
  cH as f,
  cI as b,
  cJ as y,
  cK as w,
  cL as v,
  cM as k,
} from "./index.659fabbf.js";
import { I as N } from "./Input.97539e13.js";
import { A as B } from "./ActionButton.1cbc2cf9.js";
let C = "B4n1sv",
  S = "B4n2zb",
  A = "B4n19b",
  H = r + " B4n1we",
  I = "B4nyj",
  z = "B4n1sv B4n35r",
  T = "B4npz",
  F = "B4n137",
  P = "B4n16",
  j = "B4n1p4",
  q = a + " B4n1ga",
  x = a + " B4n1ga B4n2w3",
  M = a + " B4n1ga B4n1wk",
  Y = "B4nmp",
  D = "B4nv1",
  R = {
    pane: "B4n1sv",
    close: "B4n2zb",
    hide: "B4n19b",
    show: r + " B4n1we",
    stroke: "B4nyj",
    paneHidden: "B4n1sv B4n35r",
    step: "B4npz",
    reminder: "B4n137",
    center: "B4n16",
    headerAlone: "B4n1p4",
    button: a + " B4n1ga",
    taskComplete: a + " B4n1ga B4n2w3",
    optional: a + " B4n1ga B4n1wk",
    confirmCompletion: "B4nmp",
    icon: "B4nv1",
  };
var U = R;
let V = {
    close: "╨ù╨░╨║╤Ç╤ï╤é╤î",
    farewell:
      "╨í╨┐╨░╤ü╨╕╨▒╨╛!##╨í╨┐╨░╤ü╨╕╨▒╨╛ ╨▓╨░╨╝ ╨╖╨░ ╨┐╨╛╨╝╨╛╤ë╤î ╨▓ ╤â╨╗╤â╤ç╤ê╨╡╨╜╨╕╨╕ ╨╜╨░╤ê╨╡╨│╨╛ ╤ü╨░╨╣╤é╨░.",
  },
  E = {
    close: "Close",
    farewell:
      "Thank you!##Thank you for helping us in the improvement of our site.",
  },
  L = (e) => ("ru" === e ? V : E);
function _() {
  let { dispatch: t, ut: s } = l("ut"),
    n = L(s.script.locale),
    r = s.script.farewell || n.farewell,
    [a, o] = r.split("##");
  return e(
    "div",
    { className: U.step, id: "usertests-step-farewell" },
    a && e("h1", null, a),
    o && e("p", null, o),
    e(
      "button",
      { className: U.button, onClick: () => t("ut/stage", { stage: i }) },
      n.close
    )
  );
}
let G = {
    close: "╨ù╨░╨║╤Ç╤ï╤é╤î",
    farewell:
      "╨í╨┐╨░╤ü╨╕╨▒╨╛!##╨Ü ╤ü╨╛╨╢╨░╨╗╨╡╨╜╨╕╤Ä ╨┤╨╗╤Å ╤â╤ç╨░╤ü╤é╨╕╤Å ╨▓ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╨╕ ╨╜╨░╨╝ ╨╜╤â╨╢╨╜╤ï ╤é╨╛╨╗╤î╨║╨╛ ╤é╨╡ ╨┐╨╛╨╗╤î╨╖╨╛╨▓╨░╤é╨╡╨╗╨╕ ╨║╨╛╤é╨╛╤Ç╤ï╨╡ ╨╛╤é╨▓╨╡╤é╨╕╨╗╨╕ ╨╜╨░ ╨▓╤ü╨╡ ╨▓╨╛╨┐╤Ç╨╛╤ü╤ï ╨┐╨╛╨╗╨╛╨╢╨╕╤é╨╡╨╗╤î╨╜╨╛.",
  },
  J = {
    close: "Close",
    farewell:
      "Thank you!##For testing we need the users who answered positively to all the questions.",
  },
  K = (e) => ("ru" === e ? G : J);
function O() {
  let { dispatch: t, ut: s } = l("ut"),
    n = K(s.script.locale),
    r = s.script.farewellNotChosen || n.farewell,
    [a, o] = r.split("##");
  return e(
    "div",
    { className: U.step, id: "usertests-step-not-chosen" },
    a && e("h1", null, a),
    o && e("p", null, o),
    e(
      "button",
      { className: U.button, onClick: () => t("ut/stage", { stage: i }) },
      n.close
    )
  );
}
function Q(t) {
  let {
    styles: { icon: s, stroke: n },
  } = t;
  return e(
    "svg",
    { width: 10, height: 10, viewBox: "0 -3 10 10", className: s },
    e("path", { d: "M1 -2l4 4 4-4M1 2l4 4 4-4", className: n })
  );
}
let W = {
    basicInstruction:
      "╨ù╨░╨┤╨░╨╜╨╕╨╡##╨ƒ╤Ç╨╛╨▒╨╡╨│╨╕╤é╨╡╤ü╤î ╨┐╨╛ ╤ü╨░╨╣╤é╤â, ╨┐╨╛╨┤╨╡╨╗╨╕╤é╨╡╤ü╤î ╤ü╨▓╨╛╨╕╨╝╨╕ ╨▓╨┐╨╡╤ç╨░╤é╨╗╨╡╨╜╨╕╤Å╨╝╨╕.",
    aloud:
      "╨ö╤â╨╝╨░╨╣╤é╨╡ ╨▓╤ü╨╗╤â╤à! ╨£╨╕╨║╤Ç╨╛╤ä╨╛╨╜ ╨╖╨░╨┐╨╕╤ê╨╡╤é ╨▓╨░╤ê╨╕ ╨╝╤ï╤ü╨╗╨╕.",
    maximize: "╨₧╤é╨║╤Ç╤ï╤é╤î ╨╖╨░╨┤╨░╨╜╨╕╨╡",
    minimize: "╨í╨▓╨╡╤Ç╨╜╤â╤é╤î",
    finishTask: "╨ù╨░╨▓╨╡╤Ç╤ê╨╕╤é╤î ╨╖╨░╨┤╨░╨╜╨╕╨╡",
    didComplete: "╨Æ╤ï ╨▓╤ï╨┐╨╛╨╗╨╜╨╕╨╗╨╕ ╨╖╨░╨┤╨░╨╜╨╕╨╡?",
    yes: "╨ö╨░",
    no: "╨¥╨╡╤é",
  },
  X = {
    basicInstruction:
      "Instructions##Please take a look around and tell us what you think.",
    aloud: "Think aloud! User study is recording",
    maximize: "Click here to see your task",
    minimize: "Minimize",
    finishTask: "Finish the task",
    didComplete: "Did you complete the task?",
    yes: "Yes",
    no: "No",
  },
  Z = (e) => ("ru" === e ? W : X);
function $(s) {
  let { toggle: n, isHidden: r } = s,
    { dispatch: a, ut: i } = l("ut"),
    [d, p] = t(!1),
    m = Z(i.script.locale),
    h = i.steps[o] || 0,
    g =
      h < i.script.instructions.length - 1
        ? { stage: o, step: h + 1 }
        : { stage: i.script.survey && i.script.survey.length > 0 ? c : u },
    f = i.script.instructions[h] || m.basicInstruction,
    [b, y] = f.split("##"),
    w = () => {
      p(!1), a("ut/stage", g);
    };
  return r
    ? e(
        "div",
        { className: U.step, id: "usertests-step-instructions" },
        e("h1", { className: U.reminder }, m.aloud),
        e(
          "button",
          { className: U.show, onClick: n },
          m.maximize,
          e(Q, { styles: U })
        )
      )
    : e(
        "div",
        { className: U.step, id: "usertests-step-instructions" },
        e(
          "button",
          { className: U.hide, onClick: n },
          e(Q, { styles: U }),
          m.minimize
        ),
        b && e("h1", null, b),
        y && e("p", { dangerouslySetInnerHTML: { __html: y } }),
        d
          ? e(
              "div",
              { className: U.confirmCompletion },
              e("p", null, m.didComplete),
              e("button", { className: U.optional, onClick: w }, m.yes),
              e("button", { className: U.optional, onClick: () => p(!1) }, m.no)
            )
          : e(
              "div",
              null,
              e(
                "button",
                { className: U.taskComplete, onClick: () => p(!0) },
                m.finishTask
              )
            )
      );
}
let ee = { yes: "╨ö╨░", no: "╨¥╨╡╤é" },
  et = { yes: "Yes", no: "No" },
  es = (e) => ("ru" === e ? ee : et);
function en() {
  let { dispatch: t, ut: s } = l("user", "ut"),
    n = es(s.script.locale),
    r = s.steps[d],
    a = { stage: d, step: r + 1 },
    i = { stage: p },
    [o, c] = s.script.questions[r].split("##");
  return e(
    "div",
    { className: U.step, id: "usertests-step-questions" },
    o && e("h1", null, o),
    c && e("p", null, c),
    e(
      "button",
      { className: U.button, onClick: () => t("ut/stage", a) },
      n.yes
    ),
    e("button", { className: U.button, onClick: () => t("ut/stage", i) }, n.no)
  );
}
let er = { start: "╨¥╨░╤ç╨░╤é╤î" },
  ea = { start: "Start" },
  el = (e) => ("ru" === e ? er : ea);
function ei() {
  let { dispatch: t, ut: s } = l("user", "ut"),
    n = el(s.script.locale),
    r = s.script.intro,
    [a, i] = r.split("##"),
    o = () => t("ut/stage", { stage: d, step: 0 });
  return e(
    "div",
    { className: U.step, id: "usertests-step-intro" },
    a && e("h1", null, a),
    i && e("p", null, i),
    e("button", { className: U.button, onClick: o }, n.start)
  );
}
let eo = { submit: "╨ö╨░╨╗╨╡╨╡" },
  ec = { submit: "Submit" },
  eu = (e) => ("ru" === e ? eo : ec);
function ed() {
  let { dispatch: n, ut: r } = l("ut"),
    a = s(),
    [i, o] = t(null),
    c = r.script.emailRequest,
    [u, d] = c.split("##"),
    p = async (e) => {
      e.preventDefault();
      let t = a.current;
      try {
        h([{ field: t, validator: g }]),
          this.setState(null),
          n("ut/email", t.value);
      } catch (e) {
        o(e);
      }
    },
    f = eu(r.script.locale);
  return e(
    "div",
    { className: U.step, id: "usertests-step-email" },
    u && e("h1", null, u),
    d && e("p", null, d),
    e(
      "form",
      { noValidate: !0, className: U.form, onSubmit: p, action: "" },
      e(m, { error: i, errorMessage: i && i.reasons && i.reasons.email }),
      e(N, { type: "email", ref: a, name: "email", error: null }),
      e("button", { className: U.button }, f.submit)
    )
  );
}
let ep = {
    needApproval: "╨¥╨░╨╝ ╨╜╤â╨╢╨╜╨╛ ╨▓╨░╤ê╨╡ ╨┐╨╛╨┤╤é╨▓╨╡╤Ç╨╢╨┤╨╡╨╜╨╕╨╡",
    recording1:
      "╨ù╨░╨┐╨╕╤ü╤î ╨╜╨░╤ç╨╜╨╡╤é╤ü╤Å ╤é╨╛╨╗╤î╨║╨╛ ╨┐╨╛╤ü╨╗╨╡ ╨╜╨░╤ç╨░╨╗╨░ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╤Å ╨╕ ╨╖╨░╨║╨╛╨╜╤ç╨╕╤é╤ü╤Å ╤ü╤Ç╨░╨╖╤â ╨┐╨╛╤ü╨╗╨╡. ╨ù╨░╨┐╨╕╤ü╤î ╨╖╨░ ╤Ç╨░╨╝╨║╨░╨╝╨╕ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╤Å ╨╜╨╡ ╨▓╨╡╨┤╨╡╤é╤ü╤Å.",
    recording2:
      '╨¥╨░╨╢╨╝╨╕╤é╨╡ ╨║╨╜╨╛╨┐╨║╤â ╨▓╨╜╨╕╨╖╤â ╨┤╨╗╤Å ╤é╨╛╨│╨╛ ╤ç╤é╨╛╨▒╤ï ╤Ç╨░╨╖╤Ç╨╡╤ê╨╕╤é╤î ╨┤╨╛╤ü╤é╤â╨┐ ╨║ ╨╝╨╕╨║╤Ç╨╛╤ä╨╛╨╜╤â ╨╕ ╤ì╨║╤Ç╨░╨╜╤â. ╨ƒ╨╛╤ü╨╗╨╡ ╤ì╤é╨╛╨│╨╛ ╨┐╨╛╤Å╨▓╨╕╤é╤ü╤Å ╤â╨▓╨╡╨┤╨╛╨╝╨╗╨╡╨╜╨╕╨╡ ╨╛ ╨┤╨╛╤ü╤é╤â╨┐╨╡. ╨Æ╤ï╨▒╨╡╤Ç╨╕╤é╨╡ "╨ƒ╨╛╨┤╨╡╨╗╨╕╤é╤ü╤Å ╨▓╤ü╨╡╨╝ ╤ì╨║╤Ç╨░╨╜╨╛╨╝". ╨ƒ╨╛╤ü╨╗╨╡ ╤ì╤é╨╛╨│╨╛ ╨║╨╗╨╕╨║╨╜╨╕╤é╨╡ "╨ƒ╨╛╨┤╨╡╨╗╨╕╤é╤î╤ü╤Å" ╤ç╤é╨╛╨▒╤ï ╨┐╤Ç╨╛╨┤╨╛╨╗╨╢╨╕╤é╤î.',
    failed:
      "╨¥╨╡ ╤â╨┤╨░╨╗╨╛╤ü╤î ╨┐╨╛╨╗╤â╤ç╨╕╤é╤î ╨┤╨╛╤ü╤é╤â╨┐ ╨║ ╤ì╨║╤Ç╨░╨╜╤â ╨╕╨╗╨╕ ╨╖╨░╨┐╨╕╤ü╨╕ ╨╖╨▓╤â╨║╨░. ╨ƒ╤Ç╨╛╨▓╨╡╤Ç╤î╤é╨╡ ╨╜╨░╤ü╤é╤Ç╨╛╨╣╨║╨╕ ╨▒╤Ç╨░╤â╨╖╨╡╤Ç╨░ ╨╕ ╨┐╨╛╨┐╤Ç╨╛╨▒╤â╨╣╤é╨╡ ╨╡╨╡ ╤Ç╨░╨╖.",
    screenAccess: "╨ö╨░╤é╤î ╨┤╨╛╤ü╤é╤â╨┐ ╨║ ╤ì╨║╤Ç╨░╨╜╤â ╨╕ ╨╝╨╕╨║╤Ç╨╛╤ä╨╛╨╜╤â",
  },
  em = {
    needApproval: "We need your approval",
    recording1:
      "Recording will start when the study begins & stop as soon as you complete the study. No recording will occur outside of these times.",
    recording2:
      "Click the below button to allow this study to record your device's screen and microphone. A message directing you to select your screen will appear. Please choose to share Your Entire Screen. Once selected click 'share' to proceed.",
    failed:
      "Failed to start screen or audio recording. Please, check browser permissions and try again",
    screenAccess: "Yes, access my Screen and Voice",
  },
  eh = (e) => ("ru" === e ? ep : em);
function eg() {
  let { ut: t, dispatch: s } = l("ut"),
    n = eh(t.script.locale);
  return e(
    "div",
    { className: U.step, id: "usertests-step-start" },
    e("h1", null, n.needApproval),
    e("p", null, n.recording1),
    e("p", null, n.recording2),
    "failed" === t.recorderState && e("p", null, e("strong", {}, n.failed)),
    e(B, {
      title: n.screenAccess,
      processing: "starting" === t.recorderState,
      onClick: () => s("ut/start"),
    })
  );
}
let ef = {
    recordingStopped: "It appears that the recording has stopped.",
    recording1:
      "╨Æ╨░╤ê╨╡ ╤â╤ç╨░╤ü╤é╨╕╨╡ ╨▓ ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╨╕ ╨╜╨╡ ╨▒╤ï╨╗╨╛ ╨╖╨░╨┐╨╕╤ü╨░╨╜╨╛.",
    recording2:
      '╨ò╤ü╨╗╨╕ ╤ì╤é╨╛ ╨┐╤Ç╨╛╨╕╨╖╨╛╤ê╨╗╨╛ ╨┐╨╛ ╨╛╤ê╨╕╨▒╨║╨╡ ╨╕ ╨▓╤ï ╤à╨╛╤é╨╕╤é╨╡ ╨┐╤Ç╨╛╨┤╨╛╨╗╨╢╨╕╤é╤î ╨▓╨░╤ê╨╡ ╤â╤ç╨░╤ü╤é╨╕╨╡ ╨╜╨░╨╢╨╝╨╕╤é╨╡ ╨║╨╜╨╛╨┐╨║╤â "╨¥╨░╤ç╨░╤é╤î ╨╖╨░╨╜╨╛╨▓╨╛".',
    failed:
      "╨¥╨╡ ╤â╨┤╨░╨╗╨╛╤ü╤î ╨┐╨╛╨╗╤â╤ç╨╕╤é╤î ╨┤╨╛╤ü╤é╤â╨┐ ╨║ ╤ì╨║╤Ç╨░╨╜╤â ╨╕╨╗╨╕ ╨╖╨░╨┐╨╕╤ü╨╕ ╨╖╨▓╤â╨║╨░. ╨ƒ╤Ç╨╛╨▓╨╡╤Ç╤î╤é╨╡ ╨╜╨░╤ü╤é╤Ç╨╛╨╣╨║╨╕ ╨▒╤Ç╨░╤â╨╖╨╡╤Ç╨░ ╨╕ ╨┐╨╛╨┐╤Ç╨╛╨▒╤â╨╣╤é╨╡ ╨╡╨╡ ╤Ç╨░╨╖.",
    restart: "╨¥╨░╤ç╨░╤é╤î ╨╖╨░╨╜╨╛╨▓╨╛",
  },
  eb = {
    recordingStopped: "It appears that the recording has stopped.",
    recording1: "Your participation has not been recorded.",
    recording2:
      "If this was a mistake and you wish to participate, click the restart button to start the study again.",
    failed:
      "Failed to start screen or audio recording. Please, check browser permissions and try again",
    restart: "Restart",
  },
  ey = (e) => ("ru" === e ? ef : eb);
function ew() {
  let { ut: t, dispatch: s } = l("ut"),
    n = ey(t.script.locale);
  return e(
    "div",
    { className: U.step, id: "usertests-step-restart" },
    e("h1", null, n.recordingStopped),
    e("p", null, n.recording1),
    e("p", null, n.recording2),
    "failed" === t.recorderState && e("p", null, e("strong", {}, n.failed)),
    e(B, {
      title: n.restart,
      processing: "starting" === t.recorderState,
      onClick: () => s("ut/start"),
    })
  );
}
let ev = {
    answerFinal:
      "╨ƒ╨╛╨╢╨░╨╗╤â╨╣╤ü╤é╨░ ╨╛╤é╨▓╨╡╤é╤î╤é╨╡ ╨╜╨░ ╨┐╨╛╤ü╨╗╨╡╨┤╨╜╨╕╨╡ ╨▓╨╛╨┐╤Ç╨╛╤ü╤ï",
    impove: "╨Ü╨░╨║ ╤ü╨░╨╣╤é ╨╝╨╛╨╢╨╡╤é ╤ü╤é╨░╤é╤î ╨╡╤ë╨╡ ╨╗╤â╤ç╤ê╨╡?",
    proceed: "╨ƒ╤Ç╨╛╨┤╨╛╨╗╨╢╨╕╤é╤î",
    answeredAloud: "╨» ╨╛╤é╨▓╨╡╤é╨╕╨╗ ╨▓╤ü╨╗╤â╤à",
  },
  ek = {
    answerFinal: "Please answer final questions",
    impove: "How can we improve?",
    proceed: "Proceed",
    answeredAloud: "I answered aloud",
  },
  eN = (e) => ("ru" === e ? ev : ek);
function eB() {
  let { dispatch: t, ut: s } = l("ut"),
    n = eN(s.script.locale),
    r = s.steps[c] || 0,
    a = r < s.script.survey.length ? { stage: c, step: r + 1 } : { stage: u },
    i =
      0 === r
        ? s.script.surveyIntro || n.answerFinal
        : s.script.survey[r - 1] || n.impove,
    [o, d] = i.split("##");
  return e(
    "div",
    { className: U.step, id: "usertests-step-survey" },
    o && e("h1", null, o),
    d && e("p", null, d),
    e(
      "button",
      { className: U.button, onClick: () => t("ut/stage", a) },
      0 === r ? n.proceed : n.answeredAloud
    )
  );
}
let eC = {
    youSure: "╨Æ╤ï ╤â╨▓╨╡╤Ç╨╡╨╜╤ï?",
    cancelStudy:
      "╨Æ╤ï ╨┤╨╡╨╣╤ü╤é╨▓╨╕╤é╨╡╨╗╤î╨╜╨╛ ╤à╨╛╤é╨╕╤é╨╡ ╨┐╤Ç╨╡╤Ç╨▓╨░╤é╤î ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╨╡?",
    no: "╨¥╨╡╤é, ╨┐╤Ç╨╛╨┤╨╛╨╗╨╢╨╕╤é╤î",
    yes: "╨ö╨░",
  },
  eS = {
    youSure: "Are you sure?",
    cancelStudy: "Do you want to cancel the study?",
    no: "No, continue",
    yes: "Yes",
  },
  eA = (e) => ("ru" === e ? eC : eS);
function eH(t) {
  let { locale: s, onCancel: n, onConfirm: r } = t,
    a = eA(s);
  return e(
    "div",
    { className: U.step, id: "usertests-step-terminate" },
    e("h1", null, a.youSure),
    e("p", { className: U.center }, a.cancelStudy),
    e("button", { className: U.optional, onClick: r }, a.yes),
    e("button", { className: U.button, onClick: n }, a.no)
  );
}
let eI = { title: "╨æ╨░╨│ ╤Ç╨╡╨┐╨╛╤Ç╤é", button: "╨ƒ╤Ç╨╛╨┤╨╛╨╗╨╢╨╕╤é╤î" },
  ez = { title: "Report a bug or suggest a feature", button: "Start" },
  eT = (e) => ("ru" === e ? eI : ez);
function eF() {
  let { ut: t, dispatch: s } = l("ut", "user"),
    n = eT(t.script.locale);
  return e(
    "div",
    { className: U.step, id: "usertests-step-feedback" },
    e("h1", { className: U.headerAlone }, n.title),
    e(
      "button",
      { className: U.button, onClick: () => s("ut/stage", { stage: f }) },
      n.button
    )
  );
}
let eP = { cancel: "╨ù╨░╨║╨╛╨╜╤ç╨╕╤é╤î ╨╕╤ü╤ü╨╗╨╡╨┤╨╛╨▓╨░╨╜╨╕╨╡" },
  ej = { cancel: "Cancel the study" },
  eq = (e) => ("ru" === e ? eP : ej);
function ex(e) {
  switch (e) {
    case i:
      return null;
    case k:
      return ei;
    case d:
      return en;
    case f:
      return eg;
    case v:
      return ew;
    case p:
      return O;
    case w:
      return ed;
    case o:
      return $;
    case c:
      return eB;
    case u:
      return _;
    case y:
      return eF;
    default:
      return null;
  }
}
function eM(e) {
  switch (e) {
    case p:
    case u:
      return !1;
    default:
      return !0;
  }
}
function eY() {
  let { ut: t, dispatch: s } = l("ut"),
    r = n(() => {
      t.isHidden && s("ut/hide", !1), b();
    }, [s, t.isHidden]),
    a = n(
      (e) => {
        e.stopPropagation(), e.preventDefault(), s("ut/hide", !t.isHidden);
      },
      [t.isHidden, s]
    ),
    o = t.stage;
  if (o === i) return;
  let c = ex(t.stage),
    u = t.script ? t.script.locale : "en",
    d = eq(u);
  return e(
    "div",
    {
      className: t.isHidden ? U.paneHidden : U.pane,
      id: "usertest-recorder",
      onClick: r,
    },
    !t.isClosing &&
      !t.isHidden &&
      eM(t.stage) &&
      e(
        "button",
        {
          className: U.close,
          id: "ut-close",
          onClick: () => s("ut/close", !0),
        },
        d.cancel
      ),
    t.isClosing
      ? e(eH, {
          locale: u,
          onCancel: () => s("ut/close", !1),
          onConfirm: () => s("ut/terminate"),
        })
      : c && e(c, { toggle: a, isHidden: t.isHidden })
  );
}
export { eY as default };
