import { Link } from 'react-router-dom';
import { Container, Box, Button, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import image from '../../assets/images/error.png';

export default function Error() {
	return (
		<Container
			sx={{
				width: '100vw',
				height: '100vh',
				backgroundColor: 'whitesmoke',
				color: '#6f6e6e',
			}}
			maxWidth={false}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '20px',
					height: '100%',
				}}
			>
				<img src={image} alt='error illustration' height={400} />
				<Typography variant='h2'>Ooops... Something went wrong :(</Typography>
				<Typography variant='body2'>
					<Link to='/products'>
						<Button
							variant='outlined'
							fullWidth={false}
							color='secondary'
							startIcon={<ArrowBackIcon />}
						>
							return to the shop page
						</Button>
					</Link>
				</Typography>
			</Box>
		</Container>
	);
}
