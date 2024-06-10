import React from 'react'
import AddEmployeeForm from '../components/form/AddEmployeeForm'

const AddEmployee: React.FC = () => {
  return (
    <div className='container mx-auto'>
        <h1 className='text-dark text-xl font-bold text-center my-5'>Add Employee</h1>
        <div className='rounded-md bg-white p-5 border-light mx-4'>
            <AddEmployeeForm />
        </div>
    </div>
)
}

export default AddEmployee