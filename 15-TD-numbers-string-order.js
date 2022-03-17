const testString = 'is2 Thi1s T4est 3a';

console.log(testString.split(' '));

const array = testString.split(' ');

let obj = {};
let word = '';
let index = 0;
function test() {
	for (string of array) {
		console.log(string);
		index++;
		obj[index] = string;
	}
}
test();
console.log(obj);

//addToObject(obj, 'Cat', 'La cuch');

// const obj = [
// 	{
// 		key   : 'a',
// 		value : 42
// 	},
// 	{
// 		key   : 'd',
// 		value : 28
// 	},
// 	{
// 		key   : 'c',
// 		value : 92
// 	},
// 	{
// 		key   : 'b',
// 		value : 87
// 	}
// ];
