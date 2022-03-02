import { filters } from "@/filters";
import GUI from "lil-gui";
import { Application } from "pixi.js";

export function useGuiControlsPanel(app: Application) {
  //  gen controls panel
  const gui = new GUI();

  const controls = {
    reset: () => {
      gui.reset(true);
      app.stage.filters = [];
    },
    filters: {
      vibrance: {
        enable: false,
        value: 0,
      },
      saturation: {
        enable: false,
        value: 0,
      },
      temperature: {
        enable: false,
        value: 0,
      },
      tint: {
        enable: false,
        value: 0,
      },
      hue: {
        enable: false,
        value: 0,
      },
      brightness: {
        enable: false,
        value: 0,
      },
      exposure: {
        enable: false,
        value: 0,
      },
      contrast: {
        enable: false,
        value: 0,
      },
      black: {
        enable: false,
        value: 0,
      },
      white: {
        enable: false,
        value: 0,
      },
      highlights: {
        enable: false,
        value: 0,
      },
      shadows: {
        enable: false,
        value: 0,
      },
      sharpen: {
        enable: false,
        value: 0,
        _valueMin: 0,
        _valueMax: 1,
      },
      clarity: {
        enable: false,
        value: 0,
      },
      smooth: {
        enable: false,
        value: 0,
        _valueMin: 0,
        _valueMax: 1,
      },
      blur: {
        enable: false,
        value: 0,
        _valueMin: 0,
        _valueMax: 1,
      },
      grain: {
        enable: false,
        value: 0,
        _valueMin: 0,
        _valueMax: 1,
      },
      vignetteWhite: {
        enable: false,
        value: 0,
        _valueMin: 0,
        _valueMax: 1,
      },
      vignetteBlack: {
        enable: false,
        value: 0,
        _valueMin: 0,
        _valueMax: 1,
      },
      glamour: {
        enable: false,
        value: 0,
        _valueMin: 0,
        _valueMax: 1,
      },
      bloom: {
        enable: false,
        value: 0,
        _valueMin: 0,
        _valueMax: 1,
      },
      dehaze: {
        enable: false,
        value: 0,
        _valueMin: 0,
        _valueMax: 1,
      },
      toning: {
        enable: false,
        value: 0,
        _valueMin: 0,
        _valueMax: 1,
        lightColor: "#f20",
        darkColor: "#f0f",
      },
      fill: {
        enable: false,
        value: 0,
        _valueMin: 0,
        _valueMax: 1,
        fillColor: "#f20",
        mode: "softLight",
        _modeOptions: [
          "default",
          "screen",
          "overlay",
          "multiply",
          "colorDodge",
          "colorBurn",
          "hardLight",
          "softLight",
          "vividLight",
        ],
      },
    },
  };

  //  set a filter name that used in event
  Object.keys(controls.filters).map((key) => {
    //  @ts-ignore
    controls.filters[key].__name = key;
  });

  gui.add(controls, "reset"); // button

  //  gen filter's controls panel
  for (const filter in controls.filters) {
    let name = filter.charAt(0).toUpperCase() + filter.slice(1);
    let filterName = filter as keyof typeof controls.filters;
    const folder = gui.addFolder(name).close();

    for (const key in controls.filters[filterName]) {
      //  @ts-ignore
      let value = controls.filters[filterName][key];

      if (key.charAt(0) === "_") {
        continue;
      }

      if (typeof value === "number") {
        //  @ts-ignore
        let min = controls.filters[filterName][`_${key}Min`] ?? -1;
        //  @ts-ignore
        let max = controls.filters[filterName][`_${key}Max`] ?? 1;
        folder.add(controls.filters[filterName], key, min, max, 0.05);
      } else if (value.charAt && value.charAt(0) === "#") {
        //  color
        folder.addColor(controls.filters[filterName], key);
      } else if (typeof value === "string") {
        //  select
        //  @ts-ignore
        let options = controls.filters[filterName][`_${key}Options`];
        if (options) {
          folder.add(controls.filters[filterName], key, options);
        }
      } else {
        folder.add(controls.filters[filterName], key);
      }
    }
  }

  //  event handler
  gui.onChange(({ property, value, object }) => {
    //  @ts-ignore
    let filterName = object.__name as keyof typeof filters;

    //  add or remove filter
    if (property === "enable") {
      if (value) {
        //  @ts-ignore
        app.stage.filters.push(new filters[filterName]());
      } else {
        let targetFilter = app.stage.filters.find((filter) => {
          return filter instanceof filters[filterName];
        });

        let index = app.stage.filters.indexOf(targetFilter);

        app.stage.filters.splice(index, 1);
      }
    } else {
      //  @ts-ignore
      if (!object.enable) return;

      let targetFilter = app.stage.filters.find((filter) => {
        return filter instanceof filters[filterName];
      });

      //  @ts-ignore
      targetFilter[property] = value;
    }
  });

  return gui
}
