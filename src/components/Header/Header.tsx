// import { Input, Box } from '@mui/material';
import { Box } from '@mui/material';
import CartButton from '../../components/UI/CartButton/CartButton';
import Logo from '../../components/UI/Logo/Logo';
import { openCart, closeCart } from '../../store/shoppingCart/cartDisplaySlice';
import { cartItems } from '../../store/shoppingCart/cartProductsSlice';
import { useDispatch, useSelector } from 'react-redux';
import getNumberOfProducts from '../../utils/getNumberOfProducts';

export default function Header({ isDark }: { isDark: boolean }) {
	// const inputStyling = isDark
	// 	? { style: { color: 'whitesmoke' } }
	// 	: { style: { color: '#6f6e6e' } };

	const dispatch = useDispatch();
	const products = useSelector(cartItems);

	const cartQuantity = getNumberOfProducts(products);

	const toggleDrawer =
		(open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event &&
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return;
			}

			if (open) {
				dispatch(openCart());
			} else {
				dispatch(closeCart());
			}
		};

	return (
		<Box
			component={'header'}
			sx={{
				display: 'flex',
				width: '100%',
				justifyContent: 'space-around',
				padding: '16px 0',
			}}
		>
			<Box sx={{ width: '100%' }}>
				<Logo props={{ isDark: isDark, size: '56px' }} />
			</Box>
			<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
				<Box component={'form'} sx={{ width: { xs: '160px', sm: '240px' } }}>
					{/* <Input
						placeholder='Search...'
						color='secondary'
						fullWidth
						inputProps={{
							...inputStyling,
						}}
					/> */}
				</Box>
				<CartButton
					size='small'
					color='primary'
					badgeValue={cartQuantity}
					badgeMaxValue={9}
					badgeColor='secondary'
					iconSize='large'
					onClick={toggleDrawer(true)}
				/>
			</Box>
		</Box>
	);
}
