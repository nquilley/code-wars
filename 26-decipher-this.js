function decipherThis(str) {
	const wordsArray = str.split(' ');
	console.log(wordsArray);
	const result = wordsArray.map((word) => {
		console.log('word is ' + word);
		const char = parseInt(word);
		const text = word.slice(char.toString().length);
		console.log('text is ' + text);
		const firstLetter = String.fromCharCode(char);
		if (text.length > 1) {
			return firstLetter + text[text.length - 1] + text.slice(1, -1) + text[0];
		} else if (text.length === 1) {
			return firstLetter + text;
		} else {
			return firstLetter;
		}
	});
	return result.join(' ');
}

console.log(decipherThis('72olle 103doo 100ya 97 103o'));
//'Hello good day a go'

//https://www.codewars.com/kata/581e014b55f2c52bb00000f8/solutions/javascript
