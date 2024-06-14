import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as SERVICES from "./sharedServices";
import { toast } from "react-toastify";
import { getErrorWithResponse } from "../../../../utils/apiError";
import usePatientId from "../../../../hooks/PatientId";

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

const useGetLabRequests = () => {
  return useQuery({
    queryKey: ["lab-requests"],
    queryFn: SERVICES.getLabRequests,
  });
};

const useDeleteLabRequest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => SERVICES.deleteLabRequest(id),
    onSuccess: () => {
      queryClient.invalidateQueries;
      toast.success("Lab request deleted successfully");
    },
    onError: (err) => {
      const error = getErrorWithResponse(err);
      toast.error(
        error?.response?.data.message || "Failed  to delete lab request"
      );
    },
  });
};

const useGetRadiologyRequests = () => {
  return useQuery({
    queryKey: ["radiology-requests"],
    queryFn: SERVICES.getRadiologyRequests,
  });
};

const useDeleteRadiologyRequest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => SERVICES.deleteRadiologyRequest(id),
    onSuccess: () => {
      queryClient.invalidateQueries;
      toast.success("radiology request deleted successfully");
    },
    onError: (err) => {
      const error = getErrorWithResponse(err);
      toast.error(
        error?.response?.data.message || "Failed  to delete radiology request"
      );
    },
  });
};

const useGetPatient = () => {
  const id = usePatientId();
  return useQuery({
    queryKey: ["patient"],
    queryFn: () => SERVICES.getPatient(id),
    enabled: false,
  });
};

export {
  useGetMedicineRequests,
  useDeleteMedicineRequest,
  useGetMedicines,
  useGetLabRequests,
  useDeleteLabRequest,
  useGetRadiologyRequests,
  useDeleteRadiologyRequest,
  useGetPatient,
};
