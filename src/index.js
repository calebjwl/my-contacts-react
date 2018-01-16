import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import About from './components/About';

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={App}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
  ,
  document.getElementById('root'));
