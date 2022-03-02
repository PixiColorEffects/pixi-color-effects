import {
  Filter,
  FilterSystem,
  RenderTexture,
  CLEAR_MODES,
  FilterState,
} from "pixi.js";
import { filters } from "../index";
import { PresetKey, presetConfig } from "./preset";
import { Curves } from "@/filters/curves";
import { LevelMapping } from "@/tools/level";
import { Levels } from "@/filters/levels";

export class Preset extends Filter {
  private filtersArr: Array<typeof filters> = [];
  constructor(preset: PresetKey) {
    super(null, null);

    this.filtersArr = presetConfig[preset].map((f) => {
      if (f.name === "curves") {
        //  @ts-ignore
        return new Curves(f.value);
      }

      //  fill filter params
      if (f.name === "fill") {
        //  @ts-ignore
        const { value, fillColor, mode } = f.value;
        return new filters[f.name](value, fillColor, mode);
      }

      //  levels
      if (f.name === "levels") {
        const payload = f.value;
        const value = new LevelMapping(
          //  @ts-ignore
          Math.round(payload.minin * 1),
          //  @ts-ignore
          Math.round(255 - (255 - payload.maxin) * 1)
        );

        //  @ts-ignore
        return new Levels(value);
      }

      //  toning
      if (f.name === "toning") {
        //  @ts-ignore
        const { value, lightColor, darkColor } = f.value;
        return new filters[f.name](value, lightColor, darkColor);
      }

      //  desaturate
      if (f.name === "desaturate") {
        return new filters["saturation"](-1);
      }

      //  vignette
      if (f.name === "vignette") {
        if (f.value < 0) {
          return new filters.vignetteWhite(f.value as number);
        } else {
          return new filters.vignetteBlack(Math.abs(f.value as number));
        }
      }

      //  @ts-ignore
      return new filters[f.name](f.value);
    });
  }

  apply(
    filterManager: FilterSystem,
    input: RenderTexture,
    output: RenderTexture,
    clearMode?: CLEAR_MODES,
    _currentState?: FilterState
  ) {
    //  reference
    /*
    let rt = filterManager.getFilterTexture();
    this.filtersArr[0].apply(filterManager, input, rt, 0);

    let rt2 = filterManager.getFilterTexture();
    this.filtersArr[1].apply(filterManager, rt, rt2, 0);
    let rt3 = filterManager.getFilterTexture();
    this.filtersArr[2].apply(filterManager, rt2, rt3, 0);
    this.filtersArr[3].apply(filterManager, rt3, output, 0);
    */

    let textObj: Record<string, any> = {};
    for (let i = 0; i < this.filtersArr.length; i++) {
      if (i === 0) {
        if (this.filtersArr.length === 1) {
          //  @ts-ignore
          this.filtersArr[i].apply(filterManager, input, output, 0);
        } else {
          textObj[i] = filterManager.getFilterTexture();
          //  @ts-ignore
          this.filtersArr[i].apply(filterManager, input, textObj[i], 0);
        }
      } else if (i === this.filtersArr.length - 1) {
        //  @ts-ignore
        this.filtersArr[i].apply(filterManager, textObj[i - 1], output, 0);
      } else {
        textObj[i] = filterManager.getFilterTexture();
        //  @ts-ignore
        this.filtersArr[i].apply(filterManager, textObj[i - 1], textObj[i], 0);
      }
    }
  }
}
