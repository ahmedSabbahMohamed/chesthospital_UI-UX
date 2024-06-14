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
        { index: true, element: <MedicineRequestsList /> },
        { path: "add-medicine", element: <AddMedicine /> },
        { path: "delete-medicine", element: <DeleteMedicine /> },
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
