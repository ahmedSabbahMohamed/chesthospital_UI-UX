import React from "react";
import {
  useDeleteMedicineRequest,
  useGetMedicineRequests,
} from "./services/sharedQueries";
import { getErrorWithResponse } from "../../../utils/apiError";
import { Case, Default, Switch } from "react-if";
import Loading from "../../../components/ui/Loading";

const MedicineRequestsList: React.FC = () => {
  const { data, error, isLoading } = useGetMedicineRequests();
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
          <Case condition={data?.data?.data?.length > 0}>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.data.map((request: any, index: number) => (
                    <tr>
                      <th>{index + 1}</th>
                      <td>{request.id}</td>
                      <td>{request.medicine}</td>
                      <td>
                        <button
                          onClick={() =>
                            handleDeleteMedicineRequest(request.id)
                          }
                          className="rounded bg-error text-white font-bold"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
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
