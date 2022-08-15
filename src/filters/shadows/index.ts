//  @ts-ignore
import fragment from "../highlights/fragment.frag";
import { Filter } from "@pixi/core";
import { ColorEffectsFilter } from "@/filters/ColorEffectsFilter";

export class Shadows extends ColorEffectsFilter {
  constructor(value: number = 0) {
    super(null, fragment);
    this.effectName = "shadows";
    this.effectType = "filter";

    this.value = value;
  }

  get value(): number {
    return this.uniforms.value;
  }
  set value(value: number) {
    this.uniforms.value = value * -1;
  }
}
