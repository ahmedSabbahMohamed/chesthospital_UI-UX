import { Form, Formik } from "formik";
import React from "react";
import Input from "../../../../components/form/Input";
import {
  initialValues,
  validationSchema,
} from "../../../../schemas/labRequestSchema";
import SubmitBtn from "../../../../components/form/SubmitBtn";
import usePatientId from "../../../../hooks/PatientId";
import useEmployeeId from "../../../../hooks/EmployeeId";
import { useLabRequest } from "../../doctor/services/hooks/useDoctorQuery";
import { idProps } from "../../../../utils/types";

const LabRequest: React.FC<idProps> = ({ id }) => {
  const patientId = usePatientId();
  const employeeId = useEmployeeId();
  const mutation = useLabRequest(id);

  const handleSubmit = async (values: any) => {
    values.patientId = parseInt(patientId);
    values.doctorId = parseInt(employeeId);
    try {
      mutation.mutate(values);
    } catch (err) {
      console.log(err);
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
            <Input name="name" label="Lab Name:" />
            <Input name="description" label="Description" />
            <SubmitBtn
              BtnTxt="Send Request"
              disabled={formikProps.isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LabRequest;
