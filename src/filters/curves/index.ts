//  @ts-nocheck
import {
  Filter,
  utils,
  Texture,
  FilterSystem,
  RenderTexture,
  CLEAR_MODES,
  FilterState,
} from "pixi.js";
import { CanvasSQ } from "@/tools/CanvasSQ";
import { interpolate } from "@/tools/interpolate";
import { Mapping } from "@/filters/mapping";

type Options = { preset: number[][] };

export class Curves extends Filter {
  private _imageData: ImageData;

  constructor(options: Options) {
    super(null, null);

    this._imageData = new ImageData(256, 1);
    this.options = options;
  }

  apply(
    filterManager: FilterSystem,
    input: RenderTexture,
    output: RenderTexture,
    clearMode?: CLEAR_MODES,
    _currentState?: FilterState
  ) {
    this._mapping.apply(filterManager, input, output, clearMode);
  }

  public update() {
    let paletteMap = this._imageData;
    interpolateCanvas.fillPaletteMap(
      Curves.createCurveSet(this.uniforms.options),
      paletteMap
    );

    this.uniforms.paletteMap = paletteMap;
    if (!this._mapping) {
      this._mapping = new Mapping(this.uniforms.paletteMap);
    } else {
      this._mapping.paletteMap = this.uniforms.paletteMap;
    }
  }

  get options(): Options {
    return this.uniforms.options;
  }
  set options(value: Options) {
    this.uniforms.options = value;
    this.update();
  }

  static createCurveSet(e: any) {
    const t = new Array(),
      s = new Array(),
      n = new Array(),
      a = new Array();
    for (let r = 0; r < e.preset[0].length; r += 2)
      t.push(new CanvasSQ(e.preset[0][r], e.preset[0][r + 1]));
    for (let r = 0; r < e.preset[1].length; r += 2)
      s.push(new CanvasSQ(e.preset[1][r], e.preset[1][r + 1]));
    for (let r = 0; r < e.preset[2].length; r += 2)
      n.push(new CanvasSQ(e.preset[2][r], e.preset[2][r + 1]));
    for (let r = 0; r < e.preset[3].length; r += 2)
      a.push(new CanvasSQ(e.preset[3][r], e.preset[3][r + 1]));
    return new interpolateCanvas(1, t, s, n, a);
  }
}

class interpolateCanvas {
  constructor(e = 255, t = [], s = [], i = [], n = []) {
    (this.scale = e),
      (this.rgb = t),
      (this.red = s),
      (this.green = i),
      (this.blue = n),
      (this.percent = 1);
  }
  static getInterpolation(e, t) {
    let s = [],
      i = [],
      a = new Float32Array(256);
    for (var r = 0; r < t.length; r++) s.push(t[r].x * e), i.push(t[r].y * e);
    let o = new interpolate(s, i);
    for (var h = 0; h < Math.ceil(s[0]); h++) a[h] = i[0];
    for (h = Math.ceil(s[0]); h < Math.ceil(s[s.length - 1]); h++)
      a[h] = o.interpolate(h);
    for (h = Math.ceil(s[s.length - 1]); h < 256; h++) a[h] = i[i.length - 1];
    return a;
  }
  static fillPaletteMap(e, t) {
    let s = interpolateCanvas.getInterpolation(e.scale, e.rgb),
      i = interpolateCanvas.getInterpolation(e.scale, e.red),
      n = interpolateCanvas.getInterpolation(e.scale, e.green),
      a = interpolateCanvas.getInterpolation(e.scale, e.blue);
    for (let r = 0; r < 256; ++r) {
      let o = r - s[r];
      (t.data[4 * r] = r - Math.round((r - (i[r] - o)) * e.percent)),
        (t.data[4 * r + 1] = r - Math.round((r - (n[r] - o)) * e.percent)),
        (t.data[4 * r + 2] = r - Math.round((r - (a[r] - o)) * e.percent));
    }
  }
}
