import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const usePatientId = () => {
  const { id } = useSelector((state: RootState) => state.id);
  return id;
};

export default usePatientId;
