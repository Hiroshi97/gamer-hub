import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function AuthRoute({component: Component, isAuthed, ...rest}) {
  return (
    <Route {...rest}
    render={(props) => isAuthed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  );
}