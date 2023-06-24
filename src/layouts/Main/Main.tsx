import cl from './Main.module.sass';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { Container, Box, MenuItem, Typography } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Sidebar from '../../components/Sidebar/Sidebar';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body1,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

export default function Main() {
	const [sortBy, setSortBy] = useState('');
	const [currentCategory, setCurrentCategory] = useState('All');

	return (
		<Container
			sx={{
				display: 'flex',
				justifyContent: 'space-evenly',
				gap: '48px',
				margin: '48px 0 80px',
			}}
			maxWidth={false}
		>
			<Box className={cl.sidebar}>
				<Box>
					Shop /{' '}
					<Box
						component={'span'}
						style={{ fontWeight: 600, fontSize: '1.5em' }}
					>
						{currentCategory}
					</Box>
				</Box>
				<Sidebar categories={['Guitars', 'Bass', 'Drums', 'Piano']} />
			</Box>
			<Box className={cl.products}>
				{/* TODO: remove select focus effect */}
				<Select
					sx={{
						width: '220px',
						marginLeft: 'auto',
						'&:focus': { backgroundColor: 'transparent' },
					}}
					displayEmpty
					value={sortBy}
					onChange={(e) => setSortBy(e.target.value)}
					variant='standard'
					defaultValue=''
				>
					<MenuItem value=''>
						<em>Sort By</em>
					</MenuItem>
					<MenuItem value='Popularity'>Popularity</MenuItem>
					<MenuItem value='From cheap'>Price (from cheap)</MenuItem>
					<MenuItem value='From expansive'>Price (from expansive)</MenuItem>
				</Select>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
				>
					{Array.from(Array(12)).map((_, index) => (
						<Grid xs={12} md={6} key={index}>
							<Item>
								<div style={{ height: '200px' }}>{index}</div>
							</Item>
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	);
}
