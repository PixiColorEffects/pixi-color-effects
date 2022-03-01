import "./style.css";
import { Application, Sprite } from "pixi.js";
import { guiControlsPanel } from "./guiControlsPanel";
import { presetBox } from "./presetBox";

const app = new Application({
  view: document.getElementById("playground") as HTMLCanvasElement,
  width: 590,
  height: 419,
});

let sprite = Sprite.from("./pic.png");
sprite.anchor.set(0);
app.stage.addChild(sprite);

app.stage.filters = [];

const gui = guiControlsPanel(app);
presetBox(app, gui);
