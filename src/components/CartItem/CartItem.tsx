import { ICartItem } from '../../types';
import { Box, Typography } from '@mui/material';
import QuantityPicker from '../UI/QuantityPicker/QuantityPicker';
import { formatCurrency } from '../../utils/formatCurrency';
import {
	addToCart,
	removeFromCart,
} from '../../store/shoppingCart/cartProductsSlice';
import { useDispatch } from 'react-redux';

export default function CartItem({ cartItem }: { cartItem: ICartItem }) {
	const dispatch = useDispatch();

	if (cartItem.quantity) {
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
					src={cartItem.product.image}
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
						{cartItem.product.title}
					</Typography>
					<Typography variant='h5' fontSize={14}>
						{formatCurrency(cartItem.product.price)}
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
						Total: {formatCurrency(cartItem.product.price * cartItem.quantity)}
					</Typography>
					<QuantityPicker
						min={0}
						max={9}
						value={cartItem.quantity}
						onAdd={() => dispatch(addToCart(cartItem))}
						onRemove={() => dispatch(removeFromCart(cartItem))}
					/>
				</Box>
			</Box>
		);
	} else {
		return null;
	}
}
