import { useState } from 'react';
import { Container, Box, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import SortSelect from '../../components/UI/SortSelect/SortSelect';
import ProductCard from '../../components/ProductCard/ProductCard';
import CategoryList from '../../components/CategoryList/CategoryList';

const categories = ['All', 'Guitars', 'Bass', 'Drums', 'Piano'];

const product = {
	id: 'pwVY4pSuAQ',
	name: 'yamaha 1337',
	price: 229,
	category: 'bass guitar',
	photos: ['https://images.static-thomann.de/pics/bdb/147148/13010524_800.jpg'],
};

// TODO: set sidebar width 100%, flex wrap for mobile devices
// TODO: add loading spinner

interface Product {
	id: number;
	title: string;
	category: string;
	price: number;
	description: string;
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
					<Box component={'span'} sx={{ fontWeight: 600, fontSize: '1.5em' }}>
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
					{Array.from(Array(4)).map((_, index) => {
						return (
							<Grid
								xs={2}
								md={6}
								lg={4}
								display='flex'
								justifyContent='center'
								alignItems='center'
								key={index}
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
