import React from 'react'
import SearchMedicineForm from '../components/form/SearchMedicineForm'

const DeleteMedicine: React.FC = () => {
  return (
    <div>
        <h2 className='text-error font-bold my-5 text-xl text-center'>Delete Medicne</h2>
        <SearchMedicineForm />
    </div>
  )
}

export default DeleteMedicine