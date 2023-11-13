import m from "mithril";

import Util from "../Util";

type Rect = [number, number, number, number];

export default class Keyboard {
  callback: any;
  blackKeys: Rect[];
  whiteKeys: Rect[];

  constructor(callback: any) {
    this.callback = callback;
  }

  initShapes(ctx: CanvasRenderingContext2D) {
    const width = ctx.canvas.clientWidth;
    const height = ctx.canvas.clientHeight;
    const keyWidth = width / 7;

    const offsets = [(2/3), 1 + 2/3, 3 + 2/3, 4 + 2/3, 5 + 2/3];
    this.blackKeys = offsets.map((offset) => [
      offset*keyWidth, 0,
      (2/3)*keyWidth, height/2
    ]);

    this.whiteKeys = Array(7).fill(null).map((_, i) => [
      i*keyWidth, 0,
      keyWidth, height
    ]);
  }

  _inBounds(px: number, py: number, x: number, y: number, w: number, h: number): boolean {
    return px >= x && py >= y && px <= (x + w) && py <= (y + h);
  }

  onclick(e: any) {
    const px = e.offsetX;
    const py = e.offsetY;

    let index = this.blackKeys.findIndex(([x, y, w, h]) => this._inBounds(px, py, x, y, w, h));
    if (index !== -1) {
      return this.callback(Util.BLACK_NOTES[index]);
    }

    index = this.whiteKeys.findIndex(([x, y, w, h]) => this._inBounds(px, py, x, y, w, h));
    if (index !== -1) {
      return this.callback(Util.WHITE_NOTES[index]);
    }
  }

  drawKeyboard(ctx: CanvasRenderingContext2D) {
    this.initShapes(ctx);

    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);

    // Draw white keys (only right edge)
    ctx.fillStyle = "black";
    this.whiteKeys.forEach(([x, y, w, h], i) => {
      // Draw right edge
      ctx.beginPath();
      ctx.moveTo(x + w, 0);
      ctx.lineTo(x + w, y + h);
      ctx.stroke();

      // Draw letter
      ctx.font = "24px sans-serif";
      ctx.fillText(Util.WHITE_NOTES[i], x + w/2, h - 30);
    });

    // Draw black keys
    this.blackKeys.forEach(([x, y, w, h], i) => {
      ctx.fillStyle = "black";
      ctx.fillRect(x, y, w, h);

      // Draw letter
      ctx.fillStyle = "white";
      ctx.font = "16px sans-serif";
      ctx.fillText(Util.BLACK_NOTES[i], x + w/2, 30);
      ctx.fillText(Util.BLACK_NOTES_FLAT[i], x + w/2, 60);
    });
  }

  view() {
    const attrs = {
      oncreate: (vnode: any) => {
        const ctx = vnode.dom.getContext("2d");
        this.drawKeyboard(ctx);
        vnode.dom.addEventListener("click", this.onclick.bind(this));
      }
    }

    return m("div#canvas-wrapper", [
      m("canvas[width=400][height=180]", attrs)
    ]);
  }
}
