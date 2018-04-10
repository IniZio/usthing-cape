import md5 from 'md5'
import autobind from 'auto-bind'
import skygear from 'skygear'
import {Container} from 'unstated'

// import config from '../constants/config'

// import {loginCAS, getITSCProfile, validateAdmin} from '../services/api'

class AuthContainer extends Container {
  state = {
    profile: null,
    isLoggedIn: false
  }

  constructor() {
    super()
    autobind.react(this)

    // // Set ACL
    // const acl = new skygear.ACL()
    // acl.setPublicReadWriteAccess()
    // skygear.publicDB.setDefaultACL(acl)
    //
    // // Initialize skygear
    // skygear
    //   .config({
    //     endPoint: config.skygear.endPoint,
    //     apiKey: config.skygear.apiKey
    //   })
    //   .then(
    //     async () => {
    //       console.log('Skygear container is now ready for API calls')
    //       const profile = await skygear.auth.whoami()
    //       console.log('profile: ', profile)
    //       this.setState({profile, isLoggedIn: Boolean(profile)})
    //     },
    //     console.error
    //   )
  }

  async login(credentials) {
    const {username} = credentials
    // await loginCAS(credentials)
    // await validateAdmin(credentials)
    // const [user] = await getITSCProfile(username)
    const user = await skygear.auth.loginWithUsername(username, md5(username))
    this.setState({isLoggedIn: true})
    return user
  }

  async logout() {
    this.setState({isLoggedIn: null})
  }
}

export default AuthContainer
