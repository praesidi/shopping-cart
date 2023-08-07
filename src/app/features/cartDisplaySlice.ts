import { createSlice } from '@reduxjs/toolkit';

export const cartDisplaySlice = createSlice({
	name: 'cartDisplay',
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

export const { openCart, closeCart } = cartDisplaySlice.actions;

export const isOpen = (state: any) => state.cartDisplay.isOpen;

export default cartDisplaySlice.reducer;
