import { audio } from "../audio.js";
import { setupMainMenu } from "./main-menu.js";
// start screen button to set up main menu
// i coded the main menu button sfx in here aswell
export function setupStartScreen() {
  const startScreen = document.getElementById("startScreen");
  const startBtn = document.getElementById("startBtn");

  startBtn.addEventListener("click", () => {
    audio.sfx.btnSelect.play();
    audio.bgm.storyAudio.play();

    startScreen.classList.add("hidden");

    setTimeout(() => {
      setupMainMenu();
    }, 1300);
  });
}