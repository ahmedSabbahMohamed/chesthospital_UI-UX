import React, { useState } from 'react'
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from '../../../../../components/form/Input';
import SubmitBtn from '../../../../../components/form/SubmitBtn';
import { usePostPatientData } from '../../../../../services/queryHooks/useReceptionQuery';
import { getErrorWithResponse } from '../../../../../utils/apiError';
import { initialValues, validationSchema } from '../../../../../schemas/addPatientValidationSchema';
import Loading from '../../../../../components/ui/Loading';

const AddPatientForm: React.FC = () => {

  const [loading, setLoading] = useState(false)
  const { mutate, error, isSuccess } = usePostPatientData()
  const errorWithResponse = getErrorWithResponse(error)
  const navigate = useNavigate()

  const handleSubmit = async (values: any) => {
    try {
      setLoading(true)
      await mutate(values)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  if (isSuccess) {
    toast.success("Created Patient File");
    navigate("/")
    
  }
  if (error) {
    toast.error(
      errorWithResponse?.response?.data?.message
    );
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form
          className={`flex flex-row flex-wrap items-center justify-center gap-4 ${
            loading ? "cursor-wait" : "cursor-auto"
          }`}
        >
          <Input
            label="اسم المريض"
            name="name"
            placeholder="e.g. Ahmed Sabbah Mohamed"
          />
          <Input
            label="الرقم القومي"
            name="id"
            placeholder="e.g. 12345678934567"
          />
          <Input
            label="رقم التليفون"
            name="phone"
            placeholder="e.g.01557551293"
          />
          <Input
            label="عنوان البريد الإلكتروني"
            name="email"
            type="email"
            placeholder="e.g.example@gmail.com"
          />
          <Input
            label="تاريخ الميلاد"
            name="dateOfBirth"
            type="date"
            placeholder="12/31/1990"
          />
          <Input label="العنوان" name="address" placeholder="" />
          <SubmitBtn BtnTxt="إضافة المريض" disabled={loading} />
        </Form>
      </Formik>
      
      {loading && (
        <div className="w-screen h-screen bg-[#caccce9c] z-50 fixed top-0 left-0 flex justify-center items-center">
          <Loading />
        </div>
      )}
    </>
  );
}

export default AddPatientForm;