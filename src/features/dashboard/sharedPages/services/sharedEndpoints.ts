export const SHARED_ENDPOINTS = {
  MEDCINE_REQUESTS: "/medicine-requests",
  DELETE_MEDICINE_REQUEST: (id: string) => `/medicine-requests/${id}`,
  GET_MEDICINES: "/medicines",
  LAB_REQUESTS: "/lab-requests",
  DELETE_LAB_REQUEST: (id: string) => `/lab-requests/${id}`,
  RADIIOLOGY_REQUESTS: "/radiology-requests",
  DELETE_RADIOLOGY_REQUEST: (id: string) => `/radiology-requests/${id}`,
  GET_PATIENT: (id: string) => `/patients/${id}`,
};
