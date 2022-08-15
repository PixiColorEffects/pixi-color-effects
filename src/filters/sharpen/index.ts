//  @ts-ignore
import fragment from "./fragment.frag";
import { Filter } from "@pixi/core";
import { ColorEffectsFilter } from "@/filters/ColorEffectsFilter";

export class Sharpen extends ColorEffectsFilter {
  constructor(value: number = 0) {
    super(null, fragment);
    this.effectName = "sharpen";
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
    // prettier-ignore
    this.uniforms.m = new Float32Array([
      -1, -1, -1,
      -1, 9, -1,
      -1, -1, -1
    ]);
    this.uniforms.px = [1 / width, 1 / height];
    this.uniforms.value = value / 2;
  }
}
