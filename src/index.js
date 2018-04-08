import React from 'react'
import ReactDOM from 'react-dom'
import './index.css' // eslint-disable-line import/no-unassigned-import
import App from './app'
import registerServiceWorker from './register-service-worker'

// const electron = window.require('electron')

// const fs = electron.remote.require('fs');
// const ipcRenderer  = electron.ipcRenderer;

ReactDOM.render(<App/>, document.getElementById('root'))
registerServiceWorker()
