import { useMutation } from "@tanstack/react-query";
import * as auth from "../api/login";
import { useDispatch } from "react-redux";
import { setEmplyeeId } from "../../redux/slices/employeeSlice";

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
        dispatch(setEmplyeeId(response?.employee?.id));
        window.location.pathname = "/";
      }
    },
    onError: (error: any) => {
      console.log("login error", error);
    },
  });
};

export { useLoginMutation };
