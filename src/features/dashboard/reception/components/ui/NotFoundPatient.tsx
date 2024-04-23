import React from "react";
import { Link } from "react-router-dom";
import { NotFoundPatientProps } from "../../../../../utils/types";

const NotFoundPatient: React.FC<NotFoundPatientProps> = ({ message }) => {
  return (
    <div className="w-full max-w-sm">
      <h3 className="text-error mb-3 text-lg">{message}</h3>
      <Link
        to={"/add-patient"}
        className="btn btn-success text-white w-full max-w-xs"
      >
        إضافة مريض
      </Link>
    </div>
  );
};

export default NotFoundPatient;
