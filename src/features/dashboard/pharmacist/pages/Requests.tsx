import React from 'react'
import MedicineRequestsList from '../../sharedPages/MedicineRequestsList';

const Requests: React.FC = () => {
  return (
    <div>
        <h2 className="text-dark text-center text-xl font-bold">
            Medicine Requests
        </h2>
        <div>
            <MedicineRequestsList />
        </div>
    </div>
  );
}

export default Requests