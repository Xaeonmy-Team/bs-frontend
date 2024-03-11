import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = ({ currentUser }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/")
  }

  return (
    <footer className="footer">
      <Nav>
        <NavItem>
          <NavLink to="/About" className="nav-link">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>|&copy; 2024 BeatSync.|</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/Contact" onClick={handleClick} className="nav-link">
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </footer>
  )
}

export default Footer