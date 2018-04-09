import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import App from './app'

// const electron = window.require('electron')

// const fs = electron.remote.require('fs');
// const ipcRenderer  = electron.ipcRenderer;

const wearCape = () => {
  ReactDOM.render(<App/>, document.getElementById('root'))
}

wearCape()

if (module.hot) {
  module.hot.accept(wearCape)
}
