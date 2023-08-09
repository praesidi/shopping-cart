import { Button, Container, Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import backgroundImage from '../../assets/images/welcome.jpeg';

export default function Welcome() {
	return (
		<Container
			sx={{
				width: '100%',
				height: '100%',
				bgcolor: '#BBD2C5',
				background: 'linear-gradient(to right, #292E49, #536976, #BBD2C5)',
				backgroundImage: `url(${backgroundImage})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
			maxWidth={false}
			disableGutters
		>
			<Container
				sx={{
					minHeight: '100vh',
					backdropFilter: 'blur(8px) brightness(0.5)',
				}}
				maxWidth={false}
			>
				<Header isDark={true} />
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						width: '100%',
						padding: '15px 0',
						margin: '64px 0',
					}}
				>
					<Typography
						variant='h1'
						sx={{
							fontFamily: "'Monoton', sans-serif",
							textAlign: 'center',
							fontSize: { xs: '3rem', sm: '4rem' },
							wordSpacing: '0.3rem',
							marginBottom: '64px',
							lineHeight: '1.4em',
							padding: '0 16px',
						}}
					>
						Welcome <br /> to the Kessoku Band Store
					</Typography>
					<Link to='/products'>
						<Button
							variant='outlined'
							fullWidth={false}
							sx={{ width: '280px' }}
							endIcon={<ArrowForwardIcon />}
						>
							Shop Now
						</Button>
					</Link>
				</Box>
			</Container>
		</Container>
	);
}
