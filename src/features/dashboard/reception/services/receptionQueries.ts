import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import usePatientId from "../../../../hooks/PatientId";
import * as SERVICES from "./receptionServices";
import { toast } from "react-toastify";
import { getErrorWithResponse } from "../../../../utils/apiError";
import { useNavigate } from "react-router-dom";

const useGetPatient = () => {
  const id = usePatientId();
  return useQuery({
    queryKey: ["patient", id],
    queryFn: () => SERVICES.getPatient(id),
    enabled: false,
  });
};

const usePostPatient = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: SERVICES.addPatient,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["patient"] });
      navigate("/");
      toast.success("Patient added successfully");
    },
    onError: (error) => {
      const errorWithResponse = getErrorWithResponse(error);
      toast.error(
        errorWithResponse.response?.data.message || "Faild to add patient file"
      );
    },
  });
};

export { useGetPatient, usePostPatient };
