//  @ts-ignore
import fragment from "./fragment.frag";
import { Filter, Texture } from "pixi.js";

export class Mapping extends Filter {
  constructor(paletteMap: ImageData) {
    super(null, fragment);

    this.paletteMap = paletteMap;
  }

  get paletteMap(): ImageData {
    return this.uniforms.paletteMap;
  }
  set paletteMap(value: ImageData) {
    const rawdata = new Uint8Array(Array.from(value.data)); // Uint8Array
    this.uniforms.paletteMap = Texture.fromBuffer(
      rawdata,
      rawdata.length / 4,
      1
    );
  }
}
