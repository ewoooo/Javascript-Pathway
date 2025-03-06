// amateur
function getMax(x, y) {
	return x > y ? x : y;
}

// pro
function isLandscape(width, height) {
	return width > height;
}

// fizzBuzz
function fizzBuzz(input) {
	if (typeof input !== "number") {
		return NaN;
	} else if (input % 3 === 0 && input % 5 === 0) {
		return "FizzBuzz";
	} else if (input % 5 === 0) {
		return "Buzz";
	} else if (input % 3 === 0) {
		return "Fizz";
	} else {
		return input;
	}
}

// speedCheck
function checkSpeed(speed) {
	const speedLimit = 70;
	const kmPerPoint = 5;
	const point = Math.floor((speed - speedLimit) / kmPerPoint);

	if (speed < speedLimit + kmPerPoint) return "OK";

	return point >= 12 ? "License Suspended" : point;
}

// EVEN & ODD
function showNumbers(limit) {
	let count = 0;

	while (count <= limit) {
		let result = count % 2 ? "ODD" : "EVEN";
		// 1 : TRUE / 0: FALSE

		console.log(count, result);

		count++;
	}
}

function countTruthy(array) {
	let count = 0;

	for (let item of array) {
		if (item) count++;
	}

	return count;
}

const movie = {
	title: "a",
	releaseYear: 2018,
	rating: 4.5,
	director: "b",
};

function showProperties(obj) {
	for (key in obj) {
		if (typeof obj[key] == "string") console.log(key, obj[key]);
	}
	return;
}

function sum(limit) {
	let sum = 0;

	for (let i = 0; i <= limit; i++) {
		if (!(i % 3) || !(i % 5)) sum += i;
	}

	return sum;
}

const marks = [80, 90, 90];

function calculateGrade(avg) {
	if (avg > 100) return "err";
	if (avg >= 90) return "A";
	if (avg >= 80) return "B";
	if (avg >= 70) return "C";
	if (avg >= 60) return "D";
	return "F";
}

function calculateAvg(marks) {
	let sum = 0;
	for (mark of marks) sum += mark;
	return sum / marks.length;
}

function showStars(rows) {
	for (let i = 0; i < rows; i++) {
		let stack = "";
		for (let j = 0; j <= i; j++) {
			stack += "&";
		}
		console.log(stack);
	}
}

function showPrimes(limit) {
	for (let i = 2; i <= limit; i++) {
		if (isPrime(i)) console.log(i);
	}
}

function isPrime(number) {
	for (let j = 2; j < number; j++) {
		if (number % j === 0) return false;
		return true;
	}
}

showPrimes(50);
console.log(8 % 2);
