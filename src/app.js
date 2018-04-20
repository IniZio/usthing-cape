import React from 'react'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import {Subscribe} from 'unstated'
import queryString from 'query-string'

import './app.css'
import AuthContainer from './containers/auth'
import LoginPage from './components/login'
import Sidebar from './components/sidebar'

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
                  <div className="flex bg-grey-lightest">
                    <Sidebar user={user}/>
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
