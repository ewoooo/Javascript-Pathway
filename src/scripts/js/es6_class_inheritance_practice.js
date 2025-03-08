// Need more knowledge on Key/Value, Map
// Data private

const _items = new WeakMap();

class Stack {
	constructor() {
		_items.set(this, []);
	}

	push(...item) {
		return _items.get(this).push(...item);
	}

	pop() {
		if (_items.get(this).length === 0) {
			throw new Error("Stack is empty");
		}
		return _items.get(this).pop();
	}

	peek() {
		if (_items.get(this).length === 0) {
			throw new Error("Stack is empty");
		}
		return _items.get(this)[_items.get(this).length - 1];
	}

	get count() {
		return _items.get(this).length;
	}
}

const s = new Stack();
console.log(s);
