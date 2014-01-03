(function (root) {
	var Asteroids = root.Asteroids = (root.Asteroids || {});

	var Asteroid = Asteroids.Asteroid = function (pos, vel, radius, color) {
		Asteroids.MovingObject.apply(this, [pos, vel, radius, color]);
	};

	Asteroid.inherits(Asteroids.MovingObject);

	Asteroid.COLOR = 'black';
	Asteroid.RADIUS = 30;

	Asteroid.randomAsteroid = function(dimX, dimY) {
		var startingPos = [dimX * Math.random(), dimY * Math.random()];
		// console.log("starting pos is " + startingPos)

		var velocity = [(2 * Math.random() - 1), (2 * Math.random() - 1)];

		return new Asteroid(startingPos, velocity, Asteroid.RADIUS, Asteroid.COLOR);
	};
})(this);