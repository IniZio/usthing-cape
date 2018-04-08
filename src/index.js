import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// const electron = window.require('electron')

// const fs = electron.remote.require('fs');
// const ipcRenderer  = electron.ipcRenderer;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
