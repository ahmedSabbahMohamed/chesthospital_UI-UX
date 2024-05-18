import React from "react";
import Input from "../../../../components/form/Input";
import { Form, Formik } from "formik";
import { initialValues, validationSchema } from "../../../../schemas/consultationRequestSchema";

const ConsultationRequest: React.FC = () => {

  const handleSubmit = (values: any) => {
    console.log(values)
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Input
            name="name"
            label="Doctor Name:"
          />
          <Input
            name="specialization"
            label="Doctor Specialization:"
          />
          <Input
            name="hospital"
            label="Doctor Hospital:"
          />
        </Form>
      </Formik>
    </div>
  );
};

export default ConsultationRequest;
