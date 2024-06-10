import React from "react";
import Input from "../../../../../components/form/Input";
import { Form, Formik, FormikHelpers } from "formik";
import SubmitBtn from "../../../../../components/form/SubmitBtn";
import { useDeleteEmployee } from "../../services/managerQueries";
import { FormValue } from "../../utils/types";

const DeleteEmployeeForm: React.FC = () => {
  const { mutateAsync } = useDeleteEmployee();

  const handleSubmit = async (
    values: FormValue,
    { setSubmitting }: FormikHelpers<FormValue>
  ) => {
    try {
      await mutateAsync(values.id);
    } catch (err) {
      console.error("Failed to delete employee:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={{ id: "" }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-4">
          <Input label="Employee ID" name="id" />
          <SubmitBtn BtnTxt="Delete Employee" disabled={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};

export default DeleteEmployeeForm;
