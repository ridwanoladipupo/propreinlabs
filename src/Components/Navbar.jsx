import React from "react";
import {NavLink } from "react-router-dom"
import LogoIcon from "../images/prop_logo.png";


const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <NavLink  exact className="navbar-brand d-flex" to="/">
                  <img src={LogoIcon} height={45} />
                  <span className="">Propreinlabs</span>
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse float-end"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active"  exact
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active"  exact className="nav-link" to="/products">
                        Products
                      </NavLink>
                    </li>
                    {/* <li className="nav-item">
                      <NavLink activeClassName="menu_active"  exact className="nav-link" to="/about">
                        About
                      </NavLink>
                    </li> */}
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active"  exact className="nav-link" to="/interest">
                        Interest Form
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
