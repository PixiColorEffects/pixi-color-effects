import { Application, Sprite, Texture } from "pixi.js";

export function useWebcam(app: Application, gui: any) {
  document.getElementById("webcam").addEventListener("click", (ev) => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: false,
      })
      .then((stream) => {
        const videoEl = document.createElement("video");
        videoEl.onloadedmetadata = () => {
          videoEl.play();
          app.stage.removeChildAt(0);

          const texture = Texture.from(videoEl);
          /**@type {HTMLVideoElement}*/
          //  @ts-ignore
          const videoTexture = texture.baseTexture.resource.source;
          videoTexture.autoplay = true;
          videoTexture.muted = true;

          const videoSprite = new Sprite(texture);
          app.stage.addChild(videoSprite);

          console.log("loaded");
        };
        videoEl.srcObject = stream;
      })
      .catch(() => {
        alert("Webcam Permissions Denied");
      });
  });
}
