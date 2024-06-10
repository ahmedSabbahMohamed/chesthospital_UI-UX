import React from "react";
import Doctor from "../pages/Doctor";
import { useRoutes } from "react-router-dom";
import { SearchPatient } from "../features/dashboard/doctor";
import NotFoundPage from "../components/ui/NotFoundPage";

const DoctorRoutes: React.FC = () => {

  const existingPaths = [
    {
      path: "/",
      element: <Doctor />,
      children: [
        { index: true, element: <SearchPatient /> },
      ],
    },
  ];

  const routes = useRoutes(existingPaths)

  return (
    <>
      {!routes && <NotFoundPage />}
      {routes}
    </>
  );
};

export default DoctorRoutes;
