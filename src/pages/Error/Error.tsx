import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

// TODO: read erroe message and show an error screen for an each certain error

export default function Error({ errorCase }: { errorCase: string }) {
	switch (errorCase) {
		case 'page not found':
			return <PageNotFound />;
		case 'product not found':
			return <ProductNotFound />;
		default:
			return <UnknownError />;
	}
}

function PageNotFound() {
	return (
		<Box>
			<Typography variant='h2'>Ooops... Something went wrong :(</Typography>
			<Typography variant='body2'>
				<Link to='/'>Return to the home page</Link>
			</Typography>
		</Box>
	);
}

function ProductNotFound() {
	return (
		<Box>
			<Typography variant='h2'>Ooops... Something went wrong :(</Typography>
			<Typography variant='body2'>
				<Link to='/'>Return to the home page</Link>
			</Typography>
		</Box>
	);
}

function UnknownError() {
	return (
		<Box>
			<Typography variant='h2'>Ooops... Something went wrong :(</Typography>
			<Typography variant='body2'>
				<Link to='/'>Return to the home page</Link>
			</Typography>
		</Box>
	);
}
