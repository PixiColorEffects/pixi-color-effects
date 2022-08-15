//  @ts-ignore
import fragment from "./fragment.frag";
import { ColorEffectsFilter } from "@/filters/ColorEffectsFilter";

export class Black extends ColorEffectsFilter {
  constructor(value: number = 0) {
    super(null, fragment);
    this.effectName = "black";
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
