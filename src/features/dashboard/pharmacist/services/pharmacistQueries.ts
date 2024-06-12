import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as SERVICES from "./pharmacistServices";
import { toast } from "react-toastify";
import { getErrorWithResponse } from "../../../../utils/apiError";

const usePostMedicine = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: SERVICES.addMedicine,
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success("Medicine added successfully");
    },
    onError: (err) => {
      const error = getErrorWithResponse(err);
      toast.error(error?.response?.data.message);
    },
  });
};

const useSearchMedicine = (searchTerm: string) => {
  return useQuery({
    queryKey: ["searchMedicine", searchTerm],
    queryFn: () => SERVICES.searchMedicine(searchTerm),
    enabled: false,
  });
};

const useDeleteMedicine = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => SERVICES.deleteMedicine(id),
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success("Medicine deleted successfully");
    },
    onError: (err) => {
      const error = getErrorWithResponse(err);
      toast.error(error?.response?.data.message || "Failed to delete medicine");
    },
  });
};

export { usePostMedicine, useSearchMedicine, useDeleteMedicine };
