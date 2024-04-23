import * as Yup from "yup";

const initialValues = {
    id: ""
}

const searchPatientSchema = Yup.object({
  id: Yup.string()
    .matches(/^\d{14}$/, "Please enter exactly 14 numbers")
    .required("id is required"),
});

export { initialValues, searchPatientSchema }
