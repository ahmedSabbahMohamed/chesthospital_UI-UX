import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as reception from "../api/reception";
import usePatientId from "../../hooks/PatientId";

const useGetPatientData = () => {
  const id = usePatientId()
    return useQuery({
      queryKey: ["patientData"],
      queryFn: () => reception.getPatientData(id),
      enabled: false,
    });
};

const usePostPatientData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: reception.postPatientData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["patientData"] });
    },
  })
}

export { useGetPatientData, usePostPatientData }
