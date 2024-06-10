import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as SERVICES from "./managerServices";
import { toast } from "react-toastify";
import { getErrorWithResponse } from "../../../../utils/apiError";

const useAddEmployee = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: SERVICES.addEmployee,
    onSuccess: () => {
      queryClient.invalidateQueries;
      toast.success("Added new employee successfully");
    },
    onError: (err) => {
      const error = getErrorWithResponse(err);
      toast.error(
        error?.response?.data?.message.message || "Failed to add new employee"
      );
    },
  });
};

const useDeleteEmployee = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => SERVICES.deleteEmployee(id),
    onSuccess: () => {
      queryClient.invalidateQueries();
      toast.success("Employee deleted successfully");
    },
    onError: (err) => {
      const error = getErrorWithResponse(err);
      toast.error(error.response?.data.message || "Failed to delete employee");
    },
  });
};

export { useAddEmployee, useDeleteEmployee };
