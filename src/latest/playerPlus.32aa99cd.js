import { l as e, g as t } from "./index.3637aaf7.js";
import "./preact.f8a34c73.js";
function a() {
  return !1;
}
async function s(a, s) {
  const {
    meta: { songId: p, partId: n, current: r },
    player: { speed: i },
  } = a.get();
  if (i === s || !r) return;
  const c = t(i) !== t(s);
  try {
    c && a.dispatch("player/suspend", "speed"),
      a.dispatch("player/changeSpeed", { speed: s }),
      c && -1 !== p && -1 !== n && (await e(a, p, n, r.revisionId));
  } finally {
    const e = a.get();
    c &&
      e.meta.current &&
      t(s) === t(e.player.speed) &&
      p === e.meta.songId &&
      n === e.meta.partId &&
      r.revisionId === e.meta.current.revisionId &&
      a.dispatch("player/resume", "speed");
  }
}
async function p(e, t) {
  e.get().player.pitchShift !== t && e.dispatch("player/changePitch", t);
}
async function n(t, a) {
  const {
    meta: { current: s, songId: p, partId: n },
    player: { type: r, audio: i },
  } = t.get();
  if (r === a || !s) return;
  const c = !("mute" === a && i.hasSingleTrack);
  try {
    t.dispatch("player/suspend", "type"),
      t.dispatch("player/changeType", { type: a }),
      c && -1 !== p && -1 !== n && (await e(t, p, n, s.revisionId));
  } finally {
    const e = t.get();
    e.meta.current &&
      a === e.player.type &&
      p === e.meta.songId &&
      n === e.meta.partId &&
      s.revisionId === e.meta.current.revisionId &&
      t.dispatch("player/resume", "type");
  }
}
async function r(e) {
  e.dispatch("player/toggleLoop");
}
export {
  a as demo,
  p as plusChangePitch,
  s as plusChangeSpeed,
  n as plusChangeType,
  r as plusToggleLoop,
};
//# sourceMappingURL=playerPlus.32aa99cd.js.map
