import m from "mithril";
import { Note } from "tonal";

import Util from "../Util";

export default class Row {
  cells: Cell[];

  constructor() {
    this.cells = new Array(7).fill(null).map((_, i) => new Cell(i));
  }

  compareWithAnswer(answerScale: any) {
    const answerMidis = Util.toMidiArray(answerScale.notes);
    const guessMidis = Util.toMidiArray(this.getNotes());

    return Util.calculateGuess(guessMidis, answerMidis);
  }

  getNotes() {
    const octave = 5; // Doesn't matter
    const notes = this.cells.map((cell) => Note.get(`${cell.value}${octave}`));
    return notes;
  }

  setValue(value: string) {
    const cell = this.nextEmptyCell();
    if (cell) {
      cell.setValue(value);
    }
  }

  displayResults(results: string[]) {
    this.cells.forEach((cell, i) => cell.setStatus(results[i]));
  }

  clearLast() {
    const cell = this.lastCell();
    if (cell) {
      cell.setValue(null);
    }
  }

  getNextCellIndex() {
    for (let i = 0; i < this.cells.length; i++) {
      if (this.cells[i].isEmpty()) {
        return i;
      }
    }

    return -1;
  }

  // Returns last filled cell
  lastCell() {
    const i = this.getNextCellIndex();

    if (i === -1) {
      // All cells filled, so return last
      return this.cells[this.cells.length - 1];
    }
    else if (i === 0) {
      // All cells empty
      return;
    }

    return this.cells[i - 1];
  }

  nextEmptyCell() {
    const i = this.getNextCellIndex();
    if (i === -1) {
      return null;
    }

    return this.cells[i];
  }

  isFilled(): boolean {
    return !this.nextEmptyCell();
  }

  view() {
    return m("div.row", this.cells.map((box) => m(box)));
  }
}

class Cell {
  column: number;
  flipped: boolean;
  status: string;
  value: string;

  // Corresponding CSS classes
  static readonly STATUS_CLASSES: {[key: string]: string} = {
    "C": "correct",
    "W": "wrong-position",
    "X": "wrong",
    " ": "none"
  }

  constructor(column: number) {
    this.column = column; // Used for css delay

    this.value = null;
    this.status = " ";

    this.flipped = false;
  }

  setValue(value: string) {
    this.value = value;
  }

  setStatus(status: string) {
    this.status = status;

    this.flipped = true;
  }

  isEmpty() {
    return this.value === null;
  }

  view() {
    return m("div.cell", [
      m(`div.delay${this.column}`, { class: this.flipped ? "inner-flipped" : "inner" }, [
        m("div.front", this.value),
        m("div.back", { class: Cell.STATUS_CLASSES[this.status] }, this.value)
      ])
    ]);
  }
}

