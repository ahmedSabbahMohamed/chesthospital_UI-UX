import * as Yup from "yup";

const initialValues = {
  patientId: "",
  doctorId: "",
  oxygenLevel: "",
};

const validationSchema = Yup.object({
  oxygenLevel: Yup.number().required("Oxygen level is required"),
});

export { initialValues, validationSchema };
