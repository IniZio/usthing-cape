const {Nothing} = require('nothing-mock')
const config = require('../constants/config')

let electron = Nothing

if (config.isElectron) {
  electron = window.require('electron')
}
const {ipcRenderer, remote} = electron

const myRemote = electron.remote.require('./src/helpers/_remote')

export {
  ipcRenderer,
  remote,
  myRemote
}

export default null
