import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { useState, useRef } from 'react';
import { Container, Box, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import SortingSelectionMenu from '../../components/UI/SortingSelectionMenu/SortingSelectionMenu';
import ProductCard from '../../components/ProductCard/ProductCard';
import CategoryList from '../../components/CategoryList/CategoryList';
import useFetch from '../../hooks/useFetch';
import sortByPrice from '../../utils/sortByPrice';
import { IProduct } from '../../types';

export default function Shop() {
	const [sortBy, setSortBy] = useState('');
	const [currentCategory, setCurrentCategory] = useState('all');
	const fetchURL = useRef('');
	const sortedProducts = useRef<IProduct[]>();

	const { data: categories } = useFetch(
		'https://fakestoreapi.com/products/categories'
	);

	if (currentCategory === 'all') {
		fetchURL.current = 'https://fakestoreapi.com/products';
	} else {
		fetchURL.current = `https://fakestoreapi.com/products/category/${currentCategory}`;
	}

	const { data: products, isLoading, error } = useFetch(fetchURL.current);

	if (sortBy === 'from cheap') {
		sortedProducts.current = sortByPrice(true, products);
	} else if (sortBy === 'from expansive') {
		sortedProducts.current = sortByPrice(false, products);
	}

	if (isLoading)
		return (
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<CircularProgress color='secondary' size={80} />
			</Box>
		);
	if (error) return <ErrorMessage />;

	return (
		<Container
			sx={{
				width: '100%',
				minHeight: '100vh',
				backgroundColor: 'whitesmoke',
				color: '#6f6e6e',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
			maxWidth={'xl'}
		>
			<Header isDark={false} />
			<Container
				sx={{
					display: 'flex',
					justifyContent: 'space-evenly',
					margin: '40px 0 80px',
					flexDirection: { xs: 'column', sm: 'row' },
					flexWrap: { xs: 'wrap', sm: 'nowrap' },
				}}
				maxWidth={false}
			>
				{/* Sidebar */}
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '30px',
						minWidth: '20%',
						marginRight: { xs: '0', sm: '24px' },
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
					<CategoryList
						categories={categories}
						currentCategory={currentCategory}
						setCurrentCategory={setCurrentCategory}
					/>
				</Box>
				{/* Main Container with Products */}
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
					<SortingSelectionMenu sortBy={sortBy} setSortBy={setSortBy} />
					<Grid
						container
						columns={{ xs: 2, md: 12, lg: 12 }}
						spacing={{ xs: 2, md: 3, lg: 4 }}
					>
						{(sortBy === '' ? products : sortedProducts.current)?.map(
							(product) => {
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
										<ProductCard cartItem={{ product: product, quantity: 1 }} />
									</Grid>
								);
							}
						)}
					</Grid>
				</Box>
			</Container>
			<Footer isDark={false} />
		</Container>
	);
}
