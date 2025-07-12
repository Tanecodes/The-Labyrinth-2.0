// creating my first ever class chatGPT is my teacher and mentor.
export class SceneManager {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  loadScene(sceneData) {
    this.container.innerHTML = "";

    const bg = document.createElement("div");
    bg.style.backgroundImage = `url(${sceneData.background})`;
    bg.classList.add("scene-background");
    bg.style.opacity = 0;
    bg.style.transition = "opacity 1s ease-in-out";

    this.container.appendChild(bg);

    setTimeout(() => {
      bg.style.opacity = 1;
    }, 100);
  };
}