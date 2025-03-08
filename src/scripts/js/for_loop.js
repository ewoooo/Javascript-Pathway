const level = 5;
let result = "";
let char = "&";

for (let i = 0; i < level; i++) {
	result = "";
	for (let j = level; j > i; j--) {
		result += char;
	}
	console.log(result);
}
