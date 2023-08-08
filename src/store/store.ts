import { configureStore } from '@reduxjs/toolkit';
import cartDisplayReducer from './shoppingCart/cartDisplaySlice';
import cartProductsReducer from './shoppingCart/cartProductsSlice';

export default configureStore({
	reducer: {
		cartDisplay: cartDisplayReducer,
		cartProducts: cartProductsReducer,
	},
});
