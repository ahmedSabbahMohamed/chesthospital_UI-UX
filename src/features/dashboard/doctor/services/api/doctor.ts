import { API } from ".";

const getPatientData = (patientId: string) => {
  return API.get(`/api/doctor/${patientId}`);
};

const addPatientReport = (report: object) => {
  return API.post(`/api/doctor/report`, report);
};

const exitRequest = (request: object) => {
  return API.post(`/api/doctor/exit-request`, request);
};

const consultationRequest = (request: object) => {
  return API.post(`/api/doctor/consultation`, request);
};

const radiologyRequest = (request: object) => {
  return API.post(`/api/doctor/radiology`, request);
};

const medicineRequest = (request: object) => {
  return API.post(`/api/doctor/medicine`, request);
};

const labRequest = (request: object) => {
  return API.post(`/api/doctor/lab`, request);
};

const oxygenRequest = (request: object) => {
  return API.post(`/api/doctor/oxygen`, request);
};

export {
  getPatientData,
  addPatientReport,
  exitRequest,
  consultationRequest,
  radiologyRequest,
  medicineRequest,
  labRequest,
  oxygenRequest,
};
