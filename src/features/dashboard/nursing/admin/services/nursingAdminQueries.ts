import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as SERVICES from "./nursingAdminServices";
import { toast } from "react-toastify";
import { getErrorWithResponse } from "../../../../../utils/apiError";

const useGetOxygenRequests = () => {
  return useQuery({
    queryKey: ["oxygen-requests"],
    queryFn: SERVICES.getOxygenRequests,
  });
};

const useDeleteOxygenRequest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => SERVICES.deleteOxygenRequest(id),
    onSuccess: () => {
      queryClient.invalidateQueries;
      toast.success("Oxygen request deleted successfully");
    },
    onError: (err) => {
      const error = getErrorWithResponse(err);
      toast.error(
        error?.response?.data.message || "Failed  to delete Oxygen request"
      );
    },
  });
};

export { useGetOxygenRequests, useDeleteOxygenRequest };
