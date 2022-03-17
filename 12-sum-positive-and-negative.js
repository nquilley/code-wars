function countPositivesSumNegatives(input) {
	//let positiveNums = arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);

	if (input === null) {
		return [];
	}
	let positiveNums = 0;
	let negativeNums = 0;
	//let result = [];
	input.map((n) => {
		if (n > 0) {
			return positiveNums++;
		} else return (negativeNums += n);
	});
	if (positiveNums === 0 && negativeNums === 0) {
		return [];
	} else return [ positiveNums, negativeNums ];
}

console.log(countPositivesSumNegatives([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15 ]));
