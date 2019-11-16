function Player(gameState) {
  this.gameState = gameState;
  this.x = 0;  // in game units
  this.y = 0;  // in game units
  this.rotation = 0;  // in radians
  this.rotationIndex = 0;  // int in range [0, 3]
  this.readyToRotateLeft = true;
  this.readyToRotateRight = true;
  this.radius = 4 * GU;
  this.paddleWidth = GU / 2;
  this.score = 0;
  this.hasGameOverBeenAnnounced = false;
}

Player.prototype.update = function() {
  if (mm.hasEnded && !this.hasGameOverBeenAnnounced) {
    this.hasGameOverBeenAnnounced = true;
    alert(`Game over! Final score: ${this.score}`);
  } else if (this.hasGameOverBeenAnnounced) {
    return;
  }

  if (this.readyToRotateLeft && (KEYS[65] || KEYS[37])) {
    // a or left arrow
    this.rotationIndex--;
    this.readyToRotateLeft = false;
  } else if (!this.readyToRotateLeft && !(KEYS[65] || KEYS[37])) {
    this.readyToRotateLeft = true;
  }

  if (this.readyToRotateRight && (KEYS[68] || KEYS[39])) {
    // d or right arrow
    this.rotationIndex++;
    this.readyToRotateRight = false;
  } else if (!this.readyToRotateRight && !(KEYS[68] || KEYS[39])) {
    this.readyToRotateRight = true;
  }

  this.rotationIndex = this.rotationIndex.mod(4);
  this.rotation = this.rotationIndex * Math.PI / 4;
};

Player.prototype.render = function() {
  ctx.save();
  ctx.translate(CENTER.x * GU + this.x, CENTER.y * GU + this.y);
  ctx.rotate(this.rotation);

  ctx.fillStyle = '#A8DDFF';
  ctx.fillRect(-this.radius - this.paddleWidth / 2, -GU, this.paddleWidth, 2 * GU);
  ctx.fillRect(this.radius - this.paddleWidth / 2, -GU, this.paddleWidth, 2 * GU);

  ctx.restore();

  ctx.save();
  ctx.fillStyle = 'white';
  ctx.font = `${GU / 3}px Arial`;
  ctx.fillText(`Score: ${this.score}`, 0.5 * GU, 0.5 * GU);
  ctx.restore();
};
