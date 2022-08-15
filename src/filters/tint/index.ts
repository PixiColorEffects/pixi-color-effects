//  @ts-ignore
import fragment from "./fragment.frag";
import { Filter } from "@pixi/core";
import { ColorEffectsFilter } from "@/filters/ColorEffectsFilter";

export class Tint extends ColorEffectsFilter {
  constructor(value: number = 0) {
    super(null, fragment);
    this.effectName = "tint";
    this.effectType = "filter";
    this.value = value;
  }

  get value(): number {
    return this.uniforms.value;
  }
  set value(value: number) {
    this.uniforms.value = value / 6;
  }
}
