import { audio } from "../audio.js";
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
      mainMenu.classList.remove("hidden");
    }, 1000);
  });
  
// main menu button sfx
  const menuButtons = document.querySelectorAll(".menu-btn")

  menuButtons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      audio.sfx.btnHover.currentTime = 0;
      audio.sfx.btnHover.play();
    });

    btn.addEventListener("click", () => {
      audio.sfx.btnSelect.currentTime = 0;
      audio.sfx.btnSelect.play();
    });
  });
}