import React from 'react';
import './404.scss';
import { useHistory } from "react-router-dom";

export default function Page404({location}) {
    let history = useHistory();

    const goBack = (event) => {
        event.preventDefault();
        history.push('/');
    }

    return (
        <div className="container-fluid h-100 page404">
            <div className="row text-center justify-content-center">
                <div className="col-12 col-md-6 col-lg-6 col-sm-12 col-xs-12 page404-display mt-5">
                <h1 className="text-404">404</h1>
                <h2 className="alert-404">No match found for <span className="page404-current-location">{location.pathname}</span></h2>
                <p className="msg-404">Sorry but we couldn't find the page you are looking for. Please check to make sure you've typed the URL correctly.</p>
                <button className="btn btn-dark btn-lg" onClick={goBack}><i class="fa fa-arrow-left pr-2" aria-hidden="true"></i>Go back</button>
                </div>
            </div>
        </div>
  );
}
