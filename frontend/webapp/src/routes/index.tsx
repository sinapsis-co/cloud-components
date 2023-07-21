import HomePage from '@webapp/pages';
import React from 'react';

import { Navigate } from 'react-router-dom';

interface Route {
  path: string;
  component: React.ReactNode;
}

const ProjectRoutes: Route[] = [
  {
    path: '/',
    component: <HomePage />,
  },
];

export default ProjectRoutes;
