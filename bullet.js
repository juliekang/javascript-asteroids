(function(root) {
	var Asteroids = root.Asteroids = (root.Asteroids || {})

	var Bullet = Asteroids.Bullet = function(pos, vel) {
		Asteroids.MovingObject.apply(this, [pos, vel, Bullet.RADIUS, Bullet.COLOR]);
	}

	Bullet.inherits(Asteroids.MovingObject);

	Bullet.RADIUS = 5;
	Bullet.COLOR = "red";

})(this)