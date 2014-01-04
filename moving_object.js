(function(root) {
	var Asteroids = root.Asteroids = (root.Asteroids || {});

	var MovingObject = Asteroids.MovingObject = function(pos, vel, radius, color) {
		this.pos = pos;
		this.vel = vel;
		this.radius = radius;
		this.color = color;
	};

	MovingObject.prototype.move = function() {
		this.pos[0] += Asteroids.WIDTH-this.vel[0];
		this.pos[1] += Asteroids.HEIGHT-this.vel[1];

		this.pos[0] %= Asteroids.WIDTH;
		this.pos[1] %= Asteroids.HEIGHT;

		// console.log("new position is " + this.pos)
	};

	MovingObject.prototype.draw = function() {
		Asteroids.CTX.fillStyle = this.color;
		Asteroids.CTX.beginPath();

		Asteroids.CTX.arc(
			this.pos[0],
			this.pos[1],
			this.radius,
			0,
			2 * Math.PI,
			false
		);

		Asteroids.CTX.fill();
	};

	MovingObject.prototype.isCollidedWith = function(otherObject) {
		radiusSum = this.radius + otherObject.radius
		distance =	Math.pow(
									Math.pow((this.pos[0] - otherObject.pos[0]),2) +
									Math.pow((this.pos[1] - otherObject.pos[1]), 2)
								, 0.5)
		return distance <= radiusSum
	}

})(this)
