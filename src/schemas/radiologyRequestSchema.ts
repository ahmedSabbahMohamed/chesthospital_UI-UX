import * as Yup from "yup";

const initialValues = {
  patientId: "",
  doctorId: "",
  name: "",
  description: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Radiology name required"),
  description: Yup.string()
    .min(10, "Description is too short, please write more clear description")
    .required("Description required"),
});

export { initialValues, validationSchema };
