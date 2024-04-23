import React from 'react'
import AddPatientForm from '../components/form/AddPatientForm'

const AddPatient: React.FC = () => {
  return (
    <div className='flex items-center justify-center flex-col gap-3 py-5'>
      <h2 className='text-dark font-bold text-2xl'>Add Patient</h2>
      <div className='mx-3 bg-white rounded-lg shadow-lg p-3'>
        <AddPatientForm />
      </div>
    </div>
  )
}

export default AddPatient