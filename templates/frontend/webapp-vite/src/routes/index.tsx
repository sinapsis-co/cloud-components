import { AnotherPage } from '../pages/anotherPage';
import React from 'react';
import { HomePage } from '../pages/home';

interface Route {
  path: string;
  component: React.ReactElement;
}

const ProjectRoutes: Route[] = [
  {
    path: '/',
    component: <HomePage />,
  },
  {
    path: '/another',
    component: <AnotherPage />,
  },
];

export default ProjectRoutes;
