import m from "mithril";

export default class HelpContent {
  static readonly CONTENT = `
  <h1>How to Play</h1>
  <p>
  Guess the Scale-dle in 6 tries.
  </p>

  <p>
  Possible scale types are:
  <a href="https://en.wikipedia.org/wiki/Major_scale" target="_blank">major</a>,
  <a href="https://en.wikipedia.org/wiki/Minor_scale" target="_blank">minor</a> (natural),
  <a href="https://en.wikipedia.org/wiki/Harmonic_minor_scale" target="_blank">harmonic minor</a>,
  <a href="https://en.wikipedia.org/wiki/Minor_scale#Melodic_minor_scale" target="_blank">melodic minor</a>,
  <a href="https://en.wikipedia.org/wiki/Dorian_mode#Renaissance_Dorian_anchor" target="_blank">dorian</a>,
  <a href="https://en.wikipedia.org/wiki/Phrygian_mode" target="_blank">phrygian</a>,
  <a href="https://en.wikipedia.org/wiki/Lydian_mode" target="_blank">lydian</a>,
  <a href="https://en.wikipedia.org/wiki/Mixolydian_mode" target="_blank">mixolydian</a>,
  <a href="https://en.wikipedia.org/wiki/Locrian_mode" target="_blank">locrian</a>,
  <a href="https://en.wikipedia.org/wiki/Pentatonic_scale#Major_pentatonic_scale" target="_blank">pentatonic</a>, and
  <a href="https://en.wikipedia.org/wiki/Octatonic_scale" target="_blank">octatonic</a> (whole-half and half-whole).
  </p>

  <p>
  In this game, all scales are 7 notes and ascending. For the octatonic scale, only the first 7 notes are used, and for the pentatonic scale, the 6th and 7th notes repeat the 1st and 2nd notes.
  </p>

  <p>
  Scale-dle was inspired by
  <a href="https://www.nytimes.com/games/wordle/">Wordle</a>
  and was created for the 2023 GitHub Game Off.
  </p>

  <p>
  Check out the code on <a href="https://github.com/seanyeh/scaledle">GitHub!</a>
  </p>
  `;

  view() {
    return m.trust(HelpContent.CONTENT);
  }
}
