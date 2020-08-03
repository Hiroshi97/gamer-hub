import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home/home';
import Navbar from './components/templates/navbar/navbar';
import './App.scss';


function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
