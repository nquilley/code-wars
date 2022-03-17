function count(string) {
	const slice = string.split('');
	const count = slice.reduce((object, item) => {
		object[item] = (object[item] || 0) + 1;
		return object;
	}, {});

	return count;
}

count('aba');
