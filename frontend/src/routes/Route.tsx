import React from 'react';
import { RouteProps as ReactDOMRouterProps, Route as ReactDOMRoute, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';

import { ROUTE_SIGNUP, ROUTE_DASHBOARD } from '../constants/Routes';

interface RouteProps extends ReactDOMRouterProps {
    isPrivate?: boolean;
    component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const { user } = useAuth();
  const isSigned = !!user;

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => (isPrivate === isSigned ? (
        <Component />
      ) : (
        <Redirect to={
            {
              pathname: isPrivate
                ? ROUTE_SIGNUP : ROUTE_DASHBOARD,
              state: { from: location },
            }
        }
        />
      ))}
    />
  );
};

export default Route;
