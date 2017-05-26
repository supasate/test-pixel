import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import routes from './routes';

const Main = () => (
  <Router>
    {routes}
  </Router>
);

export default Main;
