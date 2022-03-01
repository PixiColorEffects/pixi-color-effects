//  @ts-nocheck
import {
  Filter,
  utils,
  Texture,
  FilterSystem,
  RenderTexture,
  CLEAR_MODES,
  FilterState,
} from "pixi.js";
import { Mapping } from "@/filters/mapping";
import { LevelMapping } from "@/tools/level";

type Options = Record<string, 0>;

export class Levels extends Filter {
  private _imageData: ImageData;

  constructor(options: Options) {
    super(null, null);

    this._imageData = new ImageData(256, 1);
    this.options = options;
  }

  apply(
    filterManager: FilterSystem,
    input: RenderTexture,
    output: RenderTexture,
    clearMode?: CLEAR_MODES,
    _currentState?: FilterState
  ) {
    this._mapping.apply(filterManager, input, output, clearMode);
  }

  public update() {
    let paletteMap = this._imageData;
    this.uniforms.paletteMap = paletteMap;
    LevelMapping.fillPaletteMap(this.uniforms.options, paletteMap);
    if (!this._mapping) {
      this._mapping = new Mapping(this.uniforms.paletteMap);
    } else {
      this._mapping.paletteMap = this.uniforms.paletteMap;
    }
  }

  get options(): Options {
    return this.uniforms.options;
  }
  set options(value: Options) {
    this.uniforms.options = value;
    this.update();
  }
}
