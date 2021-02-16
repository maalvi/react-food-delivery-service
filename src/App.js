import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <h1>Orders</h1>
          </Route>
          <Route path="/refer">
            <Header />
            <h1>Refer a Buddy</h1>
          </Route>
          <Route path="/search">
            <Header />
            <h1>Search</h1>
          </Route>
          <Route path="/login">
            <Header />
            <h1>Login</h1>
          </Route>
          <Route path="/cart">
            <Header />
            <h1>Cart</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
