import * as Yup from "yup";

const initialValues = {
  id: "",
  name: "",
  email: "",
  phone: "",
  address: "",
  dateOfBirth: "",
};

const validationSchema = Yup.object().shape({
  id: Yup.string()
    .matches(/^\d{10}$/, "Please enter exactly 10 numbers")
    .required("id is required"),
  name: Yup.string().required("الإسم الكامل ضروري").min(15, "الإسم قصير جدا"),
  email: Yup.string()
    .email("invalid email address")
    .required("عنوان البريد الإلكتروني مطلوب"),
  phone: Yup.string()
    .matches(/^01\d{9}$/, "صيغة خاطئة")
    .required("الهاتف مطلوب"),
  address: Yup.string().min(20, "العنوان قصير جدًا").required("العنوان مطلوب"),
  dateOfBirth: Yup.string().required("تاريخ الميلاد مطلوب"),
});

export { initialValues, validationSchema };
