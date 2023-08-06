import { configureStore } from '@reduxjs/toolkit';
import cartManagerReducer from '../components/Cart/cartSlice';

export default configureStore({
	reducer: {
		cartManager: cartManagerReducer,
	},
});
