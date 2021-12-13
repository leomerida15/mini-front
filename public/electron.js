const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 1500,
		height: 1000,
		resizable: false,
		title: 'Misicfy',
		titleBarStyle: 'hiddenInset',
	});
	mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
	if (isDev) {
		// Open the DevTools.
		// BrowserWindow.addDevToolsExtension(
		//   "/Users/agustinnavarro/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi"
		// );
		mainWindow.webContents.openDevTools();
	}
	mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow();
	}
});

// open window for select files with electron
function openFileDialog() {
	const { dialog } = electron;
	dialog.showOpenDialog(
		{
			properties: ['openFile', 'multiSelections'],
		},
		(files) => {
			if (files) {
				console.log(files);
			}
		},
	);
}

module.exports = { openFileDialog };
