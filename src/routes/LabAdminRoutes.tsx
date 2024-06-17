import React from "react";
import LabAdmin from "../pages/LabAdmin";
import LabRequests from "../features/dashboard/sharedPages/LabRequests";
import { useRoutes } from "react-router-dom";
import NotFoundPage from "../components/ui/NotFoundPage";
import { UploadLabResults } from "../features/dashboard/lab/admin";

const LabAdminRoutes: React.FC = () => {
  const existingPaths = [
    {
      path: "",
      element: <LabAdmin />,
      children: [
        { index: true, element: <LabRequests /> },
        { path: "/upload-result", element: <UploadLabResults /> },
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

export default LabAdminRoutes;
