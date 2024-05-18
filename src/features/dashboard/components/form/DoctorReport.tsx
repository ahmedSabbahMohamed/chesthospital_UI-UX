import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import Input from '../../../../components/form/Input'
import SubmitBtn from '../../../../components/form/SubmitBtn'

const DoctorReport: React.FC = () => {

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (values: any) => {
    console.log("values", values)
  }

  return (
    <Formik
      initialValues={{}}
      validationSchema={""}
      onSubmit={handleSubmit}
    >
      {formikProps => {
        return (
          <Form>
            <Input
              label='Diagnose illness'
              name='diagnose'
            />
            <Input
              label='Prescription'
              name='prescription'
            />
            <SubmitBtn
              BtnTxt='Add Report'
              disabled={loading}
            />
          </Form>
        )
      }}
    </Formik>
  )
}

export default DoctorReport