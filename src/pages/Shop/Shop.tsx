import Header from '../../layouts/Header/Header';
import Main from '../../layouts/Main/Main';
import Footer from '../../layouts/Footer/Footer';
import { Container } from '@mui/material';

export default function Shop() {
  return (
    <Container
      sx={{
        width: '100vw',
        minHeight: '100vh',
        backgroundColor: 'whitesmoke',
        padding: '0 40px',
        color: '#6f6e6e',
        display: 'flex',
        flexDirection: 'column',

        alignItems: 'center',
      }}
      maxWidth={false}
    >
      <Header isDark={false} />
      <Main />
      <Footer isDark={false} />
    </Container>
  );
}
