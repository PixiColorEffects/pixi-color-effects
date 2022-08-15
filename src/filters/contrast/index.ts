import {
  Filter,
  FilterSystem,
  RenderTexture,
  FilterState,
} from "@pixi/core";
import { CLEAR_MODES } from "@pixi/constants";
import { ColorMatrixFilter } from "@pixi/filter-color-matrix";
import { ColorEffectsFilter } from "@/filters/ColorEffectsFilter";

export class Contrast extends ColorEffectsFilter {
  private _colorMatrixFilter: ColorMatrixFilter;
  constructor(value: number = 0) {
    super(null, null);
    this.effectName = "contrast";
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
    this._colorMatrixFilter.contrast(value, false);
    this.uniforms.value = value;
  }
}
