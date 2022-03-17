function solve(s) {
	let regex = /[aeiou]/gi;
	let removed = s.replace(regex, ' ');
	let slice = removed.split(' ');
	let dictionary = {
		a : 1,
		b : 2,
		c : 3,
		d : 4,
		e : 5,
		f : 6,
		g : 7,
		h : 8,
		i : 9,
		j : 10,
		k : 11,
		l : 12,
		m : 13,
		n : 14,
		o : 15,
		p : 16,
		q : 17,
		r : 18,
		s : 19,
		t : 20,
		u : 21,
		v : 22,
		w : 23,
		x : 24,
		y : 25,
		z : 26
	};

	let numsArray = [];

	for (n of slice) {
		if (n.length > 1) {
			let nestedResult = 0;
			for (letter of n) {
				nestedResult += dictionary[letter];
				numsArray.push(nestedResult);
			}
		} else {
			numsArray.push(dictionary[n]);
		}
	}
	return Math.max(...numsArray.filter(Number.isFinite));
}

console.log(solve('zodiacs'));

let word = 'zodiacs';

let str = 'Twas the night before Xmas... xmas xmas xmas';
let newstr = str.replace(/xmas/gi, ' ');
console.log(newstr); // Twas the night before Christmas...
