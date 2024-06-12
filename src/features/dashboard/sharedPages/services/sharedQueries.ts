import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as SERVICES from "./sharedServices";
import { toast } from "react-toastify";
import { getErrorWithResponse } from "../../../../utils/apiError";

const useGetMedicineRequests = () => {
  return useQuery({
    queryKey: ["medicineRequests"],
    queryFn: SERVICES.getMedicineRequests,
  });
};

const useDeleteMedicineRequest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => SERVICES.deleteMedicineRequest(id),
    onSuccess: () => {
      queryClient.invalidateQueries;
      toast.success("Medicine request deleted successfully");
    },
    onError: (err) => {
      const error = getErrorWithResponse(err);
      toast.error(
        error?.response?.data.message || "Failed  to delete medicine request"
      );
    },
  });
};

const useGetMedicines = () => {
  return useQuery({
    queryKey: ["medicines"],
    queryFn: SERVICES.getMedicines,
  });
};

export { useGetMedicineRequests, useDeleteMedicineRequest, useGetMedicines };
