import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome/Welcome';
import Shop from './pages/Shop/Shop';
import Error from './pages/Error/Error';
import Product from './pages/Product/Product';
import Cart from './components/Cart/Cart';

export default function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Welcome />} />
				<Route path='/products' element={<Shop />} />
				<Route path='/products/:id' element={<Product />} />
				<Route path='*' element={<Error />} />
			</Routes>
			<Cart />
		</>
	);
}
