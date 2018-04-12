import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-util'
import {Provider} from 'unstated'
import './styles/index.scss'
import config from './constants/config'
import App from './app'

if (config.isElectron && process.env.NOD_ENV === 'production') {
  require('offline-plugin/runtime').install()
}

// const electron = window.require('electron')

// const fs = electron.remote.require('fs');
// const ipcRenderer  = electron.ipcRenderer;

const wearCape = () => {
  ReactDOM.render(
    (
      <Provider>
        <Router>
          <App/>
        </Router>
      </Provider>
    ),
    document.getElementById('root'))
}

wearCape()

if (module.hot) {
  module.hot.accept(wearCape)
}
