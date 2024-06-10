import React from 'react'
import DeleteEmployeeForm from '../components/form/DeleteEmployeeForm'

const DeleteEmployee: React.FC = () => {
  return (
    <div>
        <h2 className='font-bold text-error text-xl text-center my-5'>Delete Employee</h2>
        <DeleteEmployeeForm />
    </div>
  )
}

export default DeleteEmployee