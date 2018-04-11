import isElectron from 'is-electron'

const skygear = {
  endPoint: 'https://usthing.skygeario.com/',
  apiKey: 'f54a2884a45d48889e2a0e9165e7c623'
}

export default {
  skygear,
  isElectron: isElectron(),
  appName: 'USThing Cape'
}
