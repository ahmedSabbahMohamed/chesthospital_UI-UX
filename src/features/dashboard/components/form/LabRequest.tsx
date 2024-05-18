import { Form, Formik } from 'formik';
import React from 'react';
import Input from '../../../../components/form/Input';
import { initialValues, validationSchema } from '../../../../schemas/labRequestSchema';

const LabRequest: React.FC = () => {

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
          <Input name="name" label="Lab Name:" />
          <Input name="description" label="Description" />
        </Form>
      </Formik>
    </div>
  );
};

export default LabRequest;