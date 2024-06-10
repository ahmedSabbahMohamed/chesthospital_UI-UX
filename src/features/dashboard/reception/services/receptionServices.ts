import { API } from ".";
import { RECEPTION_ENDPOINTS } from "./receptionEndpoints";
import { jsonApplication } from "../../utils/helpers";

const getPatient = (id: string) => {
  return API.get(RECEPTION_ENDPOINTS.GET_PATIENT(id));
};

const addPatient = (data: object) => {
  return API.post(RECEPTION_ENDPOINTS.POST_PATIENT, data, jsonApplication);
};

export { getPatient, addPatient };
