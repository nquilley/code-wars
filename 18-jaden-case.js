const jaden = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function() {
	const array2 = this.split(' ');
	let result = '';
	for (word of array2) {
		result += ' ' + word[0].toUpperCase().concat(word.slice(1));
	}
	return result.trim();
};

console.log(jaden.toJadenCase());

// let abc = 'abc';

// let capatilised = abc[0].toUpperCase().concat(abc.slice(1));
// console.log(capatilised);

// const sancho = ['How', 'can', 'mirrors', 'be', 'real', 'if', 'our', 'eyes', "aren't", 'real']

// sancho.map((s) =>{
//     console.log(s)
// })
