import cl from './Footer.module.sass';
import { IconButton, Stack, Typography } from '@mui/material';
import { GitHub, Instagram, Facebook, LinkedIn } from '@mui/icons-material';
import Logo from '../../components/UI/Logo/Logo';

//TODO: fix wrap issues for mobiles

export default function Footer({ isDark }: { isDark: boolean }) {
  return (
    <footer className={cl.footer}>
      <Stack direction='row' justifyContent='center'>
        <Logo className={cl.logo} props={{ isDark: isDark, size: '40px' }} />
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
    </footer>
  );
}
