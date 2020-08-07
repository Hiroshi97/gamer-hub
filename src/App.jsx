import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from './components/home/';
import { Navbar, Footer } from './components/templates';
import { Login } from './components/authentication';
import './App.scss';



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
