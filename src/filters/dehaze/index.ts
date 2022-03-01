//  @ts-ignore
import fragment from "./fragment.frag";
import { Filter } from "pixi.js";

export class Dehaze extends Filter {
  constructor(value: number = 0) {
    super(null, fragment);

    this.value = value;
  }

  get value(): number {
    return this.uniforms.value;
  }
  set value(value: number) {
    let [width, height] = this.uniforms?.filterGlobals?.uniforms?.inputSize ?? [
      1920, 1080,
    ];

    this.uniforms.size = [1 / width, 1 / height];
    this.uniforms.value = value;
  }
}
