import m from "mithril";

import ControlButtons from "./ControlButtons";
import Modal from "./Modal";
import GameEndContent from "./GameEndContent";
import HelpContent from "./HelpContent";
import Keyboard from "./Keyboard";
import Row from "./Row";
import Util from "../Util";

import { Note, Scale } from "tonal";

export default class MainPage {
  static readonly MAX_ROWS = 6;

  isFinished: boolean;
  modal: any;

  static readonly HELP_ICON = `<svg width="80px" height="30px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 10C0 4.478 4.478 0 10 0c5.523 0 10 4.478 10 10 0 5.523-4.477 10-10 10-5.522 0-10-4.477-10-10zm11.125 2.002H8.989v-.141c.01-1.966.492-2.254 1.374-2.782.093-.056.19-.114.293-.178.73-.459 1.292-1.038 1.292-1.883 0-.948-.743-1.564-1.666-1.564-.851 0-1.657.398-1.712 1.533H6.304C6.364 4.693 8.18 3.5 10.294 3.5c2.306 0 3.894 1.447 3.894 3.488 0 1.382-.695 2.288-1.805 2.952l-.238.144c-.79.475-1.009.607-1.02 1.777V12zm.17 3.012a1.344 1.344 0 01-1.327 1.328 1.32 1.32 0 01-1.328-1.328 1.318 1.318 0 011.328-1.316c.712 0 1.322.592 1.328 1.316z" fill="#5C5F62"/></svg>`;

  constructor() {
    // Init components
    this.keyboard = new Keyboard(this.setValue.bind(this));
    this.controlButtons = new ControlButtons(
      this.onEnter.bind(this),
      this.onBackspace.bind(this)
    );

    const scaleNumber = Number(m.route.param("id"));
    this.reset( Number.isInteger(scaleNumber) ? scaleNumber : null);

    this.modal = new Modal(this.closeModal.bind(this));

    // Debug
    window.M = this;
  }

  reset(scaleNumber: number = null) {
    this.rows = new Array(MainPage.MAX_ROWS).fill().map(() => new Row());

    this.isFinished = false;
    this.currentRowIndex = 0;
    this.scaleNumber = scaleNumber === null ? Util.getRandomScaleNumber() : scaleNumber;
    this.answerScale = Util.getScaleByNumber(this.scaleNumber);

    this.modalContent = null;

    m.redraw();
  }

  openHelpModal() {
    this.modalContent = HelpContent;
  }

  openEndGameModal() {
    // Add delay to show animation
    window.setTimeout(() => {
      this.modalContent = new GameEndContent(
        this.reset.bind(this),
        this.answerScale.name,
        this.getShareable()
      );

      m.redraw();
    }, 2500);
  }

  closeModal() {
    this.modalContent = null;
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
      this.openEndGameModal();
    }
    else if (this.currentRowIndex >= MainPage.MAX_ROWS) {
      this.isFinished = true;
      this.openEndGameModal();
    }
  }

  setValue(value: string) {
    if (this.isFinished) { return; }

    this.currentRow().setValue(value);
    m.redraw();
  }

  view() {
    return [
      m("div#nav", [
        m("h1", "Scaledle"),
        m("div#help", { onclick: () => { this.openHelpModal(); }}, m.trust(MainPage.HELP_ICON)),
      ]),
      this.modalContent ? m(this.modal, m(this.modalContent)) : null,
      m("div.grid", this.rows.map((row) => m(row))),
      m(this.controlButtons),
      m(this.keyboard)
    ];
  }
}
