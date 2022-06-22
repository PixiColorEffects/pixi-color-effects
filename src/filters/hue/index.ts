import {
  Filter,
  FilterSystem,
  RenderTexture,
  FilterState,
} from "@pixi/core";
import { CLEAR_MODES } from "@pixi/constants";
import { ColorMatrixFilter } from "@pixi/filter-color-matrix";

export class Hue extends Filter {
  private _colorMatrixFilter: ColorMatrixFilter;
  constructor(value: number = 0) {
    super(null, null);

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
    this._colorMatrixFilter.reset();
    this._colorMatrixFilter.hue(value * 180, true);
    this.uniforms.value = value;
  }
}
