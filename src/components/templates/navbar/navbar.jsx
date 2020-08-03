import React from "react";
import './navbar.scss';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-0">
      <a className="navbar-brand" href="#">
        <img src={require("../../../assets/logo2.png")} alt=""/>
      </a>
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
            <a className="nav-link" href="#">
            <i className="fas fa-home home-icon pr-1"></i>Home
            </a>
          </li>
          <li className="nav-item game px-1">
            <a className="nav-link" href="#">
            <i className="fas fa-gamepad game-icon pr-1"></i>
              Games
            </a>
          </li>
          <li className="nav-item news px-1">
            <a className="nav-link " href="#">
            <i className="fas fa-newspaper news-icon pr-1"></i>
              News
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto mr-4">
          <li className="nav-item login">
              <a className="nav-link" href="#">
              <i className="fas fa-user login-icon pr-1"></i>
              {/* <span className="nav-item-text">Login</span> */}
            </a>
          </li>
          <li className="nav-item cart">
            <a className="nav-link" href="#">
              <i className="fas fa-shopping-cart cart-icon pr-1"></i>
              <span className="badge" id="cart-count">0</span>
              {/* <span className="nav-item-text">Cart</span> */}
            </a>
          </li>
          <li className="nav-item search">
            <a className="nav-link" href="#">
            <i className="fas fa-search search-icon pr-1"></i>
            {/* <span className="nav-item-text">Search</span> */}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
