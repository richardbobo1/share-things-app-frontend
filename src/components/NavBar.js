import React from 'react'
import { NavLink } from 'react-router-dom';
 

 
class NavBar extends React.Component {
  render() {
    return (
      <div>
      <NavLink to="/" exact >Home</NavLink>
      <NavLink to="/inventory" exact>My Inventory</NavLink>
      <NavLink to="/explore" exact>Explore</NavLink>
      <NavLink to="/login" exact>Login</NavLink>
      </div>
    )
  }
}
 
export default NavBar;