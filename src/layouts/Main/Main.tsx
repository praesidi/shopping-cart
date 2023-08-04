import { useState } from 'react';
import { Container, Box, CircularProgress } from '@mui/material';
// import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import SortSelect from '../../components/UI/SortSelect/SortSelect';
import ProductCard from '../../components/ProductCard/ProductCard';
import CategoryList from '../../components/CategoryList/CategoryList';
import useFetch from '../../hooks/useFetch';

// TODO: set sidebar width 100%, flex wrap for mobile devices
// TODO: add loading spinner

interface Product {
	id: number;
	title: string;
	category: string;
	price: number;
	description: string;
	image: string;
}

export default function Main() {
	const [sortBy, setSortBy] = useState('');
	const [currentCategory, setCurrentCategory] = useState('all');
	const [productCategories, setProductCategories] = useState(['all']);

	const { data: categories } = useFetch(
		'https://fakestoreapi.com/products/categories'
	);

	const {
		data: products,
		isLoading,
		error,
	} = useFetch('https://fakestoreapi.com/products');

	isLoading ? <CircularProgress color='secondary' /> : null;

	error ? <h1>Something went wrong :( Try to reload the page!</h1> : null;

	return (
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
						}}
					>
						{currentCategory}
					</Box>
				</Box>
				<CategoryList categories={categories} />
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
	);
}
