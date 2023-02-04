import { R as a, o as e } from "./preact.3d326435.js";
import { bw as t, bx as i, L as s } from "./index.659fabbf.js";
import { Y as r } from "./YoutubeLogo.249f9c5a.js";
import { _ as d } from "./useSongListHotkeys.074f3727.js";
let l = a((a) => {
  let {
      song: l,
      isActive: o,
      numerated: m,
      onClick: c,
      difficultyNA: n = !1,
    } = a,
    f = m ? d.numerated : d.item;
  o && (f += " " + d.active);
  let { defaultTrack: h } = l,
    p = l.tracks && l.tracks[h],
    u = p ? l.difficulty : null,
    g = t(l, h);
  return e(s, {
    to: g,
    className: f,
    onClick: c,
    "data-song": "",
    children: [
      e("div", {
        className: d.wrapper,
        children: [
          e("div", {
            className: d.name,
            "data-field": "name",
            children: l.title,
          }),
          e("div", {
            className: d.artist,
            "data-field": "artist",
            children: l.artist,
          }),
        ],
      }),
      l.hasVideo &&
        e("div", {
          className: d.videoTag,
          children: e(r, { width: 26, height: 20 }),
        }),
      e(i, { difficultyString: u, difficultyNA: n }),
    ],
  });
});
export { l as S };
