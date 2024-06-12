import { API } from ".";
import { SHARED_ENDPOINTS } from "./sharedEndpoints";

const getMedicineRequests = () => {
  return API.get(SHARED_ENDPOINTS.MEDCINE_REQUESTS);
};

const deleteMedicineRequest = (id: string) => {
  return API.delete(SHARED_ENDPOINTS.DELETE_MEDICINE_REQUEST(id));
};

export { getMedicineRequests, deleteMedicineRequest };
