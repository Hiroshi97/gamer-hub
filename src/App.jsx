import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/home";
import { Navbar, Footer } from "./pages/templates";
import { Login, AuthRoute, Signup, Profile, Logout } from "./pages/authentication";
import Page404 from "./pages/404/404";
import GameStore from "./pages/game-store/game-store";
import { useSelector } from 'react-redux';
import "./App.scss";


function App() {
  let isLoggedIn = useSelector(state => state.authState.result);
  return (
    
    <div className="App">
      <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/store" component={GameStore}/>
            <AuthRoute
              exact
              path="/profile"
              isLoggedIn={isLoggedIn}
              component={Profile}
            ></AuthRoute>
            <AuthRoute
              exact
              path="/logout"
              isLoggedIn={isLoggedIn}
              component={Logout}
            ></AuthRoute>
            <Route component={Page404}/>
          </Switch>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
