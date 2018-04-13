import md5 from 'md5'
import autobind from 'auto-bind'
import skygear from 'skygear'
import {Container} from 'unstated'

import config from '../constants/config'

// import {loginCAS, getITSCProfile, validateAdmin} from '../services/api'

let keytar = null

if (config.isElectron) {
  keytar = require('../helpers/electron').myRemote.keytar
}

class AuthContainer extends Container {
  state = {
    profile: null,
    password: null
  }

  isLoggedIn = () => this.state.profile// && this.state.profile.username

  constructor() {
    super()
    autobind.react(this)

    // Set ACL
    const acl = new skygear.ACL()
    acl.setPublicReadWriteAccess()
    skygear.publicDB.setDefaultACL(acl)

    // Initialize skygear
    skygear
      .config({
        endPoint: config.skygear.endPoint,
        apiKey: config.skygear.apiKey
      })
      .then(
        async () => {
          console.log('Skygear container is now ready for API calls')
          const profile = await skygear.auth.whoami()
          if (profile && profile.username && config.isElectron) {
            const password = await keytar.getPassword(config.appName, profile.username)
            this.setState({password})
          }
          this.setState({profile})
        },
        console.error
      )
  }

  async login(credentials) {
    const {username, password} = credentials
    // await loginCAS(credentials)
    // await validateAdmin(credentials)
    // const [user] = await getITSCProfile(username)
    let profile = null
    try {
      profile = await skygear.auth.loginWithUsername(username, md5(username))
    } catch (err) {
      profile = await skygear.auth.loginWithUsername(username, password)
    }
    if (profile && profile.username && config.isElectron) {
      keytar.setPassword(config.appName, username, password)
    }
    console.log('profile: ', profile)
    this.setState({profile, password: config.isElectron ? password : null})
    return profile
  }

  async logout() {
    await skygear.auth.logout()
    if (this.state.profile && this.state.profile.username && config.isElectron) {
      keytar.deletePassword(config.appName, this.state.profile.username)
    }
    this.setState({profile: null, password: null})
  }
}

export default AuthContainer
