function HTMLElement() {
	this.click = function () {
		console.log("Click");
	};
}

HTMLElement.prototype.focus = function () {
	console.log("Focus");
};

function HTMLSelectElement(...items) {
	this.items = [...items];
	this.addItem = function (value) {
		this.items.push(value);
	};
	this.removeItem = function (value) {
		// this.items.pop(value); // Simple
		this.items.splice(this.items.indexOf(item), 1);
	};
}

// Extend
function extend(child, parent) {
	child.prototype = Object.create(parent.prototype);
	child.prototype.constructor = child;
}

// !! This approach will not have instance method of HTMLElement.
// !! Because of inheriting its prototype(or base).
extend(HTMLSelectElement, HTMLElement);

// To bring instnace method of HTMLElement.
HTMLSelectElement.prototype = new HTMLElement();

const s = new HTMLSelectElement();
const e = new HTMLElement();
s.click();
