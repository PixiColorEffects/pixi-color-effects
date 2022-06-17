//  @ts-ignore
import fragment from "./fragment.frag";
import { Filter } from "@pixi/core";
import { hex2rgb, string2hex } from "@pixi/utils";

export class HardLight extends Filter {
  constructor(value: number = 0, fillColor: string = "#f20") {
    super(null, fragment);

    this.value = value;
    this.fillColor = fillColor;
  }

  public update() {
    const [r, g, b] = hex2rgb(string2hex(this.uniforms.fillColor));
    this.uniforms.color = [r, g, b, 1];
  }

  get fillColor(): string {
    return this.uniforms.fillColor;
  }
  set fillColor(color: string) {
    this.uniforms.fillColor = color;
    this.update();
  }

  get value(): number {
    return this.uniforms.value;
  }
  set value(value: number) {
    this.uniforms.value = value;
    this.update();
  }
}
