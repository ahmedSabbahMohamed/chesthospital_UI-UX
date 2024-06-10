import { API } from ".";
import { MANAGER_ENDPOINTS } from "./managerEndpoints";
import { jsonApplication } from "../../utils/helpers";

const addEmployee = (data: object) => {
  return API.post(MANAGER_ENDPOINTS.ADD_EMPLOYEE, data, jsonApplication);
};

const deleteEmployee = (id: string) => {
  return API.delete(MANAGER_ENDPOINTS.DELETE_EMPLOYEE(id), jsonApplication);
};

export { addEmployee, deleteEmployee };
