import React from 'react'
import AddMedicineForm from '../components/form/AddMedicineForm'

const AddMedicine: React.FC = () => {
  return (
    <div>
      <h2 className="text-center text-dark font-bold text-xl my-5">
        Add Medicine
      </h2>
      <div>
        <AddMedicineForm />
      </div>
    </div>
  );
}

export default AddMedicine