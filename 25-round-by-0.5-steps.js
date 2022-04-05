function solution(n) {
	var decimals = n - Math.floor(n);
	console.log('decimals is ' + decimals);
	var decimalPlaces = n.toString().split('.')[1].length;
	console.log(n.toString().split('.'));
	var afterDecPoint = decimals.toFixed(decimalPlaces);
	console.log('afterdec is ' + afterDecPoint);
	if (afterDecPoint < 0.25) {
		return Math.floor(n);
	} else if (afterDecPoint > 0.25 && afterDecPoint < 0.75) {
		return Math.floor(n) + 0.5;
	} else {
		return Math.floor(n) + 1;
	}
}

console.log(solution(4.0001));

//https://www.codewars.com/kata/51f1342c76b586046800002a/train/javascript
