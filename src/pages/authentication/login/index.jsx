import React, { useRef, useState } from "react";
import { useHistory, Redirect, Link } from "react-router-dom";
import { userLogin } from "../../../api-call/userAPI";
import { EMAIL_REGEX } from "../../../constants";
import "./login.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  LoginSuccess,
  LoginRequest,
  LoginFailure,
} from "../../../actions/AuthActions";
import { FetchCart } from "../../../actions/CartActions";
import { triggerAlert } from "../../../utils/trigger-alert";

export default function Login() {
  const dispatch = useDispatch();
  let email = useRef();
  let password = useRef();
  const history = useHistory();
  const invalidError = useSelector((state) => state.authState.error);
  const [error, setError] = useState(invalidError);
  const isLoggedIn = useSelector((state) => state.authState.result);
  const isLoading = useSelector((state) => state.authState.loading);

  if (isLoggedIn) return <Redirect to={{ pathname: "/profile" }} />;

  const handleLogin = (e) => {
    e.preventDefault();
    if (!EMAIL_REGEX.test(email.value)) {
      setError("Invalid email format!");
    } else {
      dispatch(LoginRequest());
      userLogin(email.value, password.value)
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res));
          dispatch(LoginSuccess(res));
          dispatch(FetchCart());
          triggerAlert('success', 'LOGIN SUCCESSFUL', 'You haved logged in successfully!');
          history.goBack();
        })
        .catch((err) => {
          if (err.response) {
            let errorMsg = err.response.data.error.message;
            errorMsg = errorMsg.split("_").join(" ");
            dispatch(LoginFailure());
            setError(errorMsg);
          } else console.log(err);
          triggerAlert('error', 'ERROR', 'Something wrong. Please try again!');
        });
    }
  };

  return (
    <div className="container-fluid h-100 login-page">
      <div className="container h-100 login-form mt-5">
        <div className="h-100 row justify-content-center align-items-center">
          <div className="col col-6">
            <div className="text-center">
              <img src={require("../../../assets/logo-andy.png")} alt="" />
              <h1>LOGIN</h1>
              {!isLoading && error ? (
                <div className="alert alert-danger" role="alert">
                  <i className="fas fa-times mr-1"></i>
                  {error}
                </div>
              ) : null}
            </div>
            {!isLoading ? (
              <form>
                <div className="form-group">
                  <label htmlFor="inputEmail">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    ref={(input) => (email = input)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputPassword">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    ref={(input) => (password = input)}
                    required
                  />
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="checkRememberMe"
                  />
                  <label className="form-check-label" htmlFor="checkRememberMe">
                    Remember Me
                  </label>
                </div>
                <div className="form-group form-submit text-center">
                  <button
                    onClick={handleLogin}
                    type="submit"
                    className="btn btn-primary mb-3"
                  >
                    Login
                  </button>
                  <p>
                    Do not have an account yet?{" "}
                    <Link to="/signup">Sign up</Link>
                  </p>
                </div>
              </form>
            ) : (
              <img
                className="d-block mx-auto"
                src="https://mentalapp.org/app/library/images/loading.gif"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
