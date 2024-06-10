import React from "react";
import Manager from "../pages/Manager";
import { useRoutes } from "react-router-dom";
import { SearchPatient, AddEmployee, DeleteEmployee } from "../features/dashboard/manager";
import NotFoundPage from "../components/ui/NotFoundPage";

const ManagerRoutes: React.FC = () => {
  const existingPaths = [
    {
      path: "/",
      element: <Manager />,
      children: [
        { index: true, element: <SearchPatient /> },
        { path: "add-employee", element: <AddEmployee /> },
        { path: "delete-employee", element: <DeleteEmployee /> },
      ],
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

export default ManagerRoutes;
