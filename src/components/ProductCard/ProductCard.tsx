import { styled } from '@mui/material/styles';
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

interface Product {
	id: number;
	title: string;
	category: string;
	price: number;
	description: string;
	image: string;
}

export default function ProductCard({ product }: { product: Product }) {
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
					alt='green iguana'
				/>
				<CardContent
					sx={{ display: 'flex', flexDirection: 'column', height: '50%' }}
				>
					<Typography gutterBottom variant='h5' sx={{ margin: 0 }}>
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
						{'$'}
						{product.price}
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
					endIcon={<ShoppingCartIcon />}
				>
					Buy
				</Button>
			</CardActions>
		</Card>
	);
}
