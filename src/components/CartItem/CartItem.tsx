import { Product } from '../../types';
import { Box, Typography } from '@mui/material';
import QuantityPicker from '../UI/QuantityPicker/QuantityPicker';
import { formatCurrency } from '../../utils/formatCurrency';
import {
	productsInCart,
	addToCart,
	removeFromCart,
} from '../../store/shoppingCart/cartProductsSlice';
import { useDispatch, useSelector } from 'react-redux';
import getNumberOfProducts from '../../utils/getNumberOfProducts';

export default function CartItem({ product }: { product: Product }) {
	const products = useSelector(productsInCart);
	const dispatch = useDispatch();
	const quantity = getNumberOfProducts(products, product.id);
	// console.log(products);

	if (quantity) {
		return (
			// Container
			<Box
				sx={{
					display: 'flex',
					boxSizing: 'border-box',
					justifyContent: 'space-between',
					alignItems: 'center',
					gap: '8px',
					minHeight: '80px',
					width: '100%',
					padding: '8px 0',
				}}
			>
				{/* Image */}
				<Box
					component='img'
					sx={{
						aspectRatio: '4 / 3',
						objectFit: 'contain',
						height: '100%',
						width: '15%',
					}}
					src={product.image}
					alt='product image'
					loading='lazy'
				/>
				{/* Title & Price */}
				<Box
					sx={{
						height: '100%',
						width: { xs: '50%', sm: '60%' },
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						gap: '8px',
					}}
				>
					<Typography
						variant='h4'
						fontSize={16}
						sx={{
							textOverflow: 'ellipsis',
							overflow: 'hidden',
							whiteSpace: 'nowrap',
						}}
					>
						{product.title}
					</Typography>
					<Typography variant='h5' fontSize={14}>
						{formatCurrency(product.price)}
					</Typography>
				</Box>
				{/* Total & Quantity Picker */}
				<Box
					sx={{
						height: '100%',
						width: { xs: '25%', sm: '15%' },
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '4px',
						marginLeft: 'auto',
						textAlign: 'center',
					}}
				>
					<Typography>
						Total: {formatCurrency(product.price * quantity)}
					</Typography>
					<QuantityPicker
						min={0}
						max={9}
						value={quantity}
						onAdd={() => dispatch(addToCart(product))}
						onRemove={() => dispatch(removeFromCart(product))}
					/>
				</Box>
			</Box>
		);
	} else {
		return null;
	}
}
