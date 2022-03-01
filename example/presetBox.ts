import { Application } from "pixi.js";
import { Preset } from "@/filters";

const group = {
  friends: [
    "aladin",
    "alex",
    "amber",
    "anne",
    "antonio",
    "bob",
    "greg",
    "hagrid",
    "harry",
    "ivan",
    "jean",
    "josh",
    "karen",
    "lucas",
    "melissa",
    "peter",
    "salomon",
    "sara",
    "sophia",
    "tony",
  ],
  "too-old": [
    "agnes",
    "conny",
    "gordon",
    "harrison",
    "henry",
    "logan",
    "olay",
    "porter",
    "sampi",
    "tom",
    "vinny",
  ],
  instage: [
    "borg",
    "carl",
    "coco",
    "doris",
    "doug",
    "earl",
    "kevin",
    "nash",
    "stan",
    "sun",
    "bd orange",
    "blues",
    "country",
    "lemonpell",
    "joyful",
    "tiny dc",
    "sheberios",
  ],
  colors: [
    "superone",
    "tonola",
    "reddish",
    "fellowing",
    "grassland",
    "springs",
    "justblues",
    "bluesteel",
    "flowerpot",
    "stinker",
    "violiin",
    "blupur",
    "beyllo",
    "wifortress",
  ],
  retro: [
    "vib",
    "ranguit",
    "rangeen",
    "creamlow",
    "sven",
    "yenely",
    "ragwarm",
    "greered",
    "danligter",
    "trotto",
    "rasky",
    "garage",
    "travelster",
  ],
  shades: [
    "strawberry",
    "clementine",
    "pear",
    "apple",
    "blueberry",
    "grapes",
    "dragon",
  ],
  tuning: ["punch", "bright", "contrast", "vivid", "clairify"],
  food: ["berry", "ensalat", "morning", "corn", "sharp"],
  urban: ["cement", "style", "mold", "shimmer", "stalker", "sham"],
  nature: ["beach", "flower", "forest"],
};

export function presetBox(app: Application, gui: any) {
  let html = ``;
  Object.keys(group).map((key) => {
    html += `<div class="list"><h2 class="list-title">${key}</h2>`;
    //  @ts-ignore
    for (let i = 0; i < group[key].length; i++) {
      //  @ts-ignore
      html += `<button data-key="${group[key][i]}">${group[key][i]}</button>`;
    }
    html += `</div>`;
  });
  document.getElementById("presetBox").innerHTML = html;

  Array.from(document.querySelectorAll("#presetBox button")).map(
    (button: HTMLButtonElement) => {
      button.addEventListener("click", () => {
        gui.reset(true);
        //  @ts-ignore
        let filter = new Preset(button.dataset.key);
        app.stage.filters = [filter];
      });
    }
  );
}
