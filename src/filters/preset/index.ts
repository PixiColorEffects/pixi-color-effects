import {
  Filter,
  FilterSystem,
  RenderTexture,
  FilterState,
} from "@pixi/core";
import { CLEAR_MODES } from "@pixi/constants";
import { filters } from "../index";
import { PresetKey, presetConfig } from "./preset";
import { Curves } from "@/filters/curves";
import { LevelMapping } from "@/tools/level";
import { Levels } from "@/filters/levels";

export class Preset extends Filter {
  private filtersArr: Filter[] = [];
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
    //  https://github.com/pixijs/pixijs/discussions/8405
    const baseTexture = filterManager.getFilterTexture();
    const texturesArr = [baseTexture];

    for (let i = 0; i < this.filtersArr.length; i++) {
      if (i === 0) {
        this.filtersArr[i].apply(
            filterManager,
            input,
            baseTexture,
            1,
            _currentState
        );
      } else {
        const stackTexture = filterManager.getFilterTexture();
        texturesArr.push(stackTexture);
        this.filtersArr[i].apply(
            filterManager,
            texturesArr[i - 1],
            stackTexture,
            1
        );
      }
    }

    filterManager.applyFilter(
        this,
        texturesArr[texturesArr.length - 1],
        output,
        clearMode
    );

    texturesArr.reverse().map((t) => {
      filterManager.returnFilterTexture(t);
    });
  }
}
