import {
	Card,
	Typography,
	CardActionArea,
	CardMedia,
	CardContent,
	CardActions,
	Button,
} from '@mui/material/';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { formatCurrency } from '../../utils/formatCurrency';
import { ICartItem, IProduct } from '../../types';
import { openCart } from '../../store/shoppingCart/cartDisplaySlice';
import { addToCart } from '../../store/shoppingCart/cartProductsSlice';
import { useDispatch } from 'react-redux';

export default function ProductCard({ cartItem }: { cartItem: ICartItem }) {
	const dispatch = useDispatch();
	const product = cartItem.product;

	return (
		<Card
			sx={{
				minWidth: '280px',
				width: '90%',
				minHeight: '320px',
				height: '100%',
				margin: 0,
				padding: '4px',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<CardActionArea
				sx={{ height: '90%' }}
				component={Link}
				to={`./${product.id}`}
			>
				<CardMedia
					component='img'
					image={product.image}
					sx={{
						aspectRatio: '4 / 3',
						objectFit: 'contain',
						padding: '5px',
						height: '50%',
					}}
					alt='product image'
					loading='lazy'
				/>
				<CardContent
					sx={{ display: 'flex', flexDirection: 'column', height: '50%' }}
				>
					<Typography
						gutterBottom
						variant='h5'
						sx={{
							margin: 0,
							fontSize: '1.3rem',
							overflow: 'hidden',
						}}
					>
						{product.title}
					</Typography>
					<Typography
						variant='body2'
						color='text.secondary'
						sx={{ marginBottom: '16px' }}
					>
						{product.category}
					</Typography>
					<Typography
						variant='body2'
						color='text.secondary'
						sx={{ fontSize: '24px', marginTop: 'auto' }}
					>
						{formatCurrency(product.price)}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions
				sx={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}
			>
				<Button
					variant='outlined'
					color='secondary'
					fullWidth={true}
					onClick={() => {
						dispatch(addToCart(cartItem));
						dispatch(openCart());
					}}
					endIcon={<ShoppingCartIcon />}
				>
					Buy
				</Button>
			</CardActions>
		</Card>
	);
}
