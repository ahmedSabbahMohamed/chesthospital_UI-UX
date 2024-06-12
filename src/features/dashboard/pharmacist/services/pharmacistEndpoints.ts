export const PHARMACIST_ENDPOINTS = {
    ADD_MEDICINE: '',
    SEARCH_MEDICNE: (query: string) => `/search?q=${query}`,
    DELETE_MEDICINE: (id: string) => `/${id}`,
};