import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import SelectInput from "../../../../components/form/SelectInput";
import SubmitBtn from "../../../../components/form/SubmitBtn";
import {
  initialValues,
  validationSchema,
} from "../../../../schemas/medicineRequestSchema";
import usePatientId from "../../../../hooks/PatientId";
import useEmployeeId from "../../../../hooks/EmployeeId";
import {
  useGetMedicine,
  useMedicineRequest,
} from "../../doctor/services/doctorQueries";
import { idProps } from "../../utils/types";
import { toast } from "react-toastify";
import { getErrorWithResponse } from "../../../../utils/apiError";
import Input from "../../../../components/form/Input";

const MedicineRequest: React.FC<idProps> = ({ id }) => {
  const [medicine, setMedicine] = useState([]);
  const patientId = usePatientId();
  const doctorId = useEmployeeId();
  const { data } = useGetMedicine();
  const mutation = useMedicineRequest(id);

  const handleSubmit = async (
    values: typeof initialValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    const requestValues = {
      medicine: values.medicine,
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

  const names = medicine
    .map((name) => {
      const matchedObject = data?.data?.data.find(
        (obj: any) => obj.id === name
      );
      return matchedObject ? matchedObject.name : null;
    })
    .filter((name) => name !== null);

  return (
    <div className="flex items-center flex-col">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values }) => {
          useEffect(() => {
            setMedicine(values?.medicine);
          }, [values.medicine]);
          // console.log(values);
          return (
            <Form className="flex flex-equal gap-2 items-center justify-center flex-col">
              <SelectInput
                label="Medicine"
                options={data?.data.data || []}
                name="medicine"
                isMulti={true}
              />

              {medicine.length >= 1 && (
                <div className="overflow-x-auto">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Medicine</th>
                        <th>one</th>
                        <th>two</th>
                      </tr>
                    </thead>
                    <tbody>
                      {names.map((name, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{name}</td>
                          <td>
                            <Input label="" name={`${name}-one`} />
                          </td>
                          <td>
                            <Input label="" name={`${name}-two`} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {medicine.length >= 1 && (
                <SubmitBtn BtnTxt="Send Request" disabled={isSubmitting} />
              )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default MedicineRequest;
