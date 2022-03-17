function fakeBin(x) {
	return x.split('').map((n) => (n < 5 ? '0' : '1')).join('');
}

function descendingOrder(n) {
	//const numberArray = [ ...n.toString() ];
	const orderedString = [ ...n.toString() ].sort((a, b) => b - a).join('');
	return parseInt(orderedString);
}

console.log(descendingOrder(42145));
