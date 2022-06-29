import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link m-2" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link m-2" to="/create">
              New Note
            </Link>
            <Link className="nav-item nav-link m-2" to="/edit/:id"></Link>
            <Link className="nav-item nav-link m-2" to="/delete/:id">
              Delete User
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
