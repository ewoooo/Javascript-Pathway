function showAddress(address) {
	for (let key in address) {
		console.log(key, address[key]);
	}
}

// Factory
function createAddress(street, city, zipCode) {
	return {
		street,
		city,
		zipCode,
	};
}

// Constructor
function Address(street, city, zipCode) {
	this.street = street;
	this.city = city;
	this.zipCode = zipCode;
}

const address1 = new Address("A", "b", "c");
const address2 = new Address("A", "b", "c");

console.log(areEqual(address1, address2));

function areSame(address1, address2) {
	return address1 === address2;
}

function areEqual(address1, address2) {
	const entry1 = Object.values(address1);
	const entry2 = Object.values(address2);

	if (entry1.length !== entry2.length) return false;
	return isEqual(entry1, entry2) ? true : false;
}

function isEqual(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}
	return true;
}

function createPost(title, body, author, views, comment, isLive) {
	return {
		title,
		body,
		author,
		views,
		comments: [comment],
		isLive,
	};
}

function Post(title, body, author, views = 0, isLive = false) {
	this.title = title;
	this.body = body;
	this.author = author;
	this.views = Number(views) || 0;
	this.comments = [];
	this.isLive = isLive;
}

const post = new Post("A", "Lorem Ipsum", "Author");

const priceRanges = [
	{ label: "$", toolTip: "Affordable", minPerPerson: 0, maxPerPerson: 10 },
	{ label: "$$", toolTip: "Moderate", minPerPerson: 10, maxPerPerson: 20 },
	{ label: "$$$", toolTip: "Pricey", minPerPerson: 20, maxPerPerson: 30 },
];

const restaurant = [{ label: "a", ratings: "5", avgPerPerson: 5 }];

function filterAffordableRestaurant(list, filters) {
	const result = [];

	for (let place of list) {
		if (filters[0].minPerPerson <= place.avgPerPerson < filters[0].maxPerPerson) result.push(place);
	}

	return result;
}

console.log(filterAffordableRestaurant(restaurant, priceRanges));
