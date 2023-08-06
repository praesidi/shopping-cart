import { Input, Box } from '@mui/material';
import CartButton from '../../components/UI/CartButton/CartButton';
import Logo from '../../components/UI/Logo/Logo';

export default function Header({ isDark }: { isDark: boolean }) {
	const inputStyling = isDark
		? { style: { color: 'whitesmoke', width: '240px' } }
		: { style: { color: '#6f6e6e', width: '240px' } };

	return (
		<Box
			component={'header'}
			sx={{
				display: 'flex',
				width: '100%',
				justifyContent: 'space-around',
				padding: '16px 0',
			}}
		>
			<Box sx={{ width: '100%' }}>
				<Logo props={{ isDark: isDark, size: '56px' }} />
			</Box>
			<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
				<form>
					<Input
						placeholder='Search...'
						color='secondary'
						inputProps={{ ...inputStyling }}
					/>
				</form>
				<CartButton
					size='small'
					color='primary'
					badgeValue={0}
					badgeMaxValue={9}
					badgeColor='secondary'
					iconSize='large'
					onClick={toggleDrawer(true)}
				/>
			</Box>
		</Box>
	);
}
