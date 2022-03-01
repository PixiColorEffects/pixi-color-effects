//  @ts-ignore
import fragment from "./fragment.frag";
import { Filter } from "pixi.js";

export class VignetteWhite extends Filter {
  constructor(value: number = 0) {
    super(null, fragment);

    this.value = value;
  }

  get value(): number {
    return this.uniforms.value;
  }
  set value(value: number) {
    this.uniforms.size = 0.25;
    this.uniforms.value = (value - 0.1) * 2;
  }
}
