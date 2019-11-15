function Player(gameState) {
  this.gameState = gameState;
  this.x = 0;  // in game units
  this.y = 0;  // in game units
  this.rotation = 0;  // in radians
  this.rotationSpeed = 0.055;  // in radians per frame
}

Player.prototype.update = function() {
  if (KEYS[65] || KEYS[37]) {
    // a or left arrow
    this.rotation -= this.rotationSpeed;
  }
  if (KEYS[68] || KEYS[39]) {
    // d or right arrow
    this.rotation += this.rotationSpeed;
  }
  this.rotation = this.rotation.mod(Math.PI * 2);
};

Player.prototype.render = function() {
  ctx.save();
  ctx.translate(CENTER.x * GU + this.x, CENTER.y * GU + this.y);
  ctx.rotate(this.rotation);

  ctx.fillStyle = 'red';
  ctx.fillRect(-3.5 * GU - GU / 4, -GU, GU / 2, 2 * GU);
  ctx.fillRect(3.5 * GU - GU / 4, -GU, GU / 2, 2 * GU);

  ctx.restore();
};
