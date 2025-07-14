  const screenOverlay = document.getElementById("screenOverlay");

  export function showOverlay(options = {}) {
    const {
      text = "",
      fadeInTime = 1000,
      fadeOutTime = null,
      textDelay =0,
      autoHide = false,
      onComplete = null,
    } = options;

    screenOverlay.innerHTML = '';
    screenOverlay.style.pointerEvents = "auto";

    if (text) {
      const textBox = document.createElement("div");
      textBox.style.opacity = 0;
      if(textBox.style.opacity = 0) {
        textBox.classList.add("overlayTextBox");
      }  
      textBox.innerText = text;
      screenOverlay.appendChild(textBox);
    }

    screenOverlay.classList.add("visible");

    if (autoHide && fadeOutTime !== null) {
      setTimeout(() => {
        hideOverlay();
        if(onComplete) onComplete();
      }, fadeOutTime + textDelay);
    }
  } 

  export function hideOverlay() {
    screenOverlay.classList.remove("visible");
    screenOverlay.style.pointerEvents = "none";
  }