import { Box, List, ListItemButton, ListItemText } from '@mui/material';

export default function CategoryList({
	categories,
	currentCategory,
	setCurrentCategory,
}: {
	categories: string[] | null;
	currentCategory: string;
	setCurrentCategory: any;
}) {
	if (!categories?.includes('all')) {
		categories?.unshift('all');
	}

	const currentCategoryIndex = categories?.indexOf(currentCategory);

	const handleClick = (index: number) => {
		setCurrentCategory(categories?.[index]);
	};

	return (
		<Box>
			<List component='div' aria-label='product categories'>
				{categories?.map((item, index) => {
					return (
						<ListItemButton
							selected={currentCategoryIndex === index}
							onClick={() => handleClick(index)}
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
