const electron = window.require('electron')
const {ipcRenderer, remote} = electron

const myRemote = electron.remote.require('./src/helpers/_remote') || {}

// dialog.showErrorBox('My message', 'hi.')

export {
  ipcRenderer,
  remote,
  myRemote
}

export default electron
