import cl from './Welcome.module.sass';
// import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
// import { Theme } from '@emotion/react';
// import { createTheme } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Header from '../../layouts/Header/Header';

export default function Welcome() {
  return (
    // container only for background
    <div className={cl.container}>
      <div className={cl.content}>
        <Header>{/* <img src='../../assets/' alt='' /> */}</Header>
        <div className={cl.body}>
          <h1 className={cl.title}>
            Welcome <br /> to the Kessoku Band Store
          </h1>
          <h2 className={cl.subtitle}>
            we became brave enough to open the store
          </h2>
          <Button
            variant='outlined'
            color='secondary'
            fullWidth={false}
            endIcon={<ArrowForwardIcon />}
          >
            Start Shopping
          </Button>
        </div>
      </div>
    </div>
  );
}
