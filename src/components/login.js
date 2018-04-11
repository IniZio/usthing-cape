import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Subscribe} from 'unstated'

import {Form} from '../primitives'
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
        <Form
          className="card w-auto"
          // style={{minWidth: '350px'}}
          onSubmit={this.handleLogin}
          schema={[
            {field: 'username'},
            {field: 'password', type: 'password'},
            {type: 'submit', children: 'Login'}
          ]}
        />
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
