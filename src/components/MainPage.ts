import m from "mithril";

import ControlButtons from "./ControlButtons";
import Modal from "./Modal";
import Keyboard from "./Keyboard";
import Row from "./Row";
import Util from "../Util";

import { Note, Scale } from "tonal";

export default class MainPage {
  static readonly MAX_ROWS = 6;

  isFinished: boolean;
  modal: any;

  constructor() {
    // Init components
    this.keyboard = new Keyboard(this.setValue.bind(this));
    this.controlButtons = new ControlButtons(
      this.onEnter.bind(this),
      this.onBackspace.bind(this)
    );

    const scaleNumber = Number(m.route.param("id"));
    this.reset( Number.isInteger(scaleNumber) ? scaleNumber : null);

    // Debug
    window.M = this;
  }

  reset(scaleNumber: number = null) {
    this.rows = new Array(MainPage.MAX_ROWS).fill().map(() => new Row());

    this.isFinished = false;
    this.currentRowIndex = 0;
    this.scaleNumber = scaleNumber === null ? Util.getRandomScaleNumber() : scaleNumber;
    this.answerScale = Util.getScaleByNumber(this.scaleNumber);
    this.modal = null;

    m.redraw();
  }

  openModal() {
    // Add delay to show animation
    window.setTimeout(() => {
      this.modal = new Modal(
        this.closeModal.bind(this),
        this.reset.bind(this),
        this.answerScale.name,
        this.getShareable()
      );
      m.redraw();
    }, 2500);
  }

  closeModal() {
    this.modal = null;
  }

  onEnter() {
    if (this.isFinished) { return; }

    if (!this.currentRow().isFilled()) {
      return;
    }

    this.submitGuess();
  }

  onBackspace() {
    if (this.isFinished) { return; }

    this.currentRow().clearLast();
  }

  currentRow() {
    return this.rows[this.currentRowIndex];
  }

  getShareable() {
    const rows = this.rows.slice(0, this.currentRowIndex);
    const fullResults = rows.map((row) => row.compareWithAnswer(this.answerScale));

    return Util.resultsToShareable(fullResults, this.scaleNumber);
  }

  submitGuess() {
    const results = this.currentRow().compareWithAnswer(this.answerScale);

    this.currentRow().displayResults(results);
    this.currentRowIndex++;

    m.redraw();

    if (results.every((x) => x === "C")) {
      this.isFinished = true;
      this.openModal();
    }
    else if (this.currentRowIndex >= MainPage.MAX_ROWS) {
      this.isFinished = true;
      this.openModal();
    }
  }

  setValue(value: string) {
    if (this.isFinished) { return; }

    this.currentRow().setValue(value);
    m.redraw();
  }

  view() {
    return [
      m("h1", "Scale-dle"),
      this.modal ? m(this.modal) : null,
      m("div.grid", this.rows.map((row) => m(row))),
      m(this.controlButtons),
      m(this.keyboard)
    ];
  }
}
