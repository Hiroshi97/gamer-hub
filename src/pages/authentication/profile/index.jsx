import React, { useState, useEffect } from "react";
import {useSelector} from 'react-redux';
import "./profile.scss";
import { Link } from "react-router-dom";

export default function Profile() {
  const userInfo = useSelector(state => state.authState.userInfo);
  return (
    <div className="container-fluid h-100 profile-page">
      <div className="container main-page">
      <div className="row user-profile justify-content-between">
        <div className="col-12 col-xs-6 col-sm-6 col-md-6 col-lg-6 py-2 user-profile-basic-info">
          <div className="row justify-content-center mt-5">
            <div className="user-profile-avatar px-3">
              <img src={require("../../../assets/default-avatar.png")} />
            </div>
            <div className="user-profile-info px-3">
              <h3 className="user-profile-name font-weight-bold">{userInfo.displayName}</h3>
              <p className="user-profile-email">{userInfo.email}</p>
              <button className="btn btn-primary">Edit my profile</button>
              <p className="user-profile-info mt-3">
                No basic information given
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-xs-6 col-sm-6 col-md-6 col-lg-6 py-2 user-profile-addtional-info">
          <h3>
            Level <span>4</span>
          </h3>
          <p className="d-inline"><i className="far fa-arrow-alt-circle-up mr-2"></i>EXP:</p>
          <div className="progress w-25">
              <div
                className="progress-bar bg-success"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{width: "75%"}}
              >
                75/100
              </div>
            </div>
          <div className="mt-3">
          <i className="fas fa-award mr-2"></i>Achievement Progress (75 of 100):{" "}
            <div className="progress w-75 mb-3">
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{width: "75%"}}
              >
                75%
              </div>
            </div>
            </div>
          <p><i className="fas fa-user-clock mr-2"></i>Hours Played: 100 hrs</p>
          <ul className="profile-sub-menu list-unstyled">
              <li>
                  <Link className="text-white" to="/#">Games<i className="fas fa-gamepad ml-2"></i></Link>
              </li>
              <li>
                  <Link className="text-white" to="/#">Inventory<i className="fas fa-bars ml-2"></i></Link>
              </li>
              <li>
                  <Link className="text-white" to="/#">Screenshots<i className="fas fa-images ml-2"></i></Link>
              </li>
              <li>
                  <Link className="text-white" to="/#">Videos<i className="fas fa-video ml-2"></i></Link>
              </li>
              <li>
                <Link className="text-white" to="/#">Friends<i className="fas fa-user-friends ml-2"></i></Link>
              </li>
              {/* <li>
                <Link className="text-white" to="/logout">Log Out<i className="fas fa-sign-out-alt ml-2"></i></Link>
              </li> */}

          </ul>
        </div>
      </div>
      <div className="row justify-content-between game-library">
          
      </div>
      </div>
    </div>
  );
}
