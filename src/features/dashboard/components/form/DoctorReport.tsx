import React from 'react'
import { Form, Formik } from 'formik'
import Input from '../../../../components/form/Input'
import SubmitBtn from '../../../../components/form/SubmitBtn'
import { initialValues, validationSchema } from '../../../../schemas/doctorReportValidationSchema'
import usePatientId from '../../../../hooks/PatientId'
import useEmployeeId from '../../../../hooks/EmployeeId'
import { usePostPatientReport } from '../../doctor/services/hooks/useDoctorQuery';
import { idProps } from '../../../../utils/types'

const DoctorReport: React.FC<idProps> = ({ id }) => {

  const patientId = usePatientId();
  const employeeId = useEmployeeId();

  const mutation = usePostPatientReport(id);

  const handleSubmit = async (values: any) => {
    values.patientId = patientId;
    values.doctorId = employeeId;
    try {
      mutation.mutate(values);
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {formikProps => {
        return (
          <Form className='flex items-end justify-center gap-2 flex-wrap'>
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
              disabled={formikProps.isSubmitting}
            />
          </Form>
        )
      }}
    </Formik>
  )
}

export default DoctorReport