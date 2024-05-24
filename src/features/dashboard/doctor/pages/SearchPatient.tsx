import React from "react";
import SearchPatientForm from "../../components/form/SearchPatientForm";
import { Case, Switch } from "react-if";
import Loading from "../../../../components/ui/Loading";
import { useGetPatientData } from "../services/hooks/useDoctorQuery";
import { getErrorWithResponse } from "../../../../utils/apiError";
import MedicalRecord from "../../components/ui/MedicalRecord";
import Modal from "../../components/ui/Modal";
import { DoctorReport, LabRequest, MedicineRequest, OxygenRequest, RadiologyRequest } from "../../index";

const SearchPatient: React.FC = () => {
  const { data, refetch, error, isLoading } = useGetPatientData();
  
  const handleSubmit = async () => {
    try {
      await refetch();
    } catch (err) {
      console.log("error while searching for patient;", err);
    }
  };

  const requests = [
    {
      id: 1,
      btnTxt: "Add Report",
      btnColor: "btn-neutral",
      component: <DoctorReport id="" />,
    },
    {
      id: 2,
      btnTxt: "Lab Request",
      btnColor: "bg-primary",
      component: <LabRequest id="" />,
    },
    {
      id: 3,
      btnTxt: "Medicine Request",
      btnColor: "btn-warning",
      component: <MedicineRequest id="" />,
    },
    {
      id: 4,
      btnTxt: "Oxygen Request",
      btnColor: "btn-error",
      component: <OxygenRequest id="" />,
    },
    {
      id: 5,
      btnTxt: "Radiology Request",
      btnColor: "bg-semiDark",
      component: <RadiologyRequest id="" />,
    },
  ];

  const errorWithResponse = getErrorWithResponse(error);
  const patientData = data?.data?.data;

  return (
    <div className="flex flex-col items-center justify-center w-full py-5">
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
              <MedicalRecord
                patientName={patientData?.patient.name}
                reports={patientData?.reports}
                labs={patientData?.labs}
                radiologies={patientData?.radiologies}
              />
              <div className="flex flex-wrap items-center justify-star t gap-2 my-4 px-2">
                {requests?.map((request) => {
                  return (
                    <Modal
                      key={request.id}
                      id={`modal-${request.id}`}
                      heading={request.btnTxt}
                      openButton={request.btnTxt}
                      styles={request.btnColor}
                    >
                      {React.cloneElement(request.component, {id: `modal-${request.id}`})}
                    </Modal>
                  );
                })}
              </div>
            </div>
          </Case>
        </Switch>
      </div>
    </div>
  );
};

export default SearchPatient;
