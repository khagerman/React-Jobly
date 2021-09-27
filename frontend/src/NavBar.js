import React from "react";

import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar({ currentUser, logout }) {
  function loggedInNav() {
    return (
      <>
        <li className="nav-item">
          <NavLink className="nav-link" to="/companies">
            Companies
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Jobs">
            Jobs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/profile"
          >{`${currentUser.username} Profile `}</NavLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/" onClick={logout}>
            Log Out
          </Link>
        </li>
      </>
    );
  }
  function loggedOutNav() {
    return (
      <>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Log In
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">
            Sign Up
          </NavLink>
        </li>
      </>
    );
  }

  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container-fluid">
        <NavLink exact to="/" className="navbar-brand">
          Jobly
        </NavLink>
        <ul className="navbar-nav">
          {currentUser ? loggedInNav() : loggedOutNav()}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
