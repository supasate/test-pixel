import React from 'react';
import {Route} from 'react-router-dom';
import App from './landing/components/App';
import SignUp from './signup/components/SignUp';
import Products from './products/components/Products';

const route = (
  <div>
    <Route exact path="/" component={App} />
    <Route path="/signup" component={SignUp} />
    <Route path="/products" component={Products} />
  </div>
);

export default route;
