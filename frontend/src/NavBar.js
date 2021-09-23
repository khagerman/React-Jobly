import React from "react";

import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar({ currentUser, logout }) {
  function loggedInNav() {
    return (
      <>
        <NavItem>
          <NavLink to="/companies">Companies</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/Jobs">Jobs</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/profile">{`${currentUser.username} Profile `}</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/" onClick={logout}>
            Log Out
          </NavLink>
        </NavItem>
      </>
    );
  }
  function loggedOutNav() {
    return (
      <>
        <NavItem>
          <NavLink to="/login">Log In</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/signup">Sign Up</NavLink>
        </NavItem>
      </>
    );
  }
  console.log(currentUser, "hey");
  return (
    <div>
      <Navbar
        className="navbar navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <NavLink exact to="/" className="navbar-brand">
          Jobly
        </NavLink>
        <Nav navbar>{currentUser ? loggedInNav() : loggedOutNav()}</Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
