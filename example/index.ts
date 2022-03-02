import "./style.css";
import { Application, Sprite } from "pixi.js";
import { useGuiControlsPanel } from "./useGuiControlsPanel";
import { usePresetBox } from "./usePresetBox";
import { useUploadFile } from "./useUploadFile";
import { useWebcam } from "./useWebcam";

const app = new Application({
  view: document.getElementById("playground") as HTMLCanvasElement,
  width: 590,
  height: 419,
});

let sprite = Sprite.from("./pic.png");
sprite.anchor.set(0);
app.stage.addChild(sprite);

app.stage.filters = [];

const gui = useGuiControlsPanel(app);
usePresetBox(app, gui);
useUploadFile(app, gui);
useWebcam(app, gui);
