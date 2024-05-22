import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as docotor from "../api/doctor";
import usePatientId from "../../../../../hooks/PatientId";
import { toast } from "react-toastify";
import { getErrorWithResponse } from "../../../../../utils/apiError";

const useGetPatientData = () => {
  const id = usePatientId();
  return useQuery({
    queryKey: ["patient"],
    queryFn: () => docotor.getPatientData(id),
    enabled: false,
  });
};

const usePostPatientReport = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: docotor.addPatientReport,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["patient"] });
      (document.getElementById(id) as HTMLDialogElement)?.close();
      toast.success("added patient report successfully");
    },
    onError: () => {
      (document.getElementById(id) as HTMLDialogElement)?.close();
      toast.error("something went wrong");
    },
  });
};

const useLabRequest = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: docotor.labRequest,
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

const useRadiologyRequest = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: docotor.radiologyRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["patient"] });
      (document.getElementById(id) as HTMLDialogElement)?.close();
      toast.success("request sent successfully");
    },
    onError: () => {
      (document.getElementById(id) as HTMLDialogElement)?.close();
      toast.error("some thing went wrong");
    },
  });
};

const useGetMedicine = () => {
  return useQuery({
    queryKey: ["medicine"],
    queryFn: docotor.getMedicine,
  });
};

const useExitRequest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: docotor.exitRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["patient"] });
    },
  });
};

const useConsultationRequest = () => {
  return useMutation({
    mutationFn: docotor.consultationRequest,
    onSuccess: () => {
      toast.success("request sent successfully");
    },
    onError: (err) => {
      const error = getErrorWithResponse(err);
      toast.error(error?.response?.data?.message);
    },
  });
};

const useMedicineRequest = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: docotor.medicineRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["patient"] });
      (document.getElementById(id) as HTMLDialogElement)?.close();
      toast.success("request sent successfully");
    },
    onError: (error) => {
      (document.getElementById(id) as HTMLDialogElement)?.close();
      console.log(error)
      toast.error("something went wrong");
    },
  });
};

const useOxygenRequest = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: docotor.oxygenRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["patient"] });
      (document.getElementById(id) as HTMLDialogElement)?.close();
      toast.success("request sent successfully");
    },
    onError: (error) => {
      const errorWithResponse = getErrorWithResponse(error);
      (document.getElementById(id) as HTMLDialogElement)?.close();
      toast.error(errorWithResponse?.response?.data?.message)
    },
  });
};

export {
  useGetPatientData,
  useConsultationRequest,
  usePostPatientReport,
  useExitRequest,
  useRadiologyRequest,
  useMedicineRequest,
  useLabRequest,
  useOxygenRequest,
  useGetMedicine,
};
