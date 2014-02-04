(function(root) {
	var Asteroids = root.Asteroids = (root.Asteroids || {});

	var Game = Asteroids.Game = function(ctx) {
		Asteroids.CTX = ctx;
		Asteroids.WIDTH = Asteroids.CTX.canvas.width;
		Asteroids.HEIGHT = Asteroids.CTX.canvas.height;
		this.asteroids = (function() {
			var asteroidsArr = [];
			for(var i = 0; i < 4; i++) {
				asteroidsArr.push(Asteroids.Asteroid.randomAsteroid(Asteroids.WIDTH, Asteroids.HEIGHT));
			}
			return asteroidsArr;
		})();
		this.ship = new Asteroids.Ship();
		this.bullets = [];

		this.img = new Image() || this.img;
			this.img.src = 'Nyan_cat_250px_frame.png';
			that = this;
			this.img.onload = function() {
			  Asteroids.CTX.drawImage(that.img, 0, 0);
				
			}
	};

	Game.prototype.fireBullet = function() {
		bullet = this.ship.fireBullet();

		if (bullet != null) {
		  this.bullets.push(bullet);
		}
	}

	Game.prototype.draw = function () {
		Asteroids.CTX.clearRect(0, 0, Asteroids.WIDTH, Asteroids.HEIGHT);

			Asteroids.CTX.drawImage(this.img, 0, 0)


		this.asteroids.forEach(function (asteroid) {
			asteroid.draw();
		});

		this.bullets.forEach(function (bullet) {
			bullet.draw();
		});

		this.ship.draw();
	};

	Game.prototype.start = function() {
		this.bindKeyHandlers();
		var FPS = 120;
		this.interval = setInterval(this.step.bind(this), 1000/FPS);
	};

	Game.prototype.move = function() {
		this.asteroids.forEach(function(asteroid) {
			asteroid.move();
		});

		this.bullets.forEach(function(bullet) {
			bullet.move();
		});

		this.ship.move();

	};

	Game.prototype.step = function() {
		// console.log("ship position is " + this.ship.pos)
		this.checkCollisions();
		this.removeHitAsteroids();
		this.removeBadBullets();
		this.move();
		this.draw();
		this.checkWinner();
	};

	Game.prototype.checkCollisions = function() {
		var that = this;
		this.asteroids.forEach(function(asteroid) {
			if(that.ship.isCollidedWith(asteroid)) {
				alert("Sorry, you lose!");
				that.stop();
			}
		})
	};

	Game.prototype.removeBadBullets = function() {
		var that = this;
		that.bullets.forEach(function(bullet) {
			if(bullet.pos[0] < 10 || bullet.pos[0] > Asteroids.WIDTH-10 ||
			   bullet.pos[1] < 10 || bullet.pos[1] > Asteroids.HEIGHT-10) {
					 that.removeBullet(bullet);
			}
		})
	};

	Game.prototype.removeHitAsteroids = function() {
		var that = this;
		that.bullets.forEach(function(bullet) {
			that.asteroids.forEach(function(asteroid) {
				if(bullet.isCollidedWith(asteroid)) {
					that.removeAsteroid(asteroid);
					that.removeBullet(bullet);
				}
			})
		})
	}

	Game.prototype.checkWinner = function() {
		if(this.asteroids.length === 0) {
			this.stop();
			alert("Huzzah!  You win!");
		}
	};

	Game.prototype.stop = function() {
		clearInterval(this.interval);
	};

	Game.prototype.bindKeyHandlers = function () {
		var that = this;

		key('left', function() { that.ship.power([1, 0]) });
		key('right', function() {that.ship.power([-1, 0]) });
		key('up', function() {that.ship.power([0, 1]) });
		key('down', function() {that.ship.power([0, -1]) });

		key('space', function() {that.fireBullet() });
	};

	Game.prototype.removeAsteroid = function(asteroid) {
		this.asteroids.splice(this.asteroids.indexOf(asteroid), 1)
	}

	Game.prototype.removeBullet = function(bullet) {
		this.bullets.splice(this.bullets.indexOf(bullet), 1)
	}


})(this);