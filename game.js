(function(root) {
	var Asteroids = root.Asteroids = (root.Asteroids || {});

	var Game = Asteroids.Game = function(ctx) {
		this.ctx = ctx;
		this.asteroids = (function() {
			var asteroidsArr = [];
			for(var i = 0; i < 5; i++) {
				asteroidsArr.push(Asteroids.Asteroid.randomAsteroid(ctx.canvas.width, ctx.canvas.height));
			}
			console.log(asteroidsArr);
			return asteroidsArr;
		})();
	};

	// var Game.DIM_X = this.ctx.width;
	// var Game.DIM_Y = this.ctx.height;

	Game.prototype.draw = function () {
		this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

		this.asteroids.forEach(function (asteroid) {
			console.log("drawing asteroid" + asteroid.pos + " vel:" + asteroid.vel);
			asteroid.draw(this.ctx);
		});
	};

	Game.prototype.start = function() {
		// this.draw();
		setInterval(this.step.bind(this), 3000);
	};

	Game.prototype.move = function() {
		this.asteroids.forEach(function(asteroid) {
			asteroid.move();
		})
	};

	Game.prototype.step = function() {
		this.move();
		this.draw();
	};

})(this);