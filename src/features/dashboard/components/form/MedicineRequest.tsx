import { Form, Formik } from "formik";
import React from "react";
import Input from "../../../../components/form/Input";
import {
  initialValues,
  validationSchema,
} from "../../../../schemas/medicineRequestSchema";

const MedicineRequest: React.FC = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Input name="medicine" label="Medicine" />
        </Form>
      </Formik>
    </div>
  );
};

export default MedicineRequest;
