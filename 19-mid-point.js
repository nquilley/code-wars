function findEvenIndex(arr) {
	let result = -1;
	for (let i = 0; i < arr.length; i++) {
		if (checkLeftSide(arr, i) === checkRightSide(arr, i)) {
			result = i;
			return result;
		}
	}
	return result;

	function checkRightSide(arr, index) {
		let total = 0;

		for (let i = index + 1; i < arr.length; i++) {
			total += arr[i];
			//console.log('this is ' + i + ' loop' + arr[i]);
		}
		return total;
	}

	function checkLeftSide(arr, index) {
		let total = 0;
		for (let i = index - 1; i > -1; i--) {
			total += arr[i];
			//console.log('this is ' + i + ' loop' + arr[i]);
		}
		return total;
	}
}

console.log(findEvenIndex([ 1, 2, 3, 4, 3, 2, 1 ]));
//findEvenIndex([ 20, 10, -80, 10, 10, 15, 35 ]);

let array = [ 20, 10, -80, 10, 10, 15, 35 ];
//console.log('check right ' + checkRightSide(array, 0));

//console.log('check left ' + checkLeftSide(array, 6));
