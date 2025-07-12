export const audio = {
  bgm: {
    storyAudio: new Audio("assets/audio/background/story-music.mp3"), 
  },
  sfx:{
    btnHover: new Audio("assets/audio/buttons/button-hover.mp3"),
    btnSelect: new Audio("assets/audio/buttons/button-select.mp3"),
  }
};

// audio settings
audio.bgm.storyAudio.loop = true;
audio.bgm.storyAudio.volume = 0.5;
audio.sfx.btnSelect.volume = 0.3;
audio.sfx.btnHover.volume = 0.5;
