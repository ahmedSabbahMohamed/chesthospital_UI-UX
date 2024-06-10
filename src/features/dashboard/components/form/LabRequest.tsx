import React from "react";
import { Formik, Form } from "formik";
import Input from "../../../../components/form/Input";
import SubmitBtn from "../../../../components/form/SubmitBtn";
import {
  initialValues,
  validationSchema,
} from "../../../../schemas/labRequestSchema";
import usePatientId from "../../../../hooks/PatientId";
import useEmployeeId from "../../../../hooks/EmployeeId";
import { useLabRequest } from "../../doctor/services/doctorQueries";
import { idProps } from "../../utils/types";
import { getErrorWithResponse } from "../../../../utils/apiError";
import { toast } from "react-toastify";

const LabRequest: React.FC<idProps> = ({ id }) => {
  const patientId = usePatientId();
  const employeeId = useEmployeeId();
  const mutation = useLabRequest(id);

  const handleSubmit = async (
    values: typeof initialValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    const updatedValues = {
      ...values,
      patientId: parseInt(patientId),
      doctorId: parseInt(employeeId),
    };

    try {
      await mutation.mutateAsync(updatedValues);
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
            <Input name="name" label="Lab Name:" />
            <Input name="description" label="Description" />
            <SubmitBtn BtnTxt="Send Request" disabled={isSubmitting} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LabRequest;
