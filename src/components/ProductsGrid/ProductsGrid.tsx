import Grid from '@mui/material/Unstable_Grid2';

export default function ProductsGrid({ children }: { children: any }) {
	return (
		<Grid
			container
			columns={{ xs: 2, md: 12, lg: 12 }}
			spacing={{ xs: 2, md: 3, lg: 4 }}
		>
			{children}
		</Grid>
	);
}
