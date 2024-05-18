import * as Yup from "yup";

const initialValues = {
  id: "",
};

const searchPatientSchema = Yup.object({
  id: Yup.string()
    .matches(/^\d{10}$/, "Please enter exactly 10 numbers")
    .required("id is required"),
});

export { initialValues, searchPatientSchema };
