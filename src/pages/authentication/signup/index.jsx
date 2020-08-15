import React, { useRef, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { EMAIL_REGEX, NAME_REGEX } from "../../../constants/constants";
import "./signup.scss";
import { userSignUp } from "../../../apis/userAPI";
import {useSelector, useDispatch} from "react-redux";
import { LoggedIn, LoginSuccessful } from "../../../actions/AuthActions";

export default function Signup() {
  let email = useRef();
  let password = useRef();
  let confirmPassword = useRef();
  let name = useRef();
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const isLoggedIn = useSelector(state => state.authState.result);
  const dispatch = useDispatch();
  if (isLoggedIn)
    return (<Redirect to={{pathname: '/profile'}} />);

  const handleValidation = () => {

    //VALIDATION ERROR HANDLER
    let errors = [];

    if (!NAME_REGEX.test(name.value)) errors.push("Please enter a valid name");

    if (!email.value || !EMAIL_REGEX.test(email.value))
      errors.push("Invalid email format!");

    if (!password.value) errors.push("Please input password!");

    if (password.value != confirmPassword.value)
      errors.push("Confirm password does not match!");

    return errors;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const errors = handleValidation();
    if (errors.length > 0) {
      setErrors(errors);
    } else {
      userSignUp({email: email.value, password: password.value, name: name.value})
        .then((res) => {
          localStorage.setItem(
            "user",
            JSON.stringify(res)
          );
          dispatch(LoginSuccessful(res));
          dispatch(LoggedIn());
          history.push("/");
        })
        .catch((err) => {
          //SERVER RESPONSE ERROR HANDLER
          let errorMsg = err.response.data.error.message;
          let errMsgs = [];
          errorMsg = errorMsg.split("_").join(" ");
          errMsgs.push(errorMsg);
          setErrors(errMsgs);
        });
    }
  };
  return (
    <div className="container-fluid h-100 signup-page">
      <div className="container h-100 signup-form mt-5">
        <div className="h-100 row justify-content-center align-items-center">
          <div className="col col-6">
            <div className="text-center">
              <img src={require("../../../assets/logo-andy.png")} alt="" />
              <h1>REGISTER</h1>
              {errors.length > 0
                ? errors.map((error, index) => (
                    <div key={index} className="alert alert-danger" role="alert">
                      <i className="fas fa-times mr-1"></i>
                      {error}
                    </div>
                  ))
                : null}
            </div>

            <form>
              <div className="form-group">
                <label htmlFor="inputName">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  ref={(input) => (name = input)}
                  required
                />
              </div>
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
              <div className="form-group">
                <label htmlFor="inputConfirmPassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputConfirmPassword"
                  ref={(input) => (confirmPassword = input)}
                  required
                />
              </div>

              <div className="form-group form-submit text-center">
                <button
                  onClick={handleRegister}
                  type="submit"
                  className="btn btn-primary my-3"
                >
                  Register
                </button>
                <p>
                  Already had an account? <Link to="/login">Log in</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
