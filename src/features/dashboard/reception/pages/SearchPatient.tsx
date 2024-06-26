import React, { useState } from "react";
import { Case, Switch } from "react-if";
import SearchPatientForm from "../../components/form/SearchPatientForm";
import NotFoundPatient from "../components/ui/NotFoundPatient";
import PatientData from "../components/ui/PatientData";
import Loading from "../../../../components/ui/Loading";
import { getErrorWithResponse } from "../../../../utils/apiError";
import { useGetPatient } from "../services/receptionQueries";
import { toast } from "react-toastify";

const SearchPatient: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { data, refetch, error } = useGetPatient();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await refetch();
    } catch (err) {
      toast.error("Error when get patient" || err)
    } finally {
      setLoading(false);
    }
  };

  const errorWithResponse = getErrorWithResponse(error);
  const patientData = data?.data?.data.patient;
  console.log(patientData)

  return (
    <div className="flex flex-col items-center justify-center">
      <SearchPatientForm
        BtnTxt="يبحث"
        label="الرقم الوطني للمريض"
        disabled={loading}
        handleSubmit={handleSubmit}
      />
      <div className="flex flex-col items-center mt-5">
        <Switch>
          <Case condition={loading}>
            <Loading />
          </Case>
          <Case
            condition={
              errorWithResponse !== null && errorWithResponse !== undefined
            }
          >
            <NotFoundPatient
              message={errorWithResponse?.response?.data?.message}
            />
          </Case>
          <Case condition={data && data?.data?.status === "success"}>
            <PatientData
              id={patientData?.id}
              name={patientData?.name}
              phone={patientData?.phone}
            />
          </Case>
        </Switch>
      </div>
    </div>
  );
};

export default SearchPatient;
