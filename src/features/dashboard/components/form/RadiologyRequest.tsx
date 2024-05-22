import React from "react";
import Input from "../../../../components/form/Input";
import { Form, Formik } from "formik";
import {
  initialValues,
  validationSchema,
} from "../../../../schemas/radiologyRequestSchema";
import SubmitBtn from "../../../../components/form/SubmitBtn";
import usePatientId from "../../../../hooks/PatientId";
import useEmployeeId from "../../../../hooks/EmployeeId";
import { useRadiologyRequest } from "../../doctor/services/hooks/useDoctorQuery";
import { idProps } from "../../../../utils/types";
import { toast } from "react-toastify";

const RadiologyRequest: React.FC<idProps> = ( { id } ) => {

  const patientId = usePatientId();
  const doctorId = useEmployeeId();

  const mutation = useRadiologyRequest(id)

  const handleSubmit = async (values: any) => {
    values.patientId = parseInt(patientId);
    values.doctorId = parseInt(doctorId);
    try {
      mutation.mutate(values);
    } catch(err: any) {
      toast.error(err);
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
            <Input name="name" label="Radiology Name:" />
            <Input name="description" label="Description" />
            <SubmitBtn BtnTxt="Send Request" disabled={formikProps.isSubmitting} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RadiologyRequest;
