import { Select, MenuItem, SelectChangeEvent } from '@mui/material';

export default function SortSelect({
	sortBy,
	setSortBy,
}: {
	sortBy: string;
	setSortBy: any;
}) {
	return (
		<Select
			sx={{
				width: '220px',
				marginLeft: 'auto',
				'&:focus': { backgroundColor: 'transparent' },
			}}
			displayEmpty
			value={sortBy}
			onChange={(e) => setSortBy(e.target.value)}
			variant='standard'
			defaultValue=''
		>
			<MenuItem value=''>
				<em>Sort By</em>
			</MenuItem>
			<MenuItem value='From cheap'>Price (from cheap)</MenuItem>
			<MenuItem value='From expansive'>Price (from expansive)</MenuItem>
		</Select>
	);
}
