//  @ts-ignore
import fragment from "./fragment.frag";
import { ColorEffectsFilter } from "@/filters/ColorEffectsFilter";

export class White extends ColorEffectsFilter {
  constructor(value: number = 0) {
    super(null, fragment);
    this.effectName = "white";
    this.effectType = "filter";

    this.value = value;
  }

  get value(): number {
    return this.uniforms.value;
  }
  set value(value: number) {
    this.uniforms.value = value * (255 / 2);
  }
}
