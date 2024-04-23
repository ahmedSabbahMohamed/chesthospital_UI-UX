import React from 'react'
import Reception from '../pages/Reception'
import { useRoutes } from 'react-router-dom';
import { AddPatient, SearchPatient } from '../features/dashboard/reception';
import NotFoundPage from '../components/ui/NotFoundPage';

const ReceptionRoutes: React.FC = () => {

const existingPaths = [
  {
    path: "/",
    element: <Reception />,
    children: [
      { index: true, element: <SearchPatient /> },
      { path: "add-patient", element: <AddPatient /> },
    ],
  },
];

const routes = useRoutes(existingPaths)

  return (
    <>
    {!routes && <NotFoundPage />}
    {routes}
    </>
  )
}

export default ReceptionRoutes