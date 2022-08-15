import {
  Filter,
  FilterSystem,
  RenderTexture,
  FilterState,
} from "@pixi/core";
import { CLEAR_MODES } from "@pixi/constants";
import { ColorMatrixFilter } from "@pixi/filter-color-matrix";
import { ColorEffectsFilter } from "@/filters/ColorEffectsFilter";

export class Saturation extends ColorEffectsFilter {
  private _colorMatrixFilter: ColorMatrixFilter;
  constructor(value: number = 0) {
    super(null, null);
    this.effectName = "saturation";
    this.effectType = "filter";

    this._colorMatrixFilter = new ColorMatrixFilter();
    this.value = value;
  }

  apply(
    filterManager: FilterSystem,
    input: RenderTexture,
    output: RenderTexture,
    clearMode?: CLEAR_MODES,
    _currentState?: FilterState
  ) {
    this._colorMatrixFilter.apply(filterManager, input, output, clearMode);
  }

  get value(): number {
    return this.uniforms.value;
  }
  set value(value: number) {
    let red = (2 * Number(value)) / 3 + 1;
    let blue = -0.5 * (red - 1);

    // prettier-ignore
    this._colorMatrixFilter.matrix = [
      red, blue, blue, 0, 0, 
      blue, red, blue, 0, 0, 
      blue, blue, red, 0, 0,
      0, 0, 0, 1, 0
    ];

    this.uniforms.value = value;
  }
}
