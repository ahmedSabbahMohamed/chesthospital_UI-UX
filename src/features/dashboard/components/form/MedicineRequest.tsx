import { Form, Formik } from "formik";
import React from "react";
import {
  initialValues,
  validationSchema,
} from "../../../../schemas/medicineRequestSchema";
import SubmitBtn from "../../../../components/form/SubmitBtn";
import SelectInput from "../../../../components/form/SelectInput";
import { useGetMedicine, useMedicineRequest } from "../../doctor/services/hooks/useDoctorQuery";
import usePatientId from "../../../../hooks/PatientId";
import useEmployeeId from "../../../../hooks/EmployeeId";
import { idProps } from "../../../../utils/types";
import { toast } from "react-toastify";

const MedicineRequest: React.FC<idProps> = ({ id }) => {
  const { data } = useGetMedicine();
  const mutation = useMedicineRequest(id);
  const patientId = usePatientId();
  const doctorId = useEmployeeId();

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
            <SelectInput
              options={data?.data.data || []}
              name="medicine"
              isMulti={true}
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

export default MedicineRequest;
