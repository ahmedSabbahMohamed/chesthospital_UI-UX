import { useMutation } from "@tanstack/react-query";
import * as auth from "../api/login";
import { useDispatch } from "react-redux";
import { setEmployeeId } from "../../redux/slices/employeeSlice";
import { toast } from "react-toastify";
import { getErrorWithResponse } from "../../utils/apiError";

const useLoginMutation = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: auth.login,
    onSuccess: (data) => {
      const response = data?.data?.data;
      if (response) {
        localStorage.setItem("token", response?.token);
        localStorage.setItem(
          "specialization",
          response?.employee?.specialization
        );
        dispatch(setEmployeeId(response?.employee?.id));
        window.location.pathname = "/";
      }
    },
    onError: (err) => {
      const error = getErrorWithResponse(err);
      toast.error(error?.response?.data?.message);
    },
  });
};

export { useLoginMutation };
