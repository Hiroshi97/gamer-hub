import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home/home';
import Navbar from './components/templates/navbar/navbar';
import './App.scss';
import Footer from './components/templates/footer/footer';
import Login from './components/authentication/login/login';


function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
          </Switch>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
