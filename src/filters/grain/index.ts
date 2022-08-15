//  @ts-ignore
import fragment from "./fragment.frag";
import { Filter } from "@pixi/core";
import { ColorEffectsFilter } from "@/filters/ColorEffectsFilter";

export class Grain extends ColorEffectsFilter {
  constructor(value: number = 0) {
    super(null, fragment);
    this.effectName = "grain";
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

    this.uniforms.width = width;
    this.uniforms.height = height;
    this.uniforms.timer = 1.0;
    this.uniforms.value = value / 10;
  }
}
