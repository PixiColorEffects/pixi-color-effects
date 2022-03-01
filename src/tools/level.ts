//  @ts-nocheck
export class LevelMapping {
  constructor(e = 0, t = 255, s = 0, i = 255, n = 1, a = 0.5) {
    (this.minin = e),
      (this.maxin = t),
      (this.minout = s),
      (this.maxout = i),
      (this.midin = n),
      (this.mid = a),
      (this.map = (e) => (
        (e = (e - this.minin) / (this.maxin - this.minin)),
        (e = Math.pow(e, this.midin)),
        (e = this.minout + e * (this.maxout - this.minout)) > this.maxout
          ? (e = this.maxout)
          : e < this.minout && (e = this.minout),
        Math.round(e)
      ));
  }
  reset() {
    (this.minout = 0),
      (this.maxout = 255),
      (this.midin = 1),
      (this.minin = 0),
      (this.maxin = 255),
      (this.mid = 0.5);
  }
  isFlat() {
    return Boolean(
      0 == this.minout &&
        255 == this.maxout &&
        0.5 == this.mid &&
        0 == this.minin &&
        255 == this.maxin
    );
  }
  setMid(e) {
    (this.mid = (e - this.minin) / (this.maxin - this.minin)),
      (this.midin = this.midToIn(this.mid));
  }
  midToIn(e) {
    return Math.min(Math.max(Math.pow(9.99, 2 * e - 1), 0.1), 9.99);
  }
  static fillPaletteMap(e, t) {
    for (let s = 0; s < 256; ++s) {
      let i = e.map(s);
      (t.data[4 * s] = i), (t.data[4 * s + 1] = i), (t.data[4 * s + 2] = i);
    }
  }
  static fillRGBPaletteMap(e, t, s, i) {
    for (let n = 0; n < 256; ++n)
      (i.data[4 * n] = e ? e.map(n) : n),
        (i.data[4 * n + 1] = t ? t.map(n) : n),
        (i.data[4 * n + 2] = s ? s.map(n) : n);
  }
}
