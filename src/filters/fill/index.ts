import {
  Filter,
  FilterState,
  FilterSystem,
  RenderTexture,
} from "@pixi/core";
import { CLEAR_MODES } from "@pixi/constants";
import { SoftLight } from "@/filters/fill/softLight";
import { HardLight } from "@/filters/fill/hardLight";
import { VividLight } from "@/filters/fill/vividLight";
import { Overlay } from "@/filters/fill/overlay";
import { Multiply } from "@/filters/fill/multiply";
import { ColorDodge } from "@/filters/fill/colorDodge";
import { ColorBurn } from "@/filters/fill/colorBurn";
import { Screen } from "@/filters/fill/screen";
import { Default } from "@/filters/fill/default";
import { ColorEffectsFilter } from "@/filters/ColorEffectsFilter";

const fillMode = {
  default: Default,
  screen: Screen,
  overlay: Overlay,
  multiply: Multiply,
  colorDodge: ColorDodge,
  colorBurn: ColorBurn,
  hardLight: HardLight,
  softLight: SoftLight,
  vividLight: VividLight,
};

export type FillModeType = keyof typeof fillMode;

export class Fill<T extends FillModeType> extends ColorEffectsFilter {
  private _fillFilter: InstanceType<typeof fillMode[T]>;
  constructor(
    value: number = 0,
    fillColor: string = "#ff2200",
    //  @ts-ignore
    mode: T = "softLight"
  ) {
    super(null, null);
    this.effectName = "fill";
    this.effectType = "filter";

    //  @ts-ignore
    this._fillFilter = new fillMode[mode]();
    this.mode = mode;
    this.value = value;
    this.fillColor = fillColor;
  }

  apply(
    filterManager: FilterSystem,
    input: RenderTexture,
    output: RenderTexture,
    clearMode?: CLEAR_MODES,
    _currentState?: FilterState
  ) {
    this._fillFilter.apply(filterManager, input, output, clearMode);
  }

  public update() {
    this._fillFilter.value = this.uniforms.value;
    this._fillFilter.fillColor = this.uniforms.fillColor;
  }

  get mode(): T {
    return this.uniforms.mode;
  }
  set mode(mode: T) {
    //  @ts-ignore
    this._fillFilter = new fillMode[mode]();
    this.uniforms.mode = mode;

    this.update();
  }

  get fillColor(): string {
    return this.uniforms.fillColor;
  }
  set fillColor(value: string) {
    this.uniforms.fillColor = value;
    this.update();
  }

  get value(): number {
    return this.uniforms.value;
  }
  set value(value: number) {
    this.uniforms.value = value;
    this.update();
  }
}
