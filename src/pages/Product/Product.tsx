import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
import { Container, Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import ProductGallery from '../../components/ProductGallery/ProductGallery';
import image1 from '../../assets/images/empty-cart.png';
import image2 from '../../assets/images/error.png';

export default function Product() {
	const bocchies = [
		image1,
		image2,
		'https://swiperjs.com/demos/images/nature-1',
		'https://swiperjs.com/demos/images/nature-2',
		'https://swiperjs.com/demos/images/nature-3',
		'https://swiperjs.com/demos/images/nature-4',
	];

	return (
		<Container
			sx={{
				width: '100vw',
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
					justifyContent: 'space-evenly',
					padding: '0 24px',
					margin: '40px 0 80px',
				}}
				disableGutters
				maxWidth={false}
			>
				<Grid container columns={{ xs: 6, md: 8 }} spacing={2}>
					<Grid xs={6} md={4}>
						<Box
							sx={{ height: '500px', backgroundColor: '#fff', padding: '8px' }}
						>
							<ProductGallery images={bocchies} />
						</Box>
					</Grid>
					<Grid xs={6} md={4}>
						<Box>Title</Box>
						<Box>Description</Box>
					</Grid>
				</Grid>
			</Container>
			<Footer isDark={false} />
		</Container>
	);
}
