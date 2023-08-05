function sortFromCheap(array: any[]) {
	const sortedArray = array.sort((a, b) => {
		return a.price - b.price;
	});

	return sortedArray;
}

function sortFromExpansive(array: any[]) {
	const sortedArray = array.sort((a, b) => {
		return b.price - a.price;
	});

	return sortedArray;
}

export { sortFromCheap, sortFromExpansive };
