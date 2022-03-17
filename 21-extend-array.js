// class Calculator extends Array {
// 	square() {
// 		return this.slice().map((n) => n * n);
// 	}
// }

Array.prototype.square = function() {
	return this.slice().map((n) => n * n);
};

Array.prototype.cube = function() {
	return this.slice().map((n) => n * n * n);
};

Array.prototype.average = function() {
	if (this.length === 0) {
		return NaN;
	} else {
		return this.slice().reduce((n, m) => n + m) / this.length;
	}
};
// can use this.sum as see in other users solution
// Array.prototype.average = function() {
// 	return this.sum() / this.length;
// };

Array.prototype.sum = function() {
	return this.slice().reduce((n, m) => n + m);
};

Array.prototype.even = function() {
	return this.slice()
		.map((n) => {
			if (n % 2 === 0) return n;
		})
		.filter(Boolean);
};

Array.prototype.odd = function() {
	return this.slice()
		.map((n) => {
			if (n % 2 === 1) return n;
		})
		.filter(Boolean);
};

// can group them together using Object.assign
// Object.assign(Array.prototype, {
//     square() {return this.map(n => n * n);},
//     cube() {return this.map(n => Math.pow(n, 3));},
//     sum() {return this.reduce((p,n) => p + n, 0);},
//     average() {return this.reduce((p,n) => p + n, 0) / this.length;},
//     even() {return this.filter(n => !(n % 2));},
//     odd() {return this.filter(n => n % 2);}
// });
