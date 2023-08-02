import { Box, Button, IconButton, Typography } from '@mui/material';
import image from '../../assets/images/empty-cart.png';
import ClearIcon from '@mui/icons-material/Clear';
import CartItem from '../CartItem/CartItem';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

// TODO: make cart to take whole width on mobile devices

export default function Cart(props: any) {
	function closeCart() {}
	console.log(props);

	return (
		<Box
			sx={{
				position: 'absolute',
				width: '30vw',
				height: '100vh',
				padding: '10px',
				overflow: 'scroll',
				background: '#bbc9d6',
				display: 'flex',
				flexDirection: 'column',
				zIndex: 9999,
			}}
		>
			<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
				<IconButton
					// onClick={() => closeCart()}
					aria-label='delete'
					size='medium'
				>
					<ClearIcon fontSize='medium' />
				</IconButton>
			</Box>
			<Box textAlign={'center'}>
				<Typography
					variant='h1'
					sx={{ fontSize: '2rem', textTransform: 'uppercase' }}
				>
					your cart
				</Typography>
			</Box>
			{props.isEmpty ? <EmptyCart /> : <FilledCart products={props.products} />}
		</Box>
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
					width={'80%'}
				></Box>
				<Typography
					variant='h4'
					textTransform={'uppercase'}
					fontSize={'1.3rem'}
				>
					Your Cart is Empty
				</Typography>
			</Box>
		</>
	);
}

function FilledCart({ products }: { products: any }) {
	// const total = products.reduce(
	// 	(sum: number, current: any) => sum + current.price,
	// 	0
	// );
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
				{/* {products.map(() => {})} */}
			</Box>
			<Box mt={'auto'}>
				<Typography variant='h3' fontSize={'1.5rem'} mb={'20px'}>
					Total: ${420.69}
				</Typography>
				<Button
					variant='outlined'
					fullWidth={true}
					color='secondary'
					endIcon={<ShoppingCartCheckoutIcon />}
				>
					Checkout
				</Button>
			</Box>
		</>
	);
}
