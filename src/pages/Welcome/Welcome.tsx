// import { Link } from 'react-router-dom';
import { Button, Container, Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import Header from '../../layouts/Header/Header';
import backgroundImage from '../../assets/images/welcome.jpeg';

// first container contains the background image
// second contains backdrop filters for it
// TODO: fix blank space on mobile
export default function Welcome() {
	return (
		<Container
			sx={{
				width: '100vw',
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
					// padding: '0 24px',
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
							fontSize: '4rem',
							wordSpacing: '0.3rem',
							// letterSpacing: '1.5',
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
