import cl from './Header.module.sass';
import { Input, Box } from '@mui/material';
import CartButton from '../../components/UI/CartButton/CartButton';
import Logo from '../../components/UI/Logo/Logo';

export default function Header({ isDark }: { isDark: boolean }) {
  return (
    <header className={cl.header}>
      <Box sx={{ width: '100%' }}>
        <Logo props={{ link: '/', isDark: isDark, size: '56px' }} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <form>
          <Input
            placeholder='Search...'
            color='secondary'
            inputProps={{ style: { color: 'white', width: '240px' } }}
          />
        </form>
        <CartButton
          props={{
            size: 'small',
            color: 'primary',
            badgeValue: 4,
            badgeMaxValue: 9,
            badgeColor: 'secondary',
            iconSize: 'large',
          }}
        />
      </Box>
    </header>
  );
}
