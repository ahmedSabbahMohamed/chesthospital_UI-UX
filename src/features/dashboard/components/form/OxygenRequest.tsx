import { Form, Formik } from "formik";
import React from "react";
import {
  initialValues,
  validationSchema,
} from "../../../../schemas/oxygenRequestSchema";
import SubmitBtn from "../../../../components/form/SubmitBtn";
import SelectInput from "../../../../components/form/SelectInput";
import usePatientId from "../../../../hooks/PatientId";
import useEmployeeId from "../../../../hooks/EmployeeId";
import { useOxygenRequest } from "../../doctor/services/hooks/useDoctorQuery";
import { idProps } from "../../../../utils/types";
import { toast } from "react-toastify";

const OxygenRequest: React.FC<idProps> = ({ id }) => {

  const patientId = usePatientId();
  const doctorId = useEmployeeId();

  const mutation = useOxygenRequest(id);

const oxygenLevels = [
  { id: 1 , name: "level one" },
  { id: 2 , name: "level two" },
  { id: 3 , name: "level tjree" },
  { id: 4 , name: "level four" },
];

  const handleSubmit = async (values: any) => {
    values.patientId = parseInt(patientId);
    values.doctorId = parseInt(doctorId);
    try {
      mutation.mutate(values);
    } catch(err: any) {
      toast.error(err)
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
            <SelectInput
              isMulti={false}
              options={oxygenLevels}
              name="oxygenLevel"
            />
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

export default OxygenRequest;
