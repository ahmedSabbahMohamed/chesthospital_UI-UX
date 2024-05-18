import * as Yup from "yup";

const initialValues = {
    doctorId: '',
    name: '',
    specialization: '',
    hospital: '',
};

const validationSchema = Yup.object({
  name: Yup.string().min(9, 'Invalid doctor name').required('Doctor name is required'),
  specialization: Yup.string().required('Doctor specializatin is required'),
  hospital: Yup.string().required('Hospital name is required'),
});

export { initialValues, validationSchema };
