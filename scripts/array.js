//Array from range

// const numbers = arrayFromRange(1, 10);
// console.log(numbers);

function arrayFromRange(min, max) {
	const result = [];

	for (let i = min; i <= max; i++) {
		result.push(i);
	}

	return result;
}

// Includes
// const range = [1, 2, 3, 4];
// console.log(includes(range, 5));

function includes(array, num) {
	for (let element of array) {
		if (element === num) return true;
	}
	return false;
}

// Except
// const numbers = [1, 2, 3, 4, 5];
// const output = except(numbers, [1]);
// console.log(output);

function except(array, num) {
	const output = [];

	for (let element of array) {
		if (!num.includes(element)) {
			output.push(element);
		}
	}

	return output;
}

// Moving an element
// const numbers = [1, 2, 3, 4, 5];
// const output = move(numbers, 1, -1);
// console.log(output);

function move(array, index, offset) {
	const position = index + offset;

	if (position < 0 || position >= array.length) return console.error("Invaild Offset");

	const result = [...array];
	const target = result.splice(index, 1)[0];
	result.splice(position, 0, target);
	return result;
}

// countOccurrences
// const numbers = [1, 2, 2, 2, 3, 4, 5];
// const count = countOccurrences(numbers, 2);
// console.log(count);

function countOccurrences(array, searchElement) {
	return array.reduce((acc, currentValue) => {
		const value = currentValue === searchElement ? 1 : 0;
		return acc + value;
	}, 0);
}

// getMax
// const numbers = [1, 2, 3, 4, 5];
// const count = getMax(numbers);
// console.log(count);

function getMax(array) {
	if (array.length === 0) return undefined;

	return array.reduce((acc, currentValue) => (acc >= currentValue ? acc : currentValue));
}

// Movies
const movies = [
	{ title: "a", year: 2018, rating: 4.5 },
	{ title: "b", year: 2018, rating: 4.7 },
	{ title: "c", year: 2018, rating: 3 },
	{ title: "d", year: 2018, rating: 4.5 },
	{ title: "e", year: 2017, rating: 3.5 },
];

const result = movies
	.filter((movie) => movie.year >= 2018 && movie.rating > 4)
	.sort((a, b) => b.rating - a.rating)
	//.reverse
	.map((movie) => movie.title)
	.join(" ");

console.log(result);
