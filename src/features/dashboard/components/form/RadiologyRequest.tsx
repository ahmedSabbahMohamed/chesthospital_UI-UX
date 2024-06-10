import React from "react";
import { Form, Formik } from "formik";
import Input from "../../../../components/form/Input";
import SubmitBtn from "../../../../components/form/SubmitBtn";
import {
  initialValues,
  validationSchema,
} from "../../../../schemas/radiologyRequestSchema";
import usePatientId from "../../../../hooks/PatientId";
import useEmployeeId from "../../../../hooks/EmployeeId";
import { useRadiologyRequest } from "../../doctor/services/doctorQueries";
import { idProps } from "../../utils/types";
import { toast } from "react-toastify";
import { getErrorWithResponse } from "../../../../utils/apiError";

const RadiologyRequest: React.FC<idProps> = ({ id }) => {
  const patientId = usePatientId();
  const doctorId = useEmployeeId();
  const mutation = useRadiologyRequest(id);

  const handleSubmit = async (
    values: typeof initialValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    const requestValues = {
      ...values,
      patientId: parseInt(patientId),
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
            <Input name="name" label="Radiology Name:" />
            <Input name="description" label="Description" />
            <SubmitBtn BtnTxt="Send Request" disabled={isSubmitting} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RadiologyRequest;
