import { lazy } from 'react';

const Login = lazy(() => import('../pages/auth/Login'));

export const publicRoutes = [
  {
    path: '/',
    element: <Login />,
  },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
];
