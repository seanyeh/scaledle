import m from "mithril";

import Util from "../Util";

export default class GameEndContent {
  static readonly SHARE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="30" viewBox="0 0 30 30"> <path d="M 23 3 A 4 4 0 0 0 19 7 A 4 4 0 0 0 19.09375 7.8359375 L 10.011719 12.376953 A 4 4 0 0 0 7 11 A 4 4 0 0 0 3 15 A 4 4 0 0 0 7 19 A 4 4 0 0 0 10.013672 17.625 L 19.089844 22.164062 A 4 4 0 0 0 19 23 A 4 4 0 0 0 23 27 A 4 4 0 0 0 27 23 A 4 4 0 0 0 23 19 A 4 4 0 0 0 19.986328 20.375 L 10.910156 15.835938 A 4 4 0 0 0 11 15 A 4 4 0 0 0 10.90625 14.166016 L 19.988281 9.625 A 4 4 0 0 0 23 11 A 4 4 0 0 0 27 7 A 4 4 0 0 0 23 3 z"></path></svg>`;

  constructor(onreset, answerScaleName, shareable) {
    this.onreset = onreset;
    this.answerScaleName = answerScaleName;
    this.shareable = shareable;
  }

  async onshare() {
    await navigator.clipboard.writeText(this.shareable);
  }

  view() {
    return [
      m("h1", Util.normalizeScaleName(this.answerScaleName)),
      m("div.button", { onclick: this.onshare.bind(this) }, [
        m("span.share", "Share"),
        m.trust(GameEndContent.SHARE_ICON)
      ]),
      m("div.button", { onclick: () => { this.onreset() } }, "Next Scale-dle!"),
    ];
  }
}