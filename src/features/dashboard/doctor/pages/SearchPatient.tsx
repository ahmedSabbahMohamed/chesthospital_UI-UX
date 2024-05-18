import React from "react";
import SearchPatientForm from "../../components/form/SearchPatientForm";
import { Case, Switch } from "react-if";
import Loading from "../../../../components/ui/Loading";
import { useGetPatientData } from "../services/hooks/useDoctorQuery";
import { getErrorWithResponse } from "../../../../utils/apiError";
import MedicalRecord from "../../components/ui/MedicalRecord";

const SearchPatient: React.FC = () => {
  const { data, refetch, error, isLoading } = useGetPatientData();

  const handleSubmit = async () => {
    try {
      await refetch();
    } catch (err) {
      console.log("error while searching for patient;", err);
    }
  };

  const errorWithResponse = getErrorWithResponse(error);
  // const patientData = data?.data?.data;

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <SearchPatientForm
        BtnTxt="Search"
        label="Patient ID"
        disabled={isLoading}
        handleSubmit={handleSubmit}
      />
      <div className="flex flex-col items-center mt-5 w-full px-2 lg:px-5">
        <Switch>
          <Case condition={isLoading}>
            <Loading />
          </Case>
          <Case
            condition={
              errorWithResponse !== null && errorWithResponse !== undefined
            }
          >
            <h3 className="text-error">
              {errorWithResponse?.response?.data?.message}
            </h3>
          </Case>
          <Case condition={data && data?.data?.status === "success"}>
            <div className="w-full">
              <MedicalRecord />
              <div className="flex flex-wrap items-center justify-star t gap-2 my-4 px-2">
                <button className="btn btn-neutral text-white text-bold">
                  Add Report
                </button>
                <button className="btn bg-primary text-white text-bold">
                  Lab Request
                </button>
                <button className="btn btn-warning text-white text-bold">
                  Medicine Request
                </button>
                <button className="btn btn-error text-white text-bold">
                  OxygenRequest
                </button>
                <button className="btn bg-semiDark text-white text-bold">
                  Radiology Request
                </button>
              </div>
            </div>
          </Case>
        </Switch>
      </div>
    </div>
  );
};

export default SearchPatient;
