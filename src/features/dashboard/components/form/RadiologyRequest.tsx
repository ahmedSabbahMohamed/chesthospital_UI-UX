import React from "react";
import Input from "../../../../components/form/Input";
import { Form, Formik } from "formik";
import {
  initialValues,
  validationSchema,
} from "../../../../schemas/radiologyRequestSchema";

const RadiologyRequest: React.FC = () => {
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
          <Input name="name" label="Radiology Name:" />
          <Input name="description" label="Description" />
        </Form>
      </Formik>
    </div>
  );
};

export default RadiologyRequest;
