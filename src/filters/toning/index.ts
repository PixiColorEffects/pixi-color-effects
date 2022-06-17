//  @ts-ignore
import fragment from "./fragment.frag";
import { Filter, Texture } from "@pixi/core";
import { hex2rgb, string2hex } from "@pixi/utils";

export class Toning extends Filter {
  private _imageData: ImageData;

  constructor(
    value: number = 0,
    lightColor: string = "#ff2200",
    darkColor: string = "#ff00ff"
  ) {
    super(null, fragment);

    this._imageData = new ImageData(256, 1);
    this.value = value;
    this.lightColor = lightColor;
    this.darkColor = darkColor;
  }

  public update() {
    //  https://github.com/pixijs/pixijs/issues/5484#issuecomment-470022698
    const [r, g, b] = hex2rgb(string2hex(this.uniforms.lightColor));
    const [rDark, gDark, bDark] = hex2rgb(
      string2hex(this.uniforms.darkColor)
    );

    let paletteMap = this._imageData;
    Toning.fillPaletteMap(
      {
        value: this.uniforms.value,
        lightColor: { r: r * 255, g: g * 255, b: b * 255 },
        darkColor: { r: rDark * 255, g: gDark * 255, b: bDark * 255 },
      },
      paletteMap
    );

    const rawdata = new Uint8Array(Array.from(paletteMap.data)); // Uint8Array
    this.uniforms.paletteMap = Texture.fromBuffer(
      rawdata,
      rawdata.length / 4,
      1
    );
  }

  get value(): number {
    return this.uniforms.value;
  }
  set value(value: number) {
    this.uniforms.value = value;
    this.update();
  }

  get lightColor(): string {
    return this.uniforms.lightColor;
  }
  set lightColor(value: string) {
    this.uniforms.lightColor = value;
    this.update();
  }

  get darkColor(): string {
    return this.uniforms.darkColor;
  }
  set darkColor(value: string) {
    this.uniforms.darkColor = value;
    this.update();
  }

  static fillPaletteMap(
    payload: {
      value: number;
      lightColor: { r: number; g: number; b: number };
      darkColor: { r: number; g: number; b: number };
    },
    image: ImageData
  ) {
    for (let s = 0; s < 256; ++s) {
      let i = s / 255;
      image.data[4 * s] = Math.round(
        payload.lightColor.r * i + payload.darkColor.r * (1 - i)
      );
      image.data[4 * s + 1] = Math.round(
        payload.lightColor.g * i + payload.darkColor.g * (1 - i)
      );
      image.data[4 * s + 2] = Math.round(
        payload.lightColor.b * i + payload.darkColor.b * (1 - i)
      );
    }
  }
}
