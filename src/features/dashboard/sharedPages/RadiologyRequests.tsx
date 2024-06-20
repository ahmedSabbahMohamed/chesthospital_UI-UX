import React, { useState } from "react";
import { Case, Default, Switch } from "react-if";
import Loading from "../../../components/ui/Loading";
import {
  useDeleteRadiologyRequest,
  useGetRadiologyRequests,
} from "./services/sharedQueries";
import { getErrorWithResponse } from "../../../utils/apiError";
import { RadiologyRequestRowProps } from "./utils/types";
import Table from "./components/ui/Table";
import Error from "./components/ui/Error";

const RadiologyRequests: React.FC = () => {
  const { data, error, isLoading, refetch } = useGetRadiologyRequests();
  const { mutateAsync } = useDeleteRadiologyRequest();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDeleteRadiologyRequest = async (id: string) => {
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

  const RadiologyRequestRow: React.FC<RadiologyRequestRowProps> = ({
    index,
    request,
    onDelete,
  }) => {
    const isDeleting = deletingId === request.id;

    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{request.patientId}</td>
        <td>{request.name}</td>
        <td>{request.description}</td>
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
        Radiology Requests List
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
              data?.data?.data?.radiologyRequests?.length > 0 &&
              data?.data?.data !== undefined
            }
          >
            <Table
              headers={["ID", "Patient ID", "Name", "Description", "Options"]}
            >
              {data?.data?.data.radiologyRequests.map(
                (request: any, index: number) => (
                  <RadiologyRequestRow
                    key={index}
                    request={request}
                    index={index}
                    onDelete={handleDeleteRadiologyRequest}
                  />
                )
              )}
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

export default RadiologyRequests;
