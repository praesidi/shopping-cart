import { configureStore } from '@reduxjs/toolkit';
import cartDisplayReducer from './features/cartDisplaySlice';
import cartProductsReducer from './features/cartProductsSlice';

export default configureStore({
	reducer: {
		cartDisplay: cartDisplayReducer,
		cartProducts: cartProductsReducer,
	},
});
