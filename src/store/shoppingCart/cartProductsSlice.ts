import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types';

const itemsFromLocalStorage = localStorage.getItem('cart');

const products =
	itemsFromLocalStorage !== null ? JSON.parse(itemsFromLocalStorage) : [];

const setItem = (item: Product[]) => {
	localStorage.setItem('cart', JSON.stringify(item));
};
interface CartState {
	productsInCart: Product[];
}

const initialState: CartState = {
	productsInCart: products,
};

export const cartProductsSlice = createSlice({
	name: 'cartProducts',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<Product>) => {
			state.productsInCart.push(action.payload);
			setItem(state.productsInCart);
		},
		removeFromCart: (state, action: PayloadAction<Product>) => {
			for (let i = 0; i < state.productsInCart.length; i++) {
				if (state.productsInCart[i].id === action.payload.id) {
					state.productsInCart.splice(i, 1);
					break;
				}
			}
			setItem(state.productsInCart);
		},
	},
});

export const { addToCart, removeFromCart } = cartProductsSlice.actions;

export const productsInCart = (state: any) => state.cartProducts.productsInCart;

export default cartProductsSlice.reducer;

export const localStorageMiddleware: Middleware =
	(storeAPI) => (next) => (action) => {
		const result = next(action);

		// Save the updated cart state to local storage
		if (action.type === 'cart/addItem' || action.type === 'cart/removeItem') {
			localStorage.setItem('cart', JSON.stringify(storeAPI.getState().cart));
		}

		return result;
	};
