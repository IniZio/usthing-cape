import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import R from 'ramda'

const Sidebar = ({user}) => (
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
)

Sidebar.defaultProps = {
  user: () => ({})
}

Sidebar.propTypes = {
  user: PropTypes.object
}

export default Sidebar
