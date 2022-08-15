//  @ts-ignore
import fragment from "./fragment.frag";
import { ColorEffectsFilter } from "@/filters/ColorEffectsFilter";

export class Clarity extends ColorEffectsFilter {
  constructor(value: number = 0) {
    super(null, fragment);
    this.effectName = "clarity";
    this.effectType = "filter";

    this.value = value;
  }

  get value(): number {
    return this.uniforms.value;
  }
  set value(value: number) {
    let [width, height] = this.uniforms?.filterGlobals?.uniforms?.inputSize ?? [
      1920, 1080,
    ];
    this.uniforms.px = [1 / width, 1 / height];
    this.uniforms.value = value * 2;
  }
}
