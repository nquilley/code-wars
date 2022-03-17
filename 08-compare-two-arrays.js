function arrayDiff(a, b) {
	const removed = a.filter(function(a) {
		let unwanted = [];
		//let wanted = [];
		console.log(a);
		console.log(b.includes(a));
		if (!b.includes(a)) {
			return a;
		}
	});
	return removed;
}

console.log(arrayDiff([ 3, 4 ], [ 3 ]));
