import { API } from ".";

const getPatientData = (patientId: string) => {
    return API.get(`/api/reception/${patientId}`);
};

const postPatientData = (patient: object) => {
    return API.post(`/api/reception`, patient);
}

export { getPatientData, postPatientData }
