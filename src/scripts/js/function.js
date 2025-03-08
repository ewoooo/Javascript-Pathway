function sum(...items) {
	if (Array.isArray(items[0]) && items.length === 1) items = [...items[0]];
	return items.reduce((acc, cur) => acc + cur);
}

const circle = {
	radius: 2,
	get area() {
		return this.radius ** 2 * Math.PI;
	},
};

const numbers = [1, 2, 2, 2, 3, 4, 5];

try {
	const count = countOccurrences(null, 2);
	console.log(count);
} catch (e) {
	console.log(e.message);
}

function countOccurrences(array, searchElement) {
	if (!Array.isArray(array)) throw new Error("Invaild Array.");

	return array.reduce((acc, currentValue) => {
		const value = currentValue === searchElement ? 1 : 0;
		return acc + value;
	}, 0);
}
