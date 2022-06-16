import { Vibrance } from "@/filters/vibrance";
import { Saturation } from "@/filters/saturation";
import { Temperature } from "@/filters/temperature";
import { Tint } from "@/filters/tint";
import { Hue } from "@/filters/hue";
import { Brightness } from "@/filters/brightness";
import { Exposure } from "@/filters/exposure";
import { Contrast } from "@/filters/contrast";
import { Black } from "@/filters/black";
import { White } from "@/filters/white";
import { Highlights } from "@/filters/highlights";
import { Shadows } from "@/filters/shadows";
import { Sharpen } from "@/filters/sharpen";
import { Clarity } from "@/filters/clarity";
import { Smooth } from "@/filters/smooth";
import { Blur } from "@/filters/blur";
import { Grain } from "@/filters/grain";
import { VignetteWhite } from "@/filters/vignetteWhite";
import { VignetteBlack } from "@/filters/vignetteBlack";
import { Glamour } from "@/filters/glamour";
import { Bloom } from "@/filters/bloom";
import { Dehaze } from "@/filters/dehaze";
import { Toning } from "@/filters/toning";
import { Fill } from "@/filters/fill";

export * from "./vibrance/index";
export * from "./saturation/index";
export * from "./temperature/index";
export * from "./tint/index";
export * from "./hue/index";
export * from "./brightness/index";
export * from "./exposure/index";
export * from "./contrast/index";
export * from "./black/index";
export * from "./white/index";
export * from "./highlights/index";
export * from "./shadows/index";
export * from "./sharpen/index";
export * from "./clarity/index";
export * from "./smooth/index";
export * from "./blur/index";
export * from "./grain/index";
export * from "./vignetteWhite/index";
export * from "./vignetteBlack/index";
export * from "./glamour/index";
export * from "./bloom/index";
export * from "./dehaze/index";
export * from "./toning/index";
export * from "./fill/index";

export * from "./preset/index";

export * from './preset/preset'

export const filters = {
  vibrance: Vibrance,
  saturation: Saturation,
  temperature: Temperature,
  tint: Tint,
  hue: Hue,
  brightness: Brightness,
  exposure: Exposure,
  contrast: Contrast,
  black: Black,
  white: White,
  highlights: Highlights,
  shadows: Shadows,
  sharpen: Sharpen,
  clarity: Clarity,
  smooth: Smooth,
  blur: Blur,
  grain: Grain,
  vignetteWhite: VignetteWhite,
  vignetteBlack: VignetteBlack,
  glamour: Glamour,
  bloom: Bloom,
  dehaze: Dehaze,
  toning: Toning,
  fill: Fill,
};
