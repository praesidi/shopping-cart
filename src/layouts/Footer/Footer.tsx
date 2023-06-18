import cl from './Footer.module.sass';
import { IconButton, Stack } from '@mui/material';
import { GitHub, Instagram, Facebook, LinkedIn } from '@mui/icons-material';
import Logo from '../../assets/logo.svg';

export default function Footer() {
  return (
    <footer className={cl.footer}>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        spacing={12}
      >
        <Stack direction='row'>
          <img src={Logo} className={cl.logo} alt='logo' />
          <span className={cl.copyright}>
            © 2023 Kessoku Band Ltd. All rights reserved.
            <br />
            Designed by Praesidi.
          </span>
        </Stack>
        <Stack direction='row'>
          <IconButton href='https://github.com/praesidi' target='_blank'>
            <GitHub />
          </IconButton>
          <IconButton href='https://instagrem.com' target='_blank'>
            <Instagram />
          </IconButton>
          <IconButton href='https://facebook.com' target='_blank'>
            <Facebook />
          </IconButton>
          <IconButton href='https://www.linkedin.com' target='_blank'>
            <LinkedIn />
          </IconButton>
        </Stack>
      </Stack>
    </footer>
  );
}
