import { Form, Formik } from "formik";
import React from "react";
import Input from "../../../../../components/form/Input";
import FileInput from "../../../../../components/form/FileInput";
import SubmitBtn from "../../../../../components/form/SubmitBtn";

const ResultForm: React.FC = () => {
  return (
    <Formik initialValues={{}} onSubmit={(values) => {console.log(values)}}>
        <Form>
            <Input label="Patient ID" name="patientId" />
            <FileInput />
            <SubmitBtn BtnTxt="Send Results" disabled={false} />
        </Form>
    </Formik>
  );
};

export default ResultForm;
