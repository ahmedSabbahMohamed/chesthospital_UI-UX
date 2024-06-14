import React from "react";
import {
  useDeleteMedicineRequest,
  useGetMedicineRequests,
  useGetMedicines,
} from "./services/sharedQueries";
import { getErrorWithResponse } from "../../../utils/apiError";
import { Case, Default, Switch } from "react-if";
import Loading from "../../../components/ui/Loading";

const MedicineRequestsList: React.FC = () => {
  const { data, error, isLoading } = useGetMedicineRequests();
  const { data: medicinesList } = useGetMedicines();
  const { mutateAsync } = useDeleteMedicineRequest();

  const handleDeleteMedicineRequest = async (id: string) => {
    try {
      await mutateAsync(id);
    } catch (err) {
      console.log(err);
    }
  };

  const message = getErrorWithResponse(error);
  return (
    <div>
      <h2 className="text-xl text-dark text-center font-bold my-5">
        Medicine Requests List
      </h2>
      <div className="mb-3">
        <Switch>
          <Default>
            <h3 className="text-error text-center">No Requests</h3>
          </Default>
          <Case condition={isLoading}>
            <Loading />
          </Case>
          <Case condition={error !== undefined && error !== null}>
            <h3 className="text-error text-center">
              Error: {message?.response?.data.message}
            </h3>
          </Case>
          <Case
            condition={
              data?.data?.data?.length > 0 && data?.data?.data !== undefined
            }
          >
            <div className="overflow-x-auto">
              <table className="table table-xs sm:table-sm md:table-lg bg-white overflow-hidden">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>ID</th>
                    <th>Patient ID</th>
                    <th>Medicne</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.data.map((request: any, index: number) => {
                    const medicines = [...request.medicine];
                    console.log(medicines);
                    return (
                      <tr key={index}>
                        <th>{index + 1}</th>
                        <td>{request.patientId}</td>
                        <td className="flex flex-row flex-wrap gap-2">
                          {medicines.map((medicine, index) => {
                            return (
                              <span
                                key={index}
                                className="bg-light py-1 px-2 rounded"
                              >
                                {
                                  medicinesList?.data?.data.find(
                                    (med: any) => med.id === medicine
                                  ).name
                                }
                              </span>
                            );
                          })}
                        </td>
                        <td>
                          <button
                            onClick={() =>
                              handleDeleteMedicineRequest(request.id)
                            }
                            className="rounded bg-error text-white font-bold py-2 px-4"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Case>
        </Switch>
      </div>
    </div>
  );
};

export default MedicineRequestsList;
