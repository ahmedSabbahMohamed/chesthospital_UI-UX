import * as Yup from "yup";

const initialValues = {
  patientId: "",
  doctorId: "",
  name: "",
  description: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Lab Name is required"),
  description: Yup.string()
    .min(10, "Description is too short, please write more clear description")
    .required("description required"),
});

export { initialValues, validationSchema };
