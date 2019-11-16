function Projectile(gameState, rotationIndex, color) {
  this.gameState = gameState;

  this.rotationIndex = rotationIndex;
  this.rotation = this.rotationIndex * Math.PI / 4;
  this.x = GU * Math.cos(this.rotation);
  this.y = GU * Math.sin(this.rotation);
  this.dx = 0.068 * GU * Math.cos(this.rotation);
  this.dy = 0.068 * GU * Math.sin(this.rotation);
  this.color = color;
  this.renderColor = this.color === 'yellow' ? '#FFF399' : '#A8DDFF';
  this.timeSpawned = t;
  this.state = 'travelling';
}

Projectile.prototype.update = function() {
  this.x += this.dx;
  this.y += this.dy;

  let timeSinceSpawned = t - this.timeSpawned;
  if (timeSinceSpawned > 5000) {
    this.state = 'removed';
  } else if (this.state === 'travelling' &&
    timeSinceSpawned >= mm.timePerBeat * 1000 &&
    timeSinceSpawned < 1.2 * mm.timePerBeat * 1000 &&
    this.rotationIndex % 4 === this.gameState.player.rotationIndex) {
    if (this.color === 'blue') {
      this.gameState.player.score++;
    } else {
      this.gameState.player.score--;
    }
    this.state = 'collided';
  }
};

Projectile.prototype.render = function() {
  ctx.save();
  ctx.translate(CENTER.x * GU + this.x, CENTER.y * GU + this.y);
  ctx.rotate(this.rotation);
  ctx.fillStyle = this.renderColor;
  ctx.fillRect(-GU / 6, -GU / 2, GU/3, GU);
  ctx.restore();
};
