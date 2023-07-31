import { useState } from 'react';
import { Container, Box, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import SortSelect from '../../components/UI/SortSelect/SortSelect';
import ProductsGrid from '../../components/ProductsGrid/ProductsGrid';
import ProductCard from '../../components/ProductCard/ProductCard';
import CategoryList from '../../components/CategoryList/CategoryList';

const categories = ['All', 'Guitars', 'Bass', 'Drums', 'Piano'];

const product = {
	id: 'pwVY4pSuAQ',
	name: 'yamaha 1337',
	price: 229,
	weight: 4.3,
	category: 'bass guitar',
	sales: 32,
	inStock: 12,
	'release date': '12.12.2023',
	packing: {
		type: 'box',
	},
	photos: [
		'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FIbanez-String-Guitar-Handed-GSR200BK%2Fdp%2FB002BJHFFG&psig=AOvVaw2gZsV1gt5t2FkZK2-L2qbw&ust=1687801619072000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCGjZL93v8CFQAAAAAdAAAAABAD',
	],
};

// TODO: set sidebar width 100%, flex wrap for mobile devices
// TODO: add loading spinner

export default function Main() {
	const [sortBy, setSortBy] = useState('');
	const [currentCategory, setCurrentCategory] = useState('All');

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
				<ProductsGrid>
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
				</ProductsGrid>
			</Box>
		</Container>
	);
}