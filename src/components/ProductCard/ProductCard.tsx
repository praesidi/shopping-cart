import { styled } from '@mui/material/styles';
import {
	Paper,
	Card,
	Typography,
	CardActionArea,
	CardMedia,
	CardContent,
	CardActions,
	CardHeader,
	Button,
} from '@mui/material/';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const url =
	'https://images-na.ssl-images-amazon.com/images/I/71qmF0FHj7L._AC_SX679_.jpg';

export default function ProductCard({ product }: { product: any }) {
	return (
		<Card
			sx={{ minWidth: '280px', minHeight: '320px', margin: 0, padding: '4px' }}
		>
			<CardActionArea>
				<CardMedia
					component='img'
					height='240'
					image={url}
					sx={{ aspectRatio: '4 / 3' }}
					alt='green iguana'
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant='h5'
						component='div'
						sx={{ margin: 0 }}
					>
						{product.name}
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
						sx={{ fontSize: '24px' }}
					>
						{'$'}
						{product.price}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
				<Button
					variant='outlined'
					color='secondary'
					fullWidth={true}
					endIcon={<ShoppingCartIcon />}
				>
					Buy
				</Button>
			</CardActions>
		</Card>
	);
}
