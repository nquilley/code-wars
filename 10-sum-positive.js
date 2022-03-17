function positiveSum(arr) {
	const positiveNums = arr.filter((n) => n >= 0);
	//console.log(positiveNums);
	return positiveNums.length > 0 ? positiveNums.reduce((total, currentVal) => total + currentVal) : 0;
}
console.log(positiveSum([]));
