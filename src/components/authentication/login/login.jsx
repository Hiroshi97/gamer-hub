import React from "react";
import "./login.scss";

export default function Login() {
  return (
    <div className="container-fluid h-100 login-page">
      <div className="container h-100 login-form">
        <div className="h-100 row justify-content-center align-items-center">
          <div className="col col-6">
          <div className="text-center">
          <img src={require('../../../assets/logo-andy.png')} alt=""/>
          <h1>LOGIN</h1>
          </div>
          
            <form>
              <div class="form-group">
                <label for="inputEmail">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail"
                />
              </div>
              <div class="form-group">
                <label for="inputPassword">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                />
              </div>
              <div class="form-group form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="checkRememberMe"
                />
                <label class="form-check-label" for="checkRememberMe">
                  Remember Me
                </label>
              </div>
              <div class="form-group form-submit text-center">
                <button type="submit" class="btn btn-primary">
                Login
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
