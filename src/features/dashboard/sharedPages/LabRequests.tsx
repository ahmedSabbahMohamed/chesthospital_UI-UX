import React from "react";
import { Case, Default, Switch } from "react-if";
import Loading from "../../../components/ui/Loading";
import { useDeleteLabRequest, useGetLabRequests } from "./services/sharedQueries";
import { getErrorWithResponse } from "../../../utils/apiError";

const LabRequests: React.FC = () => {

  const { data, error, isLoading } = useGetLabRequests();
  const { mutateAsync } = useDeleteLabRequest();

  const message = getErrorWithResponse(error);

  const handleDeleteLabRequest = async (id: string) => {
    try {
      await mutateAsync(id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2 className="text-xl text-dark text-center font-bold my-5">
        Lab Requests List
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
              data?.data?.data?.requests?.length > 0 &&
              data?.data?.data !== undefined
            }
          >
            <div className="overflow-x-auto px-2">
              <table className="table table-xs sm:table-sm md:table-lg bg-white overflow-hidden">
                <thead className="bg-dark text-white">
                  <tr>
                    <th>ID</th>
                    <th>Patient ID</th>
                    <th>Lab Name</th>
                    <th>Lab Description</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.data.requests.map(
                    (request: any, index: number) => {
                      return (
                        <tr key={index}>
                          <th>{index + 1}</th>
                          <td>{request.patientId}</td>
                          <td className="flex flex-row flex-wrap gap-2">
                            {request.name}
                          </td>
                          <td>{request.description}</td>
                          <td>
                            <button
                              onClick={() => handleDeleteLabRequest(request.id)}
                              className="rounded bg-error text-white font-bold py-2 px-4"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </div>
          </Case>
        </Switch>
      </div>
    </div>
  );
};

export default LabRequests;
