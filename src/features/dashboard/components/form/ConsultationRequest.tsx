import React from "react";
import Input from "../../../../components/form/Input";
import { Form, Formik } from "formik";
import {
  initialValues,
  validationSchema,
} from "../../../../schemas/consultationRequestSchema";
import SubmitBtn from "../../../../components/form/SubmitBtn";
import useEmployeeId from "../../../../hooks/EmployeeId";
import { useConsultationRequest } from "../../doctor/services/doctorQueries";
import { toast } from "react-toastify";
import { getErrorWithResponse } from "../../../../utils/apiError";
import { idProps } from "../../utils/types";

const ConsultationRequest: React.FC<idProps> = ({ id }) => {
  const doctorId = useEmployeeId();
  const mutation = useConsultationRequest(id);

  const handleSubmit = async (
    values: typeof initialValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    const requestValues = {
      ...values,
      doctorId: parseInt(doctorId),
    };
    try {
      await mutation.mutateAsync(requestValues);
    } catch (err) {
      const error = getErrorWithResponse(err);
      toast.error(error?.response?.data?.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-equal gap-2 items-end justify-center flex-col sm:flex-row">
            <Input name="name" label="Doctor Name:" />
            <Input name="specialization" label="Doctor Specialization:" />
            <Input name="hospital" label="Doctor Hospital:" />
            <SubmitBtn BtnTxt="Send" disabled={isSubmitting} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ConsultationRequest;
