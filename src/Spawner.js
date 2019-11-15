function Spawner(gameState) {
  this.gameState = gameState;
  this.x = 0;  // in game units
  this.y = 0;  // in game units
}

Spawner.prototype.update = function() {
};

Spawner.prototype.render = function() {
  ctx.save();
  ctx.translate(CENTER.x * GU + this.x, CENTER.y * GU + this.y);

  ctx.beginPath();
  ctx.fillStyle = '#FFF399';
  ctx.moveTo(
    GU * Math.cos(-Math.PI / 8),
    GU * Math.sin(-Math.PI / 8)
  );

  for (let i = 1; i < 8; i++) {
    ctx.lineTo(
      GU * Math.cos(i * Math.PI / 4 - Math.PI / 8),
      GU * Math.sin(i * Math.PI / 4 - Math.PI / 8)
    );
  }
  ctx.closePath();
  ctx.fill();

  ctx.restore();
};
