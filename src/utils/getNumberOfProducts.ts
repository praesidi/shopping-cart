import { ICartItem } from '../types';

export default function getNumberOfProducts(items: ICartItem[]) {
	return items.reduce((acc: number, item: ICartItem) => {
		return acc + item.quantity;
	}, 0);
}
