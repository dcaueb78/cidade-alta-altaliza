import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

// Routes Path
import {
  ROUTE_SIGNUP,
  ROUTE_DASHBOARD,
} from '../constants/Routes';

// Public Routes
import SignIn from '../pages/SignIn';

// Private Routes
import Dashboard from '../pages/Dashboard';

import Navbar from '../components/Navbar';

// to do: criar um HOC para a navbar
const Routes: React.FC = () => (
  <Switch>
    <Route path={ROUTE_SIGNUP} exact component={SignIn} />

    <Navbar>
      <Route path={ROUTE_DASHBOARD} exact component={Dashboard} isPrivate />
    </Navbar>
  </Switch>
);

export default Routes;
