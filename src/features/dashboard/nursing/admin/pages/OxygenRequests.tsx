import React, { useState } from "react";
import {
  useGetOxygenRequests,
  useDeleteOxygenRequest,
} from "../services/nursingAdminQueries";
import { getErrorWithResponse } from "../../../../../utils/apiError";
import { Case, Switch, Default } from "react-if";
import Loading from "../../../../../components/ui/Loading";
import Error from "../../../sharedPages/components/ui/Error";
import { OxygenRequestRowProps } from "../../utils/types";
import Table from "../../../sharedPages/components/ui/Table";

const OxygenRequests: React.FC = () => {
  const { data, error, isLoading, refetch } = useGetOxygenRequests();
  const { mutateAsync } = useDeleteOxygenRequest();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelelteOxygenRequest = async (id: string) => {
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

  const OxygenRequestRow: React.FC<OxygenRequestRowProps> = ({
    index,
    request,
    onDelete,
  }) => {
    const isDeleting = deletingId === request.id;

    return (
      <tr key={index}>
        <th>{index + 1}</th>
        <td>{request.patientId}</td>
        <td className="flex flex-row flex-wrap gap-2">
          <span className="bg-light rounded-md py-1 px-2">
            {request.oxygenLevel}
          </span>
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
        Oxygen Requests List
      </h2>
      <div className="mb-3">
        <Switch>
          <Case condition={isLoading}>
            <Loading />
          </Case>
          <Case condition={error !== undefined && error !== null}>
            <Error message={message || "An error occurred"} />
          </Case>
          <Case condition={data?.data?.data?.requests.length > 0}>
            <Table headers={["ID", "Patient ID", "Oxygen Level", "Options"]}>
              {data?.data?.data.requests.map((request: any, index: number) => (
                <OxygenRequestRow
                  key={index}
                  request={request}
                  index={index}
                  onDelete={handleDelelteOxygenRequest}
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

export default OxygenRequests;
