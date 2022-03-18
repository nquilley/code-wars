// codewarscore before is 129
// codewarscore score after is 137 (+8!)

function deleteNth(arr, n) {
	let result = [];
	arr.reduce((acc, curr) => {
		acc[curr] = (acc[curr] || 0) + 1;
		if (acc[curr] <= n) {
			result.push(curr);
		}
		return acc; //This is returned in each loop. So the acc keeps accumulating
	}, {});
	return result;
}

console.log(deleteNth([ 20, 37, 20, 21 ], 1));

let test = { 20: 2, 21: 1, 37: 1 };

// Top rated soltion using filter()
// https://www.codewars.com/kata/554ca54ffa7d91b236000023/solutions/javascript

// function deleteNth(arr,x) {
//     var cache = {};
//     return arr.filter(function(n) {
//       cache[n] = (cache[n]||0) + 1;
//       return cache[n] <= x;
//     });
//   }
