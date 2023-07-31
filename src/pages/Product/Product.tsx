import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';
import ProductBody from '../../layouts/ProductBody/ProductBody';
import { Container, Box } from '@mui/material';

export default function Product() {
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
			<ProductBody />
			<Footer isDark={false} />
		</Container>
	);
}
