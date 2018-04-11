import React from 'react'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import {Subscribe} from 'unstated'
import queryString from 'query-string'

import './app.css'
import AuthContainer from './containers/auth'
import LoginPage from './components/login'

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
                  <nav className="navbar">
                    <div className="flex ml-auto h-full items-center">
                      {Boolean(user.state.profile) && <img className="img-avatar max-h-40p w-auto cursor-pointer" src={user.state.profile.image.url}/>}
                      <div className="dropdown pin-r" style={{top: '5rem'}}>
                        <ul className="dropdown-menu">
                          <li><a href="#" onClick={user.logout}>Logout</a></li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              ] :
              [
                <Route key="login" path="/login" component={LoginPage}/>,
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
