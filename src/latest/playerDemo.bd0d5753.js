import { D as e, l as t, g as a } from "./index.6eeae9f8.js";
import "./preact.294f37c2.js";
async function p(p, r) {
  let {
    meta: { songId: n, partId: i, current: s },
    player: { speed: d, type: l, videoOpened: y },
  } = p.get();
  if (d === r || !s) return;
  let c = !y && a(d) !== a(r);
  try {
    c && p.dispatch("player/suspend", "speed"),
      p.dispatch("player/changeSpeed", { speed: r }),
      c && n === e && -1 !== i && (await t(p, e, i, s.revisionId));
  } finally {
    let t = p.get();
    c &&
      t.meta.current &&
      r === t.player.speed &&
      l === t.player.type &&
      e === t.meta.songId &&
      i === t.meta.partId &&
      s.revisionId === t.meta.current.revisionId &&
      p.dispatch("player/resume", "speed");
  }
}
async function r(t, a) {
  if (t.get().player.pitchShift === a) return;
  let p = t.get();
  p.meta.songId + 1 === e + 1 && t.dispatch("player/changePitch", a);
}
async function n(a, p) {
  let {
    meta: { songId: r, partId: n, current: i },
    player: { speed: s, type: d, audio: l, videoOpened: y },
  } = a.get();
  if (d === p || !i) return;
  let c = !y && !("mute" === p && l?.hasSingleTrack);
  try {
    a.dispatch("player/suspend", "type"),
      a.dispatch("player/changeType", { type: p }),
      c && r - 1 == e - 1 && -1 !== n && (await t(a, e, n, i.revisionId));
  } finally {
    let t = a.get();
    t.meta.current &&
      s === t.player.speed &&
      p === t.player.type &&
      e === t.meta.songId &&
      n === t.meta.partId &&
      i.revisionId === t.meta.current.revisionId &&
      a.dispatch("player/resume", "type");
  }
}
function i(t) {
  t.get().meta.songId === e && t.dispatch("player/toggleLoop");
}
export {
  r as demoChangePitch,
  p as demoChangeSpeed,
  n as demoChangeType,
  i as demoToggleLoop,
};
