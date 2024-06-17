import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as SERVICES from "./labServices";
import { toast } from "react-toastify";
import { getErrorWithResponse } from "../../../../utils/apiError";

const usePostLabResults = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: SERVICES.postLabResults,
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success("Added results successfully!");
    },
    onError: (err) => {
      const error = getErrorWithResponse(err)?.response?.data.message;
      toast.error(error || "Failed to send the results");
    },
  });
};

export { usePostLabResults };
