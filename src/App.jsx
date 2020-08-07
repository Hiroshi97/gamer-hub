import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/home/";
import { Navbar, Footer } from "./components/templates";
import { Login, AuthRoute, Signup, Profile } from "./components/authentication";
import { AuthContext } from "./contexts";
import "./App.scss";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");

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
          </Switch>
          <Footer />
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
