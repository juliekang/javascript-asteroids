(function(root) {
	var Asteroids = root.Asteroids = (root.Asteroids || {} );

	var Ship = Asteroids.Ship = function() {
		Asteroids.MovingObject.apply(this, [[Asteroids.WIDTH/2, Asteroids.HEIGHT/2], [0, 0], Ship.RADIUS, Ship.COLOR])
	};

	Ship.inherits(Asteroids.MovingObject);

	Ship.RADIUS = 10;
	Ship.COLOR = 'yellow';

	Ship.prototype.power = function(impulse) {
		this.vel[0] += impulse[0] * 0.3;
		this.vel[1] += impulse[1] * 0.3;
	}

	Ship.prototype.fireBullet = function() {
		var speed = Math.pow(Math.pow(this.vel[0], 2) + Math.pow(this.vel[1], 2), 0.5);
		if (speed === 0) {
			return null;
		} else {
			return new Asteroids.Bullet(this.pos.slice(), [this.vel[0]/speed * 5, this.vel[1]/speed * 5]);
		}
	}

})(this);