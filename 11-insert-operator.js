function basicOp(operation, value1, value2) {
	let operators = {
		'+' : function(a, b) {
			return a + b;
		},
		'-' : function(a, b) {
			return a - b;
		},
		'*' : function(a, b) {
			return a * b;
		},
		'/' : function(a, b) {
			return a / b;
		}
	};
	return operators[operation](value1, value2);
}

console.log(basicOp('-', 15, 18));
