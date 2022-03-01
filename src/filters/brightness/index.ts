import {
  Filter,
  FilterSystem,
  RenderTexture,
  CLEAR_MODES,
  FilterState,
  filters,
} from "pixi.js";
import { ColorMatrixFilter } from "@pixi/filter-color-matrix";

export class Brightness extends Filter {
  private _colorMatrixFilter: ColorMatrixFilter;
  constructor(value: number = 0) {
    super(null, null);

    this._colorMatrixFilter = new filters.ColorMatrixFilter();
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
    this._colorMatrixFilter.brightness(value + 1, false);
    this.uniforms.value = value;
  }
}
