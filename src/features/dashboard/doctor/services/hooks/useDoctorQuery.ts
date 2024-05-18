import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as docotor from "../api/doctor";
import usePatientId from "../../../../../hooks/PatientId";

const useGetPatientData = () => {
  const id = usePatientId();
  return useQuery({
    queryKey: ["patient"],
    queryFn: () => docotor.getPatientData(id),
    enabled: false,
  });
};

const usePostPatientReport = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: docotor.addPatientReport,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["patient"] });
    },
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
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: docotor.consultationRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["patient"] });
    },
  });
};

const useRadiologyRequest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: docotor.radiologyRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["patient"] });
    },
  });
};

const useMedicineRequest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: docotor.medicineRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["patient"] });
    },
  });
};

const useLabRequest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: docotor.labRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["patient"] });
    },
  });
};

const useOxygenRequest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: docotor.oxygenRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["patient"] });
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
};
