import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

// Routes Path
import {
  ROUTE_SIGNUP,
  ROUTE_DASHBOARD,
  ROUTE_CART,
  ROUTE_MYCARS,
} from '../constants/Routes';

// Public Routes
import SignIn from '../pages/SignIn';

// Private Routes
import Dashboard from '../pages/Dashboard';
import Cart from '../pages/Cart';
import MyCars from '../pages/MyCars';

import Navbar from '../components/Navbar';

// to do: criar um HOC para a navbar
const Routes: React.FC = () => (
  <Switch>
    <Route path={ROUTE_SIGNUP} exact component={SignIn} />

    <Navbar>
      <Route path={ROUTE_DASHBOARD} exact component={Dashboard} isPrivate />
      <Route path={ROUTE_CART} exact component={Cart} isPrivate />
      <Route path={ROUTE_MYCARS} exact component={MyCars} isPrivate />
    </Navbar>
  </Switch>
);

export default Routes;
