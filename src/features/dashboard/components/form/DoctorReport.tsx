import React from "react";
import { Form, Formik } from "formik";
import Input from "../../../../components/form/Input";
import SubmitBtn from "../../../../components/form/SubmitBtn";
import {
  initialValues,
  validationSchema,
} from "../../../../schemas/doctorReportValidationSchema";
import usePatientId from "../../../../hooks/PatientId";
import useEmployeeId from "../../../../hooks/EmployeeId";
import { usePostReport } from "../../doctor/services/doctorQueries";
import { idProps } from "../../utils/types";

const DoctorReport: React.FC<idProps> = ({ id }) => {
  const patientId = usePatientId();
  const employeeId = useEmployeeId();
  const mutation = usePostReport(id);

  const handleSubmit = async (
    values: typeof initialValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    const reportValues = {
      ...values,
      patientId,
      doctorId: employeeId,
    };
    try {
      await mutation.mutateAsync(reportValues);
    } catch (err) {
      console.error("Failed to submit the report:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-equal gap-2 items-end justify-center sm:flex-row flex-col flex-wrap">
          <Input label="Diagnose illness" name="diagnose" />
          <Input label="Prescription" name="prescription" />
          <SubmitBtn BtnTxt="Add Report" disabled={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};

export default DoctorReport;
