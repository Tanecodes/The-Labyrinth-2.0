import { SceneManager } from "../scenes/scene-manager.js";

const sceneManager = new SceneManager("sceneContainer");

const testScene = {
  name: "mainMenu",
  background: "assets/backgrounds/main-entrance.png"
};

sceneManager.loadScene(testScene);