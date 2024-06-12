import React from "react";
import Input from "../../../../../components/form/Input";
import { Form, Formik } from "formik";
import {
  initialValues,
  validationSchema,
} from "../../../../../schemas/addMedicineSchema";
import SubmitBtn from "../../../../../components/form/SubmitBtn";
import { usePostMedicine } from "../../services/pharmacistQueries";
import Loading from "../../../../../components/ui/Loading";

const AddMedicineForm: React.FC = () => {

    const { mutateAsync } = usePostMedicine();

  const handleSubmit = async (
    values: typeof initialValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
        await mutateAsync(values);
    } catch (err) {
        console.log(err)
    } finally {
        setSubmitting(false)
    }
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => {
        return (
          <Form className="flex flex-col items-center justify-center gap-2">
            <Input label="Medicine Name:" name="name" />
            <SubmitBtn BtnTxt="Add Medicine" disabled={isSubmitting} />
            {isSubmitting && (
              <div className="w-screen h-screen bg-[#caccce9c] z-50 fixed top-0 left-0 flex justify-center items-center">
                <Loading />
              </div>
            )}
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddMedicineForm;
