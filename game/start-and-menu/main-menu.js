import { showOverlay } from "../../src/effects/overlay.js";
import { hideOverlay } from "../../src/effects/overlay.js";
import { audio } from "../audio.js";

export function setupMainMenu() {
  const mainMenu = document.getElementById("mainMenu");
  const newGameBtn = document.getElementById("newGameBtn");

  mainMenu.classList.remove("hidden");

  newGameBtn.addEventListener("click", () => {
    showOverlay({
      text: "in a land where dice rule over weapons is a strange place to be..",
      autoHide: true,
      fadeInTime: 1000,
      fadeOutTime: 3000,
      onComplete: () => {
        hideOverlay();
      }
    });
  });
}