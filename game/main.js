// imports
import { SceneManager } from "./scenes/scene-manager.js";
import { audio } from "./audio.js";
import { setupStartScreen } from "./start-screen/start-screen.js";

  // scene manager setup
  const sceneManager = new SceneManager("sceneContainer");

  const menuScene = {
    name: "mainMenu",
    background: "assets/backgrounds/main-entrance.png"
  };
  sceneManager.loadScene(menuScene);
  setupStartScreen();