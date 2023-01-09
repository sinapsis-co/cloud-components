import React from 'react';
import { HomePage } from '../pages/home';

interface Route {
  path: string;
  component: string | React.FunctionComponent<unknown> | React.ComponentClass<unknown, unknown>;
}

const Routes: Route[] = [
  {
    path: '/',
    component: HomePage,
  },
];

export default Routes;
