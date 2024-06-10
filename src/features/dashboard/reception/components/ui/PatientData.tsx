import React from "react";
import { PatientDataProps } from "../../utils/types";

const PatientData: React.FC<PatientDataProps> = ({ id, name, phone }) => {
  return (
    <div className="bg-white p-5 mx-2 shadow-lg rounded-lg">
      <h1 className="text-2xl text-center font-bold mb-3">Patient Data</h1>
      <div className="flex flex-wrap gap-3 items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="rounded-md p-2 border border-gray flex gap-3">
            <span className="inline-block text-primary">بطاقة تعريف:</span>
            <span>{id}</span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="rounded-md p-2 border border-gray flex gap-3">
            <span className="inline-block text-primary">الاسم:</span>
            <span>{name}</span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="rounded-md p-2 border border-gray flex gap-3">
            <span className="inline-block text-primary">رقم الهاتف:</span>
            <span>{phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientData;
