import React from 'react';
import {Route} from 'react-router-dom';
import App from './landing/components/App';
import SignUp from './signup/components/SignUp';
import ProductList from './products/components/ProductList';
import Product from './products/components/Product';

const route = (
  <div>
    <Route exact path="/" component={App} />
    <Route path="/signup" component={SignUp} />
    <Route exact path="/products" component={ProductList} />
    <Route path="/products/:productId" component={Product} />
  </div>
);

export default route;
