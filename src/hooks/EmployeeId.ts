import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const useEmployeeId = () => {
  const employeeId = useSelector((state: RootState) => state.employeeId.id);
  return employeeId;
};

export default useEmployeeId;
