import { Box, List, ListItemButton, ListItemText } from '@mui/material';
import { useState } from 'react';

export default function CategoryList({ categories }: { categories: string[] }) {
	const [selectedIndex, setSelectedIndex] = useState(1);

	const handleListItemClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
		index: number
	) => {
		setSelectedIndex(index);
	};
	return (
		<Box>
			<List component='div' aria-label='product categories'>
				{categories.map((item, index) => {
					return (
						<ListItemButton
							selected={selectedIndex === index}
							onClick={(event) => handleListItemClick(event, index)}
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