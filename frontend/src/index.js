import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import './style.css';
import Readings from './views/readings';
import Payment from './views/payment';
import Home from './views/home';
import NotFound from './views/not-found';
import App from './views/App'; // Assuming App has specific logic for the /login route

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/readings" component={Readings} />
      <Route exact path="/payment" component={Payment} />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={App} /> {/* Ensure this makes sense for your App component */}
      <Route component={NotFound} />
      <Redirect to="/" /> {/* Fallback redirect; adjust as needed */}
    </Switch>
  </Router>,
  document.getElementById('app')
);
