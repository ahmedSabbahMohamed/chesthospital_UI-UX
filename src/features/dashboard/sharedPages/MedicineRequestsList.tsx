import React, { useState } from "react";
import {
  useDeleteMedicineRequest,
  useGetMedicineRequests,
  useGetMedicines,
} from "./services/sharedQueries";
import { getErrorWithResponse } from "../../../utils/apiError";
import { Case, Default, Switch } from "react-if";
import Loading from "../../../components/ui/Loading";
import { MedicineRequestRowProps } from "./utils/types";
import Error from "./components/ui/Error";
import Table from "./components/ui/Table";

const MedicineRequestsList: React.FC = () => {
  const { data, error, isLoading, refetch } = useGetMedicineRequests();
  const { data: medicinesList } = useGetMedicines();
  const { mutateAsync } = useDeleteMedicineRequest();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDeleteMedicineRequest = async (id: string) => {
    setDeletingId(id);
    try {
      await mutateAsync(id);
      await refetch();
    } catch (err) {
      console.log(err);
    } finally {
      setDeletingId(null);
    }
  };
  const message = getErrorWithResponse(error)?.response?.data.message;

  const MedicineRequestRow: React.FC<MedicineRequestRowProps> = ({
    request,
    medicinesList,
    index,
    onDelete,
  }) => {
    const medicines = [...request.medicine];
    const isDeleting = deletingId === request.id;

    return (
      <tr key={index}>
        <th>{index + 1}</th>
        <td>{request.patientId}</td>
        <td className="flex flex-row flex-wrap gap-2">
          {medicines.map((medicine, i) => {
            const medicineData = medicinesList?.data?.data.find(
              (med: any) => med.id === medicine
            );
            return (
              <span key={i} className="bg-light py-1 px-2 rounded">
                {medicineData ? medicineData.name : "Unknown"}
              </span>
            );
          })}
        </td>
        <td>
          <button
            onClick={() => onDelete(request.id)}
            disabled={isDeleting}
            className={`rounded bg-error text-white font-bold py-2 px-4 ${
              isDeleting ? "cursor-not-allowed" : ""
            }`}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <h2 className="text-xl text-dark text-center font-bold my-5">
        Medicine Requests List
      </h2>
      <div className="mb-3">
        <Switch>
          <Case condition={isLoading}>
            <Loading />
          </Case>
          <Case condition={error !== undefined && error !== null}>
            <Error message={message || "An error occurred"} />
          </Case>
          <Case
            condition={
              data?.data?.data?.length > 0 && data?.data?.data !== undefined
            }
          >
            <Table headers={["ID", "Patient ID", "Medicine", "Options"]}>
              {data?.data?.data.map((request: any, index: number) => (
                <MedicineRequestRow
                  key={index}
                  request={request}
                  medicinesList={medicinesList}
                  index={index}
                  onDelete={handleDeleteMedicineRequest}
                />
              ))}
            </Table>
          </Case>
          <Default>
            <h3 className="text-error text-center">No Requests</h3>
          </Default>
        </Switch>
      </div>
    </div>
  );
};

export default MedicineRequestsList;
