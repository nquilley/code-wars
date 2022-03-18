function reverse(str) {
	let trimmed = str.trim();
	//console.log(trimmed);
	let array = trimmed.split(' ');
	console.log(array);
	let result = [];
	array.map((l, index) => {
		console.log(index);
		console.log(l);
		if (index % 2 === 1) {
			let reveredWord = [];
			for (a of l) {
				console.log(a);
				reveredWord.unshift(a);
			}
			result.push(reveredWord.join('') + ' ');
		} else {
			let word = [];
			for (a of l) {
				console.log(a);
				word.push(a);
			}
			result.push(word.join('') + ' ');
		}
	});
	return console.log(result.join('').trim());
}

const test = 'Reverse this string, please!';

// desired output ---> "Reverse siht string, !esaelp"

reverse(test);

// Top rated answer - remeber resverse() exists!

// function reverse(str){

// 	let arr = str.split(" ");

// 	for(var i = 1; i<arr.length; i+=2){
// 		arr[i] = arr[i].split('').reverse().join("");
// 	}

// 	return arr.join(" ").trim();

//   }
