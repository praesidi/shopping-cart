import { Typography } from '@mui/material';

export default function ErrorMessage() {
	return (
		<>
			<Typography variant='h2' sx={{ textAlign: 'center', color: '#949494' }}>
				Something went wrong :(
			</Typography>
			<Typography
				variant='h3'
				sx={{ textAlign: 'center', color: '#949494', fontWeight: '300' }}
			>
				Try to reload the page!
			</Typography>
		</>
	);
}
