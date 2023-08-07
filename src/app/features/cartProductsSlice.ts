import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types';

interface CartState {
	productsInCart: Product[];
}

const initialState: CartState = {
	productsInCart: [],
};

export const cartProductsSlice = createSlice({
	name: 'cartProducts',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<Product>) => {
			state.productsInCart.push(action.payload);
		},
		removeFromCart: (state, action: PayloadAction<Product>) => {
			state.productsInCart.filter((product) => product !== action.payload);
		},
	},
});

export const { addToCart, removeFromCart } = cartProductsSlice.actions;

export const productsInCart = (state: any) => state.cartProducts.productsInCart;

export default cartProductsSlice.reducer;
