import React from "react";
import NursingAdmin from "../pages/NursingAdmin";
import MedicineRequestsList from "../features/dashboard/sharedPages/MedicineRequestsList";
import { useRoutes } from "react-router-dom";
import NotFoundPage from "../components/ui/NotFoundPage";
import LabRequests from "../features/dashboard/sharedPages/LabRequests";
import RadiologyRequests from "../features/dashboard/sharedPages/RadiologyRequests";
import { OxygenRequests } from "../features/dashboard/nursing/admin";

const NursingAdminRoutes: React.FC = () => {
  const existingPaths = [
    {
      path: "",
      element: <NursingAdmin />,
      children: [
        { index: true, element: <MedicineRequestsList /> },
        { path: "/lab-requests", element: <LabRequests /> },
        { path: "/radiology-requests", element: <RadiologyRequests /> },
        { path: "/oxygen-requests", element: <OxygenRequests /> },
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

export default NursingAdminRoutes;
