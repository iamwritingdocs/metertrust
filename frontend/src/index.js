import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import './style.css';
import Readings from './views/readings';
import Payment from './views/payment';
import Home from './views/home';
import NotFound from './views/not-found';
import App from './views/App';
import WorldIDVerification from './views/WorldIDVerification';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/readings" component={Readings} />
      <Route exact path="/payment" component={Payment} />
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={App} />
      <Route exact path="/verify-world-id" component={WorldIDVerification} />
      <Route component={NotFound} />
      {/* <Redirect to="/" /> Fallback redirect; it's safe to remove this or ensure it's the last route */}
    </Switch>
  </Router>,
  document.getElementById('app')
);
