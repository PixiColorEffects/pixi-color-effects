//  @ts-ignore
import fragment from "./fragment.frag";
import { Filter } from "@pixi/core";

export class Highlights extends Filter {
  constructor(value: number = 0) {
    super(null, fragment);

    this.value = value;
  }

  get value(): number {
    return this.uniforms.value;
  }
  set value(value: number) {
    this.uniforms.value = value;
  }
}
