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
import { ICartItem } from '../../types';
import CartItem from '../CartItem/CartItem';
import image from '../../assets/images/empty-cart.png';
import { formatCurrency } from '../../utils/formatCurrency';
import {
	openCart,
	closeCart,
	isOpen,
} from '../../store/shoppingCart/cartDisplaySlice';
import { cartItems } from '../../store/shoppingCart/cartProductsSlice';

export default function Cart() {
	const IOS =
		typeof navigator !== undefined &&
		/iPad|iPhone|iPod/.test(navigator.userAgent);
	const isCartOpen = useSelector(isOpen);
	const products = useSelector(cartItems);
	const dispatch = useDispatch();

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
		<Fragment>
			<SwipeableDrawer
				anchor={'right'}
				open={isCartOpen}
				onClose={toggleDrawer(false)}
				onOpen={toggleDrawer(true)}
				PaperProps={{
					sx: { width: { xs: '100%', sm: '560px' }, p: '16px' },
				}}
				disableBackdropTransition={!IOS}
				disableDiscovery={IOS}
			>
				<Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
					{' '}
					<IconButton
						onClick={toggleDrawer(false)}
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
					<FilledCart cartItems={products} />
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

function FilledCart({ cartItems }: { cartItems: ICartItem[] }) {
	return (
		<>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'flex-start',
					gap: '12px',
					overflowY: 'auto',
				}}
			>
				{cartItems.map((cartItem: ICartItem) => (
					<CartItem cartItem={cartItem} key={cartItem.product.id} />
				))}
			</Box>
			<Box mt={'auto'}>
				<Typography
					variant='h3'
					fontSize={'1.5rem'}
					color={'#545456'}
					mb={'24px'}
					pt={'24px'}
				>
					Total:{' '}
					{formatCurrency(
						cartItems.reduce(
							(acc: number, curr: ICartItem) =>
								acc + curr.product.price * curr.quantity,
							0
						)
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
