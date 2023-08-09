import { Link } from 'react-router-dom';
import { Container, Box, Button, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import image from '../../assets/images/error.png';

export default function Error() {
	return (
		<Container
			sx={{
				width: '100%',
				height: '100vh',
				backgroundColor: 'whitesmoke',
				color: '#6f6e6e',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: '20px',
			}}
			maxWidth={'xl'}
		>
			<Box component='img' src={image} height={250} alt='error illustration' />
			<Typography variant='h2' textAlign={'center'}>
				Ooops... Something went wrong :(
			</Typography>
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
		</Container>
	);
}
