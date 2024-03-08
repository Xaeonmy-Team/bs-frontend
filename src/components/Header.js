import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink, useNavigate } from "react-router-dom"

const Header = ({currentUser}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate ("/")
  }
  return (

    <header className= "header">
      <h2>
    <Nav>
        {currentUser && (
          <>
        <NavItem>
        <NavLink to="/ArtistprotectedIndex" className="nav-link">
               <p>SYNC |</p> 
              </NavLink>
            </NavItem>
            <NavItem>
          <NavLink to="/Home" >
             Home 
          </NavLink>
        </NavItem>
            <NavItem>
              <NavLink onClick={handleClick}>
                | Log Out
              </NavLink>
            </NavItem>
          </>
        )}
        {!currentUser && (
          <>
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
              <NavLink onClick={handleClick} className="nav-link">
                | Log Out
              </NavLink>
            </NavItem>
          </>
        )}
      </Nav>
      </h2>
    </header>
  )
}


export default Header;