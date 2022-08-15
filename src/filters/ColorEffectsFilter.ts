import { Filter } from "@pixi/core";
import { filters, PresetKey } from "@/filters/index";
import { omit } from "lodash-es";

type effectConfig = {
  name: keyof typeof filters | PresetKey;
  type: "filter" | "preset";
  args: Record<string, number>;
};

class ColorEffectsFilter extends Filter {
  effectName: keyof typeof filters | PresetKey;
  effectType: "filter" | "preset";

  constructor(...props: any) {
    super(...props);
  }

  private _getEffectArgs() {
    return Object.assign(
      {},
      omit(this.uniforms, [
        "uSampler",
        "globals",
        "filterGlobals",
        "px",
        "size",
        "paletteMap",
        "width",
        "height",
        "timer",
        "m",
      ])
    );
  }

  public getEffectConfig(): effectConfig {
    return {
      name: this.effectName,
      type: this.effectType,
      args: this._getEffectArgs(),
    };
  }
}

export { ColorEffectsFilter };
