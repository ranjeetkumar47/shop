const typography = {
	h1: {
		fontWeight: 700,
		fontSize: 35,
		'@media (max-width: 768px)': {
			fontSize: 28, // Adjust for tablet
		},
		'@media (max-width: 480px)': {
			fontSize: 24, // Adjust for mobile
		},
	},
	h2: {
		fontWeight: 700,
		fontSize: 30,
		'@media (max-width: 768px)': {
			fontSize: 24,
		},
		'@media (max-width: 480px)': {
			fontSize: 20,
		},
	},
	h3: {
		fontWeight: 700,
		fontSize: 25,
		'@media (max-width: 768px)': {
			fontSize: 20,
		},
		'@media (max-width: 480px)': {
			fontSize: 18,
		},
	},
	h4: {
		fontWeight: 700,
		fontSize: 20,
		'@media (max-width: 768px)': {
			fontSize: 18,
		},
		'@media (max-width: 480px)': {
			fontSize: 16,
		},
	},
	h5: {
		fontWeight: 700,
		fontSize: 15,
		'@media (max-width: 768px)': {
			fontSize: 14,
		},
		'@media (max-width: 480px)': {
			fontSize: 12,
		},
	},
	h6: {
		fontWeight: 700,
		fontSize: 10,
		'@media (max-width: 768px)': {
			fontSize: 9,
		},
		'@media (max-width: 480px)': {
			fontSize: 8,
		},
	},
	subtitle1: {
		fontSize: 18,
		fontFamily: 'Inter',
		'@media (max-width: 768px)': {
			fontSize: 16,
		},
		'@media (max-width: 480px)': {
			fontSize: 14,
		},
	},
	subtitle2: {
		fontSize: 16,
		fontFamily: 'Inter',
		'@media (max-width: 768px)': {
			fontSize: 14,
		},
		'@media (max-width: 480px)': {
			fontSize: 12,
		},
	},
	body1: {
		fontSize: 18,
		fontFamily: 'Inter',
		'@media (max-width: 768px)': {
			fontSize: 16,
		},
		'@media (max-width: 480px)': {
			fontSize: 14,
		},
	},
	body2: {
		fontSize: 16,
		fontFamily: 'Inter',
		'@media (max-width: 768px)': {
			fontSize: 14,
		},
		'@media (max-width: 480px)': {
			fontSize: 12,
		},
	},
	overline: {},
};

export default typography;
