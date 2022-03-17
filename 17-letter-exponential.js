// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(string) {
	const lowerCase = string.toLowerCase();
	let result = '';
	for (let i = 0; i < lowerCase.length; i++) {
		console.log(lowerCase[i].repeat(i));
		result += lowerCase[i].toUpperCase() + lowerCase[i].repeat(i) + (i == lowerCase.length - 1 ? '' : '-');
	}

	return result;
}

console.log(accum('abcd'));
