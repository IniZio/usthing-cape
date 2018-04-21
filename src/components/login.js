import React from 'react'
import PropTypes from 'prop-types'
import {Subscribe} from 'unstated'

import {Form} from '../primitives'
import AuthContainer from '../containers/auth'

const Login = ({login}) => {
  const handleLogin = (e, form) => {
    e.preventDefault()
    try {
      login(form)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="card w-auto">
        <h2 className="font-black text-4xl text-grey-darkest">Login</h2>
        <Form
          style={{minWidth: '350px'}}
          onSubmit={handleLogin}
          schema={[
            {field: 'username'},
            {field: 'password', type: 'password'},
            {type: 'submit', children: 'Login'}
          ]}
        />
      </div>
    </div>
  )
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
