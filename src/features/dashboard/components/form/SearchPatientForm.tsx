import React from "react";
import { Form, Formik } from "formik";
import Input from "../../../../components/form/Input";
import {
  initialValues,
  searchPatientSchema,
} from "../../../../schemas/searchPatientValidationSchema";
import SubmitBtn from "../../../../components/form/SubmitBtn";
import { SearchPatientFormProps } from "../../../../utils/types";
import { useDispatch } from "react-redux";
import { setPatientId } from "../../../../redux/slices/patientSlice";

const SearchPatientForm: React.FC<SearchPatientFormProps> = ({
  handleSubmit,
  label,
  BtnTxt,
  disabled,
}) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={searchPatientSchema}
      onSubmit={handleSubmit}
    >
      {(formikProps) => {
        dispatch(setPatientId(formikProps.values.id));
        return (
          <Form className="flex flex-col gap-3">
            <Input
              label={label}
              name="id"
              type="text"
              placeholder="12345678910112"
            />
            <SubmitBtn BtnTxt={BtnTxt} disabled={disabled} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SearchPatientForm;
