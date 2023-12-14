import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import typography from './typography';

const themes = createTheme({
	direction: 'ltr',
	palette: {
		common: {
			black: 'black',
			white: 'white',
		},
		primary: {
			main: '#2c6d31',
			light: '#02ABE8',
			dark: '#087197',
			contrastText: '#ffffff',
		},
		secondary: {
			main: 'black',
			light: '#000000',
			dark: '#f2f2f2',
			contrastText: '#ffffff',
		},
		background: {
			paper: '#f5f5f5',
		},
		error: {
			main: red[600],
		},
	},
	shape: {
		borderRadius: 3,
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1600,
		},
	},
	typography: { ...typography },
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
					whiteSpace: 'nowrap',
				},
				contained: {
					background: '#2c6d31',
					color: '#fff',
					fontWeight: '700',
					borderRadius: 10,
					'&:disabled': {
						opacity: 0.7,
						background: 'transparent',
					},
				},
				outlined: {
					borderColor: 'black',
					color: 'black',
					fontWeight: '700',
				},
				text: {
					backgroundColor: 'transparent',
					padding: 0,
					'&:hover': {
						backgroundColor: 'transparent',
						padding: 0,
						textDecoration: 'underline',
					},
				},
			},
		},
	},
});

export default themes;
