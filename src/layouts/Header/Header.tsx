import cl from './Header.module.sass';
import Logo from '../../assets/logo.svg';
// import { Link } from 'react-router-dom';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { IconButton, Input } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

// const ariaLabel = { 'aria-label': 'description' };

export default function Header() {
  return (
    <header className={cl.header}>
      <div>
        {/* <Link to='./'> */}
        <img src={Logo} className={cl.logo} alt='' />
        {/* </Link> */}
      </div>
      <div className={cl.right}>
        <form>
          <Input
            placeholder='Search...'
            color='secondary'
            inputProps={{ style: { color: 'white' } }}
          />
        </form>
        <IconButton size={'small'} color={'secondary'} aria-label='cart'>
          <StyledBadge badgeContent={5} max={9} color='secondary'>
            <ShoppingCart fontSize='large' />
          </StyledBadge>
        </IconButton>
      </div>
    </header>
  );
}
