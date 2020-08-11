import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function AuthRoute({component: Component, isLoggedIn, ...rest}) {
  return (
    <Route {...rest}
    render={(props) => isLoggedIn === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  );
}
