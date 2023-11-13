import m from "mithril";

export default class Modal {
  onclose: any;

  constructor(onclose: any) {
    this.onclose = onclose;
  }

  view(vnode: any) {
    return m("div.modal", [
      m("span.close", { onclick: this.onclose }, "X"),
      m("div.content", vnode.children)
    ]);
  }
}
