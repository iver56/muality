function Spawner(gameState) {
  this.gameState = gameState;
  this.x = 0;  // in game units
  this.y = 0;  // in game units
  this.radius = GU;
}

Spawner.prototype.update = function() {
  this.radius = GU + 0.2 * GU * mm.beat;
};

Spawner.prototype.render = function() {
  ctx.save();
  ctx.translate(CENTER.x * GU + this.x, CENTER.y * GU + this.y);

  ctx.beginPath();
  ctx.fillStyle = '#FFF399';
  ctx.moveTo(
    this.radius * Math.cos(-Math.PI / 8),
    this.radius * Math.sin(-Math.PI / 8)
  );

  for (let i = 1; i < 8; i++) {
    ctx.lineTo(
      this.radius * Math.cos(i * Math.PI / 4 - Math.PI / 8),
      this.radius * Math.sin(i * Math.PI / 4 - Math.PI / 8)
    );
  }
  ctx.closePath();
  ctx.fill();

  ctx.restore();
};
