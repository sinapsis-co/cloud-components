import React from 'react';

import { Navigate } from 'react-router-dom';

import HomePage from '@webapp/pages';
// Auth pages
import ForgotPasswordPage from '@webapp/pages/auth/forgot-password';
import ForgotPasswordVerifyPage from '@webapp/pages/auth/forgot-password-verify';
import SignInPage from '@webapp/pages/auth/sign-in';
import SignUpPage from '@webapp/pages/auth/sign-up';
import VerificationCodePage from '@webapp/pages/auth/verification-code';

interface Route {
  path: string;
  component: React.ReactNode;
}

const ProjectRoutes: Route[] = [
  {
    path: '/home',
    component: <HomePage />,
  },
  {
    path: '/',
    component: <Navigate to="/sign-in" />,
  },
  {
    path: '/sign-in',
    component: <SignInPage />,
  },
  {
    path: '/sign-up',
    component: <SignUpPage />,
  },
  {
    path: '/forgot-password',
    component: <ForgotPasswordPage />,
  },
  {
    path: '/forgot-password/verify',
    component: <ForgotPasswordVerifyPage />,
  },
  {
    path: '/verification-code',
    component: <VerificationCodePage />,
  },
];

export default ProjectRoutes;
