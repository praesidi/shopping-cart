import { IconButton, Stack, Typography, Box } from '@mui/material';
import { GitHub, Instagram, Facebook, LinkedIn } from '@mui/icons-material';
import Logo from '../UI/Logo/Logo';

export default function Footer({ isDark }: { isDark: boolean }) {
	return (
		<Box
			component={'footer'}
			sx={{
				width: '100%',
				display: 'flex',
				justifyContent: 'space-evenly',
				padding: '16px 16px 0',
				borderTop: '1px solid rgba(164, 164, 164, 0.4)',
				flexWrap: 'wrap-reverse',
				marginTop: 'auto',
			}}
		>
			<Stack direction='row' justifyContent='center'>
				<Logo props={{ isDark: isDark, size: '40px' }} />
				<Typography
					sx={{
						lineHeight: '1.2rem',
						fontSize: '12px',
						color: '#6f6e6e',
						fontWeight: 200,
					}}
				>
					© 2023 Kessoku Band Ltd. All rights reserved.
					<br />
					Designed and build by Praesidi.
				</Typography>
			</Stack>
			<Stack direction='row' alignItems='center' justifyContent='center' ml={0}>
				<IconButton href='https://github.com/praesidi' target='_blank'>
					<GitHub />
				</IconButton>
				<IconButton href='https://instagram.com' target='_blank'>
					<Instagram />
				</IconButton>
				<IconButton href='https://facebook.com' target='_blank'>
					<Facebook />
				</IconButton>
				<IconButton href='https://www.linkedin.com' target='_blank'>
					<LinkedIn />
				</IconButton>
			</Stack>
		</Box>
	);
}
