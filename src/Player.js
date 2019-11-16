function Player(gameState) {
  this.gameState = gameState;
  this.x = 0;  // in game units
  this.y = 0;  // in game units
  this.rotation = 0;  // in radians
  this.rotationState = 0;  // int in range [0, 3]
  this.readyToRotateLeft = true;
  this.readyToRotateRight = true;
}

Player.prototype.update = function() {
  if (this.readyToRotateLeft && (KEYS[65] || KEYS[37])) {
    // a or left arrow
    this.rotationState--;
    this.readyToRotateLeft = false;
  } else if (!this.readyToRotateLeft && !(KEYS[65] || KEYS[37])) {
    this.readyToRotateLeft = true;
  }

  if (this.readyToRotateRight && (KEYS[68] || KEYS[39])) {
    // d or right arrow
    this.rotationState++;
    this.readyToRotateRight = false;
  } else if (!this.readyToRotateRight && !(KEYS[68] || KEYS[39])) {
    this.readyToRotateRight = true;
  }

  this.rotationState = this.rotationState.mod(4);
  this.rotation = this.rotationState * Math.PI / 4;
};

Player.prototype.render = function() {
  ctx.save();
  ctx.translate(CENTER.x * GU + this.x, CENTER.y * GU + this.y);
  ctx.rotate(this.rotation);

  ctx.fillStyle = '#A8DDFF';
  ctx.fillRect(-4 * GU - GU / 4, -GU, GU / 2, 2 * GU);
  ctx.fillRect(4 * GU - GU / 4, -GU, GU / 2, 2 * GU);

  ctx.restore();
};
