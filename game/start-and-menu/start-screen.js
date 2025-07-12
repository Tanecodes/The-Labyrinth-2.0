import { audio } from "../audio.js";

export function setupStartScreen() {
  const startScreen = document.getElementById("startScreen");
  const startBtn = document.getElementById("startBtn");

  startBtn.addEventListener("click", () => {
    audio.sfx.btnSelect.play();
    audio.bgm.storyAudio.play();

    startScreen.classList.add("hidden");

    setTimeout(() => {
      mainMenu.classList.remove("hidden");
    }, 1000);
  });
};