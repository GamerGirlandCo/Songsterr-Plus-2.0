import { s as e, c as n, h as s, e as i } from "./index.6eeae9f8.js";
import { _ as t, v as o, o as a, T as r } from "./preact.294f37c2.js";
import { L as l, S as d, M as p, C as c } from "./Line.e444fc91.js";
import { A as u, L as h, S as m } from "./AppFooter.d26621e6.js";
import "./Capo.a4ddb887.js";
import "./Input.9e959f35.js";
import "./ActionButton.5286af2f.js";
import "./UploadRevisionForm.module.967e0aac.js";
import "./gplay.79326319.js";
let f = "B7v2cm",
  g = { tablature: "B7v2cm" };
class b extends t {
  render() {
    let { lines: e, slicingMode: n } = this.props.lines,
      { part: s } = this.props;
    return o(
      "section",
      { id: "diff", className: g.tablature },
      e.map((e) =>
        a("div", {
          className: g.lineWrap,
          children: [
            a(
              l,
              {
                line: e,
                part: s,
                isDiff: !0,
                tuning: void 0,
                inlineDefs: 0 === e.index,
                slicingMode: n,
              },
              "line-" + e.index.toString()
            ),
          ],
        })
      )
    );
  }
}
let y = (e, n) => e.hasPlus || n.enabled,
  O = { onTab: !0 };
class v extends t {
  componentDidMount() {
    let e = window.hotKeysManager;
    e.bindOne("space", this.props.handlePlay, O),
      e.bindOne("t", this.props.handleMixer, O);
  }
  componentWillUnmount() {
    let e = window.hotKeysManager;
    e.unbindOne("space", O),
      e.unbindOne("l", O),
      e.unbindOne("f", O),
      e.unbindOne("m", O),
      e.unbindOne("r", O),
      e.unbindOne("t", O),
      e.unbindOne("s", O),
      e.unbindOne("p", O),
      e.unbindOne("c", O),
      e.unbindOne("n", O),
      e.unbindOne("e", O),
      this.resizeObserver && this.resizeObserver.disconnect();
  }
  render() {
    let {
        dispatch: e,
        user: t,
        demo: l,
        player: f,
        diff: g,
        diffParts: O,
        screen: v,
        layer: { layer: A },
        device: j,
        route: x,
        isDeleted: w,
        tabEditor: S,
        fingerings: C,
        experiments: M,
        cursor: P,
      } = this.props,
      k = x.isPanel,
      D = y(t, l),
      I = v.isSmall,
      F = g.current?.before,
      B = g.before && F.tracks[g.before.partId],
      E = "saving" === S.status || "changes" === S.status,
      L = !g.isFailed && !g.isFailed,
      N = L && !w && !!O.current && !!O.lines.lines.length,
      T = L && !w && (!O.current || !O.lines.lines.length),
      z = L && !D,
      K = L && !D && j.isPhone && N,
      U = M.auto_fingerings?.segment === "ut",
      W = r((n) => {
        e("diff/toggleChangesOnly", { enabled: n });
      }, []);
    return o(
      "section",
      { className: n.tablature, role: k ? "complementary" : "main" },
      o(I ? p : c, {
        ...this.props,
        shouldPlay: !1,
        canPlay: !0,
        track: B,
        device: j,
        layer: A,
        plusAccess: s(t) || i(l),
        fingeringsEnabled: U,
        fingeringsStatus: C.status,
        fingeringsActive: C.shown,
        loop: 0 !== P.position.loopEnd,
        type: f.type,
        speed: f.speed,
        pitchShift: f.pitchShift,
        pitchShiftAvailable: !1,
        isCountin: f.isCountin,
        isMetronome: f.isMetronome,
        metronomeType: f.metronomeType,
        tadEditorWarning: E,
        tabEditorActive: !1,
        usedDrums: !1,
        videoIsOpened: !1,
        fingeringsOnActivate: void 0,
        playAlongAdOpened: !1,
        toolsHidden: !0,
      }),
      z && o(m, { key: "showroom", songId: g.songId }),
      o(
        "div",
        { class: n.changesOnly },
        o("input", {
          type: "checkbox",
          id: "changesOnly",
          checked: g.changesOnly,
          onChange: () => W(!g.changesOnly),
        }),
        o("label", { for: "changesOnly" }, "Changes only")
      ),
      o(
        "div",
        { class: n.pane },
        T && o(h, null),
        N &&
          a(
            b,
            { key: `tab-${F.songId}`, part: O.current, lines: O.lines },
            O.lines.hash
          )
      ),
      K && o(d, { key: "showroom-bottom" }),
      N && o(u, { withAds: z, device: j, copyright: !0 })
    );
  }
}
var A = e(
  v,
  "user",
  "demo",
  "player",
  "diff",
  "diffParts",
  "cursor",
  "screen",
  "layer",
  "device",
  "route",
  "experiments",
  "isDeleted",
  "tabEditor",
  "fingerings",
  "ads"
);
export { A as default };
