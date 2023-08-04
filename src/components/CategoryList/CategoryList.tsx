import { Box, List, ListItemButton, ListItemText } from '@mui/material';
import { useEffect, useState } from 'react';

export default function CategoryList({
	categories,
}: {
	categories: string[] | null;
}) {
	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
		index: number
	) => {
		setSelectedIndex(index);
	};

	if (!categories?.includes('all')) {
		categories?.unshift('all');
	}

	return (
		<Box>
			<List component='div' aria-label='product categories'>
				{categories?.map((item, index) => {
					return (
						<ListItemButton
							selected={selectedIndex === index}
							onClick={(event) => handleClick(event, index)}
							sx={{
								textTransform: 'capitalize',
							}}
							key={index}
						>
							<ListItemText primary={item} />
						</ListItemButton>
					);
				})}
			</List>
		</Box>
	);
}
