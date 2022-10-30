var rect = require("./rectangle");

function solveRect(l, b) {
	console.log("Solving for rectang wit l =" + l + " b = " + b);
	if (l <= 0 || b <= 0) {
		console.log("Dimensions should be greater than zero");
	} else {
		console.log("Area of the rectangle is " + rect.area(l, b));
		console.log("The Perimeter of the rectangle is " + rect.perimeter(l, b));
	}
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);
