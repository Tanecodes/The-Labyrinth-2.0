// imports
import { SceneManager } from "./scenes/scene-manager.js";
import { audio } from "./audio.js";
import { setupStartScreen } from "./start-and-menu/start-screen.js";
import { showOverlay, hideOverlay } from "../src/effects/overlay.js";

  // scene manager setup
  const sceneManager = new SceneManager("sceneContainer");

  const menuScene = {
    name: "mainMenu",
    background: "assets/images/backgrounds/main-entrance.png"
  };
  sceneManager.loadScene(menuScene);
  setupStartScreen();