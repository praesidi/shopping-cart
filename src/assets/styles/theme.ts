import { createTheme, colors } from '@mui/material';

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 560,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
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
