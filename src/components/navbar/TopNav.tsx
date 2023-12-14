import React from 'react';
import { AppBar, Box, Container, IconButton, Typography, Button, useTheme } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import UserProfile from './UserProfile';
import { RouterLink } from '../hooks/router-link';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import DiscountBar from './DiscountBar';
import useModal from '@/hooks/useModal';

export default function ButtonAppBar(): JSX.Element {
	const theme = useTheme();
	const { isOpen, openModal, closeModal } = useModal();

	return (
		<Box sx={{ flexGrow: 5 }}>
			<DiscountBar />
			<AppBar position="static" color="inherit">
				<Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
						<Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
							Urvann
						</Typography>
						<IconButton size="medium" edge="start" color="inherit" aria-label="menu" onClick={openModal}>
							<LocationOnIcon />
							<Typography variant="subtitle2">201301 (Change)</Typography>
						</IconButton>
					</Box>
					<Box>
						<Button variant="outlined" href="/get-help" sx={{ mr: 2 }} component={RouterLink}>
							Get Help
						</Button>
						<IconButton size="medium" edge="start" color="inherit" aria-label="menu">
							<Badge badgeContent={17} color="secondary">
								<ShoppingCartIcon />
							</Badge>
						</IconButton>
						<Button variant="outlined" href="/login" sx={{ ml: 2 }} component={RouterLink}>
							Login
						</Button>
						<UserProfile />
					</Box>
				</Container>
			</AppBar>
			<AppBar position="static">
				<Container maxWidth="xl">Hello</Container>
			</AppBar>

			{/* Your modal content here */}
			{isOpen && (
				<div>
					{/* Include your modal content or component */}
					<div>Modal Content</div>
					{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
					<button onClick={closeModal}>Close Modal</button>
				</div>
			)}
		</Box>
	);
}
