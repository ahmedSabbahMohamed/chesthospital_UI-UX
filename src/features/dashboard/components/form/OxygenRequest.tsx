import { Form, Formik } from 'formik'
import React from 'react'
import Input from '../../../../components/form/Input'
import { initialValues, validationSchema } from '../../../../schemas/oxygenRequestSchema'

const OxygenRequest: React.FC = () => {

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
                <Input
                    name='oxygenLevel'
                    label='Oxygen Level:'
                />
            </Form>
        </Formik>
    </div>
  );
};

export default OxygenRequest;