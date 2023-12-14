import { AccountCircle } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const UserProfile = () => {
	const menuId = 'primary-search-account-menu';

	return (
		<IconButton
			size="large"
			edge="end"
			aria-label="account of current user"
			aria-controls={menuId}
			aria-haspopup="true"
			color="inherit"
		>
			<AccountCircle />
		</IconButton>
	);
};

export default UserProfile;
