export default function getNumberOfProducts(
	products: any[],
	productID: number | string
) {
	return products.filter((product: any) => product.id === productID).length;
}
