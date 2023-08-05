export default function sortFromPrice(fromCheap: boolean, array: any[] | null) {
	if (fromCheap) {
		return array?.slice(0).sort((a, b) => {
			return a.price - b.price;
		});
	} else {
		return array?.slice(0).sort((a, b) => {
			return b.price - a.price;
		});
	}
}
