import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/home";
import { Navbar, Footer } from "./pages/templates";
import { Login, AuthRoute, Signup, Profile, Logout } from "./pages/authentication";
import { AuthContext } from "./contexts";
import Page404 from "./pages/404/404";
import "./App.scss";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) setUserData(user);
  }, []);

  return (
    <div className="App">
      <Router>
        <AuthContext.Provider value={{ userData, setUserData }}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <AuthRoute
              exact
              path="/profile"
              isAuthed={userData ? true : false}
              component={Profile}
            ></AuthRoute>
            <AuthRoute
              exact
              path="/logout"
              isAuthed={userData ? true : false}
              component={Logout}
            ></AuthRoute>
            <Route component={Page404}/>
          </Switch>
          <Footer />
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
