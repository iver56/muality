function MusicManager() {
  this.audioButton = new AudioButton();
  this.music = new Audio();
  this.loaded = false;
  this.tempoInBpm = 96;  // in bpm
  var that = this;
  loaded++;
  this.music.addEventListener("loadeddata", function() {
    that.loaded || loaded--;
    that.loaded = true;
  });
  this.music.addEventListener("canplay", function() {
    that.loaded || loaded--;
    that.loaded = true;
  });
  this.music.volume = 0.6;
  this.music.src = "res/music.ogg";
  this.state = "menu";
  this.musictimes = {
    gamestart: 0,
    gameend: 70,
    gamelength: 70
  };
  document.body.appendChild(this.music);
  this.beat = 0;
}

MusicManager.prototype.changeState = function(state) {
  this.state = state;
  if (state === 'game') {
    this.music.play();
  }
};

MusicManager.prototype.update = function() {
  if (this.loaded && this.state === "game") {
    this.updateBeatBean();
    if (this.music.currentTime < this.musictimes.gamestart) {
      this.music.currentTime = this.musictimes.gamestart;
    } else if (this.music.currentTime > this.musictimes.gameend) {
      this.music.currentTime -= this.musictimes.gamelength;
    }
  }
};

MusicManager.prototype.updateBeatBean = function() {
  //window.BEAT = (((frame + 1.5) / framesPerBEAT) | 0) > ((frame + 0.5) / framesPerBEAT) | 0;
  //window.BEAN = (frame + 1.5) / framesPerBEAT | 0;
  this.beat = 1 - ((this.tempoInBpm * this.music.currentTime / 60) % 1);
};
