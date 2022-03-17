var uniqueInOrder = function(iterable) {
	let result = [];
	if (typeof iterable === 'string') {
		let array = iterable.split('');
		for (letter of array) {
			if (letter !== result[result.length - 1]) {
				result.push(letter);
			}
		}
		return console.log(result);
	}
	for (letter of iterable) {
		if (letter !== result[result.length - 1]) {
			result.push(letter);
		}
	}
	return result;
};

let test = [ 1, 2, 2, 3, 3 ];

uniqueInOrder(test);

// let result1 = ' ';
// let letter1 = 'A';
