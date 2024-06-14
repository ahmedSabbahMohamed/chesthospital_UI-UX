import { API } from ".";
import { SHARED_ENDPOINTS } from "./sharedEndpoints";

const getMedicineRequests = () => {
  return API.get(SHARED_ENDPOINTS.MEDCINE_REQUESTS);
};

const deleteMedicineRequest = (id: string) => {
  return API.delete(SHARED_ENDPOINTS.DELETE_MEDICINE_REQUEST(id));
};

const getMedicines = () => {
  return API.get(SHARED_ENDPOINTS.GET_MEDICINES);
};

const getLabRequests = () => {
  return API.get(SHARED_ENDPOINTS.LAB_REQUESTS);
};

const deleteLabRequest = (id: string) => {
  return API.delete(SHARED_ENDPOINTS.DELETE_LAB_REQUEST(id));
};

const getRadiologyRequests = () => {
  return API.get(SHARED_ENDPOINTS.RADIIOLOGY_REQUESTS);
};

const deleteRadiologyRequest = (id: string) => {
  return API.delete(SHARED_ENDPOINTS.DELETE_RADIOLOGY_REQUEST(id));
};

const getPatient = (id: string) => {
  return API.get(SHARED_ENDPOINTS.GET_PATIENT(id));
}

export {
  getMedicineRequests,
  deleteMedicineRequest,
  getMedicines,
  getLabRequests,
  deleteLabRequest,
  getRadiologyRequests,
  deleteRadiologyRequest,
  getPatient,
};
