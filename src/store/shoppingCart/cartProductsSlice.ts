import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartItem } from '../../types';

const itemsFromLocalStorage = localStorage.getItem('cart');

const items =
	itemsFromLocalStorage !== null ? JSON.parse(itemsFromLocalStorage) : [];

const setItem = (item: ICartItem[]) => {
	localStorage.setItem('cart', JSON.stringify(item));
};
interface CartState {
	cartItems: ICartItem[];
}

const initialState: CartState = {
	cartItems: items,
};

export const cartProductsSlice = createSlice({
	name: 'cartItems',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<ICartItem>) => {
			const item = state.cartItems.find(
				(item) => item.product.id === action.payload.product.id
			);

			if (item === undefined) {
				state.cartItems.push(action.payload);
			} else {
				item.quantity += 1;
			}
			setItem(state.cartItems);
		},
		removeFromCart: (state, action: PayloadAction<ICartItem>) => {
			const item = state.cartItems.find(
				(item) => item.product.id === action.payload.product.id
			);
			if (
				item &&
				item.product.id === action.payload.product.id &&
				item.quantity > 1
			) {
				item.quantity -= 1;
			} else if (item) {
				const index = state.cartItems.indexOf(item);
				state.cartItems.splice(index, 1);
			}
			setItem(state.cartItems);
		},
	},
});

export const { addToCart, removeFromCart } = cartProductsSlice.actions;

export const cartItems = (state: any) => state.cartProducts.cartItems;

export default cartProductsSlice.reducer;
