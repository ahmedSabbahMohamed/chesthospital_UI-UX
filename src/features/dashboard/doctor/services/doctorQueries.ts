import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import usePatientId from "../../../../hooks/PatientId";
import * as SERVICES from "./doctorServices";
import { toast } from "react-toastify";
import { getErrorWithResponse } from "../../../../utils/apiError";

const useGetReports = () => {
  const id = usePatientId();
  return useQuery({
    queryKey: ["patient"],
    queryFn: () => SERVICES.getReports(id),
    enabled: false,
  });
};

const usePostReport = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: SERVICES.addReport,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["patient"] });
      (document.getElementById(id) as HTMLDialogElement)?.close();
      toast.success("added patient report successfully");
    },
    onError: () => {
      (document.getElementById(id) as HTMLDialogElement)?.close();
      toast.error("Failed to send request");
    },
  });
};

const useLabRequest = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: SERVICES.labRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["patient"] });
      (document.getElementById(id) as HTMLDialogElement)?.close();
      toast.success("request sent successfully");
    },
    onError: () => {
      (document.getElementById(id) as HTMLDialogElement)?.close();
      toast.error("Failed to send request");
    },
  });
};

const useRadiologyRequest = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: SERVICES.radiologyRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["patient"] });
      (document.getElementById(id) as HTMLDialogElement)?.close();
      toast.success("request sent successfully");
    },
    onError: () => {
      (document.getElementById(id) as HTMLDialogElement)?.close();
      toast.error("Failed to send request");
    },
  });
};

const useGetMedicine = () => {
  return useQuery({
    queryKey: ["medicine"],
    queryFn: SERVICES.getMedicine,
  });
};

const useMedicineRequest = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: SERVICES.medicineRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["patient"] });
      (document.getElementById(id) as HTMLDialogElement)?.close();
      toast.success("request sent successfully");
    },
    onError: () => {
      (document.getElementById(id) as HTMLDialogElement)?.close();
      toast.error("something went wrong");
    },
  });
};

const useOxygenRequest = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: SERVICES.oxygenRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["patient"] });
      (document.getElementById(id) as HTMLDialogElement)?.close();
      toast.success("request sent successfully");
    },
    onError: (error) => {
      const errorWithResponse = getErrorWithResponse(error);
      (document.getElementById(id) as HTMLDialogElement)?.close();
      toast.error(errorWithResponse?.response?.data?.message || "Failed  to send request");
    },
  });
};

const useExitRequest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: SERVICES.exitRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["patient"] });
    },
  });
};

const useConsultationRequest = (id: string) => {
  return useMutation({
    mutationFn: SERVICES.consultationRequest,
    onSuccess: () => {
      (document.getElementById(id) as HTMLDialogElement)?.close();
      toast.success("request sent successfully");
    },
    onError: (err) => {
      const error = getErrorWithResponse(err);
      (document.getElementById(id) as HTMLDialogElement)?.close();
      toast.error(error?.response?.data?.message || "Failed to send request");
    },
  });
};

export {
  useGetReports,
  usePostReport,
  useLabRequest,
  useRadiologyRequest,
  useGetMedicine,
  useMedicineRequest,
  useOxygenRequest,
  useExitRequest,
  useConsultationRequest,
};
