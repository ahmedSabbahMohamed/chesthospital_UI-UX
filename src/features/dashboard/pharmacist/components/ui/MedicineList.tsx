import React from "react";
import MedicineListItem from "./MedicineListItem";

interface MedicineListProps {
  medicines: { id: number; name: string }[];
}

const MedicineList: React.FC<MedicineListProps> = ({ medicines }) => (
  <div className="bg-white rounded-md p-3 my-2 max-h-[50vh] overflow-auto">
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine, index) => (
            <MedicineListItem
              key={medicine.id}
              medicine={medicine}
              index={index}
            />
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default MedicineList;
