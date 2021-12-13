const { remote } = require('electron');
const main = remote.require('./main');

const testElectron = () => main.openFileDialog();
