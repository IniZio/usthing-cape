import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'
import R from 'ramda'
import {Home, Map, ShoppingBag} from 'react-feather'

const Sidebar = ({user}) => (
  <div className="sidebar">
    <div className="h-8"/>
    <div className="flex justify-center py-8">USThing</div>
    <div className="flex items-center justify-center py-4 my-3 cursor-pointer border-b border-t" data-trigger="click">
      <img
        className="img-avatar h-10 w-auto shadow border-2 border-primary"
        src={R.path('profile.image.url'.split('.'), user.state) || `https://api.adorable.io/avatars/71/${user.state.username}@usthing.png`}
      />
      {/* <span>{user.state.profile.username || 'Anonymous'}</span> */}
    </div>
    <div className="dropdown" style={{left: 30, marginTop: -10}}>
      <ul className="dropdown-menu">
        <li onClick={user.logout}>Logout</li>
      </ul>
    </div>
    <div className="h-2"/>
    {/* <div className="sidebar-header flex items-center py-1 mt-3">Functions</div> */}
    <NavLink
      to="/"
      className="sidebar-item flex items-center justify-center py-4 my-2"
      activeClassName="bg-grey-lighter border-primary"
      exact
    >
      <Home strokeWidth={1}/>
    </NavLink>
    <NavLink
      to="/map"
      className="sidebar-item flex items-center justify-center py-4 my-2"
      activeClassName="bg-grey-lighter"
    >
      <Map strokeWidth={1}/>
    </NavLink>
    <NavLink
      to="/marketplace"
      className="sidebar-item flex items-center justify-center py-4 my-2"
      activeClassName="bg-grey-lighter"
    >
      <ShoppingBag strokeWidth={1}/>
    </NavLink>
  </div>
)

Sidebar.defaultProps = {
  user: () => ({})
}

Sidebar.propTypes = {
  user: PropTypes.object
}

export default Sidebar
