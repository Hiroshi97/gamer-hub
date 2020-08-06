import React from "react";
import './navbar.scss';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-0">
      <Link className="navbar-brand" to="/">
        <img src={require("../../../assets/logo2.png")} alt=""/>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item home px-1">
            <Link className="nav-link" to="/">
            <i className="fas fa-home home-icon pr-1"></i>Home
            </Link>
          </li>
          <li className="nav-item game px-1">
            <Link className="nav-link" to="#">
            <i className="fas fa-gamepad game-icon pr-1"></i>
              Games
            </Link>
          </li>
          <li className="nav-item news px-1">
            <Link className="nav-link " to="#">
            <i className="fas fa-newspaper news-icon pr-1"></i>
              News
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto mr-4">
          <li className="nav-item login">
              <Link className="nav-link" to="/login">
              <i className="fas fa-user login-icon pr-1"></i>
              {/* <span className="nav-item-text">Login</span> */}
            </Link>
          </li>
          <li className="nav-item cart">
            <Link className="nav-link" to="#">
              <i className="fas fa-shopping-cart cart-icon pr-1"></i>
              <span className="badge" id="cart-count">0</span>
              {/* <span className="nav-item-text">Cart</span> */}
            </Link>
          </li>
          <li className="nav-item search">
            <Link className="nav-link" to="#">
            <i className="fas fa-search search-icon pr-1"></i>
            {/* <span className="nav-item-text">Search</span> */}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
