import { l as e } from "./index.659fabbf.js";
import "./preact.3d326435.js";
async function t(t) {
  t.dispatch("player/suspend", "defaults");
  let { player: a, cursor: p } = t.get(),
    i = !1;
  if (
    (0 !== p.position.loopEnd && t.dispatch("player/toggleLoop"),
    "focus" !== a.type &&
      (t.dispatch("player/changeType", { type: "focus" }), (i = !0)),
    100 !== a.speed &&
      (t.dispatch("player/changeSpeed", { speed: 100 }), (i = !0)),
    0 !== a.pitchShift && t.dispatch("player/changePitch", 0),
    a.isCountin && t.dispatch("player/toggleCountIn"),
    a.isMetronome && t.dispatch("player/toggleMetronome"),
    t.dispatch("player/changeMetronome:init", "regular"),
    i)
  ) {
    let {
      meta: { current: a, songId: p, partId: i },
    } = t.get();
    -1 !== p && -1 !== i && a && (await e(t, p, i, a.revisionId));
    let s = t.get().meta;
    if (
      s.songId !== p ||
      s.partId !== i ||
      !s.current ||
      !a ||
      s.current.revisionId !== a.revisionId
    )
      return;
  }
  t.dispatch("player/resume", "defaults");
}
export { t as plusRestoreDefaults };
