import { Select, MenuItem } from '@mui/material';

export default function SortingSelectionMenu({
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
			<MenuItem value='from cheap'>Price (from cheap)</MenuItem>
			<MenuItem value='from expansive'>Price (from expensive)</MenuItem>
		</Select>
	);
}
