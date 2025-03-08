function HtmlSelectElement(items) {
	this.items = [...items];
	this.render = function () {
		return `<select>${this.items.map((item) => `<option>${item}</option>`).join("")}</select>`;
	};
}

function HtmlImageElement(src) {
	this.src = src;
	this.render = function () {
		return `<img src="${this.src}">`;
	};
}

// Test
const elements = [new HtmlSelectElement([1, 2, 3]), new HtmlImageElement("http://")];

for (let element of elements) {
	console.log(element.render());
}
