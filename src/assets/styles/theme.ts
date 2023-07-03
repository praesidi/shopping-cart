import { createTheme, colors } from '@mui/material';

const theme = createTheme({
  // selectRoot: {
  //   '&:focus': {
  //     backgroundColor: 'transparent',
  //   },
  // },
  palette: {
    primary: {
      main: colors.grey[500],
    },
  },
});

export { theme };
