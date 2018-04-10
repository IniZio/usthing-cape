import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Subscribe} from 'unstated'

import {Button} from '../primitives'
import AuthContainer from '../containers/auth'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleLogin = e => {
    e.preventDefault()
    try {
      this.props.login(this.state)
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <label>
          Name: <input
            name="username"
            value={this.state.username}
            onChange={({target: {value: username}}) => this.setState({username})}
          />
        </label>
        <label>
          Password: <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={({target: {value: password}}) => this.setState({password})}
          />
        </label>
        <Button type="submit" primary>Login</Button>
      </form>
    )
  }
}

Login.defaultProps = {
  login: () => {}
}

Login.propTypes = {
  login: PropTypes.func
}

export default props => (
  <Subscribe to={[AuthContainer]}>
    {user => <Login login={user.login} {...props}/>}
  </Subscribe>
)