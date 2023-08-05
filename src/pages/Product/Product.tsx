import {
	Container,
	Box,
	Typography,
	Button,
	CircularProgress,
} from '@mui/material';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductGallery from '../../components/ProductGallery/ProductGallery';
import imagePlaceholder from '../../assets/images/image-placeholder.jpeg';
import useFetch from '../../hooks/useFetch';
import Grid from '@mui/material/Unstable_Grid2';
import { ShoppingCart, ArrowBack } from '@mui/icons-material';
import { Link, useParams } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatCurrency';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

export default function Product() {
	const imagesDefault = [imagePlaceholder];
	const params = useParams();

	const {
		data: product,
		isLoading,
		error,
	}: {
		data: any;
		isLoading: boolean;
		error: string | null;
	} = useFetch(`https://fakestoreapi.com/products/${params.id}`);

	if (isLoading) return <CircularProgress color='secondary' size={80} />;

	if (error) return <ErrorMessage />;

	return (
		<Container
			sx={{
				width: '100vw',
				maxWidth: '1400px',
				minHeight: '100vh',
				backgroundColor: 'whitesmoke',
				color: '#6f6e6e',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
			maxWidth={false}
		>
			<Header isDark={false} />
			<Container
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-evenly',
					padding: '0 24px',
					marginBottom: '64px',
					// minHeight: '100%',
				}}
				disableGutters
				maxWidth={false}
			>
				<Box sx={{ marginBottom: '12px' }}>
					<Link to={'/products'}>
						<Button startIcon={<ArrowBack />}>back to store</Button>
					</Link>
				</Box>
				<Grid container columns={{ xs: 6, md: 8 }} spacing={3}>
					<Grid xs={6} md={4}>
						<Box
							sx={{
								height: '500px',
								backgroundColor: '#fff',
								padding: '8px',
							}}
						>
							<ProductGallery
								images={[product?.image] ? [product?.image] : imagesDefault}
							/>
						</Box>
					</Grid>
					<Grid xs={6} md={4}>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								gap: '30px',
								height: '100%',
							}}
						>
							<Box>
								<Typography
									variant='h1'
									sx={{ fontSize: '2.5rem', fontWeight: 300 }}
								>
									{product?.title}
								</Typography>
								<Typography
									variant='h2'
									sx={{ fontSize: '1.5rem', fontWeight: 300 }}
								>
									{product?.category}
								</Typography>
							</Box>
							<Box>
								<Typography
									variant='h3'
									sx={{ fontSize: '1.6rem', margin: '8px 0', fontWeight: 300 }}
								>
									Description
								</Typography>
								<Typography
									variant='body1'
									sx={{ fontSize: '1.2rem', fontWeight: 300 }}
								>
									{product?.description}
								</Typography>
							</Box>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center',
									marginTop: 'auto',
								}}
							>
								<Box
									sx={{
										width: '100%',
										display: 'flex',
										justifyContent: 'flex-start',
										marginBottom: '16px',
									}}
								>
									<Typography
										variant='h3'
										sx={{
											fontSize: '1.8rem',
											fontWeight: 500,
										}}
									>
										Price:
										<Box
											component={'span'}
											sx={{
												fontWeight: 300,
												fontStyle: 'italic',
												marginLeft: '8px',
											}}
										>
											{formatCurrency(product?.price)}
										</Box>
									</Typography>
								</Box>
								<Button
									sx={{ width: '80%' }}
									variant='outlined'
									color='secondary'
									fullWidth
									endIcon={<ShoppingCart />}
								>
									Add to cart
								</Button>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
			<Footer isDark={false} />
		</Container>
	);
}
