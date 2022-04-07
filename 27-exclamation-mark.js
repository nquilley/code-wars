function balance(left, right) {
	function numberOf(string, sign) {
		return string.split(sign).length - 1;
	}
	const leftAmountEx = numberOf(left, '!') * 2;
	const leftAmountQu = numberOf(left, '?') * 3;
	const lefttotal = leftAmountEx + leftAmountQu;

	const rightAmountEx = numberOf(right, '!') * 2;
	const rightAmountQu = numberOf(right, '?') * 3;
	const righttotal = rightAmountEx + rightAmountQu;

	if (lefttotal > righttotal) {
		return 'Left';
	} else if (lefttotal < righttotal) {
		return 'Right';
	} else return 'Balance';
}

console.log(balance('!!???!????', '??!!?!!!!!!!'));
