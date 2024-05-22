import * as Yup from "yup";

const initialValues = {
    patientId: '',
    doctorId: '',
    diagnose: '',
    prescription: '',
};

const validationSchema = Yup.object({
    diagnose: Yup.string().required('Diagnose is required'),
    prescription: Yup.string().required('Prescription is required'),
});

export { initialValues, validationSchema };
