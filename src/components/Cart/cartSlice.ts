import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cartManager',
	initialState: {
		isOpen: false,
	},
	reducers: {
		openCart: (state) => {
			state.isOpen = true;
		},
		closeCart: (state) => {
			state.isOpen = false;
		},
	},
});

export const { openCart, closeCart } = cartSlice.actions;

export const isOpen = (state: any) => state.cartManager.isOpen;

export default cartSlice.reducer;
