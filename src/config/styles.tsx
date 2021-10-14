import { makeStyles } from '@material-ui/core/styles';

export const useStylesModalUser = makeStyles(
	(styles: {
		spacing: (arg0: number) => any;
		palette: {
			primary: { main: any; light: any };
			secondary: { main: any };
			success: { main: any; light: any };
			error: { main: any };
		};
	}) => ({
		root: {
			// maxWidth: 345,
		},
		containerRight: {
			margin: 0,
			position: 'relative',
		},
		media: {
			height: 400,
			width: 400,
		},
		bullet: {
			display: 'inline-block',
			margin: '0 2px',
			transform: 'scale(0.8)',
		},
		title: {
			fontSize: 14,
		},
		pos: {
			marginBottom: 12,
		},
		inputN: {
			width: '49%',
		},
		input: {
			marginTop: styles.spacing(1.5),
			marginBottom: styles.spacing(1),
			width: '100%',
			alignSelf: 'center',
		},
		inputNro: {
			width: '70%',
		},
		inputPhone: {
			width: '52%',
		},
		formControl: {
			width: '28%',
		},
		formControlCompany: {
			width: '46%',
		},
		button: {
			margin: styles.spacing(1),
			textTransform: 'none',
			backgroundColor: styles.palette.primary.main,
			color: styles.palette.secondary.main,
			fontSize: '1.2rem',
			maxWidth: '80%',
			'&:hover': {
				backgroundColor: styles.palette.primary.light,
			},
		},
		buttonStep: {
			textTransform: 'none',
			letterSpacing: '1px',
			backgroundColor: styles.palette.primary.main,
			color: '#fff',
			'&:hover': {
				backgroundColor: styles.palette.primary.light,
			},
		},
		buttonSend: {
			textTransform: 'none',
			letterSpacing: '1px',
			backgroundColor: styles.palette.success.main,
			color: styles.palette.secondary.main,
			'&:hover': {
				backgroundColor: styles.palette.success.light,
			},
		},
		buttonRes: {
			textTransform: 'none',
			backgroundColor: styles.palette.success.main,
			color: styles.palette.secondary.main,
			'&:hover': {
				backgroundColor: styles.palette.success.light,
			},
		},
		buttonResMain: {
			margin: styles.spacing(1),
			marginLeft: styles.spacing(2),
			textTransform: 'none',
			backgroundColor: styles.palette.success.main,
			border: `1px solid ${styles.palette.success.main}`,
			color: styles.palette.secondary.main,
			paddingLeft: '2rem',
			paddingRight: '2rem',
			maxWidth: '80%',
			'&:hover': {
				backgroundColor: styles.palette.success.light,
				border: `1px solid ${styles.palette.success.light}`,
			},
		},
		buttonBack: {
			color: styles.palette.primary.main,
		},
		text: {
			color: styles.palette.error.main,
			fontSize: '13px',
		},
		textM: {
			color: '#fff',
			fontSize: '15px',
		},
		alertPassword: {
			width: '100%',
			alignSelf: 'center',
		},
		ErrorLogin: {
			color: styles.palette.error.main,
		},
		step: {
			flexGrow: 1,
			backgroundColor: '#ffffff',
			width: '100%',
			alignSelf: 'center',
		},
		typography: {
			padding: styles.spacing(2),
		},
	}),
);

declare module '@mui/material/styles' {
	interface Theme {
		status: {
			danger: React.CSSProperties['color'];
		};
	}

	interface Palette {
		neutral: Palette['primary'];
	}
	interface PaletteOptions {
		neutral: PaletteOptions['primary'];
	}

	interface PaletteColor {
		darker?: string;
	}
	interface SimplePaletteColorOptions {
		darker?: string;
	}
	interface ThemeOptions {
		status: {
			danger: React.CSSProperties['color'];
		};
	}
}
