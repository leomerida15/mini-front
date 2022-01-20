/** @format */

// configs
import './hooks/axios';

// router
import Router from './router';

// styles
import './scss/index.scss';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { bgBG } from '@mui/x-data-grid-pro';
import { bgBG as coreBgBG } from '@mui/material/locale';

function App() {
	const baceTheme = useTheme();

	const theme = createTheme(baceTheme, bgBG, coreBgBG);

	return (
		<div className='ed-container'>
			<ThemeProvider theme={theme}>
				<Router />
			</ThemeProvider>
		</div>
	);
}

export default App;
