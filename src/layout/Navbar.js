import React from 'react';
import {Link} from "react-router-dom";
import logo from '../logo/logo2.png';
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" height="58" />
             School Purchase Log</Link>
          {/* <button *3LINES*
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          {/* path links to Route on App.js - this is a linked button */}
          <Link className="btn btn-outline-light" to="/adduser">Add User</Link>

        </div>
      </nav>
    </div>
  )
}
