import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { useState, useRef } from 'react';
import { Container, Box, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import SortSelect from '../../components/UI/SortSelect/SortSelect';
import ProductCard from '../../components/ProductCard/ProductCard';
import CategoryList from '../../components/CategoryList/CategoryList';
import useFetch from '../../hooks/useFetch';

interface Product {
	id: number;
	title: string;
	category: string;
	price: number;
	description: string;
	image: string;
}

export default function Shop() {
	const [sortBy, setSortBy] = useState('');
	const [currentCategory, setCurrentCategory] = useState('all');
	const fetchURL = useRef('');

	const { data: categories } = useFetch(
		'https://fakestoreapi.com/products/categories'
	);

	if (currentCategory === 'all') {
		fetchURL.current = 'https://fakestoreapi.com/products';
	} else {
		fetchURL.current = `https://fakestoreapi.com/products/category/${currentCategory}`;
	}

	const { data: products, isLoading, error } = useFetch(fetchURL.current);

	console.log(isLoading);

	if (isLoading) return <CircularProgress color='secondary' size={80} />;

	if (error) return <ErrorMessage />;

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
				{/* Sidebar */}
				<Box
					sx={{
						marginRight: '24px',
						display: 'flex',
						flexDirection: 'column',
						gap: '30px',
						minWidth: '20%',
					}}
				>
					<Box>
						Shop /{' '}
						<Box
							component={'span'}
							sx={{
								fontWeight: 600,
								fontSize: '1.5em',
								textTransform: 'capitalize',
								display: 'block',
							}}
						>
							{currentCategory}
						</Box>
					</Box>
					<CategoryList categories={categories} onSelect={setCurrentCategory} />
				</Box>
				{/* Main Container with Products */}
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
					<SortSelect sortBy={sortBy} setSortBy={setSortBy} />
					<Grid
						container
						columns={{ xs: 2, md: 12, lg: 12 }}
						spacing={{ xs: 2, md: 3, lg: 4 }}
					>
						{(products as Product[] | null)?.map((product) => {
							return (
								<Grid
									xs={2}
									md={6}
									lg={4}
									display='flex'
									justifyContent='center'
									alignItems='center'
									key={product?.id}
								>
									<ProductCard product={product} />
								</Grid>
							);
						})}
					</Grid>
				</Box>
			</Container>
			<Footer isDark={false} />
		</Container>
	);
}
