export interface IProduct {
	id: number;
	title: string;
	category: string;
	price: number;
	description: string;
	image: string;
}

export interface ICartItem {
	product: IProduct;
	quantity: number;
}
