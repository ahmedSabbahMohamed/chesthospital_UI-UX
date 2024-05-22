import * as Yup from 'yup';

const initialValues = {
    patientId: '',
    doctorId: '',
    medicine: [],
};

const validationSchema = Yup.object({
    medicine: Yup.array().required('Medicine is required'),
});

export { initialValues, validationSchema };
