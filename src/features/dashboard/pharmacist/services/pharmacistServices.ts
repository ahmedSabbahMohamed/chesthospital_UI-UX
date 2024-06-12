import { API } from ".";
import { PHARMACIST_ENDPOINTS } from "./pharmacistEndpoints";
import { jsonApplication } from "../../utils/helpers";

const addMedicine = (data: object) => {
  return API.post(PHARMACIST_ENDPOINTS.ADD_MEDICINE, data, jsonApplication);
};

const searchMedicine = (query: string) => {
  return API.get(PHARMACIST_ENDPOINTS.SEARCH_MEDICNE(query));
};

const deleteMedicine = (id: string) => {
  return API.delete(PHARMACIST_ENDPOINTS.DELETE_MEDICINE(id));
};

export { addMedicine, searchMedicine, deleteMedicine };
