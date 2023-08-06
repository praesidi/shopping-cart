import { createTheme, colors } from '@mui/material';

const theme = createTheme({
	typography: {
		fontFamily: `"Montserrat", "Helvetica", "Arial", sans-serif`,
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
	},
	palette: {
		primary: {
			main: colors.grey[500],
		},
		secondary: {
			main: colors.pink[300],
		},
	},
});

export { theme };
