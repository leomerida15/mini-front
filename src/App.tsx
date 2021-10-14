import './hooks/axios';

// router
import Router from './router/index.router';

// styles
import './scss/index.scss';
import { unstable_createMuiStrictModeTheme as createTheme } from '@material-ui/core';
import { esES } from '@material-ui/data-grid';
import { esES as coreesES } from '@material-ui/core/locale';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

const theme = createTheme({}, esES, coreesES);

function App() {
	return (
		<div className='ed-container'>
			<div className='m-95 m-to-right'>
				<ThemeProvider theme={theme}>
					<Router />
				</ThemeProvider>
			</div>
		</div>
	);
}

export default App;
