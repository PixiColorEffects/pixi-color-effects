import {
  Filter,
  FilterState,
  FilterSystem,
  RenderTexture,
} from "@pixi/core";
import { CLEAR_MODES } from '@pixi/constants';
import { BlurFilter } from '@pixi/filter-blur';
import { ColorEffectsFilter } from "@/filters/ColorEffectsFilter";

export class Blur extends ColorEffectsFilter {
  private _blurFilter: any;

  constructor(value: number = 0) {
    super(null, null);
    this.effectName = "blur";
    this.effectType = "filter";

    this._blurFilter = new BlurFilter();
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
