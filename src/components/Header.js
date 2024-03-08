import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink, useNavigate } from "react-router-dom"

const Header = ({currentUser}) => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("userToken")
    navigate ("/", {  replace: true })
  }
  return (

    <header className= "header">
      <h2>
    <Nav>
      <NavItem >
        <NavLink to="/ArtistProtectedIndex" className="nav-link">
        SYNC |
              </NavLink>
            </NavItem>
            <NavItem>
          <NavLink to="/Home" className="nav-link">
            Home
          </NavLink>
        </NavItem>
            <NavItem>
              <NavLink to="/" onClick={handleLogout} className="nav-link">
                | Log Out
              </NavLink>
            </NavItem>
      </Nav>
      </h2>
    </header>
  )
}


export default Header;