import React from "react";
import Input from "../../../../components/form/Input";
import { Form, Formik } from "formik";
import {
  initialValues,
  validationSchema,
} from "../../../../schemas/consultationRequestSchema";
import SubmitBtn from "../../../../components/form/SubmitBtn";
import useEmployeeId from "../../../../hooks/EmployeeId";
import { useConsultationRequest } from "../../doctor/services/hooks/useDoctorQuery";
import { toast } from "react-toastify";
import { getErrorWithResponse } from "../../../../utils/apiError";

const ConsultationRequest: React.FC = () => {
  const doctorId = useEmployeeId();
  const mutation = useConsultationRequest()

  const handleSubmit = async (values: any) => {
    values.doctorId = parseInt(doctorId);
    try {
      mutation.mutate(values);
    } catch(err) {
      const error = getErrorWithResponse(err)
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => (
          <Form className="flex items-end justify-center gap-2 flex-wrap">
            <Input name="name" label="Doctor Name:" />
            <Input name="specialization" label="Doctor Specialization:" />
            <Input name="hospital" label="Doctor Hospital:" />
            <SubmitBtn BtnTxt="Send" disabled={formikProps.isSubmitting} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ConsultationRequest;
