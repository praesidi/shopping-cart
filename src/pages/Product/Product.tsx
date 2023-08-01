import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
import { Container, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import ProductGallery from '../../components/ProductGallery/ProductGallery';
import imagePlaceholder from '../../assets/images/image-placeholder.jpeg';

export default function Product(props: any) {
	const imagesDefault = [imagePlaceholder, imagePlaceholder];

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
							<ProductGallery
								images={props.image ? props.image : imagesDefault}
							/>
						</Box>
					</Grid>
					<Grid xs={6} md={4}>
						<Box>
							<Typography variant='h1'>{props.title}</Typography>
							<Typography variant='subtitle1'>{props.category}</Typography>
						</Box>
						<Box>
							<Typography variant='h2'>
								<Typography variant='body1'>{props.description}</Typography>
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Container>
			<Footer isDark={false} />
		</Container>
	);
}
