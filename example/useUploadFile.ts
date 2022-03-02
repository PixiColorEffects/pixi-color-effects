import { Application, Sprite } from "pixi.js";

export function useUploadFile(app: Application, gui: any) {
  document.getElementById("fileElem").addEventListener("change", (ev) => {
    let target = ev.target as HTMLInputElement;
    let file = target.files[0];

    let objectURL = window.URL.createObjectURL(file);

    let sprite = Sprite.from(objectURL);
    sprite.anchor.set(0);
    app.stage.removeChildAt(0);
    app.stage.addChild(sprite);
  });
}
