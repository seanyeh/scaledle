import m from "mithril";

export default class Modal {
  constructor(onclose) {
    this.onclose = onclose;
  }

  view(vnode) {
    return m("div.modal", [
      m("span.close", { onclick: this.onclose }, "X"),
      m("div.content", vnode.children)
    ]);
  }
}
