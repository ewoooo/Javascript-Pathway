const level = 11;
let result;

for (let i = 0; i < level; i++) {
	result = "";

	for (let k = level - 1; k > i; k--) {
		result += " ";
	}

	for (let j = 0; j <= i * 2; j++) {
		result += "$";
	}
	console.log(result);
}
    
for (let i = 1; i < level; i++) {
	result = "";

	for (let k = 0; k < i; k++) {
		result += " ";
	}

	for (let j = level * 2 - 1; j > i * 2; j--) {
		result += "&";
	}
	console.log(result);
}
