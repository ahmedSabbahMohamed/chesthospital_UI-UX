import * as Yup from "yup";

const initialValues = {
  id: "",
  name: "",
  email: "",
  address: "",
  phone: "",
  password: "",
  specialization: "",
  role: "",
};

const validationSchema = Yup.object({
  id: Yup.string()
    .max(10, "Invalid id")
    .min(10, "Invalid id")
    .required("id is required"),
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("invalid email address")
    .required("email is required"),
  address: Yup.string().required("Address is required"),
  phone: Yup.string()
    .matches(/^01\d{9}$/, "Invalid phone number")
    .required("phone is required"),
  passwod: Yup.string().min(8, "min length is 8 characters"),
  specialization: Yup.string().required("Specialization is required"),
  role: Yup.string().required("Role is required"),
});

export { initialValues, validationSchema };
