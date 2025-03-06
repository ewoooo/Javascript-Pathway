// Super Class
function Shape() {}

Shape.prototype.duplicate = function () {
	console.log("Duplicate");
};

// Inherited Class
function Circle(radius) {
	this.radius = radius;
}

// This reset the constructor of Circle.
Circle.prototype = Object.create(Shape.prototype);

// So we need to set constructor manually.
Circle.prototype.constructor = Circle;

// Add prototype mathod after reset.
Circle.prototype.draw = function () {
	console.log("Draw");
};

const c = new Circle(1);
console.log(c);
c.draw();

// Inherited method.
c.duplicate();
