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
      <div className="flex w-full h-screen justify-center items-center">
        <form className="card w-auto" style={{width: '350px'}} onSubmit={this.handleLogin}>
          <label htmlFor="username">Name</label>
          <input
            name="username"
            value={this.state.username}
            onChange={({target: {value: username}}) => this.setState({username})}
          />
          <label htmlFor="username">Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={({target: {value: password}}) => this.setState({password})}
          />
          <div className="h-4"/>
          <div className="flex">
            <Button type="submit" primary>Login</Button>
            <Button className="ml-auto" plain>Register</Button>
          </div>
        </form>
      </div>
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
