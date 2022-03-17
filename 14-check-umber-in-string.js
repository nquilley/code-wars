function validatePIN(pin) {
	console.log('the PIN is' + pin);
	if (pin.length === 4 || pin.length === 6) {
		let isnum = /^\d+$/.test(pin);
		if (isnum) {
			return true;
		}
	}
	return false;
}

console.log(validatePIN('87.0'));
console.log('09876 '.length);
console.log('The parseInt is... ' + parseInt('0'));
console.log('The typeof parseInt is... ' + typeof parseInt('0'));
