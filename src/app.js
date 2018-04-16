import React from 'react'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import {Subscribe} from 'unstated'
import queryString from 'query-string'
import R from 'ramda'

import './app.css'
import {Input} from './primitives'
import AuthContainer from './containers/auth'
import LoginPage from './components/login'

const App = withRouter(({location}) => (
  <Subscribe to={[AuthContainer]}>
    {
      user => (
        <Switch>
          {
            user.isLoggedIn() ?
              [
                <Redirect
                  key="from-login"
                  from="/login"
                  to={decodeURIComponent(queryString.parse(location.search).redirect) || '/'}
                />,
                <div key="main">
                  <nav className="navbar">
                    <Input className="w-48 focus:w-2/5 hover:w-2/5" placeholder="Search..."/>
                    <ul className="menu-horizontal text-sm font-extrabold ml-auto h-full">
                      <li className="flex h-full items-center">
                        <a>FBS</a>
                      </li>
                      <li className="flex h-full items-center" data-trigger="click">
                        <img
                          className="img-avatar max-h-60p w-auto cursor-pointer"
                          src={R.path('profile.image.url'.split('.'), user.state) || `https://api.adorable.io/avatars/71/${user.state.username}@usthing.png`}
                        />
                      </li>
                      <div className="dropdown pin-r" style={{top: '100%'}}>
                        <ul className="dropdown-menu">
                          {R.path('profile.username', user.state) && <li className="menn-header">{R.path('profile.username', user.state)}</li>}
                          <li onClick={user.logout}>Logout</li>
                        </ul>
                      </div>
                    </ul>
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
