import React, {Component} from 'react'
import {Button} from '../primitives'

class Login extends Component {
  handleLogin(e) {
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <label>
          Name: <input type="text" name="name"/>
        </label>
        <label>
          Password: <input type="password" name="password"/>
        </label>
        <Button type="submit">Login</Button>
      </form>
    )
  }
}

export default Login
