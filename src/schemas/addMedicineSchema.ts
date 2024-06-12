import * as Yup from "yup";

const initialValues = {
  name: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Medicine name is too short")
    .required("Medicine name is required"),
});

export { initialValues, validationSchema };
