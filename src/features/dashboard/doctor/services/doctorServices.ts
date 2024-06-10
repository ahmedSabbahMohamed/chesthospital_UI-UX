import { API } from ".";
import { DOCTOR_ENDPOINTS } from "./doctorEndpoints";
import { jsonApplication } from "../../utils/helpers";

const getReports = (id: string) => {
  return API.get(DOCTOR_ENDPOINTS.GET_REPORT(id));
};

const addReport = (report: object) => {
  return API.post(DOCTOR_ENDPOINTS.POST_REPORT, report, jsonApplication);
};

const labRequest = (request: object) => {
  return API.post(DOCTOR_ENDPOINTS.LAB_REQUEST, request, jsonApplication);
};

const radiologyRequest = (request: object) => {
  return API.post(DOCTOR_ENDPOINTS.RADIOLOGY_REQUEST, request, jsonApplication);
};

const getMedicine = () => {
  return API.get(DOCTOR_ENDPOINTS.GET_MEDICINE);
};

const medicineRequest = (request: object) => {
  return API.post(DOCTOR_ENDPOINTS.MEDICINE_REQUEST, request, jsonApplication);
};

const oxygenRequest = (request: object) => {
  return API.post(DOCTOR_ENDPOINTS.OXYGEN_REQUEST, request, jsonApplication);
};

const exitRequest = (request: object) => {
  return API.post(DOCTOR_ENDPOINTS.EXIT_REQUEST, request);
};

const consultationRequest = (request: object) => {
  return API.post(
    DOCTOR_ENDPOINTS.CONSULTATION_REQUEST,
    request,
    jsonApplication
  );
};

export {
  getReports,
  addReport,
  labRequest,
  radiologyRequest,
  getMedicine,
  medicineRequest,
  oxygenRequest,
  exitRequest,
  consultationRequest,
};
