<Nav className="nav">
  {current_user && (
    <NavItem>
      <input type="button" value="Logout" />
    </NavItem>
  )}
  {!current_user && (
    <>
      <NavItem>
        <NavLink to="/login" className="nav-link">
          Log In
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/signup" className="nav-link">
          Sign Up
        </NavLink>
      </NavItem>
    </>
  )}
</Nav>