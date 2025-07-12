import { audio } from "../audio.js";

export function setupStartScreen() {
  const startScreen = document.getElementById("startScreen");
  const enterBtn = document.getElementById("enterBtn");
  const menuTitle = document.querySelector("menu-title");

  menuTitle.style.display = "block";

  enterBtn.addEventListener("click", () => {
    audio.storyAudio.play();

    startScreen.classList.add("hidden");

    setTimeout(() => {
      mainMenu.classList.remove("hidden");
    }, 1000);
  });
};