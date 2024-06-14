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
import { useOxygenRequest } from "../../doctor/services/doctorQueries";
import { idProps } from "../../utils/types";
import Input from "../../../../components/form/Input";

const OxygenRequest: React.FC<idProps> = ({ id }) => {
  const patientId = usePatientId();
  const doctorId = useEmployeeId();

  const mutation = useOxygenRequest(id);

  const oxygenLevels = [
    { id: 1, name: "level one" },
    { id: 2, name: "level two" },
    { id: 3, name: "level tjree" },
    { id: 4, name: "level four" },
  ];

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
      console.log(err)
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
          <Form className="flex flex-equal gap-2 flex-col">
            <SelectInput
              label="Oxygen Level"
              isMulti={false}
              options={oxygenLevels}
              name="oxygenLevel"
            />
            <Input label="imbuing" name="imbuing" placeholder="20%" />

            <SubmitBtn BtnTxt="Send Request" disabled={isSubmitting} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OxygenRequest;
