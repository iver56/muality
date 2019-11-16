function Projectile(gameState, x, y, rotation, color) {
  this.gameState = gameState;
  this.x = x;
  this.y = y;
  this.rotation = rotation;
  this.dx = 0.04 * GU * Math.cos(rotation);
  this.dy = 0.04 * GU * Math.sin(rotation);
  this.color = color;
}

Projectile.prototype.update = function() {
  this.x += this.dx;
  this.y += this.dy;
};

Projectile.prototype.render = function() {
  ctx.save();
  ctx.translate(CENTER.x * GU + this.x, CENTER.y * GU + this.y);
  ctx.rotate(this.rotation);
  ctx.fillStyle = this.color;
  ctx.fillRect(-GU / 6, -GU / 2, GU/3, GU);
  ctx.restore();
};
