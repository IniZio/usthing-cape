import autobind from 'auto-bind'
import {Container} from 'unstated'

// import {loginCAS, getITSCProfile, validateAdmin} from '../services/api'

class AuthContainer extends Container {
  state = {
    profile: null
  }

  constructor() {
    super()
    autobind.react(this)
  }

  // async login(credentials) {
  //   const {username} = credentials
  //   await loginCAS(credentials)
  //   await validateAdmin(credentials)
  //   const [user] = await getITSCProfile(username)
  //   this.setState({isLoggedIn: true})
  //   return user
  // }

  async logout() {
    this.setState({profile: null})
  }
}

export default AuthContainer
