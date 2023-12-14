import React from 'react';
import { AppBar, Box, Container, IconButton, Typography, SxProps } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

interface DiscountBarProps {
	sx?: SxProps;
}

const DiscountBar: React.FC<DiscountBarProps> = ({ sx }) => {
	return (
		<AppBar position="static">
			<Container
				maxWidth="xl"
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					...sx,
				}}
			>
				{/* First Box with social media icons */}
				<Box
					sx={{
						display: { xs: 'none', sm: 'none', md: 'flex' },
						gap: 1,
					}}
				>
					<IconButton edge="start" color="inherit" aria-label="menu">
						<InstagramIcon fontSize="medium" />
					</IconButton>
					<IconButton edge="start" color="inherit" aria-label="menu">
						<FacebookIcon fontSize="medium" />
					</IconButton>
					<IconButton edge="start" color="inherit" aria-label="menu">
						<YouTubeIcon fontSize="medium" />
					</IconButton>
					<IconButton edge="start" color="inherit" aria-label="menu">
						<LinkedInIcon fontSize="medium" />
					</IconButton>
					<IconButton edge="start" color="inherit" aria-label="menu">
						<WhatsAppIcon fontSize="medium" />
					</IconButton>
					<IconButton edge="start" color="inherit" aria-label="menu">
						<EmailIcon fontSize="medium" />
					</IconButton>
				</Box>

				{/* Second Box with the promotional message */}
				<Box
					sx={{
						paddingRight: { xs: 1, sm: 2, md: 8 },
						alignItems: 'center',
						textAlign: 'center',
					}}
				>
					<Typography variant="subtitle2">
						We provide free next day delivery on orders received by 7 PM. Flat 50% cashback on orders above 2000.
					</Typography>
				</Box>
			</Container>
		</AppBar>
	);
};

export default DiscountBar;
