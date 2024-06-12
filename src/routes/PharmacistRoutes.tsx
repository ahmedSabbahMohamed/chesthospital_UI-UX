import React from "react";
import Pharmacist from "../pages/Pharmacist";
import { DeleteMedicine, AddMedicine } from "../features/dashboard/pharmacist";
import { useRoutes } from "react-router-dom";
import NotFoundPage from "../components/ui/NotFoundPage";
import MedicineRequestsList from "../features/dashboard/sharedPages/MedicineRequestsList";

const PharmacistRoutes: React.FC = () => {
  const existingPaths = [
    {
      path: "",
      element: <Pharmacist />,
      children: [
        { index: true, element: <AddMedicine /> },
        { path: "delete-medicine", element: <DeleteMedicine /> },
        { path: "requests", element: <MedicineRequestsList /> },
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

export default PharmacistRoutes;
