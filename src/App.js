import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Shop from './components/ShopComponent.js/Shop';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </Router>
  );
}

export default App;
