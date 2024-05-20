import React from 'react';
import { useRoutes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';
import NotFoundPage from '../components/ui/NotFoundPage';

const PublicRoutes: React.FC = () => {

  const existingPaths = [
    {
        path: "/",
        element: <LandingPage />,
        index: true,
    },
    {
        path: "/login",
        element: <Login />,
    },
  ];

  const routes = useRoutes(existingPaths);

  return (
    <>
      {!routes && <NotFoundPage />}
      {routes}
    </>
  );
};

export default PublicRoutes;