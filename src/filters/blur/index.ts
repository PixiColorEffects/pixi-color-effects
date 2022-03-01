import {
  CLEAR_MODES,
  Filter,
  filters,
  FilterState,
  FilterSystem,
  RenderTexture,
} from "pixi.js";

export class Blur extends Filter {
  private _blurFilter: any;

  constructor(value: number = 0) {
    super(null, null);

    this._blurFilter = new filters.BlurFilter();
    this.value = value;
  }

  apply(
    filterManager: FilterSystem,
    input: RenderTexture,
    output: RenderTexture,
    clearMode?: CLEAR_MODES,
    _currentState?: FilterState
  ) {
    this._blurFilter.apply(filterManager, input, output, clearMode);
  }

  get value(): number {
    return this.uniforms.value;
  }
  set value(value: number) {
    this._blurFilter.blur = value * 10;
    this.uniforms.value = value;
  }
}
