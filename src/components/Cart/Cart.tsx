import { Fragment } from 'react';
import {
	Box,
	Button,
	IconButton,
	Typography,
	SwipeableDrawer,
} from '@mui/material';
import { ArrowBack, ShoppingCartCheckout } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../../types';
import CartItem from '../CartItem/CartItem';
import image from '../../assets/images/empty-cart.png';
import { formatCurrency } from '../../utils/formatCurrency';
import {
	openCart,
	closeCart,
	isOpen,
} from '../../store/shoppingCart/cartDisplaySlice';
import { productsInCart } from '../../store/shoppingCart/cartProductsSlice';

// FIXME: clicking outside of cart doesn't close it

export default function Cart() {
	const anchor = 'right';
	const isCartOpen = useSelector(isOpen);
	const products = useSelector(productsInCart);
	const dispatch = useDispatch();

	return (
		<Fragment>
			<SwipeableDrawer
				anchor={anchor}
				open={isCartOpen}
				onClose={() => dispatch(openCart())}
				onOpen={() => dispatch(closeCart())}
				PaperProps={{
					sx: { width: { xs: '100%', sm: '560px' }, p: '16px' },
				}}
			>
				<Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
					{' '}
					<IconButton
						onClick={() => dispatch(closeCart())}
						aria-label='delete'
						size='medium'
					>
						<ArrowBack sx={{ fontSize: '1.8rem' }} />
					</IconButton>
				</Box>
				<Box textAlign={'center'}>
					<Typography
						variant='h1'
						sx={{
							fontSize: '2rem',
							textTransform: 'uppercase',
							marginBottom: '24px',
						}}
					>
						your cart
					</Typography>
				</Box>
				{products.length < 1 ? (
					<EmptyCart />
				) : (
					<FilledCart products={products} />
				)}
			</SwipeableDrawer>
		</Fragment>
	);
}

function EmptyCart() {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
					marginTop: '40px',
				}}
			>
				<Box
					component={'img'}
					src={image}
					alt='empty cart illustration'
					height={'360px'}
				></Box>
				<Typography
					variant='h4'
					textTransform={'uppercase'}
					fontSize={'1.3rem'}
					mt={'16px'}
				>
					Your Cart is Empty
				</Typography>
			</Box>
		</>
	);
}

function FilledCart({ products }: { products: Product[] }) {
	console.log(products);
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'flex-start',
					gap: '12px',
					overflow: 'scroll',
				}}
			>
				{[...new Set(products)].map((product: Product) => (
					<CartItem product={product} key={product.id} />
				))}
			</Box>
			<Box mt={'auto'}>
				<Typography
					variant='h3'
					fontSize={'1.5rem'}
					color={'#545456'}
					mb={'20px'}
				>
					Total:{' '}
					{formatCurrency(
						products.reduce((acc: number, curr: Product) => acc + curr.price, 0)
					)}
				</Typography>
				<Button
					variant='outlined'
					fullWidth={true}
					color='secondary'
					endIcon={<ShoppingCartCheckout />}
				>
					Checkout
				</Button>
			</Box>
		</>
	);
}
