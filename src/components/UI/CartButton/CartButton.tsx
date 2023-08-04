import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
	'& .MuiBadge-badge': {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: '0 4px',
	},
}));

export default function CartButton({ props }: any) {
	const { size, color, badgeValue, badgeMaxValue, badgeColor, iconSize } =
		props;

	return (
		<IconButton size={size} color={color} aria-label='cart'>
			<StyledBadge
				badgeContent={badgeValue}
				max={badgeMaxValue}
				color={badgeColor}
			>
				<ShoppingCart fontSize={iconSize} />
			</StyledBadge>
		</IconButton>
	);
}
