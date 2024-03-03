import * as Yup from "yup";

const initialValues = {
    email: '',
    password: ''
}

const loginSchema = Yup.object({
  email: Yup.string()
    .email("invalid email address")
    .required("email is requied"),
  password: Yup.string()
    .min(8, "password must be at least 8 characters")
    .required("password is required"),
});

export { loginSchema, initialValues };
