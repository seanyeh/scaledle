import m from "mithril";

export default class ControlButtons {
  onEnter: any;
  onBackspace: any;

  constructor(onEnter: any, onBackspace: any) {
    this.onEnter = onEnter;
    this.onBackspace = onBackspace;
  }

  view() {
    return m("div#control", [
      m("div.button", { onclick: this.onEnter }, "enter"),
      m("div.button", { onclick: this.onBackspace }, "⌫"),
    ]);
  }
}


