import { Note, Scale } from "tonal";

export default class Util {
  static readonly SCALE_TYPES = [
    "major",
    "minor",
    "harmonic minor",
    "melodic minor",
    "dorian",
    "phrygian",
    "lydian",
    "mixolydian",
    "locrian",
    "pentatonic",
    "whole-half diminished",
    "half-whole diminished"
  ]

  static readonly ROOTS = [
    "A",
    "Bb",
    "B",
    "C",
    "C#",
    "D",
    "Eb",
    "E",
    "F",
    "F#",
    "G",
    "Ab",
  ];

  static readonly BLACK_NOTES = ["C#", "D#", "F#", "G#", "A#"];
  static readonly BLACK_NOTES_FLAT = ["Db", "Eb", "Gb", "Ab", "Bb"];
  static readonly WHITE_NOTES = ["C", "D", "E", "F", "G", "A", "B"];

  static getRandomScaleNumber() {
    // TODO: use the proper algorithm rather than assuming 12 roots and scale types
    return Math.floor(Math.random() * 144);
  }

  static getScaleByNumber(i: number) {
    // TODO: use the proper algorithm rather than assuming 12 roots and scale types
    const root = this.ROOTS[i%12];
    const scaleType = this.SCALE_TYPES[Math.floor(i/12)];

    const octave = 5; // Doesn't really matter
    return Scale.get(`${root}${octave} ${scaleType}`);
  }

  // Get midi array
  static toMidiArray(notes) {
    return notes.map((noteName) => Note.get(noteName).midi % 12);
  }

  // Returns an array of results:
  // "C": correct,
  // "W": wrong spot,
  // "X": does not exist
  static calculateGuess(guess, rawAnswer) {
    // Normalize correct to be same length as guess
    const answer = rawAnswer.concat(rawAnswer).slice(0, guess.length);

    // Make map of answer to track note usage
    const answerMap = {};
    answer.forEach((note) => {
      if (!(note in answerMap)) {
        answerMap[note] = 0;
      }
      answerMap[note]++;
    });

    const result = Array(guess.length);

    // First pass to find correct notes
    guess.forEach((note, i) => {
      if (note === answer[i]) {
        result[i] = "C";
        answerMap[note]--;
      }
    });

    // Second pass to figure out the other results
    guess.forEach((note, i) => {
      if (result[i] === "C") {
        return;
      }

      if (answerMap[note]) {
        result[i] = "W";
        answerMap[note]--;
      }
      else {
        result[i] = "X";
      }
    });

    return result;
  }

  static readonly EMOJI_MAP = {
    "C": "🟩",
    "W": "🟨",
    "X": "⬛"
  }
  static readonly URL = "seanyeh.github.io/scaledle";

  static resultsToShareable(resultsList, puzzleNumber): string {
    const tries = resultsList.length;
    const resultsStr = resultsList.map((results) => (
      `${results.map((x) => Util.EMOJI_MAP[x]).join("")}\n`
    )).join("");

    return `Scale-dle #${puzzleNumber} ${tries}/6\n${resultsStr}\n${Util.URL}`;
  }

  static normalizeScaleName(scaleName) {
    // Remove octave from name
    let newName = scaleName.replace(/[0-9]/, "");

    // Rename diminished scales to octatonic
    if (newName.includes("half-whole diminished")) {
      newName = newName.replace("half-whole diminished", "octatonic (half-whole)");
    }
    else if (newName.includes("diminished")) {
      newName = newName.replace("diminished", "octatonic (whole-half)");
    }

    return newName;
  }
}
