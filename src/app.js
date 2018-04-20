import React from 'react'
import {Route, Switch, Redirect, withRouter, Link} from 'react-router-dom'
import {Subscribe} from 'unstated'
import queryString from 'query-string'
import R from 'ramda'

import './app.css'
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
                <Route key="main">
                  <div className="flex">
                    <div className="sidebar">
                      <h3 className="sidebar-header flex items-center py-2 my-3 cursor-pointer" data-trigger="click">
                        <img
                          className="img-avatar h-8 w-auto mr-4"
                          src={R.path('profile.image.url'.split('.'), user.state) || `https://api.adorable.io/avatars/71/${user.state.username}@usthing.png`}
                        />
                        <span>{user.state.profile.username || 'Anonymous'}</span>
                      </h3>
                      <div className="dropdown" style={{left: 30, marginTop: -10}}>
                        <ul className="dropdown-menu">
                          <li onClick={user.logout}>Logout</li>
                        </ul>
                      </div>
                      <div className="h-8"/>
                      {/* <div className="sidebar-header flex items-center py-1 mt-3">Functions</div> */}
                      <Link to="/">
                        <div className="sidebar-item flex items-center py-2 my-1">Home</div>
                      </Link>
                      <Link to="/map">
                        <div className="sidebar-item flex items-center py-2 my-1">Map</div>
                      </Link>
                      <Link to="/marketplace">
                        <div className="sidebar-item flex items-center py-2 my-1">Marketplace</div>
                      </Link>
                    </div>
                    <Route path="/map" render={() => <iframe className="flex-1" src="https://ustmap.netlify.com/"/>}/>
                  </div>
                </Route>
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
