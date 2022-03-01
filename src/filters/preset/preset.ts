export type PresetKey = keyof typeof presetConfig;
export const presetConfig = {
  flower: [
    {
      name: "vibrance",
      value: 0.2,
    },
    {
      name: "saturation",
      value: 0.1,
    },
    {
      name: "temperature",
      value: 0.1,
    },
  ],
  forest: [
    {
      name: "saturation",
      value: -0.2,
    },
    {
      name: "vibrance",
      value: 1,
    },
    {
      name: "clarity",
      value: 0.2,
    },
    {
      name: "temperature",
      value: 0.16,
    },
    {
      name: "tint",
      value: 0.2,
    },
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 65, 52, 173, 190, 236, 255],
          [0, 0, 255, 255],
          [0, 0, 255, 255],
          [0, 0, 255, 255],
        ],
      },
    },
  ],
  beach: [
    {
      name: "saturation",
      value: 0.2,
    },
    {
      name: "vibrance",
      value: 0.2,
    },
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 68, 56, 199, 208, 255, 255],
          [0, 0, 255, 255],
          [0, 0, 98, 97, 196, 201, 255, 255],
          [0, 0, 87, 85, 201, 182, 255, 255],
        ],
      },
    },
    {
      name: "temperature",
      value: 0.1,
    },
  ],
  sham: [
    {
      name: "saturation",
      value: -0.3,
    },
    {
      name: "fill",
      value: {
        value: 0.3,
        mode: "overlay",
        fillColor: "#99ddff",
      },
    },
    {
      name: "curves",
      value: {
        preset: [
          [60, 31, 191, 217],
          [0, 0, 120, 134, 255, 255],
          [0, 0, 255, 255],
          [0, 0, 120, 144, 255, 255],
        ],
      },
    },
  ],
  stalker: [
    {
      name: "curves",
      value: {
        preset: [
          [62, 64, 190, 191],
          [0, 0, 133, 125, 255, 255],
          [0, 0, 54, 65, 209, 208, 255, 255],
          [60, 62, 96, 99, 240, 230, 255, 255],
        ],
      },
    },
    {
      name: "contrast",
      value: 0.1,
    },
    {
      name: "saturation",
      value: -0.2,
    },
  ],
  shimmer: [
    {
      name: "temperature",
      value: -0.2,
    },
    {
      name: "tint",
      value: -0.12,
    },
    {
      name: "fill",
      value: {
        value: 0.12,
        mode: "screen",
        fillColor: "#be0bff",
      },
    },
    {
      name: "curves",
      value: {
        preset: [
          [8, 23, 244, 227],
          [0, 0, 255, 255],
          [0, 0, 131, 124, 255, 255],
          [0, 0, 149, 112, 255, 255],
        ],
      },
    },
  ],
  mold: [
    {
      name: "curves",
      value: {
        preset: [
          [65, 64, 233, 233],
          [0, 0, 138, 121, 255, 255],
          [0, 0, 60, 75, 184, 184, 255, 255],
          [0, 0, 64, 75, 181, 176, 255, 255],
        ],
      },
    },
    {
      name: "contrast",
      value: 0.1,
    },
    {
      name: "saturation",
      value: -0.12,
    },
  ],
  style: [
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 73, 74, 191, 177, 235, 221, 255, 255],
          [0, 26, 89, 64, 121, 126, 180, 213, 255, 255],
          [0, 0, 71, 50, 190, 210, 255, 255],
          [61, 64, 112, 97, 199, 198, 255, 255],
        ],
      },
    },
    {
      name: "vibrance",
      value: -0.1,
    },
    {
      name: "saturation",
      value: -0.4,
    },
    {
      name: "temperature",
      value: 0.1,
    },
  ],
  cement: [
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 73, 74, 191, 177, 235, 221, 255, 255],
          [0, 0, 255, 255],
          [0, 0, 60, 54, 198, 210, 255, 255],
          [0, 0, 73, 37, 150, 149, 199, 198, 255, 255],
        ],
      },
    },
    {
      name: "vibrance",
      value: -0.1,
    },
    {
      name: "saturation",
      value: -0.1,
    },
  ],
  sharp: [
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 42, 20, 199, 218, 224, 246, 255, 255],
          [0, 0, 255, 255],
          [0, 0, 255, 255],
          [0, 0, 255, 255],
        ],
      },
    },
    {
      name: "vibrance",
      value: 0.1,
    },
    {
      name: "sharpen",
      value: 0.1,
    },
    {
      name: "clarity",
      value: 0.1,
    },
  ],
  corn: [
    {
      name: "temperature",
      value: 0.1,
    },
    {
      name: "vibrance",
      value: 0.3,
    },
    {
      name: "contrast",
      value: 0.1,
    },
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 66, 78, 255, 255],
          [0, 0, 255, 255],
          [0, 0, 255, 255],
          [0, 0, 255, 255],
        ],
      },
    },
  ],
  morning: [
    {
      name: "tint",
      value: 0.18,
    },
    {
      name: "temperature",
      value: 0.1,
    },
    {
      name: "highlights",
      value: 0.08,
    },
    {
      name: "levels",
      value: {
        minin: 0,
        maxin: 245,
        minout: 0,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
    {
      name: "curves",
      value: {
        preset: [
          [64, 64, 150, 181, 254, 255],
          [0, 0, 122, 138, 255, 255],
          [0, 0, 255, 255],
          [0, 0, 255, 255],
        ],
      },
    },
    {
      name: "fill",
      value: {
        value: 0.2,
        mode: "overlay",
        fillColor: "#c27829",
      },
    },
  ],
  ensalat: [
    {
      name: "highlights",
      value: 0.2,
    },
    {
      name: "shadows",
      value: -0.2,
    },
    {
      name: "brightness",
      value: 0.1,
    },
    {
      name: "levels",
      value: {
        minin: 10,
        maxin: 245,
        minout: 0,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 135, 119, 191, 193, 255, 255],
          [0, 0, 255, 255],
          [0, 0, 129, 121, 255, 255],
          [0, 0, 255, 255],
        ],
      },
    },
    {
      name: "clarity",
      value: 0.2,
    },
    {
      name: "sharpen",
      value: 0.15,
    },
  ],
  berry: [
    {
      name: "vibrance",
      value: 0.44,
    },
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 62, 66, 121, 135, 255, 255],
          [0, 0, 255, 255],
          [0, 0, 255, 255],
          [0, 0, 255, 255],
        ],
      },
    },
    {
      name: "contrast",
      value: 0.2,
    },
    {
      name: "highlights",
      value: 0.4,
    },
    {
      name: "shadows",
      value: -0.2,
    },
    {
      name: "levels",
      value: {
        minin: 20,
        maxin: 255,
        minout: 0,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
  ],
  gritty: [
    {
      name: "saturation",
      value: -0.4,
    },
    {
      name: "levels",
      value: {
        minin: 20,
        maxin: 255,
        minout: 0,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 50, 33, 128, 112, 190, 215, 255, 255],
          [0, 0, 255, 255],
          [0, 0, 255, 255],
          [0, 0, 255, 255],
        ],
      },
    },
    {
      name: "clarity",
      value: 1,
    },
    {
      name: "grain",
      value: 0.3,
    },
  ],
  sunny: [
    {
      name: "fill",
      value: {
        value: 0.2,
        mode: "overlay",
        fillColor: "#ffc260",
      },
    },
    {
      name: "temperature",
      value: 0.1,
    },
    {
      name: "glamour",
      value: 0.4,
    },
    {
      name: "clarity",
      value: 0.3,
    },
  ],
  film: [
    {
      name: "sharpen",
      value: 0.2,
    },
    {
      name: "glamour",
      value: 0.5,
    },
    {
      name: "grain",
      value: 0.5,
    },
    {
      name: "highlights",
      value: -0.2,
    },
    {
      name: "shadows",
      value: -0.2,
    },
    {
      name: "saturation",
      value: -0.2,
    },
  ],
  matte: [
    {
      name: "curves",
      value: {
        preset: [
          [0, 50, 38, 56, 79, 82, 152, 153, 255, 255],
          [0, 0, 255, 255],
          [0, 0, 255, 255],
          [0, 0, 255, 255],
        ],
      },
    },
    {
      name: "contrast",
      value: 0.12,
    },
    {
      name: "saturation",
      value: -0.1,
    },
  ],
  deep: [
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 117, 99, 191, 198, 255, 255],
          [0, 0, 71, 38, 177, 209, 255, 255],
          [0, 0, 236, 255],
          [0, 28, 75, 101, 190, 171, 254, 233],
        ],
      },
    },
    {
      name: "saturation",
      value: -0.3,
    },
  ],
  aladin: [
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 255, 255],
          [0, 52, 87, 99, 255, 255],
          [0, 0, 106, 107, 194, 190, 254, 212],
          [0, 0, 166, 129, 254, 142],
        ],
      },
    },
  ],
  amber: [
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 255, 255],
          [0, 0, 98, 150, 255, 255],
          [0, 0, 138, 117, 255, 255],
          [0, 128, 254, 129],
        ],
      },
    },
  ],
  anne: [
    {
      name: "contrast",
      value: 0.25,
    },
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 255, 255],
          [0, 0, 78, 66, 135, 171, 255, 255],
          [0, 0, 99, 87, 180, 208, 255, 255],
          [0, 0, 94, 93, 171, 161, 255, 255],
        ],
      },
    },
  ],
  antonio: [
    {
      name: "glamour",
      value: 0.8,
    },
  ],
  alex: [
    {
      name: "glamour",
      value: 0.6,
    },
  ],
  bob: [
    {
      name: "saturation",
      value: -0.6,
    },
    {
      name: "highlights",
      value: 0.5,
    },
  ],
  greg: [
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 255, 255],
          [0, 0, 74, 50, 181, 198, 255, 255],
          [0, 0, 61, 41, 108, 170, 158, 207, 254, 208],
          [0, 0, 83, 56, 168, 204, 255, 255],
        ],
      },
    },
  ],
  hagrid: [
    {
      name: "vibrance",
      value: 0.9,
    },
    {
      name: "saturation",
      value: 0.1,
    },
    {
      name: "clarity",
      value: 0.5,
    },
    {
      name: "shadows",
      value: -0.3,
    },
  ],
  harry: [
    {
      name: "fill",
      value: {
        value: 0.7,
        mode: "overlay",
        fillColor: "#d6b277",
      },
    },
    {
      name: "grain",
      value: 0.5,
    },
  ],
  ivan: [
    {
      name: "fill",
      value: {
        value: 0.4,
        mode: "overlay",
        fillColor: "#ff0044",
      },
    },
    {
      name: "shadows",
      value: 0.15,
    },
    {
      name: "levels",
      value: {
        minin: 6,
        maxin: 255,
        minout: 0,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
  ],
  jean: [
    {
      name: "levels",
      value: {
        minin: 56,
        maxin: 233,
        minout: 0,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
    {
      name: "saturation",
      value: -1,
    },
    {
      name: "tint",
      value: 0.1,
    },
    {
      name: "exposure",
      value: 0.78,
    },
    {
      name: "bloom",
      value: 0.1,
    },
  ],
  josh: [
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 78, 52, 175, 207, 255, 255],
          [0, 0, 255, 255],
          [0, 0, 255, 255],
          [0, 64, 87, 129, 254, 193],
        ],
      },
    },
  ],
  karen: [
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 255, 255],
          [0, 0, 89, 144, 255, 255],
          [0, 0, 138, 112, 255, 255],
          [0, 0, 162, 88, 255, 255],
        ],
      },
    },
  ],
  lucas: [
    {
      name: "tint",
      value: 1,
    },
    {
      name: "saturation",
      value: -0.85,
    },
    {
      name: "contrast",
      value: 0.4,
    },
    {
      name: "shadows",
      value: 1,
    },
    {
      name: "temperature",
      value: 0.1,
    },
  ],
  melissa: [
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 255, 255],
          [0, 62, 255, 255],
          [0, 0, 255, 255],
          [0, 61, 254, 193],
        ],
      },
    },
  ],
  peter: [
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 255, 255],
          [0, 6, 31, 20, 65, 26, 87, 51, 195, 190, 254, 230],
          [0, 11, 24, 27, 102, 131, 189, 195, 255, 255],
          [0, 40, 126, 148, 254, 177],
        ],
      },
    },
  ],
  salomon: [
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 255, 255],
          [0, 0, 83, 50, 177, 213, 255, 255],
          [0, 0, 69, 55, 186, 205, 255, 255],
          [11, 56, 254, 212],
        ],
      },
    },
    {
      name: "contrast",
      value: -0.2,
    },
  ],
  sara: [
    {
      name: "vibrance",
      value: 1,
    },
    {
      name: "contrast",
      value: 0.1,
    },
    {
      name: "highlights",
      value: 0.3,
    },
  ],
  sophia: [
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 255, 255],
          [0, 0, 140, 116, 222, 254],
          [0, 0, 70, 59, 182, 201, 255, 255],
          [0, 29, 252, 227],
        ],
      },
    },
    {
      name: "saturation",
      value: 0.3,
    },
  ],
  tony: [
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 255, 255],
          [0, 0, 92, 42, 218, 252],
          [0, 0, 73, 75, 157, 194, 255, 255],
          [0, 27, 254, 227],
        ],
      },
    },
  ],
  agnes: [
    {
      name: "desaturate",
      value: 1,
    },
    {
      name: "contrast",
      value: 0.5,
    },
  ],
  conny: [
    {
      name: "saturation",
      value: -0.55,
    },
    {
      name: "temperature",
      value: 0.25,
    },
    {
      name: "brightness",
      value: -0.25,
    },
    {
      name: "levels",
      value: {
        minin: 14,
        maxin: 233,
        minout: 0,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
    {
      name: "exposure",
      value: 0.35,
    },
    {
      name: "highlights",
      value: -0.9,
    },
  ],
  gordon: [
    {
      name: "desaturate",
      value: 1,
    },
    {
      name: "temperature",
      value: 0.7,
    },
    {
      name: "tint",
      value: 0.3,
    },
    {
      name: "saturation",
      value: -0.2,
    },
  ],
  harrison: [
    {
      name: "toning",
      value: {
        value: 1,
        lightColor: "#fff0d7",
        darkColor: "#301a18",
      },
    },
    {
      name: "grain",
      value: 0.2,
    },
  ],
  henry: [
    {
      name: "toning",
      value: {
        value: 1,
        lightColor: "#fff0d7",
        darkColor: "#301a18",
      },
    },
    {
      name: "saturation",
      value: -0.5,
    },
  ],
  logan: [
    {
      name: "glamour",
      value: 0.5,
    },
    {
      name: "tint",
      value: 0.4,
    },
    {
      name: "saturation",
      value: -0.35,
    },
    {
      name: "toning",
      value: {
        value: 0.8,
        lightColor: "#fff0d7",
        darkColor: "#301a18",
      },
    },
  ],
  olay: [
    {
      name: "saturation",
      value: -1,
    },
    {
      name: "grain",
      value: 0.5,
    },
    {
      name: "vignette",
      value: 0.5,
    },
  ],
  porter: [
    {
      name: "saturation",
      value: -1,
    },
    {
      name: "vignette",
      value: 0.4,
    },
    {
      name: "levels",
      value: {
        minin: 50,
        maxin: 205,
        minout: 0,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
  ],
  tom: [
    {
      name: "desaturate",
      value: 1,
    },
  ],
  sampi: [
    {
      name: "toning",
      value: {
        value: 1,
        lightColor: "#ffe4c4",
        darkColor: "#000000",
      },
    },
    {
      name: "levels",
      value: {
        minin: 0,
        maxin: 217,
        minout: 0,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
    {
      name: "temperature",
      value: 0.3,
    },
  ],
  vinny: [
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 133, 111, 255, 255],
          [0, 0, 255, 255],
          [0, 0, 255, 255],
          [0, 0, 133, 138, 255, 255],
        ],
      },
    },
    {
      name: "vibrance",
      value: -1,
    },
    {
      name: "saturation",
      value: 1,
    },
    {
      name: "temperature",
      value: 0.8,
    },
    {
      name: "contrast",
      value: -0.1,
    },
    {
      name: "highlights",
      value: 0.1,
    },
  ],
  borg: [
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 255, 255],
          [0, 0, 94, 66, 227, 255],
          [0, 0, 93, 94, 179, 198, 255, 255],
          [0, 19, 254, 228],
        ],
      },
    },
    {
      name: "fill",
      value: {
        value: 0.1,
        mode: "default",
        fillColor: "#ccff00",
      },
    },
  ],
  carl: [
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 255, 255],
          [0, 0, 93, 64, 227, 255],
          [0, 0, 93, 94, 181, 189, 255, 255],
          [0, 19, 254, 228],
        ],
      },
    },
    {
      name: "vignette",
      value: 0.3,
    },
    {
      name: "contrast",
      value: 0.15,
    },
    {
      name: "saturation",
      value: -0.3,
    },
  ],
  coco: [
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 255, 255],
          [0, 0, 64, 97, 255, 255],
          [0, 0, 142, 122, 255, 255],
          [0, 0, 144, 112, 255, 255],
        ],
      },
    },
  ],
  doris: [
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 255, 255],
          [0, 0, 78, 48, 177, 209, 255, 255],
          [0, 0, 92, 94, 179, 208, 255, 255],
          [0, 52, 254, 215],
        ],
      },
    },
    {
      name: "saturation",
      value: -0.2,
    },
  ],
  doug: [
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 255, 255],
          [0, 64, 255, 255],
          [0, 0, 255, 255],
          [1, 64, 252, 193],
        ],
      },
    },
  ],
  earl: [
    {
      name: "vignette",
      value: 0.4,
    },
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 255, 255],
          [0, 0, 222, 254],
          [0, 47, 223, 254],
          [0, 129, 222, 255],
        ],
      },
    },
    {
      name: "fill",
      value: {
        value: 0.8,
        mode: "multiply",
        fillColor: "#f7daae",
      },
    },
  ],
  kevin: [
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 255, 255],
          [0, 0, 75, 164, 126, 212, 255, 255],
          [1, 37, 111, 147, 217, 217],
          [73, 80, 149, 111, 200, 173],
        ],
      },
    },
    {
      name: "contrast",
      value: 0.15,
    },
  ],
  nash: [
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 255, 255],
          [0, 0, 221, 255],
          [0, 48, 222, 252],
          [0, 129, 226, 255],
        ],
      },
    },
    {
      name: "fill",
      value: {
        value: 1,
        mode: "multiply",
        fillColor: "#f7daae",
      },
    },
    {
      name: "levels",
      value: {
        minin: 0,
        maxin: 225,
        minout: 0,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
  ],
  stan: [
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 69, 54, 180, 199, 255, 255],
          [0, 117, 64, 158, 147, 185, 208, 228, 255, 255],
          [0, 69, 101, 131, 180, 182, 209, 224, 254, 233],
          [1, 87, 83, 110, 168, 149, 215, 145, 254, 184],
        ],
      },
    },
  ],
  sun: [
    {
      name: "fill",
      value: {
        value: 0.8,
        mode: "multiply",
        fillColor: "#fbf2a3",
      },
    },
    {
      name: "vignette",
      value: -0.25,
    },
  ],
  "bd orange": [
    {
      name: "curves",
      value: {
        preset: [
          [
            1, 34, 43, 43, 77, 70, 97, 108, 138, 158, 173, 184, 223, 208, 254,
            231,
          ],
          [28, 3, 55, 38, 110, 92, 152, 148, 201, 208, 255, 255],
          [0, 0, 62, 55, 193, 189, 255, 255],
          [0, 27, 55, 75, 116, 110, 190, 149, 254, 163],
        ],
      },
    },
    {
      name: "grain",
      value: 0.33,
    },
  ],
  blues: [
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 255, 255],
          [0, 0, 77, 54, 181, 207, 255, 255],
          [0, 0, 73, 51, 180, 209, 255, 255],
          [0, 0, 54, 75, 201, 185, 255, 255],
        ],
      },
    },
  ],
  country: [
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 84, 74, 115, 105, 255, 255],
          [0, 0, 73, 80, 93, 124, 255, 255],
          [0, 0, 50, 34, 93, 105, 119, 142, 255, 255],
          [0, 0, 85, 85, 125, 112, 255, 255],
        ],
      },
    },
  ],
  lemonpell: [
    {
      name: "curves",
      value: {
        preset: [
          [0, 36, 80, 84, 156, 190, 255, 255],
          [0, 0, 255, 255],
          [0, 0, 103, 105, 158, 176, 255, 255],
          [0, 19, 107, 83, 198, 196, 255, 255],
        ],
      },
    },
  ],
  joyful: [
    {
      name: "vibrance",
      value: 0.3,
    },
    {
      name: "saturation",
      value: 0.4,
    },
    {
      name: "temperature",
      value: -0.35,
    },
    {
      name: "tint",
      value: 0.8,
    },
    {
      name: "exposure",
      value: 0.3,
    },
  ],
  "tiny dc": [
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 255, 255],
          [0, 0, 79, 46, 199, 217, 255, 255],
          [9, 1, 110, 126, 254, 232],
          [0, 46, 92, 103, 191, 158, 254, 205],
        ],
      },
    },
    {
      name: "grain",
      value: 0.3,
    },
  ],
  sheberios: [
    {
      name: "temperature",
      value: 0.5,
    },
    {
      name: "saturation",
      value: 0.25,
    },
  ],
  superone: [
    {
      name: "toning",
      value: {
        value: 0.8,
        lightColor: "#ffd899",
        darkColor: "#4d0033",
      },
    },
    {
      name: "levels",
      value: {
        minin: 50,
        maxin: 175,
        minout: 0,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
  ],
  tonola: [
    {
      name: "toning",
      value: {
        value: 0.8,
        lightColor: "#ddff99",
        darkColor: "#4d0033",
      },
    },
    {
      name: "levels",
      value: {
        minin: 26,
        maxin: 213,
        minout: 0,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
    {
      name: "saturation",
      value: 0.36,
    },
    {
      name: "temperature",
      value: 0.22,
    },
  ],
  reddish: [
    {
      name: "toning",
      value: {
        value: 0.8,
        lightColor: "#ffd693",
        darkColor: "#6e2500",
      },
    },
    {
      name: "contrast",
      value: 0.3,
    },
    {
      name: "highlights",
      value: 1,
    },
  ],
  fellowing: [
    {
      name: "toning",
      value: {
        value: 0.8,
        lightColor: "#ffd899",
        darkColor: "#4d2f00",
      },
    },
    {
      name: "levels",
      value: {
        minin: 24,
        maxin: 203,
        minout: 0,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
    {
      name: "contrast",
      value: 0.14,
    },
    {
      name: "saturation",
      value: 0.3,
    },
    {
      name: "temperature",
      value: 0.18,
    },
  ],
  grassland: [
    {
      name: "toning",
      value: {
        value: 0.7,
        lightColor: "#ddff99",
        darkColor: "#004d19",
      },
    },
    {
      name: "levels",
      value: {
        minin: 18,
        maxin: 227,
        minout: 0,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
    {
      name: "contrast",
      value: 0.16,
    },
  ],
  springs: [
    {
      name: "toning",
      value: {
        value: 1,
        lightColor: "#ddff99",
        darkColor: "#001a26",
      },
    },
    {
      name: "highlights",
      value: 1,
    },
    {
      name: "levels",
      value: {
        minin: 40,
        maxin: 155,
        minout: 0,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
    {
      name: "shadows",
      value: 1,
    },
  ],
  justblues: [
    {
      name: "toning",
      value: {
        value: 0.79,
        lightColor: "#c6ecff",
        darkColor: "#1a004d",
      },
    },
    {
      name: "levels",
      value: {
        minin: 16,
        maxin: 189,
        minout: 0,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
    {
      name: "saturation",
      value: 0.2,
    },
    {
      name: "contrast",
      value: 0.2,
    },
  ],
  bluesteel: [
    {
      name: "toning",
      value: {
        value: 0.8,
        lightColor: "#ffd899",
        darkColor: "#1a004d",
      },
    },
    {
      name: "levels",
      value: {
        minin: 0,
        maxin: 215,
        minout: 12,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
  ],
  flowerpot: [
    {
      name: "toning",
      value: {
        value: 0.8,
        lightColor: "#ff99dd",
        darkColor: "#334d00",
      },
    },
    {
      name: "levels",
      value: {
        minin: 22,
        maxin: 215,
        minout: 0,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
    {
      name: "vignette",
      value: -0.2,
    },
  ],
  stinker: [
    {
      name: "toning",
      value: {
        value: 0.8,
        lightColor: "#ffd899",
        darkColor: "#1a004d",
      },
    },
    {
      name: "levels",
      value: {
        minin: 0,
        maxin: 247,
        minout: 8,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
    {
      name: "brightness",
      value: 0.14,
    },
    {
      name: "contrast",
      value: 0.4,
    },
  ],
  violiin: [
    {
      name: "contrast",
      value: 0.32,
    },
    {
      name: "toning",
      value: {
        value: 1,
        lightColor: "#c3a6ff",
        darkColor: "#210000",
      },
    },
    {
      name: "levels",
      value: {
        minin: 22,
        maxin: 223,
        minout: 0,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
    {
      name: "exposure",
      value: 0.22,
    },
    {
      name: "brightness",
      value: 0.12,
    },
  ],
  blupur: [
    {
      name: "toning",
      value: {
        value: 0.8,
        lightColor: "#ff99dd",
        darkColor: "#074461",
      },
    },
    {
      name: "vibrance",
      value: 0.7,
    },
    {
      name: "contrast",
      value: 0.3,
    },
  ],
  beyllo: [
    {
      name: "vibrance",
      value: 1,
    },
    {
      name: "saturation",
      value: 1,
    },
    {
      name: "temperature",
      value: -0.55,
    },
    {
      name: "tint",
      value: 0.1,
    },
    {
      name: "levels",
      value: {
        minin: 0,
        maxin: 255,
        minout: 24,
        maxout: 249,
        midin: 1,
        mid: 0.5,
      },
    },
    {
      name: "toning",
      value: {
        value: 0.76,
        lightColor: "#ffd500",
        darkColor: "#7d0354",
      },
    },
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 255, 255],
          [0, 0, 131, 115, 255, 255],
          [0, 0, 136, 128, 255, 255],
          [0, 0, 122, 145, 255, 255],
        ],
      },
    },
    {
      name: "vignette",
      value: 0.28,
    },
  ],
  wifortress: [
    {
      name: "toning",
      value: {
        value: 1,
        lightColor: "#6cceff",
        darkColor: "#001a26",
      },
    },
    {
      name: "highlights",
      value: 1,
    },
    {
      name: "levels",
      value: {
        minin: 40,
        maxin: 155,
        minout: 0,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
    {
      name: "shadows",
      value: 1,
    },
  ],
  vib: [
    {
      name: "vibrance",
      value: 0.1,
    },
    {
      name: "saturation",
      value: 0.5,
    },
    {
      name: "brightness",
      value: 0.1,
    },
    {
      name: "temperature",
      value: 0.5,
    },
    {
      name: "levels",
      value: {
        minin: 12,
        maxin: 253,
        minout: 0,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
    {
      name: "highlights",
      value: 0.2,
    },
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 255, 255],
          [0, 0, 70, 80, 198, 181, 255, 255],
          [0, 0, 140, 135, 255, 255],
          [0, 0, 74, 96, 200, 172, 255, 255],
        ],
      },
    },
    {
      name: "toning",
      value: {
        value: 0.07,
        lightColor: "#ffeed2",
        darkColor: "#360606",
      },
    },
    {
      name: "contrast",
      value: -0.1,
    },
  ],
  ranguit: [
    {
      name: "saturation",
      value: 0.22,
    },
    {
      name: "temperature",
      value: 0.96,
    },
    {
      name: "tint",
      value: -0.28,
    },
    {
      name: "contrast",
      value: 0.14,
    },
    {
      name: "brightness",
      value: -0.2,
    },
    {
      name: "levels",
      value: {
        minin: 0,
        maxin: 237,
        minout: 56,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
    {
      name: "toning",
      value: {
        value: 0.26,
        lightColor: "#ddff99",
        darkColor: "#292321",
      },
    },
  ],
  rangeen: [
    {
      name: "vibrance",
      value: 1,
    },
    {
      name: "saturation",
      value: 0.46,
    },
    {
      name: "temperature",
      value: 0.36,
    },
    {
      name: "levels",
      value: {
        minin: 0,
        maxin: 251,
        minout: 14,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
    {
      name: "shadows",
      value: 0.34,
    },
    {
      name: "highlights",
      value: 0.12,
    },
    {
      name: "toning",
      value: {
        value: 0.12,
        lightColor: "#79ffe0",
        darkColor: "#f5166b",
      },
    },
    {
      name: "contrast",
      value: -0.1,
    },
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 144, 152, 255, 255],
          [0, 0, 136, 107, 255, 255],
          [0, 0, 115, 102, 255, 255],
          [0, 0, 106, 91, 255, 255],
        ],
      },
    },
  ],
  creamlow: [
    {
      name: "vibrance",
      value: 0.82,
    },
    {
      name: "saturation",
      value: -0.24,
    },
    {
      name: "temperature",
      value: 1,
    },
    {
      name: "tint",
      value: 0.78,
    },
    {
      name: "contrast",
      value: -0.3,
    },
    {
      name: "levels",
      value: {
        minin: 40,
        maxin: 247,
        minout: 0,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
    {
      name: "highlights",
      value: 0.64,
    },
    {
      name: "toning",
      value: {
        value: 0.29,
        lightColor: "#ddff99",
        darkColor: "#912709",
      },
    },
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 5, 13, 78, 83, 172, 162, 255, 255],
          [0, 0, 255, 255],
          [0, 0, 131, 120, 255, 255],
          [0, 0, 68, 61, 175, 184, 255, 255],
        ],
      },
    },
  ],
  sven: [
    {
      name: "vibrance",
      value: 0.7,
    },
    {
      name: "temperature",
      value: 0.5,
    },
    {
      name: "tint",
      value: 0.3,
    },
    {
      name: "exposure",
      value: 0.2,
    },
    {
      name: "contrast",
      value: -0.2,
    },
    {
      name: "levels",
      value: {
        minin: 4,
        maxin: 255,
        minout: 0,
        maxout: 235,
        midin: 1,
        mid: 0.5,
      },
    },
    {
      name: "highlights",
      value: -0.3,
    },
    {
      name: "shadows",
      value: 0.3,
    },
    {
      name: "grain",
      value: 0.3,
    },
    {
      name: "vignette",
      value: 0.45,
    },
  ],
  yenely: [
    {
      name: "tint",
      value: 0.5,
    },
    {
      name: "levels",
      value: {
        minin: 0,
        maxin: 235,
        minout: 20,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
    {
      name: "saturation",
      value: -0.62,
    },
    {
      name: "contrast",
      value: -0.3,
    },
    {
      name: "shadows",
      value: -0.6,
    },
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 148, 105, 255, 255],
          [0, 0, 92, 79, 128, 227, 255, 255],
          [0, 0, 74, 103, 119, 172, 255, 255],
          [0, 0, 111, 148, 255, 255],
        ],
      },
    },
    {
      name: "highlights",
      value: 1,
    },
    {
      name: "brightness",
      value: 0.14,
    },
    {
      name: "temperature",
      value: 0.3,
    },
    {
      name: "vibrance",
      value: 1,
    },
    {
      name: "exposure",
      value: -0.1,
    },
  ],
  ragwarm: [
    {
      name: "temperature",
      value: 0.62,
    },
    {
      name: "levels",
      value: {
        minin: 32,
        maxin: 255,
        minout: 0,
        maxout: 243,
        midin: 1,
        mid: 0.5,
      },
    },
    {
      name: "highlights",
      value: -0.14,
    },
    {
      name: "vignette",
      value: 0.28,
    },
    {
      name: "toning",
      value: {
        value: 0.07,
        lightColor: "#99ffbb",
        darkColor: "#15378f",
      },
    },
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 126, 125, 255, 255],
          [0, 0, 255, 255],
          [0, 0, 130, 121, 255, 255],
          [0, 0, 138, 124, 255, 255],
        ],
      },
    },
  ],
  greered: [
    {
      name: "vibrance",
      value: 0.32,
    },
    {
      name: "temperature",
      value: 0.4,
    },
    {
      name: "tint",
      value: -0.5,
    },
    {
      name: "brightness",
      value: 0.24,
    },
    {
      name: "contrast",
      value: -0.1,
    },
    {
      name: "vignette",
      value: 0.31,
    },
    {
      name: "shadows",
      value: 0.38,
    },
  ],
  danligter: [
    {
      name: "saturation",
      value: 0.86,
    },
    {
      name: "temperature",
      value: -1,
    },
    {
      name: "tint",
      value: -0.92,
    },
    {
      name: "brightness",
      value: 0.22,
    },
    {
      name: "exposure",
      value: 0.22,
    },
    {
      name: "contrast",
      value: 0.1,
    },
    {
      name: "levels",
      value: {
        minin: 0,
        maxin: 239,
        minout: 0,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
    {
      name: "highlights",
      value: -0.12,
    },
    {
      name: "dehaze",
      value: -0.12,
    },
    {
      name: "toning",
      value: {
        value: 0.14,
        lightColor: "#ffd899",
        darkColor: "#00344d",
      },
    },
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 255, 255],
          [0, 0, 96, 115, 162, 194, 255, 255],
          [0, 0, 101, 97, 185, 189, 255, 255],
          [0, 0, 144, 130, 222, 228, 255, 255],
        ],
      },
    },
  ],
  trotto: [
    {
      name: "vibrance",
      value: 1,
    },
    {
      name: "saturation",
      value: -0.34,
    },
    {
      name: "temperature",
      value: 1,
    },
    {
      name: "tint",
      value: -0.26,
    },
    {
      name: "levels",
      value: {
        minin: 24,
        maxin: 229,
        minout: 0,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
    {
      name: "shadows",
      value: 0.14,
    },
    {
      name: "dehaze",
      value: 0.38,
    },
    {
      name: "toning",
      value: {
        value: 0.5,
        lightColor: "#46fa82",
        darkColor: "#bf5a20",
      },
    },
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 66, 56, 168, 171, 255, 255],
          [0, 0, 68, 77, 191, 179, 255, 255],
          [0, 0, 73, 80, 173, 166, 255, 255],
          [0, 0, 82, 110, 171, 185, 255, 255],
        ],
      },
    },
    {
      name: "vignette",
      value: 0.14,
    },
  ],
  rasky: [
    {
      name: "vibrance",
      value: 1,
    },
    {
      name: "saturation",
      value: 1,
    },
    {
      name: "temperature",
      value: -0.84,
    },
    {
      name: "tint",
      value: 0.34,
    },
    {
      name: "dehaze",
      value: 0.52,
    },
    {
      name: "toning",
      value: {
        value: 0.39,
        lightColor: "#cbd420",
        darkColor: "#d9180a",
      },
    },
  ],
  garage: [
    {
      name: "tint",
      value: 0.6,
    },
    {
      name: "saturation",
      value: -0.04,
    },
    {
      name: "shadows",
      value: -1,
    },
    {
      name: "grain",
      value: 0.42,
    },
    {
      name: "glamour",
      value: 0.3,
    },
  ],
  travelster: [
    {
      name: "vibrance",
      value: 0.84,
    },
    {
      name: "saturation",
      value: 0.66,
    },
    {
      name: "contrast",
      value: 0.24,
    },
    {
      name: "levels",
      value: {
        minin: 62,
        maxin: 255,
        minout: 0,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
    {
      name: "highlights",
      value: 0.62,
    },
    {
      name: "shadows",
      value: -0.3,
    },
    {
      name: "curves",
      value: {
        preset: [
          [0, 32, 136, 111, 255, 255],
          [0, 0, 149, 161, 255, 255],
          [0, 0, 148, 139, 255, 255],
          [0, 0, 99, 173, 164, 213, 255, 255],
        ],
      },
    },
    {
      name: "toning",
      value: {
        value: 0.3,
        lightColor: "#ffd899",
        darkColor: "#334d00",
      },
    },
    {
      name: "sharpen",
      value: 0.24,
    },
    {
      name: "grain",
      value: 0.23,
    },
    {
      name: "temperature",
      value: 0.72,
    },
    {
      name: "vignette",
      value: 0.13,
    },
  ],
  strawberry: [
    {
      name: "fill",
      value: {
        value: 0.5,
        mode: "softLight",
        fillColor: "#ff0000",
      },
    },
  ],
  clementine: [
    {
      name: "fill",
      value: {
        value: 0.5,
        mode: "softLight",
        fillColor: "#ff9e00",
      },
    },
  ],
  pear: [
    {
      name: "fill",
      value: {
        value: 0.5,
        mode: "softLight",
        fillColor: "#aaff00",
      },
    },
  ],
  apple: [
    {
      name: "fill",
      value: {
        value: 0.5,
        mode: "softLight",
        fillColor: "#00ff55",
      },
    },
  ],
  blueberry: [
    {
      name: "fill",
      value: {
        value: 0.5,
        mode: "softLight",
        fillColor: "#00aaff",
      },
    },
  ],
  grapes: [
    {
      name: "fill",
      value: {
        value: 0.5,
        mode: "softLight",
        fillColor: "#5500ff",
      },
    },
  ],
  dragon: [
    {
      name: "fill",
      value: {
        value: 0.5,
        mode: "softLight",
        fillColor: "#ff00aa",
      },
    },
  ],
  punch: [
    {
      name: "curves",
      value: {
        preset: [
          [0, 0, 80, 64, 173, 193, 255, 255],
          [0, 0, 255, 255],
          [0, 0, 255, 255],
          [0, 0, 255, 255],
        ],
      },
    },
    {
      name: "vibrance",
      value: 0.5,
    },
  ],
  bright: [
    {
      name: "highlights",
      value: -0.3,
    },
    {
      name: "shadows",
      value: 0.5,
    },
    {
      name: "levels",
      value: {
        minin: 0,
        maxin: 215,
        minout: 10,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
  ],
  contrast: [
    {
      name: "contrast",
      value: 0.2,
    },
    {
      name: "highlights",
      value: 0.2,
    },
    {
      name: "levels",
      value: {
        minin: 20,
        maxin: 215,
        minout: 0,
        maxout: 255,
        midin: 1,
        mid: 0.5,
      },
    },
    {
      name: "shadows",
      value: 0.4,
    },
  ],
  vivid: [
    {
      name: "vibrance",
      value: 0.4,
    },
    {
      name: "shadows",
      value: 0.25,
    },
  ],
  clairify: [
    {
      name: "clarity",
      value: 0.6,
    },
    {
      name: "sharpen",
      value: 0.1,
    },
    {
      name: "glamour",
      value: 0.2,
    },
  ],
};
