(function(root) {
	var Asteroids = root.Asteroids = (root.Asteroids || {});

	var MovingObject = Asteroids.MovingObject = function(pos, vel, radius, color) {
		this.pos = pos;
		this.vel = vel;
		this.radius = radius;
		this.color = color;
	};

	MovingObject.prototype.move = function() {
		this.pos[0] += this.vel[0];
		this.pos[1] += this.vel[1];
		console.log("new position is " + this.pos)
	};

	MovingObject.prototype.draw = function(ctx) {
		ctx.fillStyle = this.color;
		ctx.beginPath();

		ctx.arc(
			this.pos[0],
			this.pos[1],
			this.radius,
			0,
			2 * Math.PI,
			false
		);

		ctx.fill();
	};

	// MovingObject.prototype.start = function(canvasEl) {
	//   var ctx = canvasEl.getContext("2d");
	// 	this.draw(ctx)
	// }

	MovingObject.prototype.isCollidedWith = function(otherObject) {
		radiusSum = this.radius + otherObject.radius
		distance =	Math.pow(
									Math.pow((this.pos[0] - otherObject.pos[0]),2) +
									Math.pow((this.pos[1] - otherObject.pos[1]), 2)
								, 0.5)
		return distance <= radiusSum
	}

})(this)


// m1 = new MovingObject([0, 0], [2, 4], 10, "black")
// m2 = new MovingObject([100, 2], [2, 4], 10, "black")
//
// console.log(m1.isCollidedWith(m2))