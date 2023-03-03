import { x as e, o as a } from "./preact.294f37c2.js";
import { bp as t, bq as i, L as s } from "./index.6eeae9f8.js";
import { Y as r } from "./YoutubeLogo.e2fbfaeb.js";
import { _ as d } from "./useSongListHotkeys.b5832e87.js";
let l = e((e) => {
  let {
      song: l,
      isActive: o,
      numerated: m,
      onClick: c,
      difficultyNA: n = !1,
    } = e,
    f = m ? d.numerated : d.item;
  o && (f += " " + d.active);
  let { defaultTrack: h } = l,
    p = l.tracks && l.tracks[h],
    u = p ? l.difficulty : null,
    b = t(l, h);
  return a(s, {
    to: b,
    className: f,
    onClick: c,
    "data-song": "",
    children: [
      a("div", {
        className: d.wrapper,
        children: [
          a("div", {
            className: d.name,
            "data-field": "name",
            children: l.title,
          }),
          a("div", {
            className: d.artist,
            "data-field": "artist",
            children: l.artist,
          }),
        ],
      }),
      l.hasVideo &&
        a("div", {
          className: d.videoTag,
          children: a(r, { width: 26, height: 20 }),
        }),
      a(i, { difficultyString: u, difficultyNA: n }),
    ],
  });
});
export { l as S };
