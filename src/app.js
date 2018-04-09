import React from 'react'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import {Subscribe} from 'unstated'
import queryString from 'query-string'

import './app.css'
import AuthContainer from './containers/auth'

const App = withRouter(({location}) => (
  <Subscribe to={[AuthContainer]}>
    {
      user => (
        <Switch>
          {
            user.state.isLoggedIn ?
              [
                <Redirect
                  key="from-login"
                  from="/login"
                  to={decodeURIComponent(queryString.parse(location.search).redirect) || '/'}
                />,
                <div key="main">
                  <h1>Hello there</h1>
                </div>
              ] :
              [
                <Route key="login" path="/login" render={() => <h1>Login page</h1>}/>,
                <Redirect
                  key="to-login"
                  to={`/login?redirect=${encodeURIComponent(location.pathname)}`}
                />
              ]

          }
        </Switch>
      )}
  </Subscribe>
))

export default App
